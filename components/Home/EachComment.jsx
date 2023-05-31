import React, { useContext, useEffect, useState } from "react";
import styles from "@/layout/HomeLayout/HomeLayout.module.css";
import Image from "next/image";
import ImageCarousels from "../../components/Home/ImageCarousels";
import PostedAt from "@/components/PostedAt/postedAt";
import defaultImg from "../../images/default-photo.svg";
import Link from "next/link";
import img from '../../images/default.jpeg'
import { useDispatch, useSelector } from "react-redux";
import { SocketContext } from "@/redux/context/socket";
import { likeCommentAction, replyCommentAction } from "@/redux/slices/commentSlice/commentSlice";
import { useFormik } from "formik";
const EachComment = ({ comment, individualPost, route }) => {
  const dispatch = useDispatch();
  const socket = useContext(SocketContext);
  const [commentId, setCommentId] = useState(comment?._id);
  const [likes, setLikes] = useState(comment?.likes);
  //   const [bookmarks, setBookmarks] = useState(comment.bookmarks);
  //   const [_views, set_Views] = useState(comment.view);
  const { user, apiError } = useSelector((state) => state?.auth?.getUser);

   const [isLiked, setIsLiked] = useState(
    comment?.likes?.includes(user?.data?._id)
  );
  //   const isBookmarked = comment.bookmarks.includes(user?.data?._id)
  //   const isViewed = comment.view.includes(user?.data?._id)

  console.log({ comment });

  //   const handlecommentView = async (inView, comment, entry) => {
  //     if (inView && !isViewed) {
  //       const res = await dispatch(setViews(comment._id))
  //       set_Views(res.payload.data.view);
  //     }
  //   }

    const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleLike = async () => {
    try {
      const res = await dispatch(likeCommentAction(commentId));
      console.log(res.payload.data);
      setLikes(res.payload.data);
    } catch (error) {
      console.log({ error });
    }
  };
  useEffect(() => {
    socket.on(commentId, (data) => {
      if (data.data.type === "like") {
        setLikes(data.data.count);
      }
      //   else if (data.data.type === 'view') {
      //     set_Views(data.data.count)
      //   }
    });
  }, [socket]);

    // Function to handle image upload
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setImage(file);
    formik.values.image = file;
  };

  // Function to handle image removal
  const handleImageRemove = () => {
    setImage(null);
    formik.values.image = null;
  };

  useEffect(() => {
    setIsLiked(likes?.includes(user?.data?._id));
  }, [likes]);

    // Function for sending reply
  const formik = useFormik({
    initialValues: { text: "", image: null },
    onSubmit: async(values) => {
      const formData = new FormData();
      console.log(values);
      formData.append("text", values.text);
      formData.append("image", values.image);
      formData.append("comment", commentId);
      const res = await dispatch(replyCommentAction(formData));
      if (res?.payload?.success) {
      values.text = "";
      values.image = "";
      setIsModalOpen(false);
      setImage(null);
      }
    },
  });

  return (
    <div className={`${styles.div} ${styles.data_content}`}>
      {" "}
      <div style={{ position: "relative" }}>
        <div className={styles.hover_main_image}>
          <Image
           src={ Array.isArray(comment?.user)?
              (comment?.user[0]?.profilePhoto == ""
                ? defaultImg
                : comment?.user[0]?.profilePhoto):(comment?.user?.profilePhoto == ""
                ? defaultImg
                : comment?.user?.profilePhoto)
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
             {Array.isArray(comment?.user)?<div>{comment?.user[0]?.name}
              <span>@{comment?.user[0]?.username}</span></div>:<div>{comment?.user?.name}
              <span>@{comment?.user?.username}</span></div>}
              <span
                style={{
                  display: "inline",
                  marginLeft: "12px",
                  fontSize: "",
                }}
                className={styles._000_dt_data}
              >
                {/* <PostedAt time={comment?.createdAt} /> */}
              </span>
            </span>
          </div>
          <div>
            <span className={styles._000_dt_data} style={{ fontSize: "16px" }}>
              Replying{" "}
              <span style={{ color: "var(--brand-color)" }}>
                @{individualPost?.user[0]?.username}
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
        {route?.one ? <Link href={`${route.one}${comment?._id}`}>
            <span className={`${styles._ttl_contxt} ${styles._ttl_contxt__pp}`}>
              {comment?.text}
            </span>
            {comment?.images.length > 0 && (
              <ImageCarousels postImage={comment?.images} />
            )}
          </Link>:<div>
            <span className={`${styles._ttl_contxt} ${styles._ttl_contxt__pp}`}>
              {comment?.text}
            </span>
            {comment?.images.length > 0 && (
              <ImageCarousels postImage={comment?.images} />
            )}
          </div>}
          
        </div>

        <div className={styles._00ftr_pst}>
          <span className={styles._00mn_span}>
            <span onClick={handleLike}>
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
          <span className={styles._00mn_span} onClick={openModal}>
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
            <span className={styles._00mn_spn_cnt}>
              {comment?.reply > 0 && comment?.reply}
            </span>
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


       {/* this is the comment modal */}
      {isModalOpen && (
        <div className={styles.home_post__yyy_commt}>
          <div className={styles.commnt_qqq_aa}>
            <div className={styles.modal_inner}>

              {/* close button */}
              <svg onClick={closeModal} className={styles.close_hm_reply} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"></path></svg>
              {/* close button */}

              <div className={styles.wdyynait} style={{ display: "flex", marginBottom: "30px" }}>
                <div>
                  <Link href="/penuel">
                     <Image
          src={
              comment?.user?.profilePhoto == ""
                ? defaultImg
                : comment?.user?.profilePhoto
            }
          alt="img"
          className={styles.replly_img_authr} priority
          width="22"
          height="22"
        />
                  </Link>
                  <div className={styles.line_border_yy}></div>
                </div>
                <div>
                  <span className={styles._0022_nm_usr}>
            {comment?.user?.name}
              <span>@{comment?.user?.username}</span>
          </span>
                  <div>
                    <span className={`${styles._ttl_contxt} ${styles._ttl_contxt_reply}`}>
                      {comment?.text?.length > 150 ?
                        `${comment?.text?.substring(
                              0,
                              150
                            )}...`
                      : 
                        comment?.text
                      }
                    </span>
                    <p>
                    {comment?.images?.length>0 && comment?.images?.map((pic,id)=>{
                    return(<div key={id}>
                    <Link style={{color:'blue'}} href={pic}>{pic?.length > 50 ?`${pic?.substring(
                              0,
                              50
                            )}...`:pic}</Link>
                    </div>
                    )
                    }
                    )
                    }
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.wdyynait} style={{ display: "flex" }}>
                <div>
                  <Link href="/penuel">
                    <Image src={user?.data?.profilePhoto==""?img:user?.data?.profilePhoto} alt="img" className={styles.replly_img_authr} priority />
                  </Link>
                </div>
               <form onSubmit={formik.handleSubmit}>
                <div>
                
                  <span className={styles._0022_nm_usr}>
                    Replying to
                    <span style={{ color: "#a199fb" }}>@{comment?.user?.username}</span>
                  </span>
                  <div>
                    <textarea  name="text"
                      id=""
                      onChange={formik.handleChange}
                      value={formik.values.text}
                      onBlur={formik.handleBlur} placeholder="What's your reply?" className={styles.textarea_reply_qq}></textarea>
                  </div>

                  {image && (
                    <div style={{ position: "relative" }}>
                      <img src={URL.createObjectURL(image)} className={styles.img_reply_hm} alt="img" priority />
                      <svg onClick={handleImageRemove} className={styles.close_pic_reply_yxyx} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 10.5858L9.17157 7.75736L7.75736 9.17157L10.5858 12L7.75736 14.8284L9.17157 16.2426L12 13.4142L14.8284 16.2426L16.2426 14.8284L13.4142 12L16.2426 9.17157L14.8284 7.75736L12 10.5858Z"></path></svg>
                    </div>
                  )}

                  <div style={{ position: "relative" }}>
                    <svg onClick={() => document.getElementById("fileInput").click()} style={{ fill: "#a199fb", width: "22px", height: "22px", cursor: "pointer", marginTop: "5px" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 11.1005L7 9.1005L12.5 14.6005L16 11.1005L19 14.1005V5H5V11.1005ZM5 13.9289V19H8.1005L11.0858 16.0147L7 11.9289L5 13.9289ZM10.9289 19H19V16.9289L16 13.9289L10.9289 19ZM4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM15.5 10C14.6716 10 14 9.32843 14 8.5C14 7.67157 14.6716 7 15.5 7C16.3284 7 17 7.67157 17 8.5C17 9.32843 16.3284 10 15.5 10Z"></path></svg>
                    <input
                      type="file"
                      id="fileInput"
                      accept="image/jpg, image/jpeg, image/png"
                      onChange={handleImageUpload}
                      style={{ display: "none" }}
                    />

                    <button className={styles.reply__hm_btn} type="submit">Reply</button>
                  </div>
                </div>
               </form>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* this is the comment modal */}
    </div>
  );
};

export default EachComment;
