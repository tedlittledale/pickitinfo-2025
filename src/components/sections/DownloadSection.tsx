import { Button } from '@/components/ui/button'

export function DownloadSection() {
  return (
    <section className="bg-primary-600 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Ready to Make a Difference?
        </h2>
        <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
          Join thousands of environmental champions across the UK. Download PickIt today and start your cleanup journey.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
            Get Started Today
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary-600">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  )
}