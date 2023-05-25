import { HomeLayout } from "@/layout";
import styles from "@/layout/HomeLayout/HomeLayout.module.css";
import imgOne from "../../images/me.jpeg";
import Image from "next/image";
import { useEffect, useState } from "react";
import ProfileImage from "../../components/Home/ProfileImage";
import HomeVideo from "../../components/Home/HomeVideo";
import { useDispatch, useSelector } from "react-redux";
import { createCommentAction, getCommentsAction } from "@/redux/slices/commentSlice/commentSlice";
import ImageCarousels from "../../components/Home/ImageCarousels";
import { useRouter } from "next/router";
import PostedAt from "@/components/PostedAt/postedAt";
import defaultImg from "../../images/default-photo.svg";
import { useFormik } from "formik";
import { getSinglePostAction } from "@/redux/slices/postSlice/postSlice";
import Routes from "@/utils/routes";
import Link from "next/link";

const CommentStatusScreen = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [postId, setPostId] = useState(null);
  const { loading, comments } = useSelector(
    (state) => state?.comment?.getComments
  );
  const { user, apiError } = useSelector((state) => state?.auth?.getUser);
  const { individualPost } = useSelector(state => state?.post?.singlePost)

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (router.query.postId) {
      localStorage.setItem("postId", router.query.postId);
      dispatch(getCommentsAction(router.query.postId));
      dispatch(getSinglePostAction(router.query.postId));
    } else {
      const id = localStorage.getItem("postId");
      setPostId(localStorage.getItem("postId"));
      dispatch(getCommentsAction(id));
      dispatch(getSinglePostAction(id));
    }
  }, []);

  useEffect(() => {
    console.log(comments);
  }, [loading == false]);

  // Function to handle image upload
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setImage(file);
    formik.values.image = file;
    // const reader = new FileReader();
    // console.log(file);
    // reader.onload = (e) => {
    //   setImage(e.target.result);
    //   formik.values.image = e.target.result;
    // };
    // if (file) {
    //   reader.readAsDataURL(file);
    // }
  };

  // Function to handle image removal
  const handleImageRemove = () => {
    setImage(null);
    formik.values.image = null;
  };

  // Function for sending comments
  const formik = useFormik({
    initialValues: { text: "", image: null },
    onSubmit: (values) => {
      const formData = new FormData();
      console.log(values);
      formData.append("text", values.text);
      formData.append("image", values.image);
      formData.append(
        "post",
        router.query.postId ? router.query.postId : postId
      );
      dispatch(createCommentAction(formData));
      values.text = "";
      values.image = "";
      setImage(null);
      router.push(Routes.HOME);
    },
  });

  const handleGoBack = () => {
    router.back(); // Go back to the previous page or route
  };

  return (
    <HomeLayout>
      {/* div.timeline -> middle */}
      <div class={`${styles.timeline} ${styles._000middlebar}`}>
        <nav style={{paddingLeft: "0px"}} className={styles.___main_nav}>
          <div> 
            <span style={{paddingLeft: "18px"}} class={styles.icon_back} onClick={handleGoBack}>
              <svg style={{marginLeft: "18px"}} class={styles._00_history__back} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(90, 90, 90)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H6M12 5l-7 7 7 7"/></svg>
            </span>
            {!loading && <span
              // style={{textAlign: "center", width: "max-content",marginTop: "0px", margin: "auto", paddingLeft: "0px", paddingTop: "0px", border: "1px solid black", display: "block"}}
              class={styles.not_home_nav_text}
            >
              {comments?.data?.length < 1 ? "No Comment" : <span>{comments?.data?.length > 1 ? `${comments?.data?.length} Comments` : `${comments?.data?.length} Comment`}</span>}
            </span>}
          </div>
        </nav>
        {loading ? (
          "Loading..."
        ) : (
          <div>
            {/* comment preview */}
            {comments?.data?.length < 1 ? (
              <h4>Be the first person to comment</h4>
            ) : (
              <div>
                {comments?.data?.map((comment, id) => {
                  return (
                    <div className={`${styles.div} ${styles.data_content}`}>
                      <div style={{ position: "relative" }}>
                        <div className={styles.hover_main_image}>
                          <Image
                            src={
                              comment?.user?.profilePhoto == ""
                                ? defaultImg
                                : comment?.user?.profilePhoto
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
                              {comment?.user?.name}
                              <span>@{comment?.user?.username}</span>
                              <span
                                style={{
                                  display: "inline",
                                  marginLeft: "12px",
                                  fontSize: "",
                                }}
                                className={styles._000_dt_data}
                              >
                                <PostedAt time={comment?.createdAt} />
                              </span>
                            </span>
                          </div>
                          <div>
                            <span
                              className={styles._000_dt_data}
                              style={{ fontSize: "16px" }}
                            >
                              Replying{" "}
                              <span style={{ color: "var(--brand-color)" }}>
                                @{individualPost?.data?.user?.username}
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
                         <Link href={`replies/${comment?._id}`}>
                          <span
                            className={`${styles._ttl_contxt} ${styles._ttl_contxt__pp}`}
                          >
                            {comment?.text}
                          </span>
                         </Link>
                        </div>

                        <div className={styles._00ftr_pst}>
                          <span className={styles._00mn_span}>
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                id="like"
                                className={`${styles.red} ${styles.x_icn_ftr} ${styles.redheart} ${styles.post__heart}`}
                                viewBox="0 0 24 24"
                                width={24}
                                height={24}
                              >
                                <path fill="none" d="M0 0H24V24H0z" />
                                <path d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2zm-3.566 15.604c.881-.556 1.676-1.109 2.42-1.701C18.335 14.533 20 11.943 20 9c0-2.36-1.537-4-3.5-4-1.076 0-2.24.57-3.086 1.414L12 7.828l-1.414-1.414C9.74 5.57 8.576 5 7.5 5 5.56 5 4 6.656 4 9c0 2.944 1.666 5.533 4.645 7.903.745.592 1.54 1.145 2.421 1.7.299.189.595.37.934.572.339-.202.635-.383.934-.571z" />
                              </svg>
                            </span>
                            <span className={styles._00mn_spn_cnt}>900</span>
                          </span>
                          <span className={styles._00mn_span}>
                          <Link href={`reply/${comment?._id}`}>
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
                            <span className={styles._00mn_spn_cnt}>{comment?.reply}</span>
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
                })}
              </div>
            )}
            {/* comment preview */}

            {/* comment box */}
            <div className={styles.whats_yyy}>
              <div className={styles.parnt__cnt_wyyyt}>
                <div className={styles.inipic_xyz}>
                  <Image
                    alt="img" fill
                    className={styles.img__winipc}
                    src={
                      user?.data?.profilePhoto == ""
                        ? defaultImg
                        : user?.data?.profilePhoto
                    }
                    width={'22'}
                    height={'22'}
                  />
                </div>
                <div className={styles.ini__inp}>
                  <input
                    type="text"
                    onClick={openModal}
                    className={styles.disbld__inp__post}
                    placeholder="Reply to the post"
                  />
                  <button
                    style={{
                      textAlign: "center",
                      paddingLeft: "0px",
                      paddingRight: "0px",
                      width: "70px",
                    }}
                    className={styles.inp__create__btn}
                    disabled
                  >
                    Post
                  </button>
                </div>
              </div>
            </div>
            {/* comment box */}

            {/* comments */}

            {/* comments */}
          </div>
        )}

        {/* comment modal */}
        {isOpen && (
          <form onSubmit={formik.handleSubmit}>
            <div className={styles.xxyymdl__asssl}>
              <div className={styles.comment__xxuxxuyy}>
                <div>
                  <span
                    style={{
                      fontFamily: "var(--global-regular)",
                      fontSize: "15px",
                      marginBottom: "13px",
                      display: "block",
                    }}
                  >
                    Replying to{" "}
                    <span style={{ color: "var(--brand-color)" }}>
                      @{individualPost?.data?.user?.username}
                    </span>
                  </span>
                </div>
                <div style={{ display: "flex" }}>
                  <div>
                    <Image
                      src={
                        user?.data?.profilePhoto == ""
                          ? defaultImg
                          : user?.data?.profilePhoto
                      }
                      alt="image_profile_img"
                      className={styles.impg__cpr__nal}
                      fill
                    />
                  </div>
                  <div>
                    <textarea
                      name="text"
                      id=""
                      cols="30"
                      rows="10"
                      onChange={formik.handleChange}
                      value={formik.values.text}
                      onBlur={formik.handleBlur}
                      placeholder="Compose your reply"
                      className={styles.post__reply__m}
                    ></textarea>
                  </div>
                </div>
                <div>
                  {image && (
                    <div>
                      <img
                        src={URL.createObjectURL(image)}
                        alt="profile_image"
                        style={{
                          height: "200px",
                          width: "100%",
                          border: "1px solid gray",
                          objectFit: "cover",
                          borderRadius: "8px",
                        }}
                      />
                      <button onClick={handleImageRemove}>Remove image</button>
                    </div>
                  )}
                </div>
                <div>
                  <button
                    className={styles.replit__vbrn}
                    style={{ marginRight: "10px" }}
                    type="submit"
                  >
                    Post
                  </button>
                  <button
                    className={styles.replit__vbrn}
                    style={{ marginRight: "10px" }}
                    onClick={closeModal}
                    type="button"
                  >
                    Close
                  </button>
                  <button
                    className={styles.replit__vbrn}
                    onClick={() => document.getElementById("fileInput").click()}
                    type="button"
                  >
                    Upload Pic/gif
                  </button>
                  <input
                    name="image"
                    type="file"
                    id="fileInput"
                    accept="image/jpg, image/jpeg, image/png"
                    onChange={handleImageUpload}
                    style={{ display: "none" }}
                  />
                </div>
              </div>
            </div>
          </form>
        )}
        {/* comment modal */}
      </div>
    </HomeLayout>
  );
};

export default CommentStatusScreen;
