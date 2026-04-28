import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  const body = await request.json()
  const { carId, buyerName, buyerPhone, scheduledAt, timeSlot } = body

  if (!carId || !buyerName || !buyerPhone || !scheduledAt) {
    return NextResponse.json(
      { error: 'carId, buyerName, buyerPhone and scheduledAt are required' },
      { status: 400 }
    )
  }

  // Create lead
  const lead = await prisma.lead.create({
    data: {
      carId,
      buyerName,
      buyerPhone,
      source: 'FORM',
      status: 'NEW',
    },
  })

  // Create test drive
  const testDrive = await prisma.testDrive.create({
    data: {
      leadId:      lead.id,
      carId,
      scheduledAt: new Date(scheduledAt),
      status:      'REQUESTED',
      notes:       timeSlot || null,
    },
  })

  // Get car details for the email
  const car = await prisma.car.findUnique({
    where: { id: carId },
    select: { title: true, make: true, model: true, year: true },
  })

  // Notify the Vroom team by email
  await resend.emails.send({
    from:    process.env.EMAIL_FROM!,
    to:      process.env.EMAIL_FROM!,
    subject: `New test drive request — ${car?.title || 'Car'}`,
    html: `
      <h2>New test drive request</h2>
      <p><strong>Buyer:</strong> ${buyerName}</p>
      <p><strong>Phone:</strong> ${buyerPhone}</p>
      <p><strong>Car:</strong> ${car?.year} ${car?.make} ${car?.model}</p>
      <p><strong>Date:</strong> ${new Date(scheduledAt).toDateString()}</p>
      <p><strong>Time slot:</strong> ${timeSlot || 'Not specified'}</p>
    `,
  })

  return NextResponse.json({ success: true, lead, testDrive })
}
