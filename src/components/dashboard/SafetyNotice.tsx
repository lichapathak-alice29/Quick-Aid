import React from 'react';
import { Info } from 'lucide-react';

export const SafetyNotice: React.FC = () => {
  return (
    <div className="w-full py-3.5 px-4 sm:px-6 rounded-2xl bg-white/[0.02] border border-white/10 flex items-center justify-center gap-2.5 text-center">
      <Info className="w-4 h-4 text-cyan-400 shrink-0" />
      <p className="text-xs text-white/60 leading-normal">
        <span className="font-semibold text-white/80">Safety Notice:</span> QuickAid supports emergency coordination. For immediate emergencies, contact official emergency services (112 / 108).
      </p>
    </div>
  );
};
