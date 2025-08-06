'use client'

import { useState, useEffect } from 'react'
import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Switch } from '@/components/ui/switch'
import { Toast } from '@/components/ui/toast'
import { Cookie, Shield, BarChart, Settings, Save, RefreshCw } from 'lucide-react'
import { CookiePreferences, getCookiePreferences } from '@/components/ui/cookie-consent'

export default function CookiePreferencesPage() {
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    functional: false,
    marketing: false,
  })
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [showToast, setShowToast] = useState(false)

  useEffect(() => {
    const currentPreferences = getCookiePreferences()
    if (currentPreferences) {
      setPreferences(currentPreferences)
    }
    setLoading(false)
  }, [])

  const handlePreferenceChange = (category: keyof CookiePreferences, value: boolean) => {
    if (category === 'necessary') return // Cannot disable necessary cookies
    setPreferences(prev => ({ ...prev, [category]: value }))
  }

  const handleSave = async () => {
    setSaving(true)
    
    // Save to localStorage
    localStorage.setItem('cookie-consent', JSON.stringify({
      timestamp: Date.now(),
      preferences,
      version: '1.0'
    }))

    // Initialize or disable analytics based on preference
    if (preferences.analytics) {
      initializeAnalytics()
    } else {
      disableAnalytics()
    }

    // Simulate async save
    await new Promise(resolve => setTimeout(resolve, 500))
    
    setSaving(false)
    setShowToast(true)
    setTimeout(() => setShowToast(false), 3000)
  }

  const handleReset = () => {
    setPreferences({
      necessary: true,
      analytics: false,
      functional: false,
      marketing: false,
    })
  }

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="animate-pulse">
            <div className="h-8 bg-slate-200 rounded mb-4"></div>
            <div className="h-4 bg-slate-200 rounded mb-8"></div>
            <div className="space-y-4">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="h-32 bg-slate-200 rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Cookie className="h-8 w-8 text-primary-600" />
            <h1 className="text-3xl font-bold text-slate-900">Cookie Preferences</h1>
          </div>
          <p className="text-lg text-slate-600">
            Manage your cookie preferences and control how we collect data to improve your experience.
          </p>
        </header>

        <div className="space-y-6">
          {/* Necessary Cookies */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-green-600" />
                  <div>
                    <CardTitle>Strictly Necessary Cookies</CardTitle>
                    <CardDescription>
                      Essential for basic website functionality and security
                    </CardDescription>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium">
                    Always Active
                  </span>
                  <Switch checked={true} disabled={true} />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 mb-4">
                These cookies are essential for the website to function properly. They enable basic 
                functions like page navigation, form submissions, security features, and access to secure areas. 
                The website cannot function properly without these cookies.
              </p>
              <div className="bg-slate-50 p-3 rounded-lg">
                <h4 className="font-medium text-sm mb-2">Examples of necessary cookies:</h4>
                <ul className="text-xs text-slate-600 space-y-1">
                  <li>• Session management and user authentication</li>
                  <li>• Security tokens and CSRF protection</li>
                  <li>• Cookie consent preferences</li>
                  <li>• Load balancing and server routing</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Analytics Cookies */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <BarChart className="h-5 w-5 text-blue-600" />
                  <div>
                    <CardTitle>Analytics Cookies</CardTitle>
                    <CardDescription>
                      Help us understand website usage and improve user experience
                    </CardDescription>
                  </div>
                </div>
                <Switch
                  checked={preferences.analytics}
                  onCheckedChange={(value) => handlePreferenceChange('analytics', value)}
                />
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 mb-4">
                These cookies collect information about how you use our website, such as which pages you visit 
                and how long you spend on each page. This data is anonymized and helps us improve the website 
                and user experience.
              </p>
              <div className="bg-slate-50 p-3 rounded-lg">
                <h4 className="font-medium text-sm mb-2">What we collect:</h4>
                <ul className="text-xs text-slate-600 space-y-1">
                  <li>• Page views and session duration</li>
                  <li>• Traffic sources and referrer information</li>
                  <li>• Device and browser information (anonymized)</li>
                  <li>• User interactions and feature usage</li>
                </ul>
                <p className="text-xs text-slate-500 mt-2">
                  <strong>Third-party services:</strong> Google Analytics (with IP anonymization)
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Functional Cookies */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Settings className="h-5 w-5 text-purple-600" />
                  <div>
                    <CardTitle>Functional Cookies</CardTitle>
                    <CardDescription>
                      Remember your preferences and provide enhanced features
                    </CardDescription>
                  </div>
                </div>
                <Switch
                  checked={preferences.functional}
                  onCheckedChange={(value) => handlePreferenceChange('functional', value)}
                />
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 mb-4">
                These cookies enable enhanced functionality and personalization. They remember your choices 
                and preferences to provide a more tailored experience. Without these cookies, some features 
                may not work as intended.
              </p>
              <div className="bg-slate-50 p-3 rounded-lg">
                <h4 className="font-medium text-sm mb-2">Functional features:</h4>
                <ul className="text-xs text-slate-600 space-y-1">
                  <li>• Language and region preferences</li>
                  <li>• Accessibility settings (font size, contrast)</li>
                  <li>• Map view preferences and saved locations</li>
                  <li>• Dashboard layout and display options</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Marketing Cookies - Currently disabled */}
          <Card className="opacity-75">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Cookie className="h-5 w-5 text-orange-600" />
                  <div>
                    <CardTitle>Marketing & Advertising Cookies</CardTitle>
                    <CardDescription>
                      Currently not used on our website
                    </CardDescription>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs bg-slate-200 text-slate-600 px-2 py-1 rounded-full font-medium">
                    Not Used
                  </span>
                  <Switch checked={false} disabled={true} />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 mb-4">
                We currently do not use marketing or advertising cookies on our website. We prioritize 
                privacy and only collect data necessary for providing and improving our service. If this 
                changes in the future, we will clearly request your explicit consent.
              </p>
              <div className="bg-slate-50 p-3 rounded-lg">
                <p className="text-xs text-slate-600">
                  <strong>Our commitment:</strong> If we ever introduce marketing cookies, you will be notified 
                  and asked for explicit consent before any marketing-related data collection begins.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-6">
            <Button 
              onClick={handleSave} 
              disabled={saving}
              className="flex-1"
            >
              {saving ? (
                <>
                  <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <Save className="h-4 w-4 mr-2" />
                  Save Preferences
                </>
              )}
            </Button>
            <Button 
              variant="outline" 
              onClick={handleReset}
              className="flex-1"
            >
              Reset to Defaults
            </Button>
          </div>

          {/* Additional Information */}
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="pt-6">
              <h3 className="font-semibold text-blue-900 mb-2">Need more information?</h3>
              <p className="text-sm text-blue-800 mb-3">
                For detailed information about our cookie usage, data collection practices, and your rights, 
                please review our comprehensive policies.
              </p>
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm" asChild className="bg-white">
                  <a href="/cookies">Cookie Policy</a>
                </Button>
                <Button variant="outline" size="sm" asChild className="bg-white">
                  <a href="/privacy">Privacy Policy</a>
                </Button>
                <Button variant="outline" size="sm" asChild className="bg-white">
                  <a href="/contact">Contact Us</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Toast Notification */}
        {showToast && (
          <div className="fixed bottom-4 right-4 z-50">
            <div className="bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2">
              <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
              Cookie preferences saved successfully!
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

// Initialize Google Analytics with privacy settings
function initializeAnalytics() {
  if (typeof window !== 'undefined') {
    // Load Google Analytics if not already loaded
    if (!window.gtag) {
      const script = document.createElement('script')
      script.async = true
      script.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID'
      document.head.appendChild(script)

      const configScript = document.createElement('script')
      configScript.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'GA_MEASUREMENT_ID', {
          anonymize_ip: true,
          cookie_expires: 63072000,
          cookie_domain: 'auto',
          cookie_flags: 'SameSite=None;Secure',
        });
      `
      document.head.appendChild(configScript)
    }
  }
}

// Disable analytics tracking
function disableAnalytics() {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'GA_MEASUREMENT_ID', {
      send_page_view: false
    })
  }
}