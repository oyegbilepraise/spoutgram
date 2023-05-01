import React from "react";
import { SubscriptionScreen } from "@/screens";
import Head from "next/head";

const Subscription = () => {
  return (
    <>
      <Head>
        <title>Spoutgram / Subscriptions</title>
        <>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="locale" content="en_US" />
          <meta name="theme-color" content="#ffffff" />
          <meta name="robots" content="noindex" />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0,viewport-fit=cover"
          />
          <meta name="description" content="Subscriptions Page." />
          <meta property="og:site_name" content="Spoutgram" />
          <meta property="og:title" content="Spoutgram / Subscriptions." />
          <meta property="og:description" content="Subscriptions Page." />
          <meta property="og:type" content="webapp" />
          <meta
            property="og:url"
            content="https://spoutgram.com/subscriptions"
          />
        </>
        <link rel="icon" href="/apple-touch-icon.png" type="image/png" />
      </Head>
      <SubscriptionScreen />
    </>
  );
};

export default Subscription;
