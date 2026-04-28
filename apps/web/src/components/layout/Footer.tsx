import Link from 'next/link'

const LINKS = [
  {
    title: 'Browse',
    links: [
      { label: 'All cars',     href: '/browse' },
      { label: 'SUVs & 4x4s', href: '/browse?bodyType=SUV' },
      { label: 'Saloons',      href: '/browse?bodyType=Saloon' },
      { label: 'Hatchbacks',   href: '/browse?bodyType=Hatchback' },
      { label: 'Pickups',      href: '/browse?bodyType=Pickup' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Finance',      href: '/browse' },
      { label: 'Insurance',    href: '/browse' },
      { label: 'Inspections',  href: '/browse' },
      { label: 'Test drives',  href: '/browse' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Vroom',  href: '/' },
      { label: 'How it works', href: '/#how-it-works' },
      { label: 'Careers',      href: '/' },
      { label: 'Contact',      href: `https://wa.me/${process.env.NEXT_PUBLIC_WA_NUMBER || '254700000000'}` },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-2 md:grid-cols-5 gap-10">

        {/* Brand */}
        <div className="col-span-2">
          <div className="font-display text-3xl font-extrabold text-orange tracking-tight mb-3">
            Vroom.
          </div>
          <p className="text-sm text-white/35 leading-relaxed max-w-xs">
            Kenya's trusted car marketplace. Every listing verified, every buyer supported by a real team.
          </p>
        </div>

        {/* Link columns */}
        {LINKS.map(col => (
          <div key={col.title}>
            <div className="text-xs font-bold text-white/50 uppercase tracking-widest mb-4">
              {col.title}
            </div>
            {col.links.map(l => (
              <Link
                key={l.label}
                href={l.href}
                className="block text-sm text-white/55 hover:text-orange mb-2.5 transition-colors cursor-pointer"
              >
                {l.label}
              </Link>
            ))}
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 px-6 py-5 max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-3">
        <p className="text-xs text-white/25">
          © 2025 Vroom Kenya Ltd. All rights reserved. Mombasa, Kenya.
        </p>
        <div className="flex gap-2 flex-wrap">
          {['M-Pesa', 'KCB', 'Equity Bank', 'Visa'].map(p => (
            <span
              key={p}
              className="text-xs font-bold text-white/50 bg-white/10 border border-white/10 px-2.5 py-1 rounded"
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </footer>
  )
}
