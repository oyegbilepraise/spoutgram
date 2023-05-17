import React from 'react';
import styles from '@/layout/HomeLayout/HomeLayout.module.css'

const HomeSvg = () => {
    return (
    <svg className={styles.sidebar__svg} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M4.99991 21.0001C4.44763 21.0001 3.99991 20.5524 3.99991 20.0001V11.0001H3.06919C2.33796 11.0001 1.98999 10.1 2.53105 9.60815L11.3272 1.61162C11.7086 1.26488 12.2912 1.26488 12.6726 1.61162L21.4688 9.60815C22.0098 10.1 21.6618 11.0001 20.9306 11.0001H19.9999V20.0001C19.9999 20.5524 19.5522 21.0001 18.9999 21.0001H4.99991ZM15 19.0001H17.4999C17.776 19.0001 17.9999 18.7762 17.9999 18.5001V9.37875C17.9999 9.23788 17.9405 9.10354 17.8362 9.00878L12.3362 4.00878C12.1455 3.83541 11.8543 3.8354 11.6636 4.00878L6.16357 9.00878C6.05933 9.10354 5.99991 9.23788 5.99991 9.37875V18.5001C5.99991 18.7762 6.22376 19.0001 6.49991 19.0001H9V16C9 14.3431 10.3431 13 12 13C13.6569 13 15 14.3431 15 16V19.0001Z" fill="black"/>
    </svg>
  )
}

export default HomeSvg