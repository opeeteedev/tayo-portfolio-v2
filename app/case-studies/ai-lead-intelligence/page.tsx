import fs from 'fs'
import path from 'path'
import Image from 'next/image'

export default function Study(){
  return (
    <article className="max-w-5xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold">AI Lead Intelligence</h1>
      <p className="mt-4 text-[var(--color-text-secondary)]">Cut lead qualification time by 70% with an AI-powered routing layer.</p>
      <section className="mt-8">
        <h2 className="text-2xl font-semibold">The Problem</h2>
        <p className="mt-2">Manual routing and inconsistent qualification created long sales cycles.</p>
      </section>
    </article>
  )
}
