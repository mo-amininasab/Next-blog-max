import React from 'react';
import PostHeader from './PostHeader';

import ReactMarkdown from 'react-markdown';

import classes from './PostContent.module.css';

interface Props {
  post: any;
}

const PostContent: React.FC<Props> = ({ post }) => {
  const { slug, image, title, content } = post;

  const imagePath = `/images/posts/${slug}/${image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={title} image={imagePath} />
      <ReactMarkdown>{content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
