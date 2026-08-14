import { Network, Sliders, TrendingDown, Unlink } from 'lucide-react';

const problems = [
  {
    icon: <Network className="w-6 h-6" />,
    title: 'Fragmented demand',
    text: 'Local responders and service providers often depend on fragmented sources of work.',
  },
  {
    icon: <Sliders className="w-6 h-6" />,
    title: 'Limited control',
    text: 'Workers delivering the service have little say in how work is allocated or how platform rules are set.',
  },
  {
    icon: <TrendingDown className="w-6 h-6" />,
    title: 'Value leaves the frontline',
    text: 'Digital platforms can capture most of the value while frontline providers remain service suppliers.',
  },
  {
    icon: <Unlink className="w-6 h-6" />,
    title: 'No shared asset',
    text: 'Workers who help build the network rarely own a meaningful share of the system they create.',
  },
];

export default function Problem() {
  return (
    <section id="problem" className="section-pad relative">
      <div className="container-max">
        <div className="max-w-3xl mb-14 reveal">
          <span className="text-xs font-semibold tracking-widest text-emergency-500 uppercase mb-3 block">
            The Problem
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            The people delivering the care
            <br />
            rarely own the platform.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {problems.map((p, i) => (
            <div
              key={i}
              className="reveal glass-card p-6 hover:bg-white/[0.06] hover:border-white/15 transition-all duration-300 group"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-emergency-500/10 text-emergency-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {p.icon}
              </div>
              <h3 className="font-display font-bold text-lg mb-2">{p.title}</h3>
              <p className="text-sm text-white/55 leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>

        <div className="reveal mt-12 text-center">
          <p className="font-display text-xl sm:text-2xl font-semibold text-white/90">
            QuickAid Collective changes <span className="text-emergency-500">who owns</span> the network.
          </p>
        </div>
      </div>
    </section>
  );
}
