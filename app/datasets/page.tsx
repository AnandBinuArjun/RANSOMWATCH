import { GlassCard } from "@/components/GlassCard";
import { Navbar } from "@/components/Navbar";

export default function Datasets() {
    return (
        <main className="min-h-screen p-4 md:p-8 max-w-5xl mx-auto space-y-8">
            <Navbar />
            <div className="pt-8">
                <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-500 mb-2">
                    Open Data Archive
                </h1>
                <p className="text-slate-400 mb-8">
                    Research-grade datasets released monthly for academic and security research.
                </p>

                <div className="space-y-4">
                    {[1].map((_, i) => (
                        <GlassCard key={i} className="flex justify-between items-center group hover:border-white/20 transition">
                            <div>
                                <h3 className="font-bold text-lg text-white">Global Incident Index - January 2026</h3>
                                <p className="text-sm text-slate-500">Includes 452 verified incidents, normalized sectors, and impact scores.</p>
                                <div className="flex gap-2 mt-2">
                                    <span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded text-slate-400">CSV</span>
                                    <span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded text-slate-400">JSON</span>
                                    <span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded text-slate-400">SHA256: e3b0c442...</span>
                                </div>
                            </div>
                            <button className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition text-sm">
                                Download
                            </button>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </main>
    )
}
