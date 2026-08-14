import { ClipboardList, MapPin, Stethoscope, Share2 } from 'lucide-react';

const steps = [
  {
    num: '01',
    icon: <ClipboardList className="w-6 h-6" />,
    title: 'Request',
    text: 'A person or bystander submits an emergency assistance request through QuickAid.',
  },
  {
    num: '02',
    icon: <MapPin className="w-6 h-6" />,
    title: 'Match',
    text: 'The platform identifies nearby participating responders based on location and availability.',
  },
  {
    num: '03',
    icon: <Stethoscope className="w-6 h-6" />,
    title: 'Respond',
    text: 'A nearby responder or helper accepts and provides the relevant emergency assistance.',
  },
  {
    num: '04',
    icon: <Share2 className="w-6 h-6" />,
    title: 'Stay Connected',
    text: 'Trusted contacts are kept informed and the person stays connected throughout the process.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-pad relative">
      <div className="container-max">
        <div className="max-w-3xl mb-14 reveal">
          <span className="text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-3 block">
            How It Works
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Four steps from emergency to help.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, i) => (
            <div key={i} className="reveal relative">
              <div className="glass-card p-6 h-full hover:bg-white/[0.06] transition-all duration-300 group">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-navy-600 to-navy-800 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                  <span className="font-display text-3xl font-extrabold text-white/10 group-hover:text-white/20 transition-colors">
                    {step.num}
                  </span>
                </div>
                <h3 className="font-display font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-white/55 leading-relaxed">{step.text}</p>
              </div>
              {/* Connector arrow */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-white/20 to-transparent" />
              )}
            </div>
          ))}
        </div>

        <div className="reveal mt-10 flex items-start gap-2.5 px-5 py-4 rounded-xl bg-cyan-500/[0.06] border border-cyan-500/15 max-w-2xl">
          <div className="w-2 h-2 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
          <p className="text-sm text-white/50 leading-relaxed">
            QuickAid Collective coordinates community help; it does not replace public emergency
            services such as <span className="text-emergency-500 font-medium">112</span> or{' '}
            <span className="text-emergency-500 font-medium">108</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
