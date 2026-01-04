"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Box, Shield, Users } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />

      {/* Navigation */}
      <nav className="absolute top-0 w-full p-6 flex justify-between items-center z-50">
        <div className="flex items-center gap-2 font-bold text-xl tracking-tighter">
          <Shield className="w-6 h-6 text-blue-500" />
          IzzU
        </div>
        <div className="flex gap-4 items-center">
          <Link href="/docs" className="text-sm text-zinc-400 hover:text-zinc-200 transition-colors">Documentation</Link>
          <Link href="/login" className="px-4 py-2 bg-white text-black text-sm font-semibold rounded-full hover:bg-zinc-200 transition-colors">
            Control Plane Login
          </Link>
        </div>
      </nav>

      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-medium text-zinc-400 mb-8">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            System Operational
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 mb-8">
            The Identity Platform <br /> for <span className="text-blue-500">Modern SaaS</span>.
          </h1>

          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Add authentication to your application in minutes.
            Passkeys, Social Login, and Multi-Factor Auth built-in.
            Open Source and Multi-Tenant.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/login" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold flex items-center gap-2 transition-all">
              Start Integration <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/docs" className="px-8 py-4 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 rounded-xl font-semibold transition-all">
              View Demo
            </Link>
          </div>
        </motion.div>

        {/* Feature Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 max-w-5xl w-full text-left"
        >
          <FeatureCard
            icon={<Shield className="w-6 h-6 text-blue-500" />}
            title="Enterprise Security"
            desc="SOC2 compliant ready. WebAuthn FaceID/TouchID supported out of the box."
          />
          <FeatureCard
            icon={<Users className="w-6 h-6 text-purple-500" />}
            title="B2B Multi-Tenancy"
            desc="Built for SaaS. Manage organizations, members, and roles with ease."
          />
          <FeatureCard
            icon={<Box className="w-6 h-6 text-emerald-500" />}
            title="Open Source"
            desc="Self-hostable. Own your data. No vendor lock-in."
          />
        </motion.div>
      </main>
    </div>
  );
}

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-colors">
      <div className="mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-sm text-zinc-400">{desc}</p>
    </div>
  )
}
