import React from 'react'
import { NotificationScreen } from '@/screens'
import Head from 'next/head'

const Notification = () => {
  return (
    <>
     <Head>
        <title>Notification</title>
        <meta name="description" content="Sign In to your Account." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NotificationScreen/>
    </>
    
  )
}

export default Notification