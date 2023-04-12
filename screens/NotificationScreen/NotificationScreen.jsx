import { HomeLayout } from '@/layout'
import Image from 'next/image'
import img from '../../images/default-photo.svg'


import styles from '@/layout/HomeLayout/HomeLayout.module.css'


const NotificationScreen = () => {
  return (
    <HomeLayout>
      {/* div.timeline -> middle */}
      <div className={`${styles.timeline} ${styles._000middlebar}`}>
        <nav className={styles.___main_nav}>
          <div>
            <span className={styles.icon_back}>
              <svg className={styles._00_history__back} xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="rgb(90, 90, 90)" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H6M12 5l-7 7 7 7" /></svg>
            </span>
            <span className={styles.not_home_nav_text}>Notifications</span>
            <span className={styles.data_count_bookm}>
              0 unread
            </span>
          </div>
          <div className={styles.slice__selector}>
            {/*  */}
            <div className={styles.column_nav_menu_profile}>
              <div className={styles.p_n_m_content}>
                <div className={styles.p_n_m_c_div} id="menuOne">
                  <h6 className={`${styles.n_m_text} ${styles.active_n_m_text}`} id="textOne">
                    Social
                  </h6>
                </div>
                <div className={styles.p_n_m_c_div} id="menuTwo">
                  <h6 className={styles.n_m_text} id="textTwo">
                    Payments
                  </h6>
                </div>
                <div className={styles.p_n_m_c_div} id="menuThree">
                  <h6 className={styles.n_m_text} id="textThree">
                    Earnings
                  </h6>
                </div>
              </div>
            </div>
            {/*  */}
          </div>
        </nav>
        {/* notifications */}
        {/* social notifications */}
        <div id="columnOne" data-tag="social-notification" className={styles.npd_body_content}>
          {/* no social notification */}
          <div className={styles.nbyd}>
            <div>
              <svg className={styles.nbyd__svg} width={16} height={18} viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path stroke="rgb(200, 200, 200)" d="M14.7332 7.14598L15.1512 14.2H0.848811L1.26683 7.14599C1.47802 3.58206 4.42982 0.8 8 0.8C11.5702 0.8 14.522 3.58205 14.7332 7.14598Z" strokeWidth="1.6" />
                <path stroke="rgb(200, 200, 200)" d="M7.99989 17.35C6.46431 17.35 5.20695 16.1588 5.10149 14.65H10.8983C10.7928 16.1588 9.53548 17.35 7.99989 17.35Z" strokeWidth="1.3" />
              </svg>
              <div>
                <span className={styles.nby_txt}>No social notifications yet.</span>
              </div>
            </div>
          </div>
          {/* no social notification */}
        </div>
        {/* payments container */}
        <div id="columnTwo" data-tag="payment-notification" className={styles.npd_body_content} style={{ "display": "none" }}>
          {/* no payment notifications */}
          <div className={styles.nbyd}>
            <div>
              <div>
                <svg className={styles.nbyd__svg} width={16} height={18} viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path stroke="rgb(200, 200, 200)" d="M14.7332 7.14598L15.1512 14.2H0.848811L1.26683 7.14599C1.47802 3.58206 4.42982 0.8 8 0.8C11.5702 0.8 14.522 3.58205 14.7332 7.14598Z" strokeWidth="1.6" />
                  <path stroke="rgb(200, 200, 200)" d="M7.99989 17.35C6.46431 17.35 5.20695 16.1588 5.10149 14.65H10.8983C10.7928 16.1588 9.53548 17.35 7.99989 17.35Z" strokeWidth="1.3" />
                </svg>
              </div>
              <div>
                <span className={styles.nby_txt}>No payment notifications yet.</span>
              </div>
            </div>
          </div>
          {/* no payment notifications */}
        </div>
        {/* earnings notification */}
        <div id="columnThree" data-tag="earnings-notification" className={styles.npd_body_content} style={{ "display": "none" }}>
          {/* no earnings notifications yet */}
          <div className={styles.nbyd}>
            <div>
              <div>
                <svg className={styles.nbyd__svg} width={16} height={18} viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path stroke="rgb(200, 200, 200)" d="M14.7332 7.14598L15.1512 14.2H0.848811L1.26683 7.14599C1.47802 3.58206 4.42982 0.8 8 0.8C11.5702 0.8 14.522 3.58205 14.7332 7.14598Z" strokeWidth="1.6" />
                  <path stroke="rgb(200, 200, 200)" d="M7.99989 17.35C6.46431 17.35 5.20695 16.1588 5.10149 14.65H10.8983C10.7928 16.1588 9.53548 17.35 7.99989 17.35Z" strokeWidth="1.3" />
                </svg>
              </div>
              <div>
                <span className={styles.nby_txt}>No earnings notifications yet.</span>
              </div>
            </div>
          </div>
          {/* no earnings notifications yet */}
        </div>
        {/* notifications */}
      </div>
      {/* div.timeline -> middle */}
    </HomeLayout>
  )
}

export default NotificationScreen