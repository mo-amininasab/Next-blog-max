import React from 'react';
import PostItem from './PostItem';

import classes from './PostsGrid.module.css';

interface Props {
  posts: JSX.Element[];
}

const PostsGrid: React.FC<Props> = ({ posts }) => {
  return (
    <ul className={classes.grid}>
      {posts.map((post) => {
        // @ts-ignore
        <PostItem key={post.slug} post={post} />;
      })}
    </ul>
  );
};

export default PostsGrid;
