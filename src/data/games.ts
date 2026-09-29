export type Game = {
  slug: string;
  name: string;
  description: string;
  summary: string;
  paragraphs: string[];
};

export const games: Game[] = [
  {
    slug: 'fortnite',
    name: 'Fortnite',
    description:
      'Fortnite HWID ban on PC? A new Epic account on the same computer can still be blocked. This page covers the Fortnite hardware ID spoofer and what it changes.',
    summary:
      'A Fortnite hardware ID ban follows the PC. A fresh Epic login on that same machine can still be refused at launch.',
    paragraphs: [
      'Fortnite players run into a hardware ID ban when the game stops the computer, not only one Epic login. The usual sign is a new account on the same PC getting the same block before a match starts.',
      'Epic’s PC anti-cheat reads identifiers from the machine and stores a hardware ID with the penalty. Changing the email, the display name, or the network does not present a different machine.',
      'The Fortnite spoofer is for that device ban. It presents a different hardware profile to the game so the stored HWID is no longer the one the PC reports.',
    ],
  },
  {
    slug: 'pubg',
    name: 'PUBG',
    description:
      'PUBG HWID ban on PC? This page explains the hardware ID ban Krafton players see on the same computer, and the spoofer built for that device block.',
    summary:
      'A PUBG hardware ban is the case where a new account on the same PC is still rejected by the game.',
    paragraphs: [
      'PUBG hardware bans show up when the install or the computer itself is refused. Players notice it after a new Krafton or Steam login hits the same stop on the same machine.',
      'PUBG’s anti-cheat has been updated many times. A hardware ID stored with an older season can still be the value the current client checks.',
      'The PUBG spoofer is aimed at that HWID record. It changes the identifiers the client reports, so the banned hardware profile is not the one sent at launch.',
    ],
  },
  {
    slug: 'apex-legends',
    name: 'Apex Legends',
    description:
      'Apex Legends HWID ban on PC? When a new account on the same computer is still blocked, that is a hardware ID ban. See the Apex spoofer coverage here.',
    summary:
      'An Apex hardware ID ban is the stricter PC block: a new account on the same computer is still stopped.',
    paragraphs: [
      'Apex Legends players describe an HWID ban when the game rejects the PC after the login has already been replaced. The queue never opens because the machine matches a stored hardware ID.',
      'Easy Anti-Cheat on Apex collects device identifiers at launch. Those values are what a hardware ban is matched against.',
      'The Apex spoofer is for that match. It supplies a different hardware profile for the identifiers the client reads from the PC.',
    ],
  },
  {
    slug: 'call-of-duty-warzone',
    name: 'Call of Duty: Warzone',
    description:
      'Warzone HWID ban on PC? Ricochet hardware bans follow the computer. This page covers the Warzone hardware ID spoofer and the identifiers it changes.',
    summary:
      'A Warzone hardware ban is the PC block that still stops a new Activision account on the same computer.',
    paragraphs: [
      'Warzone on PC is widely associated with hardware ID bans through Ricochet. The ban follows the machine, so a second Activision login on that PC can be refused the same way.',
      'Ricochet’s checks are not public and they move with each season. What players can see is the result: the computer is the thing being turned away.',
      'The Warzone spoofer is built for that hardware ID case. It presents different device identifiers than the ones stored with the ban.',
    ],
  },
  {
    slug: 'call-of-duty-mw2',
    name: 'Call of Duty: MW2',
    description:
      'MW2 HWID ban on PC? Modern Warfare II shares Call of Duty’s hardware enforcement. This page covers the MW2 hardware ID spoofer.',
    summary:
      'An MW2 hardware ID ban is enforced on the PC, and it can show up anywhere that same Call of Duty stack is installed.',
    paragraphs: [
      'Modern Warfare II uses the same PC anti-cheat path as current Call of Duty. A hardware ban stored against that PC can block MW2 even after the login changes.',
      'Players use a second account on the same computer as the practical test. If that account is refused as well, the penalty is sitting on the hardware ID.',
      'The MW2 spoofer changes the hardware profile the game reads, so the banned HWID is not what the client reports.',
    ],
  },
  {
    slug: 'call-of-duty-mw3',
    name: 'Call of Duty: MW3',
    description:
      'MW3 HWID ban on PC? Modern Warfare III hardware bans follow the computer. This page covers the MW3 hardware ID spoofer.',
    summary:
      'An MW3 hardware ban follows the PC. A new Activision account on that machine can still be turned away.',
    paragraphs: [
      'Modern Warfare III sits on the current Call of Duty account and anti-cheat stack. Seasonal updates have changed how the client behaves, but a hardware ID ban is still the ban that survives a new login.',
      'The message that matters is the one that refuses the computer. That is the case the spoofer is for.',
      'The MW3 spoofer presents a different hardware ID to the game so the stored device record no longer matches the PC.',
    ],
  },
  {
    slug: 'call-of-duty-black-ops-6',
    name: 'Call of Duty: Black Ops 6',
    description:
      'Black Ops 6 HWID ban on PC? Hardware bans on the current Call of Duty stack follow the computer. See the Black Ops 6 spoofer coverage.',
    summary:
      'A Black Ops 6 hardware ID ban is the PC restriction that remains after the Activision login is replaced.',
    paragraphs: [
      'Black Ops 6 is enforced through the current Call of Duty PC stack. Players describe the hardware ban the same way they do for Warzone: the machine is blocked, not only one profile.',
      'A new account on the same PC is the clearest sign. If that account is refused at launch, the stored value is a hardware ID.',
      'The Black Ops 6 spoofer is for that device record. It changes the identifiers the client reports from the computer.',
    ],
  },
  {
    slug: 'escape-from-tarkov',
    name: 'Escape from Tarkov',
    description:
      'Escape from Tarkov HWID ban? BattlEye hardware bans in Tarkov follow the PC. This page covers the Tarkov hardware ID spoofer.',
    summary:
      'A Tarkov hardware ban is a BattlEye device block. A new account on the same PC can still be refused.',
    paragraphs: [
      'Escape from Tarkov is one of the games where hardware ID bans are commonly reported. BattlEye can tie the penalty to the computer, so replacing the game account does not present a new machine.',
      'The launcher can stop you before a raid loads. That early refusal, repeated on a fresh login, is the hardware-ban pattern.',
      'The Tarkov spoofer is aimed at that HWID. It supplies a different hardware profile for the identifiers BattlEye-style checks read from the PC.',
    ],
  },
  {
    slug: 'valorant',
    name: 'Valorant',
    description:
      'Valorant HWID ban on PC? Vanguard hardware bans follow the computer. This page covers the Valorant hardware ID spoofer.',
    summary:
      'A Valorant hardware ID ban is enforced on the PC. A new Riot account on that machine can still be blocked.',
    paragraphs: [
      'Valorant runs Vanguard, a kernel anti-cheat that is closely associated with hardware bans. When the ban is on the HWID, a second Riot account on the same computer is stopped as well.',
      'Vanguard starts with Windows and reads device identifiers before the match client finishes loading. That is why a new login alone does not clear a device ban.',
      'The Valorant spoofer is for that hardware profile. It changes the identifiers the system presents, including across a reboot.',
    ],
  },
  {
    slug: 'rainbow-six-siege',
    name: 'Rainbow Six Siege',
    description:
      'Rainbow Six Siege HWID ban on PC? BattlEye hardware bans follow the computer. This page covers the Siege hardware ID spoofer.',
    summary:
      'A Siege hardware ban is the BattlEye device block that still stops a new account on the same PC.',
    paragraphs: [
      'Rainbow Six Siege uses BattlEye, and hardware bans are a known part of that enforcement. The PC is refused even when the Ubisoft login is new.',
      'The useful observation is the second account. If it cannot start a match on the same computer, the stored penalty is a hardware ID.',
      'The Siege spoofer presents a different hardware profile so the banned HWID is not the one the client reports.',
    ],
  },
  {
    slug: 'counter-strike-2',
    name: 'Counter-Strike 2',
    description:
      'Counter-Strike 2 HWID ban on PC? This page covers hardware ID bans that follow the computer in CS2, and the spoofer used for that device block.',
    summary:
      'A CS2 hardware ID ban is the PC block that remains when a new Steam account on the same computer is still refused.',
    paragraphs: [
      'Counter-Strike 2 players looking for an HWID spoofer are dealing with a ban that follows the machine. The sign is a new Steam account on that PC hitting the same hardware block.',
      'The game reads device identifiers at launch. A hardware ban is matched against those values, so the computer is what the penalty is stored on.',
      'The CS2 spoofer changes that hardware profile. It is built for the device ban, the one that stays with the PC.',
    ],
  },
  {
    slug: 'overwatch-2',
    name: 'Overwatch 2',
    description:
      'Overwatch 2 HWID ban on PC? When a new account on the same computer is still blocked, that is a hardware ID ban. See the Overwatch 2 spoofer coverage.',
    summary:
      'An Overwatch 2 hardware ban follows the PC. A new Battle.net account on that machine can still be stopped.',
    paragraphs: [
      'Overwatch 2 hardware bans are the case where the computer is refused after the Battle.net login has been replaced. The client never reaches a normal queue because the HWID matches a stored ban.',
      'The anti-cheat collects device identifiers from the PC at launch. Those are the values a hardware ban is checked against.',
      'The Overwatch 2 spoofer presents a different hardware ID so the banned profile is not what the game sees.',
    ],
  },
  {
    slug: 'rust',
    name: 'Rust',
    description:
      'Rust HWID ban on PC? Easy Anti-Cheat hardware bans in Rust follow the computer. This page covers the Rust hardware ID spoofer.',
    summary:
      'A Rust hardware ID ban is the EAC device block that follows the PC from server to server.',
    paragraphs: [
      'Rust uses Easy Anti-Cheat, and hardware bans are reported when the computer itself is refused rather than one server’s player list. A new Steam account on the same PC hits the same stop.',
      'That pattern is the HWID case. The identifiers EAC reads from the machine are what the ban is stored against.',
      'The Rust spoofer changes those hardware identifiers so the client reports a different device profile.',
    ],
  },
  {
    slug: 'ark-survival-evolved',
    name: 'ARK: Survival Evolved',
    description:
      'ARK HWID ban on PC? Hardware bans that follow the computer in ARK are covered here, including the identifiers the spoofer changes.',
    summary:
      'An ARK hardware ban follows the PC. A new account on the same computer can still be blocked by the anti-cheat.',
    paragraphs: [
      'ARK: Survival Evolved players run into a hardware ID ban when the anti-cheat refuses the computer, not only one login. The same PC gets stopped again after the account is replaced.',
      'The client reads disk, board, and other device identifiers at launch. A hardware ban is a match against that set.',
      'The ARK spoofer is for that match. It presents a different hardware profile to the game.',
    ],
  },
  {
    slug: 'dayz',
    name: 'DayZ',
    description:
      'DayZ HWID ban on PC? BattlEye hardware bans in DayZ follow the computer. This page covers the DayZ hardware ID spoofer.',
    summary:
      'A DayZ hardware ban is the BattlEye device block that follows the PC, including onto a new account.',
    paragraphs: [
      'DayZ uses BattlEye. A hardware ID ban is the enforcement that refuses the computer itself, so a new account on that machine is stopped as well.',
      'Players see it when the game rejects the PC before a normal session starts, and the same rejection follows a fresh login.',
      'The DayZ spoofer changes the hardware identifiers BattlEye-style checks read, so the banned HWID is not the profile the PC reports.',
    ],
  },
  {
    slug: 'gta-online',
    name: 'GTA Online',
    description:
      'GTA Online HWID ban on PC? A hardware ban follows the computer into Online. This page covers the GTA Online hardware ID spoofer.',
    summary:
      'A GTA Online hardware ID ban follows the PC. A new Social Club account on that machine can still be refused in Online.',
    paragraphs: [
      'GTA Online hardware bans are what players report when the PC is turned away from Online sessions, including after the Social Club login is replaced.',
      'The Online client checks device identifiers on the computer. A hardware ban is stored against that profile, so a new login does not present a new machine.',
      'The GTA Online spoofer is for that HWID. It changes the hardware profile the PC reports when you connect to Online.',
    ],
  },
  {
    slug: 'gta-v',
    name: 'GTA V',
    description:
      'GTA V HWID ban on PC? Hardware bans that block the computer in GTA V are covered here, with the spoofer’s hardware, software, and advanced coverage.',
    summary:
      'A GTA V hardware ID ban follows the PC into online play. A new account on the same computer can still be refused.',
    paragraphs: [
      'GTA V players looking for an HWID spoofer are dealing with a ban on the computer used to join online sessions. The machine is refused, so swapping the Rockstar login does not clear it.',
      'The client reads hardware identifiers from the PC at connection time. Those values are what a hardware ban is matched against.',
      'The GTA V spoofer presents a different hardware profile, so the stored HWID is no longer the one reported by that computer.',
    ],
  },
  {
    slug: 'league-of-legends',
    name: 'League of Legends',
    description:
      'League of Legends HWID ban on PC? When the hardware ID follows the computer, a new account on that PC can still be blocked. See the League spoofer coverage.',
    summary:
      'A League of Legends hardware ID ban follows the PC. A new Riot account on the same computer can still be stopped.',
    paragraphs: [
      'League of Legends hardware bans are the device-level case: the computer is flagged, and a new Riot login on that machine is blocked as well. Riot’s client can share hardware checks with other Riot titles on the same PC.',
      'The sign is immediate refusal on a fresh account, before a normal match starts. That pattern points at the hardware ID.',
      'The League spoofer changes the hardware profile the PC presents, so the banned identifiers are not what the client reports.',
    ],
  },
  {
    slug: 'team-fortress-2',
    name: 'Team Fortress 2',
    description:
      'Team Fortress 2 HWID ban on PC? This page covers hardware ID bans that follow the computer in TF2, and the spoofer used for that device block.',
    summary:
      'A Team Fortress 2 hardware ID ban follows the PC. A new Steam account on that machine can still be refused.',
    paragraphs: [
      'Team Fortress 2 players use an HWID spoofer when the ban is on the computer. The practical sign is a new Steam account on the same PC hitting the same hardware block.',
      'The game reads device identifiers at launch. A hardware ban is a match against those values, so the penalty stays with the machine.',
      'The TF2 spoofer presents a different hardware profile so the stored HWID is not the one the client sends.',
    ],
  },
  {
    slug: 'dead-by-daylight',
    name: 'Dead by Daylight',
    description:
      'Dead by Daylight HWID ban on PC? Easy Anti-Cheat hardware bans follow the computer. This page covers the Dead by Daylight hardware ID spoofer.',
    summary:
      'A Dead by Daylight hardware ban is the EAC device block that still stops a new account on the same PC.',
    paragraphs: [
      'Dead by Daylight uses Easy Anti-Cheat. A hardware ID ban is the case where a new store account on the same computer cannot start a match either.',
      'The client collects device identifiers before the lobby finishes loading. Those identifiers are what the hardware ban is stored against.',
      'The Dead by Daylight spoofer changes that hardware profile so the banned HWID is not what the PC reports.',
    ],
  },
  {
    slug: 'destiny-2',
    name: 'Destiny 2',
    description:
      'Destiny 2 HWID ban on PC? Hardware bans that follow the computer on PC are covered here, including the Destiny 2 spoofer’s identifier coverage.',
    summary:
      'A Destiny 2 hardware ID ban on PC follows the computer. A new account on that machine can still be blocked.',
    paragraphs: [
      'Destiny 2 on PC can enforce a hardware ban that survives a new Bungie login. The computer is refused, which is the HWID case this spoofer is for.',
      'The PC client reads device identifiers at launch and checks them against stored bans. A matching hardware ID is what keeps the machine out.',
      'The Destiny 2 spoofer presents a different hardware profile from that PC, so the stored HWID no longer matches.',
    ],
  },
];
