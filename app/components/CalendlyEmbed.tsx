"use client";

import { useEffect } from "react";

export default function CalendlyEmbed() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <section id="booking" className="py-24 md:py-32 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/5 to-transparent pointer-events-none" />

      <div className="relative max-w-4xl mx-auto">
        <p className="font-mono text-sm text-blue-400/60 text-center mb-4 tracking-wider uppercase">
          Get Started
        </p>
        <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-center mb-4">
          Book Your Audit
        </h2>
        <p className="text-zinc-400 text-center mb-14 max-w-xl mx-auto font-light">
          Start with a free discovery call. We&apos;ll discuss your team, your
          compliance requirements, and whether an Async AI Audit is the right
          first step.
        </p>
        <div
          className="calendly-inline-widget rounded-2xl overflow-hidden border border-zinc-800/40"
          data-url="https://calendly.com/zach-zachjohnson/free-discovery-call?hide_gdpr_banner=1&background_color=111111&text_color=f5f5f5&primary_color=3b82f6"
          style={{ minWidth: "320px", height: "700px" }}
        />
      </div>
    </section>
  );
}
