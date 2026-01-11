import { GlassCard } from "@/components/GlassCard";
import { Navbar } from "@/components/Navbar";

export default function Research() {
    return (
        <main className="min-h-screen p-4 md:p-8 max-w-5xl mx-auto space-y-8">
            <Navbar />
            <div className="pt-8">
                <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-500 mb-2">
                    Intelligence Reports
                </h1>
                <p className="text-slate-400 mb-8">
                    Monthly deep-dives into global ransomware trends and critical infrastructure impact.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <GlassCard className="h-full flex flex-col justify-between group cursor-pointer hover:border-white/20 transition">
                        <div>
                            <div className="text-xs text-rose-400 font-mono mb-2">LATEST REPORT</div>
                            <h2 className="text-2xl font-bold mb-3">Global Ransomware Impact Index — Month 1</h2>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Analysis of the surge in healthcare sector attacks across Southeast Asia and the emergence of new extortion tactics by ALPHV.
                            </p>
                        </div>
                        <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-4">
                            <span className="text-xs text-slate-500">Published Jan 11, 2026</span>
                            <span className="text-sm font-medium text-white group-hover:text-rose-400 transition">Read Report →</span>
                        </div>
                    </GlassCard>
                </div>
            </div>
        </main>
    )
}
