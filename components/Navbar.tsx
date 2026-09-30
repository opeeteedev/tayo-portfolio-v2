import Link from 'next/link'

export default function Navbar(){
  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[95%] max-w-6xl bg-[var(--color-surface,rgba(20,20,22,0.8))] backdrop-blur-md backdrop-saturate-180 border border-[rgba(255,255,255,0.08)] rounded-xl px-6 py-3 z-50">
      <div className="flex items-center justify-between">
        <Link href="/">
          <img src="/logo-full.png" alt="Tayo Opeyemi" className="h-8 filter brightness-0 invert-1" />
        </Link>
        <div className="flex gap-4 items-center">
          <Link href="#services">Services</Link>
          <Link href="/case-studies">Case Studies</Link>
          <a href="https://wa.me/447553806076" aria-label="WhatsApp">WhatsApp</a>
        </div>
      </div>
    </nav>
  )
}
