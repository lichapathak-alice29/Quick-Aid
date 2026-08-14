import { useState, useEffect } from 'react';
import { Menu, X, Activity } from 'lucide-react';

interface NavbarProps {
  onGetHelp: () => void;
}

const navLinks = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Emergency Help', href: '#emergency-help' },
  { label: 'Community', href: '#community' },
  { label: 'About', href: '#about' },
];

export default function Navbar({ onGetHelp }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy-950/80 backdrop-blur-xl border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-max px-5 sm:px-8 lg:px-12 flex items-center justify-between h-16 lg:h-18">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2.5 group"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emergency-500 to-emergency-700 flex items-center justify-center shadow-lg shadow-emergency-500/20 group-hover:scale-105 transition-transform">
            <Activity className="w-5 h-5 text-white" strokeWidth={2.5} />
          </div>
          <div className="flex flex-col leading-none text-left">
            <span className="font-display font-bold text-[15px] tracking-tight">QuickAid</span>
            <span className="text-[10px] text-white/50 font-medium tracking-wide uppercase">
              Collective
            </span>
          </div>
        </button>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="px-3.5 py-2 text-sm text-white/70 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <button
            onClick={onGetHelp}
            className="px-5 py-2.5 rounded-xl bg-emergency-500 hover:bg-emergency-600 text-white text-sm font-bold transition-colors shadow-lg shadow-emergency-500/20"
          >
            GET EMERGENCY HELP
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 rounded-lg text-white/80 hover:bg-white/10 transition-colors"
          aria-label="Menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-[400px] border-t border-white/10' : 'max-h-0'
        }`}
      >
        <div className="bg-navy-900/95 backdrop-blur-xl px-5 py-4 space-y-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="block w-full text-left px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => {
              setMobileOpen(false);
              onGetHelp();
            }}
            className="block w-full text-center px-4 py-3 mt-2 rounded-xl bg-emergency-500 text-white font-bold transition-colors"
          >
            GET EMERGENCY HELP
          </button>
        </div>
      </div>
    </header>
  );
}
