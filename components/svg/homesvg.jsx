import React from 'react';
import styles from '@/layout/HomeLayout/HomeLayout.module.css'

const HomeSvg = () => {
    return (
        <svg
          className={styles.sidebar__svg}
          width={18}
          height={18}
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke="#9c9c9c"
            d="M17.2 9.60312V14C17.2 15.7673 15.7673 17.2 14 17.2H4C2.23269 17.2 0.8 15.7673 0.8 14V9.60313C0.8 8.32724 1.37998 7.12052 2.37628 6.32347L7.62567 2.12396C8.42915 1.48118 9.57085 1.48118 10.3743 2.12396L15.6237 6.32348C16.62 7.12052 17.2 8.32723 17.2 9.60312Z"
            strokeWidth="1.6"
          />
          <circle
            cx="8.9999"
            cy="10.7992"
            r="2.85"
            stroke="#9c9c9c"
            strokeWidth="1.5"
          />
        </svg>
    )
}

export default HomeSvg