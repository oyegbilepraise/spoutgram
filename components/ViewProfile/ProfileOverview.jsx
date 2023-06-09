import styles from "@/layout/HomeLayout/HomeLayout.module.css";
import Image from "next/image";
import img from "../../images/me.jpeg";
import { useEffect, useState } from "react";

const ProfileOverview = () => {
  const [showSubscribe, setShowSubscribe] = useState(false);
  const [showMore, setShowMore] = useState(false);

  // remove and set overflow
  useEffect(() => {
    if (showSubscribe) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [showSubscribe]); 

  return (
    <div className={styles.the__starting__point}>
      <div>
        <div className={styles.sxuiip}>
          <div className={styles._000data__img__div}>
            <Image src={img} alt="img" className={styles.profile_img} />
          </div>
          <div>
            <div className={styles.dxcWAsd}>
              {/* <span className={`${styles.user_data_name} ${styles.yuv_usr}`}>
                Penuel John 
              </span>
              <div>
                <span className={styles.user_data_unique}>@penueljohn</span>
              </div> */}
              <span className={styles._all00xcuunt}>
                <span className={styles.xoxtrn}>
                  200K 
                  <span className={styles.xyxxn}>followers</span>
                </span>
                <span className={styles.xoxtrn}>
                  190K 
                  <span className={styles.xyxxn}>following</span>
                </span>
                <span className={styles.xoxtrn}>
                  19.2K 
                  <span className={styles.xyxxn}>members</span>
                </span>
              </span>
              <div>
                <span className={styles.absolute__me__now} style={{display: "none"}}>
                  {/* {/* <button className="follow__user">Edit Profile</button> * /} */}
                  <button className={`${styles.follow__user}`}>
                    Follow
                  </button>
                  <button
                    className={`${styles.follow__user}`}
                    // style={{ display: "none" }}
                  >
                    Message
                  </button>
                  <button
                    className={`${styles.follow__user}`}
                    style={{ display: "none" }}
                  >
                    Edit Profile
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div style={{position: "relative"}}>
          {/*  */}
          <span className={styles.absolute__me__now}>
            {/* {/* <button className="follow__user">Edit Profile</button> * /} */}
            <button className={`${styles.follow__user}`}>
              Follow
            </button>
            <button
              className={`${styles.follow__user}`}
              // style={{ display: "none" }}
            >
              Message
            </button>
            <button
              className={`${styles.follow__user}`}
              style={{ display: "none" }}
            >
              Edit Profile
            </button>
          </span>
          <div>
            <span className={`${styles.user_data_name} ${styles.yuv_usr}`}>
              Penuel John 
              <svg class={styles.spoutgram_verified} label="spoutgram-verified" value="verified" width="338" height="338" viewBox="0 0 338 338" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M314.761 169L337.357 99.2754L272.08 65.9196L238.724 0.642578L169 23.2385L99.2755 0.642578L65.9197 65.9196L0.6427 99.2754L23.2386 169L0.6427 238.724L65.9197 272.08L99.2755 337.357L169 314.761L238.724 337.357L272.08 272.08L337.357 238.724L314.761 169ZM152.143 243.315L89.735 180.908L113.55 157.092L152.143 195.684L241.235 106.592L265.05 130.408L152.143 243.315Z" fill="url(#paint0_linear_310_3)"/>
                <defs>
                    <linearGradient id="paint0_linear_310_3" x1="241" y1="4" x2="99.5" y2="346.5" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#00FFF0"/>
                        <stop offset="1" stop-color="#0070D7"/>
                    </linearGradient>
                </defs>
              </svg>
            </span>
            <div>
              <span className={styles.user_data_unique}>@penueljohn</span>
            </div>
          </div>
          <div>
            <span className={styles.user_data_about}>
              For most startups, better shape translates into two things: to have
              a better product with more users, and to have more options for
              raising money.
            </span>
            <span className={styles.span__data__prfl}>
              <svg
                className={styles.xnprlf__icn}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12 20.8995L16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995ZM12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 15C9.79086 15 8 13.2091 8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15Z" />
              </svg>

              <span className={styles.pfl__data}>Miami, USA</span>
            </span>
          </div>
          <div>
            <span>
              <span className={styles.span__data__prfl}>
                <svg
                  className={styles.xnprlf__icn}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M7 5V2C7 1.44772 7.44772 1 8 1H16C16.5523 1 17 1.44772 17 2V5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V6C2 5.44772 2.44772 5 3 5H7ZM4 16V19H20V16H4ZM4 14H20V7H4V14ZM9 3V5H15V3H9ZM11 11H13V13H11V11Z" />
                </svg>
                <span className={styles.pfl__data}>Creator</span>
              </span>
              <span className={styles.span__data__prfl}>
                <span style={{ display: "flex", marginRight: "25px" }}>
                  <svg
                    className={styles.xnprlf__icn}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.3643 15.5353L16.95 14.1211L18.3643 12.7069C20.3169 10.7543 20.3169 7.58847 18.3643 5.63585C16.4116 3.68323 13.2458 3.68323 11.2932 5.63585L9.87898 7.05007L8.46477 5.63585L9.87898 4.22164C12.6127 1.48797 17.0448 1.48797 19.7785 4.22164C22.5121 6.95531 22.5121 11.3875 19.7785 14.1211L18.3643 15.5353ZM15.5358 18.3638L14.1216 19.778C11.388 22.5117 6.9558 22.5117 4.22213 19.778C1.48846 17.0443 1.48846 12.6122 4.22213 9.87849L5.63634 8.46428L7.05055 9.87849L5.63634 11.2927C3.68372 13.2453 3.68372 16.4112 5.63634 18.3638C7.58896 20.3164 10.7548 20.3164 12.7074 18.3638L14.1216 16.9496L15.5358 18.3638ZM14.8287 7.75717L16.2429 9.17139L9.17187 16.2425L7.75766 14.8282L14.8287 7.75717Z" />
                  </svg>
                  <span className={`${styles.pfl__data} ${styles.user__link}`}>
                    https://linktr.ee/xyz
                  </span>
                </span>

                <span style={{ display: "flex" }}>
                  <svg
                    className={styles.xnprlf__icn}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 11H4V19H20V11ZM8 13V15H6V13H8ZM13 13V15H11V13H13ZM18 13V15H16V13H18ZM7 5H4V9H20V5H17V7H15V5H9V7H7V5Z" />
                  </svg>
                  <span className={styles.pfl__data}>Joined January 2004</span>
                </span>
              </span>
            </span>
          </div>
          {/*  */}
        </div>  

        <div style={{display: "flex", position: "relative"}}>
          <button
            // style={{ display: "none" }}
            onClick={() => setShowSubscribe((prev) => !prev)}
            className={`${styles.follow__user} ${styles.fu_xyz}`}>
            Subscribe
          </button>
          <div className={styles.xyx__more__Profile} style={{ position: "relative", height: "32px", width: "32px" }}>
          <svg style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8e8e8e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>
            {/* <svg width={15} height={4} viewBox="0 0 18 4" fill="none" xmlns="http://www.w3.org/2000/svg"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
              >
              <circle cx={2} cy={2} r="1.2" fill="#8e8e8e" stroke="#8e8e8e" strokeWidth="1.6" />
              <circle cx={9} cy={2} r="1.2" fill="#8e8e8e" stroke="#8e8e8e" strokeWidth="1.6" />
              <circle cx={16} cy={2}  r="1.2" fill="#8e8e8e" stroke="#8e8e8e" strokeWidth="1.6" />
            </svg> */}
          </div>
        </div>

        {/*  */}
        <span style={{display : "none", marginTop: "10px"}}>
          <span className={styles.span__pv__p}><span className={styles.span__pv}>12K</span> Post</span>
          <span className={styles.span__pv__p}><span className={styles.span__pv}>1.0K</span> Post views</span>
        </span>
        {/*  */}
      </div>

      {/* more__button */}

      <div className={styles.span__xyz}>
        <div
          className="xyx__more__Profile"
          style={{ position: "relative", height: "32px", width: "32px" }}
          onClick={() => setShowMore((prev) => !prev)}
        >
          {/* <svg width={15} height={4} viewBox="0 0 18 4" fill="none" xmlns="http://www.w3.org/2000/svg"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
            >
            <circle cx={2} cy={2} r="1.2" fill="#8e8e8e" stroke="#8e8e8e" strokeWidth="1.6" />
            <circle cx={9} cy={2} r="1.2" fill="#8e8e8e" stroke="#8e8e8e" strokeWidth="1.6" />
            <circle cx={16} cy={2}  r="1.2" fill="#8e8e8e" stroke="#8e8e8e" strokeWidth="1.6" />
          </svg> */}

          <svg
           style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
           xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8e8e8e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        </div>

        {/* am sorry I edited your code here you'll need to adjust the styling again, I was having issue that's why I edited it  */}
        {showMore && (
          <div className={styles.more_explained__prof}>
            <div>
              <span
                style={{ color: "red" }}
                className={styles.xmmx___stan__prof}
              >
                Block this user
              </span>
              <span className={styles.xmmx___stan__prof}>
                Share this profile
              </span>
            </div>
          </div>
        )}
      </div>

      {/* subscribe modal ---> this is the subscribe modal to pay for the content */}
      {showSubscribe && (
        <div className={styles.subscription__modal}>
          <div className={styles.subscription__modal__container}>
            <div className="cover___photo">
              {/* <img src="/images/default/banner.jpg" className="submodal__cover" /> */}
              <div
                className={styles.div__subsvrib__pht}
                style={{ textAlign: "center" }}
              >
                <Image src={img} className={styles.submodal__ppic} />
              </div>
              <div className={styles.subprofile___show}>
                <h5>Penuel John</h5>
                <h6>@penueljohn</h6>
              </div>
            </div>
            <div>
              <div>
                <h6 className={styles.sagtb}>
                  SUBSCRIBE AND GET THIS BENEFITS:
                </h6>
              </div>
              <div className={styles.what_t_b}>
                <div>
                  <div>
                    <svg
                      className={styles.svg__sub__check}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11.0026 16L6.75999 11.7574L8.17421 10.3431L11.0026 13.1716L16.6595 7.51472L18.0737 8.92893L11.0026 16Z"></path>
                    </svg>
                  </div>
                  <div>
                    <h6>Get full access to exclusive content</h6>
                  </div>
                </div>
                <div>
                  <div>
                    <svg
                      className={styles.svg__sub__check}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11.0026 16L6.75999 11.7574L8.17421 10.3431L11.0026 13.1716L16.6595 7.51472L18.0737 8.92893L11.0026 16Z"></path>
                    </svg>
                  </div>
                  <div>
                    <h6>Get exclusive access to meet and greet</h6>
                  </div>
                </div>
                <div>
                  <div>
                    <svg
                      className={styles.svg__sub__check}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11.0026 16L6.75999 11.7574L8.17421 10.3431L11.0026 13.1716L16.6595 7.51472L18.0737 8.92893L11.0026 16Z"></path>
                    </svg>
                  </div>
                  <div>
                    <h6>Get behind the scenes of content production</h6>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className={styles.subscribemodal__btn}>
                <h6>SUBSCRIBE</h6>
                <span>$10</span>
              </div>
            </div>
            <div className={styles.subcanmdl__div}>
              <h6
                className={styles.cancel__submdl}
                onClick={() => setShowSubscribe((prev) => !prev)}
              >
                CANCEL
              </h6>
            </div>
          </div>
        </div>
      )}

      {/* subscribe modal */}
    </div>
  );
};

export default ProfileOverview;