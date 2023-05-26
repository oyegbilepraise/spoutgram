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
import img from '../../images/default-photo.svg'
import defaultImg from "../../images/default-photo.svg";
import { useFormik } from "formik";
import { getSinglePostAction, likePostAction } from "@/redux/slices/postSlice/postSlice";
import Routes from "@/utils/routes";
import Link from "next/link";
import EachPost from "@/components/Home/EachPost";
import EachComment from "@/components/Home/EachComment";

const CommentStatusScreen = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [postId, setPostId] = useState(null);
  const [getCommentId,setGetCommentId] = useState(null);
  const { comments } = useSelector(
    (state) => state?.comment?.getComments
  );
  const Loading = useSelector(
    (state) => state?.comment?.getComments?.loading
  );
  const { user, apiError } = useSelector((state) => state?.auth?.getUser);
  const {loading,individualPost}=useSelector(state=>state?.post?.singlePost)

  const [isOpen, setIsOpen] = useState(false);

  const route={one:"replies/",two:"reply/"}

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (router.query.postId) {
      localStorage.setItem("postId", router.query.postId);
      dispatch(getSinglePostAction(router.query.postId));
    } else {
      const id = localStorage.getItem("postId");
      setPostId(localStorage.getItem("postId"));
      dispatch(getSinglePostAction(id));
    }
  }, []);

  useEffect(() => {
      if (getCommentId) {
        dispatch(getCommentsAction(getCommentId));
      }
  }, [getCommentId])
  

  useEffect(() => {

    if (individualPost.data) {
      console.log(individualPost.data[0]);
      setGetCommentId(individualPost?.data[0]?.post[0]?._id)
    }
  }, [individualPost]);

  useEffect(() => {
  console.log(comments);
  }, [!loading])
  

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
      formData.append(
        "post",getCommentId
      );
      const res=await dispatch(createCommentAction(formData));
// console.log(res?.payload?.success);
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
            {!Loading && comments?.data && <span
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
          {/* post preview */}
      {individualPost?.success && <EachPost post={individualPost?.data[0]}/>}
          {/* post preview */}

          {/* comment box */}
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
            {comments?.data?.length < 1 ? (
              <h4>Be the first person to comment</h4>
            ) : (
              <div>
                {comments?.data?.map((comment, id) => {
                  return (
                    <div key={id}>
                     <EachComment comment={comment} individualPost={individualPost?.data&&individualPost?.data[0]} route={route}/>
                    </div>
                  );
                })}
              </div>
            )}
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
                      @{individualPost.data && individualPost.data[0]?.user[0]?.username}
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
                      width="50"
                      height="22"
                      style={{
                        height: "200px",
                        width: "100%",
                        border: "1px solid gray",
                        objectFit: "cover",
                        borderRadius: "8px",
                      }}
                      alt="image_profile_img"
                      className={styles.impg__cpr__nal}
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
                        width="50"
                        height="22"
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