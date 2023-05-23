import { SocketContext } from "@/redux/context/socket.js";
import { HomeScreen } from "@/screens";
import Head from "next/head";
import { useContext, useEffect } from "react";
import { useSelector } from "react-redux";
// import { SocketContext } from "../../redux/context/socket.js";

function Home() {
  const { user, apiError } = useSelector((state) => state?.auth?.getUser);
  console.log({user});
  const socket = useContext(SocketContext);


  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        handleSuccess,
        handleError
      );
    } else {
      console.log('Geolocation is not supported by your browser');
    }
  }, [])

  // useEffect(() => {
  //   console.log("socket:: ", socket.id);
  //   socket.emit("NEW_USER_ONLINE",user?.data?._id)
  // },[user])

  const handleSuccess = (position) => {
    const { latitude, longitude } = position.coords;
    // Do something with the coordinates
  };

  const handleError = (error) => {
    console.log('Error:', error.message);
    // Handle the error if geolocation retrieval fails
  };
  return (
    <>
      <Head>
        <title>Spoutgram / Home</title>
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
            content="See what's in the spotlight, discover contents from creators and connect with them. Sign up to Spoutgram today and take your creativity to the next level."
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Spoutgram / Home." />
          <meta
            name="twitter:description"
            content="See what's in the spotlight, discover contents from creators."
          />
          <meta name="twitter:site" content="@spoutgram" />
          <meta
            name="twitter:image"
            content="https://elasticbeanstalk-us-east-1-535373247455.s3.amazonaws.com/long_spoutgram.jpeg"
          />
          <meta property="og:site_name" content="Spoutgram" />
          <meta property="og:title" content="Spoutgram / Home." />
          <meta
            property="og:description"
            content="See what's in the spotlight, discover contents from creators."
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
          <meta property="og:url" content="https://spoutgram.com" />
        </>
        <link rel="icon" href="/apple-touch-icon.png" type="image/png" />
      </Head>
      <HomeScreen />
    </>
  );
}
export default Home;
