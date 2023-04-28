import React from "react";
import { PodcastStatusScreen } from "@/screens";
import Head from "next/head";
import ProtectedRoute from "@/components/ProtectedRoutes/ProtectedRoute";

const PostStatus = () => {
  return (
    <>
      <Head>
        <title>@*username* / Podcast - Post</title>
        <>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="locale" content="en_US" />
          <meta name="theme-color" content="#ffffff" />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0,viewport-fit=cover"
          />
          <meta name="description" content="*Podcast Title*." />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="@*username* / Podcast - Post." />
          <meta name="twitter:description" content="*Podcast Titlte*" />
          <meta name="twitter:site" content="@spoutgram" />
          <meta property="og:site_name" content="Spoutgram" />
          <meta property="og:title" content="@*username* / Podcast - Post." />
          <meta property="og:description" content="*Podcast Title*." />
          <meta property="og:type" content="webapp" />
          <meta property="og:url" content="https://spoutgram.com/pod/*id*" />
        </>
        <link rel="icon" href="/apple-touch-icon.png" type="image/png" />
      </Head>
      <PodcastStatusScreen />
    </>
  );
};

export default ProtectedRoute(PostStatus);
