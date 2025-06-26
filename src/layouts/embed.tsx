import { Navbar } from '@/components/navbar'
import Footer from '@/components/footer'

export default function EmbedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col h-screen bg-layout-background">
      <Navbar />
      <main className="flex-1 overflow-auto bg-white">{children}</main>
      <Footer />
    </div>
  )
}
