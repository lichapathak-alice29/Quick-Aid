import { Compass, Eye, Crown, Coins, Megaphone } from 'lucide-react';

const benefits = [
  {
    icon: <Compass className="w-6 h-6" />,
    title: 'Better access to demand',
    text: 'Access a shared network of service requests.',
  },
  {
    icon: <Eye className="w-6 h-6" />,
    title: 'Transparent work allocation',
    text: 'Clearer rules for how requests reach available members.',
  },
  {
    icon: <Crown className="w-6 h-6" />,
    title: 'Real ownership',
    text: 'Members collectively own and govern the network.',
  },
  {
    icon: <Coins className="w-6 h-6" />,
    title: 'Shared surplus',
    text: 'Members receive a defined share of the value they help create.',
  },
  {
    icon: <Megaphone className="w-6 h-6" />,
    title: 'Voice in decisions',
    text: 'One active member, one vote.',
  },
];

export default function ForMembers() {
  return (
    <section id="for-members" className="section-pad relative">
      <div className="container-max">
        <div className="max-w-3xl mb-14 reveal">
          <span className="text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-3 block">
            For Members
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Why would a frontline worker join?
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-10">
          {benefits.map((b, i) => (
            <div
              key={i}
              className={`reveal glass-card p-6 hover:bg-white/[0.06] hover:border-cyan-500/20 transition-all duration-300 group ${
                i === 4 ? 'lg:col-span-1 sm:col-span-2 lg:col-span-1' : ''
              }`}
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {b.icon}
              </div>
              <h3 className="font-display font-bold text-lg mb-2">{b.title}</h3>
              <p className="text-sm text-white/55 leading-relaxed">{b.text}</p>
            </div>
          ))}
        </div>

        <div className="reveal relative overflow-hidden rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-emergency-500/10 via-navy-700/30 to-cyan-500/10" />
          <div className="relative px-6 sm:px-10 py-8 sm:py-10 border border-white/10 rounded-2xl">
            <p className="font-display text-xl sm:text-2xl lg:text-3xl font-bold leading-snug text-white max-w-3xl">
              If the network grows, the people doing the work should benefit from that growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
