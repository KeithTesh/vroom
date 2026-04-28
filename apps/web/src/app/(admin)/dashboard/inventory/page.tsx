import { prisma } from '@/lib/prisma'
import Link from 'next/link'
import { Plus } from 'lucide-react'
import FeaturedToggle from '@/components/admin/FeaturedToggle'

async function getCars() {
  return prisma.car.findMany({
    include: {
      images: { where: { isPrimary: true }, take: 1 },
      _count:  { select: { leads: true } },
    },
    orderBy: { createdAt: 'desc' },
  })
}

const STATUS_STYLES: Record<string, string> = {
  LIVE:     'bg-[#E1F5EE] text-[#0F6E56]',
  DRAFT:    'bg-amber-50 text-amber-700',
  SOLD:     'bg-vgray-light text-vgray',
  ARCHIVED: 'bg-red-50 text-red-700',
}

export default async function InventoryPage() {
  const cars = await getCars()

  return (
    <div>
      <div className="flex items-center justify-between mb-6 md:mb-7 flex-wrap gap-4">
        <div>
          <h1 className="font-display text-xl md:text-2xl font-extrabold text-dark">Inventory</h1>
          <p className="text-sm text-vgray mt-1">{cars.length} total listings</p>
        </div>
        <Link
          href="/dashboard/inventory/new"
          className="flex items-center gap-2 bg-orange hover:bg-orange-dark text-white font-bold px-4 md:px-5 py-2.5 rounded-btn text-sm transition-colors shadow-md cursor-pointer"
        >
          <Plus size={16} />
          Add new car
        </Link>
      </div>

      <div className="bg-white border border-vgray-border rounded-card overflow-hidden">
        {cars.length === 0 ? (
          <div className="text-center py-16 text-vgray">
            <div className="text-4xl mb-3">🚗</div>
            <p className="font-display font-bold text-dark mb-2">No cars yet</p>
            <Link
              href="/dashboard/inventory/new"
              className="inline-flex items-center gap-2 bg-orange text-white font-bold px-5 py-2.5 rounded-btn text-sm cursor-pointer"
            >
              <Plus size={14} /> Add your first car
            </Link>
          </div>
        ) : (
          <>
            {/* Mobile cards */}
            <div className="md:hidden divide-y divide-vgray-border">
              {cars.map(car => (
                <div key={car.id} className="p-4 space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="font-semibold text-dark text-sm">
                        {car.year} {car.make} {car.model}
                      </div>
                      <div className="text-xs text-vgray mt-0.5">
                        {car.mileage.toLocaleString()} km · {car.location}
                      </div>
                    </div>
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full shrink-0 ${STATUS_STYLES[car.status]}`}>
                      {car.status}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-display font-extrabold text-orange text-base">
                      {new Intl.NumberFormat('en-KE', {
                        style: 'currency', currency: 'KES', maximumFractionDigits: 0,
                      }).format(car.price)}
                    </span>
                    <span className="text-xs text-vgray">
                      {car._count.leads > 0 ? (
                        <span className="font-bold text-orange">{car._count.leads} lead{car._count.leads !== 1 ? 's' : ''}</span>
                      ) : 'No leads'}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap pt-1">
                    <FeaturedToggle carId={car.id} featured={car.featured} />
                    <Link
                      href={`/car/${car.slug}`}
                      target="_blank"
                      className="text-xs font-bold bg-orange-light text-orange-dark px-3 py-1.5 rounded-lg hover:bg-orange hover:text-white transition-colors cursor-pointer"
                    >
                      View
                    </Link>
                    <span className="text-xs text-vgray ml-auto">
                      {new Date(car.createdAt).toLocaleDateString('en-KE', {
                        day: 'numeric', month: 'short',
                      })}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-vgray-light text-xs font-bold text-vgray uppercase tracking-widest border-b border-vgray-border">
                    <th className="text-left px-6 py-3">Car</th>
                    <th className="text-left px-6 py-3">Price</th>
                    <th className="text-left px-6 py-3">Status</th>
                    <th className="text-left px-6 py-3">Leads</th>
                    <th className="text-left px-6 py-3">Added</th>
                    <th className="text-left px-6 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {cars.map(car => (
                    <tr key={car.id} className="border-t border-vgray-border hover:bg-vgray-light/40 transition-colors">
                      <td className="px-6 py-4">
                        <div className="font-semibold text-dark">
                          {car.year} {car.make} {car.model}
                        </div>
                        <div className="text-xs text-vgray mt-0.5">
                          {car.mileage.toLocaleString()} km · {car.location}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="font-display font-extrabold text-orange">
                          {new Intl.NumberFormat('en-KE', {
                            style: 'currency', currency: 'KES', maximumFractionDigits: 0,
                          }).format(car.price)}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${STATUS_STYLES[car.status]}`}>
                          {car.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`font-display text-lg font-extrabold ${car._count.leads > 0 ? 'text-orange' : 'text-vgray'}`}>
                          {car._count.leads}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-xs text-vgray">
                        {new Date(car.createdAt).toLocaleDateString('en-KE', {
                          day: 'numeric', month: 'short', year: 'numeric'
                        })}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2 flex-wrap">
                          <FeaturedToggle carId={car.id} featured={car.featured} />
                          <Link
                            href={`/car/${car.slug}`}
                            target="_blank"
                            className="text-xs font-bold bg-orange-light text-orange-dark px-3 py-1.5 rounded-lg hover:bg-orange hover:text-white transition-colors cursor-pointer"
                          >
                            View
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
