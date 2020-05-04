import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Post from '../components/post';

const PostTemplate = ({
  data: { markdownRemark },
  pageContext: { basePath },
}) => (
  <Layout>
    <Post {...markdownRemark} basePath={basePath} />
  </Layout>
);

export default PostTemplate;

export const query = graphql`
  query($postID: String!) {
    markdownRemark(id: { eq: $postID }) {
      fields {
        slug
        date_time
      }
      frontmatter {
        author
        categories
        date_publish(formatString: "MMMM DD YYYY")
        image
        tags
        title
      }
      html
      excerpt
      wordCount {
        words
      }
    }
    sitePage {
      context {
        basePath
        postID
      }
    }
  }
`;
