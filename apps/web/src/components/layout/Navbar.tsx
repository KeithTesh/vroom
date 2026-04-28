'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, MessageCircle } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const WA_NUMBER = process.env.NEXT_PUBLIC_WA_NUMBER || '254700000000'
  const waLink = `https://wa.me/${WA_NUMBER}?text=Hi! I found you on Vroom and I'd like to enquire about a car.`

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-orange-mid">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="font-display text-2xl font-extrabold text-orange tracking-tight">
          Vroom<span className="text-dark">.</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: 'Home',        href: '/' },
            { label: 'Browse cars', href: '/browse' },
            { label: 'How it works', href: '/#how-it-works' },
            { label: 'Contact',      href: '/contact' },
          ].map(l => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-semibold text-dark hover:text-orange transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <span className="text-xs font-bold bg-orange-light text-orange-dark px-3 py-1.5 rounded-md border border-orange-mid">
            📍 Mombasa, KE
          </span>
        </div>

        {/* WhatsApp CTA */}
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 bg-orange hover:bg-orange-dark text-white text-sm font-bold px-5 py-2.5 rounded-btn transition-colors shadow-sm"
        >
          <MessageCircle size={16} />
          Chat on WhatsApp
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-orange-mid px-6 py-4 flex flex-col gap-4">
          {[
            { label: 'Home',         href: '/' },
            { label: 'Browse cars',  href: '/browse' },
            { label: 'How it works', href: '/#how-it-works' },
            { label: 'Contact',      href: '/contact' },
          ].map(l => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-semibold text-dark"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-orange text-white text-sm font-bold px-5 py-3 rounded-btn w-full justify-center"
          >
            <MessageCircle size={16} />
            Chat on WhatsApp
          </a>
        </div>
      )}
    </nav>
  )
}
