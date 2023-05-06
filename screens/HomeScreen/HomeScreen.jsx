import { HomeLayout } from "@/layout";
import Image from "next/image";
import img from "../../images/default-photo.svg";
import styles from "@/layout/HomeLayout/HomeLayout.module.css";
import Post from "@/components/Home/Post";
import { useState } from "react";

import Link from "next/link";

const HomeScreen = (props) => {
  const { user } = props
  const [showPostSettings, setShowPostSettings] = useState(false); 

  return (
    <HomeLayout>
      <div className={`${styles.timeline} ${styles._000middlebar}`}>
        <nav className={styles.___main_nav}>
          <span>Home</span>
        </nav>

        <div className={styles.whats_yyy}>
          <div className={styles.parnt__cnt_wyyyt}>
            <div className={styles.inipic_xyz}>
              <Image alt="img" className={styles.img__winipc} src={img} />
            </div>
            <div className={styles.ini__inp}>
              <Link href="/createpost">
                <input
                  type="text"
                  className={styles.disbld__inp__post}
                  placeholder="What's in the Spotlight?"
                  disabled
                />
              </Link>
              <Link href="/createpost">
                <button className={styles.inp__create__btn}>
                  Create
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={17}
                    height={17}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fff"
                    strokeWidth={3}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{
                      position: "absolute",
                      right: "10px",
                      top: "9px",
                    }}
                  >
                    <line x1={12} y1={5} x2={12} y2={19} />
                    <line x1={5} y1={12} x2={19} y2={12} />
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* compose post */}

        {/* post */}
        <Post count={3} />
        {/* post */}
      </div>
    </HomeLayout>
  );
};

export default HomeScreen;
