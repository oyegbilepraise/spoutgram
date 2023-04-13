import React from 'react'
import { PodcastStatusScreen } from '@/screens'
import Head from 'next/head'

const PostStatus = () => {
  return (
    <>
     <Head>
        <title>Podcast / Video</title>
        <meta name="description" content="Sign In to your Account." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PodcastStatusScreen/>
    </>
    
  )
}

export default PostStatus