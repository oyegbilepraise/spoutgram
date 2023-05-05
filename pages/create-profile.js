import React from "react";
import { CreateProfileScreen } from "@/screens";
import Head from "next/head";
import ProtectedRoute from "@/components/ProtectedRoutes/ProtectedRoute";

const CreateProfile = () => {
  return (
    <>
      <Head>
        <title>Spoutgram / Create Profile</title>
        <>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="locale" content="en_US" />
          <meta name="theme-color" content="#ffffff" />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0,viewport-fit=cover"
          />
          <meta name="description" content="Create Profile." />
          <meta property="og:site_name" content="Spoutgram" />
          <meta property="og:title" content="Spoutgram / Create Profile." />
          <meta property="og:description" content="Create Profile." />
          <meta property="og:type" content="webapp" />
          <meta
            property="og:url"
            content="https://spoutgram.com/create-profile"
          />
        </>
        <link rel="icon" href="/apple-touch-icon.png" type="image/png" />
      </Head>
      <CreateProfileScreen />
    </>
  );
};

export default CreateProfile;
