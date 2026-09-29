import { site } from '../config/site';

export type Crumb = {
  name: string;
  path: string;
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type SeoInput = {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
  breadcrumbs?: Crumb[];
  faqs?: FaqItem[];
  article?: boolean;
  video?: {
    name: string;
    description: string;
    thumbnailPath: string;
    uploadDate: string;
    duration: string;
    contentPath: string;
  };
};

export function canonicalUrl(path: string): string {
  if (path === '/' || path === '') return `${site.url}/`;
  const withSlash = path.startsWith('/') ? path : `/${path}`;
  return `${site.url}${withSlash.replace(/\/+$/, '')}`;
}

export function pageTitle(title: string, path: string): string {
  if (path === '/') return title;
  return `${title} | ${site.name}`;
}

export function buildSeo(input: SeoInput) {
  const title = pageTitle(input.title, input.path);
  const canonical = canonicalUrl(input.path);
  const robots = input.noindex ? 'noindex, follow' : 'index, follow';
  const ogImage = `${site.url}/og.png`;
  const graph: Record<string, unknown>[] = [];
  const organization = {
    '@type': 'Organization',
    '@id': `${site.url}/#organization`,
    name: site.name,
    url: `${site.url}/`,
    email: site.email,
    logo: {
      '@type': 'ImageObject',
      url: `${site.url}/icon-512.png`,
    },
  };

  if (input.path === '/' || input.article) {
    graph.push(organization);
  }

  if (input.path === '/') {
    graph.push({
      '@type': 'WebSite',
      '@id': `${site.url}/#website`,
      name: site.name,
      url: `${site.url}/`,
      description: input.description,
      publisher: { '@id': `${site.url}/#organization` },
      inLanguage: 'en',
    });
  }

  if (input.breadcrumbs && input.breadcrumbs.length > 1) {
    graph.push({
      '@type': 'BreadcrumbList',
      itemListElement: input.breadcrumbs.map((crumb, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: crumb.name,
        item: canonicalUrl(crumb.path),
      })),
    });
  }

  if (input.article) {
    graph.push({
      '@type': 'Article',
      headline: input.title,
      description: input.description,
      datePublished: site.updatedIso,
      dateModified: site.updatedIso,
      mainEntityOfPage: canonical,
      author: { '@id': `${site.url}/#organization` },
      publisher: { '@id': `${site.url}/#organization` },
      image: ogImage,
      inLanguage: 'en',
    });
  }

  if (input.video) {
    graph.push({
      '@type': 'VideoObject',
      name: input.video.name,
      description: input.video.description,
      thumbnailUrl: `${site.url}${input.video.thumbnailPath}`,
      uploadDate: input.video.uploadDate,
      duration: input.video.duration,
      contentUrl: `${site.url}${input.video.contentPath}`,
      publisher: { '@id': `${site.url}/#organization` },
    });
  }

  if (input.faqs && input.faqs.length > 0) {
    graph.push({
      '@type': 'FAQPage',
      mainEntity: input.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    });
  }

  const jsonLd =
    graph.length > 0
      ? {
          '@context': 'https://schema.org',
          '@graph': graph,
        }
      : null;

  return {
    title,
    description: input.description,
    canonical,
    robots,
    ogType: input.article ? 'article' : 'website',
    ogImage,
    jsonLd: jsonLd ? JSON.stringify(jsonLd).replace(/</g, '\\u003c') : null,
  };
}
