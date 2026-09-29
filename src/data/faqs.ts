export type Faq = {
  id: string;
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    id: 'what-is-an-hwid-ban',
    question: 'What is an HWID ban?',
    answer:
      'An HWID ban, or hardware ID ban, is a penalty tied to the computer rather than only to a username. The game or its anti-cheat builds a hardware ID from identifiers on the machine. If that ID is banned, a new account on the same PC can still be blocked.',
  },
  {
    id: 'vpn',
    question: 'Will a VPN remove a hardware ID ban?',
    answer:
      'No. A VPN changes the public IP address. A hardware ID ban is based on the machine, so a different IP does not change the identifiers the ban is using. If a VPN seems to help for a short time, you are more likely looking at an IP restriction than an HWID ban.',
  },
  {
    id: 'new-account',
    question: 'Will a new account fix an HWID ban?',
    answer:
      'Usually not. An HWID ban is enforced on the hardware ID, so a new login on the same PC is still blocked. That repeat block is the sign the penalty is tied to the computer.',
  },
  {
    id: 'what-is-a-spoofer',
    question: 'What is an HWID spoofer?',
    answer:
      'An HWID spoofer is software that presents different hardware identifiers than the ones stored with the ban. People use it when a hardware ID ban follows the computer.',
  },
  {
    id: 'undetected',
    question: 'What does undetected mean?',
    answer:
      'Undetected means the spoofer is not currently flagged by the anti-cheat on the games it is built for, so running it is not itself supposed to create a new ban. That is a current status, not a permanent promise. Anti-cheat updates can change what is detected. Read the product page for the games covered before you pay.',
  },
  {
    id: 'which-games',
    question: 'Which games is the spoofer for?',
    answer:
      'The spoofer is for hardware ID bans in Fortnite, PUBG, Apex Legends, Call of Duty: Warzone, MW2, MW3, Black Ops 6, Escape from Tarkov, Valorant, Rainbow Six Siege, Counter-Strike 2, Overwatch 2, Rust, ARK: Survival Evolved, DayZ, GTA Online, GTA V, League of Legends, Team Fortress 2, Dead by Daylight, and Destiny 2. Each game has its own page under Games.',
  },
  {
    id: 'allowed',
    question: 'Is using an HWID spoofer allowed?',
    answer:
      'Most games forbid attempts to evade a ban in their terms of service. Breaking those terms can lead to further penalties from the publisher. Whether that raises a legal issue depends on where you live and what the software does. This site does not give legal advice.',
  },
  {
    id: 'where-to-buy',
    question: 'Where do I buy the spoofer?',
    answer:
      'Use Buy Now in the header, or Get HWID Spoofer at the bottom of the guides. That button opens the product checkout. If the checkout link has not been connected yet, the same button opens the contact page instead.',
  },
];
