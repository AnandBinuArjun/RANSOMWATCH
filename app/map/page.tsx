import { Navbar } from "@/components/Navbar";
import { GlassCard } from "@/components/GlassCard";
import { HeatMap } from "@/components/HeatMap";
import { prisma } from "@/lib/db";

export const dynamic = 'force-dynamic';

export default async function MapPage() {
    const countryStats = await prisma.country.findMany({
        select: {
            iso2: true,
            name: true,
            riskIndex: true,
            _count: { select: { victims: true } }
        }
    });

    // Top Riskiest Countries for the overlay
    const topRisks = [...countryStats]
        .sort((a, b) => b.riskIndex - a.riskIndex)
        .slice(0, 5);

    return (
        <main className="min-h-screen p-4 md:p-8 max-w-[1600px] mx-auto space-y-8">
            <Navbar />

            <div className="pt-4 h-[80vh] relative">
                <HeatMap countryData={countryStats} />

                {/* Overlay Panel */}
                <GlassCard className="absolute top-8 left-8 w-80 !p-0 overflow-hidden hidden md:block z-10">
                    <div className="p-4 border-b border-white/5 bg-white/5">
                        <h3 className="font-bold">National Risk Index</h3>
                    </div>
                    <div className="p-4 space-y-4 max-h-[60vh] overflow-y-auto">
                        {topRisks.map(c => (
                            <RiskRow key={c.iso2} country={c.name} score={c.riskIndex} trend="stable" />
                        ))}
                        {topRisks.length === 0 && <p className="text-slate-500 text-sm">No data available.</p>}
                    </div>
                </GlassCard>
            </div>
        </main>
    )
}

function RiskRow({ country, score, trend }: any) {
    const color = score > 80 ? 'text-rose-500' : score > 60 ? 'text-amber-500' : 'text-cyan-500';
    return (
        <div className="flex justify-between items-center">
            <span className="text-slate-300 text-sm">{country}</span>
            <div className="flex items-center gap-3">
                <span className={`font-mono font-bold ${color}`}>{score.toFixed(0)}</span>
                <span className="text-[10px] text-slate-500 uppercase">{trend}</span>
            </div>
        </div>
    )
}
