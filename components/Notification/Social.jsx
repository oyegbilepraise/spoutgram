import styles from "@/layout/HomeLayout/HomeLayout.module.css";
import imgOne from "../../images/default.jpeg";
import Image from "next/image";
import { useEffect, useState } from "react";
import { readNotificationAction, socialNotificationAction } from "@/redux/slices/notificationSlice/notificationSlice";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsersAction } from "@/redux/slices/userDetailSlice";
import { useRouter } from "next/router";
import Routes from "@/utils/routes";
const Social = () => {
  const dispatch = useDispatch({});
  const router = useRouter({});
  const {loading, appError, data} = useSelector(state=>state.notification.notification);
  useEffect(()=>{
      dispatch(getAllUsersAction())
      dispatch(socialNotificationAction())
  }, [dispatch])

  const goToPost=({type, postId, username, id})=>{
    dispatch(readNotificationAction(id));
    if(type == 1){
      router.push(`/${username}`)
    }
    if(type ===2 || type ===3){
      router.push(`${Routes.EACHPOST}${postId}`);
    }
  }

  if(loading){
    return<>
    <div >
        <h3 style={{padding: '4vh'}}>Loading...</h3>
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
            {
              data?.filter((item)=>item.notification===1)?.map((notif, index)=>{
                return (
                    <div className={`${styles.npd_toast} ${styles.npd_f_notif}`} onClick={()=>goToPost({type: notif.notification_type, postId: notif?.post?._id, username: notif?.user?.username, id: notif?._id})} key={index}>
                      <div className={styles.hold_them}>
                        <div>
                          <Image src={!!notif?.user?.profilePhoto ? notif?.user?.profilePhoto : imgOne} className={styles.npd_toast_png} width={50} height={50} alt="profile"/>
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
                            <span >
                              {
                                //notification title
                                notif?.notification_type==1? //follow
                                (`You have a new follower`): 
                                notif?.notification_type==2? //like
                                (<>{notif?.user?.username}&nbsp;Liked your post!</>): 
                                notif.notification_type==3? //repost
                                (`${notif?.user?.username} Reposted your post`):
                                ("")
                              }
                            </span>
                          </h6>
                        </div>
                        <div>
                              <span >
                              {
                                //notification contents
                                notif?.notification_type==1? //follow
                                (<><a href="" >{`@${notif?.user?.username}` ?? `@username`}</a> now follows you.</>):
                                notif?.notification_type==2 || notif.notification_type==3? //like and repost
                                (<>"{notif?.post?.desc}"</>): 
                                ("")
                              }
                            </span>
                        </div>
                      </div>
                    </div>
                )
              })
            }
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
