import { MetadataRoute } from 'next'
import { prisma } from '@/lib/prisma'

export const dynamic = 'force-dynamic'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://vroom.co.ke'

  let carUrls: MetadataRoute.Sitemap = []
  try {
    const cars = await prisma.car.findMany({
      where:  { status: 'LIVE' },
      select: { slug: true, updatedAt: true },
    })
    carUrls = cars.map(car => ({
      url:             `${baseUrl}/car/${car.slug}`,
      lastModified:    car.updatedAt,
      changeFrequency: 'weekly' as const,
      priority:        0.8,
    }))
  } catch {
    // DB unreachable at build time — return static urls only
  }

  return [
    { url: baseUrl,             lastModified: new Date(), changeFrequency: 'daily', priority: 1   },
    { url: `${baseUrl}/browse`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    ...carUrls,
  ]
}
