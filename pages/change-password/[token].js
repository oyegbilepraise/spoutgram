import React from "react";
import { ChangePasswordScreen } from "@/screens";
import Head from "next/head";

const ChangePassword = () => {
  return (
    <>
      <Head>
        <title>Spoutgram / Change Password</title>
        <>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="locale" content="en_US" />
          <meta name="theme-color" content="#ffffff" />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0,viewport-fit=cover"
          />
          <meta name="description" content="Change Password." />
          <meta property="og:site_name" content="Spoutgram" />
          <meta property="og:title" content="Spoutgram / Change Password." />
          <meta property="og:description" content="Change Password." />
          <meta property="og:type" content="webapp" />
          <meta
            property="og:url"
            content="https://spoutgram.com/change-password"
          />
        </>
        <link rel="icon" href="/apple-touch-icon.png" type="image/png" />
      </Head>
      <ChangePasswordScreen />
    </>
  );
};

export default ChangePassword;
