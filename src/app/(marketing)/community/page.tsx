import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Community',
  description: 'Join the PickIt community of environmental champions across the UK. See our impact and get involved.',
}

export default function CommunityPage() {
  return (
    <div className="py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Our Community
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Join thousands of environmental champions making a real difference in communities across the UK.
          </p>
        </div>
        
        {/* TODO: Add community impact showcase, success stories, and participation guide */}
        <div className="text-center text-slate-500 py-20">
          <p>Community showcase and impact statistics coming soon...</p>
        </div>
      </div>
    </div>
  )
}