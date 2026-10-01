import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(req: Request){
  const resendKey = process.env.RESEND_API_KEY
  const contactEmail = process.env.CONTACT_EMAIL || 'opeyemitecharchitect@gmail.com'

  if(!resendKey){
    return NextResponse.json({ ok: false, error: 'RESEND_API_KEY is missing' }, { status: 500 })
  }

  try{
    const body = await req.json()
    const { name, email, message } = body
    const resend = new Resend(resendKey)

    await resend.emails.send({
      from: 'Tayo Opeyemi <no-reply@tayoopeyemi.com>',
      to: [contactEmail],
      subject: `Portfolio contact from ${String(name || 'Website visitor')}`,
      html: `<p>${String(message || '')}</p><p>From: ${String(name || 'Unknown')} &lt;${String(email || '')}&gt;</p>`
    })

    return NextResponse.json({ ok: true })
  }catch(e){
    return NextResponse.json({ ok: false, error: String(e) }, { status: 500 })
  }
}
