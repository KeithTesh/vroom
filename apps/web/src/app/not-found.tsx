import Link from 'next/link'
import { Search } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="font-display text-8xl font-extrabold text-orange mb-4">
          404
        </div>
        <h1 className="font-display text-2xl font-bold text-dark mb-3">
          Page not found
        </h1>
        <p className="text-vgray text-sm leading-relaxed mb-8">
          The page you're looking for doesn't exist or the car listing may have been removed.
        </p>
        <div className="flex gap-3 justify-center">
          <Link
            href="/browse"
            className="flex items-center gap-2 bg-orange hover:bg-orange-dark text-white font-bold px-6 py-3 rounded-btn text-sm transition-colors"
          >
            <Search size={15} />
            Browse cars
          </Link>
          <Link
            href="/"
            className="bg-white text-dark font-bold px-6 py-3 rounded-btn text-sm border-2 border-vgray-border hover:border-orange hover:text-orange transition-colors"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  )
}
