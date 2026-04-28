'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import {
  LayoutDashboard, Users, Car, BarChart2,
  Building2, Settings, LogOut, Menu, X
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
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Mobile hamburger */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        className="fixed top-4 left-4 z-50 md:hidden bg-dark text-white p-2.5 rounded-lg shadow-lg cursor-pointer"
      >
        <Menu size={18} />
      </button>

      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`w-56 bg-dark min-h-screen flex flex-col fixed left-0 top-0 z-50 transition-transform duration-200 ${
        open ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
      }`}>
        {/* Logo + mobile close */}
        <div className="px-5 py-5 border-b border-white/10 flex items-center justify-between">
          <div>
            <div className="font-display text-xl font-extrabold text-orange tracking-tight">
              Vroom.
            </div>
            <div className="text-xs text-white/30 font-semibold uppercase tracking-widest mt-0.5">
              Admin Panel
            </div>
          </div>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="md:hidden text-white/50 hover:text-white cursor-pointer p-1"
          >
            <X size={18} />
          </button>
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
                onClick={() => setOpen(false)}
                className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg mb-0.5 text-sm font-semibold transition-all cursor-pointer ${
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
          <button className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm font-semibold text-white/40 hover:text-white hover:bg-white/6 w-full transition-all cursor-pointer">
            <LogOut size={16} />
            Sign out
          </button>
        </div>
      </aside>
    </>
  )
}
