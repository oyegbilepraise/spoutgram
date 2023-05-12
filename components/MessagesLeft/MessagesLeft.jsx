import img from '../../images/default-photo.svg'
import Image from 'next/image'
import styles from '@/layout/HomeLayout/HomeLayout.module.css'

const MessagesLeft = () => {
    return  (
        <>
            <div className={styles.left__mssg__div}>
                {/* if no messages */}
                <div className="nbyd meesg_byd" style={{ display: "none" }}>
                    <div>
                    <svg
                        className={styles.nbyd__svg}
                        width={18}
                        height={18}
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        stroke="rgb(200, 200, 200)"
                        d="M5 0.8H13C15.3196 0.8 17.2 2.6804 17.2 5V11.2C17.2 13.5196 15.3196 15.4 13 15.4H5.85C4.09054 15.4 2.36054 15.8169 0.8 16.6111V5C0.8 2.6804 2.6804 0.8 5 0.8Z"
                        strokeWidth="1.6"
                        />
                        <rect
                        x="5.375"
                        y="6.375"
                        width="7.25"
                        height="0.75"
                        rx="0.375"
                        stroke="rgb(200, 200, 200)"
                        strokeWidth="0.75"
                        />
                        <rect
                        x="5.375"
                        y="9.375"
                        width="5.25"
                        height="0.75"
                        rx="0.375"
                        stroke="rgb(200, 200, 200)"
                        strokeWidth="0.75"
                        />
                    </svg>
                    <div>
                        <span className={styles.nby_txt}>No messages yet.</span>
                    </div>
                    </div>
                </div>
                <div className={styles.hold__conversations__container}>
                    {/*  */}
                    <nav>
                    <div>
                        <span className={styles.prfon_back_img}>
                        <img
                            src="../app__assets/images/default/default-photo.svg"
                            className={styles.img__cht__prfl}
                        />
                        </span>
                        <span className="not-home-nav-text messg_nv_txt_hdr">
                        Ikenna Gabriel
                        </span>
                    </div>
                    </nav>
                    <div className={styles.messages__main__chatbox}>
                    {/*  */}
                    <div className={styles.users__chat__metadata}>
                        <div>
                        <img
                            src="../app__assets/images/default/default-photo.svg"
                            className={styles.profile__chat__usdata}
                        />
                        </div>
                        <div>
                        <span className="_0022_nm_usr chat_userdta">
                            Ikenna Gabriel
                            <span>@username</span>
                        </span>
                        <span className={styles.joid__msnx}>
                            <svg
                            className={styles.xnprlf__icn}
                            width={20}
                            height={19}
                            viewBox="0 0 20 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <rect
                                x="0.8"
                                y="1.8"
                                width="18.4"
                                height="16.4"
                                rx="1.2"
                                stroke="#808080"
                                strokeWidth={2}
                            />
                            <rect
                                x="4.5"
                                y="7.5"
                                width={1}
                                height={1}
                                fill="#808080"
                                stroke="#808080"
                            />
                            <rect
                                x="4.5"
                                y="11.5"
                                width={1}
                                height={1}
                                fill="#808080"
                                stroke="#808080"
                            />
                            <rect
                                x="9.5"
                                y="11.5"
                                width={1}
                                height={1}
                                fill="#808080"
                                stroke="#808080"
                            />
                            <rect
                                x="4.5"
                                y="0.5"
                                width={1}
                                height={3}
                                rx="0.5"
                                fill="#808080"
                                stroke="#808080"
                            />
                            <rect
                                x="14.5"
                                y="0.5"
                                width={1}
                                height={3}
                                rx="0.5"
                                fill="#808080"
                                stroke="#808080"
                            />
                            <rect
                                x="9.5"
                                y="7.5"
                                width={1}
                                height={1}
                                fill="#808080"
                                stroke="#808080"
                            />
                            <rect
                                x="14.5"
                                y="7.5"
                                width={1}
                                height={1}
                                fill="#808080"
                                stroke="#808080"
                            />
                            </svg>
                            <span className={styles.pfl__data}>Joined January 2004</span>
                        </span>
                        </div>
                    </div>
                    <span className={styles.response__holder}>
                        <span className={styles.response}>Hi, How are you doing?</span>
                        <span className={styles.response__timestamp}>11:20am</span>
                    </span>
                    <span className={styles.reply__holder}>
                        <span className={styles.replycontainer}>
                        <span>
                            <span className={styles.reply}>I am good, whatsup?</span>
                            <span className={styles.reply__timestamp}>11:20am</span>
                        </span>
                        </span>
                    </span>
                    <span className={styles.reply__holder}>
                        <span className={styles.replycontainer}>
                        <span>
                            <span className={styles.reply}>
                            I am fine. How do you see Spoutgram, it's lit, innit?
                            </span>
                            <span className={styles.reply__timestamp}>11:20am</span>
                        </span>
                        </span>
                    </span>
                    <span className={styles.response__holder}>
                        <span className={styles.response}>
                        Like ....
                        <br />
                        <br />I love it!!!
                        </span>
                        <span className={styles.response__timestamp}>11:20am</span>
                    </span>
                    <span className={styles.response__holder}>
                        <span className={styles.response}>
                        Like ....
                        <br />
                        <br />I lit stuff!!!
                        </span>
                        <span className={styles.response__timestamp}>11:20am</span>
                    </span>
                    {/*  */}
                    </div>
                    {/* message footer */}
                    <footer className={styles.footer__for__messgs}>
                    <div>
                        <textarea
                        className={styles.message_chat_box}
                        placeholder="Send a message"
                        defaultValue={""}
                        />
                    </div>
                    <div>{/* svg */}</div>
                    </footer>
                    {/* message footer */}
                </div>
            </div>
        </>
    )
}
    
export default MessagesLeft