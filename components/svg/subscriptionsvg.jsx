import React from 'react';
import styles from '@/layout/HomeLayout/HomeLayout.module.css'

const SubscriptionSvg = () => {
    return (
        <svg
          className={styles.sidebar__svg}
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
    )
}

export default SubscriptionSvg