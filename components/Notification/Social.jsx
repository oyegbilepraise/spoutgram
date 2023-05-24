import styles from "@/layout/HomeLayout/HomeLayout.module.css";
import imgOne from "../../images/me.jpeg";
import Image from "next/image";
import { useEffect, useState } from "react";
import { socialNotificationAction } from "@/redux/slices/notificationSlice/notificationSlice";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "..";
import { getAllUsersAction } from "@/redux/slices/userDetailSlice";

const Social = () => {
  const dispatch = useDispatch({});
  const {loading, appError, data: {data}} = useSelector(state=>state.notification.notification);
  useEffect(()=>{
      dispatch(getAllUsersAction())
      dispatch(socialNotificationAction())
  }, [dispatch])
  // console.log(data)



  if(loading){
    return<>
    <div >
        <h3>Loading...</h3>
    </div>
    </>
  }


  return (
    <div
      id="columnOne"
      data-tag="social-notification"
      className={styles.npd_body_content}
    >
      {
        data?.length? (
          <div >
            {/* follow */}
            {
              data?.filter((item)=>item.notification===1)?.map((notif)=>{
                return (
                    <div className={`${styles.npd_toast} ${styles.npd_f_notif}`}>
                      <div className={styles.hold_them}>
                        <div>
                          <Image src={!!notif?.user?.profilePhoto ? notif?.user?.profilePhoto : imgOne} className={styles.npd_toast_png} width={50} height={50}/>
                        </div>
                        <div className={`${styles.float_nicn} ${styles.fncn}`}>
                          {/* <img
                            src="/images/utility icon/followed.svg"
                            className={styles.npd_notf_icnxxx}
                          /> */}
                        </div>
                      </div>
                      <div>
                        <div>
                          <h6 className={styles.notf_title} >
                            <span style={notif?.notification_type!==1 ?{display: "none"}: {}}>You have a new follower!</span>
                            <span style={notif?.notification_type!==2 ?{display: "none"}: {}}>{notif?.user?.username}&nbsp;Liked your post!</span>
                          </h6>
                        </div>
                        <div>
                          <span style={notif?.notification_type!==1 ?{display: "none"}: {}}><a href="" >@username</a> now follows you.</span>
                          <span style={notif?.notification_type!==2 ?{display: "none"}: {}}>"{notif?.post?.desc}"</span>
                        </div>
                      </div>
                    </div>
                )
              })
            }

            {/* liked */}
            <div className={`${styles.npd_toast} ${styles.active_notification}`}>
              <div className={styles.hold_them}>
                <div>
                  <Image
                    src={imgOne}
                    className={styles.npd_toast_png}
                  />
                </div>
                <div className={styles.float_nicn}>
                  {/* <img src="/images/utility icon/favorite.svg" className={styles.notf_title} /> */}
                </div>
              </div>
              <div>
                <div>
                  <h6 className={styles.notf_title}>
                    <span>Username</span>&nbsp;Liked your post!
                  </h6>
                </div>
                <div>
                  <h6 className={styles.notf_contnt}>
                    "This is the way it is going to work from now trust me, we are going
                    to make this work for real"
                  </h6>
                </div>
              </div>
            </div>

            {/* repost */}
            <div className={styles.npd_toast}>
              <div className={styles.hold_them}>
                <div>
                  <Image
                    src={imgOne}
                    className={styles.npd_toast_png}
                  />
                </div>
                <div className={styles.float_nicn}>
                  {/* <img src="/images/utility icon/repost.svg" className={styles.npd_notf_icn} /> */}
                </div>
              </div>
              <div>
                <div>
                  <h6 className={styles.notf_title}>
                    <span>Username</span>&nbsp;Reposted your post!
                  </h6>
                </div>
                <div>
                  <h6 className={styles.notf_contnt}>
                    "This is the way it is going to work from now trust me, we are going to
                    make this work for real"
                  </h6>
                </div>
              </div>
            </div>
          </div>
        ):(
          // {/* no social notification */}
          <div className={styles.nbyd} style={{display:"block"}}>
            <div>
              <svg
                className={styles.nbyd__svg}
                width={16}
                height={18}
                viewBox="0 0 16 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke="rgb(200, 200, 200)"
                  d="M14.7332 7.14598L15.1512 14.2H0.848811L1.26683 7.14599C1.47802 3.58206 4.42982 0.8 8 0.8C11.5702 0.8 14.522 3.58205 14.7332 7.14598Z"
                  strokeWidth="1.6"
                />
                <path
                  stroke="rgb(200, 200, 200)"
                  d="M7.99989 17.35C6.46431 17.35 5.20695 16.1588 5.10149 14.65H10.8983C10.7928 16.1588 9.53548 17.35 7.99989 17.35Z"
                  strokeWidth="1.3"
                />
              </svg>
              <div>
                <span className={styles.nby_txt}>No social notifications yet.</span>
              </div>
            </div>
          </div>
          // {/* no social notification */}

        )
      }


    </div>
  );
};

export default Social;
