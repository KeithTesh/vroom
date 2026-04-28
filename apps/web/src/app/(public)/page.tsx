import Link from 'next/link'
import { MessageCircle, Search, Shield, Zap, Star } from 'lucide-react'
import { prisma } from '@/lib/prisma'
import CarCard from '@/components/cars/CarCard'

export const dynamic = 'force-dynamic'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title:       "Vroom — Kenya's Verified Car Marketplace",
  description: 'Browse hundreds of verified cars from trusted showrooms across Kenya. M-Pesa ready, in-house support team, fast response.',
}

async function getFeaturedCars() {
  const cars = await prisma.car.findMany({
    where:   { status: 'LIVE' },
    include: { images: { where: { isPrimary: true }, take: 1 } },
    orderBy: { createdAt: 'desc' },
  })
  // pg driver adapter may return booleans as "t"/"f" strings
  return cars.filter(c => {
    const f = c.featured as unknown
    return f === true || f === 't' || f === '1' || f === 1
  }).slice(0, 4)
}

async function getRecentCars() {
  return prisma.car.findMany({
    where:   { status: 'LIVE' },
    include: { images: { where: { isPrimary: true }, take: 1 } },
    orderBy: { createdAt: 'desc' },
    take:    5,
  })
}

async function getStats() {
  const total = await prisma.car.count({ where: { status: 'LIVE' } })
  return { total }
}

