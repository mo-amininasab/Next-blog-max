import { getAllPosts } from '../../lib/posts-util';

import { GetStaticProps, NextPage } from 'next';
import AllPosts from '../../components/posts/AllPosts';

interface Props {
  posts: any[];
}

const AllPostsPage: NextPage<Props> = ({ posts }) => {
  return <AllPosts posts={posts} />;
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
