import styles from "@/layout/HomeLayout/HomeLayout.module.css";
import ProfileImage from "./ProfileImage";
import ImageCarousels from "./ImageCarousels";
import HomeVideo from "./HomeVideo";
import { useDispatch } from "react-redux";
import { dislikePostAction, likePostAction } from "@/redux/slices/postSlice/postSlice";
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai'
import { BiEnvelope, BiRepost } from 'react-icons/bi'
import { useContext, useEffect, useState } from "react";
import { SocketContext } from '../../redux/context/socket.js';

const EachPost = ({ post }) => {
    const [postId, setPostId] = useState(post._id)
    const socket = useContext(SocketContext);
    const dispatch = useDispatch()
    const [likes, setLikes] = useState(post.likes.length);
    const [disLikes, setDisLikes] = useState(post.dislikes.length);

    const handleLike = async () => {
        try {
            const res = await dispatch(likePostAction({ postId }))
            setLikes(res.payload.data.likes.length)
        } catch (error) {
            console.log({ error });
        }
    }
    useEffect(() => {
        socket.on(postId, (data) => {
            console.log({ postId, data, post });
            console.log("SocketRes: ", data);
        })
    }, [socket])
    const handleDislike = async (id) => {
        try {
            const res = await dispatch(dislikePostAction({ postId: id }))
            setDisLikes(res.payload.data.dislikes.length)
        } catch (error) {
            console.log({ error });
        }
    }
    return (
        <>
            <div className={`${styles.div} ${styles.data_content}`}>
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
                        <span className={`${styles._00mn_span}`}
                            onClick={handleLike}
                        >
                            <span>
                                {/* this is the normal heart */}
                                <svg xmlns="http://www.w3.org/2000/svg" className={`${styles.red} ${styles.x_icn_ftr} ${styles.redheart} ${styles.post__heart}`} viewBox="0 0 24 24" width={24} height={24}  >
                                    <path fill="none" d="M0 0H24V24H0z" />
                                    <path
                                        d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2zm-3.566 
                                            15.604c.881-.556 1.676-1.109 2.42-1.701C18.335 14.533 20 11.943 20 9c0-2.36-1.537-4-3.5-4-1.076 0-2.24.57-3.086 1.414L12 
                                            7.828l-1.414-1.414C9.74 5.57 8.576 5 7.5 5 5.56 5 4 6.656 4 9c0 2.944 1.666 5.533 4.645 7.903.745.592 1.54 1.145 2.421 
                                            1.7.299.189.595.37.934.572.339-.202.635-.383.934-.571z"
                                    />
                                </svg>

                                {/* this is the red heart */}
                                <svg className={`${styles.x_icn_ftr} ${styles.likeheart}`} style={{ fill: "#ff00ff" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} >
                                    <path fill="none" d="M0 0H24V24H0z" />
                                    <path d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2z" />
                                </svg>

                            </span>
                            <span className={styles._00mn_spn_cnt}>{likes}</span>
                        </span>
                        <span className={`${styles._00mn_span}`} onClick={() => handleDislike(post._id)}>
                            <span>
                                <AiOutlineDislike size={20} className={`${styles.blue} ${styles.x_icn_ftr}`} />
                            </span>
                            <span className={styles._00mn_spn_cnt}>{disLikes}</span>
                        </span>
                        <span className={styles._00mn_span}>
                            <span>

                                {/* this is the normal repost icon /> */}
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="repost" className={`${styles.green} ${styles.x_icn_ftr} ${styles.repostme}`} width={24} height={24} >
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path d="M8 20v1.932a.5.5 0 0 1-.82.385l-4.12-3.433A.5.5 0 0 1 3.382 18H18a2 2 0 0 0 2-2V8h2v8a4 4 0 0 1-4 4H8zm8-16V2.068a.5.5 0 0 1 .82-.385l4.12 3.433a.5.5 0 0 1-.321.884H6a2 2 0 0 0-2 2v8H2V8a4 4 0 0 1 4-4h10z" />
                                </svg>


                                {/* this is the green repost icon /> */}
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="repost" style={{ fill: "rgb(0, 128, 0, 0.775);" }} className={`${styles.green} ${styles.x_icn_ftr} ${styles.repostme}`} width={24} height={24} >
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path d="M8 20v1.932a.5.5 0 0 1-.82.385l-4.12-3.433A.5.5 0 0 1 3.382 18H18a2 2 0 0 0 2-2V8h2v8a4 4 0 0 1-4 4H8zm8-16V2.068a.5.5 0 0 1 .82-.385l4.12 3.433a.5.5 0 0 1-.321.884H6a2 2 0 0 0-2 2v8H2V8a4 4 0 0 1 4-4h10z" />
                                </svg>

                            </span>
                            <span className={styles._00mn_spn_cnt}>{post.repost.length}</span>
                        </span>
                        <span className={styles._00mn_span}>
                            <span>
                                {/* this is the normal bookmark /> */}
                                <svg className={`${styles.blue} ${styles.x_icn_ftr}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M5 2H19C19.5523 2 20 2.44772 20 3V22.1433C20 22.4194 19.7761 22.6434 19.5 22.6434C19.4061 22.6434 19.314 22.6168 19.2344 22.5669L12 18.0313L4.76559 22.5669C4.53163 22.7136 4.22306 22.6429 4.07637 22.4089C4.02647 22.3293 4 22.2373 4 22.1433V3C4 2.44772 4.44772 2 5 2ZM18 4H6V19.4324L12 15.6707L18 19.4324V4Z" />
                                </svg>

                                {/* this is the blue bookmark */}
                                <svg className={`${styles.blue} ${styles.x_icn_ftr}`} xmlns="http://www.w3.org/2000/svg" style={{ fill: "#00acee" }} viewBox="0 0 24 24">
                                    <path d="M5 2H19C19.5523 2 20 2.44772 20 3V22.1433C20 22.4194 19.7761 22.6434 19.5 22.6434C19.4061 22.6434 19.314 22.6168 19.2344 22.5669L12 18.0313L4.76559 22.5669C4.53163 22.7136 4.22306 22.6429 4.07637 22.4089C4.02647 22.3293 4 22.2373 4 22.1433V3C4 2.44772 4.44772 2 5 2Z" />
                                </svg>

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
        </>
    )
}

export default EachPost;