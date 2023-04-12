import React from 'react'
import {  ConfirmPasswordChangeScreen } from '@/screens'
import Head from 'next/head'

const ConfirmChangePassword = () => {
  return (
    <>
     <Head>
        <title>Spoutgram: Confirm Account</title>
        <>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="locale" content="en_US" />
          <meta name="theme-color" content="#ffffff" />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0,viewport-fit=cover"
          />
          <meta name="description" content="Confirm your account." />
          <link rel="stylesheet" href="../app__assets/style__theme_amo/normalize.css" />
          <link
            rel="stylesheet"
            href="../app__assets/style__theme_amo/amo_style_theme.css"
          />
          <link
            rel="preload"
            href="../app__assets/style__theme_amo/amo_style_theme.css"
            as="style"
          />
          <link
            rel="icon"
            href="../app__assets/images/favicon/apple-touch-icon.png"
            type="image/png"
          />
        </>
        <link rel="icon" href="/apple-touch-icon.png" type="image/png" />
      </Head>
      <ConfirmPasswordChangeScreen/>
    </>
    
  )
}

export default ConfirmChangePassword