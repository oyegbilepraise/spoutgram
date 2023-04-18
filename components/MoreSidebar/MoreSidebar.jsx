import img from '../../images/default-photo.svg'
import Image from 'next/image'
import styles from '@/layout/HomeLayout/HomeLayout.module.css'


const MoreSidebar = () => {
    return (
        <>
            {/* this is the code for the modal popup */}
            <div className={styles.modal__sidebar}>
            <div className={styles.modal__sidebar_parent}>
                <div className={styles.sidebar__header}>
                <div className={styles.flex__me_too}>
                    <div>
                        <div className={styles.profile__init__cont}>
                            <span className={styles.blk__proflname}>
                                AV
                            </span>
                        </div>
                    </div>

                    {/* close sidebar */}
                    <svg
  className={styles.close_more_sideb}
  xmlns="http://www.w3.org/2000/svg"
  width={24}
  height={24}
  viewBox="0 0 24 24"
  fill="none"
  stroke="#808080"
  strokeWidth={2}
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <line x1={18} y1={6} x2={6} y2={18} />
  <line x1={6} y1={6} x2={18} y2={18} />
</svg>

                </div>
                <div>
                    <h6 className={styles.name__sidebar}>Avary</h6>
                    <span className={styles.xqlsd_usn}>
                        @avary
                    </span>
                </div>
                <div className={styles.flex__sidebar} style={{marginTop:"12px"}}>
                    <div style={{marginLeft: "5px"}}>
                    <h6 className={styles.sideb__mn_p}>
                        <span className={styles.span__mn_p}>70.5K</span>&nbsp;Followers
                    </h6>
                    </div>
                    <div>
                    <h6 className={styles.sideb__mn_p}>
                        <span className={styles.span__mn_p}>90.9K</span>&nbsp;Following
                    </h6>
                    </div>
                </div>
                </div>
                <a href="/bookmarks">
                <div className={styles.sidebar__menu}>
                    <div>
                        <svg
                            className={styles.sidebar__inner_svg}
                            width={14}
                            height={18}
                            viewBox="0 0 14 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                            stroke="#9c9c9c"
                            d="M6.57426 12.9227L0.8 16.5522V4C0.8 2.23269 2.23269 0.8 4 0.8H10C11.7673 0.8 13.2 2.23269 13.2 4V16.5522L7.42574 12.9227L7 12.6551L6.57426 12.9227Z"
                            strokeWidth="1.6"
                            />
                        </svg>
                    </div>
                    <div>
                    <h6 className={styles.sidebar__menu_h6}>Bookmarks</h6>
                    </div>
                </div>
                </a>
                <a href="/subscriptions">
                <div className={styles.sidebar__menu}>
                    <div>
                        <svg
                            className={styles.sidebar__inner_svg}
                            width={22}
                            height={21}
                            viewBox="0 0 22 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                            stroke="#9c9c9c"
                            d="M17.15 20V20.15H0.85V20C0.85 15.4989 4.49888 11.85 9 11.85C13.5011 11.85 17.15 15.4989 17.15 20Z"
                            strokeWidth="1.7"
                            />
                            <circle cx={9} cy={4} r="3.15" stroke="#9c9c9c" strokeWidth="1.7" />
                            <path
                            d="M17.6462 12.8266C17.6031 12.8558 17.5521 12.8715 17.5 12.8715C17.4479 12.8715 17.3969 12.8558 17.3537 12.8266C16.6615 12.3643 13.75 10.3066 13.75 8.36526C13.75 5.86026 16.6937 5.45901 17.5 7.14651C18.3062 5.45901 21.25 5.86026 21.25 8.36526C21.25 10.307 18.3385 12.3643 17.6462 12.8259V12.8266Z"
                            fill="#9c9c9c"
                            />
                        </svg>
                    </div>
                    <div>
                    <h6 className={styles.sidebar__menu_h6}>Subscriptions</h6>
                    </div>
                </div>
                </a>
                <a href="/settings">
                <div className={styles.sidebar__menu}>
                    <div>
                    <svg
                        className={styles.sidebar__inner_svg}
                        style={{width: "17px", height: "22px"}}
                        >
                        <rect
                            x="0.5"
                            y="18.5"
                            width={17}
                            height={1}
                            rx="0.5"
                            fill="#9c9c9c"
                            stroke="#9c9c9c"
                        />
                        <rect
                            x="0.5"
                            y="10.5"
                            width={17}
                            height={1}
                            rx="0.5"
                            fill="#9c9c9c"
                            stroke="#9c9c9c"
                        />
                        <rect
                            x="0.5"
                            y="2.5"
                            width={17}
                            height={1}
                            rx="0.5"
                            fill="#9c9c9c"
                            stroke="#9c9c9c"
                        />
                        <rect
                            x="13.5"
                            y="0.5"
                            width={1}
                            height={5}
                            rx="0.5"
                            fill="#9c9c9c"
                            stroke="#9c9c9c"
                        />
                        <rect
                            x="3.5"
                            y="8.5"
                            width={1}
                            height={5}
                            rx="0.5"
                            fill="#9c9c9c"
                            stroke="#9c9c9c"
                        />
                        <rect
                            x="13.5"
                            y="16.5"
                            width={1}
                            height={5}
                            rx="0.5"
                            fill="#9c9c9c"
                            stroke="#9c9c9c"
                        />
                    </svg>
                    </div>
                    <div>
                    <h6 className={styles.sidebar__menu_h6}>Settings</h6>
                    </div>
                </div>
                </a>
                <a href="/setup/banking">
                <div className={styles.sidebar__menu}>
                    <div>
                        <svg
                           className={styles.sidebar__inner_svg}
                            width={18}
                            height={15}
                            viewBox="0 0 18 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <rect
                                x="0.8"
                                y="0.8"
                                width="16.4"
                                height="13.4"
                                rx="1.2"
                                stroke="#9c9c9c"
                                strokeWidth="1.6"
                            />
                            <rect y={5} width={18} height={2} fill="#9c9c9c" />
                        </svg>
                    </div>
                    <div>
                    <h6 className={styles.sidebar__menu_h6}>Payments</h6>
                    </div>
                </div>
                </a>
                <a href="/setup/paywall">
                <div className={styles.sidebar__menu}>
                    <div>
                    <svg
                    className={styles.sidebar__inner_svg}
  width={18}
  height={18}
  viewBox="0 0 18 18"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <rect
    x="0.8"
    y="0.8"
    width="6.4"
    height="6.4"
    rx="1.2"
    stroke="#9C9C9C"
    strokeWidth="1.6"
  />
  <rect
    x="10.8"
    y="0.8"
    width="6.4"
    height="6.4"
    rx="1.2"
    stroke="#9C9C9C"
    strokeWidth="1.6"
  />
  <rect
    x="10.8"
    y="10.8"
    width="6.4"
    height="6.4"
    rx="1.2"
    stroke="#9C9C9C"
    strokeWidth="1.6"
  />
  <rect
    x="0.8"
    y="10.8"
    width="6.4"
    height="6.4"
    rx="1.2"
    stroke="#9C9C9C"
    strokeWidth="1.6"
  />
</svg>


                    </div>
                    <div>
                    <h6 className={styles.sidebar__menu_h6}>Setups</h6>
                    </div>
                </div>
                </a>
                <a href="/earnings">
                <div className={styles.sidebar__menu}>
                    <div>
                    <svg
                    className={styles.sidebar__inner_svg}
  width={18}
  height={12}
  viewBox="0 0 18 12"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <mask id="path-1-inside-1_446_31" fill="white">
    <rect width={18} height={12} rx={1} />
  </mask>
  <rect
    width={18}
    height={12}
    rx={1}
    stroke="#9C9C9C"
    strokeWidth="3.2"
    mask="url(#path-1-inside-1_446_31)"
  />
  <circle cx={9} cy={6} r="2.25" stroke="#9C9C9C" strokeWidth="1.5" />
  <path
    d="M1 0.8H5.1239C4.75036 2.73698 3.04603 4.2 1 4.2H0.8V1C0.8 0.889543 0.889543 0.8 1 0.8Z"
    stroke="#9C9C9C"
    strokeWidth="1.6"
  />
  <path
    d="M0.8 11L0.8 6.8761C2.73698 7.24964 4.2 8.95397 4.2 11V11.2H1C0.889543 11.2 0.8 11.1105 0.8 11Z"
    stroke="#9C9C9C"
    strokeWidth="1.6"
  />
  <path
    d="M17 11.2H12.8761C13.2496 9.26302 14.954 7.8 17 7.8H17.2V11C17.2 11.1105 17.1105 11.2 17 11.2Z"
    stroke="#9C9C9C"
    strokeWidth="1.6"
  />
  <path
    d="M17.2 1V5.1239C15.263 4.75036 13.8 3.04603 13.8 1V0.8L17 0.8C17.1105 0.8 17.2 0.889543 17.2 1Z"
    stroke="#9C9C9C"
    strokeWidth="1.6"
  />
</svg>

                    </div>
                    <div>
                    <h6 className={styles.sidebar__menu_h6}>Earnings</h6>
                    </div>
                </div>
                </a>
                <a href="/earnings">
                <div className={styles.sidebar__menu}>
                    <div>
                        <svg
                            className={styles.sidebar__inner_svg}
                            width={18}
                            height={21}
                            viewBox="0 0 18 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <rect y={19} width={18} height={2} rx={1} fill="#9C9C9C" />
                            <rect x={1} y={16} width={16} height={2} rx={1} fill="#9C9C9C" />
                            <rect
                                x={2}
                                y={15}
                                width={7}
                                height={2}
                                rx={1}
                                transform="rotate(-90 2 15)"
                                fill="#9C9C9C"
                            />
                            <rect
                                x={14}
                                y={15}
                                width={7}
                                height={2}
                                rx={1}
                                transform="rotate(-90 14 15)"
                                fill="#9C9C9C"
                            />
                            <rect
                                x={8}
                                y={15}
                                width={7}
                                height={2}
                                rx={1}
                                transform="rotate(-90 8 15)"
                                fill="#9C9C9C"
                            />
                            <path
                                d="M17.2 3.375V6C17.2 6.11046 17.1105 6.2 17 6.2H1C0.889543 6.2 0.8 6.11046 0.8 6V3.375C0.8 3.28611 0.858667 3.20789 0.944 3.183L9 0.833333L17.056 3.183C17.1413 3.20789 17.2 3.28611 17.2 3.375Z"
                                stroke="#9C9C9C"
                                strokeWidth="1.6"
                            />
                        </svg>
                    </div>
                    <div>
                    <h6 className={styles.sidebar__menu_h6}>Banking</h6>
                    </div>
                </div>
                </a>
            </div>
            </div>
        </>
    )
}

export default MoreSidebar