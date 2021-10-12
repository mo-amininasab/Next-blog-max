import React from 'react'

import classes from './AllPosts.module.css';
import PostsGrid from './PostsGrid';

interface Props {
  posts: any[];
}

const AllPosts: React.FC<Props> = ({posts}) => {
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={posts}/>
    </section>
  )
}

export default AllPosts
