import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export default function SupportLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <main className="flex-1 py-16 sm:py-20">
        {children}
      </main>
      <Footer />
    </>
  )
}