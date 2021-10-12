import React from 'react';
import PostItem from './PostItem';

import classes from './PostsGrid.module.css';

interface Props {
  posts: any[];
}

const PostsGrid: React.FC<Props> = ({ posts }) => {
  
  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
};

export default PostsGrid;
