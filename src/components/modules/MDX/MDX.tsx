import type { MDXRemoteSerializeResult } from "next-mdx-remote";
import { MDXRemote } from "next-mdx-remote";
import { memo } from "react";

/**
 * Props
 */
export type Props = {
  source: MDXRemoteSerializeResult;
};

const components = {};

/**
 * MDX Component
 */
export const MDX: React.VFC<Props> = memo<Props>(({ source }): JSX.Element => {
  return <MDXRemote {...source} components={components} />;
});

MDX.displayName = "MDX";
