import { LiveFeed } from '@/components/LiveFeed';
import { prisma } from '@/lib/db';
import { GlassCard } from '@/components/GlassCard';

export const dynamic = 'force-dynamic';

export default async function LivePage() {
    const victims = await prisma.victim.findMany({
        orderBy: { discoveredAt: 'desc' },
        take: 100,
        include: {
            country: true,
            sector: true,
            group: true
        }
    });

    return (
        <main className="min-h-screen p-4 md:p-8 pt-24 max-w-6xl mx-auto space-y-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                <div>
                    <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-rose-600">
                        Live Threat Feed
                    </h1>
                    <p className="text-slate-400 mt-2">
                        Real-time incoming ransomware notifications from global critical infrastructure.
                    </p>
                </div>
                <div className="flex gap-3">
                    <GlassCard className="!py-2 !px-4 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-xs font-mono text-slate-300">SYSTEM ACTIVE</span>
                    </GlassCard>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
                <LiveFeed initialData={victims} />
            </div>
        </main>
    );
}
