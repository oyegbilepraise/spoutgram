import { HomeLayout } from '@/layout'
import Image from 'next/image'
import imgOne from "../../images/me.jpeg";

import styles from '@/layout/HomeLayout/HomeLayout.module.css'

const SubscriptionScreen = () => {
  return (
    <HomeLayout>
      {/* div.timeline -> middle */}
      <div class={`${styles.timeline} ${styles._000middlebar}`}>
        <nav className={styles.___main_nav}>
            <div>
                <span className={styles.icon_back}>
                    <svg className={styles._00_history__back} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(90, 90, 90)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H6M12 5l-7 7 7 7"/></svg>
                </span>
                <span class={styles.not_home_nav_text}>Subscriptions</span>
                <span class={styles.data_count_bookm}>
                  0 Subscription
                </span>
            </div>
        </nav>

        {/* Subscribed */}
        <div className={`${styles.npd_toast}`}>
          <div className={styles.hold_them}>
            <div>
              <Image
                src={imgOne}
                className={styles.npd_toast_png}
              />
            </div>
            <div className={styles.float_nicn}>
              {/* <img src="/images/utility icon/favorite.svg" className={styles.notf_title} /> */}
            </div>
          </div>
          <div>
            <div>
              <h6 className={styles.notf_title}>
                Penuel John
              </h6>
            </div>
            <div>
              <h6 className={styles.notf_contnt}>
                @penuel_john
              </h6>
            </div>
          </div>

          <button 
          style={{position: "absolute", background: "#00acee", padding: "5px", borderRadius: "10px", width: "150px", color: "white", fontFamily: "var(--global-medium)", right: "15px", fontSize: "14px"}}>SUBSCRIBED</button>
        </div>

        {/* <!-- no subscriptions --> */}
        <div class={styles.nbyd} style={{display: "none"}}>
          <div>
              <div>
                  <svg class={styles.nbyd__svg} width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path stroke="rgb(200, 200, 200)" d="M17.15 20V20.15H0.85V20C0.85 15.4989 4.49888 11.85 9 11.85C13.5011 11.85 17.15 15.4989 17.15 20Z" stroke-width="1.7"/>
                      <circle cx="9" cy="4" r="3.15" stroke="rgb(200, 200, 200)" stroke-width="1.7"/>
                      <path d="M17.6462 12.8266C17.6031 12.8558 17.5521 12.8715 17.5 12.8715C17.4479 12.8715 17.3969 12.8558 17.3537 12.8266C16.6615 12.3643 13.75 10.3066 13.75 8.36526C13.75 5.86026 16.6937 5.45901 17.5 7.14651C18.3062 5.45901 21.25 5.86026 21.25 8.36526C21.25 10.307 18.3385 12.3643 17.6462 12.8259V12.8266Z" width={10} height={10} stroke="rgb(200, 200, 200)" fill="rgb(200, 200, 200)"/>
                  </svg>
              </div>
              <div>
                  <span class={styles.nby_txt}>No subscriptions yet.</span>
              </div>
          </div>
        </div>

      </div>
      {/* div.timeline -> middle */}
    </HomeLayout>
  )
}

export default SubscriptionScreen