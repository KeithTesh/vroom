import { prisma } from '@/lib/prisma'
import LeadStatusUpdater from '@/components/admin/LeadStatusUpdater'
import { MessageCircle } from 'lucide-react'
import Link from 'next/link'

async function getLeads(status?: string) {
  return prisma.lead.findMany({
    where:   status ? { status: status as never } : undefined,
    include: {
      car:   { select: { title: true, make: true, model: true, year: true, slug: true } },
      notes: { orderBy: { createdAt: 'desc' }, take: 1 },
    },
    orderBy: { createdAt: 'desc' },
  })
}

const STATUSES = ['NEW', 'CONTACTED', 'TEST_DRIVE_BOOKED', 'CLOSED', 'LOST']

const STATUS_STYLES: Record<string, string> = {
  NEW:               'bg-blue-50 text-blue-700 border-blue-100',
  CONTACTED:         'bg-amber-50 text-amber-700 border-amber-100',
  TEST_DRIVE_BOOKED: 'bg-orange-light text-orange-dark border-orange-mid',
  CLOSED:            'bg-[#E1F5EE] text-[#0F6E56] border-[#9FE1CB]',
  LOST:              'bg-red-50 text-red-700 border-red-100',
}

export default async function LeadsPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string }>
}) {
  const { status } = await searchParams
  const leads = await getLeads(status)

  return (
    <div>
      <div className="flex items-center justify-between mb-7 flex-wrap gap-4">
        <div>
          <h1 className="font-display text-2xl font-extrabold text-dark">Lead tracker</h1>
          <p className="text-sm text-vgray mt-1">{leads.length} leads total</p>
        </div>
      </div>

      {/* Status filter tabs */}
      <div className="flex gap-2 mb-6 flex-wrap">
        <Link
          href="/dashboard/leads"
          className={`text-xs font-bold px-4 py-2 rounded-lg border transition-colors ${
            !status
              ? 'bg-orange text-white border-orange'
              : 'bg-white text-vgray border-vgray-border hover:border-orange-mid'
          }`}
        >
          All ({leads.length})
        </Link>
        {STATUSES.map(s => (
          <Link
            key={s}
            href={`/dashboard/leads?status=${s}`}
            className={`text-xs font-bold px-4 py-2 rounded-lg border transition-colors ${
              status === s
                ? 'bg-orange text-white border-orange'
                : 'bg-white text-vgray border-vgray-border hover:border-orange-mid'
            }`}
          >
            {s.replace(/_/g, ' ')}
          </Link>
        ))}
      </div>

      {/* Leads table */}
      <div className="bg-white border border-vgray-border rounded-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-vgray-light text-xs font-bold text-vgray uppercase tracking-widest border-b border-vgray-border">
                <th className="text-left px-6 py-3">Buyer</th>
                <th className="text-left px-6 py-3">Car interested in</th>
                <th className="text-left px-6 py-3">Status</th>
                <th className="text-left px-6 py-3">Source</th>
                <th className="text-left px-6 py-3">Date</th>
                <th className="text-left px-6 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {leads.length === 0 ? (
                <tr>
                  <td colSpan={6} className="text-center py-16 text-vgray">
                    <div className="text-4xl mb-3">📋</div>
                    <p className="font-display font-bold text-dark mb-1">No leads yet</p>
                    <p className="text-sm">Leads appear here when buyers enquire on the website</p>
                  </td>
                </tr>
              ) : (
                leads.map(lead => (
                  <tr key={lead.id} className="border-t border-vgray-border hover:bg-vgray-light/40 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-semibold text-dark">{lead.buyerName}</div>
                      <div className="text-xs text-orange font-semibold mt-0.5">
                        {lead.buyerPhone}
                      </div>
                      {lead.buyerEmail && (
                        <div className="text-xs text-vgray mt-0.5">{lead.buyerEmail}</div>
                      )}
                    </td>
                    <td className="px-6 py-4 text-vgray">
                      <div className="font-medium text-dark">
                        {lead.car.year} {lead.car.make} {lead.car.model}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <LeadStatusUpdater leadId={lead.id} currentStatus={lead.status} />
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-xs font-semibold bg-vgray-light text-vgray px-2.5 py-1 rounded-lg border border-vgray-border">
                        {lead.source}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-xs text-vgray whitespace-nowrap">
                      {new Date(lead.createdAt).toLocaleDateString('en-KE', {
                        day: 'numeric', month: 'short', year: 'numeric'
                      })}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <a
                          href={`tel:${lead.buyerPhone}`}
                          className="text-xs font-bold bg-orange-light text-orange-dark px-3 py-1.5 rounded-lg hover:bg-orange hover:text-white transition-colors"
                        >
                          📞 Call
                        </a>
                        <a
                          href={`https://wa.me/${lead.buyerPhone.replace(/\D/g, '')}?text=Hi ${lead.buyerName}, this is Vroom calling about the ${lead.car.make} ${lead.car.model}.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-bold bg-[#E1F5EE] text-[#0F6E56] px-3 py-1.5 rounded-lg hover:bg-[#1D9E75] hover:text-white transition-colors flex items-center gap-1"
                        >
                          <MessageCircle size={11} /> WA
                        </a>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
