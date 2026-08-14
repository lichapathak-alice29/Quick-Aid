import { ArrowRight, Siren } from 'lucide-react';

interface FinalCTAProps {
  onGetHelp: () => void;
}

export default function FinalCTA({ onGetHelp }: FinalCTAProps) {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="section-pad relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-emergency-500/[0.08] rounded-full blur-[120px]" />

      <div className="container-max relative z-10">
        <div className="reveal max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-emergency-500 to-emergency-700 mb-8 shadow-lg shadow-emergency-500/20">
            <Siren className="w-7 h-7 text-white" strokeWidth={2.5} />
          </div>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] mb-5">
            Help is one tap away.
          </h2>

          <p className="text-white/60 text-lg leading-relaxed max-w-xl mx-auto mb-10">
            QuickAid connects you to nearby help, trusted contacts, and critical information when
            every second matters.
          </p>

          <div className="flex flex-col sm:flex-row gap-3.5 justify-center">
            <button
              onClick={onGetHelp}
              className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-emergency-500 hover:bg-emergency-600 text-white font-semibold transition-all shadow-lg shadow-emergency-500/20 hover:shadow-emergency-500/30 hover:-translate-y-0.5"
            >
              Get Emergency Help
              <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
            <button
              onClick={() => scrollTo('#how-it-works')}
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl glass hover:bg-white/10 text-white font-semibold transition-all hover:-translate-y-0.5"
            >
              How QuickAid Works
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
