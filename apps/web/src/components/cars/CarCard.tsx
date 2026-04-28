'use client'
import Link from 'next/link'
import Image from 'next/image'
import { MessageCircle } from 'lucide-react'

interface Car {
  id: string
  slug: string
  title: string
  make: string
  model: string
  year: number
  price: number
  mileage: number
  fuelType: string
  transmission: string
  location: string
  featured: boolean
  images: { url: string; isPrimary: boolean }[]
}

interface CarCardProps {
  car: Car
}

export default function CarCard({ car }: CarCardProps) {
  const WA_NUMBER = process.env.NEXT_PUBLIC_WA_NUMBER || '254700000000'
  const waMessage = `Hi! I'm interested in the ${car.year} ${car.make} ${car.model} listed on Vroom. Is it still available?`
  const waLink = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(waMessage)}`
  const primaryImage = car.images?.[0]?.url
  const formattedPrice = new Intl.NumberFormat('en-KE', {
    style: 'currency',
    currency: 'KES',
    maximumFractionDigits: 0,
  }).format(car.price)

  return (
    <div className="group bg-white border border-vgray-border rounded-card overflow-hidden hover:-translate-y-1 hover:shadow-lg hover:border-orange-mid transition-all duration-200">

      {/* Image */}
      <div className="relative aspect-[16/10] bg-vgray-light overflow-hidden">
        {primaryImage ? (
          <Image
            src={primaryImage}
            alt={car.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-vgray text-sm">No image</div>
          </div>
        )}

        {/* Badge */}
        {car.featured && (
          <span className="absolute top-3 left-3 bg-orange text-white text-xs font-bold px-2.5 py-1 rounded-md uppercase tracking-wide">
            Featured
          </span>
        )}

        {/* WhatsApp button — shows on hover */}
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={e => e.stopPropagation()}
          className="absolute bottom-3 right-3 bg-[#25D366] hover:bg-[#1aad4f] text-white text-xs font-bold px-3 py-2 rounded-lg flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity shadow-md"
        >
          <MessageCircle size={13} />
          WhatsApp
        </a>
      </div>

      {/* Body */}
      <Link href={`/car/${car.slug}`}>
        <div className="p-4">
          <div className="font-display text-base font-bold text-dark mb-1 truncate">
            {car.year} {car.make} {car.model}
          </div>
          <div className="text-xs text-vgray mb-3">
            {car.mileage.toLocaleString()} km · {car.transmission} · {car.fuelType} · {car.location}
          </div>

          {/* Tags */}
          <div className="flex gap-1.5 flex-wrap mb-3">
            {[car.transmission, car.fuelType].map(tag => (
              <span
                key={tag}
                className="text-xs font-semibold bg-vgray-light text-vgray px-2 py-1 rounded border border-vgray-border"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Price row */}
          <div className="flex items-center justify-between pt-3 border-t border-vgray-border">
            <div className="text-sm font-bold text-orange">
              {formattedPrice}
            </div>
            <span className="bg-orange hover:bg-orange-dark text-white text-xs font-bold px-3.5 py-2 rounded-lg transition-colors">
              Enquire →
            </span>
          </div>
        </div>
      </Link>
    </div>
  )
}
