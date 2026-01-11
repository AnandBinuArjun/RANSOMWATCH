import { prisma } from '@/lib/db'
import { cached } from '@/lib/cache'
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        // Cache risk map for 10 minutes
        const data = await cached("api:map", 600, async () => {
            return await prisma.country.findMany({
                select: {
                    iso2: true,
                    name: true,
                    riskIndex: true,
                    _count: {
                        select: { victims: true }
                    }
                }
            })
        });

        return NextResponse.json(data)
    } catch (e) {
        return NextResponse.json({ error: "Internal Error" }, { status: 500 })
    }
} 
