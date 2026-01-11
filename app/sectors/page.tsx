import { GlassCard } from "@/components/GlassCard";
import { Navbar } from "@/components/Navbar";

export default function SectorsPage() {
    return (
        <main className="min-h-screen p-4 md:p-8 max-w-6xl mx-auto space-y-8">
            <Navbar />
            <div className="pt-8">
                <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-500 mb-8">
                    Critical Infrastructure Impact
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <GlassCard>
                        <h3 className="text-lg font-bold">Healthcare</h3>
                        <div className="text-4xl font-bold text-rose-500 my-4">CRITICAL</div>
                        <p className="text-slate-400 text-sm">Targeted by: LockBit, Medusa</p>
                        <div className="mt-4 text-xs text-rose-400 bg-rose-500/10 p-2 rounded border border-rose-500/20">
                            High Risk of Life Safety Impact
                        </div>
                    </GlassCard>

                    <GlassCard>
                        <h3 className="text-lg font-bold">Government</h3>
                        <div className="text-4xl font-bold text-amber-500 my-4">HIGH</div>
                        <p className="text-slate-400 text-sm">Targeted by: ALPHV</p>
                    </GlassCard>

                    <GlassCard>
                        <h3 className="text-lg font-bold">Education</h3>
                        <div className="text-4xl font-bold text-cyan-500 my-4">MEDIUM</div>
                        <p className="text-slate-400 text-sm">Targeted by: Rhysida</p>
                    </GlassCard>
                </div>
            </div>
        </main>
    )
}
