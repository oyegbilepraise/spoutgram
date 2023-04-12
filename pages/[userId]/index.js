import React from 'react'
import { ProfileScreen } from '@/screens'
import Head from 'next/head'

const Profile = () => {
  return (
    <>
     <Head>
        <title>Profile</title>
        <meta name="description" content="Sign In to your Account." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ProfileScreen/>
    </>
  )
}

export default Profile