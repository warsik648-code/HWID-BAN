export type Cheat = {
  slug: string;
  name: string;
  image: string;
  imageAlt: string;
  description: string;
  features: string[];
  affiliateUrl: string;
};

export const cheats: Cheat[] = [
  {
    slug: 'valorant',
    name: 'Valorant',
    image: '/cheats/valorant.jpg',
    imageAlt: 'Valorant promotional art with Phoenix and Jett',
    description: 'Valorant cheats for PC.',
    features: ['ESP', 'Aim'],
    affiliateUrl: 'https://zadeyo.com/go/ARIS?to=%2Fproducts%2Fvalorant',
  },
  {
    slug: 'fortnite',
    name: 'Fortnite',
    image: '/cheats/fortnite.jpg',
    imageAlt: 'Fortnite key art with a lineup of armed characters',
    description: 'Fortnite cheats for PC.',
    features: ['ESP', 'Aim'],
    affiliateUrl: 'https://zadeyo.com/go/ARIS?to=%2Fproducts%2Ffortnite',
  },
  {
    slug: 'rust',
    name: 'Rust',
    image: '/cheats/rust.jpg',
    imageAlt: 'Rust key art with the game logo over a satellite dish',
    description: 'Rust cheats for PC.',
    features: ['ESP', 'Aim'],
    affiliateUrl: 'https://zadeyo.com/go/ARIS?to=%2Fproducts%2Frust',
  },
  {
    slug: 'arc-raiders',
    name: 'ARC Raiders',
    image: '/cheats/arc-raiders.jpg',
    imageAlt: 'ARC Raiders logo on a dark background',
    description: 'ARC Raiders cheats for PC.',
    features: ['ESP', 'Aim'],
    affiliateUrl: 'https://zadeyo.com/go/ARIS?to=%2Fproducts%2Farc-raiders',
  },
  {
    slug: 'warzone',
    name: 'Warzone',
    image: '/cheats/warzone.jpg',
    imageAlt: 'Call of Duty: Warzone key art with operators in front of a helicopter',
    description: 'Warzone cheats for PC.',
    features: ['ESP', 'Aim'],
    affiliateUrl: 'https://zadeyo.com/go/ARIS?to=%2Fproducts%2Fwarzone',
  },
  {
    slug: 'wardogs',
    name: 'Wardogs',
    image: '/cheats/wardogs.jpg',
    imageAlt: 'WARDOGS key art with soldiers and a helicopter',
    description: 'Wardogs cheats for PC.',
    features: ['ESP', 'Aim'],
    affiliateUrl: 'https://zadeyo.com/go/ARIS?to=%2Fproducts%2Fwardogs',
  },
  {
    slug: 'the-isle',
    name: 'The Isle',
    image: '/cheats/the-isle.jpg',
    imageAlt: 'The Isle key art with a dinosaur inside a tunnel',
    description: 'The Isle cheats for PC.',
    features: ['ESP'],
    affiliateUrl: 'https://zadeyo.com/go/ARIS?to=%2Fproducts%2Fthe-isle-novaxware',
  },
];

export function cheatHref(url: string): string | null {
  const value = url.trim();
  if (/^https:\/\/\S+$/i.test(value)) return value;
  return null;
}
