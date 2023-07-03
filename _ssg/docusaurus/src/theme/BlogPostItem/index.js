import React from 'react';
import { useBlogPost } from '@docusaurus/theme-common/internal'
import BlogPostItem from '@theme-original/BlogPostItem';
import Giscus from "@giscus/react";
import { useColorMode } from '@docusaurus/theme-common';
import useIsBrowser from '@docusaurus/useIsBrowser';

const websiteConfig = require('@site/website_config.json');

export default function BlogPostItemWrapper(props) {
  const { metadata, isBlogPostPage } = useBlogPost()
  const isBrowser = useIsBrowser();

  const { frontMatter, slug, title } = metadata
  const { enableComments } = frontMatter

  const { colorMode } = useColorMode();

  return (
    <>
      <BlogPostItem {...props} />
      {(enableComments && isBlogPostPage) && (
        <Giscus
          repo={`${websiteConfig.GITHUB_USER}/${websiteConfig.GITHUB_REPOSITORY}`}
          repoId="R_kgDOJotYAg"
          category="General"
          categoryId="DIC_kwDOJotYAs4CXD_G"  // E.g. id of "General"
          mapping="url"                        // Important! To map comments to URL
          term="Welcome to @giscus/react component!"
          strict="0"
          reactionsEnabled="1"
          emitMetadata="1"
          inputPosition="top"
          theme={colorMode}
          lang="en"
          loading="lazy"
        />
      )}
    </>
  );
}