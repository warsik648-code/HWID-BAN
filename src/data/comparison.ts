export const comparisonRows = [
  {
    label: 'What is restricted',
    account: 'That login or player profile',
    ip: 'The network address used to connect',
    hwid: 'A fingerprint of the computer',
  },
  {
    label: 'New account, same PC',
    account: 'Usually allowed',
    ip: 'Usually unaffected',
    hwid: 'Often still blocked',
  },
  {
    label: 'Same account, new PC',
    account: 'Still banned',
    ip: 'Depends on the network',
    hwid: 'Often allowed if the ban was hardware-only',
  },
  {
    label: 'Does a VPN help?',
    account: 'No',
    ip: 'Sometimes, until that address is flagged too',
    hwid: 'No',
  },
  {
    label: 'What a spoofer changes',
    account: 'Nothing about the account',
    ip: 'Nothing about the IP address',
    hwid: 'The hardware identifiers the game sees',
  },
] as const;
