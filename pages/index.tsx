import { NextPage } from 'next'
import { Fragment } from 'react'
import Hero from '../components/Hero'

interface Props {

}

const HomePage: NextPage<Props> = () => {
  return (
    <Fragment>
      <Hero />
    </Fragment>
  )
}

export default HomePage
