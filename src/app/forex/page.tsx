"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Check,
  ArrowRight,
  Play,
  Sparkles,
  Shield,
  Star,
  Clock,
  Users2,
} from "lucide-react";

// Tailwind-only, dark-first landing page for a Forex trading course
// Drop this file into app/page.tsx (Next.js 13+) or pages/index.tsx (Next.js <=12 with tweaks)
// No external CSS needed beyond Tailwind. Uses framer-motion + lucide-react (icons).

export default function page() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "monthly"
  );

  const prices = {
    monthly: { starter: 39, pro: 99, mentor: 299 },
    yearly: { starter: 390, pro: 990, mentor: 2990 },
  } as const;

  const features = [
    "Live market walkthroughs",
    "Risk management frameworks",
    "Price action & market structure",
    "Trade journaling templates",
    "Weekly Q&A with mentor",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#08090b] via-[#0b0e12] to-[#0c0f14] text-gray-100 antialiased">
      {/* Header */}

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 -top-40 h-80 w-80 bg-cyan-500/20 blur-3xl rounded-full" />
          <div className="absolute -right-40 -bottom-40 h-80 w-80 bg-emerald-500/20 blur-3xl rounded-full" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300">
                <Sparkles className="h-3.5 w-3.5" /> Cohort starts every Monday
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                Master{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                  Forex Trading
                </span>
                <br /> with Live Mentorship
              </h1>
              <p className="text-lg text-gray-300 max-w-xl">
                Learn a repeatable system for entries, exits, and risk
                management. Build confidence with live sessions, practice labs,
                and 1‑on‑1 feedback.
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href="#pricing"
                  className="inline-flex justify-center items-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-400 to-emerald-400 px-5 py-3 font-semibold text-gray-900 hover:opacity-90"
                >
                  See Pricing <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#trailer"
                  className="inline-flex justify-center items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 font-semibold text-white hover:bg-white/10"
                >
                  Watch Trailer <Play className="h-4 w-4" />
                </a>
              </div>
              {/* Quick highlights */}
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { icon: Users2, label: "Small cohorts" },
                  { icon: Clock, label: "6 weeks" },
                  { icon: Shield, label: "Risk-first" },
                  { icon: Star, label: "4.9/5 rating" },
                ].map((it, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-gray-300 flex items-center gap-2"
                  >
                    <it.icon className="h-4 w-4" /> {it.label}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative"
            >
              <div className="rounded-3xl border border-white/10 bg-white/5 p-2 backdrop-blur">
                <div className="rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1573167243872-43c6433b9d40?q=80&w=1600&auto=format&fit=crop"
                    alt="Live Forex mentoring session"
                    width={1200}
                    height={800}
                    priority
                    unoptimized
                    className="h-80 w-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mentor */}
      <section
        id="mentor"
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16"
      >
        <div className="grid lg:grid-cols-3 gap-10 items-center">
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              Your Mentor
            </h2>
            <p className="text-gray-300 max-w-2xl">
              Hi, I’m{" "}
              <span className="text-white font-medium">
                Beeshal D. Bhattarai
              </span>{" "}
              — full‑time FX trader and mentor. Over 7+ years I’ve coached 500+
              students to build sustainable strategies focused on capital
              preservation and consistency.
            </p>
            <ul className="mt-4 grid sm:grid-cols-2 gap-3">
              {[
                "Daily market review",
                "Trade breakdowns",
                "Risk & psychology",
                "Portfolio journaling",
              ].map((f) => (
                <li
                  key={f}
                  className="flex items-center gap-2 text-sm text-gray-300"
                >
                  <Check className="h-4 w-4 text-emerald-400" /> {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="justify-self-center">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-cyan-500 to-emerald-500 blur opacity-30" />
              <Image
                src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=800&auto=format&fit=crop"
                alt="Forex mentor portrait"
                width={320}
                height={320}
                unoptimized
                className="relative h-40 w-40 sm:h-48 sm:w-48 rounded-full object-cover border-4 border-white/10 shadow-2xl"
              />
            </div>
            <div className="mt-4 text-center text-sm text-gray-300">
              Beeshal D. Bhattarai — Lead Mentor
            </div>
          </div>
        </div>
      </section>

      {/* What you'll learn */}
      <section
        id="learn"
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12"
      >
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          What you’ll learn
        </h2>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Foundations & Platforms",
              desc: "Broker selection, spreads, leverage, and the tools you actually need.",
            },
            {
              title: "Market Structure",
              desc: "Trends, ranges, liquidity pools, and multi‑timeframe confluence.",
            },
            {
              title: "Entries & Exits",
              desc: "High‑probability setups, invalidation rules, and scaling logic.",
            },
            {
              title: "Risk Management",
              desc: "Position sizing, stop placement, win/loss ratios, and drawdown control.",
            },
            {
              title: "Psychology",
              desc: "Playbooks to reduce FOMO, revenge trading, and over‑exposure.",
            },
            {
              title: "Journaling & Review",
              desc: "Templates to analyze performance and build a repeatable edge.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section
        id="pricing"
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16"
      >
        <div className="flex items-center justify-between gap-6 flex-wrap">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Simple pricing
          </h2>
          <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 p-1 text-sm">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-3 py-1.5 rounded-xl transition ${
                billingCycle === "monthly"
                  ? "bg-white text-gray-900"
                  : "text-gray-300"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`px-3 py-1.5 rounded-xl transition ${
                billingCycle === "yearly"
                  ? "bg-white text-gray-900"
                  : "text-gray-300"
              }`}
            >
              Yearly{" "}
              <span className="ml-1 text-xs text-emerald-300">
                (2 months free)
              </span>
            </button>
          </div>
        </div>

        <div className="mt-8 grid lg:grid-cols-3 gap-6">
          {(
            [
              {
                name: "Starter",
                desc: "Kickstart your FX journey with the essentials.",
                price: prices[billingCycle].starter,
                features: [
                  "6 live classes",
                  "Community access",
                  "Starter templates",
                ],
                cta: "Start learning",
                highlighted: false,
              },
              {
                name: "Pro",
                desc: "Everything in Starter plus advanced systems.",
                price: prices[billingCycle].pro,
                features: [
                  "12 live classes",
                  "Strategy playbooks",
                  "Weekly Q&A",
                ],
                cta: "Go Pro",
                highlighted: true,
              },
              {
                name: "1‑on‑1 Mentorship",
                desc: "Direct coaching tailored to your goals.",
                price: prices[billingCycle].mentor,
                features: [
                  "Private sessions",
                  "Custom plan",
                  "Personal trade reviews",
                ],
                cta: "Apply now",
                highlighted: false,
              },
            ] as const
          ).map((tier) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`rounded-3xl border p-6 backdrop-blur ${
                tier.highlighted
                  ? "border-emerald-400/30 bg-gradient-to-b from-emerald-400/10 to-cyan-400/10 shadow-[0_0_40px_-12px] shadow-emerald-400/40"
                  : "border-white/10 bg-white/5"
              }`}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">{tier.name}</h3>
                {tier.highlighted && (
                  <span className="rounded-full bg-white text-gray-900 px-2 py-1 text-xs font-semibold">
                    Popular
                  </span>
                )}
              </div>
              <p className="mt-2 text-sm text-gray-300">{tier.desc}</p>
              <div className="mt-6 flex items-end gap-1">
                <span className="text-4xl font-bold">${tier.price}</span>
                <span className="text-sm text-gray-400 mb-1">
                  /{billingCycle === "monthly" ? "mo" : "yr"}
                </span>
              </div>
              <ul className="mt-6 space-y-2 text-sm">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-gray-300">
                    <Check className="h-4 w-4 text-emerald-400" /> {f}
                  </li>
                ))}
              </ul>
              <a
                href="#enroll"
                className={`mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl px-4 py-2.5 font-semibold transition ${
                  tier.highlighted
                    ? "bg-white text-gray-900 hover:shadow-lg"
                    : "border border-white/10 bg-white/5 hover:bg-white/10"
                }`}
              >
                {tier.cta} <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Money-back */}
        <div className="mt-6 flex items-center gap-3 text-sm text-gray-300">
          <Shield className="h-4 w-4 text-emerald-400" /> 7‑day money‑back
          guarantee. Cancel anytime.
        </div>
      </section>

      {/* Trailer placeholder */}
      <section
        id="trailer"
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12"
      >
        <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
          <div className="aspect-video w-full overflow-hidden rounded-2xl border border-white/10">
            <Image
              src="https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=1600&auto=format&fit=crop"
              alt="Course trailer placeholder"
              width={1200}
              height={675}
              unoptimized
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16"
      >
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          FAQ
        </h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {[
            {
              q: "Do I need prior trading experience?",
              a: "No. We start with foundations and quickly move to practical execution with risk-first thinking.",
            },
            {
              q: "Are the sessions live or recorded?",
              a: "Live first, with recordings available within 24 hours for later review.",
            },
            {
              q: "Which timezone are live sessions in?",
              a: "We run multiple cohorts; you can pick Asia/Kathmandu (NPT) friendly timings.",
            },
            {
              q: "Will you give buy/sell signals?",
              a: "No signals. We teach you to build your own system and manage risk responsibly.",
            },
          ].map((item) => (
            <details
              key={item.q}
              className="rounded-2xl border border-white/10 bg-white/5 p-4 open:bg-white/10"
            >
              <summary className="cursor-pointer list-none text-base font-medium">
                {item.q}
              </summary>
              <p className="mt-2 text-sm text-gray-300">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <p>
              © {new Date().getFullYear()} FX Mentor Lab. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a className="hover:text-white" href="#">
                Privacy
              </a>
              <a className="hover:text-white" href="#">
                Terms
              </a>
              <a className="hover:text-white" href="#">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
