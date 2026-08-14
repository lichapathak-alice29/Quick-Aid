import React, { useState } from 'react';
import { MapPin, HeartPulse, Users, PhoneCall, ArrowUpRight, X } from 'lucide-react';

interface ActionItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  badge?: string;
  modalTitle: string;
  modalContent: string;
}

export const QuickActions: React.FC = () => {
  const [activeModal, setActiveModal] = useState<ActionItem | null>(null);

  const actions: ActionItem[] = [
    {
      id: 'share-location',
      icon: <MapPin className="w-6 h-6 text-cyan-400" />,
      title: 'Share Location',
      description: 'Broadcast your live GPS coordinates with verified local responders.',
      badge: 'GPS Active',
      modalTitle: '📍 Share Live Location',
      modalContent:
        'Your mock location (Sector 62, Noida) is ready to broadcast. In full deployment, this tracks live GPS data for rapid volunteer dispatch.',
    },
    {
      id: 'medical-profile',
      icon: <HeartPulse className="w-6 h-6 text-rose-400" />,
      title: 'Medical Profile',
      description: 'Instantly present emergency medical records, allergies, and blood type.',
      badge: 'Updated',
      modalTitle: '❤️ Medical Profile Quick Access',
      modalContent:
        'Contains Blood Group O+, Allergies (Penicillin, Peanuts), and regular medications. Ready for paramedics during emergency transport.',
    },
    {
      id: 'emergency-contacts',
      icon: <Users className="w-6 h-6 text-blue-400" />,
      title: 'Emergency Contacts',
      description: 'Alert designated family members and doctor upon SOS trigger.',
      badge: '3 Registered',
      modalTitle: '👥 Trusted Emergency Contacts',
      modalContent:
        'Primary contact Priya Sharma (+91 98765 43210) and 2 secondary contacts will be auto-notified via SMS/Push when SOS is requested.',
    },
    {
      id: 'emergency-services',
      icon: <PhoneCall className="w-6 h-6 text-amber-400" />,
      title: 'Emergency Services',
      description: 'One-tap speed dial for official National Emergency Helplines (112, 108).',
      badge: '24x7 Direct',
      modalTitle: '📞 Official Emergency Services',
      modalContent:
        'Connect directly to National Emergency Number (112) or Ambulance Dispatch (108). Always call official services first in life-threatening situations.',
    },
  ];

  return (
    <div className="w-full space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-display font-bold text-white tracking-tight">
          Quick Safety Actions
        </h3>
        <span className="text-xs text-white/50">One-tap utilities</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {actions.map((action) => (
          <div
            key={action.id}
            className="group glass-card p-5 hover:bg-white/[0.06] hover:border-white/20 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {action.icon}
                </div>
                {action.badge && (
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/60 font-medium">
                    {action.badge}
                  </span>
                )}
              </div>
              <h4 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors">
                {action.title}
              </h4>
              <p className="text-xs text-white/60 mt-1 line-clamp-2 leading-relaxed">
                {action.description}
              </p>
            </div>

            <button
              onClick={() => setActiveModal(action)}
              className="mt-4 w-full py-2 px-3 rounded-lg bg-white/5 hover:bg-white/10 text-white/80 hover:text-white text-xs font-semibold border border-white/10 flex items-center justify-center gap-1.5 transition-colors"
            >
              <span>Access Action</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        ))}
      </div>

      {/* Action Detail Modal Placeholder */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-md animate-fade-in">
          <div className="w-full max-w-md rounded-2xl bg-navy-900 border border-white/15 p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h3 className="text-lg font-bold text-white">{activeModal.modalTitle}</h3>
              <button
                onClick={() => setActiveModal(null)}
                className="p-1 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">{activeModal.modalContent}</p>
            <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-xs text-cyan-300">
              Mock interface mode: backend integration ready for phase deployment.
            </div>
            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setActiveModal(null)}
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
