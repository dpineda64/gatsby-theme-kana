import React from 'react';
import { PostCard } from '../Post';

const PostList = ({ posts }) => (
  <>
    {posts.map((post) => (
      <PostCard key={post.id} post={post} />
    ))}
  </>
);

export default PostList;
