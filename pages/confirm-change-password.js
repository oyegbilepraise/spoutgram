import React from "react";
import { ConfirmPasswordChangeScreen } from "@/screens";
import Head from "next/head";
import ForgotPasswordProtected from "@/components/ProtectedRoutes/ProtectedForgotPassword";

const ConfirmChangePassword = () => {
  return (
    <>
      <Head>
        <title>Spoutgram / Confirm Account</title>
        <>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="locale" content="en_US" />
          <meta name="theme-color" content="#ffffff" />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0,viewport-fit=cover"
          />
          <meta name="description" content="Confirm Account." />
          <meta property="og:site_name" content="Spoutgram" />
          <meta property="og:title" content="Spoutgram / Confirm Account." />
          <meta property="og:description" content="Confirm Account." />
          <meta property="og:type" content="webapp" />
          <meta
            property="og:url"
            content="https://spoutgram.com/confirm-change-password"
          />
        </>
        <link rel="icon" href="/apple-touch-icon.png" type="image/png" />
      </Head>
      <ConfirmPasswordChangeScreen />
    </>
  );
};

export default ForgotPasswordProtected(ConfirmChangePassword);
