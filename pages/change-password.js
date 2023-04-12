import React from 'react'
import { ChangePasswordScreen } from '@/screens'
import Head from 'next/head'

const ChangePassword = () => {
  return (
    <>
     <Head>
        <title>Spoutgram: Change Password</title>
        <meta name="description" content="Forgot Password" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/apple-touch-icon.png" type="image/png" />
      </Head>
      <ChangePasswordScreen/>
    </>
    
  )
}

export default ChangePassword