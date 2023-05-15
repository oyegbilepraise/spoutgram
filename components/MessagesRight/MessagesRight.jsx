import img from '../../images/default-photo.svg'
import Image from 'next/image'
import styles from '@/layout/HomeLayout/HomeLayout.module.css'

const MessagesRight = () => {
    return  (
        <>
            <div className={styles.right__mssg__div}>
                {/*  */}
                <nav>
                    <div>
                    <span className={styles.icon_back}>
                        <svg
                        className="_00_history__back"
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
                    <span className="not-home-nav-text">Messages</span>
                    </div>
                </nav>
                {/*  */}
                {/* if no conversation */}
                <div className={styles.no__messg__div} style={{ display: "none" }}>
                    <span className={styles.nby_txt}>No conversations.</span>
                </div>
                {/* if no conversation */}
                {/* messages conversation container */}
                <div className={styles.messages__convcnt}>
                    {/*  */}
                    <div className={styles.message__toast}>
                    {/*  */}
                    <div>
                        <img
                        src="../app__assets/images/default/default-photo.svg"
                        className={styles.msshtst}
                        />
                    </div>
                    <div>
                        <span>Ikenna Gabriel</span>
                        <span>
                        We have a board meeting today John, when will you be available ???
                        respond, thanks.
                        </span>
                    </div>
                    <div>
                        <span className={styles.msg__new__notif} />
                        <span className={styles.msg__sent__timer}>9s</span>
                    </div>
                    </div>
                    {/*  */}
                </div>
                {/* messages conversation container */}
            </div>
        </>
    )
}
    
export default MessagesRight