import { Eye, Target, ShieldCheck, Users } from 'lucide-react';

const values = [
  {
    icon: <Eye className="w-6 h-6" />,
    title: 'Easier to access',
    text: 'One-tap help and live location sharing reduce the time it takes to reach someone in need.',
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: 'Faster to coordinate',
    text: 'Nearby responders and trusted contacts are alerted simultaneously, not one by one.',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Community-powered',
    text: 'The network is built and supported by the frontline community it serves.',
  },
];

export default function About() {
  return (
    <section id="about" className="section-pad relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-cyan-500/[0.05] rounded-full blur-[120px]" />

      <div className="container-max relative z-10">
        <div className="max-w-3xl mb-14 reveal">
          <span className="text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-3 block">
            About
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            Make emergency assistance easier to access, faster to coordinate, and more
            community-powered.
          </h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 sm:gap-5 mb-10">
          {values.map((v, i) => (
            <div
              key={i}
              className="reveal glass-card p-6 hover:bg-white/[0.06] transition-all duration-300 group"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {v.icon}
              </div>
              <h3 className="font-display font-bold text-lg mb-2">{v.title}</h3>
              <p className="text-sm text-white/55 leading-relaxed">{v.text}</p>
            </div>
          ))}
        </div>

        <div className="reveal flex items-start gap-2.5 text-sm text-white/40 max-w-2xl">
          <ShieldCheck className="w-4 h-4 mt-0.5 shrink-0 text-cyan-500" />
          <p>
            QuickAid Collective is a proposed pilot platform. It is designed to complement, not
            replace, public emergency services.
          </p>
        </div>
      </div>
    </section>
  );
}
