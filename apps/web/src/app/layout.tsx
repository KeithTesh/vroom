import type { Metadata } from 'next'
import { DM_Sans, Syne, Geist_Mono } from 'next/font/google'
import './globals.css'
import QueryProvider from '@/components/shared/QueryProvider'

const dmSans    = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans' })
const syne      = Syne({ subsets: ['latin'], variable: '--font-syne' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

export const metadata: Metadata = {
  title: {
    default:  "Vroom — Kenya's Verified Car Marketplace",
    template: '%s | Vroom Kenya',
  },
  description:
    'Browse hundreds of verified cars from trusted showrooms across Kenya. Every listing inspected, fairly priced, and backed by our in-house team. M-Pesa ready.',
  keywords: ['cars for sale Kenya', 'buy car Mombasa', 'verified cars Kenya', 'used cars Kenya'],
  openGraph: {
    title:       "Vroom — Kenya's Verified Car Marketplace",
    description: 'Browse verified cars across Kenya. M-Pesa ready.',
    url:         'https://vroom.co.ke',
    siteName:    'Vroom Kenya',
    locale:      'en_KE',
    type:        'website',
  },
  twitter: {
    card:  'summary_large_image',
    title: "Vroom — Kenya's Verified Car Marketplace",
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'
  ),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${syne.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <QueryProvider>
          {children}
        </QueryProvider>
      </body>
    </html>
  )
}
