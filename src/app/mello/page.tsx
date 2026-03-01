"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

// Next.js requires disabling Server-Side Rendering for window-dependent components
const DogFollower = dynamic(
    () => import("../../components/DogFollower/DogFollower"),
    { ssr: false }
);

export default function MelloPage() {
    const [dogEnabled, setDogEnabled] = useState(false);

    return (
        <main className="min-h-screen bg-[var(--bg-color)] text-[var(--text-primary)] flex flex-col relative overflow-hidden">
            {/* Header / Navigation */}
            <header className="px-9 h-8 structural-border flex justify-between items-center bg-[var(--bg-color)] sticky top-0 z-20 animate-enter">
                <Link href="/" className="inline-flex items-center text-xs uppercase tracking-widest font-bold text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back
                </Link>
                <div className="flex items-center gap-5">
                    <span className="w-2 h-2 bg-[var(--accent)] animate-pulse rounded-full"></span>
                    <span className="text-xs font-mono uppercase tracking-widest">Prototype Lab</span>
                </div>
            </header>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col items-center justify-center p-9 animate-enter delay-100 z-10 relative">

                {/* Grid backdrop illusion */}
                <div className="absolute inset-0 z-0 pointer-events-none opacity-20" style={{
                    backgroundImage: 'radial-gradient(var(--text-secondary) 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}></div>

                <div className="max-w-2xl min-h-[400px] w-full flex flex-col justify-center items-center text-center relative z-10 bg-[var(--bg-color)] p-9 lg:p-[68px] border-[var(--grid-line-bold)] shadow-2xl">
                    <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter leading-none mb-7">
                        MEET <span className="text-[var(--accent)]">MELLO.</span>
                    </h1>

                    <p className="text-lg text-[var(--text-secondary)] mb-[52px] max-w-lg mx-auto text-balance">
                        An interactive, cursor-following virtual pet physics experiment. Click to summon,
                        idle to sit, and click rapidly to stack sprint speed.
                    </p>

                    <button
                        onClick={() => setDogEnabled(!dogEnabled)}
                        className={`brutal-btn w-full md:w-xl justify-center mx-auto text-lg py-4 px-12 ${dogEnabled ? 'bg-[var(--text-primary)] text-[var(--bg-color)] border-[var(--text-primary)] hover:bg-transparent hover:text-[var(--text-primary)]' : ''}`}
                    >
                        {dogEnabled ? "DISMISS ENTITY" : "INITIALIZE MELLO"}
                    </button>
                </div>
            </div>

            {/* Footer */}
            <footer className="p-9 text-xs font-mono text-[var(--text-secondary)] text-center structural-border border-t animate-enter delay-200 relative z-10 bg-[var(--bg-color)]">
                <p>INTERACTIVE MECHANICS DEMO • V1.0</p>
            </footer>

            {/* Renders the pet dynamically out of flow */}
            {dogEnabled && <DogFollower />}
        </main>
    );
}
