import { prisma } from '@/lib/db'
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const data = await prisma.alert.findMany({
            orderBy: { createdAt: 'desc' },
            take: 20,
            include: {
                victim: {
                    include: { country: true, sector: true }
                }
            }
        })
        return NextResponse.json(data)
    } catch (e) {
        return NextResponse.json({ error: "Internal Error" }, { status: 500 })
    }
} 
