import { GlassCard } from "@/components/GlassCard";

export default function Transparency() {
    return (
        <main className="min-h-screen p-8 max-w-4xl mx-auto space-y-8 pt-20">
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-500">
                Transparency & Methodology
            </h1>

            <GlassCard>
                <h2 className="text-2xl font-bold mb-4 text-white">Impact Scoring Formula (CIS)</h2>
                <p className="text-slate-400 mb-4">
                    The Citizen Impact Score (CIS) is calculated for every victim to quantify public harm rather than just data volume.
                </p>
                <div className="bg-slate-900/50 p-4 rounded-lg font-mono text-sm text-cyan-400 overflow-x-auto">
                    CIS = ( SectorWeight × PopulationExposure × DataSensitivity × Recurrence ) / TimeDecay
                </div>
                <div className="mt-6 space-y-2 text-sm text-slate-300">
                    <p><strong className="text-white">SectorWeight:</strong> Healthcare (5), Education (4), Govt (5)</p>
                    <p><strong className="text-white">PopulationExposure:</strong> log10(population + 1)</p>
                    <p><strong className="text-white">DataSensitivity:</strong> Medical (5), Financial (4)</p>
                </div>
            </GlassCard>

            <GlassCard>
                <h2 className="text-2xl font-bold mb-4 text-white">Data Verification Policy</h2>
                <p className="text-slate-400 mb-4">
                    We do not treat leak site posts as absolute truth. Our pipeline categorizes incidents into three confidence levels:
                </p>
                <ul className="space-y-4">
                    <li className="flex gap-4">
                        <span className="px-2 py-1 bg-slate-800 rounded text-xs h-fit border border-slate-700">LOW</span>
                        <span className="text-slate-400 text-sm">Automated ingestion from crawler. Not yet reviewed.</span>
                    </li>
                    <li className="flex gap-4">
                        <span className="px-2 py-1 bg-amber-500/20 text-amber-400 rounded text-xs h-fit border border-amber-500/30">MEDIUM</span>
                        <span className="text-slate-400 text-sm">Human-reviewed proof file or leak sample.</span>
                    </li>
                    <li className="flex gap-4">
                        <span className="px-2 py-1 bg-rose-500/20 text-rose-400 rounded text-xs h-fit border border-rose-500/30">HIGH</span>
                        <span className="text-slate-400 text-sm">Corroborated by victim entity, press report, or 3rd party OSINT.</span>
                    </li>
                </ul>
            </GlassCard>

            <div className="text-center text-slate-500 pt-8">
                <p>Operated by Anand Binu Arjun</p>
                <p className="text-xs mt-2">Data Ethics Statement available upon request.</p>
            </div>
        </main>
    )
}
