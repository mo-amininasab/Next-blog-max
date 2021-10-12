import { GetStaticProps, NextPage } from 'next'

interface Props {

}

const AllPostsPage: NextPage<Props> = () => {


  return (
    <div>
      
    </div>
  )
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {


  return {
    props: {}
  }
}

export default AllPostsPage
