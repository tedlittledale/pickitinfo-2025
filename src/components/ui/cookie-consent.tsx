'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { X, Settings, Shield, BarChart, Cookie } from 'lucide-react'

export interface CookiePreferences {
  necessary: boolean
  analytics: boolean
  functional: boolean
  marketing: boolean
}

const defaultPreferences: CookiePreferences = {
  necessary: true, // Always true, cannot be disabled
  analytics: false,
  functional: false,
  marketing: false,
}

interface CookieConsentBannerProps {
  onAccept: (preferences: CookiePreferences) => void
  onReject: () => void
  onCustomize: (preferences: CookiePreferences) => void
}

export function CookieConsentBanner({ onAccept, onReject, onCustomize }: CookieConsentBannerProps) {
  const [showDetails, setShowDetails] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences)

  const handleAcceptAll = () => {
    const allAccepted: CookiePreferences = {
      necessary: true,
      analytics: true,
      functional: true,
      marketing: false, // We don't use marketing cookies currently
    }
    onAccept(allAccepted)
  }

  const handleRejectAll = () => {
    onReject()
  }

  const handleSavePreferences = () => {
    onCustomize(preferences)
  }

  const handlePreferenceChange = (category: keyof CookiePreferences, value: boolean) => {
    if (category === 'necessary') return // Cannot disable necessary cookies
    setPreferences(prev => ({ ...prev, [category]: value }))
  }

  if (showDetails) {
    return (
      <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Cookie className="h-5 w-5 text-primary-600" />
                <CardTitle>Cookie Preferences</CardTitle>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowDetails(false)}
                aria-label="Close cookie preferences"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <CardDescription>
              Choose which cookies you&apos;d like to accept. You can change these settings anytime.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Necessary Cookies */}
            <div className="flex items-start justify-between p-4 border rounded-lg bg-slate-50">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="h-4 w-4 text-green-600" />
                  <h3 className="font-semibold">Strictly Necessary Cookies</h3>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                    Always Active
                  </span>
                </div>
                <p className="text-sm text-slate-600">
                  These cookies are essential for the website to function properly. They enable basic 
                  functions like page navigation, security, and access to secure areas.
                </p>
                <p className="text-xs text-slate-500 mt-2">
                  Examples: Session management, security tokens, accessibility preferences
                </p>
              </div>
              <div className="ml-4">
                <input
                  type="checkbox"
                  checked={true}
                  disabled={true}
                  className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded opacity-50"
                  aria-label="Necessary cookies - always active"
                />
              </div>
            </div>

            {/* Analytics Cookies */}
            <div className="flex items-start justify-between p-4 border rounded-lg">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <BarChart className="h-4 w-4 text-blue-600" />
                  <h3 className="font-semibold">Analytics Cookies</h3>
                </div>
                <p className="text-sm text-slate-600">
                  These cookies help us understand how visitors interact with our website by 
                  collecting and reporting information anonymously.
                </p>
                <p className="text-xs text-slate-500 mt-2">
                  Used by: Google Analytics (anonymized data only)
                </p>
              </div>
              <div className="ml-4">
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={(e) => handlePreferenceChange('analytics', e.target.checked)}
                  className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500"
                  aria-label="Analytics cookies"
                />
              </div>
            </div>

            {/* Functional Cookies */}
            <div className="flex items-start justify-between p-4 border rounded-lg">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Settings className="h-4 w-4 text-purple-600" />
                  <h3 className="font-semibold">Functional Cookies</h3>
                </div>
                <p className="text-sm text-slate-600">
                  These cookies enable enhanced functionality and personalization, such as 
                  remembering your preferences and settings.
                </p>
                <p className="text-xs text-slate-500 mt-2">
                  Examples: Language preferences, accessibility settings, map area preferences
                </p>
              </div>
              <div className="ml-4">
                <input
                  type="checkbox"
                  checked={preferences.functional}
                  onChange={(e) => handlePreferenceChange('functional', e.target.checked)}
                  className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500"
                  aria-label="Functional cookies"
                />
              </div>
            </div>

            {/* Marketing Cookies - Currently not used */}
            <div className="flex items-start justify-between p-4 border rounded-lg bg-slate-50 opacity-75">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Cookie className="h-4 w-4 text-orange-600" />
                  <h3 className="font-semibold">Marketing Cookies</h3>
                  <span className="text-xs bg-slate-200 text-slate-600 px-2 py-1 rounded-full">
                    Not Used
                  </span>
                </div>
                <p className="text-sm text-slate-600">
                  We currently do not use marketing or advertising cookies. If this changes in the 
                  future, we will request your explicit consent.
                </p>
              </div>
              <div className="ml-4">
                <input
                  type="checkbox"
                  checked={false}
                  disabled={true}
                  className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded opacity-50"
                  aria-label="Marketing cookies - not used"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button onClick={handleSavePreferences} className="flex-1">
                Save Preferences
              </Button>
              <Button variant="outline" onClick={handleAcceptAll} className="flex-1">
                Accept All
              </Button>
              <Button variant="ghost" onClick={handleRejectAll} className="flex-1">
                Reject Optional
              </Button>
            </div>

            <p className="text-xs text-slate-500 text-center">
              You can change your preferences anytime in the cookie settings or through your browser settings.
            </p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg z-40 p-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Cookie className="h-5 w-5 text-primary-600" />
              <h2 className="font-semibold text-slate-900">We use cookies</h2>
            </div>
            <p className="text-sm text-slate-600">
              We use cookies to enhance your experience, analyze site usage, and provide personalized content. 
              Essential cookies are always active. {' '}
              <a href="/cookies" className="text-primary-600 hover:underline font-medium">
                Learn more about our cookies
              </a>
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
            <Button
              variant="outline"
              onClick={() => setShowDetails(true)}
              className="w-full sm:w-auto"
            >
              <Settings className="h-4 w-4 mr-2" />
              Preferences
            </Button>
            <Button
              variant="outline"
              onClick={handleRejectAll}
              className="w-full sm:w-auto"
            >
              Reject Optional
            </Button>
            <Button
              onClick={handleAcceptAll}
              className="w-full sm:w-auto"
            >
              Accept All
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export function CookieConsentManager() {
  const [showBanner, setShowBanner] = useState(false)
  const [hasConsent, setHasConsent] = useState<boolean | null>(null)

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent')
    if (consent) {
      setHasConsent(true)
      setShowBanner(false)
    } else {
      setHasConsent(false)
      setShowBanner(true)
    }
  }, [])

  const handleAccept = (preferences: CookiePreferences) => {
    localStorage.setItem('cookie-consent', JSON.stringify({
      timestamp: Date.now(),
      preferences,
      version: '1.0'
    }))
    setHasConsent(true)
    setShowBanner(false)
    
    // Initialize analytics if accepted
    if (preferences.analytics) {
      initializeAnalytics()
    }
  }

  const handleReject = () => {
    const minimalPreferences: CookiePreferences = {
      necessary: true,
      analytics: false,
      functional: false,
      marketing: false,
    }
    
    localStorage.setItem('cookie-consent', JSON.stringify({
      timestamp: Date.now(),
      preferences: minimalPreferences,
      version: '1.0'
    }))
    setHasConsent(true)
    setShowBanner(false)
  }

  const handleCustomize = (preferences: CookiePreferences) => {
    handleAccept(preferences)
  }

  // Don't render anything during hydration
  if (hasConsent === null) {
    return null
  }

  if (!showBanner) {
    return null
  }

  return (
    <CookieConsentBanner
      onAccept={handleAccept}
      onReject={handleReject}
      onCustomize={handleCustomize}
    />
  )
}

// Initialize Google Analytics with privacy settings
function initializeAnalytics() {
  if (typeof window !== 'undefined') {
    // This will be implemented when we add the GA script
    window.gtag?.('config', 'GA_MEASUREMENT_ID', {
      anonymize_ip: true,
      cookie_expires: 63072000, // 2 years in seconds
      cookie_domain: 'auto',
      cookie_flags: 'SameSite=None;Secure',
    })
  }
}

// Utility function to check if a specific cookie category is accepted
export function isCookieCategoryAccepted(category: keyof CookiePreferences): boolean {
  if (typeof window === 'undefined') return false
  
  const consent = localStorage.getItem('cookie-consent')
  if (!consent) return false
  
  try {
    const { preferences } = JSON.parse(consent)
    return preferences[category] || false
  } catch {
    return false
  }
}

// Utility function to get current cookie preferences
export function getCookiePreferences(): CookiePreferences | null {
  if (typeof window === 'undefined') return null
  
  const consent = localStorage.getItem('cookie-consent')
  if (!consent) return null
  
  try {
    const { preferences } = JSON.parse(consent)
    return preferences
  } catch {
    return null
  }
}