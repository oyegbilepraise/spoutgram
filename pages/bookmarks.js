import React from 'react'
import { BookmarkScreen } from '@/screens'
import Head from 'next/head'

const Bookmark = () => {
  return (
    <>
     <Head>
        <title>Bookmark</title>
        <meta name="description" content="Sign In to your Account." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BookmarkScreen/>
    </>
    
  )
}

export default Bookmark