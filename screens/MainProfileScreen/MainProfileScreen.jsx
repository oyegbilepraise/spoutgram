import { HomeLayout } from '@/layout'
import Image from 'next/image'
import img from '../../images/default-photo.svg'
import ProfileOverview from "@/components/ViewProfile/ProfileOverview";
import Gallery from "@/components/ViewProfile/Gallery";
import Post from "@/components/ViewProfile/Post";
import PodCast from "@/components/ViewProfile/PodCast";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";
import styles from '@/layout/HomeLayout/HomeLayout.module.css'

const MainProfileScreen = () => {

  const router = useRouter();
  const [currentTab, setCurrentTab] = useState("/");
  const { userId } = router.query;

  //   get the current tab
  useEffect(() => {
    const { tab } = router.query;
    if (tab) {
      setCurrentTab(tab);
    } else {
      setCurrentTab("/");
    }
  }, [router.query.tab]);

  return (
    <HomeLayout>
      {/* div.timeline -> middle */}
      <div class={`${styles.timeline} ${styles._000middlebar}`}>

        <nav className={styles.___main_nav}>
          <div>
            <span class={styles.icon_back}>
              <svg class={styles._00_history__back} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(90, 90, 90)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H6M12 5l-7 7 7 7" /></svg>
            </span>
            {/* <span class={styles.not_home_nav_text}>Bookmarks</span>
                    <span class={styles.data_count_bookm}>
                        0 post
                    </span> */}
            <span style={{ color: "transparent" }}>hidden</span>
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
        {currentTab === "/" && <Post />}
        {/* post container */}
        {/* gallery container */}
        {/* Media */}
        {currentTab === "gallery" && <Gallery />}
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