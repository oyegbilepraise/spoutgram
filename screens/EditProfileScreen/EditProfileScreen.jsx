import { HomeLayout } from '@/layout'
import styles from '@/layout/HomeLayout/HomeLayout.module.css'

const EditProfileScreen = () => {
  return (
    <HomeLayout>
      {/* div.timeline -> middle */}
      <div class={`${styles.timeline} ${styles._000middlebar}`}>
            <nav className={styles.___main_nav}>
                <div>
                    <span class={styles.icon_back}>
                        <svg class={styles._00_history__back} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(90, 90, 90)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H6M12 5l-7 7 7 7"/></svg>
                    </span>
                    <span class={styles.not_home_nav_text}>Edit Profile</span>
                </div>
            </nav>
       </div>
      {/* div.timeline -> middle */}
    </HomeLayout>
  )
}

export default EditProfileScreen