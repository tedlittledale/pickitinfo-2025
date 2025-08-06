export interface PrivacyPolicy {
  version: string
  effectiveDate: Date
  lastUpdated: Date
  sections: PrivacySection[]
}

export interface PrivacySection {
  id: string
  title: string
  content: string
  subsections?: PrivacySubsection[]
}

export interface PrivacySubsection {
  title: string
  content: string
}

export interface TermsOfService {
  version: string
  effectiveDate: Date
  lastUpdated: Date
  sections: TermsSection[]
}

export interface TermsSection {
  id: string
  title: string
  content: string
  subsections?: TermsSubsection[]
}

export interface TermsSubsection {
  title: string
  content: string
}

export interface CookiePolicy {
  version: string
  effectiveDate: Date
  lastUpdated: Date
  cookieTypes: CookieType[]
}

export interface CookieType {
  name: string
  purpose: string
  duration: string
  required: boolean
  thirdParty?: boolean
  provider?: string
}

export interface DataRequest {
  id: string
  type: 'access' | 'deletion' | 'portability' | 'rectification'
  email: string
  status: 'pending' | 'processing' | 'completed' | 'rejected'
  requestedAt: Date
  completedAt?: Date
  reason?: string
}

export interface ConsentRecord {
  userId?: string
  sessionId: string
  consentGiven: boolean
  consentTypes: string[]
  timestamp: Date
  ipAddress: string
  userAgent: string
}

export interface AccessibilityFeature {
  name: string
  description: string
  enabled: boolean
  wcagLevel: 'A' | 'AA' | 'AAA'
  category: 'visual' | 'auditory' | 'motor' | 'cognitive'
}