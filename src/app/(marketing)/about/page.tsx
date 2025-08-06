import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About PickIt',
  description: 'Learn about PickIt\'s mission to transform communities through technology-enabled environmental action.',
}

export default function AboutPage() {
  return (
    <div className="py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              About PickIt
            </h1>
            <p className="text-xl text-slate-600">
              Transforming communities through technology-enabled environmental action.
            </p>
          </div>
          
          {/* TODO: Add mission/vision, team information, trust building elements */}
          <div className="text-center text-slate-500 py-20">
            <p>Mission, vision, and team information coming soon...</p>
          </div>
        </div>
      </div>
    </div>
  )
}