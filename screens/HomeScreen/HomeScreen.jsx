import { HomeLayout } from "@/layout";
import Image from "next/image";

// import './HomeScreen.module.css'
import styles from "@/layout/HomeLayout/HomeLayout.module.css";
import Post from "@/components/Home/Post";
import { useState } from "react";

const HomeScreen = () => {
  const [showPostSettings, setShowPostSettings] = useState(false);

  return (
    <HomeLayout>
      <div className={`${styles.timeline} ${styles._000middlebar}`}>
        <nav className={styles.___main_nav}>
          <span>Home</span>
        </nav>
        {/* compose post */}
        <div className={styles.post__compose__container}>
          <div className={styles.pcc__child}>
            <div style={{ display: "none" }}>
              <textarea
                className={`${styles.post__data__content} ${styles.title__content}`}
                placeholder="Post Title"
                defaultValue={""}
              />
            </div>
            <div>
              <textarea
                className={styles.post__data__content}
                placeholder="What's in the spotlight?"
                defaultValue={""}
              />
            </div>
          </div>
          {/* image/video */}
          <div className={styles.media__preview} style={{ display: "none" }}>
            <Image src="" alt="" className={styles.img__media__preview} />
            <video src="" className={styles.vid__media__preview} controls="" />
          </div>
          {/* image/video */}
          <div className={`${styles.img} ${styles.vid} ${styles.__09xfgc}`}>
            <div className={styles._sxvg_div}>
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
        {/* compose post */}
        {/* post */}
        <Post />
        {/* post */}
      </div>
    </HomeLayout>
  );
};

export default HomeScreen;
