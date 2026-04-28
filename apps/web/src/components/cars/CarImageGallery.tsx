'use client'
import { useState } from 'react'
import Image from 'next/image'

interface CarImage {
  id:        string
  url:       string
  isPrimary: boolean
}

export default function CarImageGallery({
  images,
  title,
  featured,
}: {
  images:   CarImage[]
  title:    string
  featured: boolean
}) {
  const initial = images.find(i => i.isPrimary) ?? images[0]
  const [active, setActive] = useState<CarImage | undefined>(initial)

  if (images.length === 0) {
    return (
      <div className="relative aspect-[16/10] bg-vgray-light rounded-2xl overflow-hidden mb-8 flex items-center justify-center text-vgray">
        <div className="text-center">
          <div className="text-5xl mb-2">🚗</div>
          <p className="text-sm">Photos coming soon</p>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Main image */}
      <div className="relative aspect-[16/10] bg-vgray-light rounded-2xl overflow-hidden mb-3">
        {active && (
          <Image
            src={active.url}
            alt={title}
            fill
            className="object-cover transition-opacity duration-200"
            priority
          />
        )}
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="bg-[#1D9E75] text-white text-xs font-bold px-3 py-1.5 rounded-lg">
            ✓ Verified
          </span>
          {featured && (
            <span className="bg-orange text-white text-xs font-bold px-3 py-1.5 rounded-lg">
              Featured
            </span>
          )}
        </div>
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-2 mb-8 overflow-x-auto pb-1">
          {images.map(img => (
            <button
              key={img.id}
              type="button"
              onClick={() => setActive(img)}
              className={`relative flex-shrink-0 w-24 aspect-[4/3] rounded-lg overflow-hidden border-2 transition-colors ${
                active?.id === img.id ? 'border-orange' : 'border-vgray-border hover:border-orange-mid'
              }`}
            >
              <Image src={img.url} alt={title} fill className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </>
  )
}
