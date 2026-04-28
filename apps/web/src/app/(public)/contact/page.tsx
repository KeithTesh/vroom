import type { Metadata } from 'next'
import { MessageCircle, Phone, Mail, MapPin, Clock } from 'lucide-react'
import ContactForm from '@/components/forms/ContactForm'

export const metadata: Metadata = {
  title:       'Contact Us',
  description: "Get in touch with the Vroom team. We're available every day 8am–8pm via WhatsApp, phone, or email.",
}

export default function ContactPage() {
  const WA_NUMBER = process.env.NEXT_PUBLIC_WA_NUMBER || '254700000000'
  const waLink    = `https://wa.me/${WA_NUMBER}?text=Hi Vroom! I'd like to get in touch with your team.`

  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <section className="bg-dark px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-orange/15 text-orange text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-lg border border-orange/25 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-orange animate-pulse" />
            We reply within the hour
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Get in touch
          </h1>
          <p className="text-lg text-white/50 max-w-xl leading-relaxed">
            Have a question about a car? Want to sell? Just want to say hi?
            Our team is real people — no bots, no call centres.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12 md:py-16 grid lg:grid-cols-2 gap-10 md:gap-14 items-start">

        {/* Left — contact options */}
        <div>
          <h2 className="font-display text-xl md:text-2xl font-extrabold text-dark mb-6 md:mb-8 tracking-tight">
            Choose how to reach us
          </h2>

          <div className="space-y-4">

            {/* WhatsApp — primary */}
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 md:gap-5 p-4 md:p-5 bg-[#E1F5EE] border-2 border-[#9FE1CB] rounded-card hover:bg-[#25D366] hover:border-[#25D366] group transition-all cursor-pointer"
            >
              <div className="w-11 h-11 md:w-12 md:h-12 bg-[#25D366] group-hover:bg-white rounded-xl flex items-center justify-center flex-shrink-0 transition-colors">
                <MessageCircle size={20} className="text-white group-hover:text-[#25D366]" />
              </div>
              <div className="min-w-0">
                <div className="font-display text-base font-bold text-dark group-hover:text-white transition-colors">
                  WhatsApp us
                </div>
                <div className="text-sm text-vgray group-hover:text-white/80 transition-colors mt-0.5">
                  Fastest way to reach us — tap to open chat
                </div>
                <div className="text-xs font-bold text-[#0F6E56] group-hover:text-white mt-1 transition-colors">
                  +{WA_NUMBER}
                </div>
              </div>
              <div className="ml-auto text-[#25D366] group-hover:text-white font-bold text-sm transition-colors hidden sm:block shrink-0">
                Chat now →
              </div>
            </a>

            {/* Phone */}
            <a
              href={`tel:+${WA_NUMBER}`}
              className="flex items-center gap-4 md:gap-5 p-4 md:p-5 bg-white border border-vgray-border rounded-card hover:border-orange-mid hover:shadow-sm group transition-all cursor-pointer"
            >
              <div className="w-11 h-11 md:w-12 md:h-12 bg-orange-light border border-orange-mid rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone size={20} className="text-orange" />
              </div>
              <div className="min-w-0">
                <div className="font-display text-base font-bold text-dark">Call us</div>
                <div className="text-sm text-vgray mt-0.5">Speak directly with our team</div>
                <div className="text-xs font-bold text-orange mt-1">+{WA_NUMBER}</div>
              </div>
              <div className="ml-auto text-orange font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block shrink-0">
                Call →
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:hello@vroom.co.ke"
              className="flex items-center gap-4 md:gap-5 p-4 md:p-5 bg-white border border-vgray-border rounded-card hover:border-orange-mid hover:shadow-sm group transition-all cursor-pointer"
            >
              <div className="w-11 h-11 md:w-12 md:h-12 bg-orange-light border border-orange-mid rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail size={20} className="text-orange" />
              </div>
              <div className="min-w-0">
                <div className="font-display text-base font-bold text-dark">Email us</div>
                <div className="text-sm text-vgray mt-0.5">For non-urgent enquiries</div>
                <div className="text-xs font-bold text-orange mt-1">hello@vroom.co.ke</div>
              </div>
              <div className="ml-auto text-orange font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block shrink-0">
                Email →
              </div>
            </a>
          </div>

          {/* Hours + location */}
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="bg-vgray-light rounded-card p-4 md:p-5 border border-vgray-border">
              <div className="flex items-center gap-2 mb-3">
                <Clock size={16} className="text-orange" />
                <span className="text-xs font-bold text-vgray uppercase tracking-widest">Hours</span>
              </div>
              <div className="text-sm font-semibold text-dark">Mon – Sun</div>
              <div className="text-sm text-vgray">8:00 AM – 8:00 PM</div>
              <div className="text-xs text-orange font-bold mt-2">We reply within 1 hour</div>
            </div>

            <div className="bg-vgray-light rounded-card p-4 md:p-5 border border-vgray-border">
              <div className="flex items-center gap-2 mb-3">
                <MapPin size={16} className="text-orange" />
                <span className="text-xs font-bold text-vgray uppercase tracking-widest">Location</span>
              </div>
              <div className="text-sm font-semibold text-dark">Mombasa, Kenya</div>
              <div className="text-sm text-vgray">Serving all of Kenya</div>
              <div className="text-xs text-orange font-bold mt-2">Test drives arranged nearby</div>
            </div>
          </div>
        </div>

        {/* Right — contact form */}
        <div className="bg-white border border-vgray-border rounded-card p-5 md:p-7">
          <h2 className="font-display text-xl font-bold text-dark mb-1">Send us a message</h2>
          <p className="text-sm text-vgray mb-6">
            Fill in the form and we'll get back to you within the hour.
          </p>
          <ContactForm waNumber={WA_NUMBER} />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-vgray-light border-t border-vgray-border px-6 py-12 md:py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-xl md:text-2xl font-extrabold text-dark mb-8 tracking-tight text-center">
            Common questions
          </h2>
          <div className="space-y-3">
            {[
              {
                q: 'How quickly do you respond?',
                a: 'We reply to all WhatsApp messages within 1 hour during operating hours (8am–8pm daily). For test drive requests we confirm within 2 hours.',
              },
              {
                q: 'Can I negotiate the price?',
                a: "Yes — all prices listed on Vroom are negotiable. Contact us via WhatsApp and we'll discuss what works for both parties.",
              },
              {
                q: 'Do you offer financing?',
                a: 'Yes. We work with KCB and Equity Bank to offer vehicle financing. Ask us about it when you enquire about a specific car.',
              },
              {
                q: 'Can I bring a mechanic to inspect the car?',
                a: 'Absolutely. Every car on Vroom has been pre-inspected by our team, but you are welcome to bring your own mechanic to any test drive.',
              },
              {
                q: 'How do I sell my car through Vroom?',
                a: 'Send us a WhatsApp message with photos and details of your car. Our team will evaluate it and get back to you with an offer or listing proposal.',
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept M-Pesa, bank transfer (KCB, Equity, all major banks), and cash. We do not accept partial payments without a written agreement.',
              },
            ].map((faq, i) => (
              <details
                key={i}
                className="bg-white border border-vgray-border rounded-card group"
              >
                <summary className="flex items-center justify-between px-5 md:px-6 py-4 cursor-pointer list-none font-semibold text-dark text-sm hover:text-orange transition-colors">
                  {faq.q}
                  <span className="text-orange font-bold text-lg group-open:rotate-45 transition-transform inline-block ml-4 shrink-0">
                    +
                  </span>
                </summary>
                <div className="px-5 md:px-6 pb-5 text-sm text-vgray leading-relaxed border-t border-vgray-border pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
