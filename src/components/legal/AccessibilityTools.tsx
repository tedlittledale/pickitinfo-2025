'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function AccessibilityTools() {
  const [fontSize, setFontSize] = useState(100)
  const [highContrast, setHighContrast] = useState(false)

  const increaseFontSize = () => {
    const newSize = Math.min(fontSize + 10, 150)
    setFontSize(newSize)
    document.documentElement.style.fontSize = `${newSize}%`
  }

  const decreaseFontSize = () => {
    const newSize = Math.max(fontSize - 10, 80)
    setFontSize(newSize)
    document.documentElement.style.fontSize = `${newSize}%`
  }

  const resetFontSize = () => {
    setFontSize(100)
    document.documentElement.style.fontSize = '100%'
  }

  const toggleHighContrast = () => {
    setHighContrast(!highContrast)
    document.documentElement.classList.toggle('high-contrast')
  }

  return (
    <Card className="fixed bottom-4 right-4 w-80 z-40">
      <CardHeader>
        <CardTitle className="text-lg">Accessibility Tools</CardTitle>
        <CardDescription>
          Adjust settings to improve your browsing experience
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <p className="text-sm font-medium mb-2">Text Size: {fontSize}%</p>
            <div className="flex gap-2">
              <Button size="sm" variant="outline" onClick={decreaseFontSize}>
                A-
              </Button>
              <Button size="sm" variant="outline" onClick={resetFontSize}>
                Reset
              </Button>
              <Button size="sm" variant="outline" onClick={increaseFontSize}>
                A+
              </Button>
            </div>
          </div>
          
          <div>
            <Button
              size="sm"
              variant={highContrast ? "default" : "outline"}
              onClick={toggleHighContrast}
              className="w-full"
            >
              {highContrast ? "Disable" : "Enable"} High Contrast
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}