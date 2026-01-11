'use client';
import { GlassCard } from './GlassCard';
import { getImpactColor } from '@/lib/impactEngine';
import { formatTimeAgo, cn } from '@/lib/utils';
import { motion } from 'framer-motion';

type Victim = {
    id: string;
    name: string;
    country: { iso2: string, name: string };
    sector: { name: string };
    group: { name: string };
    discoveredAt: string;
    impactScore: number;
    proofUrl?: string;
};

export function LiveFeed({ initialData }: { initialData?: Victim[] }) {
    const data = initialData || [];

    if (data.length === 0) {
        return <div className="p-8 text-center text-slate-400">No active threats detected in feed.</div>
    }

    return (
        <div className="space-y-4">
            {data.map((victim) => (
                <FeedItem key={victim.id} victim={victim} />
            ))}
        </div>
    );
}

function FeedItem({ victim }: { victim: Victim }) {
    const isCritical = victim.impactScore >= 80;

    return (
        <GlassCard className={cn(
            "transition-all duration-300 hover:scale-[1.01]",
            isCritical ? "shadow-rose-500/20 ring-1 ring-rose-500/50" : ""
        )}>
            <div className="flex justify-between items-start mb-2">
                <div>
                    <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
                        {victim.name}
                        <span className="text-xs px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-mono">
                            {victim.country.iso2}
                        </span>
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                        {victim.sector.name} • <span className="text-slate-700 dark:text-slate-300 font-medium">{victim.group.name}</span>
                    </p>
                </div>
                <div className="text-right">
                    <div className={cn("text-2xl font-bold font-mono", getImpactColor(victim.impactScore))}>
                        {victim.impactScore}
                    </div>
                    <small className="text-slate-400 text-xs" suppressHydrationWarning>{formatTimeAgo(victim.discoveredAt)}</small>
                </div>
            </div>

            <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden mt-3">
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${Math.min(victim.impactScore, 100)}%` }}
                    className={cn("h-full rounded-full",
                        victim.impactScore > 80 ? "bg-gradient-to-r from-red-500 to-rose-600" :
                            victim.impactScore > 60 ? "bg-gradient-to-r from-orange-400 to-red-500" :
                                "bg-gradient-to-r from-cyan-400 to-blue-500"
                    )}
                />
            </div>
        </GlassCard>
    )
}
