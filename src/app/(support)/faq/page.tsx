import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description: 'Find answers to common questions about PickIt, from getting started to advanced features.',
}

export default function FAQPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-slate-600">
            Quick answers to the most common questions about PickIt.
          </p>
        </div>
        
        {/* TODO: Add expandable FAQ sections with search functionality */}
        <div className="text-center text-slate-500 py-20">
          <p>FAQ content with search functionality coming soon...</p>
        </div>
      </div>
    </div>
  )
}