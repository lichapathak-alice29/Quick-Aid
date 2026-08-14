import React from 'react';
import { History, CheckCircle, XCircle, MapPin, Clock } from 'lucide-react';
import { EmergencyRecord } from '@/data/mockHelpSeekerData';

interface EmergencyHistoryCardProps {
  records: EmergencyRecord[];
}

export const EmergencyHistoryCard: React.FC<EmergencyHistoryCardProps> = ({ records }) => {
  return (
    <div className="glass-card p-5 hover:border-white/20 transition-all flex flex-col justify-between h-full">
      <div>
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
              <History className="w-4 h-4 text-emerald-400" />
            </div>
            <h3 className="text-base font-bold text-white">Emergency History</h3>
          </div>
          <span className="text-[10px] text-white/50">Recent Logs</span>
        </div>

        {/* History Item List */}
        <div className="space-y-3">
          {records.map((rec) => (
            <div
              key={rec.id}
              className="p-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 transition-colors space-y-1.5"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-white">{rec.title}</span>
                {rec.status === 'Resolved' ? (
                  <span className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium">
                    <CheckCircle className="w-3 h-3" />
                    Resolved
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-full bg-white/10 text-white/60 border border-white/10 font-medium">
                    <XCircle className="w-3 h-3 text-white/50" />
                    Cancelled
                  </span>
                )}
              </div>

              <div className="flex items-center justify-between text-[11px] text-white/50 pt-1">
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {rec.date} at {rec.time}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {rec.location}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-4 mt-2">
        <button
          onClick={() => alert('Mock Action: View All Historic Emergency Logs')}
          className="w-full py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-white/80 hover:text-white font-semibold text-xs border border-white/10 transition-colors text-center"
        >
          View Full History Log
        </button>
      </div>
    </div>
  );
};
