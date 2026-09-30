import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY || '')

export async function POST(req: Request){
  try{
    const body = await req.json()
    const { name, email, message } = body
    await resend.emails.send({
      from: 'Tayo Opeyemi <no-reply@tayoopeyemi.com>',
      to: ['opeyemitecharchitect@gmail.com'],
      subject: `Portfolio contact from ${name}`,
      html: `<p>${message}</p><p>From: ${name} &lt;${email}&gt;</p>`
    })
    return NextResponse.json({ ok: true })
  }catch(e){
    return NextResponse.json({ ok: false, error: String(e) }, { status: 500 })
  }
}
