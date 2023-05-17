import { HomeLayout } from '@/layout'
import styles from '@/layout/HomeLayout/HomeLayout.module.css'
import Image from "next/image";
import img from "../../images/default-photo.svg";
import { useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { useRouter } from "next/router";

const EditProfileScreen = () => {
  const { user, apiError } = useSelector((state) => state?.auth?.getUser);

  console.log({ user: user.data });
  const formik = useFormik({
    initialValues: {
      name: user?.data?.name,
      username: user?.data?.username,
      bio: "",
      location: "",
      link: user?.data?.links[0]
    },
    onSubmit: (values) => {
      console.log({ values });
      const data = { token: token, password: values.password };
      // dispatch(changePasswordAction(data));
    },
    // validationSchema: changeValidationSchema,
  });


  const router = useRouter();
   const handleGoBack = () => {
      router.back(); // Go back to the previous page or route
  };


  return (
    <HomeLayout>
      {/* div.timeline -> middle */}
      <div class={`${styles.timeline} ${styles._000middlebar}`}>
        <form onSubmit={formik.handleSubmit}>
          <nav className={styles.___main_nav}>
            <div>
              <span class={styles.icon_back} onClick={handleGoBack}>
                <svg class={styles._00_history__back} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(90, 90, 90)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H6M12 5l-7 7 7 7" /></svg>
              </span>
              <span class={styles.not_home_nav_text}>Edit Profile</span>
              <button type="submit" className={styles.save__edit__btn}>Save</button>
            </div>
          </nav>

          <div className={styles.edit__profile__container}>
            {/*  */}
            <div className={styles.edit__pc__flex}>
              <div>
                <div>
                  <Image src={user?.data?.profilePhoto ?? img} className={styles.edit__profile__img} />
                </div>
              </div>
              <div>
                <div>
                  <input className={styles.data_content_pass} type="text" placeholder="Name" value={formik.values.name} />
                </div>
                <div>
                  <input className={styles.data_content_pass} type="text" placeholder="Username" value={formik.values.username} />
                </div>
              </div>
            </div>
            <div className={styles.edit__pc__block}>
              <div>
                <textarea name="" id="" className={styles.data_content_pass_bio} placeholder="Bio"></textarea>
              </div>
              <div>
                <input className={styles.data_content_pass} type="text" placeholder="Location" value={"Miami, USA"} />
              </div>
              <div>
                <select name="" id="">
                  <option value="">Creator</option>
                </select>
              </div>
              <div>
                <input className={styles.data_content_pass} type="text" placeholder="Bio Link" value={"https://yourlinks/avary"} />
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