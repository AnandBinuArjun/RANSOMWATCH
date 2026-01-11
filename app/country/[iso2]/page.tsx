import { prisma } from "@/lib/db";
import { Navbar } from "@/components/Navbar";
import { GlassCard } from "@/components/GlassCard";
import { LiveFeed } from "@/components/LiveFeed";

export default async function CountryPage({ params }: { params: { iso2: string } }) {
    const country = await prisma.country.findUnique({
        where: { iso2: params.iso2.toUpperCase() },
        include: {
            victims: {
                orderBy: { discoveredAt: 'desc' },
                take: 20,
                include: { sector: true, group: true, country: true }
            }
        }
    });

    if (!country) return <div className="p-8 text-center text-slate-500">Country not found</div>;

    return (
        <main className="min-h-screen p-4 md:p-8 max-w-6xl mx-auto space-y-8">
            <Navbar />

            <div className="pt-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-8">
                    <h1 className="text-4xl font-bold flex items-center gap-4 mb-2">
                        <span className="text-5xl">{getFlag(country.iso2)}</span> {country.name}
                    </h1>
                    <p className="text-slate-400 mb-8">National Cyber Stress Profile</p>

                    <div className="mb-8">
                        <h3 className="text-xl font-bold mb-4">Recent Incidents</h3>
                        <LiveFeed initialData={country.victims} />
                    </div>
                </div>

                <div className="lg:col-span-4 space-y-6">
                    <GlassCard className="text-center py-8">
                        <div className="text-5xl font-bold font-mono text-rose-500 mb-2">{country.riskIndex?.toFixed(0) || 0}</div>
                        <div className="text-xs uppercase tracking-widest text-slate-500">Risk Index</div>
                    </GlassCard>

                    <GlassCard>
                        <h3 className="font-bold mb-4">Critical Sectors</h3>
                        {/* Mock Sector Distribution */}
                        <div className="space-y-3">
                            <SectorBar label="Healthcare" percent={45} color="bg-rose-500" />
                            <SectorBar label="Government" percent={30} color="bg-amber-500" />
                            <SectorBar label="Financial" percent={15} color="bg-cyan-500" />
                        </div>
                    </GlassCard>
                </div>
            </div>
        </main>
    )
}

function getFlag(iso2: string) {
    return iso2.replace(/./g, char => String.fromCodePoint(char.charCodeAt(0) + 127397));
}

function SectorBar({ label, percent, color }: any) {
    return (
        <div>
            <div className="flex justify-between text-xs mb-1">
                <span className="text-slate-300">{label}</span>
                <span className="text-slate-500">{percent}%</span>
            </div>
            <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div className={`h-full ${color}`} style={{ width: `${percent}%` }} />
            </div>
        </div>
    )
}
