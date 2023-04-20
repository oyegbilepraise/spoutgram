import React from 'react';
import styles from '@/layout/HomeLayout/HomeLayout.module.css'

const CreateSvg = () => {
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
            x="0.8"
            y="0.8"
            width="16.4"
            height="16.4"
            rx="5.2"
            stroke="#9c9c9c"
            strokeWidth="1.6"
          />
          <rect
            x="8.425"
            y="4.425"
            width="0.85"
            height="9.15"
            rx="0.425"
            fill="#9c9c9c"
            stroke="#9c9c9c"
            strokeWidth="0.85"
          />
          <rect
            x="4.425"
            y="9.27422"
            width="0.85"
            height="9.15"
            rx="0.425"
            fill="#9c9c9c"
            transform="rotate(-90 4.425 9.27422)"
            stroke="#9c9c9c"
            strokeWidth="0.85"
          />
        </svg>
    )
}

export default CreateSvg