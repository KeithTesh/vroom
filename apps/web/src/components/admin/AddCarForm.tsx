'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { Upload, X, Loader2 } from 'lucide-react'

const schema = z.object({
  title:        z.string().min(3, 'Title required'),
  make:         z.string().min(1, 'Make required'),
  model:        z.string().min(1, 'Model required'),
  year:         z.number().min(1990).max(2026),
  price:        z.number().min(1, 'Price required'),
  mileage:      z.number().min(0),
  fuelType:     z.string().min(1, 'Fuel type required'),
  transmission: z.string().min(1, 'Transmission required'),
  driveType:    z.string().min(1, 'Drive type required'),
  bodyType:     z.string().min(1, 'Body type required'),
  colour:       z.string().min(1, 'Colour required'),
  seats:        z.number().min(1).max(12),
  condition:    z.string().min(1, 'Condition required'),
  importFrom:   z.string().optional(),
  location:     z.string().min(1, 'Location required'),
  description:  z.string().optional(),
  status:       z.enum(['DRAFT', 'LIVE']),
  featured:     z.boolean(),
})

type FormData = z.infer<typeof schema>

interface UploadedImage {
  id:        string
  url:       string
  fileId:    string
  isPrimary: boolean
}

export default function AddCarForm() {
  const router                      = useRouter()
  const [images, setImages]           = useState<UploadedImage[]>([])
  const [uploadCount, setUploadCount] = useState(0)
  const [submitting, setSubmitting]   = useState(false)
  const [error, setError]             = useState('')

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      seats:     5,
      condition: 'Excellent',
      status:    'LIVE',
      featured:  false,
      location:  'Mombasa',
    },
  })

  const makeValue  = watch('make')
  const modelValue = watch('model')
  const yearValue  = watch('year')

  const uploadFiles = async (files: FileList) => {
    const fileArray = Array.from(files)
    setUploadCount(fileArray.length)

    const results = await Promise.all(
      fileArray.map(async (file) => {
        const authRes = await fetch('/api/imagekit-auth')
        const auth: { token: string; expire: number; signature: string } = await authRes.json()

        const form = new FormData()
        form.append('file', file)
        form.append('fileName', `car-${Date.now()}-${file.name}`)
        form.append('folder', '/vroom/cars')
        form.append('publicKey', process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY!)
        form.append('signature', auth.signature)
        form.append('expire', String(auth.expire))
        form.append('token', auth.token)

        const res = await fetch('https://upload.imagekit.io/api/v1/files/upload', {
          method: 'POST',
          body:   form,
        })
        const data = await res.json() as { url: string; fileId: string; error?: string }
        if (!data.url) throw new Error(`Upload failed for ${file.name}: ${data.error ?? 'unknown error'}`)
        return data
      })
    )

    setImages(prev => {
      const newImages = results.map((r, i) => ({
        id:        crypto.randomUUID(),
        url:       r.url,
        fileId:    r.fileId,
        isPrimary: prev.length === 0 && i === 0,
      }))
      return [...prev, ...newImages]
    })
    setUploadCount(0)
  }

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return
    try {
      await uploadFiles(e.target.files)
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : 'Upload failed')
      setUploadCount(0)
    }
    e.target.value = ''
  }

  const removeImage = (id: string) => {
    setImages(prev => {
      const filtered = prev.filter(i => i.id !== id)
      if (filtered.length > 0 && !filtered.some(i => i.isPrimary)) {
        filtered[0].isPrimary = true
      }
      return filtered
    })
  }

  const setPrimary = (id: string) => {
    setImages(prev => prev.map(i => ({ ...i, isPrimary: i.id === id })))
  }

  const onSubmit = async (data: FormData) => {
    setSubmitting(true)
    setError('')
    try {
      const slug = `${data.make}-${data.model}-${data.year}-${Date.now()}`
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9-]/g, '')

      const res = await fetch('/api/admin/cars', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ ...data, slug, images }),
      })

      if (!res.ok) throw new Error('Failed to create listing')
      router.push('/dashboard/inventory')
      router.refresh()
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : 'Something went wrong')
    } finally {
      setSubmitting(false)
    }
  }

  const inputClass  = (err?: boolean) =>
    `w-full border ${err ? 'border-red-400' : 'border-vgray-border'} rounded-lg px-3.5 py-2.5 text-sm text-dark bg-white outline-none focus:border-orange transition-colors`

  const selectClass = (err?: boolean) =>
    `w-full border ${err ? 'border-red-400' : 'border-vgray-border'} rounded-lg px-3.5 py-2.5 text-sm text-dark bg-white outline-none focus:border-orange transition-colors appearance-none`

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">

      {/* ── PHOTOS ── */}
      <div className="bg-white border border-vgray-border rounded-card p-6">
        <h2 className="font-display text-base font-bold text-dark mb-5">Photos</h2>

        {images.length > 0 && (
          <div className="flex flex-wrap gap-3 mb-4">
            {images.map(img => (
              <div key={img.id} className="relative group">
                <img
                  src={img.url}
                  alt="Car"
                  className={`w-28 h-20 object-cover rounded-lg border-2 cursor-pointer transition-colors ${
                    img.isPrimary ? 'border-orange' : 'border-vgray-border hover:border-orange-mid'
                  }`}
                  onClick={() => setPrimary(img.id)}
                />
                {img.isPrimary && (
                  <span className="absolute bottom-1 left-1 bg-orange text-white text-xs font-bold px-1.5 py-0.5 rounded">
                    Main
                  </span>
                )}
                <button
                  type="button"
                  onClick={() => removeImage(img.id)}
                  className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <X size={11} />
                </button>
              </div>
            ))}
          </div>
        )}

        <label className="border-2 border-dashed border-vgray-border rounded-xl p-8 text-center hover:border-orange-mid transition-colors cursor-pointer block">
          {uploadCount > 0 ? (
            <div className="flex items-center justify-center gap-2 text-sm text-vgray">
              <Loader2 size={18} className="animate-spin text-orange" />
              Uploading {uploadCount} photo{uploadCount > 1 ? 's' : ''}...
            </div>
          ) : (
            <div className="flex flex-col items-center gap-2 text-vgray">
              <Upload size={24} className="text-orange" />
              <p className="text-sm font-semibold text-dark">Click to upload photos</p>
              <p className="text-xs">Select multiple at once — JPG, PNG up to 10MB each</p>
            </div>
          )}
          <input
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            onChange={handleFileChange}
            disabled={uploadCount > 0}
          />
        </label>
        <p className="text-xs text-vgray mt-2">Click a photo to set it as the main image</p>
      </div>

      {/* ── BASIC INFO ── */}
      <div className="bg-white border border-vgray-border rounded-card p-6">
        <h2 className="font-display text-base font-bold text-dark mb-5">Basic information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <div className="md:col-span-2">
            <label className="block text-xs font-bold text-vgray uppercase tracking-widest mb-1.5">Listing title</label>
            <input
              {...register('title')}
              placeholder={`${yearValue || 'Year'} ${makeValue || 'Make'} ${modelValue || 'Model'}`}
              className={inputClass(!!errors.title)}
            />
            {errors.title && <p className="text-xs text-red-500 mt-1">{errors.title.message}</p>}
          </div>

          <div>
            <label className="block text-xs font-bold text-vgray uppercase tracking-widest mb-1.5">Make</label>
            <input {...register('make')} placeholder="Toyota" className={inputClass(!!errors.make)} />
            {errors.make && <p className="text-xs text-red-500 mt-1">{errors.make.message}</p>}
          </div>

          <div>
            <label className="block text-xs font-bold text-vgray uppercase tracking-widest mb-1.5">Model</label>
            <input {...register('model')} placeholder="Land Cruiser" className={inputClass(!!errors.model)} />
            {errors.model && <p className="text-xs text-red-500 mt-1">{errors.model.message}</p>}
          </div>

          <div>
            <label className="block text-xs font-bold text-vgray uppercase tracking-widest mb-1.5">Year</label>
            <input {...register('year', { valueAsNumber: true })} type="number" placeholder="2020" className={inputClass(!!errors.year)} />
            {errors.year && <p className="text-xs text-red-500 mt-1">{errors.year.message}</p>}
          </div>

          <div>
            <label className="block text-xs font-bold text-vgray uppercase tracking-widest mb-1.5">Price (KES)</label>
            <input {...register('price', { valueAsNumber: true })} type="number" placeholder="4500000" className={inputClass(!!errors.price)} />
            {errors.price && <p className="text-xs text-red-500 mt-1">{errors.price.message}</p>}
          </div>

          <div>
            <label className="block text-xs font-bold text-vgray uppercase tracking-widest mb-1.5">Mileage (km)</label>
            <input {...register('mileage', { valueAsNumber: true })} type="number" placeholder="45000" className={inputClass(!!errors.mileage)} />
            {errors.mileage && <p className="text-xs text-red-500 mt-1">{errors.mileage.message}</p>}
          </div>

          <div>
            <label className="block text-xs font-bold text-vgray uppercase tracking-widest mb-1.5">Colour</label>
            <input {...register('colour')} placeholder="Pearl White" className={inputClass(!!errors.colour)} />
            {errors.colour && <p className="text-xs text-red-500 mt-1">{errors.colour.message}</p>}
          </div>
        </div>
      </div>

      {/* ── SPECS ── */}
      <div className="bg-white border border-vgray-border rounded-card p-6">
        <h2 className="font-display text-base font-bold text-dark mb-5">Specifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

          <div>
            <label className="block text-xs font-bold text-vgray uppercase tracking-widest mb-1.5">Fuel type</label>
            <select {...register('fuelType')} className={selectClass(!!errors.fuelType)}>
              <option value="">Select</option>
              {['Petrol','Diesel','Hybrid','Electric'].map(o => <option key={o}>{o}</option>)}
            </select>
            {errors.fuelType && <p className="text-xs text-red-500 mt-1">{errors.fuelType.message}</p>}
          </div>

          <div>
            <label className="block text-xs font-bold text-vgray uppercase tracking-widest mb-1.5">Transmission</label>
            <select {...register('transmission')} className={selectClass(!!errors.transmission)}>
              <option value="">Select</option>
              {['Automatic','Manual'].map(o => <option key={o}>{o}</option>)}
            </select>
            {errors.transmission && <p className="text-xs text-red-500 mt-1">{errors.transmission.message}</p>}
          </div>

          <div>
            <label className="block text-xs font-bold text-vgray uppercase tracking-widest mb-1.5">Drive type</label>
            <select {...register('driveType')} className={selectClass(!!errors.driveType)}>
              <option value="">Select</option>
              {['4WD','AWD','2WD','FWD','RWD'].map(o => <option key={o}>{o}</option>)}
            </select>
            {errors.driveType && <p className="text-xs text-red-500 mt-1">{errors.driveType.message}</p>}
          </div>

          <div>
            <label className="block text-xs font-bold text-vgray uppercase tracking-widest mb-1.5">Body type</label>
            <select {...register('bodyType')} className={selectClass(!!errors.bodyType)}>
              <option value="">Select</option>
              {['SUV','Saloon','Hatchback','Pickup','Van','Wagon','Coupe','Convertible'].map(o => <option key={o}>{o}</option>)}
            </select>
            {errors.bodyType && <p className="text-xs text-red-500 mt-1">{errors.bodyType.message}</p>}
          </div>

          <div>
            <label className="block text-xs font-bold text-vgray uppercase tracking-widest mb-1.5">Seats</label>
            <input {...register('seats', { valueAsNumber: true })} type="number" min={1} max={12} className={inputClass(!!errors.seats)} />
            {errors.seats && <p className="text-xs text-red-500 mt-1">{errors.seats.message}</p>}
          </div>

          <div>
            <label className="block text-xs font-bold text-vgray uppercase tracking-widest mb-1.5">Condition</label>
            <select {...register('condition')} className={selectClass()}>
              {['Excellent','Good','Fair'].map(o => <option key={o}>{o}</option>)}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-vgray uppercase tracking-widest mb-1.5">Import from</label>
            <input {...register('importFrom')} placeholder="Japan" className={inputClass()} />
          </div>

          <div>
            <label className="block text-xs font-bold text-vgray uppercase tracking-widest mb-1.5">Location</label>
            <input {...register('location')} placeholder="Mombasa" className={inputClass(!!errors.location)} />
            {errors.location && <p className="text-xs text-red-500 mt-1">{errors.location.message}</p>}
          </div>
        </div>
      </div>

      {/* ── DESCRIPTION ── */}
      <div className="bg-white border border-vgray-border rounded-card p-6">
        <h2 className="font-display text-base font-bold text-dark mb-5">Description</h2>
        <textarea
          {...register('description')}
          rows={4}
          placeholder="Describe the car's condition, service history, extras, and anything else buyers should know..."
          className="w-full border border-vgray-border rounded-lg px-3.5 py-2.5 text-sm text-dark outline-none focus:border-orange transition-colors resize-none"
        />
      </div>

      {/* ── PUBLISH SETTINGS ── */}
      <div className="bg-white border border-vgray-border rounded-card p-6">
        <h2 className="font-display text-base font-bold text-dark mb-5">Publish settings</h2>
        <div className="flex flex-wrap gap-8">
          <div>
            <label className="block text-xs font-bold text-vgray uppercase tracking-widest mb-2">Status</label>
            <select
              {...register('status')}
              className="border border-vgray-border rounded-lg px-3.5 py-2.5 text-sm text-dark bg-white outline-none focus:border-orange"
            >
              <option value="LIVE">Live — visible to buyers</option>
              <option value="DRAFT">Draft — hidden from buyers</option>
            </select>
          </div>
          <div className="flex items-center gap-3 mt-5">
            <input
              type="checkbox"
              id="featured"
              {...register('featured')}
              className="w-4 h-4 accent-orange"
            />
            <label htmlFor="featured" className="text-sm font-semibold text-dark cursor-pointer">
              Feature this car on the homepage
            </label>
          </div>
        </div>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 text-sm font-medium px-4 py-3 rounded-lg">
          {error}
        </div>
      )}

      <div className="flex gap-4">
        <button
          type="submit"
          disabled={submitting}
          className="flex items-center gap-2 bg-orange hover:bg-orange-dark disabled:opacity-60 text-white font-bold px-8 py-3.5 rounded-btn text-sm transition-colors shadow-md"
        >
          {submitting
            ? <><Loader2 size={16} className="animate-spin" /> Saving...</>
            : 'Save listing'}
        </button>
        <button
          type="button"
          onClick={() => router.back()}
          className="bg-white text-dark font-bold px-6 py-3.5 rounded-btn text-sm border-2 border-vgray-border hover:border-orange hover:text-orange transition-colors"
        >
          Cancel
        </button>
      </div>
    </form>
  )
}
