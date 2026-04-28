'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object({
  buyerName:   z.string().min(2, 'Name is required'),
  buyerPhone:  z.string().min(10, 'Valid phone number required'),
  scheduledAt: z.string().min(1, 'Please pick a date'),
  timeSlot:    z.string().min(1, 'Please pick a time slot'),
})

type FormData = z.infer<typeof schema>

export default function TestDriveForm({ carId }: { carId: string }) {
  const [submitted, setSubmitted] = useState(false)
  const [loading,   setLoading]   = useState(false)

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: FormData) => {
    setLoading(true)
    try {
      const res = await fetch('/api/test-drives', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ ...data, carId }),
      })
      if (res.ok) setSubmitted(true)
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-6">
        <div className="text-4xl mb-3">✅</div>
        <p className="font-display font-bold text-dark mb-1">Request received!</p>
        <p className="text-sm text-vgray">
          We'll call you within the hour to confirm your test drive.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-bold text-vgray uppercase tracking-widest mb-1.5">
            Your name
          </label>
          <input
            {...register('buyerName')}
            placeholder="John Kamau"
            className="w-full border border-vgray-border rounded-lg px-3 py-2.5 text-sm text-dark outline-none focus:border-orange transition-colors"
          />
          {errors.buyerName && (
            <p className="text-xs text-red-500 mt-1">{errors.buyerName.message}</p>
          )}
        </div>
        <div>
          <label className="block text-xs font-bold text-vgray uppercase tracking-widest mb-1.5">
            Phone number
          </label>
          <input
            {...register('buyerPhone')}
            placeholder="+254 7XX XXX XXX"
            className="w-full border border-vgray-border rounded-lg px-3 py-2.5 text-sm text-dark outline-none focus:border-orange transition-colors"
          />
          {errors.buyerPhone && (
            <p className="text-xs text-red-500 mt-1">{errors.buyerPhone.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-bold text-vgray uppercase tracking-widest mb-1.5">
            Preferred date
          </label>
          <input
            type="date"
            {...register('scheduledAt')}
            min={new Date().toISOString().split('T')[0]}
            className="w-full border border-vgray-border rounded-lg px-3 py-2.5 text-sm text-dark outline-none focus:border-orange transition-colors"
          />
          {errors.scheduledAt && (
            <p className="text-xs text-red-500 mt-1">{errors.scheduledAt.message}</p>
          )}
        </div>
        <div>
          <label className="block text-xs font-bold text-vgray uppercase tracking-widest mb-1.5">
            Time slot
          </label>
          <select
            {...register('timeSlot')}
            className="w-full border border-vgray-border rounded-lg px-3 py-2.5 text-sm text-dark bg-white outline-none focus:border-orange transition-colors"
          >
            <option value="">Select time</option>
            <option value="Morning (8am–12pm)">Morning (8am–12pm)</option>
            <option value="Afternoon (12pm–5pm)">Afternoon (12pm–5pm)</option>
            <option value="Evening (5pm–8pm)">Evening (5pm–8pm)</option>
          </select>
          {errors.timeSlot && (
            <p className="text-xs text-red-500 mt-1">{errors.timeSlot.message}</p>
          )}
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-orange hover:bg-orange-dark disabled:opacity-60 text-white font-bold py-3.5 rounded-btn text-sm transition-colors mt-1"
      >
        {loading ? 'Sending...' : 'Request test drive'}
      </button>
    </form>
  )
}
