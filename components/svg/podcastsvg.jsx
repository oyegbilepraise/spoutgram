import React from 'react';
import styles from '@/layout/HomeLayout/HomeLayout.module.css'

const PodcastSvg = () => {
    return (
        <svg
          className={styles.sidebar__svg}
          width={18}
          height={18}
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.5"
            y="5.5"
            width={1}
            height="7.1"
            rx="0.5"
            fill="#9c9c9c"
            stroke="#9c9c9c"
          />
          <rect
            x="8.5"
            y="0.5"
            width={1}
            height={17}
            rx="0.5"
            fill="#9c9c9c"
            stroke="#9c9c9c"
          />
          <rect
            x="4.5"
            y="2.5"
            width={1}
            height={13}
            rx="0.5"
            fill="#9c9c9c"
            stroke="#9c9c9c"
          />
          <rect
            x="12.5"
            y="2.5"
            width={1}
            height={13}
            rx="0.5"
            fill="#9c9c9c"
            stroke="#9c9c9c"
          />
          <rect
            x="16.5"
            y="5.5"
            width={1}
            height="7.1"
            rx="0.5"
            fill="#9c9c9c"
            stroke="#9c9c9c"
          />
        </svg>
    )
}

export default PodcastSvg