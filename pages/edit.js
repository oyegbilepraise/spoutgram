import React from 'react'
import { EditProfileScreen } from '@/screens'
import Head from 'next/head'

const EditProfile = () => {
  return (
    <>
     <Head>
        <title>Edit Profile</title>
        <meta name="description" content="Sign In to your Account." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <EditProfileScreen/>
    </>
    
  )
}

export default EditProfile