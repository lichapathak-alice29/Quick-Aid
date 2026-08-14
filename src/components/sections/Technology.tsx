import { Monitor, Server, Database, MapPinned, CreditCard, BrainCircuit, Cpu } from 'lucide-react';

const stack = [
  { icon: <Monitor className="w-5 h-5" />, label: 'Frontend', value: 'React' },
  { icon: <Server className="w-5 h-5" />, label: 'Backend', value: 'Node.js + Express.js' },
  { icon: <Database className="w-5 h-5" />, label: 'Database', value: 'Firebase' },
  { icon: <MapPinned className="w-5 h-5" />, label: 'Location', value: 'Google Maps API' },
  { icon: <CreditCard className="w-5 h-5" />, label: 'Payments', value: 'UPI / digital payments' },
  { icon: <BrainCircuit className="w-5 h-5" />, label: 'AI', value: 'AI-assisted request classification & coordination' },
];

export default function Technology() {
  return (
    <section id="technology" className="section-pad relative">
      <div className="container-max">
        <div className="max-w-3xl mb-14 reveal">
          <span className="text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-3 block">
            Technology
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            Technology that serves the ownership model.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {stack.map((s, i) => (
            <div
              key={i}
              className="reveal glass-card p-5 flex items-center gap-4 hover:bg-white/[0.06] hover:border-cyan-500/20 transition-all"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0">
                {s.icon}
              </div>
              <div>
                <p className="text-xs text-white/40 uppercase tracking-wide font-medium mb-0.5">{s.label}</p>
                <p className="text-sm font-semibold text-white/80">{s.value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal relative overflow-hidden rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-navy-700/40 to-cyan-500/[0.06]" />
          <div className="relative px-6 sm:px-10 py-8 border border-white/10 rounded-2xl flex flex-col sm:flex-row items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0">
              <Cpu className="w-6 h-6" />
            </div>
            <p className="text-white/70 leading-relaxed text-base max-w-3xl">
              Technology reduces the coordination and record-keeping cost that traditionally makes
              distributed cooperative models difficult to operate at scale.
            </p>
          </div>
        </div>

        <p className="reveal text-xs text-white/30 mt-4 max-w-2xl">
          AI assists with request classification and coordination. It is an enabler, not the central
          value proposition of the network.
        </p>
      </div>
    </section>
  );
}
