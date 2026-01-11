import { GlassCard } from './GlassCard';

export function TopTargets() {
    return (
        <GlassCard className="!p-0 overflow-hidden">
            <div className="p-6 border-b border-white/5 bg-white/5">
                <h3 className="text-lg font-bold">Top Targets (Last 30d)</h3>
            </div>
            <ul className="divide-y divide-white/5">
                <TargetRow name="United States" count={42} flag="🇺🇸" />
                <TargetRow name="United Kingdom" count={18} flag="🇬🇧" />
                <TargetRow name="Germany" count={12} flag="🇩🇪" />
                <TargetRow name="India" count={9} flag="🇮🇳" />
                <TargetRow name="Brazil" count={7} flag="🇧🇷" />
            </ul>
        </GlassCard>
    )
}

function TargetRow({ name, count, flag }: any) {
    return (
        <li className="flex justify-between items-center p-4 hover:bg-white/5 transition cursor-default">
            <span className="text-slate-300 flex items-center gap-3">
                <span className="text-lg">{flag}</span> {name}
            </span>
            <span className="font-mono text-slate-500 font-bold">{count}</span>
        </li>
    )
}
