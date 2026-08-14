import { ArrowRight, Phone, MapPin, Users, HeartPulse, Siren } from 'lucide-react';

interface HeroProps {
  onGetHelp: () => void;
}

export default function Hero({ onGetHelp }: HeroProps) {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute inset-0 bg-radial-glow" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-emergency-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />

      <div className="container-max px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: copy */}
          <div className="reveal">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass mb-6">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emergency-500 animate-pulse-ring" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emergency-500" />
              </span>
              <span className="text-xs font-medium text-white/70">Community-powered emergency help</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.05] tracking-tight mb-6">
              Help when
              <br />
              <span className="text-gradient">every second</span>
              <br />
              matters.
            </h1>

            <p className="text-base sm:text-lg text-white/60 leading-relaxed max-w-xl mb-8">
              QuickAid connects people facing accidents and medical emergencies with nearby help,
              trusted contacts, and critical information when they need it most.
            </p>

            <div className="flex flex-col sm:flex-row gap-3.5 mb-10">
              <button
                onClick={onGetHelp}
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emergency-500 hover:bg-emergency-600 text-white font-semibold transition-all shadow-lg shadow-emergency-500/20 hover:shadow-emergency-500/30 hover:-translate-y-0.5"
              >
                Get Emergency Help
                <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
              <button
                onClick={() => scrollTo('#how-it-works')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl glass hover:bg-white/10 text-white font-semibold transition-all hover:-translate-y-0.5"
              >
                How QuickAid Works
              </button>
            </div>

            <div className="flex items-start gap-2.5 text-sm text-white/40 max-w-md">
              <Users className="w-4 h-4 mt-0.5 shrink-0 text-cyan-500" />
              <p>
                A member-owned network where the frontline community — not a corporation — powers
                the platform.
              </p>
            </div>
          </div>

          {/* Right: hero visual */}
          <div className="reveal relative h-[420px] sm:h-[500px] lg:h-[560px]">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroVisual() {
  const nodes = [
    { icon: <Siren className="w-5 h-5" />, label: 'Emergency', sub: 'Accident or medical', pos: 'top-0 left-1/2 -translate-x-1/2', delay: '0s' },
    { icon: <MapPin className="w-5 h-5" />, label: 'Live location', sub: 'Shared instantly', pos: 'top-1/2 right-0 -translate-y-1/2', delay: '0.3s' },
    { icon: <Users className="w-5 h-5" />, label: 'Nearby help', sub: 'Responders alerted', pos: 'bottom-0 left-1/2 -translate-x-1/2', delay: '0.6s' },
    { icon: <Phone className="w-5 h-5" />, label: 'Trusted contacts', sub: 'Family notified', pos: 'top-1/2 left-0 -translate-y-1/2', delay: '0.9s' },
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Center SOS button */}
      <div className="absolute z-20 w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-emergency-500 to-emergency-700 border-2 border-emergency-500/40 flex flex-col items-center justify-center shadow-2xl shadow-emergency-500/40 animate-float">
        <span className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-wider">SOS</span>
        <span className="text-[10px] text-white/70 mt-1 font-medium tracking-wide uppercase">Tap for help</span>
      </div>

      {/* Connecting rings */}
      <div className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full border border-emergency-500/10" />
      <div className="absolute w-80 h-80 sm:w-96 sm:h-96 rounded-full border border-white/[0.04]" />

      {/* Pulsing rings */}
      <div className="absolute w-32 h-32 sm:w-40 sm:h-40 rounded-full border-2 border-emergency-500/30 animate-pulse-ring" />

      {/* Orbit nodes */}
      {nodes.map((node, i) => (
        <div
          key={i}
          className={`absolute z-10 ${node.pos} animate-fade-in-up opacity-0`}
          style={{ animationDelay: node.delay, animationFillMode: 'forwards' }}
        >
          <div className="flex flex-col items-center gap-1.5">
            <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-cyan-400">
              {node.icon}
            </div>
            <div className="text-center">
              <p className="text-[11px] font-semibold text-white/80 whitespace-nowrap">{node.label}</p>
              <p className="text-[9px] text-white/40">{node.sub}</p>
            </div>
          </div>
        </div>
      ))}

      {/* Bottom badge */}
      <div className="absolute -bottom-2 right-2 sm:right-4 z-30 px-3 py-2 rounded-xl glass flex items-center gap-2">
        <HeartPulse className="w-3.5 h-3.5 text-emergency-500" />
        <span className="text-[10px] font-medium text-white/60">Community-powered</span>
      </div>
    </div>
  );
}
