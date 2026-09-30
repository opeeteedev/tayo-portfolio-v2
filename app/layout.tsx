import './globals.css'
import { Metadata } from 'next'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import JsonLd from '../components/JsonLd'
import WhatsAppButton from '../components/WhatsAppButton'
import StickyAuditBar from '../components/StickyAuditBar'

export const metadata: Metadata = {
  title: 'Tayo Opeyemi — Lead Systems Architect',
  description: 'I architect digital infrastructure for high-performance SaaS platforms.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/print.css" media="print" />
      </head>
      <body>
        <JsonLd />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <StickyAuditBar />
        <WhatsAppButton />
      </body>
    </html>
  )
}
