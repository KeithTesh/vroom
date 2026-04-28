import { prisma } from '@/lib/prisma'
import CarCard from '@/components/cars/CarCard'
import { Search } from 'lucide-react'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title:       'Browse Cars',
  description: 'Browse all verified car listings across Kenya. Filter by make, model, price, and body type.',
}

interface SearchParams {
  make?: string
  model?: string
  year?: string
  maxPrice?: string
  bodyType?: string
  transmission?: string
  page?: string
}

async function getCars(filters: SearchParams) {
  const page  = Number(filters.page || 1)
  const limit = 12

  const where = {
    status: 'LIVE' as const,
    ...(filters.make         && { make: filters.make }),
    ...(filters.model        && { model: filters.model }),
    ...(filters.year         && { year: Number(filters.year) }),
    ...(filters.maxPrice     && { price: { lte: Number(filters.maxPrice) } }),
    ...(filters.bodyType     && { bodyType: filters.bodyType }),
    ...(filters.transmission && { transmission: filters.transmission }),
  }

  const [cars, total] = await Promise.all([
    prisma.car.findMany({
      where,
      include: { images: { where: { isPrimary: true }, take: 1 } },
      orderBy: { createdAt: 'desc' },
      skip:  (page - 1) * limit,
      take:  limit,
    }),
    prisma.car.count({ where }),
  ])

  return { cars, total, page, pages: Math.ceil(total / limit) }
}

async function getFilterOptions() {
  const [makes, bodyTypes] = await Promise.all([
    prisma.car.findMany({
      where:    { status: 'LIVE' },
      select:   { make: true },
      distinct: ['make'],
      orderBy:  { make: 'asc' },
    }),
    prisma.car.findMany({
      where:    { status: 'LIVE' },
      select:   { bodyType: true },
      distinct: ['bodyType'],
      orderBy:  { bodyType: 'asc' },
    }),
  ])
  return {
    makes:     makes.map(c => c.make),
    bodyTypes: bodyTypes.map(c => c.bodyType),
  }
}

