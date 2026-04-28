'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2 } from 'lucide-react'

const schema = z.object({
  name:    z.string().min(2, 'Name is required'),
  phone:   z.string().min(10, 'Valid phone number required'),
  email:   z.string().email('Valid email required').optional().or(z.literal('')),
  subject: z.string().min(1, 'Please select a subject'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type FormData = z.infer<typeof schema>

export default function ContactForm({ waNumber }: { waNumber: string }) {
  const [submitted, setSubmitted] = useState(false)
  const [loading,   setLoading]   = useState(false)

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const inputClass = (hasError?: boolean) =>
    `w-full border ${hasError ? 'border-red-400' : 'border-vgray-border'} rounded-lg px-3.5 py-2.5 text-sm text-dark bg-white outline-none focus:border-orange transition-colors`

  const onSubmit = async (data: FormData) => {
    setLoading(true)
    try {
      const message = `Hi Vroom! 👋\n\nName: ${data.name}\nPhone: ${data.phone}\nSubject: ${data.subject}\n\nMessage: ${data.message}`
      window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`, '_blank')
      setSubmitted(true)
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-10">
        <div className="text-5xl mb-4">✅</div>
        <h3 className="font-display text-xl font-bold text-dark mb-2">Message sent!</h3>
        <p className="text-sm text-vgray leading-relaxed">
          Your WhatsApp has opened with your message pre-filled.
          We'll reply within the hour.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm font-bold text-orange hover:underline cursor-pointer"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-vgray uppercase tracking-widest mb-1.5">
            Your name
          </label>
          <input
            {...register('name')}
            placeholder="John Kamau"
            className={inputClass(!!errors.name)}
          />
          {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <label className="block text-xs font-bold text-vgray uppercase tracking-widest mb-1.5">
            Phone number
          </label>
          <input
            {...register('phone')}
            placeholder="+254 7XX XXX XXX"
            className={inputClass(!!errors.phone)}
          />
          {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>}
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold text-vgray uppercase tracking-widest mb-1.5">
          Email (optional)
        </label>
        <input
          {...register('email')}
          type="email"
          placeholder="you@example.com"
          className={inputClass(!!errors.email)}
        />
        {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
      </div>

      <div>
        <label className="block text-xs font-bold text-vgray uppercase tracking-widest mb-1.5">
          Subject
        </label>
        <select
          {...register('subject')}
          className={`${inputClass(!!errors.subject)} appearance-none cursor-pointer`}
        >
          <option value="">Select a subject</option>
          <option value="Car enquiry">Car enquiry</option>
          <option value="Test drive booking">Test drive booking</option>
          <option value="Finance question">Finance question</option>
          <option value="Selling my car">Selling my car</option>
          <option value="General question">General question</option>
          <option value="Other">Other</option>
        </select>
        {errors.subject && <p className="text-xs text-red-500 mt-1">{errors.subject.message}</p>}
      </div>

      <div>
        <label className="block text-xs font-bold text-vgray uppercase tracking-widest mb-1.5">
          Message
        </label>
        <textarea
          {...register('message')}
          rows={4}
          placeholder="Tell us what you're looking for or ask us anything..."
          className={`${inputClass(!!errors.message)} resize-none`}
        />
        {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 bg-orange hover:bg-orange-dark disabled:opacity-60 text-white font-bold py-3.5 rounded-btn text-sm transition-colors shadow-md mt-2 cursor-pointer"
      >
        {loading
          ? <><Loader2 size={16} className="animate-spin" /> Sending...</>
          : '💬 Send via WhatsApp'
        }
      </button>

      <p className="text-xs text-vgray text-center">
        This will open WhatsApp with your message pre-filled
      </p>
    </form>
  )
}
