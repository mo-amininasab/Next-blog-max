import React from 'react';
import Image from 'next/image';
import PostHeader from './PostHeader';

import ReactMarkdown from 'react-markdown';
// !react-syntax-highlighter is too big, so we import just what we need.
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
// ! add more languages if you need.
// import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css';

import classes from './PostContent.module.css';

SyntaxHighlighter.registerLanguage('js', js);
// SyntaxHighlighter.registerLanguage('css', css);

interface Props {
  post: any;
}

const PostContent: React.FC<Props> = ({ post }) => {
  const { slug, image, title, content } = post;

  const imagePath = `/images/posts/${slug}/${image}`;

  const customRenderers = {
    // ! react-markdown will call this method, if it fiends an image in markdown content.
    img(image: HTMLImageElement) {
      console.log('from react-markdown', image.src);

      return (
        <Image
          src={`/images/posts/${slug}/${image.src}`}
          alt={image.alt}
          width={600}
          height={300}
        />
      );
    },
  };

  return (
    <article className={classes.content}>
      <PostHeader title={title} image={imagePath} />
      <ReactMarkdown
      // 
        children={content}
        // @ts-ignore
        components={{
          code({ children, className }) {
            let lang: string = 'js';
            if (className === 'language-js') {
              lang = 'js';
            }

            return (
              <SyntaxHighlighter
                style={atomDark}
                language={lang}
                children={children}
              />
            );
          },
        }}
      />
    </article>
  );
};

export default PostContent;
