"use client";

import { useEffect, useRef, useState } from "react";

interface ServiceTier {
  name: string;
  price: string;
  duration: string;
  description: string;
}

interface Service {
  title: string;
  subtitle: string;
  tiers: ServiceTier[];
  cta: string;
  href: string;
  highlight?: boolean;
}

const services: Service[] = [
  {
    title: "Async AI Audit",
    subtitle: "Entry offer · credited toward Sprint",
    tiers: [
      {
        name: "Workflow & Security Review",
        price: "$1,500",
        duration: "one-time",
        description:
          "I audit your current AI tooling, codebase, and compliance posture. You get a report with quick wins and a roadmap—plus the fee credits toward a Ship Sprint.",
      },
    ],
    cta: "Book Your Audit",
    href: "#booking",
    highlight: true,
  },
  {
    title: "Ship Sprint",
    subtitle: "Two weeks · full setup",
    tiers: [
      {
        name: "Agentic Dev + Guardrails",
        price: "$7,500",
        duration: "2 weeks",
        description:
          "I set up your team's agentic dev workflow end-to-end: AI tooling, CI/CD pipelines, compliance checks, and pen-test guardrails built in. You ship faster and stay audit-ready.",
      },
    ],
    cta: "Start a Sprint",
    href: "#booking",
  },
  {
    title: "Agent-Ops Retainer",
    subtitle: "After your Sprint",
    tiers: [
      {
        name: "Ongoing Support",
        price: "$1,500",
        duration: "/month",
        description:
          "Async Slack access, workflow tune-ups, new-hire onboarding, and help prepping for audits and pen tests. Available to teams that have completed a Ship Sprint.",
      },
    ],
    cta: "Learn More",
    href: "#booking",
  },
];

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-24 md:py-32 px-6">
      <div ref={ref} className="max-w-6xl mx-auto">
        <p
          className={`font-mono text-sm text-blue-400/60 text-center mb-4 tracking-wider uppercase transition-all duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          Services
        </p>
        <h2
          className={`font-heading text-3xl md:text-5xl font-extrabold text-center mb-4 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "100ms" }}
        >
          How It Works
        </h2>
        <p
          className={`text-zinc-400 text-center mb-14 max-w-2xl mx-auto font-light transition-all duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          Start with an Audit, graduate to a Sprint, then stay sharp with
          ongoing support.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className={`group bg-zinc-900/80 border rounded-2xl p-8 flex flex-col card-lift relative overflow-hidden transition-all duration-700 ${
                service.highlight
                  ? "border-blue-500/40"
                  : "border-zinc-800/80"
              } ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${300 + i * 150}ms` }}
            >
              {/* Gradient accent line */}
              <div
                className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent to-transparent ${
                  service.highlight ? "via-blue-400" : "via-blue-500"
                }`}
              />

              {service.highlight && (
                <span className="absolute top-4 right-4 font-mono text-[10px] text-blue-400 bg-blue-500/10 px-2 py-1 rounded-full border border-blue-500/20">
                  Start here
                </span>
              )}

              <h3 className="font-heading text-xl font-bold mb-1">
                {service.title}
              </h3>
              <p className="text-sm text-zinc-500 mb-8">{service.subtitle}</p>

              <div className="space-y-6 flex-1">
                {service.tiers.map((tier, j) => (
                  <div
                    key={j}
                    className="pb-6 border-b border-zinc-800/50 last:border-0 last:pb-0"
                  >
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="font-mono text-2xl font-bold text-blue-400">
                        {tier.price}
                      </span>
                      <span className="font-mono text-xs text-zinc-600">
                        {tier.duration}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-zinc-300 mb-1">
                      {tier.name}
                    </p>
                    <p className="text-sm text-zinc-500 leading-relaxed">
                      {tier.description}
                    </p>
                  </div>
                ))}
              </div>

              <a
                href={service.href}
                className={`mt-8 block text-center font-medium rounded-xl px-6 py-3.5 transition-all border ${
                  service.highlight
                    ? "bg-blue-500 hover:bg-blue-600 text-white border-blue-500 hover:border-blue-600 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]"
                    : "bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 border-blue-500/20 hover:border-blue-500/40 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)]"
                }`}
              >
                {service.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
