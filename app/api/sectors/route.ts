import { prisma } from '@/lib/db'
import { cached } from '@/lib/cache'
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const data = await cached("api:sectors", 3600, async () => {
            return await prisma.sector.findMany({
                include: { _count: { select: { victims: true } } }
            })
        });
        return NextResponse.json(data)
    } catch (e) {
        return NextResponse.json({ error: "Internal Error" }, { status: 500 })
    }
} 
