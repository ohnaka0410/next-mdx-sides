import { client } from "./client";

export type Slide = {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};

export type SlideDetail = Slide & {
  mdx: string;
};

type SlideListResponse = {
  contents: Slide[];
  totalCount: number;
  offset: number;
  limit: number;
};

const endpoint = "slides";

export const fetchSlideList = async (): Promise<Slide[]> => {
  const { contents: slideList } = await client.get<SlideListResponse>({
    endpoint,
    queries: { fields: "id,createdAt,slug,title" },
  });
  return slideList;
};

export const fetchSlideDetail = async (id: string): Promise<SlideDetail> => {
  const slideDetail = await client.get<SlideDetail>({
    endpoint,
    contentId: id,
  });
  return slideDetail;
};
