'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard, Users, Car, BarChart2,
  Building2, Settings, LogOut
} from 'lucide-react'

const navItems = [
  { label: 'Dashboard', href: '/dashboard',            icon: LayoutDashboard },
  { label: 'Leads',     href: '/dashboard/leads',      icon: Users },
  { label: 'Inventory', href: '/dashboard/inventory',  icon: Car },
  { label: 'Analytics', href: '/dashboard/analytics',  icon: BarChart2 },
  { label: 'Showrooms', href: '/dashboard/showrooms',  icon: Building2 },
  { label: 'Settings',  href: '/dashboard/settings',   icon: Settings },
]

export default function AdminSidebar() {
  const path = usePathname()

  return (
    <aside className="w-56 bg-dark min-h-screen flex flex-col fixed left-0 top-0 z-40">
      {/* Logo */}
      <div className="px-5 py-5 border-b border-white/10">
        <div className="font-display text-xl font-extrabold text-orange tracking-tight">
          Vroom.
        </div>
        <div className="text-xs text-white/30 font-semibold uppercase tracking-widest mt-0.5">
          Admin Panel
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4">
        <div className="text-xs font-bold text-white/25 uppercase tracking-widest px-3 mb-2">
          Main
        </div>
        {navItems.map(item => {
          const Icon   = item.icon
          const active = path === item.href || path.startsWith(item.href + '/')
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg mb-0.5 text-sm font-semibold transition-all ${
                active
                  ? 'bg-orange/15 text-orange'
                  : 'text-white/50 hover:text-white hover:bg-white/6'
              }`}
            >
              <Icon size={16} />
              {item.label}
            </Link>
          )
        })}
      </nav>

      {/* Bottom */}
      <div className="px-3 py-4 border-t border-white/10">
        <button className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm font-semibold text-white/40 hover:text-white hover:bg-white/6 w-full transition-all">
          <LogOut size={16} />
          Sign out
        </button>
      </div>
    </aside>
  )
}
