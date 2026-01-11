'use client';
import { motion } from 'framer-motion';
import { GlassCard } from './GlassCard';

export function LandingHero() {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-6 pl-2">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-mono mb-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
                        LIVE OBSERVATORY
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-br from-white to-slate-500">
                        Global Ransomware <br /> Threat Observatory
                    </h1>
                    <p className="text-lg text-slate-400 max-w-lg leading-relaxed mt-4">
                        Real-time intelligence on cyber attacks impacting hospitals, governments, and critical infrastructure worldwide.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-wrap gap-4 pt-4"
                >
                    <button className="px-8 py-3 bg-rose-600 hover:bg-rose-500 text-white font-semibold rounded-xl shadow-lg shadow-rose-600/20 transition-all transform hover:scale-105 active:scale-95">
                        View Live Threats
                    </button>
                    <button className="px-8 py-3 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl border border-white/10 transition-all hover:border-white/20">
                        Country Risk Map
                    </button>
                </motion.div>

                <div className="grid grid-cols-3 gap-6 pt-10 border-t border-white/5 mt-8">
                    <Stat label="Attacks / 24h" value="12" />
                    <Stat label="Critical Infra" value="3" highlight />
                    <Stat label="Active Groups" value="14" />
                </div>
            </div>

            <div className="lg:col-span-7 relative h-[500px] w-full mt-8 lg:mt-0">
                {/* Abstract Map/Globe placeholder */}
                <div className="absolute inset-0 bg-slate-800/50 rounded-3xl overflow-hidden border border-white/5 backdrop-blur-sm shadow-2xl">
                    <div className="absolute inset-0 opacity-20"
                        style={{ backgroundImage: 'linear-gradient(#334155 1px, transparent 1px), linear-gradient(to right, #334155 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] animate-pulse" />
                        <div className="w-64 h-64 bg-rose-500/10 rounded-full blur-[80px] absolute top-[-50px] right-[-50px] animate-pulse delay-75" />
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <span className="text-slate-600 font-mono text-sm tracking-widest">[ GLOBAL THREAT MAP VISUALIZATION ]</span>
                    </div>

                    {/* Floating Cards */}
                    <GlassCard className="absolute top-12 right-12 w-72 !p-4 animate-float z-10 border-l-4 border-l-rose-500 bg-slate-900/80">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-xs font-mono text-rose-400 font-bold">CRITICAL ALERT</span>
                            <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
                        </div>
                        <div className="font-bold text-lg text-white">City Hospital, US</div>
                        <div className="text-xs text-slate-400 mt-1">Health Data Exfiltration · LockBit</div>
                        <div className="mt-3 flex gap-2">
                            <span className="text-[10px] bg-rose-500/20 text-rose-300 px-2 py-0.5 rounded border border-rose-500/30">CIS 92</span>
                        </div>
                    </GlassCard>

                    <GlassCard className="absolute bottom-16 left-12 w-64 !p-4 animate-float z-10 bg-slate-900/80" style={{ animationDelay: '2s' }}>
                        <div className="flex justify-between items-end">
                            <div>
                                <div className="text-3xl font-bold text-cyan-400">72</div>
                                <div className="text-xs text-slate-400 font-mono uppercase">Global Risk Index</div>
                            </div>
                            <div className="h-8 w-12 bg-gradient-to-t from-cyan-500/50 to-transparent rounded" />
                        </div>
                    </GlassCard>
                </div>
            </div>
        </section>
    );
}

function Stat({ label, value, highlight }: any) {
    return (
        <div>
            <div className={`text-3xl font-bold font-mono ${highlight ? 'text-rose-500' : 'text-white'}`}>{value}</div>
            <div className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold mt-1">{label}</div>
        </div>
    )
}
