import React from 'react';
import { Link } from 'gatsby';

const PostList = ({ posts }) => (
  <>
    {posts.map((post) => (
      <article
        key={post.id}
        className="w-full md:w-2/4 px-10 lg:px-16 py-10 card"
        data-testid="post-article"
      >
        <header className="mb-4">
          <Link to={post.fields.slug}>
            <h1 className="font-fold text-2xl">{post.frontmatter.title}</h1>
          </Link>
          <section
            className="block text-primary75"
            aria-label="date of publication"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="inline-block mr-3"
              aria-hidden="true"
            >
              <path
                d="M8.5 1.5H10.5C10.6326 1.5 10.7598 1.55268 10.8536 1.64645C10.9473 1.74021 11 1.86739 11 2V10C11 10.1326 10.9473 10.2598 10.8536 10.3536C10.7598 10.4473 10.6326 10.5 10.5 10.5H1.5C1.36739 10.5 1.24021 10.4473 1.14645 10.3536C1.05268 10.2598 1 10.1326 1 10V2C1 1.86739 1.05268 1.74021 1.14645 1.64645C1.24021 1.55268 1.36739 1.5 1.5 1.5H3.5V0.5H4.5V1.5H7.5V0.5H8.5V1.5ZM7.5 2.5H4.5V3.5H3.5V2.5H2V4.5H10V2.5H8.5V3.5H7.5V2.5ZM10 5.5H2V9.5H10V5.5Z"
                fill="#242038"
                fillOpacity="0.75"
              />
            </svg>
            <time dateTime={post.fields.date_time}>
              {post.frontmatter.date_publish}
            </time>
          </section>
        </header>
        <p className="lora">{post.excerpt}</p>
      </article>
    ))}
  </>
);

export default PostList;
