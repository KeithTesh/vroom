import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  const body = await request.json()
  const { carId, buyerName, buyerPhone, message } = body

  if (!carId) {
    return NextResponse.json({ error: 'carId is required' }, { status: 400 })
  }

  const enquiry = await prisma.enquiry.create({
    data: {
      carId,
      buyerName:  buyerName  || null,
      buyerPhone: buyerPhone || null,
      message:    message    || null,
      waLinkClicked: true,
    },
  })

  // Also create a lead automatically
  if (buyerName && buyerPhone) {
    await prisma.lead.create({
      data: {
        carId,
        buyerName,
        buyerPhone,
        source: 'WHATSAPP',
        status: 'NEW',
      },
    })
  }

  return NextResponse.json({ success: true, enquiry })
}