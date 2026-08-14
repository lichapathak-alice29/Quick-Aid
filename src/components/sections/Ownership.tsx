import { Users, Vote, Coins, ShieldCheck, Scale } from 'lucide-react';

const ownershipFlow = [
  { label: 'Participating providers', icon: <Users className="w-5 h-5" /> },
  { label: 'Genuine voice', icon: <Vote className="w-5 h-5" /> },
  { label: 'Shared value', icon: <Coins className="w-5 h-5" /> },
];

const allocation = [
  { pct: 60, label: 'Active member surplus', color: 'from-emergency-500 to-emergency-700' },
  { pct: 20, label: 'Training, welfare & emergency reserve', color: 'from-cyan-500 to-cyan-600' },
  { pct: 20, label: 'Technology & network development', color: 'from-navy-500 to-navy-600' },
];

export default function Ownership() {
  return (
    <section id="ownership" className="section-pad relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[400px] bg-cyan-500/[0.04] rounded-full blur-[120px]" />

      <div className="container-max relative z-10">
        <div className="max-w-3xl mb-12 reveal">
          <span className="text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-3 block">
            Ownership Model
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            Built with the community, for the community.
          </h2>
          <p className="text-white/60 text-lg leading-relaxed">
            QuickAid Collective is designed around a member-owned model where participating
            frontline service providers can have a genuine voice and share in the value they help
            create.
          </p>
        </div>

        {/* Ownership flow */}
        <div className="reveal glass-card p-6 sm:p-8 mb-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {ownershipFlow.map((item, i) => (
              <div key={i} className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                <div className="flex flex-col items-center gap-2.5 text-center">
                  <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-cyan-400">
                    {item.icon}
                  </div>
                  <span className="text-xs font-medium text-white/70 text-center max-w-[120px]">{item.label}</span>
                </div>
                {i < ownershipFlow.length - 1 && (
                  <div className="hidden sm:block w-12 h-px bg-gradient-to-r from-cyan-500/40 to-white/10" />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left: principle */}
          <div className="reveal space-y-6">
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0">
                <Scale className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg mb-1.5">One active member, one vote</h3>
                <p className="text-white/55 leading-relaxed text-sm">
                  QuickAid Collective follows a one-active-member, one-vote principle. Control does
                  not increase simply because a member completes more transactions.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg mb-1.5">Community-owned, not corporate-owned</h3>
                <p className="text-white/55 leading-relaxed text-sm">
                  The platform is designed so that the frontline community — not an outside
                  corporation — owns and governs the network it powers.
                </p>
              </div>
            </div>
          </div>

          {/* Right: allocation bars (compact, not hero-level) */}
          <div className="reveal glass-card p-6 sm:p-8">
            <h3 className="font-display font-bold text-sm mb-1 text-white/80">Illustrative surplus allocation</h3>
            <p className="text-xs text-white/40 mb-5">
              Initial proposed model — to be validated with real operating data.
            </p>

            <div className="space-y-4">
              {allocation.map((a, i) => (
                <div key={i}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs text-white/60 font-medium">{a.label}</span>
                    <span className="font-display font-bold text-sm text-white">{a.pct}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/[0.06] overflow-hidden">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${a.color} transition-all duration-1000`}
                      style={{ width: `${a.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 pt-4 border-t border-white/10">
              <p className="text-[11px] text-white/35 leading-relaxed">
                Proposed model only — not finalized financial figures.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
