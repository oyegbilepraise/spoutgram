import React from 'react';
import styles from '@/layout/HomeLayout/HomeLayout.module.css'

const BookmarkSvg = () => {
    return (
        // <svg
        //   className={styles.sidebar__svg}
        //   width={14}
        //   height={18}
        //   viewBox="0 0 14 18"
        //   fill="none"
        //   xmlns="http://www.w3.org/2000/svg"
        // >
        //   <path
        //     stroke="#9c9c9c"
        //     d="M6.57426 12.9227L0.8 16.5522V4C0.8 2.23269 2.23269 0.8 4 0.8H10C11.7673 0.8 13.2 2.23269 13.2 4V16.5522L7.42574 12.9227L7 12.6551L6.57426 12.9227Z"
        //     strokeWidth="1.6"
        //   />
        //</svg>
        <svg className={styles.sidebar__svg} width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
</svg>


    )
}

export default BookmarkSvg