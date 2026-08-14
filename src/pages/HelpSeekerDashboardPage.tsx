import React from 'react';
import { DashboardHeader } from '@/components/dashboard/DashboardHeader';
import { SosSection } from '@/components/dashboard/SosSection';
import { QuickActions } from '@/components/dashboard/QuickActions';
import { MedicalProfileCard } from '@/components/dashboard/MedicalProfileCard';
import { TrustedContactsCard } from '@/components/dashboard/TrustedContactsCard';
import { EmergencyHistoryCard } from '@/components/dashboard/EmergencyHistoryCard';
import { SafetyNotice } from '@/components/dashboard/SafetyNotice';
import {
  MOCK_USER_PROFILE,
  MOCK_MEDICAL_PROFILE,
  MOCK_TRUSTED_CONTACTS,
  MOCK_EMERGENCY_HISTORY,
} from '@/data/mockHelpSeekerData';

interface HelpSeekerDashboardPageProps {
  onNavigateHome?: () => void;
}

export const HelpSeekerDashboardPage: React.FC<HelpSeekerDashboardPageProps> = ({
  onNavigateHome,
}) => {
  return (
    <div className="min-h-screen bg-navy-950 text-white flex flex-col selection:bg-emergency-500/30 selection:text-white bg-radial-glow">
      {/* Top Sticky Header */}
      <DashboardHeader user={MOCK_USER_PROFILE} onNavigateHome={onNavigateHome} />

      {/* Main Content Area */}
      <main className="flex-grow container-max px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-8">
        {/* Section 1: Prominent SOS Emergency Card (Visual Focus) */}
        <SosSection />

        {/* Section 2: Quick Actions Utilities */}
        <QuickActions />

        {/* Section 3: Information Cards Grid (Multi-column desktop/tablet layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {/* Medical Profile */}
          <div className="h-full">
            <MedicalProfileCard medicalData={MOCK_MEDICAL_PROFILE} />
          </div>

          {/* Trusted Contacts */}
          <div className="h-full">
            <TrustedContactsCard contacts={MOCK_TRUSTED_CONTACTS} />
          </div>

          {/* Emergency History */}
          <div className="h-full md:col-span-2 lg:col-span-1">
            <EmergencyHistoryCard records={MOCK_EMERGENCY_HISTORY} />
          </div>
        </div>

        {/* Section 4: Subtle Safety Notice */}
        <SafetyNotice />
      </main>

      {/* Minimal Footer */}
      <footer className="border-t border-white/10 py-6 text-center text-xs text-white/40 bg-navy-950/90">
        <p>QuickAid Collective © 2026 • Help Seeker Portal Mock UI • All rights reserved</p>
      </footer>
    </div>
  );
};

export default HelpSeekerDashboardPage;
