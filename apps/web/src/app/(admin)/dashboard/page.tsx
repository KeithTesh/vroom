import { prisma } from '@/lib/prisma'
import { Users, Car, Calendar, TrendingUp } from 'lucide-react'
import Link from 'next/link'

async function getStats() {
  const [
    totalLeads,
    newLeads,
    totalCars,
    liveCars,
    testDrives,
    closedLeads,
  ] = await Promise.all([
    prisma.lead.count(),
    prisma.lead.count({ where: { status: 'NEW' } }),
    prisma.car.count(),
    prisma.car.count({ where: { status: 'LIVE' } }),
    prisma.testDrive.count({ where: { status: 'REQUESTED' } }),
    prisma.lead.count({ where: { status: 'CLOSED' } }),
  ])

  return { totalLeads, newLeads, totalCars, liveCars, testDrives, closedLeads }
}

async function getRecentLeads() {
  return prisma.lead.findMany({
    include: { car: { select: { title: true, make: true, model: true, year: true } } },
    orderBy: { createdAt: 'desc' },
    take: 8,
  })
}

const STATUS_STYLES: Record<string, string> = {
  NEW:               'bg-blue-50 text-blue-700',
  CONTACTED:         'bg-amber-50 text-amber-700',
  TEST_DRIVE_BOOKED: 'bg-orange-light text-orange-dark',
  CLOSED:            'bg-[#E1F5EE] text-[#0F6E56]',
  LOST:              'bg-red-50 text-red-700',
}

export default async function DashboardPage() {
  const [stats, recentLeads] = await Promise.all([
    getStats(),
    getRecentLeads(),
  ])

  const now      = new Date()
  const hour     = now.getHours()
  const greeting = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening'

  return (
    <div>
      {/* Header */}
      <div className="mb-6 md:mb-8">
        <h1 className="font-display text-xl md:text-2xl font-extrabold text-dark">
          {greeting}, Admin 👋
        </h1>
        <p className="text-sm text-vgray mt-1">
          {now.toLocaleDateString('en-KE', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} · Mombasa, Kenya
        </p>
      </div>

      {/* Metric cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-6 md:mb-8">
        {[
          {
            label: 'New leads',
            value: stats.newLeads,
            sub:   `${stats.totalLeads} total`,
            icon:  <Users size={18} className="text-orange" />,
            bg:    'bg-orange-light',
            href:  '/dashboard/leads',
          },
          {
            label: 'Live listings',
            value: stats.liveCars,
            sub:   `${stats.totalCars} total`,
            icon:  <Car size={18} className="text-orange" />,
            bg:    'bg-orange-light',
            href:  '/dashboard/inventory',
          },
          {
            label: 'Test drives',
            value: stats.testDrives,
            sub:   'Awaiting confirmation',
            icon:  <Calendar size={18} className="text-orange" />,
            bg:    'bg-orange-light',
            href:  '/dashboard/leads',
          },
          {
            label: 'Deals closed',
            value: stats.closedLeads,
            sub:   'All time',
            icon:  <TrendingUp size={18} className="text-[#1D9E75]" />,
            bg:    'bg-[#E1F5EE]',
            href:  '/dashboard/analytics',
          },
        ].map(card => (
          <Link
            key={card.label}
            href={card.href}
            className="bg-white border border-vgray-border rounded-card p-4 md:p-5 hover:border-orange-mid hover:shadow-sm transition-all cursor-pointer"
          >
            <div className={`w-9 h-9 md:w-10 md:h-10 ${card.bg} rounded-lg flex items-center justify-center mb-3`}>
              {card.icon}
            </div>
            <div className="font-display text-2xl md:text-3xl font-extrabold text-dark mb-0.5">
              {card.value}
            </div>
            <div className="text-xs text-vgray font-medium">{card.label}</div>
            <div className="text-xs text-vgray mt-0.5 opacity-60 hidden sm:block">{card.sub}</div>
          </Link>
        ))}
      </div>

      {/* Recent leads */}
      <div className="bg-white border border-vgray-border rounded-card overflow-hidden">
        <div className="px-4 md:px-6 py-4 border-b border-vgray-border flex items-center justify-between">
          <h2 className="font-display text-base font-bold text-dark">Recent leads</h2>
          <Link
            href="/dashboard/leads"
            className="text-xs font-bold text-orange bg-orange-light border border-orange-mid px-3 py-1.5 rounded-lg hover:bg-orange hover:text-white transition-colors cursor-pointer"
          >
            View all →
          </Link>
        </div>

        {recentLeads.length === 0 ? (
          <p className="text-center py-12 text-sm text-vgray">
            No leads yet — they'll appear here when buyers enquire
          </p>
        ) : (
          <>
            {/* Mobile cards */}
            <div className="md:hidden divide-y divide-vgray-border">
              {recentLeads.map(lead => (
                <div key={lead.id} className="p-4 space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="font-semibold text-dark text-sm">{lead.buyerName}</div>
                      <div className="text-xs text-orange font-semibold mt-0.5">{lead.buyerPhone}</div>
                    </div>
                    <span className={`inline-flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-full shrink-0 ${STATUS_STYLES[lead.status] || ''}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-current" />
                      {lead.status.replace(/_/g, ' ')}
                    </span>
                  </div>
                  <div className="text-xs text-vgray">
                    {lead.car.year} {lead.car.make} {lead.car.model}
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <div className="text-xs text-vgray">
                      {new Date(lead.createdAt).toLocaleDateString('en-KE')}
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={`tel:${lead.buyerPhone}`}
                        className="text-xs font-bold bg-orange-light text-orange-dark px-3 py-1.5 rounded-lg hover:bg-orange hover:text-white transition-colors"
                      >
                        📞 Call
                      </a>
                      <Link
                        href={`/dashboard/leads?id=${lead.id}`}
                        className="text-xs font-bold bg-vgray-light text-vgray px-3 py-1.5 rounded-lg hover:bg-dark hover:text-white transition-colors"
                      >
                        📝 Note
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-vgray-light text-xs font-bold text-vgray uppercase tracking-widest">
                    <th className="text-left px-6 py-3">Buyer</th>
                    <th className="text-left px-6 py-3">Car</th>
                    <th className="text-left px-6 py-3">Status</th>
                    <th className="text-left px-6 py-3">Date</th>
                    <th className="text-left px-6 py-3">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {recentLeads.map(lead => (
                    <tr key={lead.id} className="border-t border-vgray-border hover:bg-vgray-light/50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="font-semibold text-dark">{lead.buyerName}</div>
                        <div className="text-xs text-orange font-semibold mt-0.5">{lead.buyerPhone}</div>
                      </td>
                      <td className="px-6 py-4 text-vgray">
                        {lead.car.year} {lead.car.make} {lead.car.model}
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full ${STATUS_STYLES[lead.status] || ''}`}>
                          <span className="w-1.5 h-1.5 rounded-full bg-current" />
                          {lead.status.replace(/_/g, ' ')}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-xs text-vgray">
                        {new Date(lead.createdAt).toLocaleDateString('en-KE')}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          <a
                            href={`tel:${lead.buyerPhone}`}
                            className="text-xs font-bold bg-orange-light text-orange-dark px-3 py-1.5 rounded-lg hover:bg-orange hover:text-white transition-colors"
                          >
                            📞 Call
                          </a>
                          <Link
                            href={`/dashboard/leads?id=${lead.id}`}
                            className="text-xs font-bold bg-vgray-light text-vgray px-3 py-1.5 rounded-lg hover:bg-dark hover:text-white transition-colors"
                          >
                            📝 Note
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
