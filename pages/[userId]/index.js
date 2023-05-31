import React, {useEffect, useState} from 'react'
import { MainProfileScreen } from '@/screens'
import Head from 'next/head'
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { getAllUsersAction, getUserPostsAction } from '@/redux/slices/userDetailSlice';
import { loadGetInitialProps } from 'next/dist/shared/lib/utils';

const Profile = () => {
  const {user, appError }  = useSelector((state) => state?.auth?.getUser);
  const allUsers = useSelector((state)=>state.userDetails.allUsers.users)
  const [userDetail, setUserDetail] = useState({});
  const [userId, setUserId] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getAllUsersAction());
    getUserDetail();
    setUserId(router.query.userId);
  }, [router]);
  
  const getUserDetail=async ()=>{
    let newUser = allUsers?.data?.find((user)=>user?.username===router?.query?.userId)
    dispatch(getUserPostsAction(newUser?._id))
    if(newUser?.username == user?.data?.username){
      setUserDetail({...newUser, owner: true})
    }else{
      if(newUser?.followers.includes(`${user?.data?._id}`)){
        setUserDetail({...newUser, owner: false, amFollowing: true})
      }else{
        setUserDetail({...newUser, owner: false, amFollowing: false})
      }
    }
  }

  return ( 
    <>
     <Head>
     <title>{userDetail?.name ?? "Profile name"} / @{userDetail?.username ?? "username"}</title>
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
            content="*Profile name* / @*username* profile page."
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="*Profile name*." />
          <meta
            name="twitter:description"
            content="*Profile name* / @*username* profile page."
          />
          <meta name="twitter:site" content="@spoutgram" />
          <meta
            name="twitter:image"
            content="https://elasticbeanstalk-us-east-1-535373247455.s3.amazonaws.com/long_spoutgram.jpeg"
          />
          <meta property="og:site_name" content="Spoutgram" />
          <meta property="og:title" content="*Profile name*." />
          <meta
            property="og:description"
            content="*Profile name* / @*username* profile page."
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
          <meta property="og:url" content="https://spoutgram.com/*username*" />
        </>
        <link rel="icon" href="/apple-touch-icon.png" type="image/png" />
      </Head>
      <MainProfileScreen userDetail={userDetail} userId={userId}/>
    </>
  )
}
export default Profile