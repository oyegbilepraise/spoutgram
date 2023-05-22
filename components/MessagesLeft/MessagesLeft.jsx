
import styles from '@/layout/HomeLayout/HomeLayout.module.css'
import { TypeLoader } from "../../components";
import { useState, useEffect } from "react";
import EachMessage from "./EachMessage";

const MessagesLeft = ({ eachMessage }) => {
  const [message, setMessage] = useState([...eachMessage.messages].reverse());
  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
    setMessage([...eachMessage.messages].reverse())
  }, [eachMessage])
  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, []);
  return (
    <>
      <div className={styles.left__mssg__div}>
        {/* if no messages */}
        {/* <div className="nbyd meesg_byd" style={{ display: "none" }}>
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
                </div> */}
        <div>
          <EachMessage eachMessage={eachMessage} message={message} />
        </div>
      </div>
    </>
  )
}

export default MessagesLeft