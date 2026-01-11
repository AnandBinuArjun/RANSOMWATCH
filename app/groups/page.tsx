import { Navbar } from "@/components/Navbar";
import { GlassCard } from "@/components/GlassCard";
import { prisma } from "@/lib/db";

export default async function GroupsPage() {
    const groups = await prisma.ransomwareGroup.findMany({
        include: { _count: { select: { victims: true } } }
    });

    return (
        <main className="min-h-screen p-4 md:p-8 max-w-6xl mx-auto space-y-8">
            <Navbar />
            <div className="pt-8">
                <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-500 mb-8">
                    Threat Actor Profiles
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {groups.map((group) => (
                        <GlassCard key={group.id} className="group hover:border-white/20 transition">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-xl font-bold">{group.name}</h3>
                                <span className="px-2 py-0.5 bg-rose-500/10 text-rose-400 text-xs rounded border border-rose-500/20">ACTIVE</span>
                            </div>
                            <div className="flex gap-4 text-sm text-slate-400 mb-6">
                                <div>
                                    <span className="block text-white font-mono text-lg">{group._count.victims}</span>
                                    <span className="text-xs uppercase">Victims</span>
                                </div>
                                <div>
                                    <span className="block text-white font-mono text-lg">High</span>
                                    <span className="text-xs uppercase">Sophistication</span>
                                </div>
                            </div>
                            <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
                                <div className="h-full bg-rose-500 w-3/4"></div>
                            </div>
                        </GlassCard>
                    ))}
                    {groups.length === 0 && <p className="text-slate-500">No active groups tracked yet.</p>}
                </div>
            </div>
        </main>
    )
}
