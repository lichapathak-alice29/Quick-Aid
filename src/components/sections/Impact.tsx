import { Wallet, UserCheck, Timer, PieChart, Globe } from 'lucide-react';

const metrics = [
  {
    icon: <Wallet className="w-6 h-6" />,
    title: 'Member income',
    text: 'Track earnings per member',
  },
  {
    icon: <UserCheck className="w-6 h-6" />,
    title: 'Member retention',
    text: 'Track whether members stay in the network',
  },
  {
    icon: <Timer className="w-6 h-6" />,
    title: 'Response coordination',
    text: 'Track time from request to member acceptance',
  },
  {
    icon: <PieChart className="w-6 h-6" />,
    title: 'Member ownership',
    text: 'Track the proportion of surplus returned to members',
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'Service coverage',
    text: 'Track geographic availability',
  },
];

export default function Impact() {
  return (
    <section id="impact" className="section-pad relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-cyan-500/[0.05] rounded-full blur-[120px]" />

      <div className="container-max relative z-10">
        <div className="max-w-3xl mb-14 reveal">
          <span className="text-xs font-semibold tracking-widest text-emergency-500 uppercase mb-3 block">
            Impact
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Measure success by member outcomes.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-10">
          {metrics.map((m, i) => (
            <div
              key={i}
              className="reveal glass-card p-6 hover:bg-white/[0.06] transition-all duration-300 group"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-navy-600 to-navy-800 border border-white/10 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                {m.icon}
              </div>
              <h3 className="font-display font-bold text-lg mb-1.5">{m.title}</h3>
              <p className="text-sm text-white/50">{m.text}</p>
              <div className="mt-4 pt-4 border-t border-white/[0.06]">
                <div className="h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                  <div className="h-full w-0 bg-gradient-to-r from-cyan-500 to-emergency-500 rounded-full" />
                </div>
                <span className="text-[10px] text-white/30 mt-1.5 block">Placeholder — to be measured</span>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal px-6 sm:px-10 py-8 rounded-2xl glass border-cyan-500/15">
          <p className="font-display text-lg sm:text-xl font-semibold text-white/85 leading-relaxed max-w-3xl">
            Success means building a stronger emergency network without separating the people who
            create the value from the value they create.
          </p>
        </div>
      </div>
    </section>
  );
}
