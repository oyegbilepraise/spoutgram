import React from 'react'
import { SearchScreen } from '@/screens'
import Head from 'next/head'

const Search = () => {
  return (
    <>
     <Head>
        <title>Spoutgram / Search</title>
        <>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="locale" content="en_US" />
          <meta name="theme-color" content="#ffffff" />
          <meta name="robots" content="noindex" />
          <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0,viewport-fit=cover" />
          <meta name="description" content="Search Page." />
          <meta property="og:site_name" content="Spoutgram" />
          <meta property="og:title" content="Spoutgram / Search." />
          <meta property="og:description" content="Search Page." />
          <meta property="og:type" content="webapp" />
          <meta property="og:url" content="https://spoutgram.com/search" />
        </>
        <link rel="icon" href="/apple-touch-icon.png" type="image/png" />
      </Head>
      <SearchScreen/>
    </>
    
  )
}

export default Search