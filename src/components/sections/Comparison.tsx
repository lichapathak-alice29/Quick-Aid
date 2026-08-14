import { X, Check } from 'lucide-react';

const normalMarket = [
  'Platform owns the network',
  'Workers are service providers',
  'Platform controls major decisions',
  'Value primarily flows to the company',
  'Worker voice is limited',
];

const collective = [
  'Members collectively own the network',
  'Workers are co-owners',
  'Members participate in governance',
  'Surplus is shared according to agreed rules',
  'One active member = one vote',
];

export default function Comparison() {
  return (
    <section className="section-pad relative">
      <div className="container-max">
        <div className="max-w-3xl mb-14 reveal">
          <span className="text-xs font-semibold tracking-widest text-emergency-500 uppercase mb-3 block">
            Cooperative vs Marketplace
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Same technology. Different ownership.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5 mb-10">
          {/* Normal marketplace */}
          <div className="reveal glass-card p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-white/[0.06] flex items-center justify-center text-white/40">
                <X className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg text-white/60">Normal marketplace</h3>
            </div>
            <ul className="space-y-4">
              {normalMarket.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-white/[0.06] flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3 h-3 text-white/30" />
                  </span>
                  <span className="text-sm text-white/50">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* QuickAid Collective */}
          <div className="reveal glass-card p-6 sm:p-8 border-emergency-500/20 bg-emergency-500/[0.03]">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-emergency-500/15 flex items-center justify-center text-emergency-500">
                <Check className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg text-white">QuickAid Collective</h3>
            </div>
            <ul className="space-y-4">
              {collective.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-emergency-500/15 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-emergency-500" />
                  </span>
                  <span className="text-sm text-white/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="reveal text-center">
          <p className="font-display text-xl sm:text-2xl font-semibold text-white/90 max-w-2xl mx-auto">
            The difference is not the app. It is <span className="text-emergency-500">who owns what the app creates.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
