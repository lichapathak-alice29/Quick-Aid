export interface UserProfile {
  name: string;
  avatarUrl?: string;
  id: string;
  phone: string;
  location: string;
  membershipStatus: string;
}

export interface MedicalProfile {
  bloodGroup: string;
  allergies: string[];
  medications: string[];
  medicalNotes: string;
  emergencyDoctor?: string;
}

export interface EmergencyContact {
  id: string;
  name: string;
  relationship: string;
  phone: string;
  isPrimary?: boolean;
}

export interface EmergencyRecord {
  id: string;
  title: string;
  date: string;
  time: string;
  status: 'Resolved' | 'Cancelled' | 'Active';
  location: string;
}

export const MOCK_USER_PROFILE: UserProfile = {
  name: 'Aarav Sharma',
  id: 'QA-8829-DEL',
  phone: '+91 98765 12345',
  location: 'Sector 62, Noida, Delhi NCR',
  membershipStatus: 'Active Member (Cooperative Tier 1)',
};

export const MOCK_MEDICAL_PROFILE: MedicalProfile = {
  bloodGroup: 'O+',
  allergies: ['Penicillin', 'Peanuts'],
  medications: ['Metformin 500mg (Daily)', 'Aspirin 75mg (As needed)'],
  medicalNotes: 'History of mild asthma. Prefers transport to Fortis Hospital or Max Healthcare.',
  emergencyDoctor: 'Dr. A. K. Gupta (+91 98765 43212)',
};

export const MOCK_TRUSTED_CONTACTS: EmergencyContact[] = [
  {
    id: 'c1',
    name: 'Priya Sharma',
    relationship: 'Spouse',
    phone: '+91 98765 43210',
    isPrimary: true,
  },
  {
    id: 'c2',
    name: 'Rahul Sharma',
    relationship: 'Brother',
    phone: '+91 98765 43211',
    isPrimary: false,
  },
  {
    id: 'c3',
    name: 'Dr. A. K. Gupta',
    relationship: 'Family Doctor',
    phone: '+91 98765 43212',
    isPrimary: false,
  },
];

export const MOCK_EMERGENCY_HISTORY: EmergencyRecord[] = [
  {
    id: 'rec-001',
    title: 'Severe Asthma Attack',
    date: '13 Aug 2026',
    time: '14:30 IST',
    status: 'Resolved',
    location: 'Sector 62, Noida',
  },
  {
    id: 'rec-002',
    title: 'Minor Road Accident',
    date: '02 Aug 2026',
    time: '09:15 IST',
    status: 'Resolved',
    location: 'Indirapuram, Ghaziabad',
  },
  {
    id: 'rec-003',
    title: 'Panic Alarm Test',
    date: '25 Jul 2026',
    time: '18:40 IST',
    status: 'Cancelled',
    location: 'Sector 62, Noida',
  },
];
