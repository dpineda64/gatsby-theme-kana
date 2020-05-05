import { useStaticQuery, graphql } from 'gatsby';

export default function useSiteNav() {
  const data = useStaticQuery(graphql`
    {
      site {
        fields {
          basePath
          siteNav {
            path
            text
          }
        }
      }
    }
  `);

  return data.site.fields;
}
