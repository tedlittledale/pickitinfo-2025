import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Shield, Eye, Lock, Download } from 'lucide-react'

export function DataProtectionInfo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <div className="flex items-center space-x-2">
            <Shield className="w-5 h-5 text-green-500" />
            <CardTitle className="text-lg">GDPR Compliant</CardTitle>
          </div>
          <CardDescription>
            Full compliance with UK data protection regulations
          </CardDescription>
        </CardHeader>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center space-x-2">
            <Eye className="w-5 h-5 text-blue-500" />
            <CardTitle className="text-lg">Transparent Data Use</CardTitle>
          </div>
          <CardDescription>
            Clear information about what data we collect and why
          </CardDescription>
        </CardHeader>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center space-x-2">
            <Lock className="w-5 h-5 text-purple-500" />
            <CardTitle className="text-lg">Secure Storage</CardTitle>
          </div>
          <CardDescription>
            Your data is encrypted and stored securely
          </CardDescription>
        </CardHeader>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center space-x-2">
            <Download className="w-5 h-5 text-orange-500" />
            <CardTitle className="text-lg">Data Portability</CardTitle>
          </div>
          <CardDescription>
            Export your data anytime in standard formats
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  )
}