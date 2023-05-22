import React from "react";
import { CommentStatusScreen } from "@/screens";
import Head from "next/head";

const CommentStatus = () => {
  return (
    <>
      <Head>
        <title>@*username* / Comment</title>
        <>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="locale" content="en_US" />
          <meta name="theme-color" content="#ffffff" />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0,viewport-fit=cover"
          />
          <meta name="description" content="*Post Content*." />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="@*username* / Post." />
          <meta name="twitter:description" content="*Post Content*" />
          <meta name="twitter:site" content="@spoutgram" />
          <meta property="og:site_name" content="Spoutgram" />
          <meta property="og:title" content="@*username* / Post." />
          <meta property="og:description" content="*Post Content*" />
          <meta property="og:type" content="webapp" />
          <meta property="og:url" content="https://spoutgram.com/status/*id*" />
        </>
        <link rel="icon" href="/apple-touch-icon.png" type="image/png" />
      </Head>
      <CommentStatusScreen />
    </>
  );
};

export default CommentStatus;
