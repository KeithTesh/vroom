'use client'
import { useState } from 'react'
import { Star } from 'lucide-react'

export default function FeaturedToggle({
  carId,
  featured,
}: {
  carId:    string
  featured: boolean
}) {
  const [active, setActive]   = useState(featured)
  const [loading, setLoading] = useState(false)

  const toggle = async () => {
    setLoading(true)
    try {
      await fetch(`/api/admin/cars/${carId}`, {
        method:  'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ featured: !active }),
      })
      setActive(v => !v)
    } finally {
      setLoading(false)
    }
  }

  return (
    <button
      onClick={toggle}
      disabled={loading}
      title={active ? 'Remove from homepage' : 'Feature on homepage'}
      className={`text-xs font-bold px-3 py-1.5 rounded-lg transition-colors disabled:opacity-50 flex items-center gap-1.5 cursor-pointer ${
        active
          ? 'bg-orange text-white'
          : 'bg-vgray-light text-vgray hover:bg-orange-light hover:text-orange-dark border border-vgray-border'
      }`}
    >
      <Star size={11} className={active ? 'fill-white' : ''} />
      {active ? 'Featured' : 'Feature'}
    </button>
  )
}
