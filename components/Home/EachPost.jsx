import styles from "@/layout/HomeLayout/HomeLayout.module.css";
import ProfileImage from "./ProfileImage";
import ImageCarousels from "./ImageCarousels";
import { useDispatch, useSelector } from "react-redux";
import {
  dislikePostAction,
  likePostAction,
  repostAction,
  setViews,
} from "@/redux/slices/postSlice/postSlice";
import { AiOutlineDislike } from "react-icons/ai";
import { useContext, useEffect, useState } from "react";
import { SocketContext } from "../../redux/context/socket.js";
import Link from "next/link";
import { InView } from "react-intersection-observer";
import HomeVideo from "../VideoUpload/HomeVideo";
import Image from "next/image";
import img from '../../images/default.jpeg' 
import { bookmarkAction } from "@/redux/slices/postSlice/postSlice";

const EachPost = ({ post, route }) => {
  const dispatch = useDispatch();
  const socket = useContext(SocketContext);
  const [postId, setPostId] = useState(post._id);
  const [likes, setLikes] = useState(post?.post[0]?.likes);
  const [disLikes, setDisLikes] = useState(post?.post[0]?.dislikes);
  const [bookmarks, setBookmarks] = useState(post?.post[0]?.bookmarks);
  const [more, setMore] = useState(false);
  const [_views, set_Views] = useState(post?.post[0]?.view);
  const { user, apiError } = useSelector((state) => state?.auth?.getUser);

  useEffect(() => {
    if (post) {
    }
  }, [post]);

  const [isLiked, setisLiked] = useState(
    post?.post[0]?.likes?.includes(user?.data?._id)
  );
  const isBookmarked = post?.post[0]?.bookmarks.includes(user?.data?._id);
  const isViewed = post?.post[0]?.view.includes(user?.data?._id);
  const handlePostView = async (inView, post, entry) => {
    if (inView && !isViewed) {
      const res = await dispatch(setViews(post?.post[0]?._id));
      set_Views(res?.payload?.data?.view);
    }
  };
  const handleLike = async () => {
    try {
      const res = await dispatch(likePostAction({ postId: post?.post[0]?._id }));
      setLikes(res?.payload?.data?.likes);
    } catch (error) {
      console.log({ error });
    }
  };

  const handleBookmark = async () => {
    try {
      const res = await dispatch(bookmarkAction({ postId: post?.post[0]?._id }));
    } catch (error) {
      console.log({ error });
    }
  }
  useEffect(() => {
    socket.on(post?.post[0]?._id, (data) => {
      if (data.data.type === "view") {
        set_Views(data.data.count);
      } else if (data.data.type === "like") {
        setLikes(data.data.count);
      } else if (data.data.type === "dislike") {
        setDisLikes(data.data.count);
      }
    });
  }, [socket]);
  useEffect(() => {
    setisLiked(likes?.includes(user?.data?._id));
  }, [likes]);

  // // const route = { one: "postComments/", two: "comment/" };
  // const sendRouteOne = () => {
  //   router.push(`postComments/${post?._id}`);
  // };
  // const sendRouteTwo = () => {
  //   router.push(`comment/${post?._id}`);
  // };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  const [image, setImage] = useState(null);
  const [isLoading, setLoading] = useState(false);

  // Function to handle image upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadstart = () => {
      setLoading(true);
    };
  
    reader.onload = (e) => {
      setTimeout(() => {
        setLoading(false);
        setImage(e.target.result);
      }, 500); // Delay of 2 seconds (2000 milliseconds)
    };  

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  // Function to handle image removal
  const handleImageRemove = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setImage(null);
    }, 500); // Delay of 2 seconds (2000 milliseconds)
  };


  return (
    <>
      <InView
        as="div"
        triggerOnce="true"
        threshold="0.5"
        onChange={(inView, entry) => handlePostView(inView, post, entry)}
      >
        {post?.repost_status && (
          <div className={styles.repost_contner}>
            <svg className={styles.repost_icn_shw} id="a" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M22.3,28c0,.72-.58,1.3-1.3,1.3H7c-1.82,0-3.3-1.48-3.3-3.3V7.14l-.78,.78c-.51,.51-1.33,.51-1.84,0s-.51-1.33,0-1.84l3-3c.12-.12,.26-.22,.42-.28,.32-.13,.68-.13,.99,0,.16,.07,.3,.16,.42,.28l3,3c.51,.51,.51,1.33,0,1.84-.25,.25-.59,.38-.92,.38s-.67-.13-.92-.38l-.78-.78V26c0,.39,.31,.7,.7,.7h14c.72,0,1.3,.58,1.3,1.3Zm8.62-3.92c-.51-.51-1.33-.51-1.84,0l-.78,.78V6c0-1.82-1.48-3.3-3.3-3.3H11c-.72,0-1.3,.58-1.3,1.3s.58,1.3,1.3,1.3h14c.39,0,.7,.31,.7,.7V24.86l-.78-.78c-.51-.51-1.33-.51-1.84,0s-.51,1.33,0,1.84l3,3c.12,.12,.26,.22,.42,.28,.16,.07,.33,.1,.5,.1s.34-.03,.5-.1c.16-.07,.3-.16,.42-.28l3-3c.51-.51,.51-1.33,0-1.84Z"/></svg>
            <span className={styles.repost__txt}>{post?.reposter[0].name} reposted</span>
          </div>
        )}
        {post?.repost_status && (
          <div>
            {" "}
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
            </svg>{" "}
            {post?.reposter[0].name} reposted
          </div>
        )}
        <div className={`${styles.div} ${styles.data_content}`}>

          <ProfileImage post={post} />
          <div
            className={`${styles.data_content_all} ${styles._00dca} ${styles.data_no_content}`}
          >
            {route?.one ? (
              <Link href={`${route.one}${post._id}`}>
                <div>
                  <div>
                    <span className={styles._ttl_top}>
                      {post?.post[0]?.title}
                    </span>
                  </div>

                  <div>
                    <span className={styles._ttl_contxt}>
                      {post?.post[0]?.desc?.length > 300 ? (
                        <span>
                          {more
                            ? post?.post[0]?.desc
                            : `${post?.post[0]?.desc?.substring(
                              0,
                              300
                            )}...`}{" "}
                          <button
                            style={{ color: "grey" }}
                            onClick={() => setMore(!more)}
                          >
                            {more ? "see less" : "see more"}
                          </button>
                        </span>
                      ) : (
                        post?.post[0]?.desc
                      )}
                    </span>
                  </div>
                </div>
                {/* John, this is the ImageCarousels */}
                {post?.post[0]?.postImage?.length !== 0 && (
                  <ImageCarousels postImage={post?.post[0]?.postImage} />
                )}
                {post?.post[0]?.postVideo?.length !== 0 && (
                  <div className={styles.div__for__vid}>
                    {/* John, this is the video */}
                    <HomeVideo postVideo={post?.post[0]?.postVideo} />
                  </div>
                )}
              </Link>
            ) : (
              <div>
                <div>
                  <div>
                    <span className={styles._ttl_top}>
                      {post?.post[0]?.title}
                    </span>
                  </div>

                  <div>
                    <span className={styles._ttl_contxt}>
                      {post?.post[0]?.desc?.length > 300 ? (
                        <span>
                          {more
                            ? post?.post[0]?.desc
                            : `${post?.post[0]?.desc?.substring(
                              0,
                              300
                            )}...`}{" "}
                          <button
                            style={{ color: "grey" }}
                            onClick={() => setMore(!more)}
                          >
                            {more ? "see less" : "see more"}
                          </button>
                        </span>
                      ) : (
                        post?.post[0]?.desc
                      )}
                    </span>
                  </div>
                </div>
                {/* John, this is the ImageCarousels */}
                {post?.post[0]?.postImage?.length !== 0 && (
                  <ImageCarousels postImage={post?.post[0]?.postImage} />
                )}
                {post?.post[0]?.postVideo?.length !== 0 && (
                  <div className={styles.div__for__vid}>
                    {/* John, this is the video */}
                    <HomeVideo postVideo={post?.post[0]?.postVideo} />
                  </div>
                )}
              </div>
            )}

            {/* comment route */}
            {/* {`@${post?.user?.username}/comment/${post._id}`} */}
            <div className={styles._00ftr_pst}>
              <span className={`${styles._00mn_span}`} onClick={handleLike}>
                <span>
                  {!isLiked ? (
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
                  ) : (
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
                  )}
                </span>
                <span className={styles._00mn_spn_cnt}>
                  {likes?.length > 0 && likes?.length}
                </span>
              </span>
              <span className={styles._00mn_span}>
                {/* <Link href={`reply/${comment?._id}`}> */}
                {route?.two ? (
                  <Link href={`${route.two}${post?._id}`}>
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
                  </Link>
                ) : (
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
                )}
                <span className={styles._00mn_spn_cnt}>
                  {post?.post[0]?.comment > 0 && post?.post[0]?.comment}
                </span>
              </span>
              <span
                className={styles._00mn_span}
                onClick={() => dispatch(repostAction(post._id))}
              >
                <span>
                  {/* this is the normal repost icon /> */}
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
                <span className={styles._00mn_spn_cnt}>
                  {post?.post[0]?.repost.length}
                </span>
              </span>
              <span className={styles._00mn_span} onClick={handleBookmark}>
                <span>
                  {!isBookmarked ? (
                    <svg
                      className={`${styles.blue} ${styles.x_icn_ftr}`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 2H19C19.5523 2 20 2.44772 20 3V22.1433C20 22.4194 19.7761 22.6434 19.5 22.6434C19.4061 22.6434 19.314 22.6168 19.2344 22.5669L12 18.0313L4.76559 22.5669C4.53163 22.7136 4.22306 22.6429 4.07637 22.4089C4.02647 22.3293 4 22.2373 4 22.1433V3C4 2.44772 4.44772 2 5 2ZM18 4H6V19.4324L12 15.6707L18 19.4324V4Z" />
                    </svg>
                  ) : (
                    <svg
                      className={`${styles.blue} ${styles.x_icn_ftr}`}
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ fill: "#00acee" }}
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 2H19C19.5523 2 20 2.44772 20 3V22.1433C20 22.4194 19.7761 22.6434 19.5 22.6434C19.4061 22.6434 19.314 22.6168 19.2344 22.5669L12 18.0313L4.76559 22.5669C4.53163 22.7136 4.22306 22.6429 4.07637 22.4089C4.02647 22.3293 4 22.2373 4 22.1433V3C4 2.44772 4.44772 2 5 2Z" />
                    </svg>
                  )}
                </span>
                <span className={styles._00mn_spn_cnt}>{bookmarks.length}</span>
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
                <span className={styles._00mn_spn_cnt}>{_views?.length}</span>
              </span>
            </div>
          </div>
        </div>
      </InView>

      {/* this is the comment modal */}
      {isModalOpen && (
      <div className={styles.home_post__yyy_commt}>
        <div className={styles.commnt_qqq_aa}>
          <div className={styles.modal_inner}>

            {/* close button */}
            <svg onClick={closeModal} className={styles.close_hm_reply} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"></path></svg>
            {/* close button */}

            <div className={styles.wdyynait} style={{display: "flex", marginBottom: "30px"}}>
              <div>
                <Link href="/penuel">
                <Image src={img} alt="img" className={styles.replly_img_authr} priority/>
                </Link>
                <div className={styles.line_border_yy}></div>
              </div>
              <div>
                <span className={styles._0022_nm_usr}>
                  Penuel John
                  <span>@penuel</span>
                </span>
                <div>
                  <span className={`${styles._ttl_top} ${styles._ttl_top_reply}`}>
                    What I think about Adolf hitler
                  </span>
                </div>
                <div>
                  <span className={`${styles._ttl_contxt} ${styles._ttl_contxt_reply}`}>
                    this is the reply text...it should be in here, you get @steven??? were are goin to be here!
                    now, the rest part of this words is to test the text truncation
                  </span>
                </div>
              </div>
            </div>

            <div className={styles.wdyynait} style={{display: "flex"}}>
              <div>
                <Link href="/penuel">
                  <Image src={img} alt="img" className={styles.replly_img_authr} priority/>
                </Link>
              </div>
              <div>
                <span className={styles._0022_nm_usr}>
                  Replying to
                  <span style={{color: "#a199fb"}}>@penuel</span>
                </span>
                <div>
                  <textarea placeholder="What's your reply?" className={styles.textarea_reply_qq}></textarea>
                </div>

                {image && (
                <div style={{position: "relative"}}>
                  <img src={image} className={styles.img_reply_hm} alt="img" priority/>
                  <svg  onClick={handleImageRemove} className={styles.close_pic_reply_yxyx} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 10.5858L9.17157 7.75736L7.75736 9.17157L10.5858 12L7.75736 14.8284L9.17157 16.2426L12 13.4142L14.8284 16.2426L16.2426 14.8284L13.4142 12L16.2426 9.17157L14.8284 7.75736L12 10.5858Z"></path></svg>
                </div>
                )}

                <div style={{position: "relative"}}>
                  <svg onClick={() => document.getElementById("fileInput").click()} style={{fill: "#a199fb", width: "22px", height: "22px", cursor: "pointer", marginTop: "5px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 11.1005L7 9.1005L12.5 14.6005L16 11.1005L19 14.1005V5H5V11.1005ZM5 13.9289V19H8.1005L11.0858 16.0147L7 11.9289L5 13.9289ZM10.9289 19H19V16.9289L16 13.9289L10.9289 19ZM4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM15.5 10C14.6716 10 14 9.32843 14 8.5C14 7.67157 14.6716 7 15.5 7C16.3284 7 17 7.67157 17 8.5C17 9.32843 16.3284 10 15.5 10Z"></path></svg>
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
            </div>
          </div>
        </div>
      </div>
      )}
      {/* this is the comment modal */}

    </>
  );
};

export default EachPost;