import type { Metadata } from 'next';
import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';

import { ArticleTileGrid } from '@src/components/features/article';
import { Container } from '@src/components/shared/container';
import TranslationsProvider from '@src/components/shared/i18n/TranslationProvider';
import initTranslations from '@src/i18n';
import { defaultLocale, locales } from '@src/i18n/config';

interface LandingPageProps {
  params: {
    locale: string;
  };
}

export async function generateMetadata({ params }: LandingPageProps): Promise<Metadata> {
  const { isEnabled: preview } = await draftMode();
  // const gqlClient = preview ? previewClient : client;
  const landingPageData = {
    pageLandingCollection: {
      items: [
        {
          seoFields: {
            pageTitle: 'Test',
            pageDescription: 'Test',
            nofollow: false,
            noindex: false,
          },
        },
      ],
    },
  };
  const page = landingPageData.pageLandingCollection?.items[0];

  const languages = Object.fromEntries(
    locales.map(locale => [locale, locale === defaultLocale ? '/' : `/${locale}`]),
  );
  const metadata: Metadata = {
    alternates: {
      canonical: '/',
      languages: languages,
    },
  };
  if (page?.seoFields) {
    metadata.title = page.seoFields.pageTitle;
    metadata.description = page.seoFields.pageDescription;
    metadata.robots = {
      follow: !page.seoFields.nofollow,
      index: !page.seoFields.noindex,
    };
  }

  return metadata;
}

export default async function Page({ params }: LandingPageProps) {
  const { locale } = await params;
  const { isEnabled: preview } = await draftMode();
  const { t, resources } = await initTranslations({ locale });
  // const gqlClient = preview ? previewClient : client;

  console.log('locale', locale);
  console.log('preview', preview);
  // const blogPageData = await gqlClient.blogPage({ locale, preview });
  // const page = blogPageData.blogPageCollection?.items[0];

  // if (!page) {
  //   notFound();
  // }

  // const blogPostsData = blogPageData.blogPageCollection?.items;
  // const posts = blogPostsData;

  // if (!posts) {
  //   return;
  // }

  return (
    <TranslationsProvider locale={locale} resources={resources}>
      <Container>
        {/* <Link href={`/${page.featuredBlogPost.slug}`}>
          <ArticleHero article={page.featuredBlogPost} />
        </Link> */}
      </Container>

      {/* Tutorial: contentful-and-the-starter-template.md */}
      {/* Uncomment the line below to make the Greeting field available to render */}
      {/*<Container>*/}
      {/*  <div className="my-5 bg-colorTextLightest p-5 text-colorBlueLightest">{page.greeting}</div>*/}
      {/*</Container>*/}

      <Container className="my-8  md:mb-10 lg:mb-16">
        <h2 className="mb-4 md:mb-6">{t('landingPage.latestArticles')}</h2>
        <p>Hello</p>
        {/* <ArticleTileGrid className="md:grid-cols-2 lg:grid-cols-3" articles={posts} /> */}
      </Container>
    </TranslationsProvider>
  );
}
