import { ArrowRight, ArrowDown, Siren, Zap, MapPin, Users, Phone, HeartPulse, Info, Ambulance } from 'lucide-react';

const flow = [
  { num: '01', label: 'ACCIDENT OR EMERGENCY', icon: <Siren className="w-6 h-6" />, title: 'Emergency happens', description: 'An accident or medical emergency occurs and help is needed quickly.' },
  { num: '02', label: 'GET HELP', icon: <Zap className="w-6 h-6" />, title: 'One-tap request', description: 'The person or a bystander triggers an emergency request through QuickAid.' },
  { num: '03', label: 'SHARE LOCATION', icon: <MapPin className="w-6 h-6" />, title: 'Live location shared', description: 'The platform shares the person\'s live location with nearby help and contacts.' },
  { num: '04', label: 'CONNECT WITH NEARBY HELP', icon: <Users className="w-6 h-6" />, title: 'Nearby help connected', description: 'Participating responders and local helpers in the area are alerted and coordinated.' },
  { num: '05', label: 'ALERT TRUSTED CONTACTS', icon: <Phone className="w-6 h-6" />, title: 'Trusted contacts notified', description: 'Family and trusted contacts are informed so they can stay connected and support.' },
];

const capabilities = [
  { icon: <Zap className="w-5 h-5" />, text: 'One-tap emergency request' },
  { icon: <MapPin className="w-5 h-5" />, text: 'Live location sharing' },
  { icon: <Phone className="w-5 h-5" />, text: 'Trusted contact alerts' },
  { icon: <HeartPulse className="w-5 h-5" />, text: 'Emergency medical information' },
  { icon: <Users className="w-5 h-5" />, text: 'Nearby responder coordination' },
  { icon: <Info className="w-5 h-5" />, text: 'Access to emergency numbers such as 112 / 108' },
];

export default function EmergencyHelp() {
  return (
    <section id="emergency-help" className="section-pad relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-emergency-500/[0.06] rounded-full blur-[120px]" />

      <div className="container-max relative z-10">
        <div className="max-w-3xl mb-14 reveal">
          <span className="text-xs font-semibold tracking-widest text-emergency-500 uppercase mb-3 block">
            Emergency Help
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            From emergency to help in moments.
          </h2>
          <p className="text-white/60 text-lg leading-relaxed">
            When something happens, QuickAid helps you reach nearby help, share your location, and
            alert the people who matter — all in a few taps.
          </p>
        </div>

        {/* 5-step flow — desktop: horizontal with arrows */}
        <div className="hidden lg:flex items-stretch gap-2 reveal mb-12">
          {flow.map((step, i) => (
            <div key={i} className="flex items-stretch flex-1 gap-2">
              <FlowCard step={step} />
              {i < flow.length - 1 && (
                <div className="flex items-center justify-center shrink-0">
                  <ArrowRight className="w-4 h-4 text-emergency-500/40" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 5-step flow — tablet/mobile: vertical timeline */}
        <div className="flex lg:hidden flex-col gap-4 reveal mb-12">
          {flow.map((step, i) => (
            <div key={i} className="flex flex-col items-center">
              <FlowCard step={step} className="w-full" />
              {i < flow.length - 1 && (
                <div className="py-2 flex items-center justify-center">
                  <ArrowDown className="w-4 h-4 text-emergency-500/40" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Capabilities grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-10">
          {capabilities.map((c, i) => (
            <div
              key={i}
              className="reveal flex items-center gap-3.5 px-5 py-5 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.06] hover:border-emergency-500/20 transition-all min-h-[4rem]"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <span className="text-emergency-500 shrink-0">{c.icon}</span>
              <span className="text-sm text-white/70 leading-snug">{c.text}</span>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="reveal flex items-start gap-2.5 px-5 py-4 rounded-xl bg-cyan-500/[0.06] border border-cyan-500/15 max-w-2xl">
          <Ambulance className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
          <p className="text-sm text-white/50 leading-relaxed">
            QuickAid coordinates community help and information. It does not replace government
            emergency services. Always call <span className="text-emergency-500 font-medium">112</span> or{' '}
            <span className="text-emergency-500 font-medium">108</span> for official emergency response.
          </p>
        </div>
      </div>
    </section>
  );
}

function FlowCard({
  step,
  className = '',
}: {
  step: (typeof flow)[number];
  className?: string;
}) {
  return (
    <div
      className={`group glass-card p-5 lg:p-6 flex flex-col items-center text-center hover:bg-white/[0.06] hover:border-emergency-500/20 transition-all duration-300 min-h-[14rem] ${className}`}
    >
      <span className="font-display text-xl font-extrabold text-emergency-500 opacity-80 mb-3">
        {step.num}
      </span>
      <div className="w-12 h-12 rounded-2xl bg-emergency-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shrink-0">
        <span className="text-emergency-500">{step.icon}</span>
      </div>
      <span className="text-[10px] font-bold tracking-widest text-emergency-500 mb-2">
        {step.label}
      </span>
      <h3 className="font-display font-bold text-base mb-2 leading-snug">{step.title}</h3>
      <p className="text-xs text-white/50 leading-relaxed">{step.description}</p>
    </div>
  );
}
