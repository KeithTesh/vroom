import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import { MessageCircle, MapPin, Calendar, Gauge, Phone } from 'lucide-react'
import TestDriveForm from '@/components/forms/TestDriveForm'
import CarImageGallery from '@/components/cars/CarImageGallery'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const car = await prisma.car.findUnique({
    where:   { slug },
    include: { images: { where: { isPrimary: true }, take: 1 } },
  })

  if (!car) return { title: 'Car not found' }

  const formattedPrice = new Intl.NumberFormat('en-KE', {
    style: 'currency', currency: 'KES', maximumFractionDigits: 0,
  }).format(car.price)

  return {
    title:       `${car.year} ${car.make} ${car.model} — ${formattedPrice}`,
    description: `${car.year} ${car.make} ${car.model} for sale in ${car.location}. ${car.mileage.toLocaleString()}km, ${car.transmission}, ${car.fuelType}. ${formattedPrice}. Verified by Vroom Kenya.`,
    openGraph: {
      title:       `${car.year} ${car.make} ${car.model}`,
      description: `${formattedPrice} · ${car.mileage.toLocaleString()}km · ${car.location}`,
      images:      car.images[0] ? [{ url: car.images[0].url }] : [],
    },
  }
}

async function getCar(slug: string) {
  return prisma.car.findUnique({
    where:   { slug },
    include: { images: { orderBy: { order: 'asc' } }, showroom: true },
  })
}

export default async function CarDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const car = await getCar(slug)
  if (!car) notFound()

  const WA_NUMBER = process.env.NEXT_PUBLIC_WA_NUMBER || '254700000000'
  const waMessage = `Hi! I'm interested in the ${car.year} ${car.make} ${car.model} listed on Vroom. Is it still available?`
  const waLink    = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(waMessage)}`

  const formattedPrice = new Intl.NumberFormat('en-KE', {
    style:                 'currency',
    currency:              'KES',
    maximumFractionDigits: 0,
  }).format(car.price)

  const specs = [
    { label: 'Make',         value: car.make },
    { label: 'Model',        value: car.model },
    { label: 'Year',         value: car.year },
    { label: 'Mileage',      value: `${car.mileage.toLocaleString()} km` },
    { label: 'Engine',       value: car.fuelType },
    { label: 'Transmission', value: car.transmission },
    { label: 'Drive',        value: car.driveType },
    { label: 'Body type',    value: car.bodyType },
    { label: 'Colour',       value: car.colour },
    { label: 'Seats',        value: car.seats },
    { label: 'Condition',    value: car.condition },
    { label: 'Location',     value: car.location },
  ]

  return (
    <div className="min-h-screen bg-white">

      {/* Breadcrumb */}
      <div className="border-b border-vgray-border px-6 py-3.5">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm text-vgray">
          <Link href="/"       className="text-orange font-semibold hover:underline">Home</Link>
          <span>›</span>
          <Link href="/browse" className="text-orange font-semibold hover:underline">Browse cars</Link>
          <span>›</span>
          <span className="text-dark font-semibold">{car.year} {car.make} {car.model}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8 grid lg:grid-cols-[1fr_400px] gap-10 items-start">

        {/* ── LEFT ── */}
        <div>
          <CarImageGallery
            images={car.images}
            title={car.title}
            featured={car.featured}
          />

          {/* Title + meta */}
          <div className="mb-2 text-sm font-bold text-orange uppercase tracking-widest">
            {car.make} · {car.year}
          </div>
          <h1 className="font-display text-4xl font-extrabold text-dark tracking-tight mb-4 leading-tight">
            {car.title}
          </h1>

          <div className="flex flex-wrap gap-5 mb-6 text-sm text-vgray">
            <span className="flex items-center gap-1.5">
              <Gauge size={14} /> {car.mileage.toLocaleString()} km
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin size={14} /> {car.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={14} /> {car.year}
            </span>
            <span className="inline-flex items-center gap-1 bg-[#E1F5EE] text-[#0F6E56] text-xs font-bold px-2.5 py-1 rounded-lg">
              ✓ Verified
            </span>
          </div>

          <hr className="border-vgray-border mb-6" />

          {/* Specs grid */}
          <h2 className="font-display text-lg font-bold text-dark mb-4">
            Full specifications
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
            {specs.map(s => (
              <div key={s.label} className="bg-vgray-light rounded-xl p-3.5">
                <div className="text-xs font-bold text-vgray uppercase tracking-widest mb-1">
                  {s.label}
                </div>
                <div className="text-sm font-bold text-dark">{String(s.value)}</div>
              </div>
            ))}
          </div>

          {/* Description */}
          {car.description && (
            <>
              <hr className="border-vgray-border mb-6" />
              <h2 className="font-display text-lg font-bold text-dark mb-3">Description</h2>
              <p className="text-sm text-vgray leading-relaxed">{car.description}</p>
            </>
          )}
        </div>

        {/* ── RIGHT SIDEBAR ── */}
        <div className="sticky top-20 flex flex-col gap-4">

          {/* Price + enquiry */}
          <div className="bg-white border border-vgray-border rounded-card p-6">
            <div className="bg-orange-light border border-orange-mid rounded-xl p-5 mb-5">
              <div className="font-display text-xl md:text-2xl font-extrabold text-orange mb-1 break-words">
                {formattedPrice}
              </div>
              <div className="text-xs text-orange-dark font-medium">
                Negotiable · All documents included
              </div>
            </div>

            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#1aad4f] text-white font-bold py-3.5 rounded-xl mb-3 transition-colors shadow-md cursor-pointer"
            >
              <MessageCircle size={18} />
              Enquire on WhatsApp
            </a>

            <a
              href={`tel:+${WA_NUMBER}`}
              className="flex items-center justify-center gap-2 w-full bg-white text-dark font-bold py-3.5 rounded-xl border-2 border-vgray-border hover:border-orange hover:text-orange transition-colors cursor-pointer"
            >
              <Phone size={16} />
              Call us now
            </a>
          </div>

          {/* Test drive form */}
          <div className="bg-white border border-vgray-border rounded-card p-6">
            <h3 className="font-display text-base font-bold text-dark mb-5">
              Book a test drive
            </h3>
            <TestDriveForm carId={car.id} />
          </div>
        </div>
      </div>
    </div>
  )
}
