import { GlassCard } from "@/components/GlassCard";
import { Navbar } from "@/components/Navbar";

export default function DisclosurePolicy() {
    return (
        <main className="min-h-screen p-4 md:p-8 max-w-4xl mx-auto space-y-8">
            <Navbar />
            <div className="pt-8">
                <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-500 mb-6">
                    Responsible Disclosure Policy
                </h1>

                <GlassCard className="prose prose-invert max-w-none">
                    <p>
                        RANSOMWATCH takes the security of our systems and the privacy of our data seriously.
                        If you believe you have found a security vulnerability in our platform, we encourage you to let us know right away.
                    </p>

                    <h3>How to Report</h3>
                    <p>
                        Please email <a href="mailto:security@ransomwatch.org" className="text-rose-400">security@ransomwatch.org</a> with the details of the vulnerability.
                    </p>

                    <h3>Scope</h3>
                    <ul>
                        <li>Web Application (ransomwatch.org)</li>
                        <li>API Endpoints (*.ransomwatch.org/api)</li>
                    </ul>

                    <h3>Our Promise</h3>
                    <ul>
                        <li>We will acknowledge your report within 24 hours.</li>
                        <li>We will provide an estimated timeline for the fix.</li>
                        <li>We will not pursue legal action against researchers acting in good faith.</li>
                    </ul>
                </GlassCard>
            </div>
        </main>
    )
}
