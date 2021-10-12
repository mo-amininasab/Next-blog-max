import { getFeaturedPosts } from '../lib/posts-util';

import { NextPage, GetStaticProps } from 'next';
import Head from 'next/head'
import { Fragment } from 'react';
import FeaturedPosts from '../components/FeaturedPosts';
import Hero from '../components/Hero';

interface Props {
  posts: any[];
}

const HomePage: NextPage<Props> = ({ posts }) => {
  return (
    <Fragment>
      <Head>
        <title>Max' Blog</title>
        <meta name="description" content="I post about programming and web development." />
      </Head>
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
