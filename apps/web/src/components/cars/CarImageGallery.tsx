'use client'
import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

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
  const initial = Math.max(0, images.findIndex(i => i.isPrimary))
  const [idx, setIdx] = useState(initial)

  const prev = () => setIdx(i => (i - 1 + images.length) % images.length)
  const next = () => setIdx(i => (i + 1) % images.length)

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

  const active = images[idx]

  return (
    <>
      {/* Main image */}
      <div className="relative aspect-[16/10] bg-vgray-light rounded-2xl overflow-hidden mb-3 group/gallery">
        <Image
          key={idx}
          src={active.url}
          alt={title}
          fill
          className="object-cover animate-in fade-in duration-300 fill-mode-both"
          priority
        />

        {/* Badges */}
        <div className="absolute top-4 left-4 flex gap-2 z-10">
          <span className="bg-[#1D9E75] text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm">
            ✓ Verified
          </span>
          {featured && (
            <span className="bg-orange text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm">
              Featured
            </span>
          )}
        </div>

        {/* Image counter */}
        {images.length > 1 && (
          <div className="absolute top-4 right-4 bg-black/55 text-white text-xs font-bold px-2.5 py-1 rounded-lg z-10 backdrop-blur-sm">
            {idx + 1} / {images.length}
          </div>
        )}

        {/* Prev / Next arrows */}
        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={prev}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black/50 hover:bg-black/75 text-white rounded-full flex items-center justify-center opacity-0 group-hover/gallery:opacity-100 transition-all duration-200 cursor-pointer shadow-lg hover:scale-110"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next image"
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black/50 hover:bg-black/75 text-white rounded-full flex items-center justify-center opacity-0 group-hover/gallery:opacity-100 transition-all duration-200 cursor-pointer shadow-lg hover:scale-110"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}

        {/* Dot indicators */}
        {images.length > 1 && images.length <= 12 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIdx(i)}
                aria-label={`Image ${i + 1}`}
                className={`rounded-full transition-all duration-200 cursor-pointer ${
                  i === idx
                    ? 'w-5 h-2 bg-white'
                    : 'w-2 h-2 bg-white/55 hover:bg-white/80'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-2 mb-8 overflow-x-auto pb-1">
          {images.map((img, i) => (
            <button
              key={img.id}
              type="button"
              onClick={() => setIdx(i)}
              className={`relative flex-shrink-0 w-20 aspect-[4/3] rounded-lg overflow-hidden border-2 transition-all duration-200 cursor-pointer ${
                i === idx
                  ? 'border-orange shadow-sm scale-105'
                  : 'border-vgray-border hover:border-orange-mid opacity-70 hover:opacity-100'
              }`}
            >
              <Image src={img.url} alt={`${title} ${i + 1}`} fill className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </>
  )
}
