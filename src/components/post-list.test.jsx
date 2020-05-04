import React from 'react';
import { render } from '@testing-library/react';
import PostList from './post-list';

const TestPostList = [
  {
    id: 'some-id',
    fields: {
      slug: 'test-post',
      date_time: '2020-03-22T00:00:00.000Z',
    },
    frontmatter: {
      title: 'Some Post',
      date_publish: 'March 22 2020',
    },
    excerpt: 'Hello',
  },
];

let postList = null;

beforeEach(() => {
  postList = render(<PostList posts={TestPostList} />);
});

test('Renders Posts', () => {
  expect(postList.getAllByTestId('post-article').length).toBe(1);
});

test('Article has title', () => {
  expect(postList.getByText(TestPostList[0].frontmatter.title)).toBeTruthy();
});
