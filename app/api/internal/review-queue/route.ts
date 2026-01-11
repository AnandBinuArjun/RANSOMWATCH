import { prisma } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const pendingVictims = await prisma.victim.findMany({
            where: {
                // We lack a 'confidence' field in the schema provided in the prompt's first part?
                // Wait, the prompt *later* added: "confidence String @default("LOW")" in Section "Incident Validation Workflows"
                // I need to update the schema first!
            },
            orderBy: { discoveredAt: 'asc' }
        });
        return NextResponse.json(pendingVictims);
    } catch (error) {
        return NextResponse.json({ error: "Internal Error" }, { status: 500 });
    }
}
