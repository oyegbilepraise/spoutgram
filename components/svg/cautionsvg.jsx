import React from 'react';
import styles from '@/layout/AuthLayout/AuthLayout.module.css'

const CautionSvg = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={24}
            height={24}
            className={styles.error__inval} 
            >
            <path
                d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 15V17H13V15H11ZM11 7V13H13V7H11Z"
                fill="var(--brand-color)"
            />
        </svg>
    )
}

export default CautionSvg