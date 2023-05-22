import imgOne from "../../images/me.jpeg";
import Image from 'next/image'
import { useRouter } from "next/router";
import styles from '@/layout/HomeLayout/HomeLayout.module.css'

const MessagesRight = ({ messages, loading, handleMessage }) => {
  const handleOpenMessage = async (m) => {
    handleMessage(m)
  }
  return (
    <>
      <div className={styles.right__mssg__div}>
        {/*  */}
        <nav className={styles.___main_nav} style={{ borderBottom: "transparent", paddingTop: "14.2px", paddingBottom: "14.2px" }}>
          <div>
            <span className={styles.icon_back}>
              <svg
                className={styles._00_history__back}
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgb(90, 90, 90)"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 12H6M12 5l-7 7 7 7" />
              </svg>
            </span>
            <span className={styles.not_home_nav_text}>Messages</span>
          </div>
        </nav>
        <div className={styles.no__messg__div} style={{ display: "none" }}>
          <span className={styles.nby_txt}>No conversations.</span>
        </div>
        <div>
          {loading ? 'Loading...' : (
            <div className={styles.messages__convcnt}>
              {messages.map((m, i) => {
                return <div onClick={() => handleOpenMessage(m)} className={`${styles.message__toast} ${styles.active__cht__msg}`} key={i}>
                  <div>
                    <Image
                      src={imgOne}
                      alt="..."
                      className={styles.msshtst}
                    />
                  </div>
                  <div>
                    <span className={styles.msg__name__yyy}>{m.name}</span>
                    <span className={styles.msg__contxte__yyy}>
                      {m.messages[0].message}
                    </span>
                  </div>
                  <div>
                    <span className={styles.msg__sent__timer}>9s</span>
                  </div>
                </div>
              })}
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default MessagesRight