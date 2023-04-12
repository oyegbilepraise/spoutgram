import React from 'react'
import { SubscriptionScreen } from '@/screens'
import Head from 'next/head'

const Subscription = () => {
  return (
    <>
     <Head>
        <title>Subscriptions</title>
        <meta name="description" content="Sign In to your Account." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SubscriptionScreen/>
    </>
    
  )
}

export default Subscription