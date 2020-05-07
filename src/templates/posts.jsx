import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import PostList from '../components/PostList';

const PostsTemplate = ({ data }) => {
  const {
    allMarkdownRemark: { nodes },
  } = data;
  return (
    <Layout>
      <PostList posts={nodes} />
    </Layout>
  );
};

export default PostsTemplate;

export const query = graphql`
  query Posts {
    allMarkdownRemark(
      sort: { order: ASC, fields: frontmatter___date_publish }
    ) {
      nodes {
        fields {
          slug
          date_time
        }
        id
        frontmatter {
          author
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
    }
  }
`;
