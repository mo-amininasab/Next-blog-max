import { GetStaticProps, NextPage } from 'next'
import PostContent from '../../components/posts/post-detail/PostContent'

interface Props {

}

const PostDetailPage: NextPage<Props> = () => {


  return (
    <PostContent />
  )
}

// export const getStaticProps: GetStaticProps<Props> = async (context) => {


//   return {
//     props: {}
//   }
// }

export default PostDetailPage
