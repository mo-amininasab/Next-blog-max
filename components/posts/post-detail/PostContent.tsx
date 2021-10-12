import React from 'react';
import PostHeader from './PostHeader';

import ReactMarkdown from 'react-markdown';

import classes from './PostContent.module.css';

interface Props {}

const DUMMY_POST = {
  slug: 'getting-started-with-nextjs',
  title: 'Getting Started with NextJs',
  image: 'getting-started-nextjs.png',
  date: '2022-02-10',
  content: '# This is a first post',
};

const PostContent: React.FC<Props> = (props) => {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
