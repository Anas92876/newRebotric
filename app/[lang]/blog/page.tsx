import Link from 'next/link';
import { resolvePage } from '@/lib/page';
import { pageMeta } from '@/lib/meta';
import { Icon } from '@/lib/icons';
import { SITE } from '@/lib/config';
import { Arrow, Crumbs, PageHero } from '@/components/ui';

export async function generateMetadata({ params }: PageProps<'/[lang]/blog'>) {
  const { lang, c } = await resolvePage(params);
  return pageMeta(lang, 'blog', c.site.blogPage.seoTitle, c.home.blog.subtitle);
}

// The live blog has no posts yet — same "coming soon" message as robotrick.net
export default async function BlogPage({ params }: PageProps<'/[lang]/blog'>) {
  const { c, base } = await resolvePage(params);
  const b = c.home.blog, s = c.site;
  return (
    <>
      <PageHero crumbs={<Crumbs home={s.nav.home} homeHref={base} items={[{ label: s.nav.blog }]} />} badge={s.nav.blog} t={b.title} lead={b.subtitle} />
      <section className="section section--tight">
        <div className="container">
          <div className="soon">
            <span className="soon__icon"><Icon name="doc" /></span>
            <p>{b.comingSoon}</p>
            <div className="btn-row">
              <a className="btn btn--outline" href={SITE.instagram} target="_blank" rel="noopener"><Icon name="instagram" /> Instagram</a>
              <a className="btn btn--outline" href={SITE.facebook} target="_blank" rel="noopener"><Icon name="facebook" /> Facebook</a>
              <Link className="btn btn--primary" href={`${base}/gallery`}>{s.nav.gallery} <Arrow /></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
