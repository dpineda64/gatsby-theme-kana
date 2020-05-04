import React from 'react';
import { Link } from 'gatsby';
import Seo from './seo';

const Post = (post) => (
  <>
    <Seo postData={post} />
    <article className="article--full w-full">
      <Link to={post.basePath} className="fixed" aria-label="Go Back">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M5.828 7l2.536 2.536L6.95 10.95 2 6l4.95-4.95 1.414 1.414L5.828 5H13a8 8 0 1 1 0 16H4v-2h9a6 6 0 1 0 0-12H5.828z" />
        </svg>
      </Link>
      <header className="px-32 mb-10">
        <h1 className="text-4xl lora">{post.frontmatter.title}</h1>
        <time
          dateTime={post.fields.date_time}
          className="text-primary75 font-semibold"
        >
          {post.frontmatter.date_publish}
        </time>
      </header>
      <div
        className="px-32 article__content"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </article>
  </>
);

export default Post;
