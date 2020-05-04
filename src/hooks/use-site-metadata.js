import { graphql, useStaticQuery } from 'gatsby';
export default function useSiteMetadata() {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          siteUrl: url
          image
          titleTemplate
          social {
            github
            twitter
          }
        }
      }
    }
  `);
  return data.site.siteMetadata;
}
