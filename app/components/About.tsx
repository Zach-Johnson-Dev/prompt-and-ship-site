"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function About() {
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
    <section id="about" className="py-24 md:py-32 px-6">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14">
            {/* Profile photo */}
            <div className="relative flex-shrink-0">
              <Image
                src="/zach.jpeg"
                alt="Zach Johnson"
                width={176}
                height={176}
                className="w-36 h-36 md:w-44 md:h-44 rounded-full object-cover"
              />
              <div className="absolute -inset-1 rounded-full border border-blue-500/10 pointer-events-none" />
            </div>

            <div>
              <p className="font-mono text-sm text-blue-400/60 mb-3 tracking-wider uppercase">
                About
              </p>
              <div className="flex items-center gap-3 mb-5">
                <h2 className="font-heading text-3xl md:text-4xl font-extrabold">
                  Hey, I&apos;m Zach.
                </h2>
                <a
                  href="https://www.linkedin.com/in/zachary-taylor-johnson/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-500 hover:text-blue-400 transition-colors"
                  aria-label="LinkedIn profile"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
              <p className="text-zinc-400 leading-relaxed mb-4 font-light text-lg">
                I&apos;m a product leader who codes. I&apos;ve spent 8 years
                building software and the last 2 years pioneering AI-powered
                development workflows that let small teams ship like big ones.
              </p>
              <p className="text-zinc-400 leading-relaxed font-light text-lg">
                Most recently I led a 2-engineer team that shipped a
                regulated-industry SaaS to $300K&nbsp;ARR in 5&nbsp;months with
                a clean pen test&mdash;using the agentic workflow I now help
                other teams adopt.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
