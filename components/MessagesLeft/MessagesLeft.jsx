import imgOne from "../../images/me.jpeg";
import default_img from "../../images/onlyf.jpg"
import Image from 'next/image'
import styles from '@/layout/HomeLayout/HomeLayout.module.css'
import { TypeLoader } from "../../components";
import { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { sendMessage } from "@/redux/slices/messageSlice/messageSlice";
import { useFormik } from "formik";

const MessagesLeft = ({ eachMessage }) => {
    const [message, setMessage] = useState(eachMessage);
    const dispatch = useDispatch();
    useEffect(() => {
        setMessage(eachMessage)
    }, [eachMessage])

    console.log({ message });

    const formik = useFormik({
        initialValues: { text: "", image: null },
        onSubmit: (values) => {
            handleSendMessage(values)
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
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    function toggleEmoji() {
        setIsEmojiOpen(prevState => !prevState);
    }
    function handleButtonClickk(event) {
        event.stopPropagation();
        toggleEmoji();
    }
    //img upld
    const [image, setImage] = useState(null);
    // Function to handle image upload
    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            setImage(e.target.result);
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    };
    // Function to handle image removal
    const handleImageRemove = () => {
        setImage(null);
    };
    const handleSendMessage = async (values) => {
        console.log({ values });
        try {
            const formData = new FormData();
            formData.append("message", values.text);
            formData.append("status", false);
            formData.append("to", message._id);
            const res = await dispatch(sendMessage(formData));
            if (res.payload) {
                let newMessage = { ...message.messages, ...res.payload.data }
                // setMessage(newMessage)
                console.log(newMessage);
            }
            console.log(res);
            // values.text = "";
            // values.image = "";
            // setImage(null);
            // router.push(Routes.HOME);
        } catch (error) {
            console.log({ error });
        }
    }
    return (
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
                    <nav className={styles.___main_nav}
                        style={{ borderBottom: "transparent" }}
                    >
                        <div style={{ paddingTop: "0px" }}>
                            <span className={styles.prfon_back_img}>
                                <Image
                                    alt="..."
                                    src={imgOne}
                                    className={styles.img__cht__prfl}
                                />
                            </span>
                            <div style={{ paddingTop: "4px" }}>
                                <span
                                    style={{ fontSize: "18.2px", paddingTop: "0px", fontFamily: "var(--global-medium)" }}
                                    className={`${styles.not_home_nav_text} ${styles.messg_nv_txt_hdr}`}>
                                    Penuel John
                                </span>
                            </div>
                        </div>
                    </nav>
                    <div className={styles.popplin__yyyhjjg}>
                        <div className={styles.messages__main__chatbox}>
                            {/*  */}
                            <div className={styles.users__chat__metadata}>
                                <div>
                                    <Image
                                        alt="..."
                                        src={imgOne}
                                        className={styles.profile__chat__usdata}
                                    />
                                </div>
                                <div>
                                    <span className={`${styles._0022_nm_usr} ${styles.chat_userdta}`}>
                                        Penuel John
                                        <span>@penuel__king</span>
                                    </span>
                                </div>
                            </div>
                            <span className={styles.response__holder}>
                                <span className={styles.response} style={{ color: "transparent" }}>
                                    <TypeLoader />
                                    Type
                                </span>
                                {message.messages.map((m, i) => {
                                    return <span>
                                        <span className={styles.response}>{m.message}</span>
                                        {/* <Image src={imgOne} className={styles.response__pic} /> */}
                                        {/* <span className={styles.response__timestamp}>11:20am&nbsp;-&nbsp;01 May 23 -&nbsp;<span style={{ color: "var(--brand-color)" }}>Delivered</span></span> */}
                                    </span>
                                })}
                            </span>
                            {/* <span className={styles.reply__holder}>
                                <span className={styles.replycontainer}>
                                    <span>
                                        <span className={styles.reply}>Hi</span>
                                        <span className={styles.reply}>I am good, whatsup?</span>
                                        <Image src={imgOne} className={styles.reply__pic} />
                                        <span className={styles.reply__timestamp}>11:20am&nbsp;-&nbsp;01 May 23 -&nbsp;<span style={{ color: "var(--brand-color)" }}>Seen</span></span>
                                    </span>
                                </span>
                            </span>
                            <span className={styles.reply__holder}>
                                <span className={styles.replycontainer}>
                                    <span>
                                        <span className={styles.reply}>
                                            I am fine. How do you see Spoutgram, it's lit, innit?
                                        </span>
                                        <span className={styles.reply__timestamp}>11:21am&nbsp;-&nbsp;01 May 23 -&nbsp;<span style={{ color: "var(--brand-color)" }}>Delivered</span></span>
                                    </span>
                                </span>
                            </span>
                            <span className={styles.response__holder}>
                                <span className={styles.response}>
                                    Like ....
                                    <br />
                                    <br />I love it!!!
                                </span>
                                <span className={styles.response__timestamp}>11:24am&nbsp;-&nbsp;01 May 23 -&nbsp;<span style={{ color: "var(--brand-color)" }}>Delivered</span></span>
                            </span>
                            <span className={styles.response__holder}>
                                <span className={styles.response}>
                                    Like ....
                                    <br />
                                    <br />I lit stuff!!!
                                </span>
                                <span className={styles.response__timestamp}>11:25am&nbsp;-&nbsp;01 May 23 -&nbsp;<span style={{ color: "var(--brand-color)" }}>Delivered</span></span>
                            </span> */}
                            {/*  */}
                        </div>
                    </div>

                    {/* message footer */}
                    <form onSubmit={formik.handleSubmit}>
                        {image && (
                            <div className={styles.xqina__xqina}>
                                <div style={{ position: "relative" }}>
                                    <svg onClick={handleImageRemove}
                                        style={{ width: "37px", height: "37px", position: "absolute", fill: "black", right: "-10px", top: "-8px", cursor: "pointer" }}
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 10.5858L9.17157 7.75736L7.75736 9.17157L10.5858 12L7.75736 14.8284L9.17157 16.2426L12 13.4142L14.8284 16.2426L16.2426 14.8284L13.4142 12L16.2426 9.17157L14.8284 7.75736L12 10.5858Z"></path></svg>
                                    <img priority src={image} className={styles.lllllo} style={{ width: "100%", borderRadius: "15px", objectFit: "cover" }} />
                                </div>
                            </div>
                        )}
                        <footer className={styles.footer__for__messgs}>
                            <div>
                                <textarea
                                    className={styles.message_chat_box}
                                    placeholder="Send a message"
                                    onChange={formik.handleChange}
                                    value={formik.values.text}
                                    name="text"
                                    id=""
                                />
                            </div>
                            <div style={{ display: "flex" }}>
                                <div className={styles.circle__icn__msg} onMouseDown={handleButtonClickk}>
                                    {/* emoji container */}
                                    {isEmojiOpen && (
                                        <div className={styles.emoji__msg__ggy} ref={emojiRef}>
                                            <div>
                                                <div>
                                                    <input type="search" name="" id="" placeholder="Search emojis" className={styles.search__emojis} />
                                                </div>
                                                <div style={{ width: "100%", height: "95px", overflowY: "auto" }}>
                                                    {/* emoji here */}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    {/* emoji container */}

                                    <svg className={styles.svg___circle__qqqq} style={{ width: "20px", height: "20px", fill: "rgb(194, 194, 194)" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10.5199 19.8634C10.5955 18.6615 10.8833 17.5172 11.3463 16.4676C9.81124 16.3252 8.41864 15.6867 7.33309 14.7151L8.66691 13.2248C9.55217 14.0172 10.7188 14.4978 12 14.4978C12.1763 14.4978 12.3501 14.4887 12.5211 14.471C14.227 12.2169 16.8661 10.7083 19.8634 10.5199C19.1692 6.80877 15.9126 4 12 4C7.58172 4 4 7.58172 4 12C4 15.9126 6.80877 19.1692 10.5199 19.8634ZM19.0233 12.636C15.7891 13.2396 13.2396 15.7891 12.636 19.0233L19.0233 12.636ZM22 12C22 12.1677 21.9959 12.3344 21.9877 12.5L12.5 21.9877C12.3344 21.9959 12.1677 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM10 10C10 10.8284 9.32843 11.5 8.5 11.5C7.67157 11.5 7 10.8284 7 10C7 9.17157 7.67157 8.5 8.5 8.5C9.32843 8.5 10 9.17157 10 10ZM17 10C17 10.8284 16.3284 11.5 15.5 11.5C14.6716 11.5 14 10.8284 14 10C14 9.17157 14.6716 8.5 15.5 8.5C16.3284 8.5 17 9.17157 17 10Z"></path></svg>
                                </div>
                                <div className={styles.circle__icn__msg} onClick={() => document.getElementById('fileInput').click()}>
                                    <svg className={styles.svg___circle__qqqq} style={{ width: "20px", height: "20px", fill: "rgb(194, 194, 194)" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 11.1005L7 9.1005L12.5 14.6005L16 11.1005L19 14.1005V5H5V11.1005ZM5 13.9289V19H8.1005L11.0858 16.0147L7 11.9289L5 13.9289ZM10.9289 19H19V16.9289L16 13.9289L10.9289 19ZM4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM15.5 10C14.6716 10 14 9.32843 14 8.5C14 7.67157 14.6716 7 15.5 7C16.3284 7 17 7.67157 17 8.5C17 9.32843 16.3284 10 15.5 10Z"></path></svg>
                                    <input
                                        type="file"
                                        id="fileInput"
                                        accept="image/jpg, image/jpeg, image/png"
                                        onChange={handleImageUpload}
                                        style={{ display: 'none' }}
                                    />
                                </div>
                                <button style={{ background: "transparent" }} className={styles.circle__icn__msg}>
                                    <svg className={styles.svg___circle__qqqq} style={{ width: "27px", height: "27px", fill: "#00acee" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3 13.0001H9V11.0001H3V1.8457C3 1.56956 3.22386 1.3457 3.5 1.3457C3.58425 1.3457 3.66714 1.36699 3.74096 1.4076L22.2034 11.562C22.4454 11.695 22.5337 11.9991 22.4006 12.241C22.3549 12.3241 22.2865 12.3925 22.2034 12.4382L3.74096 22.5925C3.499 22.7256 3.19497 22.6374 3.06189 22.3954C3.02129 22.3216 3 22.2387 3 22.1544V13.0001Z"></path></svg>
                                </button>
                            </div>
                        </footer>
                    </form>
                    {/* message footer */}

                </div>
            </div>
        </>
    )
}

export default MessagesLeft