'use client'

import { useEffect } from 'react'
import { DataProtectionManager } from '@/lib/data-protection'

export function DataProtectionProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Initialize data protection system
    DataProtectionManager.initialize()
  }, [])

  return <>{children}</>
}