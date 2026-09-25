import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/config';
import { LOCALES } from '@/lib/i18n-config';

const PATHS = ['', 'about', 'training', 'technical-projects', '3d-printing', 'technical-consultation', 'curriculum-design', 'stem-lab-setup', 'gallery', 'blog', 'join-us', 'contact', 'verify'];

// Every page in both languages, each with its en/ar alternates
export default function sitemap(): MetadataRoute.Sitemap {
  return PATHS.flatMap((p) => LOCALES.map((lang) => ({
    url: `${SITE.url}/${lang}${p ? `/${p}` : ''}`,
    changeFrequency: p === 'join-us' ? 'daily' as const : 'monthly' as const,
    priority: p === '' ? 1 : p === 'training' ? 0.9 : 0.7,
    alternates: { languages: Object.fromEntries(LOCALES.map((l) => [l, `${SITE.url}/${l}${p ? `/${p}` : ''}`])) },
  })));
}
