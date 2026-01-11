import { GlassCard } from "@/components/GlassCard";
import { Navbar } from "@/components/Navbar";

export default function Engineering() {
    return (
        <main className="min-h-screen p-4 md:p-8 max-w-5xl mx-auto space-y-8">
            <Navbar />
            <div className="pt-8">
                <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-500 mb-2">
                    Engineering & Infrastructure
                </h1>
                <p className="text-slate-400 mb-8">
                    Technical architecture, SLOs, and system design for the RANSOMWATCH observatory.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <GlassCard>
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                            System Architecture
                        </h3>
                        <ul className="space-y-3 text-sm text-slate-300">
                            <li className="flex justify-between border-b border-white/5 pb-2">
                                <span>Ingestion Layer</span>
                                <span className="font-mono text-slate-500">Playwright + BullMQ</span>
                            </li>
                            <li className="flex justify-between border-b border-white/5 pb-2">
                                <span>Database</span>
                                <span className="font-mono text-slate-500">PostgreSQL + Prisma</span>
                            </li>
                            <li className="flex justify-between border-b border-white/5 pb-2">
                                <span>Intelligence Engine</span>
                                <span className="font-mono text-slate-500">Node.js Impact Model</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Frontend Edge</span>
                                <span className="font-mono text-slate-500">Next.js App Router</span>
                            </li>
                        </ul>
                    </GlassCard>

                    <GlassCard>
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                            Service Level Objectives (SLOs)
                        </h3>
                        <ul className="space-y-3 text-sm text-slate-300">
                            <li className="flex justify-between border-b border-white/5 pb-2">
                                <span>Data Freshness</span>
                                <span className="font-mono text-rose-400">≤ 15 min</span>
                            </li>
                            <li className="flex justify-between border-b border-white/5 pb-2">
                                <span>Alert Latency</span>
                                <span className="font-mono text-rose-400">≤ 5 min</span>
                            </li>
                            <li className="flex justify-between border-b border-white/5 pb-2">
                                <span>Validation Backlog</span>
                                <span className="font-mono text-amber-400">≤ 24 hours</span>
                            </li>
                            <li className="flex justify-between">
                                <span>API Availability</span>
                                <span className="font-mono text-cyan-400">99.9%</span>
                            </li>
                        </ul>
                    </GlassCard>
                </div>

                <GlassCard>
                    <h3 className="text-xl font-bold mb-4">Pipeline Visualization</h3>
                    <div className="p-4 bg-slate-900/50 rounded-lg border border-white/5 font-mono text-xs text-slate-400 overflow-x-auto">
                        Crawler(Workers) → Queue(Redis) → Ingestion(Prisma) → Normalization(GeoIP) → Scoring(ImpactEngine) → API(Cache)
                    </div>
                </GlassCard>
            </div>
        </main>
    )
}
