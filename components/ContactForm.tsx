"use client"
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(10)
})

export default function ContactForm(){
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<any>({ resolver: zodResolver(schema as any) })

  const onSubmit = async (data:any) => {
    await fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <input {...register('name')} placeholder="Name" />
      <input {...register('email')} placeholder="Email" />
      <textarea {...register('message')} placeholder="Message" />
      <button disabled={isSubmitting} className="bg-[var(--color-accent-cyan)] px-4 py-2">Send</button>
    </form>
  )
}
