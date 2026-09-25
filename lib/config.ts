// Business details and service endpoints. Values can be overridden with environment variables (see .env.example).
export const SITE = {
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.robotrick.net',
  // The backend robotrick.net uses today. Paths below are relative to it (it already ends in /api).
  apiBase: (process.env.NEXT_PUBLIC_API_BASE ?? 'https://robotrick-backend-production.up.railway.app/api').replace(/\/$/, ''),
  // Where the existing dashboard app lives ('' = same domain). After sign-in, students go to /student, staff to /dashboard.
  dashboardUrl: (process.env.NEXT_PUBLIC_DASHBOARD_URL ?? '').replace(/\/$/, ''),
  gaId: process.env.NEXT_PUBLIC_GA_ID ?? '', // current GA4 property: G-JZZ5RPMDBG — set once the owner confirms reuse
  phoneDisplay: '+963 942 060 440',
  phoneTel: '+963942060440',
  whatsapp: '963942060440',
  email: 'robotrick.co@gmail.com',
  maps: 'https://maps.app.goo.gl/hiXH455azQDmafsp8',
  mapEmbed: 'https://maps.google.com/maps?q=36.2137733,37.151768&z=16&output=embed',
  facebook: 'https://www.facebook.com/profile.php?id=61561504957102',
  instagram: 'https://www.instagram.com/robo_trick01/',
  linkedin: 'https://www.linkedin.com/company/robotrick-co/',
  founded: 2022,
} as const;

export const wa = (text?: string) => `https://wa.me/${SITE.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}`;
