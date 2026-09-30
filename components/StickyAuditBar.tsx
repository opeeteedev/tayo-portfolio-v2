"use client"
import { useEffect, useState } from 'react'

export default function StickyAuditBar(){
  const [visible, setVisible] = useState(false)
  useEffect(()=>{
    const t = setTimeout(()=> setVisible(true), 3 * 60 * 1000)
    return ()=> clearTimeout(t)
  },[])
  if(!visible) return null
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[rgba(10,10,11,0.95)] text-white py-3 z-40">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <div>Your system has a bottleneck. I can find it in 20 minutes.</div>
        <a href="/architecture-audit" className="bg-[var(--color-accent-orange)] px-4 py-2 rounded">Book a free audit</a>
      </div>
    </div>
  )
}
