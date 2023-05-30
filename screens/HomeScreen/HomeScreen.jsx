import { HomeLayout } from "@/layout";
import Image from "next/image";
import img from '../../images/default.jpeg' 
import styles from "@/layout/HomeLayout/HomeLayout.module.css";
import Post from "@/components/Home/Post";
import { useContext, useEffect, useState, } from "react"; 
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import { getAllPostsAction } from "@/redux/slices/postSlice/postSlice";
import { SocketContext } from "../../redux/context/socket.js";
import { getAllUsersAction } from "@/redux/slices/userDetailSlice";

const HomeScreen = (props) => {
  const { user } = props
  const socket = useContext(SocketContext);

  const dispatch = useDispatch()
  
  const token = Cookies.get("token");
  const { loading, apiError, posts } = useSelector(
    (state) => state?.post?.allPosts
  );

  useEffect(() => {
    dispatch(getAllPostsAction(token));
    console.log(user);
    // socket.emit("NEW_USER_ONLINE",user._id)
  }, []);

  return (
    <HomeLayout>
      <div className={`${styles.timeline} ${styles._000middlebar}`}>
        <nav className={styles.___main_nav} style={{borderBottom: "transparent"}}>
          <div>
            <span>Home</span>

            {/* showing the new post */}
            <div className={styles.show_new_post_ldr}>
              <div style={{position: "relative"}}>
                <svg className={styles.pointr_up_svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12.9999 7.82843V20H10.9999V7.82843L5.63589 13.1924L4.22168 11.7782L11.9999 4L19.778 11.7782L18.3638 13.1924L12.9999 7.82843Z"></path></svg>
                <span className={styles.bb_nn_mm}>15 New Posts</span>
              </div>
            </div>
            {/* showing the new post */}

          </div>
        </nav>

        <div className={styles.whats_yyy}>
          <div className={styles.parnt__cnt_wyyyt}>
            <div className={styles.inipic_xyz}>
              <Link href={`${user?.data?.username}`}>
                <Image alt="img" className={styles.img__winipc} src={img} />
              </Link>
            </div>
            <div className={styles.ini__inp}>
              <Link href="/createpost">
                <input
                  type="text"
                  className={styles.disbld__inp__post}
                  placeholder="Compose a new post"
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
        <Post posts={posts?.data} loading={loading} />
        {/* post */}
      </div>
    </HomeLayout>
  );
};

export default HomeScreen;
