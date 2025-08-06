import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Features',
  description: 'Discover PickIt&apos;s powerful features for community litter picking, route tracking, gamification, and council integration.',
}

export default function FeaturesPage() {
  return (
    <div className="py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            App Features
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Explore the powerful features that make PickIt the UK's leading community litter picking app.
          </p>
        </div>
        
        {/* TODO: Add interactive feature demonstrations */}
        <div className="text-center text-slate-500 py-20">
          <p>Feature demonstrations coming soon...</p>
        </div>
      </div>
    </div>
  )
}