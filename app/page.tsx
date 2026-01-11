import { prisma } from '@/lib/db';
import { Navbar } from '@/components/Navbar';
import { LandingHero } from '@/components/LandingHero';
import { LiveFeed } from '@/components/LiveFeed';
import { TopTargets } from '@/components/TopTargets';
import { GlassCard } from '@/components/GlassCard';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default async function Home() {
    const victims = await prisma.victim.findMany({
        orderBy: { discoveredAt: 'desc' },
        take: 50,
        include: { country: true, sector: true, group: true }
    });

    return (
        <main className="min-h-screen p-4 md:p-8 space-y-8 max-w-[1600px] mx-auto">
            <Navbar />

            <LandingHero />

            {/* Main Content Grid */}
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-12">
                {/* Live Feed Column */}
                <div className="lg:col-span-8 space-y-6">
                    <div className="flex justify-between items-end border-b border-white/5 pb-4">
                        <h2 className="text-2xl font-bold flex items-center gap-3">
                            <span className="w-2 h-8 bg-rose-500 rounded-full" />
                            Live Attack Stream
                        </h2>
                        <div className="flex gap-2 text-xs">
                            <button className="px-3 py-1.5 bg-rose-500/20 text-rose-400 rounded-lg border border-rose-500/30 hover:bg-rose-500/30 transition">CRITICAL ONLY</button>
                            <button className="px-3 py-1.5 bg-slate-800 text-slate-400 rounded-lg border border-slate-700 hover:bg-slate-700 transition">ALL EVENTS</button>
                        </div>
                    </div>

                    <LiveFeed initialData={victims} />
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-4 space-y-6">
                    <TopTargets />

                    <GlassCard className="text-center relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-tr from-rose-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <h3 className="text-lg font-bold mb-2 relative z-10">Public Alert Network</h3>
                        <p className="text-sm text-slate-400 mb-6 relative z-10">
                            Get instant notifications for critical infrastructure threats in your region.
                        </p>
                        <button className="w-full py-3 bg-slate-800 hover:bg-slate-700 rounded-xl text-sm border border-slate-700 transition relative z-10 font-medium">
                            Subscribe to Alerts
                        </button>
                    </GlassCard>
                </div>
            </section>

            <footer className="pt-20 pb-10 text-center text-slate-600 text-sm">
                <p>© 2026 RANSOMWATCH - Operated by Anand Binu Arjun</p>
                <div className="flex justify-center gap-4 mt-4">
                    <Link href="/transparency" className="hover:text-slate-400">Transparency</Link>
                    <Link href="/ethical-policy" className="hover:text-slate-400">Ethical Policy</Link>
                    <Link href="/disclosure" className="hover:text-slate-400">Disclosure</Link>
                </div>
            </footer>
        </main>
    );
}
