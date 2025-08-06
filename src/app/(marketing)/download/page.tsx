import { Metadata } from 'next'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Download PickIt',
  description: 'Download PickIt for iOS and Android. Start your community litter picking journey today.',
}

export default function DownloadPage() {
  return (
    <div className="py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            Download PickIt Today
          </h1>
          <p className="text-xl text-slate-600 mb-12">
            Available on iOS and Android. Join thousands of users making their communities cleaner.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button size="lg" className="text-lg px-8 py-4">
              Download for iOS
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4">
              Download for Android
            </Button>
          </div>
          
          {/* TODO: Add app screenshots and system requirements */}
          <div className="text-center text-slate-500 py-20">
            <p>App screenshots and system requirements coming soon...</p>
          </div>
        </div>
      </div>
    </div>
  )
}