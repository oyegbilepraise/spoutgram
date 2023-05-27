import styles from "@/layout/HomeLayout/HomeLayout.module.css";
import Link from "next/link";
import {
  BookmarkSvg,
  CreateSvg,
  MessageSvg,
  MoreSidebar,
  MoreSvg,
  NotificationSvg,
  PodcastSvg,
  SubscriptionSvg,
} from "@/components";
import { useState } from "react";
import { SpoutgramSvg, HomeSvg } from "../../components";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import Routes from "@/utils/routes";
import { useDispatch, useSelector } from "react-redux";
import { logout } from '../../redux/slices/authSlice/authSlice'

const LeftSidebar = () => {
  const [showMore, setShowMore] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const dispatch = useDispatch();

  const { user, apiError } = useSelector((state) => state?.auth?.getUser);

  const router = useRouter();
  // Define a function to determine if a link is active
  const isActive = (pathname) => {
    return router.pathname === pathname
      ? styles.activeState
      : styles.inactiveState;
  };

  // show more toggle function
  const handleShowMore = () => {
    setShowMore((prev) => !prev);
  };
  const logoutFunc = () => {
    try {
      // console.log({ myreducer });
      // router.push('/login')
      dispatch(logout())
      Cookies.remove("token");
      router.push(Routes.LOGIN);
    } catch (error) {
      console.log({ error });
    }
  };
 
  return (
    <div
      className={`${styles.sidebar} ${styles.onebar} ${styles.no_bar} ${styles._000leftbar}`}
    >
      <div className={styles.__logo}>
        {/* spoutgram__svg */}
        <Link href="/">
          <SpoutgramSvg />
        </Link>
        {/* spoutgram__svg */}
      </div>

      {/* Home */}
      <Link href="/" className={styles.Link}>
        <div className={isActive("/")}>
          <HomeSvg />
          <span className={styles.span_data_sidebar}>Home</span>
        </div>
      </Link>
      {/* Home */}

      {/* Podcasts */}
      {/* <Link href="/podcasts" className={styles.Link}>
        <div className={isActive("/podcasts")}>
          <PodcastSvg />
          <span className={styles.span_data_sidebar}>Podcasts</span>
        </div>
      </Link> */}
      {/* Podcasts */}

      {/* Notifications */}
      <Link href="/notifications" className={styles.Link}>
        <div className={isActive("/notifications")}>
          <NotificationSvg />
          <span className={styles.span_data_sidebar}>Notifications</span>
        </div>
      </Link>
      {/* Notifications */}

      {/* Bookmarks */}
      <Link href="/bookmarks" className={styles.Link}>
        <div className={isActive("/bookmarks")}>
          <BookmarkSvg />
          <span className={styles.span_data_sidebar}>Bookmarks</span>
        </div>
      </Link>
      {/* Bookmarks */}

      {/* Subscriptions */}
      <Link href="/subscriptions" className={styles.Link}>
        <div className={isActive("/subscriptions")}> 
          <SubscriptionSvg />
          <span className={styles.span_data_sidebar}>Subscriptions</span>
        </div>
      </Link>
      {/* Subscriptions */}

      {/* Messages */}
      <Link href="/messages" className={styles.Link}>
        <div className={isActive("/messages")}>
          <MessageSvg />
          <span className={styles.span_data_sidebar}>Messages</span>
        </div>
      </Link>
      {/* Messages */}

      {/* More */}
      <div onClick={handleShowMore}>
        <MoreSvg />
        <span className={styles.span_data_sidebar}>More</span>
      </div>
      {/* More */}
 
      {/* More */}
      <div onClick={handleShowMore}>
        
<svg className={styles.sidebar__svg} width="18" height="18" id="a" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M16,15.3c2.92,0,5.3-2.38,5.3-5.3s-2.38-5.3-5.3-5.3-5.3,2.38-5.3,5.3,2.38,5.3,5.3,5.3Zm0-8c1.49,0,2.7,1.21,2.7,2.7s-1.21,2.7-2.7,2.7-2.7-1.21-2.7-2.7,1.21-2.7,2.7-2.7Zm11.36,18.91c2.44-2.71,3.94-6.28,3.94-10.21C31.3,7.56,24.44,.7,16,.7S.7,7.56,.7,16c0,3.93,1.5,7.5,3.94,10.21,.05,.06,.09,.11,.15,.16,2.8,3.02,6.78,4.93,11.21,4.93s8.42-1.91,11.21-4.93c.06-.05,.1-.11,.15-.16ZM16,3.3c7,0,12.7,5.7,12.7,12.7,0,2.54-.75,4.89-2.04,6.88-2.17-3.77-6.21-6.18-10.66-6.18s-8.5,2.41-10.66,6.18c-1.29-1.98-2.04-4.34-2.04-6.88,0-7,5.7-12.7,12.7-12.7ZM7.13,25.07c1.54-3.48,5.01-5.77,8.87-5.77s7.33,2.29,8.87,5.77c-2.29,2.24-5.42,3.63-8.87,3.63s-6.58-1.39-8.87-3.63Z"/></svg>
<span className={styles.span_data_sidebar}>Profile</span>
      </div>
      {/* More */}

      {/* More */}
      <div onClick={handleShowMore}>
        <svg id="a"  className={styles.sidebar__svg} width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M30.3,7.76v-2.76c0-.72-.58-1.3-1.3-1.3H6C3.08,3.7,.7,6.08,.7,9V25c0,1.82,1.48,3.3,3.3,3.3H28c1.82,0,3.3-1.48,3.3-3.3V9c0-.61-.43-1.1-1-1.24ZM6,6.3H27.7v1.4H3.63c.46-.83,1.35-1.4,2.37-1.4ZM28.7,25c0,.39-.31,.7-.7,.7H4c-.39,0-.7-.31-.7-.7V10.3H28.7v14.7Zm-5.7-7c0-1.1,.9-2,2-2s2,.9,2,2-.9,2-2,2-2-.9-2-2Z"/></svg>
 <span className={styles.span_data_sidebar}>Wallet</span>
      </div>
      {/* More */}

      {/* More */}
      <div onClick={handleShowMore}>
        <svg id="a" className={styles.sidebar__svg} width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M25.3,21v6c0,1.82-1.48,3.3-3.3,3.3H10c-1.82,0-3.3-1.48-3.3-3.3V4c0-1.82,1.48-3.3,3.3-3.3h12c1.82,0,3.3,1.48,3.3,3.3v7c0,.72-.58,1.3-1.3,1.3s-1.3-.58-1.3-1.3V4c0-.39-.31-.7-.7-.7H10c-.39,0-.7,.31-.7,.7V27c0,.39,.31,.7,.7,.7h12c.39,0,.7-.31,.7-.7v-6c0-.72,.58-1.3,1.3-1.3s1.3,.58,1.3,1.3Zm5.91-4.55c.11-.29,.11-.61,0-.9-.02-.05-.04-.09-.06-.13-.02-.05-.04-.1-.07-.14l-2-3c-.4-.6-1.21-.76-1.8-.36-.6,.4-.76,1.21-.36,1.8l.65,.98h-11.57c-.72,0-1.3,.58-1.3,1.3s.58,1.3,1.3,1.3h11.57l-.65,.98c-.4,.6-.24,1.4,.36,1.8,.22,.15,.47,.22,.72,.22,.42,0,.83-.2,1.08-.58l2-3s.04-.09,.07-.14c.02-.04,.04-.08,.06-.13Z"/></svg>
<span className={styles.span_data_sidebar}>Logout</span>
      </div>
      {/* More */}

      {/* More */}
      <div onClick={handleShowMore}>
        <svg id="a" className={styles.sidebar__svg} width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M28,4.7H4c-1.82,0-3.3,1.48-3.3,3.3V24c0,1.82,1.48,3.3,3.3,3.3H28c1.82,0,3.3-1.48,3.3-3.3V8c0-1.82-1.48-3.3-3.3-3.3ZM4,7.3H28c.39,0,.7,.31,.7,.7v1.7H3.3v-1.7c0-.39,.31-.7,.7-.7Zm24.7,6.4H3.3v-1.4H28.7v1.4Zm-.7,11H4c-.39,0-.7-.31-.7-.7v-7.7H28.7v7.7c0,.39-.31,.7-.7,.7Zm.3-2.7c0,.72-.58,1.3-1.3,1.3h-6c-.72,0-1.3-.58-1.3-1.3s.58-1.3,1.3-1.3h6c.72,0,1.3,.58,1.3,1.3Zm-9.7,0c0,.72-.58,1.3-1.3,1.3h-2c-.72,0-1.3-.58-1.3-1.3s.58-1.3,1.3-1.3h2c.72,0,1.3,.58,1.3,1.3Z"/></svg>
<span className={styles.span_data_sidebar}>Card</span>
      </div>
      {/* More */}

      {/* More */}
      <div onClick={handleShowMore}>
      <svg id="a" className={styles.sidebar__svg} width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M30,12.3c.72,0,1.3-.58,1.3-1.3v-3c0-.52-.31-.99-.79-1.19L16.51,.81c-.33-.14-.7-.14-1.02,0L1.49,6.81c-.48,.2-.79,.67-.79,1.19v3c0,.72,.58,1.3,1.3,1.3h1.7v12.4h-1.7c-.72,0-1.3,.58-1.3,1.3v4c0,.72,.58,1.3,1.3,1.3H30c.72,0,1.3-.58,1.3-1.3v-4c0-.72-.58-1.3-1.3-1.3h-1.7V12.3h1.7ZM3.3,8.86L16,3.41l12.7,5.44v.84H3.3v-.84Zm16,15.84V12.3h2.4v12.4h-2.4Zm-9,0V12.3h2.4v12.4h-2.4Zm5-12.4h1.4v12.4h-1.4V12.3Zm-9,0h1.4v12.4h-1.4V12.3ZM28.7,28.7H3.3v-1.4H28.7v1.4Zm-3-4h-1.4V12.3h1.4v12.4Z"/></svg>
<span className={styles.span_data_sidebar}>Banking</span>
      </div>
      {/* More */}

      {/* More */}
      <div onClick={handleShowMore}>
        <svg id="a" className={styles.sidebar__svg} width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M16,10.7c-2.92,0-5.3,2.38-5.3,5.3s2.38,5.3,5.3,5.3,5.3-2.38,5.3-5.3-2.38-5.3-5.3-5.3Zm0,8c-1.49,0-2.7-1.21-2.7-2.7s1.21-2.7,2.7-2.7,2.7,1.21,2.7,2.7-1.21,2.7-2.7,2.7Zm14.27-6.75h-2.65c-.1-.3-.22-.6-.35-.89l1.86-1.86c.51-.51,.51-1.33,0-1.84l-4.24-4.24c-.51-.51-1.33-.51-1.84,0l-1.78,1.77c-.32-.15-.65-.29-.98-.41V1.98c0-.72-.58-1.3-1.3-1.3h-6c-.72,0-1.3,.58-1.3,1.3v2.5c-.33,.12-.66,.26-.98,.41l-1.77-1.77c-.51-.51-1.33-.51-1.84,0L2.87,7.36c-.51,.51-.51,1.33,0,1.84l1.86,1.87c-.13,.29-.24,.59-.34,.89H1.73c-.72,0-1.3,.58-1.3,1.3v6c0,.72,.58,1.3,1.3,1.3h2.83c.1,.25,.21,.49,.32,.73l-2.02,2.02c-.24,.24-.38,.57-.38,.92s.14,.68,.38,.92l4.24,4.24c.49,.49,1.35,.49,1.84,0l2.11-2.11c.21,.09,.42,.18,.64,.26v2.99c0,.72,.58,1.3,1.3,1.3h6c.72,0,1.3-.58,1.3-1.3v-2.99c.22-.08,.43-.17,.64-.26l2.11,2.11c.24,.24,.57,.38,.92,.38s.68-.14,.92-.38l4.24-4.24c.24-.24,.38-.57,.38-.92s-.14-.68-.38-.92l-2.02-2.02c.12-.24,.22-.48,.32-.73h2.83c.72,0,1.3-.58,1.3-1.3v-6c0-.72-.58-1.3-1.3-1.3Zm-1.3,6h-2.45c-.57,0-1.07,.37-1.24,.91-.22,.7-.52,1.37-.89,2-.3,.51-.22,1.16,.2,1.58l1.78,1.78-2.4,2.4-1.85-1.85c-.41-.41-1.04-.5-1.55-.22-.6,.33-1.25,.59-1.92,.77-.57,.15-.96,.67-.96,1.25v2.64h-3.4v-2.64c0-.59-.39-1.1-.96-1.25-.67-.18-1.31-.44-1.92-.77-.51-.28-1.14-.19-1.55,.22l-1.85,1.85-2.4-2.4,1.78-1.78c.42-.42,.5-1.07,.2-1.58-.37-.63-.67-1.3-.89-2-.17-.54-.67-.91-1.24-.91H3.03v-3.4h2.32c.59,0,1.11-.4,1.26-.98,.19-.75,.48-1.48,.84-2.16,.27-.5,.18-1.12-.23-1.53l-1.59-1.6,2.4-2.4,1.53,1.53c.42,.42,1.07,.5,1.58,.2,.68-.4,1.42-.72,2.21-.94,.56-.16,.95-.67,.95-1.25V3.28h3.4v2.14c0,.58,.39,1.09,.95,1.25,.78,.22,1.53,.53,2.22,.93,.51,.29,1.15,.21,1.57-.2l1.53-1.52,2.4,2.4-1.6,1.6c-.41,.41-.5,1.04-.22,1.54,.36,.67,.65,1.39,.84,2.15,.15,.57,.67,.98,1.26,.98h2.32v3.4Z"/></svg>
<span className={styles.span_data_sidebar}>Settings</span>
      </div>
      {/* More */}

      {/* Create */}
      <Link href="/createpost" className={styles.Link}>
        <div className={isActive("/createpost")}>
          <CreateSvg />
          <span className={styles.span_data_sidebar}>Create</span>
        </div>
      </Link>
      {/* Create */}

      {/* Create__button */}
      <Link href="/">
        <button className={styles.create__home__btn} style={{display: "none"}}>
          <span>Create</span>
        </button>
      </Link>
      {/* Create__button */}

      {/* Profile */}
      <div className={styles.profile__fxd} style={{display: "none"}}>
        {showLogout && (
          <div className={styles.more_explained}>
            <Link href="/edit">
              <span className={styles.xmmx___stan}>Edit your profile</span>
            </Link>
            <span onClick={logoutFunc} className={styles.xmmx___stan}>
              Logout of this account
            </span>
          </div>
        )}

        {/* this was set to display none for a reason */}
        <span>
          <Link href={`${user.data?.username}`}>
            <div className={styles.__user__data__hold}>
              <span className={styles.user__initial}>AV</span>
            </div>
          </Link>
        </span>
        <span className={`${styles.span_data_sidebar} ${styles.norms__ava}`}>
          {user?.data?.name}
          <span className={styles.normass__zz}> {user?.data?.email} </span>
        </span>
        <svg
          className={styles.options___prfl__dxdy}
          title="More account options"
          xmlns="http://www.w3.org/2000/svg"
          width={19}
          height={19}
          viewBox="0 0 24 24"
          fill="none"
          stroke="#000"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          onClick={() => setShowLogout((prev) => !prev)}
          style={{
            rotate: showLogout ? "180deg" : "",
          }}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
      {/* Profile */}

      {showMore && <MoreSidebar handleShowMore={handleShowMore} />}
    </div>
  );
};

export default LeftSidebar;
