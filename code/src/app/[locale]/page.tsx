import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
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

  const metadata: Metadata = {
    alternates: {
      canonical: '/',
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

export default async function Page() {
  return (
    <>
      <div>
        {/* <Link href={`/${page.featuredBlogPost.slug}`}>
          <ArticleHero article={page.featuredBlogPost} />
        </Link> */}
      </div>

      {/* Tutorial: contentful-and-the-starter-template.md */}
      {/* Uncomment the line below to make the Greeting field available to render */}
      {/*<Container>*/}
      {/*  <div className="my-5 bg-colorTextLightest p-5 text-colorBlueLightest">{page.greeting}</div>*/}
      {/*</Container>*/}

      <div className="my-8  md:mb-10 lg:mb-16">
        <h2 className="mb-4 md:mb-6">Latest Articles</h2>
        <div className="flex flex-col gap-4 w-[300px] h-[300px] bg-gray-200">
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-bold">Hello</h3>
            <p className="text-sm text-gray-500">Hello</p>
          </div>
        </div>
        {/* <ArticleTileGrid className="md:grid-cols-2 lg:grid-cols-3" articles={posts} /> */}
      </div>
    </>
  );
}
