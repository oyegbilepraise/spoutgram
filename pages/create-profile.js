import React from 'react'
import { CreateProfileScreen} from '@/screens'
import Head from 'next/head'

const CreateProfile = () => {
  return (
    <>
     <Head>
        <title>Create Profile</title>
        <meta name="description" content="Forgot Password" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CreateProfileScreen/>
    </>
    
  )
}

export default CreateProfile