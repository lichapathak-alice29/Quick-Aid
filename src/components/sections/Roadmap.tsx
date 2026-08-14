import { Rocket, FlaskConical, ShieldCheck, TrendingUp, Map } from 'lucide-react';

const phases = [
  {
    phase: 'Phase 1',
    icon: <Rocket className="w-6 h-6" />,
    title: 'Pilot launch',
    text: 'Pilot with a small group of local emergency-service providers.',
  },
  {
    phase: 'Phase 2',
    icon: <FlaskConical className="w-6 h-6" />,
    title: 'Test the model',
    text: 'Test member matching, payment transparency and governance.',
  },
  {
    phase: 'Phase 3',
    icon: <ShieldCheck className="w-6 h-6" />,
    title: 'Validate economics',
    text: 'Validate member economics and service quality.',
  },
  {
    phase: 'Phase 4',
    icon: <Map className="w-6 h-6" />,
    title: 'Expand',
    text: 'Expand to additional cities and emergency-service categories.',
  },
];

export default function Roadmap() {
  return (
    <section className="section-pad relative">
      <div className="container-max">
        <div className="max-w-3xl mb-14 reveal">
          <span className="text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-3 block">
            Roadmap
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Start local. Prove the model. Scale the network.
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-0 right-0 top-7 h-px bg-gradient-to-r from-emergency-500/40 via-cyan-500/30 to-transparent" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {phases.map((p, i) => (
              <div key={i} className="reveal relative">
                <div className="glass-card p-6 h-full hover:bg-white/[0.06] transition-all duration-300 group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emergency-500/15 to-navy-700 border border-white/10 flex items-center justify-center text-emergency-500 group-hover:scale-110 transition-transform">
                      {p.icon}
                    </div>
                    <span className="text-xs font-bold tracking-widest text-cyan-400 uppercase">
                      {p.phase}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-lg mb-2">{p.title}</h3>
                  <p className="text-sm text-white/55 leading-relaxed">{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal mt-8 flex items-start gap-2.5 px-5 py-4 rounded-xl bg-white/[0.03] border border-white/[0.08] max-w-xl">
          <TrendingUp className="w-4 h-4 text-white/30 mt-0.5 shrink-0" />
          <p className="text-sm text-white/40 leading-relaxed">
            The network is in a proposed pilot stage. It is not yet operational.
          </p>
        </div>
      </div>
    </section>
  );
}
