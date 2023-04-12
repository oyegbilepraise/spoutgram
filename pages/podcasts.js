import React from 'react'
import { PodcastScreen } from '@/screens'
import Head from 'next/head'

const Podcast = () => {
  return (
    <>
     <Head>
        <title>Podcast</title>
        <meta name="description" content="Sign In to your Account." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PodcastScreen/>
    </>
    
  )
}

export default Podcast