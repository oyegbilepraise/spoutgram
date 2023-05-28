import { HomeLayout } from '@/layout'
import Image from 'next/image'
import img from '../../images/default-photo.svg'
import ProfileOverview from "@/components/ViewProfile/ProfileOverview";
import Gallery from "@/components/ViewProfile/Gallery";
import PodCast from "@/components/ViewProfile/PodCast";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";
import styles from '@/layout/HomeLayout/HomeLayout.module.css'
import { baseUrl } from '@/redux/baseUrl';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import Cookies from 'js-cookie';
import Post from '@/components/Home/Post';
import Routes from '@/utils/routes';
import { logout } from '@/redux/slices/authSlice/authSlice';
import { getAllPostsAction } from '@/redux/slices/postSlice/postSlice';
import { getUserPostsAction } from '@/redux/slices/userDetailSlice';

const MainProfileScreen = () => {
  const router = useRouter();
  const [currentTab, setCurrentTab] = useState("/");
  const { userId } = router.query;
  const { user, apiError } = useSelector((state) => state?.auth?.getUser);
  const allPosts = useSelector(
    (state) => state?.post?.allPosts
  );
  console.log(allPosts);
  // const {loading, appError, posts} = useSelector((state)=>state.post.allPosts)
  const [post, setPost] = useState();
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
    const token = Cookies.get("token");
  useEffect(() => {
    dispatch(getAllPostsAction(token));
    console.log(user);
    // socket.emit("NEW_USER_ONLINE",user._id)
  }, []);

  //   get the current tab
  useEffect(() => {
    const { tab } = router.query;
    console.log(router.query);
    if (tab) {
      setCurrentTab(tab);
    } else {
      setCurrentTab("/");
    }
  }, [router.query.tab]);

  // console.log(user)
  useEffect(()=>{
      const {userId} = router.query;
  }, [router.query.userId])

  useEffect(() => {
    getUsersPost()
    // first

    // return () => {
    //   second
    // }
  }, [])
  const getUsersPost = async () => {
    // console.log({ user });
    // const token = Cookies.get('token')
    // try {
    //   const { data } = await axios.get(`${baseUrl}/users/posts`, { headers: { Authorization: 'Bearer ' + token } })
    //   setPost(data.data)
    //   console.log(data?.data)
    //   setLoading(false)
    // } catch (error) {
    //   // if (!error?.response?.data.status) {
    //   //   dispatch(logout())
    //   // }
    //   console.log({ error });
    // }
  }


  const handleGoBack = () => {
      router.back(); // Go back to the previous page or route
  };

  return (
    <HomeLayout>
      {/* div.timeline -> middle */}
      <div class={`${styles.timeline} ${styles._000middlebar}`}>

        <nav className={styles.___main_nav} style={{borderBottom: "transparent"}}>
          <div>
            <span class={styles.icon_back} onClick={handleGoBack}>
            <svg class={styles._00_history__back} fill="rgb(120, 120, 120)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path></svg>
              {/* <svg class={styles._00_history__back} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(90, 90, 90)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H6M12 5l-7 7 7 7" /></svg> */}
            </span>
            <span style={{ color: "transparent" }}>hidden</span>
            <svg class={styles._00_history__back_more} fill="rgb(120, 120, 120)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 10C3.9 10 3 10.9 3 12C3 13.1 3.9 14 5 14C6.1 14 7 13.1 7 12C7 10.9 6.1 10 5 10ZM19 10C17.9 10 17 10.9 17 12C17 13.1 17.9 14 19 14C20.1 14 21 13.1 21 12C21 10.9 20.1 10 19 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z"></path></svg>
          </div>
        </nav>

        <ProfileOverview />
        {/* Tabs  */}
        <div
          className={`${styles.column_nav_menu_profile} ${styles.profile_nav__forPrf} ${styles.another__class}`}
        >
          <div className={styles.p_n_m_content}>
            <div className={styles.p_n_m_c_div} id="menuOne">
              <h6
                className={`${styles.n_m_text} ${currentTab === "/" ? styles.active_n_m_text : ""
                  }`}
                id="textOne"
              >
                <Link href={`/${userId}`}>Posts</Link>
              </h6>
            </div>
            <div className={styles.p_n_m_c_div} id="menuTwo">
              <h6
                className={`${styles.n_m_text} ${currentTab === "gallery" ? styles.active_n_m_text : ""
                  }`}
                id="textTwo"
              >
                <Link href={`/${userId}?tab=gallery`}>Media</Link>
              </h6>
            </div>
            <div className={styles.p_n_m_c_div} id="menuThree">
              <h6
                className={`${styles.n_m_text} ${currentTab === "podcast" ? styles.active_n_m_text : ""
                  }`}
                id="textThree"
              >
                <Link href={`/${userId}?tab=podcast`}>Pinned</Link>
              </h6>
            </div>
            <div className={styles.p_n_m_c_div} id="menuFourth">
              <h6
                className={`${styles.n_m_text} ${currentTab === "paid" ? styles.active_n_m_text : ""
                  }`}
                id="textFour"
              >
                <Link href={`/${userId}?tab=paid`}>Members</Link>
              </h6>
            </div>
          </div>
        </div>

        {/* post container */}
        {currentTab === "/" && <Post posts={allPosts?.posts?.data} loading={allPosts.loading} />}
        {/* post container */}
        {/* gallery container */}
        {/* Media */}
        {currentTab === "gallery" && <Gallery posts={post} loading={loading} />}
        {/* Media */}
        {/* gallery container */}
        {/* podcast */}
        {/* clips */}
        {currentTab === "podcast" && <PodCast />}
        {/* clips */}
        {/* podcast */}
      </div>
      {/* div.timeline -> middle */}
    </HomeLayout>
  )
}

export default MainProfileScreen;
