import { prisma } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function POST(
    request: Request,
    { params }: { params: { victimId: string } }
) {
    try {
        const { victimId } = params;
        // In a real app, this would check authentication
        const body = await request.json();
        const { confidence, verifiedBy } = body;

        const updated = await prisma.victim.update({
            where: { id: victimId },
            data: {
                confidence: confidence || "MEDIUM",
                verifiedBy: verifiedBy || "MAINTAINER",
                reviewedAt: new Date()
            }
        });

        return NextResponse.json(updated);
    } catch (error) {
        return NextResponse.json({ error: "Internal Error" }, { status: 500 });
    }
}
