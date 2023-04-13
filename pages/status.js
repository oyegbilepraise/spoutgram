import React from 'react'
import { PostStatusScreen } from '@/screens'
import Head from 'next/head'

const PostStatus = () => {
  return (
    <>
     <Head>
        <title>Post</title>
        <meta name="description" content="Sign In to your Account." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PostStatusScreen/>
    </>
    
  )
}

export default PostStatus