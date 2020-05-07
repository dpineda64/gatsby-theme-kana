import React from 'react';
import { Helmet } from 'react-helmet';
import useSiteMetadata from '../../hooks/useSiteMetadata';

const Seo = ({ postData, pathname }) => {
  const postMeta = postData.frontmatter || {};
  const meta = useSiteMetadata();
  const baseImageUrl = postMeta.internal_image ? `${meta.siteUrl}/` : '';

  const seo = {
    title: postMeta.title || meta.title,
    desc: postMeta.excerpt || postMeta.description || meta.description,
    image: postMeta.image
      ? `${baseImageUrl}${postMeta.image}`
      : `${meta.image}`,
    url: `${meta.siteUrl}${pathname || postMeta.url || '/'}`,
  };

  return (
    <>
      <Helmet title={seo.title} titleTemplate={meta.titleTemplate}>
        <meta name="image=" content={seo.image} />
        <meta name="description" content={seo.desc} />
        <link rel="canonical" href={seo.url} />

        {/* open graph */}
        <meta property="og:url" content={seo.url} />
        {postMeta.title && <meta property="og:type" content="article" />}
        <meta property="og:title" content={seo.title} />
        <meta property="og:image" content={seo.image} />
        <meta property="og:description" content={seo.desc} />

        {/* twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        {meta.social.twitter && (
          <meta name="twitter:creator" content={meta.social.twitter} />
        )}
        <meta name="twitter:title" content={seo.title} />
        <meta property="twitter:image" content={seo.image} />
        <meta property="twitter:description" content={seo.desc} />
      </Helmet>
    </>
  );
};

Seo.defaultProps = {
  postData: {},
};

export default Seo;
