import img from '../../images/default-photo.svg'
import Image from 'next/image'
import styles from '@/layout/HomeLayout/HomeLayout.module.css'

const SettingsLeft = () => {
    return  (
        <div className={styles.settings___left__hng}>
            {/* content */}
            <nav className={styles.___main_nav}>
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
                <span className={styles.not_home_nav_text}>Settings</span>
                </div>
            </nav>
            <div className={styles.settings__parent}>
                <div style={{ marginTop: 20 }}>
                <div className={styles.setup__sub__cont}>
                    <div className={styles.subpw__t_div}>
                    <h6>Manage your account</h6>
                    </div>
                    <div className={styles.subpw__}>
                    <p>Manage, view, and configure your account information.</p>
                    </div>
                </div>
                <div style={{ marginTop: 0 }}>
                    {/* settings options */}
                    <div className={`${styles.ckdpoH___v} ${styles.one__cv}`}>
                    <h6 className={styles.ckdpoH_h6}>Account information</h6>
                    <div className={styles.float__chev__pay}>
                        <svg
                        width="24px"
                        height="24px"
                        className={styles.svg___chev}
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                            fillRule="evenodd"
                            d="M8.72 18.78a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06L9.78 5.22a.75.75 0 00-1.06 1.06L14.44 12l-5.72 5.72a.75.75 0 000 1.06z"
                        />
                        </svg>
                    </div>
                    </div>
                    <div className={`${styles.ckdpoH___v} ${styles.two__cv}`}>
                    <h6 className={styles.ckdpoH_h6}>Change your password</h6>
                    <div className={styles.float__chev__pay}>
                        <svg
                        width="24px"
                        height="24px"
                        className={styles.svg___chev}
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                            fillRule="evenodd"
                            d="M8.72 18.78a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06L9.78 5.22a.75.75 0 00-1.06 1.06L14.44 12l-5.72 5.72a.75.75 0 000 1.06z"
                        />
                        </svg>
                    </div>
                    </div>
                    <div className={`${styles.ckdpoH___v} ${styles.three__cv}`}>
                    <h6 className={styles.ckdpoH_h6}>Manage payment information</h6>
                    <div className={styles.float__chev__pay}>
                        <svg
                        width="24px"
                        height="24px"
                        className={styles.svg___chev}
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                            fillRule="evenodd"
                            d="M8.72 18.78a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06L9.78 5.22a.75.75 0 00-1.06 1.06L14.44 12l-5.72 5.72a.75.75 0 000 1.06z"
                        />
                        </svg>
                    </div>
                    </div>
                    <div className={`${styles.ckdpoH___v} ${styles.four__cv}`}>
                    <h6 className={styles.ckdpoH_h6}>Withdrawal information</h6>
                    <div className={styles.float__chev__pay}>
                        <svg
                        width="24px"
                        height="24px"
                        className={styles.svg___chev}
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                            fillRule="evenodd"
                            d="M8.72 18.78a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06L9.78 5.22a.75.75 0 00-1.06 1.06L14.44 12l-5.72 5.72a.75.75 0 000 1.06z"
                        />
                        </svg>
                    </div>
                    </div>
                    {/* settings opions */}
                </div>
                </div>
            </div>
        </div>

    )
}
    
export default SettingsLeft