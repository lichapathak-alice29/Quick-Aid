import { useState, FormEvent } from 'react';
import { X, Loader2, CheckCircle2, Siren, User, MapPin, Phone, Stethoscope, MessageSquare } from 'lucide-react';
import { supabase } from '@/lib/supabase';

interface MembershipModalProps {
  open: boolean;
  onClose: () => void;
}

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function MembershipModal({ open, onClose }: MembershipModalProps) {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [form, setForm] = useState({
    name: '',
    role: '',
    city: '',
    contact: '',
    serviceType: '',
    message: '',
  });

  if (!open) return null;

  const update = (key: keyof typeof form, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    const { error } = await supabase.from('membership_interests').insert({
      name: form.name.trim(),
      role: form.role.trim(),
      city: form.city.trim(),
      contact: form.contact.trim(),
      service_type: form.serviceType.trim(),
      message: form.message.trim() || null,
    });

    if (error) {
      setStatus('error');
      setErrorMsg('Something went wrong. Please try again.');
      return;
    }

    setStatus('success');
    setForm({ name: '', role: '', city: '', contact: '', serviceType: '', message: '' });
  };

  const handleClose = () => {
    setStatus('idle');
    setErrorMsg('');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 animate-fade-in"
      onClick={handleClose}
    >
      <div className="absolute inset-0 bg-navy-950/80 backdrop-blur-sm" />

      <div
        className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto glass-card p-6 sm:p-8 shadow-2xl animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {status === 'success' ? (
          <div className="flex flex-col items-center text-center py-8">
            <div className="w-16 h-16 rounded-full bg-emerald-500/15 flex items-center justify-center mb-5">
              <CheckCircle2 className="w-8 h-8 text-emerald-400" />
            </div>
            <h3 className="font-display text-2xl font-bold mb-2">Request received</h3>
            <p className="text-white/60 max-w-sm mb-6">
              Your details have been recorded. In a real emergency, please call 112 or 108
              immediately. This is a prototype — no actual help has been dispatched.
            </p>
            <button
              onClick={handleClose}
              className="px-6 py-3 rounded-xl bg-white text-navy-950 font-semibold hover:bg-white/90 transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-8 h-8 rounded-lg bg-emergency-500/15 flex items-center justify-center">
                  <Siren className="w-4 h-4 text-emergency-500" />
                </div>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-emergency-500/15 text-emergency-500">
                  EMERGENCY HELP
                </span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold mb-2">
                Request Emergency Help
              </h3>
              <p className="text-white/50 text-sm">
                Share your details and QuickAid will help connect you with nearby assistance. This
                is a prototype form — for real emergencies always call 112 or 108.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Field icon={<User className="w-4 h-4" />} label="Name">
                <input
                  required
                  value={form.name}
                  onChange={(e) => update('name', e.target.value)}
                  className="w-full bg-transparent text-white placeholder-white/30 focus:outline-none"
                  placeholder="Your full name"
                />
              </Field>

              <Field icon={<Stethoscope className="w-4 h-4" />} label="Role / Situation">
                <input
                  required
                  value={form.role}
                  onChange={(e) => update('role', e.target.value)}
                  className="w-full bg-transparent text-white placeholder-white/30 focus:outline-none"
                  placeholder="e.g. Bystander, Need ambulance"
                />
              </Field>

              <div className="grid sm:grid-cols-2 gap-4">
                <Field icon={<MapPin className="w-4 h-4" />} label="City">
                  <input
                    required
                    value={form.city}
                    onChange={(e) => update('city', e.target.value)}
                    className="w-full bg-transparent text-white placeholder-white/30 focus:outline-none"
                    placeholder="Your city"
                  />
                </Field>
                <Field icon={<Phone className="w-4 h-4" />} label="Phone / Email">
                  <input
                    required
                    value={form.contact}
                    onChange={(e) => update('contact', e.target.value)}
                    className="w-full bg-transparent text-white placeholder-white/30 focus:outline-none"
                    placeholder="Phone or email"
                  />
                </Field>
              </div>

              <Field icon={<Siren className="w-4 h-4" />} label="Type of emergency">
                <input
                  required
                  value={form.serviceType}
                  onChange={(e) => update('serviceType', e.target.value)}
                  className="w-full bg-transparent text-white placeholder-white/30 focus:outline-none"
                  placeholder="e.g. Medical, Accident, Transport needed"
                />
              </Field>

              <Field icon={<MessageSquare className="w-4 h-4" />} label="Message (optional)">
                <textarea
                  value={form.message}
                  onChange={(e) => update('message', e.target.value)}
                  rows={2}
                  className="w-full bg-transparent text-white placeholder-white/30 focus:outline-none resize-none"
                  placeholder="Anything else you'd like to share"
                />
              </Field>

              {status === 'error' && (
                <p className="text-emergency-500 text-sm">{errorMsg}</p>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full py-3.5 rounded-xl bg-emergency-500 hover:bg-emergency-600 text-white font-semibold transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Connecting...
                  </>
                ) : (
                  'Request Help'
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

function Field({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="block text-xs font-medium text-white/50 mb-1.5">{label}</span>
      <div className="flex items-center gap-2.5 px-3.5 py-3 rounded-xl bg-white/[0.04] border border-white/10 focus-within:border-cyan-500/50 transition-colors">
        <span className="text-white/30">{icon}</span>
        {children}
      </div>
    </label>
  );
}
