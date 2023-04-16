import React from 'react'
import { CookiepScreen } from '@/screens'
import Head from 'next/head'

const Cookiep = () => {
    return (
      <>
       <Head>
          <title>Spoutgram / Cookie Policy</title>
          <>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="locale" content="en_US" />
            <meta name="theme-color" content="#ffffff" />
            <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0,viewport-fit=cover" />
            <meta name="description" content="Spoutgram Cookie Policy." />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Spoutgram / Cookie Policy." />
            <meta name="twitter:description" content="Spoutgram Cookie Policy." />
            <meta name="twitter:site" content="@spoutgram" />
            <meta name="twitter:image" content="https://elasticbeanstalk-us-east-1-535373247455.s3.amazonaws.com/long_spoutgram.jpeg" />
            <meta property="og:site_name" content="Spoutgram" />
            <meta property="og:title" content="Spoutgram / Cookie Policy." />
            <meta property="og:description" content="Spoutgram Cookie Policy." />
            <meta property="og:type" content="webapp" />
            <meta property="og:image:secure_url" itemProp="image" content="https://elasticbeanstalk-us-east-1-535373247455.s3.amazonaws.com/long_spoutgram.jpeg" />
            <meta property="og:image:type" content="image/jpeg" />
            <meta property="og:image:width" content={300} />
            <meta property="og:image:height" content={300} />
            <meta property="og:url" content="https://spoutgram.com/cookie-policy" />
          </>
          <link rel="icon" href="/apple-touch-icon.png" type="image/png" />
        </Head>
        <CookiepScreen/>
      </>
      
    )
  }
  
  export default Cookiep