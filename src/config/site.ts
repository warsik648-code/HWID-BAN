export const site = {
  name: 'HWIDBAN.ORG',
  url: 'https://hwidban.org',
  email: 'contact@hwidban.org',
  locale: 'en_US',
  updatedIso: '2026-09-29',
  updatedLabel: 'September 29, 2026',
} as const;

export const nav = [
  { href: '/guides', label: 'Guides' },
  { href: '/games', label: 'Games' },
  { href: '/cheats', label: 'Cheats' },
  { href: '/ugc', label: 'UGC' },
  { href: '/faq', label: 'FAQ' },
  { href: '/about', label: 'About' },
] as const;

export const footerExplore = [
  { href: '/guides', label: 'Guides' },
  { href: '/guides/what-is-an-hwid-ban', label: 'HWID bans' },
  { href: '/guides/how-hwid-bans-work', label: 'How bans work' },
  { href: '/games', label: 'Games' },
  { href: '/ugc', label: 'UGC' },
  { href: '/faq', label: 'FAQ' },
  { href: '/about', label: 'About' },
] as const;

function httpsLink(raw: string | undefined): { href: string; external: boolean } {
  const value = (raw ?? '').trim();
  if (/^https:\/\/\S+$/i.test(value)) {
    return { href: value, external: true };
  }
  return { href: '/contact', external: false };
}

const HWID_PRODUCT_URL = 'https://zadeyo.com/go/ARIS?to=%2Fproducts%2Fhwid-spoofer';

export function getProductLink(): { href: string; external: boolean } {
  const configured = httpsLink(import.meta.env.PUBLIC_PRODUCT_URL);
  if (configured.external) return configured;
  return { href: HWID_PRODUCT_URL, external: true };
}

export function getUgcLink(): { href: string; external: boolean } {
  return httpsLink(import.meta.env.PUBLIC_UGC_URL);
}
