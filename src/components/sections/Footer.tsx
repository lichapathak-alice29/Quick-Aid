import { Activity, Mail, MapPin } from 'lucide-react';

const footerLinks = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Emergency Help', href: '#emergency-help' },
  { label: 'Community', href: '#community' },
  { label: 'About', href: '#about' },
];

export default function Footer() {
  const handleNav = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 bg-navy-950">
      <div className="container-max px-5 sm:px-8 lg:px-12 py-12 lg:py-16">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emergency-500 to-emergency-700 flex items-center justify-center">
                <Activity className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display font-bold text-[15px]">QuickAid</span>
                <span className="text-[10px] text-white/50 font-medium tracking-wide uppercase">
                  Collective
                </span>
              </div>
            </div>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs">
              Community-powered emergency help, owned by the people who deliver it.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-4">
              Prototype
            </h4>
            <div className="space-y-2.5">
              <div className="flex items-center gap-2.5 text-sm text-white/50">
                <Mail className="w-4 h-4 text-white/30" />
                <span>hello@quickaidcollective.org</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-white/50">
                <MapPin className="w-4 h-4 text-white/30" />
                <span>Pilot stage — proposed</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} QuickAid Collective. A proposed community platform — not yet operational.
          </p>
          <p className="text-xs text-white/30">
            Does not replace public emergency services · Call 112 or 108 for official help
          </p>
        </div>
      </div>
    </footer>
  );
}
