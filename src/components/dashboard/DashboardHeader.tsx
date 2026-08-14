import React from 'react';
import { Activity, User, ShieldCheck, Home } from 'lucide-react';
import { UserProfile } from '@/data/mockHelpSeekerData';

interface DashboardHeaderProps {
  user: UserProfile;
  onNavigateHome?: () => void;
}

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({ user, onNavigateHome }) => {
  return (
    <header className="border-b border-white/10 bg-navy-950/80 backdrop-blur-xl sticky top-0 z-40">
      <div className="container-max px-4 sm:px-6 lg:px-8 py-4">
        {/* Brand & Profile Top Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/5">
          <div className="flex items-center justify-between sm:justify-start gap-4">
            <button
              onClick={onNavigateHome}
              className="flex items-center gap-2.5 group hover:opacity-90 transition-opacity"
              title="Return to QuickAid Landing Page"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emergency-500 to-emergency-700 flex items-center justify-center shadow-lg shadow-emergency-500/20 group-hover:scale-105 transition-transform">
                <Activity className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <div className="flex flex-col leading-none text-left">
                <span className="font-display font-bold text-base tracking-tight text-white">
                  QuickAid
                </span>
                <span className="text-[10px] text-cyan-400 font-semibold tracking-wider uppercase">
                  Collective
                </span>
              </div>
            </button>

            <span className="hidden sm:inline-block h-5 w-px bg-white/15" />
            
            <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              Help Seeker Portal
            </span>
          </div>

          <div className="flex items-center justify-between sm:justify-end gap-3">
            {onNavigateHome && (
              <button
                onClick={onNavigateHome}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/80 hover:text-white text-xs font-medium border border-white/10 transition-colors"
              >
                <Home className="w-3.5 h-3.5" />
                Home Page
              </button>
            )}

            {/* Profile Avatar Card */}
            <div className="flex items-center gap-3 px-3 py-1.5 rounded-xl bg-navy-900/80 border border-white/10 shadow-sm">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-white text-xs shadow">
                {user.name.charAt(0)}
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs font-bold text-white leading-snug">{user.name}</span>
                <span className="text-[10px] text-white/50">{user.id}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Title & Subtext */}
        <div className="pt-5 pb-1">
          <h1 className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight">
            How can we help you today?
          </h1>
          <p className="text-sm sm:text-base text-white/60 mt-1 max-w-2xl">
            Quick access to emergency assistance, your medical information, and trusted contacts.
          </p>
        </div>
      </div>
    </header>
  );
};
