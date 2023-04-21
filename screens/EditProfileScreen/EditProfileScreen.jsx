import { HomeLayout } from '@/layout'
import styles from '@/layout/HomeLayout/HomeLayout.module.css'
import Image from "next/image";
import img from "../../images/default-photo.svg";

const EditProfileScreen = () => {
  return (
    <HomeLayout>
      {/* div.timeline -> middle */}
      <div class={`${styles.timeline} ${styles._000middlebar}`}>
        <form action="">
          <nav className={styles.___main_nav}>
            <div>
              <span class={styles.icon_back}>
                <svg class={styles._00_history__back} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(90, 90, 90)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H6M12 5l-7 7 7 7"/></svg>
              </span>
              <span class={styles.not_home_nav_text}>Edit Profile</span>
            </div>
          </nav>

          <div className={styles.edit__profile__container}>
            {/*  */}
            <div className={styles.edit__pc__flex}>

              <div>
                <div>
                  <Image src={img} className={styles.edit__profile__img} />
                </div>
              </div>

              <div>
                <div>
                  <input className={styles.data_content_pass} type="text" placeholder="Name" value={"Avary"} />
                </div>
                <div>
                  <input className={styles.data_content_pass} type="text" placeholder="Username" value={"@avary"} />
                </div>
              </div>

            </div>

            <div className={styles.edit__pc__block}>
              <div>
                <textarea name="" id="" cols="30" rows="10"></textarea>
              </div>
              <div>
                <input type="text" placeholder="Location" value={"Miami, USA"} />
              </div>
              <div>
                <select name="" id="">
                  <option value="">Creator</option>
                </select>
              </div>
              <div>
                <input type="text" placeholder="Bio Link" value={"https://yourlinks/avary"} />
              </div>
            </div>


          </div>


        </form>
       </div>
      {/* div.timeline -> middle */}
    </HomeLayout>
  )
}

export default EditProfileScreen