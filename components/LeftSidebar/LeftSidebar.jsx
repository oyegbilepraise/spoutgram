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
        <svg id="a" className={styles.sidebar__svg} width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M16,14c3.58,0,6.5-2.92,6.5-6.5s-2.92-6.5-6.5-6.5-6.5,2.92-6.5,6.5,2.92,6.5,6.5,6.5Zm0-11c2.48,0,4.5,2.02,4.5,4.5s-2.02,4.5-4.5,4.5-4.5-2.02-4.5-4.5,2.02-4.5,4.5-4.5Zm12,25v2c0,.55-.45,1-1,1s-1-.45-1-1v-2c0-5.51-4.49-10-10-10s-10,4.49-10,10v2c0,.55-.45,1-1,1s-1-.45-1-1v-2c0-6.62,5.38-12,12-12s12,5.38,12,12Z"/></svg>
        <span className={styles.span_data_sidebar}>Profile</span>
      </div>
      {/* More */}

      {/* More */}
      <div onClick={handleShowMore}>
        <svg id="a" className={styles.sidebar__svg} width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M30,8v-3c0-.55-.45-1-1-1H6c-2.76,0-5,2.24-5,5V25c0,1.65,1.35,3,3,3H28c1.65,0,3-1.35,3-3V9c0-.55-.45-1-1-1ZM6,6H28v2H3.17c.41-1.16,1.53-2,2.83-2ZM29,25c0,.55-.45,1-1,1H4c-.55,0-1-.45-1-1V10H29v15Z"/><circle cx="25" cy="18" r="2"/></svg>
        <span className={styles.span_data_sidebar}>Wallet</span>
      </div>
      {/* More */}

      {/* More */}
      <div onClick={handleShowMore}>
        <svg id="a" className={styles.sidebar__svg} width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M24,19c-.55,0-1,.45-1,1v7c0,.55-.45,1-1,1H10c-.55,0-1-.45-1-1V4c0-.55,.45-1,1-1h12c.55,0,1,.45,1,1V12c0,.55,.45,1,1,1s1-.45,1-1V4c0-1.65-1.35-3-3-3H10c-1.65,0-3,1.35-3,3V27c0,1.65,1.35,3,3,3h12c1.65,0,3-1.35,3-3v-7c0-.55-.45-1-1-1Z"/><path d="M30.93,16.35c.08-.22,.08-.47,0-.69-.01-.04-.03-.07-.05-.1-.02-.04-.03-.07-.05-.11l-2-3c-.31-.46-.93-.58-1.39-.28-.46,.31-.58,.93-.28,1.39l.96,1.45h-12.13c-.55,0-1,.45-1,1s.45,1,1,1h12.13l-.96,1.45c-.31,.46-.18,1.08,.28,1.39,.17,.11,.36,.17,.55,.17,.32,0,.64-.16,.83-.45l2-3s.03-.07,.05-.11c.02-.03,.03-.06,.05-.1Z"/></svg>
        <span className={styles.span_data_sidebar}>Logout</span>
      </div>
      {/* More */}

      {/* More */}
      <div onClick={handleShowMore}>
        <svg id="a" className={styles.sidebar__svg} width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M28,6H4c-1.65,0-3,1.35-3,3v14c0,1.65,1.35,3,3,3H28c1.65,0,3-1.35,3-3V9c0-1.65-1.35-3-3-3ZM4,8H28c.55,0,1,.45,1,1v1H3v-1c0-.55,.45-1,1-1Zm25,5H3v-1H29v1Zm-1,11H4c-.55,0-1-.45-1-1V15H29v8c0,.55-.45,1-1,1Zm0-2c0,.55-.45,1-1,1h-6c-.55,0-1-.45-1-1s.45-1,1-1h6c.55,0,1,.45,1,1Zm-9,0c0,.55-.45,1-1,1h-2c-.55,0-1-.45-1-1s.45-1,1-1h2c.55,0,1,.45,1,1Z"/></svg>
        <span className={styles.span_data_sidebar}>Card</span>
      </div>
      {/* More */}

      {/* More */}
      <div onClick={handleShowMore}>
        <svg id="a" className={styles.sidebar__svg} width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M30,13c.55,0,1-.45,1-1v-3c0-.38-.21-.73-.55-.89L16.45,1.11c-.28-.14-.61-.14-.89,0L1.55,8.11c-.34,.17-.55,.52-.55,.89v3c0,.55,.45,1,1,1h2v13H2c-.55,0-1,.45-1,1v3c0,.55,.45,1,1,1H30c.55,0,1-.45,1-1v-3c0-.55-.45-1-1-1h-2V13h2ZM3,9.62L16,3.12l13,6.5v1.38H3v-1.38ZM19,26V13h3v13h-3Zm-9,0V13h3v13h-3Zm5-13h2v13h-2V13Zm-9,0h2v13h-2V13ZM29,29H3v-1H29v1Zm-3-3h-2V13h2v13Z"/></svg>
        <span className={styles.span_data_sidebar}>Banking</span>
      </div>
      {/* More */}

      {/* More */}
      <div onClick={handleShowMore}>
        <svg id="a" className={styles.sidebar__svg} width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M16,11c-2.76,0-5,2.24-5,5s2.24,5,5,5,5-2.24,5-5-2.24-5-5-5Zm0,8c-1.65,0-3-1.35-3-3s1.35-3,3-3,3,1.35,3,3-1.35,3-3,3Z"/><path d="M28.27,12.25h-.87c-.14-.43-.3-.85-.49-1.25l.59-.6c1.17-1.17,1.17-3.07,0-4.24l-1.42-1.41c-1.17-1.17-3.07-1.17-4.24,0l-.51,.51c-.43-.21-.88-.4-1.34-.56v-.71c0-1.65-1.35-3-3-3h-2c-1.65,0-3,1.35-3,3v.71c-.46,.16-.91,.35-1.34,.57l-.51-.51c-1.13-1.13-3.11-1.13-4.24,0l-1.42,1.41c-1.17,1.17-1.17,3.07,0,4.24l.6,.6c-.19,.41-.35,.82-.49,1.25h-.87c-1.65,0-3,1.35-3,3v2c0,1.65,1.35,3,3,3h1.04c.14,.37,.3,.74,.48,1.09l-.76,.76c-1.17,1.17-1.17,3.07,0,4.24l1.41,1.41c1.13,1.13,3.11,1.13,4.24,0l.84-.84c.33,.15,.66,.29,1,.41v1.2c0,1.65,1.35,3,3,3h2c1.65,0,3-1.35,3-3v-1.2c.34-.12,.68-.26,1-.41l.84,.84c1.13,1.13,3.11,1.13,4.24,0l1.41-1.41c1.17-1.17,1.17-3.07,0-4.24l-.76-.76c.18-.36,.34-.72,.48-1.09h1.04c1.65,0,3-1.35,3-3v-2c0-1.65-1.35-3-3-3Zm1,5c0,.55-.45,1-1,1h-1.75c-.44,0-.82,.28-.95,.7-.22,.72-.53,1.41-.92,2.06-.23,.39-.17,.89,.15,1.22l1.29,1.29c.39,.39,.39,1.02,0,1.41l-1.41,1.41c-.38,.38-1.04,.38-1.41,0l-1.36-1.36c-.31-.31-.8-.38-1.19-.17-.62,.34-1.29,.61-1.98,.8-.43,.12-.74,.51-.74,.96v1.94c0,.55-.45,1-1,1h-2c-.55,0-1-.45-1-1v-1.94c0-.45-.3-.85-.74-.96-.69-.19-1.36-.46-1.98-.8-.15-.08-.32-.12-.48-.12-.26,0-.51,.1-.71,.29l-1.36,1.36c-.38,.38-1.04,.38-1.41,0l-1.41-1.41c-.39-.39-.39-1.02,0-1.41l1.29-1.29c.32-.32,.39-.82,.15-1.22-.38-.65-.69-1.34-.92-2.06-.13-.42-.52-.7-.95-.7h-1.75c-.55,0-1-.45-1-1v-2c0-.55,.45-1,1-1h1.62c.46,0,.86-.31,.97-.75,.2-.78,.49-1.53,.86-2.23,.21-.39,.14-.86-.17-1.18l-1.1-1.1c-.39-.39-.39-1.02,0-1.41l1.42-1.41c.38-.38,1.04-.38,1.41,0l1.04,1.04c.32,.32,.82,.39,1.22,.15,.7-.41,1.47-.74,2.28-.97,.43-.12,.73-.51,.73-.96v-1.44c0-.55,.45-1,1-1h2c.55,0,1,.45,1,1v1.44c0,.45,.3,.84,.73,.96,.8,.23,1.57,.55,2.29,.96,.39,.23,.88,.16,1.21-.16l1.04-1.03c.39-.39,1.02-.39,1.41,0l1.42,1.41c.39,.39,.39,1.02,0,1.41l-1.11,1.11c-.31,.31-.38,.8-.17,1.19,.38,.69,.67,1.44,.87,2.22,.11,.44,.51,.75,.97,.75h1.62c.55,0,1,.45,1,1v2Z"/></svg>
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
          <Link href={`${user?.data?.username}`}>
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
