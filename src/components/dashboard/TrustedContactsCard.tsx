import React, { useState } from 'react';
import { Users, Phone, Star, Plus, X, UserCheck } from 'lucide-react';
import { EmergencyContact } from '@/data/mockHelpSeekerData';

interface TrustedContactsCardProps {
  contacts: EmergencyContact[];
}

export const TrustedContactsCard: React.FC<TrustedContactsCardProps> = ({ contacts }) => {
  const [showManageModal, setShowManageModal] = useState(false);

  return (
    <div className="glass-card p-5 hover:border-white/20 transition-all flex flex-col justify-between h-full">
      <div>
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
              <Users className="w-4 h-4 text-blue-400" />
            </div>
            <h3 className="text-base font-bold text-white">Trusted Contacts</h3>
          </div>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-300 font-medium">
            {contacts.length} Registered
          </span>
        </div>

        {/* Contacts List */}
        <div className="space-y-2.5">
          {contacts.map((contact) => (
            <div
              key={contact.id}
              className="p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 transition-colors flex items-center justify-between gap-3"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-navy-700 to-navy-600 border border-white/10 flex items-center justify-center text-xs font-bold text-white">
                  {contact.name.charAt(0)}
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-white">{contact.name}</span>
                    {contact.isPrimary && (
                      <span title="Primary Contact">
                        <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                      </span>
                    )}
                  </div>
                  <span className="text-[11px] text-white/50 block">{contact.relationship}</span>
                </div>
              </div>

              <a
                href={`tel:${contact.phone}`}
                onClick={(e) => {
                  e.preventDefault();
                  alert(`Mock Call: Dialing ${contact.name} (${contact.phone})`);
                }}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-cyan-400 hover:text-cyan-300 border border-white/10 transition-colors"
                title={`Call ${contact.name}`}
              >
                <Phone className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Button */}
      <div className="pt-4 mt-2">
        <button
          onClick={() => setShowManageModal(true)}
          className="w-full py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold text-xs border border-white/10 transition-colors flex items-center justify-center gap-2"
        >
          <UserCheck className="w-3.5 h-3.5 text-white/60" />
          <span>Manage Contacts</span>
        </button>
      </div>

      {/* Manage Contacts Modal */}
      {showManageModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-md animate-fade-in">
          <div className="w-full max-w-lg rounded-3xl bg-navy-900 border border-white/15 p-6 sm:p-8 shadow-2xl space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center">
                  <Users className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Emergency Contacts Directory</h3>
                  <p className="text-xs text-white/50">Manage speed-dial contacts for emergency dispatch</p>
                </div>
              </div>
              <button
                onClick={() => setShowManageModal(false)}
                className="p-1.5 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
              {contacts.map((contact) => (
                <div
                  key={contact.id}
                  className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between"
                >
                  <div>
                    <p className="text-sm font-bold text-white">{contact.name}</p>
                    <p className="text-xs text-white/60">
                      {contact.relationship} • <span className="text-cyan-400">{contact.phone}</span>
                    </p>
                  </div>
                  <span className="text-xs text-white/40">Registered</span>
                </div>
              ))}
            </div>

            <div className="p-3.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-xs text-cyan-300">
              Mock interface mode: Add/Edit contacts functionality will persist to database in full backend phase.
            </div>

            <div className="flex items-center justify-between pt-2">
              <button
                onClick={() => alert('Mock Action: Add New Contact Modal')}
                className="px-4 py-2 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 font-bold text-xs border border-cyan-500/30 flex items-center gap-1.5 transition-colors"
              >
                <Plus className="w-4 h-4" />
                Add Contact
              </button>
              <button
                onClick={() => setShowManageModal(false)}
                className="px-5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
