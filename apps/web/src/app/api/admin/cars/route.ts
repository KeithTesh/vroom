import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  const body = await request.json()
  const {
    title, make, model, year, price, mileage,
    fuelType, transmission, driveType, bodyType,
    colour, seats, condition, importFrom,
    location, description, status, featured,
    slug, images,
  } = body

  const car = await prisma.car.create({
    data: {
      title, make, model, year, price, mileage,
      fuelType, transmission, driveType, bodyType,
      colour, seats, condition, importFrom,
      location, description, status, featured, slug,
      images: {
        create: images.map((img: { url: string; fileId: string; isPrimary: boolean }, index: number) => ({
          url:         img.url,
          imagekitId:  img.fileId,
          order:       index,
          isPrimary:   img.isPrimary,
        })),
      },
    },
    include: { images: true },
  })

  return NextResponse.json(car)
}

export async function GET() {
  const cars = await prisma.car.findMany({
    include: {
      images: { where: { isPrimary: true }, take: 1 },
      _count:  { select: { leads: true } },
    },
    orderBy: { createdAt: 'desc' },
  })
  return NextResponse.json(cars)
}
