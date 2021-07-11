import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { memo } from "react";
import type { Slide } from "~/libraries/slides";
import { fetchSlideList } from "~/libraries/slides";

/**
 * Props
 */
type Props = {
  slideList: Slide[];
};

/**
 * HomePage Component
 */
const HomePage: React.VFC<Props> = memo<Props>(({ slideList }): JSX.Element => {
  return (
    <div>
      <Head>
        <title>Slides</title>
        <meta name="description" content="Slides" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ul>
          {slideList.map<JSX.Element>((slide: Slide): JSX.Element => {
            return (
              <li key={slide.id}>
                <Link href={`slides/${slide.id}`}>
                  <a>{slide.title}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
});

HomePage.displayName = "HomePage";

export const getStaticProps: GetStaticProps<Props> = async (_context): Promise<{ props: Props }> => {
  const slideList = await fetchSlideList();

  return {
    props: {
      slideList,
    },
  };
};

export default HomePage;
