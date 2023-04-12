import { LeftSidebar } from '@/components'
import styles from '@/layout/HomeLayout/HomeLayout.module.css'

const ProfileLayout = (props) => {
  return (
    <main class={`${styles.main__app} ${styles._000_main_js} ${styles.app_component}`}>
      <div class={`${styles.main__body} ${styles._000_main_div} ${styles.ir}`}>
        <LeftSidebar />

        <div class={`${styles.main} ${styles.main_flex_components} ${styles._0mfc_m} ${styles.profile__contnr} ${styles.block__for__profile__only}`}>
          {props.children}
        </div>
      
      </div>
    </main>
  )
}

export default ProfileLayout