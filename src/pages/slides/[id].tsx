import type { GetStaticPaths, GetStaticProps } from "next";
import type { MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Head from "next/head";
import { memo } from "react";
import { MDX } from "~/components/modules/MDX";
import type { Slide, SlideDetail } from "~/libraries/slides";
import { fetchSlideDetail, fetchSlideList } from "~/libraries/slides";

/**
 * Props
 */
type Props = {
  slide: SlideDetail;
  source: MDXRemoteSerializeResult;
};

/**
 * SlidePage Component
 */
const SlidePage: React.VFC<Props> = memo<Props>(({ slide, source }): JSX.Element => {
  return (
    <div>
      <Head>
        <title>{slide.title} - Slides</title>
      </Head>
      <main>
        <MDX source={source} />
      </main>
    </div>
  );
});

SlidePage.displayName = "SlidePage";

export const getStaticPaths: GetStaticPaths = async () => {
  const slideList = await fetchSlideList();
  const paths = slideList.map<string>((slide: Slide): string => {
    return `/slides/${slide.id}`;
  });
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const slide = await fetchSlideDetail(context.params?.id as string);
  const source = await serialize(slide.mdx);
  return {
    props: {
      slide,
      source,
    },
  };
};

export default SlidePage;