export default async function BrowsePage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>
}) {
  const params = await searchParams
  const [{ cars, total, page, pages }, filterOptions] = await Promise.all([
    getCars(params),
    getFilterOptions(),
  ])

  const priceOptions = [
    { label: 'Under KES 1M',  value: '1000000'  },
    { label: 'Under KES 2M',  value: '2000000'  },
    { label: 'Under KES 4M',  value: '4000000'  },
    { label: 'Under KES 7M',  value: '7000000'  },
    { label: 'Under KES 10M', value: '10000000' },
  ]

  return (
    <div className="min-h-screen bg-vgray-light">

      {/* Hero strip */}
      <div className="bg-dark px-6 py-10">
        <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-4">
          <div>
            <h1 className="font-display text-3xl font-extrabold text-white tracking-tight">
              Browse all cars
            </h1>
            <p className="text-sm text-white/45 mt-1">
              {total} verified listings across Kenya
            </p>
          </div>
          <span className="bg-orange text-white text-sm font-bold px-5 py-2.5 rounded-lg">
            {total} results
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8 flex gap-8 items-start">

        {/* ── SIDEBAR FILTERS ── */}
        <aside className="w-64 flex-shrink-0 hidden lg:block">
          <form className="bg-white rounded-card border border-vgray-border p-5 sticky top-20">
            <div className="flex items-center justify-between mb-5">
              <span className="font-display text-base font-bold text-dark">Filters</span>
              <Link href="/browse" className="text-xs font-bold text-orange">
                Clear all
              </Link>
            </div>

            {/* Make */}
            <div className="mb-5 pb-5 border-b border-vgray-border">
              <label className="block text-xs font-bold text-vgray uppercase tracking-widest mb-2">
                Make
              </label>
              <select
                name="make"
                defaultValue={params.make || ''}
                className="w-full border border-vgray-border rounded-lg px-3 py-2.5 text-sm text-dark bg-white outline-none focus:border-orange"
              >
                <option value="">Any make</option>
                {filterOptions.makes.map(m => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>
            </div>

            {/* Body type */}
            <div className="mb-5 pb-5 border-b border-vgray-border">
              <label className="block text-xs font-bold text-vgray uppercase tracking-widest mb-2">
                Body type
              </label>
              <div className="flex flex-wrap gap-2">
                {filterOptions.bodyTypes.map(bt => (
                  <Link
                    key={bt}
                    href={`/browse?bodyType=${bt}`}
                    className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition-colors ${
                      params.bodyType === bt
                        ? 'bg-orange-light border-orange-mid text-orange-dark'
                        : 'bg-white border-vgray-border text-vgray hover:border-orange-mid'
                    }`}
                  >
                    {bt}
                  </Link>
                ))}
              </div>
            </div>

            {/* Max price */}
            <div className="mb-5 pb-5 border-b border-vgray-border">
              <label className="block text-xs font-bold text-vgray uppercase tracking-widest mb-2">
                Max price
              </label>
              <select
                name="maxPrice"
                defaultValue={params.maxPrice || ''}
                className="w-full border border-vgray-border rounded-lg px-3 py-2.5 text-sm text-dark bg-white outline-none focus:border-orange"
              >
                <option value="">Any price</option>
                {priceOptions.map(p => (
                  <option key={p.value} value={p.value}>{p.label}</option>
                ))}
              </select>
            </div>

            {/* Transmission */}
            <div className="mb-5">
              <label className="block text-xs font-bold text-vgray uppercase tracking-widest mb-2">
                Transmission
              </label>
              <div className="flex gap-2">
                {['Automatic', 'Manual'].map(t => (
                  <Link
                    key={t}
                    href={`/browse?transmission=${t}`}
                    className={`flex-1 text-center text-xs font-semibold px-3 py-2 rounded-full border transition-colors ${
                      params.transmission === t
                        ? 'bg-orange-light border-orange-mid text-orange-dark'
                        : 'bg-white border-vgray-border text-vgray hover:border-orange-mid'
                    }`}
                  >
                    {t}
                  </Link>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-orange hover:bg-orange-dark text-white font-bold py-3 rounded-btn text-sm transition-colors"
            >
              Apply filters
            </button>
          </form>
        </aside>

        {/* ── GRID ── */}
        <div className="flex-1 min-w-0">

          {/* Top bar */}
          <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
            <p className="text-sm text-vgray">
              <span className="font-bold text-dark">{total}</span> cars found
            </p>
            <select className="border border-vgray-border rounded-lg px-3 py-2 text-sm text-dark bg-white outline-none focus:border-orange">
              <option>Newest first</option>
              <option>Price: low to high</option>
              <option>Price: high to low</option>
            </select>
          </div>

          {/* Cars */}
          {cars.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {cars.map(car => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          ) : (
            <div className="text-center py-24">
              <div className="text-5xl mb-4">🔍</div>
              <p className="font-display text-xl font-bold text-dark mb-2">
                No cars found
              </p>
              <p className="text-sm text-vgray mb-6">
                Try adjusting your filters or browse all listings
              </p>
              <Link
                href="/browse"
                className="inline-flex items-center gap-2 bg-orange text-white font-bold px-6 py-3 rounded-btn text-sm"
              >
                <Search size={15} />
                Clear filters
              </Link>
            </div>
          )}

          {/* Pagination */}
          {pages > 1 && (
            <div className="flex gap-2 justify-center mt-10">
              {page > 1 && (
                <Link
                  href={`/browse?page=${page - 1}`}
                  className="w-10 h-10 flex items-center justify-center border border-vgray-border rounded-lg bg-white text-dark hover:border-orange hover:text-orange text-sm font-semibold transition-colors"
                >
                  ‹
                </Link>
              )}
              {Array.from({ length: pages }, (_, i) => i + 1).map(p => (
                <Link
                  key={p}
                  href={`/browse?page=${p}`}
                  className={`w-10 h-10 flex items-center justify-center rounded-lg text-sm font-semibold transition-colors ${
                    p === page
                      ? 'bg-orange text-white border border-orange'
                      : 'bg-white border border-vgray-border text-dark hover:border-orange hover:text-orange'
                  }`}
                >
                  {p}
                </Link>
              ))}
              {page < pages && (
                <Link
                  href={`/browse?page=${page + 1}`}
                  className="w-10 h-10 flex items-center justify-center border border-vgray-border rounded-lg bg-white text-dark hover:border-orange hover:text-orange text-sm font-semibold transition-colors"
                >
                  ›
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
