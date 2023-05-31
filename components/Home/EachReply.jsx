import React, { useContext, useEffect, useState } from "react";
import styles from "@/layout/HomeLayout/HomeLayout.module.css";
import Image from "next/image";
import ImageCarousels from "../../components/Home/ImageCarousels";
import PostedAt from "@/components/PostedAt/postedAt";
import defaultImg from "../../images/default-photo.svg";
import { useDispatch, useSelector } from "react-redux";
import { likeReplyAction } from "@/redux/slices/commentSlice/commentSlice";
import { SocketContext } from "@/redux/context/socket";

const EachReply = ({ reply,individualComment }) => {
  const dispatch = useDispatch();
 

  const socket = useContext(SocketContext);
  const [replyId, setReplyId] = useState(reply?._id);
  const [likes, setLikes] = useState(reply?.likes);
  //   const [bookmarks, setBookmarks] = useState(reply.bookmarks);
  //   const [_views, set_Views] = useState(reply.view);
  const { user, apiError } = useSelector((state) => state?.auth?.getUser);

  const [isLiked, setIsLiked] = useState(
    reply?.likes?.includes(user?.data?._id)
  );
  //   const isBookmarked = reply.bookmarks.includes(user?.data?._id)
  //   const isViewed = reply.view.includes(user?.data?._id)

  console.log(individualComment);

  //   const handlereplyView = async (inView, reply, entry) => {
  //     if (inView && !isViewed) {
  //       const res = await dispatch(setViews(reply._id))
  //       set_Views(res.payload.data.view);
  //     }
  //   }

  const handleLike = async () => {
    try {
      const res = await dispatch(likeReplyAction(replyId));
      console.log(res.payload.data);
      setLikes(res.payload.data);
    } catch (error) {
      console.log({ error });
    }
  };
  useEffect(() => {
    socket.on(replyId, (data) => {
      if (data.data.type === "like") {
        setLikes(data.data.count);
      }
      //   else if (data.data.type === 'view') {
      //     set_Views(data.data.count)
      //   }
    });
  }, [socket]);

  useEffect(() => {
    setIsLiked(likes?.includes(user?.data?._id));
  }, [likes]);

  return (
    <div className={`${styles.div} ${styles.data_content}`}>
      <div style={{ position: "relative" }}>
        <div className={styles.hover_main_image}>
          <Image
            src={ Array.isArray(reply?.user)?
              (reply?.user[0]?.profilePhoto == ""
                ? defaultImg
                : reply?.user[0]?.profilePhoto):(reply?.user?.profilePhoto == ""
                ? defaultImg
                : reply?.user?.profilePhoto)
            }
            alt="profile-img"
            className={styles.data_content_pimg}
            width="22"
            height="22"
          />
        </div>

        <div>
          <div>
            <span
              className={`${styles._0022_nm_usr} ${styles._0022_nm_usr__pp}`}
            >
            {Array.isArray(reply?.user)?<div>{reply?.user[0]?.name}
              <span> @{reply?.user[0]?.username}</span></div>:<div>{reply?.user?.name}
              <span> @{reply?.user?.username}</span></div>}
              
              <span
                style={{
                  display: "inline",
                  marginLeft: "12px",
                  fontSize: "",
                }}
                className={styles._000_dt_data}
              >
                {/* <PostedAt time={reply?.createdAt} /> */}
              </span>
            </span>
          </div>
          <div>
            <span className={styles._000_dt_data} style={{ fontSize: "16px" }}>
              Replying{" "}
              <span style={{ color: "var(--brand-color)" }}>
                @{individualComment?.data? individualComment?.data?.user?.username:individualComment?.user[0]?.username}
              </span>
            </span>
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            right: 0,
            top: "-3px",
          }}
        >
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

      <div
        className={`${styles.data_content_all} ${styles._00dca} ${styles.data_no_content}`}
      >
        <div>
          <span className={`${styles._ttl_contxt} ${styles._ttl_contxt__pp}`}>
            {reply?.text}
          </span>
          {reply?.images.length > 0 && (
            <ImageCarousels postImage={reply?.images} />
          )}
        </div>

        <div className={styles._00ftr_pst}>
          <span className={styles._00mn_span} onClick={handleLike}>
            <span>
              {isLiked ? (
                <svg
                  className={`${styles.x_icn_ftr} ${styles.likeheart}`}
                  style={{ fill: "#ff00ff" }}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={24}
                  height={24}
                >
                  <path fill="none" d="M0 0H24V24H0z" />
                  <path d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`${styles.red} ${styles.x_icn_ftr} ${styles.redheart} ${styles.post__heart}`}
                  viewBox="0 0 24 24"
                  width={24}
                  height={24}
                >
                  <path fill="none" d="M0 0H24V24H0z" />
                  <path
                    d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2zm-3.566 
                                            15.604c.881-.556 1.676-1.109 2.42-1.701C18.335 14.533 20 11.943 20 9c0-2.36-1.537-4-3.5-4-1.076 0-2.24.57-3.086 1.414L12 
                                            7.828l-1.414-1.414C9.74 5.57 8.576 5 7.5 5 5.56 5 4 6.656 4 9c0 2.944 1.666 5.533 4.645 7.903.745.592 1.54 1.145 2.421 
                                            1.7.299.189.595.37.934.572.339-.202.635-.383.934-.571z"
                  />
                </svg>
              )}
            </span>
            <span className={styles._00mn_spn_cnt}>
              {likes?.length > 0 && likes?.length}
            </span>
          </span>
          <span className={styles._00mn_span}>
            <span>
              <svg
                id="comment"
                className={`${styles.blue} ${styles.x_icn_ftr}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={24}
                height={24}
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M10 3h4a8 8 0 1 1 0 16v3.5c-5-2-12-5-12-11.5a8 8 0 0 1 8-8zm2 14h2a6 6 0 1 0 0-12h-4a6 6 0 0 0-6 6c0 3.61 2.462 5.966 8 8.48V17z" />
              </svg>
            </span>
            <span className={styles._00mn_spn_cnt}>10.1k</span>
          </span>
          <span className={styles._00mn_span}>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="repost"
                className={`${styles.green} ${styles.x_icn_ftr} ${styles.repostme}`}
                width={24}
                height={24}
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M8 20v1.932a.5.5 0 0 1-.82.385l-4.12-3.433A.5.5 0 0 1 3.382 18H18a2 2 0 0 0 2-2V8h2v8a4 4 0 0 1-4 4H8zm8-16V2.068a.5.5 0 0 1 .82-.385l4.12 3.433a.5.5 0 0 1-.321.884H6a2 2 0 0 0-2 2v8H2V8a4 4 0 0 1 4-4h10z" />
              </svg>
            </span>
            <span className={styles._00mn_spn_cnt}>2k</span>
          </span>
          <span className={styles._00mn_span}>
            <span>
              <svg
                id="postbookmarks"
                className={styles.x_icn_ftr}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={24}
                height={24}
              >
                {" "}
                <path fill="none" d="M0 0h24v24H0z">
                  {" "}
                </path>{" "}
                <path d="M5 2h14a1 1 0 0 1 1 1v19.143a.5.5 0 0 1-.766.424L12 18.03l-7.234 4.536A.5.5 0 0 1 4 22.143V3a1 1 0 0 1 1-1zm13 2H6v15.432l6-3.761 6 3.761V4z">
                  {" "}
                </path>
              </svg>
            </span>
            <span className={styles._00mn_spn_cnt}>2.5k</span>
          </span>
          <span className={styles._00mn_span}>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={styles.x_icn_ftr}
                viewBox="0 0 24 24"
                width={24}
                height={24}
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928L12 18.26zm0-2.292l4.247 2.377-.949-4.773 3.573-3.305-4.833-.573L12 5.275l-2.038 4.42-4.833.572 3.573 3.305-.949 4.773L12 15.968z" />
              </svg>
            </span>
            <span className={styles._00mn_spn_cnt}>1.1k</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default EachReply;
