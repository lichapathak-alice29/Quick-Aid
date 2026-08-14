import React, { useState, useEffect } from 'react';
import { AlertTriangle, PhoneCall, XCircle, CheckCircle2, ShieldAlert, Radio } from 'lucide-react';

export const SosSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isActiveEmergency, setIsActiveEmergency] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const steps = [
    { label: 'Request Sent', desc: 'Emergency signal transmitted' },
    { label: 'Helper Found', desc: 'Nearby responder matched' },
    { label: 'Helper Responding', desc: 'En route to your location' },
    { label: 'Resolved', desc: 'Assistance complete' },
  ];

  // Auto-progress mock steps when active emergency is ON
  useEffect(() => {
    if (!isActiveEmergency) {
      setCurrentStepIndex(0);
      return;
    }

    const timer1 = setTimeout(() => setCurrentStepIndex(1), 3500);
    const timer2 = setTimeout(() => setCurrentStepIndex(2), 8000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [isActiveEmergency]);

  const handleConfirmEmergency = () => {
    setIsModalOpen(false);
    setIsActiveEmergency(true);
    setCurrentStepIndex(0);
  };

  const handleCancelEmergency = () => {
    setIsActiveEmergency(false);
    setCurrentStepIndex(0);
  };

  return (
    <section className="w-full">
      {!isActiveEmergency ? (
        /* Standard Large SOS Section */
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emergency-950/80 via-navy-900 to-navy-950 border-2 border-emergency-500/40 p-6 sm:p-8 lg:p-10 shadow-2xl shadow-emergency-950/60">
          {/* Subtle Ambient Background Effects */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-emergency-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-red-900/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emergency-500/15 border border-emergency-500/30 text-emergency-400 text-xs font-bold tracking-wide uppercase mb-3">
                <AlertTriangle className="w-4 h-4 animate-bounce" />
                Immediate Assistance
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-black text-white tracking-tight">
                Need Emergency Help?
              </h2>
              <p className="text-white/70 text-base sm:text-lg mt-2 leading-relaxed">
                Request nearby assistance and share your emergency details.
              </p>
            </div>

            {/* Large SOS Action Button */}
            <div className="flex flex-col items-center md:items-end justify-center">
              <div className="relative group">
                {/* Pulse ring animation */}
                <div className="absolute -inset-2 bg-gradient-to-r from-emergency-600 to-red-500 rounded-2xl blur-md opacity-75 group-hover:opacity-100 transition duration-300 animate-pulse" />
                
                <button
                  onClick={() => setIsModalOpen(true)}
                  id="sos-main-button"
                  className="relative px-8 py-5 sm:px-10 sm:py-6 rounded-2xl bg-gradient-to-r from-emergency-600 via-emergency-500 to-red-600 hover:from-emergency-500 hover:to-red-500 text-white font-black text-xl sm:text-2xl tracking-wide shadow-xl shadow-emergency-600/50 hover:shadow-emergency-600/80 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-3 border border-white/20"
                >
                  <span className="text-2xl sm:text-3xl">🚨</span>
                  <span>SOS — GET HELP</span>
                </button>
              </div>
              <span className="text-xs text-white/50 mt-2 font-medium">
                Tap to trigger instant emergency dispatch modal
              </span>
            </div>
          </div>
        </div>
      ) : (
        /* ACTIVE EMERGENCY MOCK STATE */
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emergency-950 via-navy-900 to-navy-950 border-2 border-emergency-500 p-6 sm:p-8 shadow-2xl shadow-emergency-900/80 animate-fade-in">
          {/* Active Banner Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-emergency-600 flex items-center justify-center shadow-lg shadow-emergency-600/40 animate-pulse">
                <Radio className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                    🚨 Emergency Active
                  </h2>
                  <span className="px-2.5 py-0.5 rounded-full bg-emergency-500/20 border border-emergency-400 text-emergency-400 text-xs font-bold uppercase tracking-wider">
                    LIVE
                  </span>
                </div>
                <p className="text-sm text-white/70 mt-0.5">
                  Current Status:{' '}
                  <span className="text-cyan-400 font-bold">
                    {steps[currentStepIndex].label}
                  </span>
                </p>
              </div>
            </div>

            {/* Direct Calling Buttons */}
            <div className="flex items-center gap-2.5">
              <a
                href="tel:112"
                onClick={(e) => {
                  e.preventDefault();
                  alert('Mock Action: Calling Official Emergency Services (112)');
                }}
                className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs sm:text-sm flex items-center gap-2 transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-emerald-400" />
                Call 112
              </a>
              <a
                href="tel:108"
                onClick={(e) => {
                  e.preventDefault();
                  alert('Mock Action: Calling Ambulance Helpline (108)');
                }}
                className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs sm:text-sm flex items-center gap-2 transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-cyan-400" />
                Call 108
              </a>
            </div>
          </div>

          {/* Progress Timeline */}
          <div className="py-6">
            <h3 className="text-xs font-bold uppercase text-white/50 tracking-wider mb-4">
              Emergency Dispatch Progress
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {steps.map((step, idx) => {
                const isDone = idx < currentStepIndex;
                const isCurrent = idx === currentStepIndex;
                return (
                  <div
                    key={step.label}
                    className={`p-4 rounded-xl border transition-all ${
                      isCurrent
                        ? 'bg-emergency-900/40 border-emergency-500 shadow-md shadow-emergency-500/10 scale-[1.02]'
                        : isDone
                        ? 'bg-emerald-950/20 border-emerald-500/40 text-emerald-300'
                        : 'bg-navy-900/50 border-white/5 opacity-50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold uppercase text-white/60">
                        Step 0{idx + 1}
                      </span>
                      {isDone ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      ) : isCurrent ? (
                        <div className="w-2.5 h-2.5 rounded-full bg-emergency-500 animate-ping" />
                      ) : null}
                    </div>
                    <p
                      className={`text-sm font-bold ${
                        isCurrent ? 'text-emergency-400' : isDone ? 'text-emerald-300' : 'text-white/70'
                      }`}
                    >
                      {step.label}
                    </p>
                    <p className="text-xs text-white/50 mt-1">{step.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-between">
            <p className="text-xs text-white/50 italic">
              Mock active emergency mode. No real responders contacted.
            </p>
            <button
              onClick={handleCancelEmergency}
              className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-red-500/20 border border-white/20 hover:border-red-500/50 text-red-300 hover:text-red-200 font-bold text-xs sm:text-sm flex items-center gap-2 transition-all"
            >
              <XCircle className="w-4 h-4" />
              Cancel Emergency
            </button>
          </div>
        </div>
      )}

      {/* CONFIRMATION MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-md animate-fade-in">
          <div
            className="w-full max-w-lg rounded-3xl bg-navy-900 border border-white/15 p-6 sm:p-8 shadow-2xl space-y-6 relative"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-center gap-4 text-emergency-500">
              <div className="w-12 h-12 rounded-2xl bg-emergency-500/10 border border-emergency-500/30 flex items-center justify-center">
                <ShieldAlert className="w-7 h-7 text-emergency-500" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white">
                  Confirm Emergency Request
                </h3>
                <p className="text-xs text-white/50 mt-0.5">QuickAid Safety Verification</p>
              </div>
            </div>

            <p className="text-base text-white/80 leading-relaxed font-medium">
              Are you sure you need emergency assistance?
            </p>

            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs text-white/60 space-y-1">
              <p className="font-semibold text-white/80">What happens next (Mock mode):</p>
              <p>• Your GPS coordinates and medical card will be broadcast.</p>
              <p>• Emergency contacts will receive an immediate notification.</p>
            </div>

            <div className="flex flex-col-reverse sm:flex-row items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setIsModalOpen(false)}
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white/80 font-bold text-sm border border-white/10 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmEmergency}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emergency-600 hover:bg-emergency-500 text-white font-bold text-sm shadow-lg shadow-emergency-600/30 transition-all flex items-center justify-center gap-2"
              >
                <span>🚨</span>
                Confirm Emergency
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
