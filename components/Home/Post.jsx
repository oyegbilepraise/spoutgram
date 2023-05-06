import styles from "@/layout/HomeLayout/HomeLayout.module.css";
import ProfileImage from "./ProfileImage";
import HomeVideo from "./HomeVideo";
import ImageCarousels from "./ImageCarousels";

const Post = () => {
  const posts = [
    {
      id: 1,
      ProfileImage: <ProfileImage />,
      title: "My take on this SVB Debacle.",
      description: "there is something new happening everyday.",
    },
  ];

  return (
    <div>
      {posts.map(({ id, ProfileImage, title, description }) => {
        return (
          <div key={id} className={`${styles.div} ${styles.data_content}`}>
            {ProfileImage}
            <div
              className={`${styles.data_content_all} ${styles._00dca} ${styles.data_no_content}`}
            >
              <div>
                <span className={styles._ttl_top}>{title}</span>
              </div>

              <div>
                <span className={styles._ttl_contxt}>{description}</span>
              </div>
              {/* John, this is the ImageCarousels */}
              <ImageCarousels />
              <div className={styles.div__for__vid}>
                {/* John, this is the video */}
                <HomeVideo />
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
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Post;
