const fs = require('fs');
const utils = require('util');

const basePost = `---
title: Example Posts
author: '@dpineda'
date_publish: 2020-03-22
image: https://images.unsplash.com/photo-1588433423032-e2f28b485726?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80
tags:
  - docker
---

# hello
`;

exports.onPreBootstrap = ({ reporter }, options) => {
  const contentPath = options.contentPath || 'data';
  if (!fs.existsSync(contentPath)) {
    reporter.info(`creating the ${contentPath} directory`);
    fs.mkdirSync(contentPath);
  }
  const files = fs.readdirSync(contentPath);
  const mdFiles = /([a-zA-Z0-9\s_\\.\-\(\):])+(.md|.mdx|.markdown)$/i;
  if (files.length === 0 || !files.some((f) => mdFiles.test(f))) {
    fs.writeFileSync(`${contentPath}/example.md`, Buffer.from(basePost));
  }
};

exports.onCreateNode = ({ node, actions, getNode, reporter }, options) => {
  const basePath = options.basePath || '/';
  if (node.internal.type === 'MarkdownRemark') {
    const slugify = (str) => {
      const slug = str
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-\$)+/g, '');
      return `/${basePath}/${slug}`.replace(/\/\/+/g, '/');
    };

    actions.createNodeField({
      name: 'slug',
      node,
      value: slugify(node.frontmatter.title),
    });
    actions.createNodeField({
      name: 'date_time',
      node,
      value: node.frontmatter.date_publish,
    });
  }

  if (node.internal.type === 'Site') {
    reporter.info('Site Navigation field created');
    actions.createNodeField({
      name: 'siteNav',
      node,
      value: options.nav || [],
    });
    actions.createNodeField({
      name: 'basePath',
      node,
      value: basePath,
    });
  }
};

exports.createPages = async ({ actions, graphql, reporter }, options) => {
  const basePath = options.basePath || '/';

  actions.createPage({
    path: basePath,
    component: require.resolve('./src/templates/posts.jsx'),
  });

  const result = await graphql(`
    query blogPosts {
      allMarkdownRemark(
        sort: { order: ASC, fields: frontmatter___date_publish }
      ) {
        nodes {
          fields {
            slug
          }
          id
          frontmatter {
            author
            date_publish(formatString: "MMMM DD YYYY")
            image
            tags
            title
          }
          excerpt
          html
          wordCount {
            words
          }
        }
      }
    }
  `);
  if (result.errors) {
    reporter.panic('error loading posts', result.errors);
    return;
  }

  const posts = result.data.allMarkdownRemark.nodes;
  posts.forEach((post) => {
    const { slug } = post.fields;
    actions.createPage({
      path: slug,
      component: require.resolve('./src/templates/post.jsx'),
      context: {
        basePath,
        postID: post.id,
      },
    });
  });
};
