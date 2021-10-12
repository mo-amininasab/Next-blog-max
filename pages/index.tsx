import { NextPage } from 'next';
import { Fragment } from 'react';
import FeaturedPosts from '../components/FeaturedPosts';
import Hero from '../components/Hero';

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

const HomePage: NextPage<Props> = () => {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts
        posts={
          DUMMY_POSTS
        }
      />
    </Fragment>
  );
};

export default HomePage;
