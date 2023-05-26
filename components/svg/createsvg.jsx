import React from 'react';
import styles from '@/layout/HomeLayout/HomeLayout.module.css'

const CreateSvg = () => {
    return (
        // <svg
        //   className={styles.sidebar__svg}
        //   width={18}
        //   height={18}
        //   viewBox="0 0 18 18"
        //   fill="none"
        //   xmlns="http://www.w3.org/2000/svg"
        // >
        //   <rect
        //     x="0.8"
        //     y="0.8"
        //     width="16.4"
        //     height="16.4"
        //     rx="5.2"
        //     stroke="#9c9c9c"
        //     strokeWidth="1.6"
        //   />
        //   <rect
        //     x="8.425"
        //     y="4.425"
        //     width="0.85"
        //     height="9.15"
        //     rx="0.425"
        //     fill="#9c9c9c"
        //     stroke="#9c9c9c"
        //     strokeWidth="0.85"
        //   />
        //   <rect
        //     x="4.425"
        //     y="9.27422"
        //     width="0.85"
        //     height="9.15"
        //     rx="0.425"
        //     fill="#9c9c9c"
        //     transform="rotate(-90 4.425 9.27422)"
        //     stroke="#9c9c9c"
        //     strokeWidth="0.85"
        //   />
        // </svg>

        
        <svg  className={styles.sidebar__svg} width="18" height="18"  id="a" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M16,1C7.73,1,1,7.73,1,16s6.73,15,15,15,15-6.73,15-15S24.27,1,16,1Zm0,28c-7.17,0-13-5.83-13-13S8.83,3,16,3s13,5.83,13,13-5.83,13-13,13Zm10-13c0,.55-.45,1-1,1h-8v8c0,.55-.45,1-1,1s-1-.45-1-1v-8H7c-.55,0-1-.45-1-1s.45-1,1-1H15V7c0-.55,.45-1,1-1s1,.45,1,1V15h8c.55,0,1,.45,1,1Z"/></svg>
    )
}

export default CreateSvg