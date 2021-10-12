import { getPostData, getPostsFiles } from '../../lib/posts-util';

import { GetStaticProps, NextPage, GetStaticPaths } from 'next';
import PostContent from '../../components/posts/post-detail/PostContent';

interface Props {
  post: any;
}

const PostDetailPage: NextPage<Props> = ({ post }) => {
  return <PostContent post={post}/>;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const postFilenames = getPostsFiles();
  const slugs = postFilenames.map((filename) => filename.replace(/\.md$/, ''));

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    // ! number of posts are not much, so we can pre-generate all posts.
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  // @ts-ignore
  const { slug } = params;
  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    // ! in this situation we're not going through all posts to revalidate this page, so there's no performance issue.
    revalidate: 60 * 10,
  };
};

export default PostDetailPage;
