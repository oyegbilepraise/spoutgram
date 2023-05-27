import { HomeLayout } from "@/layout";
import { useState, useRef, useEffect } from "react";
import styles from "@/layout/HomeLayout/HomeLayout.module.css";
import "./CreatePostScreen.module.css";
import VideoUploader from "@/components/VideoUpload/VideoUploader";
import ImagePost from "./ImagePost";
import { useDispatch, useSelector } from "react-redux";
import { createPostAction } from "@/redux/slices/postSlice/postSlice";
import { useFormik } from "formik";
import { MdPermMedia } from "react-icons/md";
import { BtnloadSvg } from "../../components";
import EmojiPicker from "emoji-picker-react";
import { createRef } from "react";
import { useRouter } from "next/router";

const CreatePostScreen = () => {
  const inputTitle = createRef()
  const inputDesc = createRef()
  const [cursorPosition, setcursorPosition] = useState("")
  const [showPostSettings, setShowPostSettings] = useState(false);
  const [postSucceeds, setPostSucceeds] = useState(false)
  const dispatch = useDispatch();
  const fileInputRef = useRef();
  const VideoInputRef = useRef();

  const { loading, reccentPost } = useSelector(
    (state) => state?.post?.createPost
  );
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };
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
    // VideoInputRef.current.click();
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
        } else if (values.media[i].type.startsWith("video/")) {
          formData.append("video", values.media[i]);
        }
      }
      const res = await dispatch(createPostAction(formData));
console.log(res?.payload?.success);
if (res?.payload?.success) {
      values.title = "";
      values.desc = "";
      setPostSucceeds(true)
      setTimeout(()=>{
      setPostSucceeds(false)
      },3000)
      values.media = [];
      setMedia([]);
      // router.push(Routes.HOME);
      fileInputRef.current.value = "";
      VideoInputRef.current.value = "";
}
    },
  });

  //emoji show and hide handler
  const [isEmojiOpen, setIsEmojiOpen] = useState(false);
  const emojiRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (emojiRef.current && !emojiRef.current.contains(event.target)) {
        setIsEmojiOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function toggleEmoji() {
    setIsEmojiOpen((prevState) => !prevState);
  }

  function handleButtonClickk(event) {
    event.stopPropagation();
    toggleEmoji();
  }

  const handleEmojiClick = ({ emoji }) => {
    if (inputDesc.current.name == "desc") {
      const ref = inputDesc.current;
      ref.focus()
      const start = formik.values.desc.substring(0, ref.selectionStart)
      const end = formik.values.desc.substring(ref.selectionStart)
      let message = start + emoji + end
      formik.values.desc = message
      console.log(inputDesc.current.name);
      setcursorPosition(start.length + emoji.length)
    } else if (inputTitle.current.name == "title") {
      const ref = inputTitle.current;
      ref.focus()
      const start = formik.values.title.substring(0, ref.selectionStart)
      const end = formik.values.title.substring(ref.selectionStart)
      let message = start + emoji + end
      formik.values.title = message
      console.log(inputTitle.current.name);
      setcursorPosition(start.length + emoji.length)
    }
  }

  useEffect(() => {
    if (inputDesc.current.name == "desc") {
      inputDesc.current.selectionEnd = cursorPosition
    } else if (inputTitle.current.name == "title") {
      inputTitle.current.selectionEnd = cursorPosition
    }
  }, [cursorPosition])


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
                ref={inputTitle}
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
                ref={inputDesc}
                value={formik.values.desc}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {/* this is the successful and error popup */}
            {postSucceeds && (
              <div>
                <span className={styles.post__msg__pp}>
                  Post created successfully!
                </span>
              </div>
            )}
            {/* this is the successful and error popup */}
          </div>

          {/* image/video */}
          <div
            className={styles.media__preview}
            style={{ border: "transparent" }}
          >
            {/*image parent container */}
            <ImagePost media={media} />
            {/*video parent container */}
            {/* <VideoUploader video={video} /> */}
          </div>

          {/* image/video */}
          <div className={`${styles.img} ${styles.vid} ${styles.__09xfgc}`}>
            <div className={styles._sxvg_div} onClick={handleButtonClick}>
              <MdPermMedia className={`${styles.post_icon_data} text-info`} />
              <h6 className={styles.tooltip}>Media</h6>
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
                  console.log(file);
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

            {/* this is for the emojis */}
            <div>
              <div style={{ position: "relative" }}>
                <svg
                  className={styles.post_icon_data}
                  onMouseDown={handleButtonClickk}
                  fill="#00acee"
                  width="24px"
                  cursor="pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M10.5199 19.8634C10.5955 18.6615 10.8833 17.5172 11.3463 16.4676C9.81124 16.3252 8.41864 15.6867 7.33309 14.7151L8.66691 13.2248C9.55217 14.0172 10.7188 14.4978 12 14.4978C12.1763 14.4978 12.3501 14.4887 12.5211 14.471C14.227 12.2169 16.8661 10.7083 19.8634 10.5199C19.1692 6.80877 15.9126 4 12 4C7.58172 4 4 7.58172 4 12C4 15.9126 6.80877 19.1692 10.5199 19.8634ZM19.0233 12.636C15.7891 13.2396 13.2396 15.7891 12.636 19.0233L19.0233 12.636ZM22 12C22 12.1677 21.9959 12.3344 21.9877 12.5L12.5 21.9877C12.3344 21.9959 12.1677 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM10 10C10 10.8284 9.32843 11.5 8.5 11.5C7.67157 11.5 7 10.8284 7 10C7 9.17157 7.67157 8.5 8.5 8.5C9.32843 8.5 10 9.17157 10 10ZM17 10C17 10.8284 16.3284 11.5 15.5 11.5C14.6716 11.5 14 10.8284 14 10C14 9.17157 14.6716 8.5 15.5 8.5C16.3284 8.5 17 9.17157 17 10Z"></path>
                </svg>

                {/* this is the emoji container */}
                {isEmojiOpen && (
                  <div
                    className={styles.emojis__container__parent}
                    ref={emojiRef}
                  >
                    <div>
                      <div>
                        {/* search for emojis */}
                        {/* <input
                          type="search"
                          name=""
                          id=""
                          placeholder="Search emojis"
                          className={styles.search__emojis}
                        /> */}
                      </div>
                      <div
                        style={{
                          width: "100%",
                          height: "105px",
                          overflowY: "auto",
                        }}
                      >
                        {/* shoot the emoji here */}
                        {/* emojis */}

                        <EmojiPicker height={350} width={300} onEmojiClick={handleEmojiClick} />
                      </div>
                    </div>
                  </div>
                )}
                {/* this is the emoji container */}
                {/* <EmojiPicker height={350} width={300} onEmojiClick={handleEmojiClick} /> */}
              </div>
            </div>
            {/* this is for the emojis */}

            <div>
              {loading ? (
                <button
                  className={styles.data_vh_post}
                  type="submit"
                  style={{ color: "transparent", transition: "0.1s all" }}
                  disabled
                >
                  <>
                    <BtnloadSvg />
                  </>
                  Post
                </button>
              ) : (
                <button
                  className={styles.data_vh_post}
                  type="submit"
                  disabled={
                    (formik.values.title == "" &&
                      formik.values.desc == "" &&
                      formik.values.media.length == 0) ||
                    (formik.values.title != "" &&
                      formik.values.desc == "" &&
                      formik.values.media.length == 0)
                  }
                >
                  Post
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
      {/* div.timeline -> middle */}
    </HomeLayout>
  );
};

export default CreatePostScreen;
