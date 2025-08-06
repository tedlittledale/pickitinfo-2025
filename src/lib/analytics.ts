import { DataProtectionManager } from './data-protection'

declare global {
  interface Window {
    gtag: (...args: any[]) => void
    dataLayer: any[]
  }
}

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || 'GA_MEASUREMENT_ID'

// Privacy-compliant Google Analytics class
class PrivacyCompliantAnalytics {
  private initialized = false
  private consentGiven = false

  constructor() {
    if (typeof window !== 'undefined') {
      this.checkConsent()
      this.listenForConsentChanges()
    }
  }

  // Check if analytics consent is given
  private checkConsent(): void {
    this.consentGiven = DataProtectionManager.isCookieAccepted('analytics')
    if (this.consentGiven && !this.initialized) {
      this.initializeGoogleAnalytics()
    } else if (!this.consentGiven && this.initialized) {
      this.disableAnalytics()
    }
  }

  // Listen for consent changes
  private listenForConsentChanges(): void {
    window.addEventListener('cookieConsentChanged', () => {
      this.checkConsent()
    })
  }

  // Initialize Google Analytics with privacy settings
  private initializeGoogleAnalytics(): void {
    if (this.initialized || typeof window === 'undefined' || !GA_TRACKING_ID) return

    // Load Google Analytics script
    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`
    document.head.appendChild(script)

    // Initialize gtag
    window.dataLayer = window.dataLayer || []
    window.gtag = function gtag() {
      window.dataLayer.push(arguments)
    }

    // Configure with privacy-compliant settings
    window.gtag('js', new Date())
    window.gtag('config', GA_TRACKING_ID, {
      // Privacy settings
      anonymize_ip: true,
      cookie_expires: 63072000, // 2 years in seconds
      cookie_domain: 'auto',
      cookie_flags: 'SameSite=None;Secure',
      
      // Data collection settings
      allow_google_signals: false, // Disable advertising features
      allow_ad_personalization_signals: false,
      
      // Custom settings
      send_page_view: true,
      cookie_prefix: 'pickit',
      
      // Debug mode (only in development)
      debug_mode: process.env.NODE_ENV === 'development'
    })

    // Set user properties for privacy compliance
    window.gtag('set', {
      privacy_policy_accepted: true,
      data_processing_consent: true,
      analytics_storage: 'granted',
      ad_storage: 'denied'
    })

    this.initialized = true
    console.log('Google Analytics initialized with privacy-compliant settings')
  }

  // Disable analytics tracking
  private disableAnalytics(): void {
    if (typeof window === 'undefined') return

    if (window.gtag) {
      // Disable data collection
      window.gtag('config', GA_TRACKING_ID, {
        send_page_view: false,
        analytics_storage: 'denied'
      })
      
      // Clear existing analytics cookies
      this.clearAnalyticsCookies()
    }

    console.log('Google Analytics disabled due to consent withdrawal')
  }

  // Clear analytics cookies
  private clearAnalyticsCookies(): void {
    const cookiesToClear = ['_ga', '_ga_*', '_gid', '_gat', '_gat_*']
    
    cookiesToClear.forEach(cookieName => {
      if (cookieName.includes('*')) {
        const prefix = cookieName.replace('*', '')
        document.cookie.split(';').forEach(cookie => {
          const name = cookie.split('=')[0].trim()
          if (name.startsWith(prefix)) {
            this.deleteCookie(name)
          }
        })
      } else {
        this.deleteCookie(cookieName)
      }
    })
  }

  // Delete a specific cookie
  private deleteCookie(name: string): void {
    const domains = [
      window.location.hostname,
      `.${window.location.hostname}`,
      'localhost',
      '.localhost'
    ]

    domains.forEach(domain => {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${domain}`
    })
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`
  }

  // Check if analytics is enabled
  public isAnalyticsEnabled(): boolean {
    return this.consentGiven && this.initialized
  }

  // Track page view (only if consent given)
  public trackPageView(path: string, title?: string): void {
    if (!this.consentGiven || !this.initialized || typeof window === 'undefined') return

    window.gtag('config', GA_TRACKING_ID, {
      page_path: path,
      page_title: title || document.title,
      page_location: window.location.href
    })
  }

  // Track custom event (only if consent given)
  public trackEvent(action: string, category: string, label?: string, value?: number): void {
    if (!this.consentGiven || !this.initialized || typeof window === 'undefined') return

    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
      // Add privacy metadata
      privacy_compliant: true,
      consent_given: true
    })
  }
}

// Create singleton instance
const analytics = new PrivacyCompliantAnalytics()

// Initialize Google Analytics (legacy function, now privacy-compliant)
export const initGA = () => {
  // Analytics is automatically initialized when consent is given
  console.log('Privacy-compliant analytics system ready')
}

// Track page views (privacy-compliant)
export const trackPageView = (path: string, title?: string) => {
  analytics.trackPageView(path, title)
}

// Track custom events (privacy-compliant)
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  analytics.trackEvent(action, category, label, value)
}

// Track app download events
export const trackAppDownload = (platform: 'ios' | 'android') => {
  trackEvent('app_download', 'engagement', platform)
}

// Track form submissions
export const trackFormSubmission = (formType: string) => {
  trackEvent('form_submit', 'engagement', formType)
}

// Track newsletter signups
export const trackNewsletterSignup = () => {
  trackEvent('newsletter_signup', 'engagement')
}

// New privacy-focused tracking functions for litter-picking app
export const trackCleanupActivity = (activityType: string, duration?: number) => {
  trackEvent('cleanup_activity', 'environmental', activityType, duration)
}

export const trackMapInteraction = (interaction: string) => {
  trackEvent('map_interaction', 'user_interface', interaction)
}

export const trackCommunityEngagement = (engagement: string) => {
  trackEvent('community_engagement', 'social', engagement)
}

export const trackPrivacyAction = (action: string) => {
  trackEvent('privacy_action', 'data_protection', action)
}

// GDPR-compliant data processing event
export const trackGDPRCompliantEvent = (eventName: string, properties: Record<string, any> = {}) => {
  if (!analytics.isAnalyticsEnabled()) return

  analytics.trackEvent(eventName, 'gdpr_compliant', JSON.stringify({
    ...properties,
    timestamp: new Date().toISOString(),
    consent_version: '1.0',
    privacy_policy_version: '1.0'
  }))
}

// Check if analytics is enabled (for conditional tracking)
export const isAnalyticsEnabled = () => {
  return analytics.isAnalyticsEnabled()
}