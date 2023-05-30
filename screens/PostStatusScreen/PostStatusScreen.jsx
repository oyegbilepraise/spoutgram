import { HomeLayout } from "@/layout";
import styles from "@/layout/HomeLayout/HomeLayout.module.css";
import imgOne from "../../images/me.jpeg";
import Image from "next/image";
import { useEffect, useState } from "react";
import ImageCarousels from "../../components/Home/ImageCarousels";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { createCommentAction } from "@/redux/slices/commentSlice/commentSlice";
import { getSinglePostAction } from "@/redux/slices/postSlice/postSlice";
import img from '../../images/default-photo.svg'
import PostedAt from "@/components/PostedAt/postedAt";
import Routes from "@/utils/routes";
import EachPost from "@/components/Home/EachPost";

const PostStatusScreen = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [postId, setPostId] = useState(null)
  const [getCommentId,setGetCommentId] = useState(null);
const {loading,individualPost}=useSelector(state=>state?.post?.singlePost)
const { user, apiError } = useSelector((state) => state?.auth?.getUser);


  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    console.log(router);
    if (router.query.postId) {
      localStorage.setItem("postId", router.query.postId);
      dispatch(getSinglePostAction(router.query.postId));
    } else {
     const id=localStorage.getItem("postId");
    setPostId(id);
      dispatch(getSinglePostAction(id));
    }
  }, []);

  useEffect(() => {
    if (individualPost.data) {
      console.log(individualPost.data[0]?.post[0]?._id);
      setGetCommentId(individualPost?.data[0]?.post[0]?._id)
    }
  }, [individualPost]);

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
    onSubmit: async(values) => {
      const formData = new FormData();
      console.log(values);
      formData.append("text", values.text);
      formData.append("image", values.image);
      formData.append("post", getCommentId);
     const res=await dispatch(createCommentAction(formData));
     if (res?.payload?.success) {
      values.text = "";
      values.image = "";
      setIsOpen(false)
      setImage(null);
      // router.push(Routes.HOME);
     }
    },
  });

  return (
    <HomeLayout>
      {/* div.timeline -> middle */}
      <div class={`${styles.timeline} ${styles._000middlebar}`}>
        <nav style={{ paddingLeft: "0px" }} className={styles.___main_nav}>
          <div>
            <span style={{ paddingLeft: "18px" }} class={styles.icon_back}>
              <svg
                style={{ marginLeft: "18px" }}
                class={styles._00_history__back}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgb(90, 90, 90)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M19 12H6M12 5l-7 7 7 7" />
              </svg>
            </span>
            <span
              class={styles.not_home_nav_text}
            >
              Post
            </span>
            <span>{/*  */}</span>
          </div>
        </nav>

      {loading? "Loading...":  
        <div>
        {/* post preview */}
      {individualPost?.success && <EachPost post={individualPost?.data[0]}/>}
        {/* post preview */}
        
        {/* comment box */}
        <div className={styles.whats_yyy}>
          <div className={styles.parnt__cnt_wyyyt}>
            <div className={styles.inipic_xyz}>
              <Image alt="img" className={styles.img__winipc} src={user?.data?.profilePhoto==""?img:user?.data?.profilePhoto} />
            </div>
            <div className={styles.ini__inp}>
              <input
                type="text"
                onClick={openModal}
                className={styles.disbld__inp__post}
                placeholder="Reply to this post"
              />
              <button style={{ textAlign: "center", paddingLeft: "0px", paddingRight: "0px", width: "70px" }} className={styles.inp__create__btn} disabled>
                Post
              </button>
            </div>
          </div>
        </div>
        {/* comment box */}
        </div>
        }


        {/* comments */}
        {/* <div className={styles.div}>
          <div>
            <div className={styles.hover_main_image}>
              <Image src={imgOne} className={styles.image_h_c} />
            </div>
            <div>
              <div>
                <span className={styles._0022_nm_usr}>
                  Penuel John
                  <span>@penuel__king</span>
                  <span
                    style={{
                      display: "inline",
                      marginLeft: "12px",
                      fontSize: "14px",
                    }}
                    className={styles._000_dt_data}
                  >
                    17h
                  </span>
                </span>
              </div>
              <div>
                <span className={styles._000_dt_data}>
                  Replying{" "}
                  <span style={{ color: "var(--brand-color)" }}>
                    @penuel__king
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div>
            <span className={styles._ttl_contxt}>
              why are you acting weird, this is a very dumb take...lmao.
              <br />
              <br />
              That's my 2 cents.
            </span>
          </div>
          <div className={styles._00ftr_pst}>
            <span
              className={styles._00mn_span}
              onClick={() => dispatch(likePostAction({ postId: post._id }))}
            >
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
        </div> */}
        {/* comments */}

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
                      @{individualPost?.data&&individualPost?.data[0]?.user[0]?.username}
                    </span>
                  </span>
                </div>
                <div style={{ display: "flex" }}>
                  <div>
                    <Image
                      src={user?.data?.profilePhoto==""?img:user?.data?.profilePhoto}
                      alt="image_profile_img"
                      className={styles.impg__cpr__nal}
                    />
                  </div>
                  <div>
                    <textarea
                      name="text"
                      id=""
                      onChange={formik.handleChange}
                      value={formik.values.text}
                      onBlur={formik.handleBlur}
                      cols="30"
                      rows="10"
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

export default PostStatusScreen;