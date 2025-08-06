import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Help Center',
  description: 'Get help with PickIt. Find answers to common questions and learn how to use all features.',
}

export default function HelpPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Help Center
          </h1>
          <p className="text-xl text-slate-600">
            Find answers to common questions and get the most out of PickIt.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card>
            <CardHeader>
              <CardTitle>Getting Started</CardTitle>
              <CardDescription>
                Learn the basics of using PickIt for your first cleanup.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Creating your account</li>
                <li>• Recording your first route</li>
                <li>• Taking before/after photos</li>
                <li>• Sharing your impact</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Privacy & Location</CardTitle>
              <CardDescription>
                Understanding how we handle your location data and privacy.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Location permissions</li>
                <li>• Data privacy controls</li>
                <li>• Anonymous sharing options</li>
                <li>• Deleting your data</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Community Features</CardTitle>
              <CardDescription>
                Joining challenges and connecting with other users.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Joining local challenges</li>
                <li>• Creating team events</li>
                <li>• Leaderboards and achievements</li>
                <li>• Community guidelines</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Troubleshooting</CardTitle>
              <CardDescription>
                Solutions to common issues and technical problems.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• GPS tracking issues</li>
                <li>• Photo upload problems</li>
                <li>• Account login troubles</li>
                <li>• App crashes or bugs</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Still Need Help?
          </h2>
          <p className="text-slate-600 mb-6">
            Can't find what you're looking for? Our support team is here to help.
          </p>
          <p className="text-sm text-slate-500">
            Response time: Within 24 hours • Email:{' '}
            <a href="mailto:support@pickit.app" className="text-primary-600 hover:underline">
              support@pickit.app
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}