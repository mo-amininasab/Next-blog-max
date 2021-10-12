import { GetStaticProps, NextPage } from 'next';
import AllPosts from '../../components/posts/AllPosts';

interface Props {}
const DUMMY_POSTS = [
  {
    slug: 'getting-started-with-nextjs',
    title: 'Getting Started with NextJs',
    image: 'getting-started-nextjs.png',
    excerpt:
      'NextJS is a the React framework for production - it makes building fullstack React apps',
    date: '2022-02-10',
  },
  {
    slug: 'getting-started-with-nextjs2',
    title: 'Getting Started with NextJs',
    image: 'getting-started-nextjs.png',
    excerpt:
      'NextJS is a the React framework for production - it makes building fullstack React apps',
    date: '2022-02-10',
  },
  {
    slug: 'getting-started-with-nextjs3',
    title: 'Getting Started with NextJs',
    image: 'getting-started-nextjs.png',
    excerpt:
      'NextJS is a the React framework for production - it makes building fullstack React apps',
    date: '2022-02-10',
  },
  {
    slug: 'getting-started-with-nextjs4',
    title: 'Getting Started with NextJs',
    image: 'getting-started-nextjs.png',
    excerpt:
      'NextJS is a the React framework for production - it makes building fullstack React apps',
    date: '2022-02-10',
  },
];

const AllPostsPage: NextPage<Props> = () => {
  return <AllPosts posts={DUMMY_POSTS} />;
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  return {
    props: {},
  };
};

export default AllPostsPage;
