import { ProfileLayout } from "@/layout";
import banner from "../../images/banner.jpg";
import styles from "@/layout/HomeLayout/HomeLayout.module.css";
import Gallery from "@/components/ViewProfile/Gallery";
import Post from "@/components/ViewProfile/Post";
import PodCast from "@/components/ViewProfile/PodCast";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";
import ProfileOverview from "@/components/ViewProfile/ProfileOverview";

const ProfileScreen = () => {
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
    <ProfileLayout>
      {/* Profile Overview  */}
      <ProfileOverview />

      {/* Tabs  */}
      <div
        className={`${styles.column_nav_menu_profile} ${styles.profile_nav__forPrf} ${styles.another__class}`}
      >
        <div className={styles.p_n_m_content}>
          <div className={styles.p_n_m_c_div} id="menuOne">
            <h6
              className={`${styles.n_m_text} ${
                currentTab === "/" ? styles.active_n_m_text : ""
              }`}
              id="textOne"
            >
              <Link href={`/${userId}`}>Post</Link>
            </h6>
          </div>
          <div className={styles.p_n_m_c_div} id="menuTwo">
            <h6
              className={`${styles.n_m_text} ${
                currentTab === "gallery" ? styles.active_n_m_text : ""
              }`}
              id="textTwo"
            >
              <Link href={`/${userId}?tab=gallery`}>Gallery</Link>
            </h6>
          </div>
          <div className={styles.p_n_m_c_div} id="menuThree">
            <h6
              className={`${styles.n_m_text} ${
                currentTab === "podcast" ? styles.active_n_m_text : ""
              }`}
              id="textThree"
            >
              <Link href={`/${userId}?tab=podcast`}>Podcast</Link>
            </h6>
          </div>
          <div className={styles.p_n_m_c_div} id="menuFourth">
            <h6
              className={`${styles.n_m_text} ${
                currentTab === "paid" ? styles.active_n_m_text : ""
              }`}
              id="textFour"
            >
              <Link href={`/${userId}?tab=paid`}>Paid (567)</Link>
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
    </ProfileLayout>
  );
};

export default ProfileScreen;
