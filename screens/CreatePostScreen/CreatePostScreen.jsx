import { HomeLayout } from "@/layout";
import React, { useState, useRef, useEffect } from "react";
import styles from "@/layout/HomeLayout/HomeLayout.module.css";
import "./CreatePostScreen.module.css";
import VideoUploader from "@/components/VideoUpload/VideoUploader";
import ImagePost from "./ImagePost";
import { useDispatch, useSelector } from "react-redux";
import { createPostAction } from "@/redux/slices/postSlice/postSlice";
import { useFormik } from "formik";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import Routes from "@/utils/routes";


const CreatePostScreen = () => {
  const [showPostSettings, setShowPostSettings] = useState(false);
  const dispatch = useDispatch();
  const token = Cookies.get("token");
  const router=useRouter()

  const {reccentPost}=useSelector(state=>state?.post?.createPost)

  const fileInputRef = useRef();

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };
// console.log(reccentPost);
//   useEffect(() => {
//   if (reccentPost.success) {
//     //  router.push(Routes.HOME);
//         console.log("push to home from create-post");
//   }
//   }, [reccentPost])
  

  // ----- video uploader starts here -----
  const [videos, setVideos] = useState([]);
  // console.log(video);
  const VideoInputRef = useRef();

  // const handleVideoChange = (event) => {
    
  //   const selectedFiles = event.target.files;
  //   console.log(selectedFiles);

  //   if (selectedFiles.length > 1) {
  //     alert("Please select only one video file.");
  //     return;
  //   }
  //   const selectedFile = selectedFiles[0];
  //   setVideo(selectedFile);
  // };

  const handleVideoClick = () => {
    VideoInputRef.current.click();
  };

  // ------------ Function handling post submit -------------
  const [images, setImages] = useState([]);
  

  const formik = useFormik({
    
    initialValues: { title: "", desc: "", images: [],videos:[] },
    onSubmit: async (values) => {

      const formData = new FormData();

      formData.append("title", values.title);
      formData.append("desc", values.desc);
      // formData.append("video", video);


      for (let i = 0; i < values.images.length; i++) {
        formData.append("image", values.images[i]);
      }
      for (let i = 0; i < values.videos.length; i++) {
        formData.append("video", values.videos[i]);
      }
     
      dispatch(createPostAction(formData));
      console.log(values);
      values.title = "";
      values.desc = "";
      values.images = [];
      setImages([]);
      setVideos([]);
      fileInputRef.current.value = "";
      VideoInputRef.current.value = "";
      // router.push(Routes.HOME);
    }
  });

  return (
    <HomeLayout>
      {/* div.timeline -> middle */}
      <div class={`${styles.timeline} ${styles._000middlebar}`}>
        <nav className={styles.___main_nav}>
          <div>
            <span class={styles.icon_back}>
              <svg
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
            <span class={styles.not_home_nav_text}>Create Post</span>
          </div>
        </nav>

        <form
          className={styles.post__compose__container}
          style={{ display: "" }}
          onSubmit={formik.handleSubmit}
        >
          <div className={styles.pcc__child}>
            <div style={{ display: "" }}>
              <textarea
                className={`${styles.post__data__content} ${styles.title__content}`}
                placeholder="Post Title"
                name="title"
                value={formik.values.title}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <div>
              <textarea
                className={styles.post__data__content}
                placeholder="Start Post"
                name="desc"
                value={formik.values.desc}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
          </div>
          {/* image/video */}
          <div className={styles.media__preview} style={{ display: "" }}>
            {/*image parent container */}
            <ImagePost images={images} />
            {/*video parent container */}
            <VideoUploader videos={videos} />
          </div>

          {/* image/video */}
          <div className={`${styles.img} ${styles.vid} ${styles.__09xfgc}`}>
            <div className={styles._sxvg_div} onClick={handleButtonClick}>
              <svg
                className={styles.post_icon_data}
                width={18}
                height={18}
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx={13}
                  cy={5}
                  r="1.2"
                  stroke="#01A8EA"
                  fill="#01A8EA"
                  strokeWidth="1.6"
                />
                <rect
                  x="0.8"
                  y="0.8"
                  width="16.4"
                  height="16.4"
                  rx="3.2"
                  stroke="#01A8EA"
                  strokeWidth="1.6"
                />
                <path
                  d="M4.69661 12.0373C5.10088 11.5153 5.89107 11.5214 6.2872 12.0496L8.5 15H2.40186L4.69661 12.0373Z"
                  fill="#01A8EA"
                />
                <path
                  d="M9.26306 9.80415C9.65941 9.37179 10.341 9.37181 10.7374 9.80418L15.5 15H4.5L9.26306 9.80415Z"
                  fill="#01A8EA"
                />
              </svg>
              <h6 className={styles.tooltip}>Image</h6>
            </div>
            <input
              type="file"
              multiple
              ref={fileInputRef}
              accept=".jpg"
              name="image"
              style={{ display: "none" }}
              onChange={(event) => {

                formik.setFieldValue("images", Array.from(event.target.files));
                const newImages = [];
                const files = event.target.files;

                for (let i = 0; i < files.length; i++) {
                  const file = files[i];
                  if (file.type.startsWith("image/")) {
                    if (formik.values.images.length >= 4) {
                      alert("You can only upload up to 4 images.");
                      return;
                    }
                    newImages.push(file);

                  }

                }

                setImages([...images, ...newImages]);
              }}
            />

            {/* video uploader */}
            <div className={styles._sxvg_div} onClick={handleVideoClick}>
              <svg
                className={styles.post_icon_data}
                width={18}
                height={18}
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.8"
                  y="0.8"
                  width="16.4"
                  height="16.4"
                  rx="3.2"
                  stroke="#01A8EA"
                  strokeWidth="1.6"
                />
                <path
                  stroke="#01A8EA"
                  d="M12.1 9.1732L7.6 11.7713C7.46667 11.8483 7.3 11.752 7.3 11.5981L7.3 6.40192C7.3 6.24796 7.46667 6.15174 7.6 6.22872L12.1 8.82679C12.2333 8.90378 12.2333 9.09623 12.1 9.1732Z"
                  strokeWidth="1.6"
                />
              </svg>
              <h6 className={styles.tooltip}>Video</h6>
            </div>
            <input
              type="file"
              accept=".mp4"
              ref={VideoInputRef}
              style={{ display: "none" }}
              multiple
              name="video"
              onChange={(event)=>{
                   formik.setFieldValue("videos", Array.from(event.target.files));
                const newVideos = [];
                const files = event.target.files;
console.log(files);
                for (let i = 0; i < files.length; i++) {
                  const file = files[i];

                  if (file.type.startsWith("video/")) {
                    if (formik.values.videos.length >= 4) {
                      alert("You can only upload up to 4 images.");
                      return;
                    }
                    newVideos.push(file);

                  }

                }

                setVideos([...videos,...newVideos]);
              }}
            />

            <div className={styles._sxvg_div} style={{ width: "min-content" }}>
              <div style={{ position: "relative", width: "min-content" }}>
                <svg
                  className={styles.post_icon_data}
                  width={18}
                  height={22}
                  viewBox="0 0 18 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={() => setShowPostSettings((prev) => !prev)}
                >
                  <rect
                    x="0.5"
                    y="18.5"
                    width={17}
                    height={1}
                    rx="0.5"
                    fill="#01A8EA"
                    stroke="#01A8EA"
                  />
                  <rect
                    x="0.5"
                    y="10.5"
                    width={17}
                    height={1}
                    rx="0.5"
                    fill="#01A8EA"
                    stroke="#01A8EA"
                  />
                  <rect
                    x="0.5"
                    y="2.5"
                    width={17}
                    height={1}
                    rx="0.5"
                    fill="#01A8EA"
                    stroke="#01A8EA"
                  />
                  <rect
                    x="13.5"
                    y="0.5"
                    width={1}
                    height={5}
                    rx="0.5"
                    fill="#01A8EA"
                    stroke="#01A8EA"
                  />
                  <rect
                    x="3.5"
                    y="8.5"
                    width={1}
                    height={5}
                    rx="0.5"
                    fill="#01A8EA"
                    stroke="#01A8EA"
                  />
                  <rect
                    x="13.5"
                    y="16.5"
                    width={1}
                    height={5}
                    rx="0.5"
                    fill="#01A8EA"
                    stroke="#01A8EA"
                  />
                </svg>
                <h6 className={styles.tooltip}>Post Settings</h6>
              </div>
              {/* toggle post settings  */}
              {showPostSettings && (
                <div
                  className={styles.options__postsettns}
                  // style={{ display: "none" }}
                >
                  <div>
                    <div>
                      <span className={styles.span_post_option}>
                        Add Post title
                        <span>
                          <input
                            type="checkbox"
                            name="allow_tipsa"
                            id="switch"
                          />
                          <label
                            htmlFor="switch"
                            className={styles.label__tips}
                          >
                            Toggle
                          </label>
                        </span>
                      </span>
                    </div>
                    <div>
                      <span className={styles.span_post_option}>
                        Add Tips
                        <span>
                          <input
                            type="checkbox"
                            name="allow_tipsb"
                            id="switcha"
                          />
                          <label
                            htmlFor="switcha"
                            className={styles.label__tips}
                          >
                            Toggle
                          </label>
                        </span>
                      </span>
                    </div>
                    <div>
                      <span className={styles.span_post_option}>
                        Everyone
                        <span>
                          <input
                            type="checkbox"
                            name="allow_tipsc"
                            id="switchb"
                          />
                          <label
                            htmlFor="switchb"
                            className={styles.label__tips}
                          >
                            Toggle
                          </label>
                        </span>
                      </span>
                    </div>
                    <div>
                      <span className={styles.span_post_option}>
                        Subscribers
                        <span>
                          <input
                            type="checkbox"
                            name="allow_tipsd"
                            id="switchc"
                          />
                          <label
                            htmlFor="switchc"
                            className={styles.label__tips}
                          >
                            Toggle
                          </label>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div>
              <button
                className={styles.data_vh_post}
                type="submit"
                disabled={(formik.values.title == "" && formik.values.desc == "" && formik.values.images == "" && formik.values.videos == "")||(formik.values.title != "" && formik.values.desc == "" && formik.values.images == "" && formik.values.videos == "")}
              >
                Post
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* div.timeline -> middle */}
    </HomeLayout>
  );
};

export default CreatePostScreen;
