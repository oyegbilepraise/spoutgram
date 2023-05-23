import styles from "@/layout/HomeLayout/HomeLayout.module.css";
import img from '../../images/default-photo.svg'
import imgOne from '../../images/default.jpeg' 
import people1 from '../../images/people-1.jpeg'
import Image from "next/image";
import PostedAt from "../PostedAt/postedAt";
import { useDispatch, useSelector } from "react-redux";
import { followUser } from "@/redux/slices/postSlice/postSlice";
import Link from "next/link";

const ProfileImage = ({ post }) => {
  const { user, apiError } = useSelector((state) => state?.auth?.getUser);
  const dispatch = useDispatch();

  const isPostOwner = post?.user?._id === user?.data?._id

  const handleFollow = async () => {
    try {
      dispatch(followUser(post?.user?._id));
    } catch (error) {
      console.log({ error });
    }
  }
  return (
    <div style={{ position: "relative" }}>
      <div className={styles.hover_main_image}>
        <Link href={`${post?.user?.username}`}>
          <Image src={post?.user?.profilePhoto == '' ? imgOne : post?.user?.profilePhoto} alt="profile-img" fill className={styles.data_content_pimg}/>
        </Link>

        {/* hovercard */}

        {!isPostOwner && (
        <div className={styles.hover_card}>
          <div className={styles.flex_h_div}> 
            <div>
              {/* {{#if this.owner_avatar_link}} */}
              <Link href={`${post?.user?.username}`}>
              <Image src={post?.user?.profilePhoto == '' ? imgOne : post?.user?.profilePhoto} alt="img" 
              className={styles.image_h_c} fill />
              </Link>
            </div>
            <div>
              <span className={`${styles.postt_name} ${styles._0022_nm_usr}`}>
              <Link href={`${post?.user?.username}`}>
                {post?.user?.name}
              </Link>
              </span>
              <span className={styles.postt_uname_hover}>@{post?.user?.username}</span>
            </div> 
            {/* {{!  }} */}
          </div>
          <div>
            <span className={styles.xmoric} 
            style={{display: "flex", width: "max-content", marginTop: "11px"}}
            >
              <span className={`${styles.xoxtrn} ${styles.hovr__f}`} style={{display: "flex"}}>
                {post?.user?.followers.length}&nbsp;<span className={styles.xyxxn}>{post?.user?.followers.length < 2 ? "Follower" : "Followers"}</span>
              </span>
              <span className={`${styles.xoxtrn} ${styles.hovr__f}`} style={{display: "flex"}}>
                {post?.user?.following.length}&nbsp;<span className={styles.xyxxn}>Following</span>
              </span>
            </span>
          </div>
          <div>
            <span className={`${styles.user_data_about} ${styles.hovr__bio}`} style={{width: "100%"}}>
              For most startups, better shape tran slates into two things: to
              have a better product with more users, and to have more options
              for raising money.
            </span>
          </div>
          <div style={{marginTop: "5px"}}>
            <span className={styles.span__data__prfl}>
              <svg
                className={styles.xnprlf__icn}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12 20.8995L16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995ZM12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 15C9.79086 15 8 13.2091 8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15Z" />
              </svg>

              <span className={styles.pfl__data}>Miami, USA</span>
            </span>
          </div>
          <span className={styles.span__data__prfl}>
            <span style={{ display: "flex", marginRight: "25px" }}>
              <svg
                className={styles.xnprlf__icn}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                >
                <path d="M7 5V2C7 1.44772 7.44772 1 8 1H16C16.5523 1 17 1.44772 17 2V5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V6C2 5.44772 2.44772 5 3 5H7ZM4 16V19H20V16H4ZM4 14H20V7H4V14ZM9 3V5H15V3H9ZM11 11H13V13H11V11Z" />
              </svg>
              <span className={styles.pfl__data}>Creator</span>
            </span>

            <span style={{ display: "flex" }}> 
              <svg
                className={styles.xnprlf__icn}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M18.3643 15.5353L16.95 14.1211L18.3643 12.7069C20.3169 10.7543 20.3169 7.58847 18.3643 5.63585C16.4116 3.68323 13.2458 3.68323 11.2932 5.63585L9.87898 7.05007L8.46477 5.63585L9.87898 4.22164C12.6127 1.48797 17.0448 1.48797 19.7785 4.22164C22.5121 6.95531 22.5121 11.3875 19.7785 14.1211L18.3643 15.5353ZM15.5358 18.3638L14.1216 19.778C11.388 22.5117 6.9558 22.5117 4.22213 19.778C1.48846 17.0443 1.48846 12.6122 4.22213 9.87849L5.63634 8.46428L7.05055 9.87849L5.63634 11.2927C3.68372 13.2453 3.68372 16.4112 5.63634 18.3638C7.58896 20.3164 10.7548 20.3164 12.7074 18.3638L14.1216 16.9496L15.5358 18.3638ZM14.8287 7.75717L16.2429 9.17139L9.17187 16.2425L7.75766 14.8282L14.8287 7.75717Z" />
              </svg>
              <span className={`${styles.pfl__data} ${styles.user__link}`}>
                https://linktr.ee/xyz
              </span>
            </span>
          </span>
          <div className={styles.button__for__hover__div}>
              <>
              <div style={{ paddingRight: 5 }}>
                <button
                  className={`${styles.fllw_hvr_btn} ${styles.follow__hvr}`} onClick={handleFollow}
                >
                  Follow
                </button>
              </div>
              <div style={{ paddingLeft: 5 }}>
                <button className={`${styles.fllw_hvr_btn} ${styles.msg__hvr}`}>
                  Message
                </button>
              </div>
              </>
          </div>
        </div>
        )}
        
        {/* hovercard */}

      </div>

      <div>
        <div>
          <span className={styles._0022_nm_usr}>
            <Link href={`${post?.user?.username}`}>
            {post?.user?.name}
            </Link>
            <span>@{post?.user?.username}</span>
          </span>
        </div>
        <div>
          <span className={styles._000_dt_data}>
            <PostedAt time={post?.createdAt} />
          </span>
        </div>
      </div>

      <div style={{ position: "absolute", right: 0, top: "-3px" }}>
        <svg
          width={15}
          height={4}
          viewBox="0 0 18 4"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx={2}
            cy={2}
            r="1.2"
            fill="gray"
            stroke="gray"
            strokeWidth="1.6"
          />
          <circle
            cx={9}
            cy={2}
            r="1.2"
            fill="gray"
            stroke="gray"
            strokeWidth="1.6"
          />
          <circle
            cx={16}
            cy={2}
            r="1.2"
            fill="gray"
            stroke="gray"
            strokeWidth="1.6"
          />
        </svg>
      </div>
    </div>
  );
};

export default ProfileImage;