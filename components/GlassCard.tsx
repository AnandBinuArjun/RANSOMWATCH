'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface GlassCardProps {
    children: ReactNode;
    className?: string;
    animate?: boolean;
}

export function GlassCard({ children, className, animate = true }: GlassCardProps) {
    const Component = animate ? motion.div : 'div';

    return (
        // @ts-ignore - motion.div types can be tricky with dynamic Component
        <Component
            initial={animate ? { opacity: 0, y: 20 } : undefined}
            animate={animate ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.5 }}
            className={cn(
                "bg-white/70 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-xl relative overflow-hidden",
                "dark:bg-slate-900/70 dark:border-slate-800/50",
                className
            )}
        >
            {children}
        </Component>
    );
}
