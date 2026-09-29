export const coverageGroups = [
  {
    title: 'Hardware',
    items: [
      'Motherboard Serial & SMBIOS Data',
      'CPU Information & CPUID',
      'Hard Disk & Volume Serials',
      'GPU & Display Adapter IDs',
      'Monitor EDID Information',
      'Network & MAC Addresses',
    ],
  },
  {
    title: 'Software',
    items: [
      'System Registry Protection',
      'Windows Registry Trace Cleaning',
      'Anti-Anti-Cheat Technology',
      'Event Log Cleaning',
      'Prefetch & Diagnostic Removal',
      'Game-specific Registry Cleaning',
    ],
  },
  {
    title: 'Advanced',
    items: [
      'TPM & Secure Boot Compat.',
      'Reboot Persistence',
      'Rollback Protection',
      'Digital Signature Spoofing',
      'Windows Update Protection',
      'Hardware Tracking Prevention',
    ],
  },
] as const;

export const coverageFaqs = [
  {
    id: 'what-is-hwid-spoofing',
    question: 'What is HWID spoofing?',
    answer:
      'HWID spoofing changes your system’s unique hardware identifiers to prevent tracking and bans in games. It creates a virtual hardware profile that masks your real hardware from anti-cheat systems.',
  },
  {
    id: 'is-it-detectable',
    question: 'Is HWID spoofing detectable?',
    answer:
      'Our advanced spoofing technology is undetectable by all major anti-cheat systems. We use kernel-level techniques that modify hardware IDs at the deepest level of Windows. Undetected for over 3 years.',
  },
  {
    id: 'is-it-reversible',
    question: 'Is it reversible?',
    answer:
      'Yes. With Safe Mode enabled, we create backup points before making changes. You can restore your original hardware identifiers at any time.',
  },
  {
    id: 'reboot',
    question: 'Do I need to spoof after every reboot?',
    answer:
      'No. Our spoofer includes reboot persistence that maintains your spoofed identity even after restarts and Windows updates.',
  },
  {
    id: 'performance',
    question: 'Will this affect performance?',
    answer:
      'No. Once complete, there is zero ongoing performance impact. All games and applications run at full speed.',
  },
  {
    id: 'safe',
    question: 'Is it safe to use?',
    answer:
      'Yes. With Safe Mode, we backup before any changes. Our technology has been tested on thousands of systems without any reported issues.',
  },
] as const;
