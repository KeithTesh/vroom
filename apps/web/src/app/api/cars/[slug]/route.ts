import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params
  const car = await prisma.car.findUnique({
    where: { slug },
    include: {
      images: { orderBy: { order: 'asc' } },
      showroom: true,
    },
  })

  if (!car) {
    return NextResponse.json({ error: 'Car not found' }, { status: 404 })
  }

  return NextResponse.json(car)
}
