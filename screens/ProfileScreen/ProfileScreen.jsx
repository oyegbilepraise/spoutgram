import { ProfileLayout } from '@/layout'
import Image from 'next/image'
import img from '../../images/default-photo.svg'
import banner from '../../images/banner.jpg'

import styles from '@/layout/HomeLayout/HomeLayout.module.css'



const ProfileScreen = () => {
  return ( 
    <ProfileLayout>
        <div className={styles.the__starting__point}>
            <div>
            <div className={styles.sxuiip}>
                <div className={styles._000data__img__div}>
                <Image
                    src={img}
                    alt="img"
                    className={styles.profile_img}
                />
                </div>
                <div>
                <div className={styles.dxcWAsd}>
                    <span className={`${styles.user_data_name} ${styles.yuv_usr}`}>Penuel John</span>
                    <div>
                    <span className={styles.user_data_unique}>@penueljohn</span>
                    </div>
                    <div>
                    <span classname={styles.absolute__me__now}>
                        {/* {/* <button className="follow__user">Edit Profile</button> * /} */}
                        <button className={styles.follow__user}>Follow</button>
                        <button className={`${styles.follow__user} ${styles.fu_xyz}`}>Message</button>
                    </span>
                    </div>
                </div>
                </div>
            </div>
            <div>
                <span className={styles._all00xcuunt}>
                <span className={styles.xoxtrn}>
                    200K <span className={styles.xyxxn}>Followers</span>
                </span>
                <span className={styles.xoxtrn}>
                    190K <span className={styles.xyxxn}>Following</span>
                </span>
                <span className={styles.xoxtrn}>
                    19.2K <span className={styles.xyxxn}>Subscribers</span>
                </span>
                </span>
            </div>
            <div>
                <span className={styles.user_data_about}>
                For most startups, better shape translates into two things: to have a
                better product with more users, and to have more options for raising
                money.
                </span>
                <span className={styles.span__data__prfl}>
                <svg
                    className={styles.xnprlf__icn}
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    d="M15.2 6.66667C15.2 8.25515 14.3209 10.2138 12.8324 12.4676C11.512 14.4669 9.79011 16.5872 8 18.7474C6.20989 16.5872 4.48796 14.4669 3.16756 12.4676C1.67905 10.2138 0.8 8.25515 0.8 6.66667C0.8 3.55697 3.88078 0.8 8 0.8C12.1192 0.8 15.2 3.55697 15.2 6.66667Z"
                    stroke="#808080"
                    strokeWidth={2}
                    />
                    <circle cx={8} cy={7} r="2.2" stroke="#808080" strokeWidth={2} />
                </svg>
                <span className={styles.pfl__data}>Miami, USA</span>
                </span>
            </div>
            <div>
                <span>
                {/* <div> */}
                <span
                    style={{ marginRight: 25, display: "block" }}
                    className={styles.span__data__prfl}
                >
                    <svg
                    className={styles.xnprlf__icn}
                    width={18}
                    height={18}
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <rect
                        x="0.8"
                        y="4.8"
                        width="16.4"
                        height="12.4"
                        rx="2.2"
                        stroke="#808080"
                        strokeWidth="1.6"
                    />
                    <path
                        d="M3 4.8H15C16.215 4.8 17.2 5.78497 17.2 7C17.2 9.3196 15.3196 11.2 13 11.2H5C2.6804 11.2 0.8 9.3196 0.8 7C0.8 5.78497 1.78497 4.8 3 4.8Z"
                        stroke="#808080"
                        strokeWidth="1.6"
                    />
                    <mask id="path-3-inside-1_423_38" fill="white">
                        <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7 1.6H11C11.7732 1.6 12.4 2.2268 12.4 3V4H14V3C14 1.34315 12.6569 0 11 0H7C5.34315 0 4 1.34315 4 3V4H5.6V3C5.6 2.2268 6.2268 1.6 7 1.6Z"
                        />
                    </mask>
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7 1.6H11C11.7732 1.6 12.4 2.2268 12.4 3V4H14V3C14 1.34315 12.6569 0 11 0H7C5.34315 0 4 1.34315 4 3V4H5.6V3C5.6 2.2268 6.2268 1.6 7 1.6Z"
                        fill="#D9D9D9"
                    />
                    <path
                        d="M12.4 4H10.8V5.6H12.4V4ZM14 4V5.6H15.6V4H14ZM4 4H2.4V5.6H4V4ZM5.6 4V5.6H7.2V4H5.6ZM11 0H7V3.2H11V0ZM14 3C14 1.34315 12.6569 0 11 0V3.2C10.8895 3.2 10.8 3.11046 10.8 3H14ZM14 4V3H10.8V4H14ZM12.4 5.6H14V2.4H12.4V5.6ZM15.6 4V3H12.4V4H15.6ZM15.6 3C15.6 0.45949 13.5405 -1.6 11 -1.6V1.6C11.7732 1.6 12.4 2.2268 12.4 3H15.6ZM11 -1.6H7V1.6H11V-1.6ZM7 -1.6C4.45949 -1.6 2.4 0.45949 2.4 3H5.6C5.6 2.2268 6.2268 1.6 7 1.6V-1.6ZM2.4 3V4H5.6V3H2.4ZM4 5.6H5.6V2.4H4V5.6ZM4 3V4H7.2V3H4ZM7 0C5.34315 0 4 1.34315 4 3H7.2C7.2 3.11046 7.11046 3.2 7 3.2V0Z"
                        fill="#808080"
                        mask="url(#path-3-inside-1_423_38)"
                    />
                    </svg>
                    <span className={styles.pfl__data}>Creator</span>
                </span>
                {/* </div> */}
                <span style={{ marginRight: 15 }}>
                    <svg
                    className={`${styles.xnprlf__icn} ${styles.linkr__slnt}`}
                    width={14}
                    height={21}
                    viewBox="0 0 14 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M7.31718 8.61566L7.29168 12.3585C7.28864 12.8042 6.92486 13.163 6.47914 13.16C6.03342 13.157 5.67456 12.7932 5.6776 12.3475L5.7031 8.60466C5.70613 8.15894 6.06992 7.80008 6.51564 7.80312C6.96135 7.80615 7.32022 8.16994 7.31718 8.61566Z"
                        fill="#808080"
                        stroke="#808080"
                        strokeWidth="1.6"
                    />
                    <mask id="path-2-inside-1_423_8" fill="white">
                        <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2.08497 8.57152L2.09824 6.44305C2.11349 3.99744 4.10841 2.0278 6.55401 2.04373C8.9996 2.05966 10.9698 4.05512 10.9545 6.50072L10.9413 8.63185L12.9412 8.64548L12.9545 6.51375C12.9766 2.9636 10.1166 0.066888 6.56648 0.0437673C3.01633 0.0206471 0.120424 2.87987 0.0982841 6.43002L0.0850149 8.55789L2.08497 8.57152ZM2.06146 12.3409L0.0615095 12.3273L0.0483071 14.4444C0.0261682 17.9946 2.88618 20.8913 6.43633 20.9144C9.98647 20.9375 12.8824 18.0783 12.9045 14.5281L12.9177 12.4148L10.9177 12.4012L10.9046 14.5151C10.8893 16.9607 8.8944 18.9304 6.4488 18.9144C4.0032 18.8985 2.03301 16.903 2.04826 14.4574L2.06146 12.3409Z"
                        />
                    </mask>
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2.08497 8.57152L2.09824 6.44305C2.11349 3.99744 4.10841 2.0278 6.55401 2.04373C8.9996 2.05966 10.9698 4.05512 10.9545 6.50072L10.9413 8.63185L12.9412 8.64548L12.9545 6.51375C12.9766 2.9636 10.1166 0.066888 6.56648 0.0437673C3.01633 0.0206471 0.120424 2.87987 0.0982841 6.43002L0.0850149 8.55789L2.08497 8.57152ZM2.06146 12.3409L0.0615095 12.3273L0.0483071 14.4444C0.0261682 17.9946 2.88618 20.8913 6.43633 20.9144C9.98647 20.9375 12.8824 18.0783 12.9045 14.5281L12.9177 12.4148L10.9177 12.4012L10.9046 14.5151C10.8893 16.9607 8.8944 18.9304 6.4488 18.9144C4.0032 18.8985 2.03301 16.903 2.04826 14.4574L2.06146 12.3409Z"
                        fill="#808080"
                    />
                    <path
                        d="M2.09824 6.44305L0.0982817 6.43057L2.09824 6.44305ZM2.08497 8.57152L2.07134 10.5715L4.07245 10.5851L4.08493 8.58399L2.08497 8.57152ZM6.55401 2.04373L6.56703 0.0437709L6.56703 0.0437709L6.55401 2.04373ZM10.9545 6.50072L8.95458 6.48825L8.95458 6.48825L10.9545 6.50072ZM10.9413 8.63185L8.94129 8.61938L8.92883 10.6182L10.9276 10.6318L10.9413 8.63185ZM12.9412 8.64548L12.9276 10.6454L14.9287 10.6591L14.9412 8.65795L12.9412 8.64548ZM12.9545 6.51375L14.9545 6.52622L14.9545 6.52622L12.9545 6.51375ZM6.56648 0.0437673L6.5795 -1.95619L6.5795 -1.95619L6.56648 0.0437673ZM0.0982841 6.43002L-1.90168 6.41755L-1.90168 6.41755L0.0982841 6.43002ZM0.0850149 8.55789L-1.91495 8.54542L-1.92741 10.5442L0.0713899 10.5578L0.0850149 8.55789ZM2.06146 12.3409L4.06142 12.3533L4.07389 10.3545L2.07509 10.3409L2.06146 12.3409ZM0.0615095 12.3273L0.0751346 10.3273L-1.92597 10.3137L-1.93845 12.3148L0.0615095 12.3273ZM0.0483071 14.4444L2.04827 14.4569L2.04827 14.4569L0.0483071 14.4444ZM6.43633 20.9144L6.4233 22.9144L6.4233 22.9144L6.43633 20.9144ZM12.9045 14.5281L10.9046 14.5157L12.9045 14.5281ZM12.9177 12.4148L14.9177 12.4273L14.9301 10.4285L12.9313 10.4149L12.9177 12.4148ZM10.9177 12.4012L10.9314 10.4013L8.93026 10.3876L8.91778 12.3887L10.9177 12.4012ZM10.9046 14.5151L12.9045 14.5276L12.9045 14.5276L10.9046 14.5151ZM6.4488 18.9144L6.46182 16.9145L6.4488 18.9144ZM2.04826 14.4574L0.0483035 14.445L2.04826 14.4574ZM0.0982817 6.43057L0.0850085 8.55905L4.08493 8.58399L4.0982 6.45552L0.0982817 6.43057ZM6.56703 0.0437709C3.01667 0.0206492 0.120422 2.88021 0.0982817 6.43057L4.0982 6.45552C4.10657 5.11468 5.20014 4.03495 6.54098 4.04369L6.56703 0.0437709ZM12.9545 6.5132C12.9766 2.96326 10.117 0.0668901 6.56703 0.0437709L6.54098 4.04369C7.88225 4.05242 8.96294 5.14698 8.95458 6.48825L12.9545 6.5132ZM12.9412 8.64432L12.9545 6.51319L8.95458 6.48825L8.94129 8.61938L12.9412 8.64432ZM10.9276 10.6318L12.9276 10.6454L12.9548 6.64552L10.9549 6.6319L10.9276 10.6318ZM14.9412 8.65795L14.9545 6.52622L10.9545 6.50128L10.9412 8.63301L14.9412 8.65795ZM14.9545 6.52622C14.9835 1.87174 11.234 -1.92588 6.5795 -1.95619L6.55345 2.04372C8.99927 2.05965 10.9698 4.05546 10.9545 6.50128L14.9545 6.52622ZM6.5795 -1.95619C1.9246 -1.98651 -1.87265 1.76264 -1.90168 6.41755L2.09825 6.44249C2.1135 3.99711 4.10807 2.0278 6.55345 2.04372L6.5795 -1.95619ZM-1.90168 6.41755L-1.91495 8.54542L2.08498 8.57036L2.09825 6.44249L-1.90168 6.41755ZM0.0713899 10.5578L2.07134 10.5715L2.09859 6.57156L0.09864 6.55794L0.0713899 10.5578ZM2.07509 10.3409L0.0751346 10.3273L0.0478845 14.3272L2.04784 14.3408L2.07509 10.3409ZM-1.93845 12.3148L-1.95165 14.4319L2.04827 14.4569L2.06147 12.3397L-1.93845 12.3148ZM-1.95165 14.4319C-1.98068 19.0864 1.76883 22.884 6.4233 22.9144L6.44935 18.9144C4.00354 18.8985 2.03302 16.9027 2.04827 14.4569L-1.95165 14.4319ZM6.4233 22.9144C11.0782 22.9447 14.8755 19.1955 14.9045 14.5406L10.9046 14.5157C10.8893 16.9611 8.89473 18.9304 6.44935 18.9144L6.4233 22.9144ZM14.9045 14.5406L14.9177 12.4273L10.9177 12.4024L10.9046 14.5157L14.9045 14.5406ZM12.9313 10.4149L10.9314 10.4013L10.9041 14.4012L12.9041 14.4148L12.9313 10.4149ZM12.9045 14.5276L12.9177 12.4137L8.91778 12.3887L8.9046 14.5026L12.9045 14.5276ZM6.43577 20.9144C9.98614 20.9375 12.8824 18.078 12.9045 14.5276L8.9046 14.5026C8.89624 15.8435 7.80266 16.9232 6.46182 16.9145L6.43577 20.9144ZM0.0483035 14.445C0.026166 17.9949 2.88584 20.8913 6.43577 20.9144L6.46182 16.9145C5.12056 16.9057 4.03986 15.8112 4.04823 14.4699L0.0483035 14.445ZM0.0615025 12.3284L0.0483035 14.445L4.04823 14.4699L4.06142 12.3533L0.0615025 12.3284Z"
                        fill="#808080"
                        mask="url(#path-2-inside-1_423_8)"
                    />
                    </svg>
                    <span className={`${styles.pfl__data} ${styles.user__link}`}>https://linktr.ee/xyz</span>
                </span>
                <span>
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
                </span>
            </div>
            </div>
        </div>
        <div className={`${styles.column_nav_menu_profile} ${styles.profile_nav__forPrf} ${styles.another__class}`}>
            <div className={styles.p_n_m_content}>
                <div className={styles.p_n_m_c_div} id="menuOne">
                    <h6 className={`${styles.n_m_text} ${styles.active_n_m_text}`} id="textOne">
                    Post
                    </h6>
                </div>
                <div className={styles.p_n_m_c_div} id="menuTwo">
                    <h6 className={styles.n_m_text} id="textTwo">
                    Gallery
                    </h6>
                </div>
                <div className={styles.p_n_m_c_div} id="menuThree">
                    <h6 className={styles.n_m_text} id="textThree">
                    Podcast
                    </h6>
                </div>
                <div className={styles.p_n_m_c_div} id="menuFourth">
                    <h6 className={styles.n_m_text} id="textFour">
                    Paid (567)
                    </h6>
                </div>
            </div>
        </div>
        {/* post container */}
        <div id="columnOne">
            <div style={{ height: 400, position: "relative" }}>
            <h6 className={styles.npy__xyz}>No post yet.</h6>
            </div>
        </div>
        {/* post container */}
        {/* gallery container */}
        {/* Media */}
        <div id="columnTwo" style={{ display: "none" }}>
            {/* components */}
            <div className={styles.components_selection} style={{ paddingTop: 18 }}>
            <div className={styles.components_selection_header} style={{ paddingTop: 10 }}>
                <div>
                <h6 className={`${styles.all__tab} ${styles.csh_h6} ${styles.active_csh}`}>All</h6>
                </div>
                <div>
                <h6 className={`${styles.photo__tab} ${styles.csh_h6}`}>Photo</h6>
                </div>
                <div>
                <h6 className={`${styles.vid__tab} ${styles.csh_h6}`}>Video</h6>
                </div>
            </div>
            <div>
                <div className={`${styles.all__grid__js} ${styles.all_grid}`}>
                {/* all-grid */}
                <div style={{ height: 400, position: "relative" }}>
                    <h6 className={styles.npy__xyz}>No media files yet.</h6>
                </div>
                </div>
                <div
                className={`${styles.photo__grid__js} ${styles.photos_grid}`}
                style={{ display: "none" }}
                >
                {/* photos-grid */}
                <div style={{ height: 400, position: "relative" }}>
                    <h6 className={styles.npy__xyz}>No photos yet.</h6>
                </div>
                </div>
                <div className={`${styles.vid__grid__js} ${styles.videos_grid}`}  style={{ display: "none" }}>
                {/* videos-grid */}
                <div style={{ height: 400, position: "relative" }}>
                    <h6 className={styles.npy__xyz}>No videos yet.</h6>
                </div>
                </div>
            </div>
            </div>
            {/* components */}
        </div>
        {/* Media */}
        {/* gallery container */}
        {/* podcast */}
        {/* clips */}
        <div id="columnThree" style={{ display: "none" }}>
            <div style={{ height: 400, position: "relative" }}>
            <h6 className={styles.npy__xyz}>No podcast yet.</h6>
            </div>
        </div>
        {/* clips */}
        {/* podcast */}
        {/*  */}

    </ProfileLayout>
  )
}

export default ProfileScreen