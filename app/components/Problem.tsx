"use client";

import { useEffect, useRef, useState } from "react";

const problems = [
  "Your team uses AI coding tools—but compliance reviews still bottleneck every release.",
  "Pen tests keep surfacing the same classes of vulnerabilities. You patch them, but they come back.",
  "You're competing against teams 5× your size. You need to ship faster without cutting corners on security.",
];

export default function Problem() {
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
    <section className="py-24 md:py-32 px-6">
      <div ref={ref} className="max-w-6xl mx-auto">
        <p
          className={`font-mono text-sm text-blue-400/60 text-center mb-4 tracking-wider uppercase transition-all duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          The problem
        </p>
        <h2
          className={`font-heading text-3xl md:text-5xl font-extrabold text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "100ms" }}
        >
          Sound familiar?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((problem, i) => (
            <div
              key={i}
              className={`group bg-zinc-900/50 border border-zinc-800/80 rounded-2xl p-8 card-lift transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${200 + i * 150}ms` }}
            >
              <span className="font-mono text-xs text-blue-500/40 mb-6 block">
                0{i + 1}
              </span>
              <p className="text-lg text-zinc-200 leading-relaxed font-light">
                {problem}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
