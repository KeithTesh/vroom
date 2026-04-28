import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)

  const make       = searchParams.get('make') || undefined
  const model      = searchParams.get('model') || undefined
  const year       = searchParams.get('year') ? Number(searchParams.get('year')) : undefined
  const maxPrice   = searchParams.get('maxPrice') ? Number(searchParams.get('maxPrice')) : undefined
  const bodyType   = searchParams.get('bodyType') || undefined
  const page       = Number(searchParams.get('page') || 1)
  const limit      = 12

  const cars = await prisma.car.findMany({
    where: {
      status: 'LIVE',
      ...(make      && { make }),
      ...(model     && { model }),
      ...(year      && { year }),
      ...(maxPrice  && { price: { lte: maxPrice } }),
      ...(bodyType  && { bodyType }),
    },
    include: {
      images: {
        where: { isPrimary: true },
        take: 1,
      },
    },
    orderBy: { createdAt: 'desc' },
    skip: (page - 1) * limit,
    take: limit,
  })

  const total = await prisma.car.count({
    where: { status: 'LIVE' },
  })

  return NextResponse.json({ cars, total, page, pages: Math.ceil(total / limit) })
}