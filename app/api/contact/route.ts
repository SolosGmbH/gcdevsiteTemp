import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

// Force Node.js runtime for Prisma compatibility on Vercel
export const runtime = 'nodejs'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, subject, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Save to database
    const contact = await prisma.contact.create({
      data: {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        company: company?.trim() || null,
        subject: subject?.trim() || null,
        message: message.trim(),
        status: 'NEW',
        createdAt: new Date(),
      },
    })

    console.log('Contact form submission saved:', contact.id)

    return NextResponse.json(
      {
        success: true,
        message: 'Contact form submitted successfully',
        id: contact.id,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Contact form submission error:', error)

    return NextResponse.json(
      {
        error: 'Internal server error. Please try again later.',
      },
      { status: 500 }
    )
  }
}
