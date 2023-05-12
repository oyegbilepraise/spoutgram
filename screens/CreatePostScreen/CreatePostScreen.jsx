import { HomeLayout } from "@/layout";
import React, { useState, useRef, useEffect } from "react";
import styles from "@/layout/HomeLayout/HomeLayout.module.css";
import "./CreatePostScreen.module.css";
import VideoUploader from "@/components/VideoUpload/VideoUploader";
import ImagePost from "./ImagePost";
import { useDispatch, useSelector } from "react-redux";
import { createPostAction } from "@/redux/slices/postSlice/postSlice";
import { useFormik } from "formik";
import { MdPermMedia } from 'react-icons/md'

const CreatePostScreen = () => {
  const [showPostSettings, setShowPostSettings] = useState(false);
  const dispatch = useDispatch();
  const fileInputRef = useRef();
  const VideoInputRef = useRef();

  const { reccentPost } = useSelector((state) => state?.post?.createPost);
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
  // const [video, setVideo] = useState(null);
  // console.log(video);

  const handleVideoChange = (event) => {
    const selectedFiles = event.target.files;

    if (selectedFiles.length > 1) {
      alert("Please select only one video file.");
      return;
    }
    const selectedFile = selectedFiles[0];
    setVideo(selectedFile);
  };

  const handleVideoClick = () => {
    VideoInputRef.current.click();
  };

  // ------------ Function handling post submit -------------
  const [media, setMedia] = useState([]);

  const formik = useFormik({
    initialValues: { title: "", desc: "", media: [] },
    onSubmit: async (values) => {
      const formData = new FormData();
      formData.append("title", values.title);
      formData.append("desc", values.desc);
      for (let i = 0; i < values.media.length; i++) {
        if (values.media[i].type.startsWith("image/")) {
          formData.append("image", values.media[i]);
        }
        else if (values.media[i].type.startsWith("video/")) {
          formData.append("video", values.media[i]);
        }
      }
      dispatch(createPostAction(formData));
      values.title = "";
      values.desc = "";
      values.media = [];
      setMedia([]);
      fileInputRef.current.value = "";
      VideoInputRef.current.value = "";
      router.push(Routes.HOME);
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
            <ImagePost media={media} />
            {/*video parent container */}
            {/* <VideoUploader video={video} /> */}
          </div>

          {/* image/video */}
          <div className={`${styles.img} ${styles.vid} ${styles.__09xfgc}`}>
            <div className={styles._sxvg_div} onClick={handleButtonClick}>
              <MdPermMedia className={`${styles.post_icon_data} text-info`} />
              <h6 className={styles.tooltip}>Image</h6>
            </div>
            <input
              type="file"
              multiple
              ref={fileInputRef}
              name="media"
              style={{ display: "none" }}
              onChange={(event) => {

                formik.setFieldValue("media", Array.from(event.target.files));
                const newMedia = [];
                const files = event.target.files;

                for (let i = 0; i < files.length; i++) {
                  const file = files[i];
                  newMedia.push(file);
                }
                setMedia([...media, ...newMedia]);
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
                disabled={(formik.values.title == "" && formik.values.desc == "" && formik.values.media.length == 0) || (formik.values.title != "" && formik.values.desc == "" && formik.values.media.length == 0)}
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
