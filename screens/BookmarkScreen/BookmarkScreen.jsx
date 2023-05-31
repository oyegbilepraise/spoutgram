import { HomeLayout } from '@/layout'
import styles from '@/layout/HomeLayout/HomeLayout.module.css'
import { useDispatch } from 'react-redux'
import { getAllBoomarks } from '@/redux/slices/postSlice/postSlice'
import { useEffect, useState } from 'react'
import { useRouter } from "next/router";
import Post from '@/components/Home/Post'
import ProfileImage from '@/components/Home/ProfileImage'

const BookmarkScreen = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true)
  const [bookmarks, setBookmarks] = useState()
  useEffect(() => {
    getBoomarks()
  }, [])
  const getBoomarks = async () => {
    try {
      const res = await dispatch(getAllBoomarks())
      console.log(res.payload.data);
      setBookmarks(res.payload.data)
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  const router = useRouter();
  const handleGoBack = () => {
    router.back(); // Go back to the previous page or route
  };

  return (
    <HomeLayout>
      <div>
        <nav className={styles.___main_nav}>
          <div>
            <span class={styles.icon_back} onClick={handleGoBack}>
              <svg class={styles._00_history__back} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(90, 90, 90)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H6M12 5l-7 7 7 7" /></svg>
            </span>
            <span class={styles.not_home_nav_text}>Bookmarks</span>
            <span class={styles.data_count_bookm}>
              0 post
            </span>
          </div>
        </nav>
        <div class={`${styles.timeline} ${styles._000middlebar}`}>
          {loading ? (
            <div>
              loading...
            </div>

          ) : (
            <div>
              {bookmarks.map((b, i) => {
                return <div className={`${styles.div} ${styles.data_content}`}>
                  <ProfileImage post={b} />
                  <div
                    className={`${styles.data_content_all} ${styles._00dca} ${styles.data_no_content}`}
                  >
                    {route?.one ? (
                      <Link href={`${route.one}${post._id}`}>
                        <div>
                          <div>
                            <span className={styles._ttl_top}>
                              {post?.post[0]?.title}
                            </span>
                          </div>

                          <div className={styles.preline}>
                            <span className={styles._ttl_contxt}>
                              {post?.post[0]?.desc?.length > 300 ? (
                                <span>
                                  {more
                                    ? post?.post[0]?.desc
                                    : `${post?.post[0]?.desc?.substring(
                                      0,
                                      300
                                    )}...`}{" "}
                                  <button
                                    style={{ color: "grey" }}
                                    onClick={() => setMore(!more)}
                                  >
                                    {more ? "see less" : "see more"}
                                  </button>
                                </span>
                              ) : (
                                post?.post[0]?.desc
                              )}
                            </span>
                          </div>
                        </div>
                        {/* John, this is the ImageCarousels */}
                        {post?.post[0]?.postImage?.length !== 0 && (
                          <ImageCarousels postImage={post?.post[0]?.postImage} />
                        )}
                        {post?.post[0]?.postVideo?.length !== 0 && (
                          <div className={styles.div__for__vid}>
                            {/* John, this is the video */}
                            <HomeVideo postVideo={post?.post[0]?.postVideo} />
                          </div>
                        )}
                      </Link>
                    ) : (
                      <div>
                        <div>
                          <div>
                            <span className={styles._ttl_top}>
                              {post?.post[0]?.title}
                            </span>
                          </div>

                          <div>
                            <span className={styles._ttl_contxt}>
                              {post?.post[0]?.desc?.length > 300 ? (
                                <span>
                                  {more
                                    ? post?.post[0]?.desc
                                    : `${post?.post[0]?.desc?.substring(
                                      0,
                                      300
                                    )}...`}{" "}
                                  <button
                                    style={{ color: "grey" }}
                                    onClick={() => setMore(!more)}
                                  >
                                    {more ? "see less" : "see more"}
                                  </button>
                                </span>
                              ) : (
                                post?.post[0]?.desc
                              )}
                            </span>
                          </div>
                        </div>
                        {/* John, this is the ImageCarousels */}
                        {post?.post[0]?.postImage?.length !== 0 && (
                          <ImageCarousels postImage={post?.post[0]?.postImage} />
                        )}
                        {post?.post[0]?.postVideo?.length !== 0 && (
                          <div className={styles.div__for__vid}>
                            {/* John, this is the video */}
                            <HomeVideo postVideo={post?.post[0]?.postVideo} />
                          </div>
                        )}
                      </div>
                    )}

                    {/* comment route */}
                    {/* {`@${post?.user?.username}/comment/${post._id}`} */}
                    <div className={styles._00ftr_pst}>
                      <span className={`${styles._00mn_span}`} onClick={handleLike}>
                        <span>
                          {!isLiked ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className={`${styles.red} ${styles.x_icn_ftr} ${styles.redheart} ${styles.post__heart}`}
                              viewBox="0 0 24 24"
                              width={24}
                              height={24}
                            >
                              <path fill="none" d="M0 0H24V24H0z" />
                              <path
                                d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2zm-3.566 
                                                                  15.604c.881-.556 1.676-1.109 2.42-1.701C18.335 14.533 20 11.943 20 9c0-2.36-1.537-4-3.5-4-1.076 0-2.24.57-3.086 1.414L12 
                                                                  7.828l-1.414-1.414C9.74 5.57 8.576 5 7.5 5 5.56 5 4 6.656 4 9c0 2.944 1.666 5.533 4.645 7.903.745.592 1.54 1.145 2.421 
                                                                  1.7.299.189.595.37.934.572.339-.202.635-.383.934-.571z"
                              />
                            </svg>
                          ) : (
                            <svg
                              className={`${styles.x_icn_ftr} ${styles.likeheart}`}
                              style={{ fill: "#ff00ff" }}
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              width={24}
                              height={24}
                            >
                              <path fill="none" d="M0 0H24V24H0z" />
                              <path d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2z" />
                            </svg>
                          )}
                        </span>
                        <span className={styles._00mn_spn_cnt}>
                          {likes?.length > 0 && likes?.length}
                        </span>
                      </span>

                      <span className={styles._00mn_span} onClick={openModal}>
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
                        <span className={styles._00mn_spn_cnt}>
                          {post?.post[0]?.comment > 0 && post?.post[0]?.comment}
                        </span>
                      </span>

                      <span
                        className={styles._00mn_span}
                        onClick={() => dispatch(repostAction(post._id))}
                      >
                        <span>
                          {/* this is the normal repost icon /> */}
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
                        <span className={styles._00mn_spn_cnt}>
                          {post?.post[0]?.repost.length}
                        </span>
                      </span>
                      <span className={styles._00mn_span} onClick={handleBookmark}>
                        <span>
                          {!isBookmarked ? (
                            <svg
                              className={`${styles.blue} ${styles.x_icn_ftr}`}
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                            >
                              <path d="M5 2H19C19.5523 2 20 2.44772 20 3V22.1433C20 22.4194 19.7761 22.6434 19.5 22.6434C19.4061 22.6434 19.314 22.6168 19.2344 22.5669L12 18.0313L4.76559 22.5669C4.53163 22.7136 4.22306 22.6429 4.07637 22.4089C4.02647 22.3293 4 22.2373 4 22.1433V3C4 2.44772 4.44772 2 5 2ZM18 4H6V19.4324L12 15.6707L18 19.4324V4Z" />
                            </svg>
                          ) : (
                            <svg
                              className={`${styles.blue} ${styles.x_icn_ftr}`}
                              xmlns="http://www.w3.org/2000/svg"
                              style={{ fill: "#00acee" }}
                              viewBox="0 0 24 24"
                            >
                              <path d="M5 2H19C19.5523 2 20 2.44772 20 3V22.1433C20 22.4194 19.7761 22.6434 19.5 22.6434C19.4061 22.6434 19.314 22.6168 19.2344 22.5669L12 18.0313L4.76559 22.5669C4.53163 22.7136 4.22306 22.6429 4.07637 22.4089C4.02647 22.3293 4 22.2373 4 22.1433V3C4 2.44772 4.44772 2 5 2Z" />
                            </svg>
                          )}
                        </span>
                        <span className={styles._00mn_spn_cnt}>{post?.post[0]?.bookmarks.length}</span>
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
                        <span className={styles._00mn_spn_cnt}>{_views?.length}</span>
                      </span>
                    </div>
                  </div>
                </div>
              })}
              {/* <Post posts={bookmarks} loading={loading} /> */}
            </div>
          )}
          {bookmarks && bookmarks.length < 0 && (
            <div class={styles.nbyd}>
              <div>
                <svg class={styles.nbyd__svg} width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path stroke="rgb(200, 200, 200)" d="M6.57426 12.9227L0.8 16.5522V4C0.8 2.23269 2.23269 0.8 4 0.8H10C11.7673 0.8 13.2 2.23269 13.2 4V16.5522L7.42574 12.9227L7 12.6551L6.57426 12.9227Z" stroke-width="1.6" />
                </svg>
                <div>
                  <span class={styles.nby_txt}>No bookmarks yet.</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* div.timeline -> middle */}
    </HomeLayout>
  )
}

export default BookmarkScreen