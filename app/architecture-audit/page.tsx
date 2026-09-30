import ContactForm from '../../components/ContactForm'

export default function Audit(){
  return (
    <div className="min-h-screen max-w-4xl mx-auto px-6 py-24">
      <h1 className="text-3xl font-semibold">Architecture Audit</h1>
      <p className="mt-4 text-[var(--color-text-secondary)]">Free 20-minute technical discovery. Book below.</p>
      <div className="mt-8">
        <ContactForm />
      </div>
    </div>
  )
}
