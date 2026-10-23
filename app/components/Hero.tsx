"use client";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Atmospheric layers */}
      <div className="absolute inset-0 dot-grid opacity-60" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-500/15 rounded-full blur-[150px] hero-glow pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        {/* Headline — staggered entrance, extreme size */}
        <h1 className="font-heading font-extrabold tracking-tight mb-8">
          <span
            className="hero-animate block text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.95]"
            style={{ animationDelay: "100ms" }}
          >
            Ship Fast.
          </span>
          <span
            className="hero-animate block text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.95] mt-2"
            style={{ animationDelay: "280ms" }}
          >
            Stay <span className="text-blue-400">Compliant.</span>
          </span>
        </h1>

        {/* Subtitle — light weight for dramatic contrast */}
        <p
          className="hero-animate text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed font-light"
          style={{ animationDelay: "520ms" }}
        >
          Agentic dev workflows with compliance and pen-test guardrails
          built&nbsp;in. For teams of 2–15 engineers selling into healthcare,
          government, and other regulated markets.
        </p>

        {/* CTAs */}
        <div
          className="hero-animate flex flex-col sm:flex-row gap-4 justify-center mb-14"
          style={{ animationDelay: "720ms" }}
        >
          <a
            href="#booking"
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-full px-8 py-4 text-lg transition-all hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]"
          >
            Book an AI Audit
          </a>
          <a
            href="#services"
            className="border border-zinc-700 hover:border-blue-500/50 text-zinc-100 font-medium rounded-full px-8 py-4 text-lg transition-all hover:bg-blue-500/5"
          >
            See How It Works
          </a>
        </div>

        {/* Value proposition */}
        <p
          className="hero-animate text-sm md:text-base text-zinc-500 max-w-2xl mx-auto leading-relaxed text-center"
          style={{ animationDelay: "960ms" }}
        >
          A 2-engineer team shipped a regulated-industry SaaS to $300K&nbsp;ARR
          in 5&nbsp;months with a clean pen test. I&apos;ll set up your team to
          do the same.
        </p>
      </div>
    </section>
  );
}
