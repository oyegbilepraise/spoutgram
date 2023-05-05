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
import { useSelector } from "react-redux";

const LeftSidebar = () => {
  const [showMore, setShowMore] = useState(false);
  const [showLogout, setShowLogout] = useState(false);

  const { user, apiError } = useSelector((state) => state?.auth?.getUser);
  // setUserDetails(user)
  console.log({ user });

  // const details = useSelector((state) => state)
  // console.log({ details });

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
  const logout = () => {
    Cookies.remove("token");
    router.push(Routes.LOGIN);
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
      <Link href="/podcasts" className={styles.Link}>
        <div className={isActive("/podcasts")}>
          <PodcastSvg />
          <span className={styles.span_data_sidebar}>Podcasts</span>
        </div>
      </Link>
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

      {/* Create */}
      <Link href="/createpost" className={styles.Link}>
        <div className={isActive("/createpost")}>
          <CreateSvg />
          <span className={styles.span_data_sidebar}>Create</span>
        </div>
      </Link>
      {/* Create */}

      {/* Profile */}
      <div className={styles.profile__fxd}>
        {showLogout && (
          <div className={styles.more_explained}>
            <Link href="/edit">
              <span className={styles.xmmx___stan}>Edit your profile</span>
            </Link>
            <span onClick={logout} className={styles.xmmx___stan}>
              Logout of this account
            </span>
          </div>
        )}

        <span>
          <Link href="/profile">
            <div className={styles.__user__data__hold}>
              <span className={styles.user__initial}>AV</span>
            </div>
          </Link>
        </span>
        <span className={`${styles.span_data_sidebar} ${styles.norms__ava}`}>
          {user?.data?.profile?.name}
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
