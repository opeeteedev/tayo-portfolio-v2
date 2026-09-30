import fs from 'fs'
import path from 'path'
import Link from 'next/link'

export default function CaseStudies(){
  const files = []
  return (
    <div className="max-w-6xl mx-auto px-6 py-24">
      <h1 className="text-3xl font-semibold">Case Studies</h1>
      <ul className="mt-6">
        <li><Link href="/case-studies/ai-lead-intelligence">AI Lead Intelligence</Link></li>
      </ul>
    </div>
  )
}
