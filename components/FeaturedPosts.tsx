import React from 'react';

import classes from './FeaturedPosts.module.css';
import PostsGrid from './posts/PostsGrid';

interface Props {
  posts: any[];
}

const FeaturedPosts: React.FC<Props> = ({ posts }) => {
  
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
};

export default FeaturedPosts;
