import { prisma } from '@/lib/db'
import { cached } from '@/lib/cache'
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        // Cache groups for 1 hour
        const data = await cached("api:groups", 3600, async () => {
            return await prisma.ransomwareGroup.findMany({
                where: { active: true },
                include: {
                    _count: { select: { victims: true } }
                }
            })
        });

        return NextResponse.json(data)
    } catch (e) {
        return NextResponse.json({ error: "Internal Error" }, { status: 500 })
    }
} 
