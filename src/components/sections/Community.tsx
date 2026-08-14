import { Heart, Users, Ambulance, Stethoscope, HandHeart, Bike } from 'lucide-react';

const supporters = [
  { icon: <Stethoscope className="w-6 h-6" />, title: 'Paramedics', text: 'Trained medical professionals who can provide immediate care.' },
  { icon: <Ambulance className="w-6 h-6" />, title: 'Ambulance operators', text: 'Transport providers who help people reach care quickly.' },
  { icon: <HandHeart className="w-6 h-6" />, title: 'Volunteers', text: 'Local community members who step in when someone needs help nearby.' },
  { icon: <Bike className="w-6 h-6" />, title: 'Local helpers', text: 'Nearby responders who can reach the scene fastest.' },
];

export default function Community() {
  return (
    <section id="community" className="section-pad relative">
      <div className="container-max">
        <div className="max-w-3xl mb-14 reveal">
          <span className="text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-3 block">
            Community
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            Powered by people who care.
          </h2>
          <p className="text-white/60 text-lg leading-relaxed">
            QuickAid is supported by a network of participating responders, ambulance operators,
            paramedics, volunteers and other local helpers — real people stepping up when their
            community needs them.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-10">
          {supporters.map((s, i) => (
            <div
              key={i}
              className="reveal glass-card p-6 hover:bg-white/[0.06] hover:border-cyan-500/20 transition-all duration-300 group"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {s.icon}
              </div>
              <h3 className="font-display font-bold text-lg mb-2">{s.title}</h3>
              <p className="text-sm text-white/55 leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>

        <div className="reveal relative overflow-hidden rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-emergency-500/10 via-navy-700/30 to-cyan-500/10" />
          <div className="relative px-6 sm:px-10 py-8 sm:py-10 border border-white/10 rounded-2xl flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emergency-500/15 text-emergency-500 flex items-center justify-center shrink-0">
              <Heart className="w-6 h-6" />
            </div>
            <p className="font-display text-lg sm:text-xl lg:text-2xl font-bold leading-snug text-white max-w-3xl">
              When the community shows up for each other, help arrives faster.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
