import { HomeLayout } from "@/layout";
import styles from "@/layout/HomeLayout/HomeLayout.module.css";
import imgOne from "../../images/me.jpeg";
import Image from "next/image";
import { useEffect, useState } from "react";
import ProfileImage from "../../components/Home/ProfileImage";
import HomeVideo from "../../components/Home/HomeVideo";
import { useDispatch, useSelector } from "react-redux";
import { getRepliesAction, getSingleCommentAction, replyCommentAction } from "@/redux/slices/commentSlice/commentSlice";
import ImageCarousels from "../../components/Home/ImageCarousels";
import { useRouter } from "next/router";
import PostedAt from "@/components/PostedAt/postedAt";
import defaultImg from "../../images/default-photo.svg";
import { useFormik } from "formik";
import Routes from "@/utils/routes";
import img from '../../images/default-photo.svg'
import Link from "next/link";
import { getSinglePostAction } from "@/redux/slices/postSlice/postSlice";
import EachReply from "@/components/Home/EachReply";
import EachComment from "@/components/Home/EachComment";

const RepliesScreen = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [commentId, setCommentId] = useState(null)
  const { replies } = useSelector(
    (state) => state?.comment?.getReplies
  );
  const { user, apiError } = useSelector((state) => state?.auth?.getUser);
  const {individualComment}=useSelector(state=>state?.comment?.singleComment)
  const {loading,individualPost}=useSelector(state=>state?.post?.singlePost)

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
  // console.log(router);
      const id = localStorage.getItem("postId");
      dispatch(getSinglePostAction(id));
    if (router.query.commentId) {
      localStorage.setItem("commentId", router.query.commentId);
      dispatch(getRepliesAction(router.query.commentId));
      dispatch(getSingleCommentAction(router.query.commentId));
    } else {
      const id = localStorage.getItem("commentId");
      setCommentId(localStorage.getItem("commentId"));
      dispatch(getRepliesAction(id));
      dispatch(getSingleCommentAction(id));
    }
  }, []);

  useEffect(() => {
    console.log(replies);
  }, [loading == false]);

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

 // Function for sending reply
  const formik = useFormik({
    initialValues: { text: "", image: null },
    onSubmit: async(values) => {
      const formData = new FormData();
      console.log(values);
      formData.append("text", values.text);
      formData.append("image", values.image);
      formData.append("comment", router.query.commentId?router.query.commentId:commentId);
      const res =await dispatch(replyCommentAction(formData));
      if (res?.payload?.success) { 
      values.text = "";
      values.image = "";
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
         {!loading &&    <span
              // style={{textAlign: "center", width: "max-content",marginTop: "0px", margin: "auto", paddingLeft: "0px", paddingTop: "0px", border: "1px solid black", display: "block"}}
              class={styles.not_home_nav_text}
            >
            {replies?.data?.length < 1? "No Reply": <span>{replies?.data?.length > 1? `${replies?.data?.length} Replies`:`${replies?.data?.length} Reply`}</span> }
            </span>}
          </div>
        </nav>
        {loading ? (
          "Loading..."
        ) : (
          <div>
          {/* comment preview */}
     <EachComment comment={individualComment?.data}/>
        {/* comment preview */}
          {/* reply box */}
            <div className={styles.whats_yyy}>
              <div className={styles.parnt__cnt_wyyyt}>
                <div className={styles.inipic_xyz}>
                   <Image
                    alt="img"
                    className={styles.img__winipc}
                    src={
                      user?.data?.profilePhoto == ""
                        ? defaultImg
                        : user?.data?.profilePhoto
                    }
                    width="50"
                    height="22"
                    style={{
                      height: "200px",
                      width: "100%",
                      border: "1px solid gray",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />
                </div>
                <div className={styles.ini__inp}>
                  <input
                    type="text"
                    onClick={openModal}
                    className={styles.disbld__inp__post}
                    placeholder="Reply this comment"
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
            {/* reply box */}
            {/* reply preview */}
            {replies?.data?.length < 1 ? (
              <h4>Be the first person to reply this comment</h4>
            ) : (
              <div>
                {replies?.data?.map((reply, id) => {
                  return (
                    <div key={id}>
                     <EachReply reply={reply} individualComment={individualComment}/>
                    </div>
                  );
                })}
              </div>
            )}
            {/* reply preview */}
          </div>
        )}

        {/* reply modal */}
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
                      @{individualComment?.data?.user?.username}
                    </span>
                  </span>
                </div>
                <div style={{ display: "flex" }}>
                  <div>
                     <Image
                    alt="img"
                    className={styles.img__winipc}
                    src={
                      user?.data?.profilePhoto == ""
                        ? defaultImg
                        : user?.data?.profilePhoto
                    }
                    width="50"
                    height="22"
                    style={{
                      height: "200px",
                      width: "100%",
                      border: "1px solid gray",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
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
        {/* reply modal */}
      </div>
    </HomeLayout>
  );
};

export default RepliesScreen;
