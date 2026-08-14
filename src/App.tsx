import { useState, useCallback } from 'react';
import Navbar from '@/components/Navbar';
import MembershipModal from '@/components/MembershipModal';
import Hero from '@/components/sections/Hero';
import EmergencyHelp from '@/components/sections/EmergencyHelp';
import HowItWorks from '@/components/sections/HowItWorks';
import Community from '@/components/sections/Community';
import Problem from '@/components/sections/Problem';
import Comparison from '@/components/sections/Comparison';
import Ownership from '@/components/sections/Ownership';
import Technology from '@/components/sections/Technology';
import Impact from '@/components/sections/Impact';
import Roadmap from '@/components/sections/Roadmap';
import About from '@/components/sections/About';
import FinalCTA from '@/components/sections/FinalCTA';
import Footer from '@/components/sections/Footer';
import { useReveal } from '@/hooks/useReveal';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = useCallback(() => setModalOpen(true), []);
  const closeModal = useCallback(() => setModalOpen(false), []);

  useReveal();

  return (
    <div className="min-h-screen bg-navy-950">
      <Navbar onGetHelp={openModal} />
      <main>
        <Hero onGetHelp={openModal} />
        <EmergencyHelp />
        <HowItWorks />
        <Community />
        <Problem />
        <Comparison />
        <Ownership />
        <Technology />
        <Impact />
        <Roadmap />
        <About />
        <FinalCTA onGetHelp={openModal} />
      </main>
      <Footer />
      <MembershipModal open={modalOpen} onClose={closeModal} />
    </div>
  );
}
