import React from 'react'
import { CreatePostScreen } from '@/screens'
import Head from 'next/head'

const CreatePost = () => {
  return (
    <>
     <Head>
        <title>Create Post</title>
        <meta name="description" content="Sign In to your Account." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CreatePostScreen/>
    </>
    
  )
}

export default CreatePost