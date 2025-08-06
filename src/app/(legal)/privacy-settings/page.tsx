'use client'

import { Metadata } from 'next'
import { PrivacyDashboard } from '@/components/ui/privacy-dashboard'

export const metadata: Metadata = {
  title: 'Privacy Settings',
  description: 'Manage your privacy preferences, cookie settings, and data protection options.',
}

export default function PrivacySettingsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Privacy Settings</h1>
          <p className="text-lg text-slate-600">
            Manage your privacy preferences and control how we handle your data
          </p>
        </header>
        
        <PrivacyDashboard />
      </div>
    </div>
  )
}