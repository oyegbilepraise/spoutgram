import React from 'react'
import { CreatePostScreen } from '@/screens'
import Head from 'next/head'

const CreatePost = () => {
  return (
    <>
     <Head>
        <title>Spoutgram / Create Post</title>
          <>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="locale" content="en_US" />
            <meta name="theme-color" content="#ffffff" />
            <meta name="robots" content="noindex" />
            <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0,viewport-fit=cover" />
            <meta name="description" content="Create Post Page." />
            <meta property="og:site_name" content="Spoutgram" />
            <meta property="og:title" content="Spoutgram / Create Post." />
            <meta property="og:description" content="Create Post Page." />
            <meta property="og:type" content="webapp" />
            <meta property="og:url" content="https://spoutgram.com/createpost" />
          </>
          <link rel="icon" href="/apple-touch-icon.png" type="image/png" />
      </Head>
      <CreatePostScreen/>
    </>
    
  )
}

export default CreatePost