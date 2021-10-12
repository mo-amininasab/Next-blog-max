import { getFeaturedPosts } from '../lib/posts-util';

import { NextPage, GetStaticProps } from 'next';
import { Fragment } from 'react';
import FeaturedPosts from '../components/FeaturedPosts';
import Hero from '../components/Hero';

interface Props {
  posts: any[];
}

const HomePage: NextPage<Props> = ({ posts }) => {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={posts} />
    </Fragment>
  );
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
    // revalidate // ! no needed in this situation.
  };
};

export default HomePage;
