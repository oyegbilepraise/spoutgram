import styles from "@/layout/HomeLayout/HomeLayout.module.css";
import ProfileImage from "./ProfileImage";
import HomeVideo from "./HomeVideo";
import ImageCarousels from "./ImageCarousels";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dislikePostAction, getAllPostsAction, likePostAction } from "@/redux/slices/postSlice/postSlice";
import Cookies from "js-cookie";
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai'
import { BiEnvelope, BiRepost } from 'react-icons/bi'

const Post = ({ posts, loading }) => {
  const dispatch = useDispatch()
  return (
    <div>
      {loading ? <div style={{ height: "78vh" }} className="d-flex justify-content-center align-items-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div> :
        <div> {posts.map((post, id) => {
          return (
            <div key={id} className={`${styles.div} ${styles.data_content}`}>
              <ProfileImage post={post} />
              <div
                className={`${styles.data_content_all} ${styles._00dca} ${styles.data_no_content}`}
              >
                <div>
                  <span className={styles._ttl_top}>{post.title}</span>
                </div>

                <div>
                  <span className={styles._ttl_contxt}>{post.desc}</span>
                </div>
                {/* John, this is the ImageCarousels */}
                {post.postImage.length !== 0 && <ImageCarousels postImage={post.postImage} />}
                {post.postVideo.length !== 0 &&
                  <div className={styles.div__for__vid}>
                    {/* John, this is the video */}
                    <HomeVideo postVideo={post.postVideo} />
                  </div>
                }

                <div className={styles._00ftr_pst}>
                  <span className={`${styles._00mn_span}`} onClick={() => dispatch(likePostAction({ postId: post._id }))}>
                    <span>
                      <AiOutlineLike size={20} className={`${styles.red} ${styles.x_icn_ftr} ${styles.redheart} ${styles.post__heart}`} />
                    </span>
                    <span className={styles._00mn_spn_cnt}>{post.likes.length}</span>
                  </span>
                  {/* ${post.dislikes.includes(user.data._id)? 'text-primarty':''} */}
                  <span className={`${styles._00mn_span}`} onClick={() => dispatch(dislikePostAction({ postId: post._id }))}>
                    <span>
                      <AiOutlineDislike size={20} className={`${styles.blue} ${styles.x_icn_ftr}`} />
                    </span>
                    <span className={styles._00mn_spn_cnt}>{post.dislikes.length}</span>
                  </span>
                  <span className={styles._00mn_span}>
                    <span>
                      <BiEnvelope size={20} className={`${styles.green} ${styles.x_icn_ftr} ${styles.repostme}`} />
                    </span>
                    <span className={styles._00mn_spn_cnt}>{post.repost.length}</span>
                  </span>
                  <span className={styles._00mn_span}>
                    <span>
                      <BiRepost size={20} className={styles.x_icn_ftr} />
                    </span>
                    <span className={styles._00mn_spn_cnt}>{post.bookmarks.length}</span>
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
                    <span className={styles._00mn_spn_cnt}>{post.numView}</span>
                  </span>
                </div>
              </div>
            </div>
          );
        })}
        </div>
      }
    </div>
  );
};

export default Post;
