import React from 'react'
import { MessagesScreen } from '@/screens'
import Head from 'next/head'

const Messages = () => {
  return (
    <>
     <Head>
        <title>Messages</title>
        <meta name="description" content="Sign In to your Account." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MessagesScreen/>
    </>
    
  )
}

export default Messages