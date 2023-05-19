import imgOne from "../../images/me.jpeg";
import default_img from "../../images/onlyf.jpg"
import Image from 'next/image'
import { useRouter } from "next/router";
import styles from '@/layout/HomeLayout/HomeLayout.module.css'

const MessagesRight = () => {

    const router = useRouter();
    const handleGoBack = () => {
        router.back(); // Go back to the previous page or route
    };

    return  (
        <>
            <div className={styles.right__mssg__div}>
                {/*  */}
                <nav className={styles.___main_nav} style={{borderBottom: "transparent", paddingTop: "14.2px", paddingBottom: "14.2px"}}>
                    <div>
                    <span className={styles.icon_back} onClick={handleGoBack}>
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
                {/*  */}

                {/* if no conversation */}
                <div className={styles.no__messg__div} style={{ display: "none" }}>
                    <span className={styles.nby_txt}>No conversations.</span>
                </div>
                {/* if no conversation */}

                {/* messages conversation container */}
                <div className={styles.messages__convcnt}>

                    {/* messages toast */}
                    <div className={`${styles.message__toast} ${styles.active__cht__msg}`}>
                        <div>
                            <Image
                            src={imgOne}
                            className={styles.msshtst}
                            />
                        </div>
                        <div>
                            <span className={styles.msg__name__yyy}>Penuel John</span>
                            <span className={styles.msg__contxte__yyy}>
                            Message yourself.
                            </span>
                        </div>
                        <div>
                            <span className={styles.msg__sent__timer}>9s</span>
                        </div>
                    </div>
                    {/* messages toast */}

                </div>
                {/* messages conversation container */}

            </div> 
        </>
    )
}
    
export default MessagesRight