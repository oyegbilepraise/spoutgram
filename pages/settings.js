import React from "react";
import { SettingsScreen } from "@/screens";
import Head from "next/head";
import ProtectedRoute from "@/components/ProtectedRoutes/ProtectedRoute";

const Settings = () => {
  return (
    <>
      <Head>
        <title>Spoutgram / Settings</title>
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
          <meta name="description" content="Settings Page." />
          <meta property="og:site_name" content="Spoutgram" />
          <meta property="og:title" content="Spoutgram / Settings." />
          <meta property="og:description" content="Settings Page." />
          <meta property="og:type" content="webapp" />
          <meta property="og:url" content="https://spoutgram.com/settings" />
        </>
        <link rel="icon" href="/apple-touch-icon.png" type="image/png" />
      </Head>
      <SettingsScreen />
    </>
  );
};

export default ProtectedRoute(Settings);