export default async function HomePage() {
  const [featured, recent, stats] = await Promise.all([
    getFeaturedCars(),
    getRecentCars(),
    getStats(),
  ])

  const WA_NUMBER = process.env.NEXT_PUBLIC_WA_NUMBER || '254700000000'
  const waLink = `https://wa.me/${WA_NUMBER}?text=Hi! I found you on Vroom and I'd like to enquire about a car.`

  return (
    <>
      {/* ── HERO ── */}
      <section className="min-h-[88vh] grid md:grid-cols-2 items-center overflow-hidden relative">

        {/* Left */}
        <div className="bg-white px-6 md:px-16 lg:px-24 py-20 relative z-10">
          <div className="inline-flex items-center gap-2 bg-orange-light text-orange-dark text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-lg border border-orange-mid mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-orange animate-pulse" />
            Kenya's verified car marketplace
          </div>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold text-dark leading-[1.15] tracking-tight mb-6">
            Find your<br />
            next car.<br />
            <span className="text-orange">Verified.</span>
          </h1>

          <p className="text-lg text-vgray leading-relaxed mb-10 max-w-md">
            Browse verified vehicles from trusted showrooms across Kenya.
            Every car inspected, fairly priced, and ready to drive.
          </p>

          <div className="flex gap-4 flex-wrap mb-12">
            <Link
              href="/browse"
              className="flex items-center gap-2 bg-orange hover:bg-orange-dark text-white font-bold px-7 py-4 rounded-btn shadow-md transition-all hover:-translate-y-0.5"
            >
              <Search size={16} />
              Browse all cars
            </Link>
            <a
              href="#how-it-works"
              className="flex items-center gap-2 bg-white text-dark font-bold px-7 py-4 rounded-btn border-2 border-vgray-border hover:border-orange hover:text-orange transition-colors"
            >
              How it works
            </a>
          </div>

          {/* Trust items */}
          <div className="flex flex-wrap gap-6">
            {[
              { icon: <Star size={16} className="text-orange" />,   title: 'Verified listings', sub: 'Every car checked' },
              { icon: <Shield size={16} className="text-orange" />, title: 'M-Pesa ready',      sub: 'Secure payments' },
              { icon: <Zap size={16} className="text-orange" />,    title: 'Fast response',     sub: 'Under 1 hour' },
            ].map(t => (
              <div key={t.title} className="flex items-center gap-2.5">
                <div className="w-9 h-9 bg-orange-light border border-orange-mid rounded-lg flex items-center justify-center flex-shrink-0">
                  {t.icon}
                </div>
                <div>
                  <div className="text-sm font-bold text-dark">{t.title}</div>
                  <div className="text-xs text-vgray">{t.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — warm bg */}
        <div className="hidden md:block bg-vgray-light h-full min-h-[88vh] relative">
          <div className="absolute inset-0 flex items-center justify-center p-10">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-md aspect-[4/3] flex items-center justify-center">
              <div className="text-center text-vgray">
                <div className="text-6xl mb-4">🚗</div>
                <div className="font-display text-xl font-bold text-dark">
                  {stats.total > 0 ? `${stats.total} verified cars` : 'Cars coming soon'}
                </div>
                <div className="text-sm mt-1">Mombasa, Kenya</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SEARCH BAR ── */}
      <section className="bg-white px-6 pb-14">
        <div className="max-w-7xl mx-auto">
          <form method="GET" action="/browse">
            <div className="bg-dark rounded-2xl p-6 md:p-7 flex flex-wrap gap-3 items-end">
              {[
                { label: 'Make',      name: 'make',      placeholder: 'Any make' },
                { label: 'Model',     name: 'model',     placeholder: 'Any model' },
                { label: 'Year',      name: 'year',      placeholder: 'Any year' },
                { label: 'Max price', name: 'maxPrice',  placeholder: 'Any price' },
                { label: 'Body type', name: 'bodyType',  placeholder: 'Any type' },
              ].map(f => (
                <div key={f.label} className="flex-1 min-w-[120px]">
                  <label className="block text-xs font-bold text-white/55 uppercase tracking-widest mb-2">
                    {f.label}
                  </label>
                  <input
                    type="text"
                    name={f.name}
                    placeholder={f.placeholder}
                    className="w-full bg-white/10 border border-white/15 text-white placeholder:text-white/40 rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-orange transition-colors"
                  />
                </div>
              ))}
              <button
                type="submit"
                className="flex items-center gap-2 bg-orange hover:bg-orange-dark text-white font-bold px-6 h-11 rounded-lg text-sm transition-colors flex-shrink-0 shadow-md"
              >
                <Search size={15} />
                Search
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="bg-orange-light border-y border-orange-mid py-9 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { num: `${stats.total}+`, label: 'Verified listings' },
            { num: '48h',             label: 'Avg. time to deal' },
            { num: '100%',            label: 'Listings inspected' },
            { num: '<1hr',            label: 'Response time' },
          ].map(s => (
            <div key={s.label}>
              <div className="font-display text-4xl font-extrabold text-orange">{s.num}</div>
              <div className="text-sm font-medium text-orange-dark mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURED CARS ── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-9 flex-wrap gap-4">
            <div>
              <div className="text-xs font-bold text-orange uppercase tracking-widest mb-2">
                This week's picks
              </div>
              <h2 className="font-display text-3xl font-extrabold text-dark leading-snug tracking-tight">
                Featured cars
              </h2>
            </div>
            <Link
              href="/browse"
              className="text-sm font-bold text-orange bg-orange-light border border-orange-mid px-5 py-2.5 rounded-lg hover:bg-orange hover:text-white transition-colors"
            >
              View all cars →
            </Link>
          </div>

          {featured.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {featured.map(car => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-vgray">
              <div className="text-5xl mb-4">🚗</div>
              <p className="font-display text-xl font-bold text-dark mb-2">Listings coming soon</p>
              <p className="text-sm">Check back shortly — cars are being added now.</p>
            </div>
          )}
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="how-it-works" className="bg-dark py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-xs font-bold text-orange uppercase tracking-widest mb-3">
              Simple process
            </div>
            <h2 className="font-display text-3xl font-extrabold text-white leading-snug tracking-tight">
              How Vroom works
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: '01', title: 'Browse verified cars', desc: 'Every listing inspected by our team. No fakes, no surprises.' },
              { num: '02', title: 'WhatsApp us directly', desc: 'Tap any car and chat with a real person. We reply within the hour.' },
              { num: '03', title: 'Book a test drive',    desc: 'Pick your date and time. We arrange the location and walkthrough.' },
              { num: '04', title: 'Drive away happy',     desc: 'Close the deal, pay via M-Pesa or financing, and drive off.' },
            ].map(s => (
              <div key={s.num} className="text-center">
                <div className="w-16 h-16 rounded-full bg-orange/10 border border-orange/25 flex items-center justify-center mx-auto mb-5">
                  <span className="font-display text-xl font-extrabold text-orange">{s.num}</span>
                </div>
                <h3 className="font-display text-lg font-bold text-white mb-3">{s.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RECENTLY ADDED ── */}
      {recent.length > 0 && (
        <section className="py-20 px-6 bg-vgray-light">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-end justify-between mb-9 flex-wrap gap-4">
              <div>
                <div className="text-xs font-bold text-orange uppercase tracking-widest mb-2">
                  Just listed
                </div>
                <h2 className="font-display text-3xl font-extrabold text-dark leading-snug tracking-tight">
                  Recently added
                </h2>
              </div>
              <Link
                href="/browse"
                className="text-sm font-bold text-orange bg-orange-light border border-orange-mid px-5 py-2.5 rounded-lg hover:bg-orange hover:text-white transition-colors"
              >
                See all →
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {recent.map(car => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── WHATSAPP CTA ── */}
      <section className="bg-orange py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-5">
              Got a question?<br />
              Just WhatsApp us.
            </h2>
            <p className="text-lg text-white/75 leading-relaxed mb-9">
              Our team is live every day from 8am to 8pm.
              Real people, no bots, instant replies.
            </p>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-orange font-bold px-8 py-4 rounded-xl shadow-lg hover:-translate-y-0.5 hover:shadow-xl transition-all text-base"
            >
              <MessageCircle size={20} />
              Start WhatsApp chat
            </a>
          </div>

          {/* Chat bubbles */}
          <div className="flex flex-col gap-3">
            {[
              { msg: "Hi! Is the Toyota Fielder still available? 👋",        from: true  },
              { msg: "Yes! Just serviced. Want photos and a test drive? 🚗", from: false },
              { msg: "Definitely — what's the best price?",                  from: true  },
              { msg: "KSh 1.38M firm. Saturday morning Mombasa? 😊",        from: false },
            ].map((b, i) => (
              <div
                key={i}
                className={`max-w-xs px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                  b.from
                    ? 'bg-white/15 text-white self-start rounded-tl-sm'
                    : 'bg-white text-dark self-end rounded-tr-sm'
                }`}
              >
                {b.msg}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
