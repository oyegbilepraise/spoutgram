import React from "react";
import { ForgotPasswordScreen } from "@/screens";
import Head from "next/head";
import ForgotPasswordProtected from "@/components/ProtectedRoutes/ProtectedForgotPassword";

const ForgotPassword = () => {
  return (
    <>
      <Head>
        <title>Spoutgram / Forgot Password</title>
        <>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="locale" content="en_US" />
          <meta name="theme-color" content="#ffffff" />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0,viewport-fit=cover"
          />
          <meta name="description" content="Forgot Password." />
          <meta property="og:site_name" content="Spoutgram" />
          <meta property="og:title" content="Spoutgram / Forgot Password." />
          <meta property="og:description" content="Forgot Password." />
          <meta property="og:type" content="webapp" />
          <meta
            property="og:url"
            content="https://spoutgram.com/forgot-password"
          />
        </>
        <link rel="icon" href="/apple-touch-icon.png" type="image/png" />
      </Head>
      <ForgotPasswordScreen />
    </>
  );
};

export default ForgotPasswordProtected(ForgotPassword);
