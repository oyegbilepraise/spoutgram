import { LeftSidebar } from '@/components'
import styles from '@/layout/HomeLayout/HomeLayout.module.css'

const SettingsLayout = (props) => {
  return (
    <main className={`${styles.main__app} ${styles._000_main_js} ${styles.app_component}`}>
      <div className={`${styles.main__body} ${styles._000_main_div} ${styles.ir}`}>
        <LeftSidebar />

        <div className={`${styles.main} ${styles.main_flex_components} ${styles._0mfc_m} ${styles.settings__whole__xx}`}>
          {props.children}
        </div>
       
      </div>
    </main>
  )
}

export default SettingsLayout