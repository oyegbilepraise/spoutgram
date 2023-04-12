import React from 'react'
import { VerifyAccountScreen } from '@/screens'
import Head from 'next/head'

const Verify = () => {
  return (
    <>
     <Head>
        <title>Spoutgram: Verify Account</title>
        <>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="locale" content="en_US" />
          <meta name="theme-color" content="#ffffff" />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0,viewport-fit=cover"
          />
          <meta name="description" content="Verify your account." />
        </>
        <link rel="icon" href="/apple-touch-icon.png" type="image/png" />
      </Head>
      <VerifyAccountScreen/>
    </>
    
  )
}

export default Verify