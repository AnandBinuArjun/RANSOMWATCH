import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import './globals.css'

const manrope = Manrope({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'RANSOMWATCH - Global Ransomware Observatory',
    description: 'Real-time monitoring of critical infrastructure ransomware attacks.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className="dark">
            <body className={`${manrope.className} bg-slate-50 text-slate-900 dark:bg-[#0B1120] dark:text-slate-50 antialiased selection:bg-rose-500/30 selection:text-rose-600 min-h-screen`}>
                {children}
            </body>
        </html>
    )
}
