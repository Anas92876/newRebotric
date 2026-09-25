import { resolvePage } from '@/lib/page';
import { pageMeta } from '@/lib/meta';
import { SITE } from '@/lib/config';
import AuthShell from '@/components/AuthShell';
import { SignupForm } from '@/components/AuthForms';

export async function generateMetadata({ params }: PageProps<'/[lang]/signup'>) {
  const { lang, c } = await resolvePage(params);
  return { ...pageMeta(lang, 'signup', c.site.auth.seoSignupTitle, c.site.auth.seoDescription), robots: { index: false } };
}

// Create an account on the existing Robotrick system (POST /auth/register), then continue to sign in
export default async function SignupPage({ params }: PageProps<'/[lang]/signup'>) {
  const { lang, c } = await resolvePage(params);
  const { strength, ...text } = c.site.auth;
  return (
    <AuthShell lang={lang} c={c}>
      <SignupForm t={text} labels={strength} lang={lang} apiBase={SITE.apiBase} />
    </AuthShell>
  );
}
