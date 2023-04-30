import React from "react";
import { LoginScreen } from "@/screens";
import Head from "next/head";

const Login = () => {
  return (
    <>
      <Head>
        <title>Spoutgram / Sign In</title>
        <>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="locale" content="en_US" />
          <meta name="theme-color" content="#ffffff" />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0,viewport-fit=cover"
          />
          <meta
            name="description"
            content="Sign in. See what's in the spotlight, discover contents from creators."
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Spoutgram / Sign In." />
          <meta
            name="twitter:description"
            content="Sign in. See what's in the spotlight, discover contents from creators."
          />
          <meta name="twitter:site" content="@spoutgram" />
          <meta
            name="twitter:image"
            content="https://elasticbeanstalk-us-east-1-535373247455.s3.amazonaws.com/long_spoutgram.jpeg"
          />
          <meta property="og:site_name" content="Spoutgram" />
          <meta property="og:title" content="Spoutgram / Sign In." />
          <meta
            property="og:description"
            content="Sign in. See what's in the spotlight, discover contents from creators."
          />
          <meta property="og:type" content="webapp" />
          <meta
            property="og:image:secure_url"
            itemProp="image"
            content="https://elasticbeanstalk-us-east-1-535373247455.s3.amazonaws.com/long_spoutgram.jpeg"
          />
          <meta property="og:image:type" content="image/jpeg" />
          <meta property="og:image:width" content={300} />
          <meta property="og:image:height" content={300} />
          <meta property="og:url" content="https://spoutgram.com/login" />
        </>

        <link rel="icon" href="/apple-touch-icon.png" type="image/png" />
      </Head>
      <LoginScreen />
    </>
  );
};

export default Login;
