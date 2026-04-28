import AddCarForm from '@/components/admin/AddCarForm'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'

export default function NewCarPage() {
  return (
    <div className="max-w-4xl">
      <div className="flex items-center gap-3 mb-7">
        <Link
          href="/dashboard/inventory"
          className="flex items-center gap-1.5 text-sm font-semibold text-vgray hover:text-dark transition-colors"
        >
          <ChevronLeft size={16} />
          Back to inventory
        </Link>
      </div>
      <div className="mb-7">
        <h1 className="font-display text-2xl font-extrabold text-dark">Add new car</h1>
        <p className="text-sm text-vgray mt-1">
          Fill in the details below. Set status to Live to publish immediately.
        </p>
      </div>
      <AddCarForm />
    </div>
  )
}
