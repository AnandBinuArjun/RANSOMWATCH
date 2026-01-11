import Link from 'next/link';

export function Navbar() {
    return (
        <nav className="flex justify-between items-center py-4 px-2 backdrop-blur-md sticky top-0 z-50 bg-slate-900/50 rounded-2xl border border-white/5 mb-8">
            <div className="flex items-center gap-2 pl-4">
                <div className="w-3 h-3 bg-rose-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(244,63,94,0.5)]" />
                <h1 className="text-xl font-bold tracking-tight text-white">RANSOMWATCH</h1>
            </div>
            <div className="hidden md:flex gap-6 text-sm font-medium text-slate-400 pr-6">
                <Link href="/live" className="hover:text-white transition">Live Feed</Link>
                <Link href="/map" className="hover:text-white transition">Map</Link>
                <Link href="/groups" className="hover:text-white transition">Actors</Link>
                <Link href="/transparency" className="hover:text-white transition">Transparency</Link>
            </div>
        </nav>
    )
}
