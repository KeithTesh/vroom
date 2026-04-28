import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const body = await request.json()
  const { status, agentId, note } = body

  const lead = await prisma.lead.update({
    where: { id },
    data:  {
      ...(status  && { status }),
      ...(agentId && { agentId }),
    },
  })

  if (note && agentId) {
    await prisma.leadNote.create({
      data: { leadId: id, agentId, note },
    })
  }

  return NextResponse.json(lead)
}
