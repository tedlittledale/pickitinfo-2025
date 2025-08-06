// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 to-primary-100 py-20 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            Transform Your Community Through{" "}
            <span className="text-primary-600">Collective Action</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Join thousands of UK residents making their neighborhoods cleaner.
            Track your impact, compete with friends, and integrate directly with
            local councils.
          </p>
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-4">
              Download for iOS
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4">
              Download for Android
            </Button>
          </div> */}
        </div>
      </div>
    </section>
  );
}
