import { NextPage } from 'next'
import Head from 'next/head'
import { Fragment } from 'react'

import ContactForm from '../components/contact/ContactForm'

interface Props {

}

const ContactPage: NextPage<Props> = () => {
  return (
    <Fragment>
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="Send me your messages!." />
      </Head>
      <ContactForm />
    </Fragment>
  )
}

export default ContactPage
