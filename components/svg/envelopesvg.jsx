import React from 'react';
import styles from '@/layout/AuthLayout/AuthLayout.module.css'

const EnvelopeSvg = () => {
    return (
        <svg className={styles.email_svg} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd"
                d="M6 4.5h12A2.5 2.5 0 0 1 20.5 7v.92l-7.919 4.4a1.25 1.25 0 0 1-1.189.013L3.5 8.179V7A2.5 2.5 0 0 1 6 4.5zM3.5 9.874V17A2.5 2.5 0 0 0 6 19.5h12a2.5 2.5 0 0 0 2.5-2.5V9.636l-7.19 3.994a2.75 2.75 0 0 1-2.617.03L3.5 9.874zM2 7a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V7z">
            </path>
        </svg>
    )
}

export default EnvelopeSvg