import React, { useState } from 'react';
import { HeartPulse, ExternalLink, X, FileText, AlertCircle } from 'lucide-react';
import { MedicalProfile } from '@/data/mockHelpSeekerData';

interface MedicalProfileCardProps {
  medicalData: MedicalProfile;
}

export const MedicalProfileCard: React.FC<MedicalProfileCardProps> = ({ medicalData }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="glass-card p-5 hover:border-white/20 transition-all flex flex-col justify-between h-full">
      <div>
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-rose-500/10 border border-rose-500/20 flex items-center justify-center">
              <HeartPulse className="w-4 h-4 text-rose-400" />
            </div>
            <h3 className="text-base font-bold text-white">Medical Profile</h3>
          </div>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-rose-500/10 text-rose-300 font-medium">
            Mock UI Data
          </span>
        </div>

        {/* Compact Key Stats Grid */}
        <div className="space-y-3">
          <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
            <span className="text-xs text-white/60">Blood Group</span>
            <span className="text-sm font-extrabold text-white px-2 py-0.5 rounded bg-rose-500/20 border border-rose-500/30">
              {medicalData.bloodGroup}
            </span>
          </div>

          <div className="space-y-1">
            <span className="text-xs text-white/50 font-medium">Allergies</span>
            <div className="flex flex-wrap gap-1.5">
              {medicalData.allergies.map((allergy) => (
                <span
                  key={allergy}
                  className="text-[11px] px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-300 border border-amber-500/20"
                >
                  {allergy}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-1">
            <span className="text-xs text-white/50 font-medium">Key Medications</span>
            <div className="text-xs text-white/80 space-y-0.5">
              {medicalData.medications.map((med) => (
                <p key={med} className="line-clamp-1">
                  • {med}
                </p>
              ))}
            </div>
          </div>

          <div className="space-y-1">
            <span className="text-xs text-white/50 font-medium">Medical Notes</span>
            <p className="text-xs text-white/70 italic line-clamp-2 bg-white/[0.02] p-2 rounded-lg border border-white/5">
              "{medicalData.medicalNotes}"
            </p>
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="pt-4 mt-2">
        <button
          onClick={() => setShowModal(true)}
          className="w-full py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold text-xs border border-white/10 transition-colors flex items-center justify-center gap-2"
        >
          <span>View Medical Profile</span>
          <ExternalLink className="w-3.5 h-3.5 text-white/60" />
        </button>
      </div>

      {/* Full Detail Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-md animate-fade-in">
          <div className="w-full max-w-lg rounded-3xl bg-navy-900 border border-white/15 p-6 sm:p-8 shadow-2xl space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-rose-500/15 border border-rose-500/30 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-rose-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Complete Medical Profile</h3>
                  <p className="text-xs text-white/50">Emergency Responder View (Mock Data)</p>
                </div>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="p-1.5 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-sm text-white/80">
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-xs text-white/50 block">Blood Type</span>
                  <span className="text-lg font-bold text-rose-400">{medicalData.bloodGroup}</span>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-xs text-white/50 block">Assigned Doctor</span>
                  <span className="text-xs font-bold text-white">{medicalData.emergencyDoctor}</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <span className="text-xs font-bold text-amber-300 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" /> Known Allergies
                </span>
                <p className="text-xs text-white/80">{medicalData.allergies.join(', ')}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <span className="text-xs font-bold text-cyan-300">Active Prescriptions</span>
                <ul className="text-xs text-white/80 list-disc list-inside space-y-0.5">
                  {medicalData.medications.map((m) => (
                    <li key={m}>{m}</li>
                  ))}
                </ul>
              </div>

              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <span className="text-xs font-bold text-white/60">Instructions & Notes</span>
                <p className="text-xs text-white/70 italic">{medicalData.medicalNotes}</p>
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setShowModal(false)}
                className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs transition-colors"
              >
                Close Profile
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
