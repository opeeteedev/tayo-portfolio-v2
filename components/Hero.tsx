import ArchitectureVisualizerWrapper from './ArchitectureVisualizerWrapper'

export default function Hero(){
  return (
    <section className="min-h-screen grid grid-cols-12 gap-8 items-center bg-[var(--color-background)] text-[var(--color-text-primary)]">
      <div className="col-span-7 px-8">
        <h1 className="font-[var(--font-display)] leading-[0.95]" style={{fontSize: 'clamp(3rem,8vw,7rem)'}}>
          I architect the digital infrastructure that powers high-performance SaaS platforms, AI-driven web applications, and enterprise ecosystems.
        </h1>
        <p className="mt-6 text-[var(--color-text-secondary)]">"Cut our pipeline processing time by 80%." — CTO, Series B SaaS Platform</p>
        <div className="mt-8 flex gap-4">
          <a className="bg-[var(--color-accent-orange)] px-5 py-3 rounded-md">Book a Systems Architecture Consultation</a>
          <a className="border border-[var(--color-border)] px-5 py-3 rounded-md">View Case Studies</a>
        </div>
      </div>
      <div className="col-span-5 px-8">
        <div className="w-full aspect-[16/10] bg-black rounded-2xl overflow-hidden">
          <ArchitectureVisualizerWrapper />
        </div>
      </div>
    </section>
  )
}
