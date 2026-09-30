export default function FAQ(){
  const items = [
    'What is your availability?',
    'Can you work with existing teams?',
    'How do you price engagements?',
    'What industries have you worked in?',
    'Do you provide ongoing support?',
    'What is your security posture?',
    'How quickly can you start?'
  ]
  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <h1 className="text-3xl font-semibold">FAQ</h1>
      <dl className="mt-6 space-y-4">
        {items.map((q)=> (
          <div key={q}><dt className="font-semibold">{q}</dt><dd className="text-[var(--color-text-secondary)] mt-1">Answer for {q}.</dd></div>
        ))}
      </dl>
    </div>
  )
}
