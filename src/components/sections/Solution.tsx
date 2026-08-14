import { ArrowRight, ArrowDown, Zap, MapPin, HeartPulse, Coins } from 'lucide-react';

const steps = [
  {
    num: '01',
    label: 'REQUEST',
    icon: <Zap className="w-7 h-7" />,
    title: 'Person Needs Help',
    description:
      'A person or bystander submits an emergency assistance request through the platform.',
    accent: 'cyan',
  },
  {
    num: '02',
    label: 'MATCH',
    icon: <MapPin className="w-7 h-7" />,
    title: 'Member Matching',
    description:
      'QuickAid identifies the nearest available participating member based on location and service capability.',
    accent: 'cyan',
  },
  {
    num: '03',
    label: 'RESPOND',
    icon: <HeartPulse className="w-7 h-7" />,
    title: 'Emergency Service',
    description:
      'The matched member accepts the request and provides the required service.',
    accent: 'cyan',
  },
  {
    num: '04',
    label: 'SHARE VALUE',
    icon: <Coins className="w-7 h-7" />,
    title: 'Member Value',
    description:
      'After operating costs and reserves, the agreed surplus is shared with participating members.',
    accent: 'emergency',
  },
];

export default function Solution() {
  return (
    <section id="solution" className="section-pad relative">
      <div className="absolute inset-0 bg-radial-glow opacity-50" />
      <div className="container-max relative z-10">
        {/* Heading */}
        <div className="max-w-3xl mb-14 reveal">
          <span className="text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-3 block">
            The Solution
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            A response network built around its members.
          </h2>
          <p className="text-white/60 text-lg leading-relaxed">
            QuickAid Collective connects people requesting emergency assistance with nearby
            participating members while giving those members genuine ownership and governance.
          </p>
        </div>

        {/* 4-step flow — desktop: 4 columns with arrows */}
        <div className="hidden lg:flex items-stretch gap-3 reveal">
          {steps.map((step, i) => (
            <div key={i} className="flex items-stretch flex-1 gap-3">
              <StepCard step={step} />
              {i < steps.length - 1 && (
                <div className="flex items-center justify-center shrink-0">
                  <ArrowRight className="w-5 h-5 text-white/25" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 4-step flow — tablet: 2x2 grid */}
        <div className="hidden sm:grid lg:hidden grid-cols-2 gap-4 reveal">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center">
              <StepCard step={step} className="w-full" />
              {i < steps.length - 1 && (
                <div className="mt-3 flex items-center justify-center">
                  <ArrowDown className="w-4 h-4 text-white/25" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 4-step flow — mobile: vertical timeline */}
        <div className="flex sm:hidden flex-col gap-4 reveal">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center">
              <StepCard step={step} className="w-full" />
              {i < steps.length - 1 && (
                <div className="py-2 flex items-center justify-center">
                  <ArrowDown className="w-4 h-4 text-white/25" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="reveal mt-10 text-center text-sm text-white/40 leading-relaxed max-w-2xl mx-auto">
          QuickAid Collective coordinates emergency services; it does not replace public emergency
          services such as <span className="text-emergency-500 font-medium">112</span> or{' '}
          <span className="text-emergency-500 font-medium">108</span>.
        </p>
      </div>
    </section>
  );
}

function StepCard({
  step,
  className = '',
}: {
  step: (typeof steps)[number];
  className?: string;
}) {
  const isEmergency = step.accent === 'emergency';
  const accentText = isEmergency ? 'text-emergency-500' : 'text-cyan-400';
  const accentBg = isEmergency ? 'bg-emergency-500/10' : 'bg-cyan-500/10';
  const accentBorder = isEmergency ? 'group-hover:border-emergency-500/30' : 'group-hover:border-cyan-500/30';
  const accentLabel = isEmergency ? 'text-emergency-500' : 'text-cyan-400';

  return (
    <div
      className={`group glass-card p-6 lg:p-7 flex flex-col items-center text-center hover:bg-white/[0.06] transition-all duration-300 min-h-[16rem] ${accentBorder} ${className}`}
    >
      <span className={`font-display text-2xl font-extrabold mb-4 ${accentLabel} opacity-80`}>
        {step.num}
      </span>
      <div
        className={`w-14 h-14 rounded-2xl ${accentBg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shrink-0`}
      >
        <span className={accentText}>{step.icon}</span>
      </div>
      <span className={`text-[11px] font-bold tracking-widest mb-2 ${accentLabel}`}>
        {step.label}
      </span>
      <h3 className="font-display font-bold text-lg mb-2.5 leading-snug">{step.title}</h3>
      <p className="text-sm text-white/55 leading-relaxed">{step.description}</p>
    </div>
  );
}
