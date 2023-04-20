import React from 'react';
import styles from '@/layout/HomeLayout/HomeLayout.module.css'

const BookmarkSvg = () => {
    return (
        <svg
          className={styles.sidebar__svg}
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
    )
}

export default BookmarkSvg