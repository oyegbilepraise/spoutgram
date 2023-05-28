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
import img from "../../images/default.jpeg";
import Image from "next/image";

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

  const [showMoreContent, setShowMoreContent] = useState(false);

  const toggleMoreContent = () => {
    setShowMoreContent(!showMoreContent);
  };

  const handleOutsideClick = (event) => {
    if (showMoreContent && !event.target.closest(`.${styles.qqqq__yyy__ooo}`)) {
      setShowMoreContent(false);
    }
  };
 
  return (
    <div 
      className={`${styles.sidebar} ${styles.onebar} ${styles.no_bar} ${styles._000leftbar}`}
    >
      <div className={styles.__logo}>
        {/* spoutgram__svg */}
        <Link href={`${user.data?.username}`}>
          <Image src={img} alt="profile_photo" className={styles.archery__picture} priority/>
        </Link>
        {/* spoutgram__svg */}
      </div>

      {/* Home */}
      <Link href="/" className={styles.Link}>
        <div>
          <svg className={`${styles.sidebar__svg} ${isActive("/")}`} width="18" height="18" id="a" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M30.8,11.98L18.04,1.95c-1.2-.94-2.88-.94-4.08,0L1.2,11.98c-.56,.44-.66,1.26-.22,1.83,.26,.33,.64,.5,1.02,.5,.28,0,.56-.09,.8-.28l.9-.7V30c0,.72,.58,1.3,1.3,1.3h7c.72,0,1.3-.58,1.3-1.3v-4c0-1.49,1.21-2.7,2.7-2.7s2.7,1.21,2.7,2.7v4c0,.72,.58,1.3,1.3,1.3h7c.72,0,1.3-.58,1.3-1.3V13.32l.9,.7c.57,.44,1.38,.34,1.83-.22,.44-.56,.35-1.38-.22-1.83Zm-5.1,16.72h-4.4v-2.7c0-2.92-2.38-5.3-5.3-5.3s-5.3,2.38-5.3,5.3v2.7H6.3V11.27L15.57,3.99c.25-.2,.61-.2,.86,0l9.27,7.28V28.7Z"/></svg>
          <span className={`${styles.span_data_sidebar} ${isActive("/")}`}>Home</span>

          {/* this is the notification_dot */}
          <div className={styles.notif__dot__nn}></div>
          {/* this is the notification_dot */}

        </div>
      </Link>
      {/* Home */}

      {/* Notifications */}
      <Link href="/notifications" className={styles.Link}>
        <div>
          <svg className={`${styles.sidebar__svg} ${isActive("/notifications")}`} width="18" height="18" id="a" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M16,.7C9.77,.7,4.7,5.77,4.7,12v13c0,.72,.58,1.3,1.3,1.3h4.88c.58,2.29,2.65,4,5.12,4s4.54-1.71,5.12-4h4.88c.72,0,1.3-.58,1.3-1.3V12C27.3,5.77,22.23,.7,16,.7Zm0,27c-1.02,0-1.91-.57-2.37-1.4h4.73c-.46,.83-1.35,1.4-2.37,1.4Zm8.7-4H7.3V12c0-4.8,3.9-8.7,8.7-8.7s8.7,3.9,8.7,8.7v11.7Z"/></svg>
          <span className={`${styles.span_data_sidebar} ${isActive("/notifications")}`}>Notifications</span>

          {/* this is the notification_counter */}
          <div className={styles.main_notif}>
            <span className={styles.span_notif_cnttr}>1</span>
          </div>
          {/* this is the notification_counter */}

        </div>
      </Link>
      {/* Notifications */}

      {/* Bookmarks */}
      <Link href="/bookmarks" className={styles.Link}>
        <div>
          <svg className={`${styles.sidebar__svg} ${isActive("/bookmarks")}`} width="18" height="18" id="a" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M22,.7H10c-2.92,0-5.3,2.38-5.3,5.3V30c0,.51,.3,.98,.77,1.19s1.02,.12,1.4-.22l8.66-7.8c.27-.24,.67-.24,.94,0l8.66,7.8c.24,.22,.55,.33,.87,.33,.18,0,.36-.04,.53-.11,.47-.21,.77-.67,.77-1.19V6c0-2.92-2.38-5.3-5.3-5.3Zm2.7,26.38l-6.49-5.84c-1.26-1.13-3.16-1.13-4.42,0l-6.49,5.84V6c0-1.49,1.21-2.7,2.7-2.7h12c1.49,0,2.7,1.21,2.7,2.7V27.08Z"/></svg>
          <span className={`${styles.span_data_sidebar} ${isActive("/bookmarks")}`}>Bookmarks</span>
        </div>
      </Link>
      {/* Bookmarks */}

      {/* Subscriptions */}
      <Link href="/subscriptions" className={styles.Link}>
        <div>
          <svg id="a" className={`${styles.sidebar__svg} ${isActive("/subscriptions")}`} width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M16,14.3c3.75,0,6.8-3.05,6.8-6.8S19.75,.7,16,.7s-6.8,3.05-6.8,6.8,3.05,6.8,6.8,6.8Zm0-11c2.32,0,4.2,1.88,4.2,4.2s-1.88,4.2-4.2,4.2-4.2-1.88-4.2-4.2,1.88-4.2,4.2-4.2Zm14.13,22.77l-.7,.7-4.2,4.2-4.2-4.2-.7-.7c-1.16-1.16-1.16-3.04,0-4.2s3.04-1.16,4.2,0l.7,.7,.7-.7c1.16-1.16,3.04-1.16,4.2,0,1.16,1.16,1.16,3.04,0,4.2Zm-8.57-6.01c-1.63-1.15-3.55-1.76-5.56-1.76-5.35,0-9.7,4.35-9.7,9.7v2c0,.72-.58,1.3-1.3,1.3s-1.3-.58-1.3-1.3v-2c0-6.78,5.52-12.3,12.3-12.3,2.55,0,4.99,.77,7.06,2.24,.59,.42,.72,1.23,.31,1.81-.41,.59-1.23,.73-1.81,.31Z"/></svg>
          <span className={`${styles.span_data_sidebar} ${isActive("/subscriptions")}`}>Subscriptions</span>
        </div>
      </Link>
      {/* Subscriptions */}

      {/* Messages */}
      <Link href="/messages" className={styles.Link}>
        <div>
          <svg id="a" className={`${styles.sidebar__svg} ${isActive("/messages")}`} width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M27,4.7H5c-1.82,0-3.3,1.48-3.3,3.3V24c0,1.82,1.48,3.3,3.3,3.3H27c1.82,0,3.3-1.48,3.3-3.3V8c0-1.82-1.48-3.3-3.3-3.3ZM4.3,8c0-.39,.31-.7,.7-.7H27c.39,0,.7,.31,.7,.7v2.22l-11.7,6.3L4.3,10.22v-2.22ZM27,24.7H5c-.39,0-.7-.31-.7-.7V13.18l11.08,5.97c.19,.1,.4,.16,.62,.16s.42-.05,.62-.16l11.08-5.97v10.82c0,.39-.31,.7-.7,.7Z"/></svg>
          <span className={`${styles.span_data_sidebar} ${isActive("/messages")}`}>Messages</span>

          {/* this is the notification_counter */}
          <div className={styles.main_notif}>
            <span className={styles.span_notif_cnttr}>9+</span>
          </div>
          {/* this is the notification_counter */}

        </div>
      </Link>
      {/* Messages */}
 
      {/* Profile */}
      <Link href={`${user.data?.username}`} className={styles.Link}>
        <div>
          <svg className={`${styles.sidebar__svg} ${isActive(user.data?.username)}`} width="18" height="18" id="a" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M16,15.3c2.92,0,5.3-2.38,5.3-5.3s-2.38-5.3-5.3-5.3-5.3,2.38-5.3,5.3,2.38,5.3,5.3,5.3Zm0-8c1.49,0,2.7,1.21,2.7,2.7s-1.21,2.7-2.7,2.7-2.7-1.21-2.7-2.7,1.21-2.7,2.7-2.7Zm11.36,18.91c2.44-2.71,3.94-6.28,3.94-10.21C31.3,7.56,24.44,.7,16,.7S.7,7.56,.7,16c0,3.93,1.5,7.5,3.94,10.21,.05,.06,.09,.11,.15,.16,2.8,3.02,6.78,4.93,11.21,4.93s8.42-1.91,11.21-4.93c.06-.05,.1-.11,.15-.16ZM16,3.3c7,0,12.7,5.7,12.7,12.7,0,2.54-.75,4.89-2.04,6.88-2.17-3.77-6.21-6.18-10.66-6.18s-8.5,2.41-10.66,6.18c-1.29-1.98-2.04-4.34-2.04-6.88,0-7,5.7-12.7,12.7-12.7ZM7.13,25.07c1.54-3.48,5.01-5.77,8.87-5.77s7.33,2.29,8.87,5.77c-2.29,2.24-5.42,3.63-8.87,3.63s-6.58-1.39-8.87-3.63Z"/></svg>
          <span className={`${styles.span_data_sidebar} ${isActive(user.data?.username)}`}>Profile</span>
        </div> 
      </Link>
      {/* Profile */}

      {/* Create__button */}
      <Link href="/createpost">
        <button className={styles.create__home__btn} style={{cursor: "pointer"}}>
        <svg className={styles.sidebar__svg_x} style={{fill : "white"}} width="18" height="18" id="a" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M28.3,16c0,.72-.58,1.3-1.3,1.3h-9.7v9.7c0,.72-.58,1.3-1.3,1.3s-1.3-.58-1.3-1.3v-9.7H5c-.72,0-1.3-.58-1.3-1.3s.58-1.3,1.3-1.3H14.7V5c0-.72,.58-1.3,1.3-1.3s1.3,.58,1.3,1.3V14.7h9.7c.72,0,1.3,.58,1.3,1.3Z"/></svg>
          <span>Create</span>
        </button>
      </Link>
      {/* Create__button */}


      {/* More */}
      <div className={styles.msmssg___yyy}onClick={toggleMoreContent} >
        <div className={styles.qqqq__yyy__ooo} >

          {/* more modal */}
          {showMoreContent && (
          <div className={styles.more_popup__home}>
            <Link href="/wallet">
              <div className={styles.worrr__span}>
                <svg id="a"  className={styles.sidebar__inner_svg} width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M30.3,7.76v-2.76c0-.72-.58-1.3-1.3-1.3H6C3.08,3.7,.7,6.08,.7,9V25c0,1.82,1.48,3.3,3.3,3.3H28c1.82,0,3.3-1.48,3.3-3.3V9c0-.61-.43-1.1-1-1.24ZM6,6.3H27.7v1.4H3.63c.46-.83,1.35-1.4,2.37-1.4ZM28.7,25c0,.39-.31,.7-.7,.7H4c-.39,0-.7-.31-.7-.7V10.3H28.7v14.7Zm-5.7-7c0-1.1,.9-2,2-2s2,.9,2,2-.9,2-2,2-2-.9-2-2Z"/></svg>
                <span className={styles.mph__spn_t}>Wallet</span>
              </div>
            </Link>
            <Link href="/banking">
              <div className={styles.worrr__span}>
                <svg id="a" className={styles.sidebar__inner_svg} width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M30,12.3c.72,0,1.3-.58,1.3-1.3v-3c0-.52-.31-.99-.79-1.19L16.51,.81c-.33-.14-.7-.14-1.02,0L1.49,6.81c-.48,.2-.79,.67-.79,1.19v3c0,.72,.58,1.3,1.3,1.3h1.7v12.4h-1.7c-.72,0-1.3,.58-1.3,1.3v4c0,.72,.58,1.3,1.3,1.3H30c.72,0,1.3-.58,1.3-1.3v-4c0-.72-.58-1.3-1.3-1.3h-1.7V12.3h1.7ZM3.3,8.86L16,3.41l12.7,5.44v.84H3.3v-.84Zm16,15.84V12.3h2.4v12.4h-2.4Zm-9,0V12.3h2.4v12.4h-2.4Zm5-12.4h1.4v12.4h-1.4V12.3Zm-9,0h1.4v12.4h-1.4V12.3ZM28.7,28.7H3.3v-1.4H28.7v1.4Zm-3-4h-1.4V12.3h1.4v12.4Z"/></svg>
                <span className={styles.mph__spn_t}>Banking</span>
              </div>
            </Link>
            <Link href="/payments">
              <div className={styles.worrr__span}>
                <svg id="a" className={styles.sidebar__inner_svg} width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M28,4.7H4c-1.82,0-3.3,1.48-3.3,3.3V24c0,1.82,1.48,3.3,3.3,3.3H28c1.82,0,3.3-1.48,3.3-3.3V8c0-1.82-1.48-3.3-3.3-3.3ZM4,7.3H28c.39,0,.7,.31,.7,.7v1.7H3.3v-1.7c0-.39,.31-.7,.7-.7Zm24.7,6.4H3.3v-1.4H28.7v1.4Zm-.7,11H4c-.39,0-.7-.31-.7-.7v-7.7H28.7v7.7c0,.39-.31,.7-.7,.7Zm.3-2.7c0,.72-.58,1.3-1.3,1.3h-6c-.72,0-1.3-.58-1.3-1.3s.58-1.3,1.3-1.3h6c.72,0,1.3,.58,1.3,1.3Zm-9.7,0c0,.72-.58,1.3-1.3,1.3h-2c-.72,0-1.3-.58-1.3-1.3s.58-1.3,1.3-1.3h2c.72,0,1.3,.58,1.3,1.3Z"/></svg>
                <span className={styles.mph__spn_t}>Payments</span>
              </div>
            </Link>
            <Link href="/settings">
              <div className={styles.worrr__span}>
                <svg id="a" className={styles.sidebar__inner_svg} width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M16,10.7c-2.92,0-5.3,2.38-5.3,5.3s2.38,5.3,5.3,5.3,5.3-2.38,5.3-5.3-2.38-5.3-5.3-5.3Zm0,8c-1.49,0-2.7-1.21-2.7-2.7s1.21-2.7,2.7-2.7,2.7,1.21,2.7,2.7-1.21,2.7-2.7,2.7Zm14.27-6.75h-2.65c-.1-.3-.22-.6-.35-.89l1.86-1.86c.51-.51,.51-1.33,0-1.84l-4.24-4.24c-.51-.51-1.33-.51-1.84,0l-1.78,1.77c-.32-.15-.65-.29-.98-.41V1.98c0-.72-.58-1.3-1.3-1.3h-6c-.72,0-1.3,.58-1.3,1.3v2.5c-.33,.12-.66,.26-.98,.41l-1.77-1.77c-.51-.51-1.33-.51-1.84,0L2.87,7.36c-.51,.51-.51,1.33,0,1.84l1.86,1.87c-.13,.29-.24,.59-.34,.89H1.73c-.72,0-1.3,.58-1.3,1.3v6c0,.72,.58,1.3,1.3,1.3h2.83c.1,.25,.21,.49,.32,.73l-2.02,2.02c-.24,.24-.38,.57-.38,.92s.14,.68,.38,.92l4.24,4.24c.49,.49,1.35,.49,1.84,0l2.11-2.11c.21,.09,.42,.18,.64,.26v2.99c0,.72,.58,1.3,1.3,1.3h6c.72,0,1.3-.58,1.3-1.3v-2.99c.22-.08,.43-.17,.64-.26l2.11,2.11c.24,.24,.57,.38,.92,.38s.68-.14,.92-.38l4.24-4.24c.24-.24,.38-.57,.38-.92s-.14-.68-.38-.92l-2.02-2.02c.12-.24,.22-.48,.32-.73h2.83c.72,0,1.3-.58,1.3-1.3v-6c0-.72-.58-1.3-1.3-1.3Zm-1.3,6h-2.45c-.57,0-1.07,.37-1.24,.91-.22,.7-.52,1.37-.89,2-.3,.51-.22,1.16,.2,1.58l1.78,1.78-2.4,2.4-1.85-1.85c-.41-.41-1.04-.5-1.55-.22-.6,.33-1.25,.59-1.92,.77-.57,.15-.96,.67-.96,1.25v2.64h-3.4v-2.64c0-.59-.39-1.1-.96-1.25-.67-.18-1.31-.44-1.92-.77-.51-.28-1.14-.19-1.55,.22l-1.85,1.85-2.4-2.4,1.78-1.78c.42-.42,.5-1.07,.2-1.58-.37-.63-.67-1.3-.89-2-.17-.54-.67-.91-1.24-.91H3.03v-3.4h2.32c.59,0,1.11-.4,1.26-.98,.19-.75,.48-1.48,.84-2.16,.27-.5,.18-1.12-.23-1.53l-1.59-1.6,2.4-2.4,1.53,1.53c.42,.42,1.07,.5,1.58,.2,.68-.4,1.42-.72,2.21-.94,.56-.16,.95-.67,.95-1.25V3.28h3.4v2.14c0,.58,.39,1.09,.95,1.25,.78,.22,1.53,.53,2.22,.93,.51,.29,1.15,.21,1.57-.2l1.53-1.52,2.4,2.4-1.6,1.6c-.41,.41-.5,1.04-.22,1.54,.36,.67,.65,1.39,.84,2.15,.15,.57,.67,.98,1.26,.98h2.32v3.4Z"/></svg>
                <span className={styles.mph__spn_t}>Settings</span>
              </div>
            </Link>
            <div className={styles.worrr__span} onClick={logoutFunc}>
              <svg id="a" className={styles.sidebar__inner_svg} width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M25.3,21v6c0,1.82-1.48,3.3-3.3,3.3H10c-1.82,0-3.3-1.48-3.3-3.3V4c0-1.82,1.48-3.3,3.3-3.3h12c1.82,0,3.3,1.48,3.3,3.3v7c0,.72-.58,1.3-1.3,1.3s-1.3-.58-1.3-1.3V4c0-.39-.31-.7-.7-.7H10c-.39,0-.7,.31-.7,.7V27c0,.39,.31,.7,.7,.7h12c.39,0,.7-.31,.7-.7v-6c0-.72,.58-1.3,1.3-1.3s1.3,.58,1.3,1.3Zm5.91-4.55c.11-.29,.11-.61,0-.9-.02-.05-.04-.09-.06-.13-.02-.05-.04-.1-.07-.14l-2-3c-.4-.6-1.21-.76-1.8-.36-.6,.4-.76,1.21-.36,1.8l.65,.98h-11.57c-.72,0-1.3,.58-1.3,1.3s.58,1.3,1.3,1.3h11.57l-.65,.98c-.4,.6-.24,1.4,.36,1.8,.22,.15,.47,.22,.72,.22,.42,0,.83-.2,1.08-.58l2-3s.04-.09,.07-.14c.02-.04,.04-.08,.06-.13Z"/></svg>
              <span className={styles.mph__spn_t}>Logout</span>
            </div>
          </div>
          )}
          {/* more modal */}

          <MoreSvg />
          <span className={styles.span_data_sidebar}>More</span>
        </div>
      </div>
      {/* More */}
    </div>
  );
};

export default LeftSidebar;
