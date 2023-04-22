import { HomeLayout } from "@/layout";
import React, { useState, useRef } from "react";
import Image from "next/image";
// import img from '../../images/default-photo.svg'
import styles from "@/layout/HomeLayout/HomeLayout.module.css";
import "./CreatePostScreen.module.css";
import people2 from "../../images/people-2.jpeg";

const CreatePostScreen = () => {
  const [showPostSettings, setShowPostSettings] = useState(false);

  // ----- image uploader starts here -----
  const [images, setImages] = useState([]);
  const fileInputRef = useRef();

  const handleFileInputChange = (event) => {
    const newImages = [];
    const files = event.target.files;

    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      if (file.type.startsWith("image/")) {
        if (images.length >= 4) {
          alert("You can only upload up to 4 images.");
          return;
        }

        newImages.push(file);
      }
    }

    setImages([...images, ...newImages]);
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  // --------- video uploader stops here --------

  // custom button states
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [muted, setMuted] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);
  const videoRef = useRef();
  const progressBarRef = useRef();
  const volumeBarRef = useRef();

  // ------ custom video starts here ------
  const togglePlay = () => {
    setPlaying(!playing);
    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  };

  const handleTimeUpdate = () => {
    setCurrentTime(videoRef.current.currentTime);
    progressBarRef.current.value = videoRef.current.currentTime;
  };

  const handleLoadedMetadata = () => {
    setDuration(videoRef.current.duration);
    progressBarRef.current.max = videoRef.current.duration;
  };

  const handleProgressChange = () => {
    videoRef.current.currentTime = progressBarRef.current.value;
  };

  const handleVolumeChange = () => {
    const newVolume = volumeBarRef.current.value;
    videoRef.current.volume = newVolume;
    setVolume(newVolume);
    setMuted(false);
  };

  const toggleMute = () => {
    const newMuted = !muted;
    videoRef.current.volume = newMuted ? 0 : volume;
    setMuted(newMuted);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const handlePlaybackRateChange = (rate) => {
    setPlaybackRate(rate);
    videoRef.current.playbackRate = rate;
  };

  // --------- custom video stops here --------

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

        <div
          className={styles.post__compose__container}
          style={{ display: "" }}
        >
          <div className={styles.pcc__child}>
            <div style={{ display: "" }}>
              <textarea
                className={`${styles.post__data__content} ${styles.title__content}`}
                placeholder="Post Title"
                defaultValue={""}
              />
            </div>
            <div>
              <textarea
                className={styles.post__data__content}
                placeholder="Start Post"
                defaultValue={""}
              />
            </div>
          </div>
          {/* image/video */}
          <div className={styles.media__preview} style={{ display: "" }}>
            {/* this is image parent container */}
            <div style={{ display: "flex" }}>
              {images.map((image, index) => (
                <div key={index} className={styles.img___hol}>
                  {/* To use the image component, add width and height to the image. use css */}
                  <img
                    src={URL.createObjectURL(image)}
                    alt="girl"
                    className={styles.img__media__preview}
                  />
                </div>
              ))}
            </div>

            {/* this is video parent container */}
            <div className={styles.vid___hol}>
              <div>
                <video
                  src="/vid.mp4"
                  ref={videoRef}
                  onTimeUpdate={handleTimeUpdate}
                  onLoadedMetadata={handleLoadedMetadata}
                  muted={muted}
                  className={styles.vid__media__preview}
                />
                <div>
                  <button onClick={togglePlay}>
                    {playing ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        width="24px"
                        height="24px"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        width="24px"
                        height="24px"
                      >
                        <path d="M8 5v14l11-7z" fill="none" />
                        <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                      </svg>
                    )}
                  </button>
                  <button onClick={toggleMute}>
                    {muted ? <p>muted</p> : <p>unmute</p>}
                  </button>
                  <div>
                    <span>
                      {formatTime(currentTime)} / {formatTime(duration)}
                    </span>
                    <input
                      type="range"
                      ref={progressBarRef}
                      onChange={handleProgressChange}
                    />
                  </div>
                  <div>
                    <span>Volume:</span>
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.1"
                      value={volume}
                      ref={volumeBarRef}
                      onChange={handleVolumeChange}
                    />
                  </div>

                  <div>
                    <span>Speed:</span>
                    <button onClick={() => handlePlaybackRateChange(0.5)}>
                      0.5x
                    </button>
                    <button onClick={() => handlePlaybackRateChange(1)}>
                      1x
                    </button>
                    <button onClick={() => handlePlaybackRateChange(1.5)}>
                      1.5x
                    </button>
                    <button onClick={() => handlePlaybackRateChange(2)}>
                      2x
                    </button>
                  </div>
                </div>
              </div>
            </div>
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
              accept="image/*"
              multiple
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleFileInputChange}
            />

            <div className={styles._sxvg_div}>
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
              <button className={styles.data_vh_post}>Post</button>
            </div>
          </div>
        </div>
      </div>
      {/* div.timeline -> middle */}
    </HomeLayout>
  );
};

export default CreatePostScreen;
