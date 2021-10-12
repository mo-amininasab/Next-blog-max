import { getAllPosts } from '../../lib/posts-util';

import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';

import AllPosts from '../../components/posts/AllPosts';
import { Fragment } from 'react';

interface Props {
  posts: any[];
}

const AllPostsPage: NextPage<Props> = ({ posts }) => {
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta
          name="description"
          content="A list of all programming-related tutorials and posts!"
        />
      </Head>
      <AllPosts posts={posts} />
    </Fragment>
  );
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
    // revalidate // ! no need in this situation.
  };
};

export default AllPostsPage;
