'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setShowConsent(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setShowConsent(false)
  }

  const rejectCookies = () => {
    localStorage.setItem('cookie-consent', 'rejected')
    setShowConsent(false)
  }

  if (!showConsent) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 max-w-md mx-auto">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Cookie Preferences</CardTitle>
          <CardDescription>
            We use cookies to improve your experience and analyze site usage.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-2">
            <Button onClick={acceptCookies} size="sm" className="flex-1">
              Accept All
            </Button>
            <Button onClick={rejectCookies} variant="outline" size="sm" className="flex-1">
              Reject All
            </Button>
          </div>
          <p className="text-xs text-slate-500 mt-2">
            Learn more in our{' '}
            <a href="/cookies" className="text-primary-600 hover:underline">
              Cookie Policy
            </a>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}