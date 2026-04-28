'use client'
import { useState } from 'react'

const STATUSES = ['NEW', 'CONTACTED', 'TEST_DRIVE_BOOKED', 'CLOSED', 'LOST']

const STATUS_STYLES: Record<string, string> = {
  NEW:               'bg-blue-50 text-blue-700',
  CONTACTED:         'bg-amber-50 text-amber-700',
  TEST_DRIVE_BOOKED: 'bg-orange-light text-orange-dark',
  CLOSED:            'bg-[#E1F5EE] text-[#0F6E56]',
  LOST:              'bg-red-50 text-red-700',
}

export default function LeadStatusUpdater({
  leadId,
  currentStatus,
}: {
  leadId: string
  currentStatus: string
}) {
  const [status,  setStatus]  = useState(currentStatus)
  const [loading, setLoading] = useState(false)

  const update = async (newStatus: string) => {
    setLoading(true)
    try {
      await fetch(`/api/admin/leads/${leadId}`, {
        method:  'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ status: newStatus }),
      })
      setStatus(newStatus)
    } finally {
      setLoading(false)
    }
  }

  return (
    <select
      value={status}
      onChange={e => update(e.target.value)}
      disabled={loading}
      className={`text-xs font-bold px-2.5 py-1.5 rounded-full border-0 outline-none cursor-pointer ${STATUS_STYLES[status]} disabled:opacity-60`}
    >
      {STATUSES.map(s => (
        <option key={s} value={s}>{s.replace(/_/g, ' ')}</option>
      ))}
    </select>
  )
}
