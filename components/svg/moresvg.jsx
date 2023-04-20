import React from 'react';
import styles from '@/layout/HomeLayout/HomeLayout.module.css'

const MoreSvg = () => {
    return (
        <svg
        className={styles.sidebar__svg}
        width={18}
        height={18}
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx={9} cy={9} r="8.2" stroke="#9c9c9c" strokeWidth="1.6" />
        <circle cx={5} cy={9} r={1} fill="#9c9c9c" />
        <circle cx={9} cy={9} r={1} fill="#9c9c9c" />
        <circle cx={13} cy={9} r={1} fill="#9c9c9c" />
      </svg>
    )
}

export default MoreSvg