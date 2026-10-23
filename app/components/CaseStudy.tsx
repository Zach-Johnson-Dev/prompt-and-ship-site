"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "2", label: "Engineers" },
  { value: "5", label: "Months" },
  { value: "$300K", label: "ARR" },
  { value: "0", label: "Critical Pen-Test Findings" },
];

export default function CaseStudy() {
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
    <section id="case-study" className="py-24 md:py-32 px-6 relative">
      {/* Atmospheric gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/5 to-transparent pointer-events-none" />

      <div
        ref={ref}
        className={`relative max-w-6xl mx-auto transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="bg-zinc-900/60 border border-zinc-800/60 rounded-3xl p-8 md:p-14 relative overflow-hidden">
          {/* Corner glow */}
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none" />

          <p className="font-mono text-sm text-blue-400/60 text-center mb-4 tracking-wider uppercase">
            Case Study
          </p>
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-extrabold text-center mb-14">
            2 engineers. 5 months.{" "}
            <span className="text-blue-400">$300K ARR.</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-14">
            {stats.map((stat, i) => (
              <div
                key={i}
                className={`bg-zinc-800/30 border border-zinc-800/50 rounded-2xl p-6 md:p-8 text-center transition-all duration-500 ${
                  isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
                style={{ transitionDelay: `${300 + i * 100}ms` }}
              >
                <div className="font-mono text-3xl md:text-5xl font-bold text-blue-400 mb-2">
                  {stat.value}
                </div>
                <div className="font-mono text-xs text-zinc-500 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <p className="text-zinc-400 leading-relaxed max-w-3xl mx-auto text-center text-lg font-light">
            A 2-person dev team built a full regulated-industry SaaS platform in
            5&nbsp;months&mdash;a project that would typically require
            10&nbsp;engineers and a year. The product hit $300K&nbsp;ARR and
            passed a third-party penetration test with zero critical findings.
            Almost every line was written with AI coding tools and the workflow
            I now teach.
          </p>
        </div>
      </div>
    </section>
  );
}
