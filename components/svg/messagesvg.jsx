import React from 'react';
import styles from '@/layout/HomeLayout/HomeLayout.module.css'

const MessageSvg = () => {
    return (
        // <svg
        //   className={styles.sidebar__svg}
        //   width={18}
        //   height={18}
        //   viewBox="0 0 18 18"
        //   fill="none"
        //   xmlns="http://www.w3.org/2000/svg"
        // >
        //   <path
        //     stroke="#9c9c9c"
        //     d="M5 0.8H13C15.3196 0.8 17.2 2.6804 17.2 5V11.2C17.2 13.5196 15.3196 15.4 13 15.4H5.85C4.09054 15.4 2.36054 15.8169 0.8 16.6111V5C0.8 2.6804 2.6804 0.8 5 0.8Z"
        //     strokeWidth="1.6"
        //   />
        //   <rect
        //     x="5.375"
        //     y="6.375"
        //     width="7.25"
        //     height="0.75"
        //     rx="0.375"
        //     stroke="#9c9c9c"
        //     strokeWidth="0.75"
        //   />
        //   <rect
        //     x="5.375"
        //     y="9.375"
        //     width="5.25"
        //     height="0.75"
        //     rx="0.375"
        //     stroke="#9c9c9c"
        //     strokeWidth="0.75"
        //   />
        // </svg>

        
        <svg className={styles.sidebar__svg} width="18" height="18" id="a" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M28,4H4c-1.65,0-3,1.35-3,3v13c0,1.65,1.35,3,3,3h15.64l5.72,4.77c.18,.15,.41,.23,.64,.23,.14,0,.29-.03,.42-.09,.35-.16,.58-.52,.58-.91v-4h1c1.65,0,3-1.35,3-3V7c0-1.65-1.35-3-3-3Zm1,16c0,.55-.45,1-1,1h-2c-.55,0-1,.45-1,1v2.86l-4.36-3.63c-.18-.15-.41-.23-.64-.23H4c-.55,0-1-.45-1-1V7c0-.55,.45-1,1-1H28c.55,0,1,.45,1,1v13Zm-3-9c0,.55-.45,1-1,1H7c-.55,0-1-.45-1-1s.45-1,1-1H25c.55,0,1,.45,1,1Zm0,5c0,.55-.45,1-1,1H7c-.55,0-1-.45-1-1s.45-1,1-1H25c.55,0,1,.45,1,1Z"/></svg>
    )
}

export default MessageSvg