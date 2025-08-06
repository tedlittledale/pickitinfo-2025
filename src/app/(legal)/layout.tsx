import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="flex-1 py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto prose prose-slate lg:prose-lg">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
