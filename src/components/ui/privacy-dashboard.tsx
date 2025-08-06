'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Switch } from '@/components/ui/switch'
import { Badge } from '@/components/ui/badge'
import { 
  Shield, 
  Download, 
  Trash2, 
  Eye, 
  Lock, 
  Settings, 
  Mail, 
  CheckCircle, 
  AlertCircle,
  Clock,
  FileText,
  User
} from 'lucide-react'
import { useDataProtection } from '@/lib/data-protection'
import { CookiePreferences } from './cookie-consent'
import { trackPrivacyAction } from '@/lib/analytics'

interface PrivacyDashboardProps {
  className?: string
}

export function PrivacyDashboard({ className }: PrivacyDashboardProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'data' | 'cookies' | 'export' | 'delete'>('overview')
  const [email, setEmail] = useState('')
  const [exportRequested, setExportRequested] = useState(false)
  const [deleteRequested, setDeleteRequested] = useState(false)
  const [cookiePreferences, setCookiePreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    functional: false,
    marketing: false
  })
  
  const {
    getCookieConsent,
    updateCookieConsent,
    requestDataExport,
    requestDataDeletion,
    getDataRetentionInfo,
    isValidEmail
  } = useDataProtection()

  useEffect(() => {
    const consent = getCookieConsent()
    if (consent) {
      setCookiePreferences(consent.preferences)
    }
  }, [getCookieConsent])

  const handleCookiePreferenceChange = (category: keyof CookiePreferences, value: boolean) => {
    if (category === 'necessary') return // Cannot disable necessary cookies
    
    const newPreferences = { ...cookiePreferences, [category]: value }
    setCookiePreferences(newPreferences)
    updateCookieConsent(newPreferences)
    trackPrivacyAction(`cookie_${category}_${value ? 'enabled' : 'disabled'}`)
  }

  const handleDataExport = async () => {
    if (!isValidEmail(email)) {
      alert('Please enter a valid email address')
      return
    }

    try {
      await requestDataExport(email)
      setExportRequested(true)
      trackPrivacyAction('data_export_requested')
    } catch (error) {
      alert('Failed to request data export. Please try again.')
    }
  }

  const handleDataDeletion = async () => {
    if (!isValidEmail(email)) {
      alert('Please enter a valid email address')
      return
    }

    const confirmed = confirm(
      'Are you sure you want to delete all your data? This action cannot be undone and will permanently remove your account and all associated information.'
    )

    if (!confirmed) return

    try {
      await requestDataDeletion(email)
      setDeleteRequested(true)
      trackPrivacyAction('data_deletion_requested')
    } catch (error) {
      alert('Failed to request data deletion. Please try again.')
    }
  }

  const dataRetentionInfo = getDataRetentionInfo()

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Shield },
    { id: 'data', label: 'Your Data', icon: User },
    { id: 'cookies', label: 'Cookie Settings', icon: Settings },
    { id: 'export', label: 'Export Data', icon: Download },
    { id: 'delete', label: 'Delete Account', icon: Trash2 }
  ] as const

  return (
    <div className={className}>
      {/* Tab Navigation */}
      <div className="border-b border-slate-200 mb-6">
        <nav className="flex space-x-8 overflow-x-auto">
          {tabs.map((tab) => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 py-2 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
                }`}
              >
                <Icon className="h-4 w-4" />
                {tab.label}
              </button>
            )
          })}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="space-y-6">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-green-600" />
                  Privacy & Data Protection Overview
                </CardTitle>
                <CardDescription>
                  Your privacy rights and current data protection settings
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="font-medium">GDPR Compliant</span>
                    </div>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      Active
                    </Badge>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Lock className="h-5 w-5 text-blue-600" />
                      <span className="font-medium">Data Encryption</span>
                    </div>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                      AES-256
                    </Badge>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-semibold mb-2">Your Rights Under UK GDPR:</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Right to access your personal data</li>
                    <li>• Right to rectify inaccurate data</li>
                    <li>• Right to erasure ("right to be forgotten")</li>
                    <li>• Right to restrict processing</li>
                    <li>• Right to data portability</li>
                    <li>• Right to object to processing</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Eye className="h-5 w-5 text-slate-600" />
                    <span className="font-medium">Data Transparency</span>
                  </div>
                  <p className="text-sm text-slate-600">
                    Full visibility into what data we collect and how we use it
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Clock className="h-5 w-5 text-slate-600" />
                    <span className="font-medium">Retention Limits</span>
                  </div>
                  <p className="text-sm text-slate-600">
                    Clear data retention periods with automatic deletion
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Mail className="h-5 w-5 text-slate-600" />
                    <span className="font-medium">Contact DPO</span>
                  </div>
                  <p className="text-sm text-slate-600">
                    Direct access to our Data Protection Officer
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Your Data Tab */}
        {activeTab === 'data' && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Data We Collect About You</CardTitle>
                <CardDescription>
                  Information about the types of data we collect and how long we keep it
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {Object.entries(dataRetentionInfo).map(([dataType, retention]) => (
                    <div key={dataType} className="flex items-start justify-between p-4 border rounded-lg">
                      <div>
                        <h4 className="font-medium">{dataType}</h4>
                        <p className="text-sm text-slate-600 mt-1">{retention}</p>
                      </div>
                      <Badge variant="outline">
                        {dataType.includes('Account') ? 'Essential' : 'Optional'}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Legal Basis for Processing</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="p-4 border-l-4 border-green-500 bg-green-50">
                    <h4 className="font-semibold text-green-900">Consent</h4>
                    <p className="text-sm text-green-800">Location data, analytics, marketing communications</p>
                  </div>
                  <div className="p-4 border-l-4 border-blue-500 bg-blue-50">
                    <h4 className="font-semibold text-blue-900">Contract Performance</h4>
                    <p className="text-sm text-blue-800">Providing core app services and functionality</p>
                  </div>
                  <div className="p-4 border-l-4 border-purple-500 bg-purple-50">
                    <h4 className="font-semibold text-purple-900">Legitimate Interest</h4>
                    <p className="text-sm text-purple-800">Service improvement, security, fraud prevention</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Cookie Settings Tab */}
        {activeTab === 'cookies' && (
          <div className="space-y-4">
            {[
              {
                key: 'necessary' as const,
                title: 'Strictly Necessary Cookies',
                description: 'Essential for website functionality',
                disabled: true,
                color: 'green'
              },
              {
                key: 'analytics' as const,
                title: 'Analytics Cookies',
                description: 'Help us understand website usage',
                disabled: false,
                color: 'blue'
              },
              {
                key: 'functional' as const,
                title: 'Functional Cookies',
                description: 'Remember preferences and settings',
                disabled: false,
                color: 'purple'
              },
              {
                key: 'marketing' as const,
                title: 'Marketing Cookies',
                description: 'Currently not used',
                disabled: true,
                color: 'orange'
              }
            ].map((category) => (
              <Card key={category.key}>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold">{category.title}</h3>
                      <p className="text-sm text-slate-600">{category.description}</p>
                      {category.key === 'necessary' && (
                        <Badge className="mt-2 bg-green-100 text-green-800">Always Active</Badge>
                      )}
                      {category.key === 'marketing' && (
                        <Badge className="mt-2 bg-slate-100 text-slate-600">Not Used</Badge>
                      )}
                    </div>
                    <Switch
                      checked={cookiePreferences[category.key]}
                      onCheckedChange={(value) => handleCookiePreferenceChange(category.key, value)}
                      disabled={category.disabled}
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Export Data Tab */}
        {activeTab === 'export' && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Download className="h-5 w-5" />
                Export Your Data
              </CardTitle>
              <CardDescription>
                Download a copy of all the personal data we have about you
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {!exportRequested ? (
                <>
                  <div>
                    <label htmlFor="export-email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <Input
                      id="export-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                    />
                  </div>
                  <Button onClick={handleDataExport} className="w-full">
                    Request Data Export
                  </Button>
                  <p className="text-xs text-slate-500">
                    We&apos;ll send you an email with a secure link to download your data within 30 days.
                  </p>
                </>
              ) : (
                <div className="text-center py-8">
                  <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Export Request Submitted</h3>
                  <p className="text-slate-600">
                    We&apos;ll process your request and send you an email with your data within 30 days.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {/* Delete Account Tab */}
        {activeTab === 'delete' && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-600">
                <Trash2 className="h-5 w-5" />
                Delete Your Account
              </CardTitle>
              <CardDescription>
                Permanently delete your account and all associated data
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {!deleteRequested ? (
                <>
                  <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="h-5 w-5 text-red-600 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-red-900">Warning: This action cannot be undone</h4>
                        <p className="text-sm text-red-800 mt-1">
                          Deleting your account will permanently remove all your data including:
                        </p>
                        <ul className="text-sm text-red-800 mt-2 space-y-1">
                          <li>• Your profile and account information</li>
                          <li>• All cleanup routes and photos</li>
                          <li>• Community contributions and achievements</li>
                          <li>• Usage history and preferences</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="delete-email" className="block text-sm font-medium mb-2">
                      Email Address (for verification)
                    </label>
                    <Input
                      id="delete-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                    />
                  </div>
                  
                  <Button 
                    onClick={handleDataDeletion} 
                    variant="destructive" 
                    className="w-full"
                  >
                    Delete My Account Permanently
                  </Button>
                </>
              ) : (
                <div className="text-center py-8">
                  <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Deletion Request Submitted</h3>
                  <p className="text-slate-600">
                    We&apos;ll process your account deletion request within 30 days. You&apos;ll receive a confirmation email once completed.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}