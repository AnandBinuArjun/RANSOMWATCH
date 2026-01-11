import { prisma } from '@/lib/db'
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const data = await prisma.victim.findMany({
            orderBy: { discoveredAt: 'desc' },
            take: 50,
            include: {
                country: true,
                sector: true,
                group: true
            }
        })
        return NextResponse.json(data)
    } catch (e) {
        console.error("API Error:", e);
        return NextResponse.json(
            { error: "Internal Server Error", message: "Database unreachable" },
            { status: 500 }
        )
    }
} 
