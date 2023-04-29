import React from "react";
import { SignupScreen } from "@/screens";
import Head from "next/head";
import UnauthenticatedRoute from "@/components/ProtectedRoutes/UnauthenticatedRoute";

const Signup = () => {
  return (
    <>
      <Head>
        <title>Spoutgram: Creator's hub of the internet / Signup</title>
        <>
          <meta charset="UTF-8"></meta>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="locale" content="en_US" />
          <meta name="theme-color" content="#ffffff" />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0,viewport-fit=cover"
          />
          <meta
            name="description"
            content="Spoutgram - the creator's hub of the internet. See what's in the spotlight, discover contents from creators and connect with them. Sign up to Spoutgram today and take your creativity to the next level."
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Spoutgram / Sign up." />
          <meta
            name="twitter:description"
            content="Sign up. See what's in the spotlight, discover contents from creators."
          />
          <meta name="twitter:site" content="@spoutgram" />
          <meta
            name="twitter:image"
            content="https://elasticbeanstalk-us-east-1-535373247455.s3.amazonaws.com/long_spoutgram.jpeg"
          />
          <meta property="og:site_name" content="Spoutgram" />
          <meta property="og:title" content="Spoutgram / Sign up." />
          <meta
            property="og:description"
            content="Sign up. See what's in the spotlight, discover contents from creators."
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
          <meta property="og:url" content="https://spoutgram.com/signup" />
        </>
        <link rel="icon" href="/apple-touch-icon.png" type="image/png" />
      </Head>
      <SignupScreen />
    </>
  );
};

export default UnauthenticatedRoute(Signup);
