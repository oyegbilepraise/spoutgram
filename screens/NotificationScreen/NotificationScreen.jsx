import { HomeLayout } from "@/layout";
import Image from "next/image";
import img from "../../images/default-photo.svg";

import styles from "@/layout/HomeLayout/HomeLayout.module.css";
import Social from "@/components/Notification/Social";
import Payment from "@/components/Notification/Payment";
import Earnings from "@/components/Notification/Earnings";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";

const NotificationScreen = () => {
  const router = useRouter();
  const [currentTab, setCurrentTab] = useState("/");
  const pathname = router.pathname.split("/")[1];

    //   get the current tab
    useEffect(() => {
      const { tab } = router.query;
      if (tab) {
        setCurrentTab(tab);
      } else {
        setCurrentTab("/");
      }
    }, [router.query.tab]);


  
    const handleGoBack = () => {
      router.back(); // Go back to the previous page or route
    };

  return (
    <HomeLayout>
      {/* div.timeline -> middle */}
      <div className={`${styles.timeline} ${styles._000middlebar}`}>
        <nav className={styles.___main_nav}>
          <div>
            <span className={styles.icon_back} onClick={handleGoBack}>
              <svg
                className={styles._00_history__back}
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgb(90, 90, 90)"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 12H6M12 5l-7 7 7 7" />
              </svg>
            </span>
            <span className={styles.not_home_nav_text}>Notifications</span>
            <span className={styles.data_count_bookm}>0 unread</span>
          </div>
          <div className={styles.slice__selector}>
            {/*  */}
            <div className={styles.column_nav_menu_profile}>
              <div className={styles.p_n_m_content}>
                <div className={styles.p_n_m_c_div} id="menuOne">
                  <h6
                    className={`${styles.n_m_text} ${
                      currentTab === "/" && styles.active_n_m_text
                    }`}
                    id="textOne"
                  >
                    <Link href={"/notifications"}>Social</Link>
                  </h6>
                </div>
                <div className={styles.p_n_m_c_div} id="menuTwo">
                  <h6
                    className={`${styles.n_m_text} ${
                      currentTab === "payments" && styles.active_n_m_text
                    }`}
                    id="textTwo"
                  >
                    <Link href={"/notifications?tab=payments"}>Payments</Link>
                  </h6>
                </div>
                <div className={styles.p_n_m_c_div} id="menuThree">
                  <h6
                    className={`${styles.n_m_text} ${
                      currentTab === "earnings" && styles.active_n_m_text
                    }`}
                    id="textThree"
                  >
                    <Link href={"/notifications?tab=earnings"}>Earnings</Link>
                  </h6>
                </div>
              </div>
            </div>
            {/*  */}
          </div>
        </nav>
        {/* notifications */}
        {/* social notifications */}
        {pathname === "notifications" && currentTab === "/" && <Social />}

        {/* payments container */}
        {pathname === "notifications" && currentTab === "payments" && (
          <Payment />
        )}

        {/* earnings notification */}
        {pathname === "notifications" && currentTab === "earnings" && (
          <Earnings />
        )}
        {/* notifications */}
      </div>
      {/* div.timeline -> middle */}
    </HomeLayout>
  );
};

export default NotificationScreen;
