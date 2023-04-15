import React from 'react'
import { SearchScreen } from '@/screens'
import Head from 'next/head'

const Search = () => {
  return (
    <>
     <Head>
        <title>Search</title>
        <meta name="description" content="Sign In to your Account." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SearchScreen/>
    </>
    
  )
}

export default Search