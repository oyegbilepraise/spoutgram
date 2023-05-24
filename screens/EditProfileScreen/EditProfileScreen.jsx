import { HomeLayout } from '@/layout'
import styles from '@/layout/HomeLayout/HomeLayout.module.css'
import editStyle from './EditProfileScreen.module.css'
import Image from "next/image";
import img from "../../images/default-photo.svg";
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { updateProfileAction, updateProfilePictureAction } from '@/redux/slices/userDetailSlice';
import { BtnloadSvg } from '@/components';
import Pensvg from '@/components/svg/pensvg';

const EditProfileScreen = () => {
  const dispatch = useDispatch({});
  const { user, apiError } = useSelector((state) => state?.auth?.getUser);
  const {loading, appError} = useSelector(state=>state?.userDetails?.updateProfile)
  const {uploading, uploadError} = useSelector(state=>state?.userDetails?.updateProfilePicture)

  const handleChooseFile=async(e)=>{
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    dispatch(updateProfilePictureAction(formData))
  }
  const formik = useFormik({
    initialValues: {
      name: user?.data?.name,
      username: user?.data?.username,
      bio: user?.data?.bio,
      location: user?.data?.location,
      website: user?.data?.website
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      const {name, username, website, bio, location} = values;
      dispatch(updateProfileAction({name, username, website, bio, location}));
      // const data = { token: token, password: values.password };
      // dispatch(changePasswordAction(data));
    },
    // validationSchema: changeValidationSchema,
  });

  return (
    <HomeLayout>
      {/* div.timeline -> middle */}
      <div class={`${styles.timeline} ${styles._000middlebar}`}>
        <form onSubmit={formik.handleSubmit}>
          <nav className={styles.___main_nav}>
            <div>
              <span class={styles.icon_back}>
                <svg class={styles._00_history__back} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(90, 90, 90)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H6M12 5l-7 7 7 7" /></svg>
              </span>
              <span class={styles.not_home_nav_text}>Edit Profile</span>
              <button type="submit" className={styles.save__edit__btn} disabled={loading} style={loading? { padding: '2vh', color: "transparent", transition: "0.1s all", cursor: 'not-allowed' }: {}}>
                {
                  loading?(
                    <>
                      <BtnloadSvg/>
                    </>
                  ):(
                    'Save'
                  )
                }
                </button>
            </div>
          </nav>
          {appError && (
                <div>
                <span className={styles.post__msg__pp}>
                  {uploadError}
                </span>
              </div>
              )}

          <div className={styles.edit__profile__container}>
            {/*  */}
            <div className={styles.edit__pc__flex}>
              <div>
                <div>
                  <label htmlFor="img_file" className={editStyle.__img_file}>
                    <Image src={!!user?.data?.profilePhoto ? (user?.data?.profilePhoto): (img)} className={styles.edit__profile__img} width={50} height={50}/>
                    <span style={!uploading? {display: 'none'}: {}}>loading</span>
                    <input type="file" id='img_file' onChange={handleChooseFile} className={editStyle.__file_input} accept='.jpg, .png, .jpeg'/>
                    <Pensvg/>
                  </label>
                </div>
              </div>
              <div>
                <div>
                  <input className={styles.data_content_pass} type="text" name='name' placeholder="Name" value={formik?.values?.name} onChange={formik.handleChange}/>
                </div>
                <div>
                  <input className={styles.data_content_pass} type="text" name='username' placeholder="Username" value={formik.values.username} onChange={formik.handleChange}/>
                </div>
              </div>
            </div>
            <div className={styles.edit__pc__block}>
              <div>
                <textarea name="bio" id="" className={styles.data_content_pass_bio} placeholder="Bio" value={formik.values.bio} onChange={formik.handleChange}></textarea>
              </div>
              <div>
                <input className={styles.data_content_pass} name='location' id='location' type="text" placeholder="Location" value={formik.values.location} onChange={formik.handleChange}/>
              </div>
              {/* <div>
                <select name="" id="" onChange={formik.handleChange}>
                  <option value="">Creator</option>
                </select>
              </div> */}
              <div>
                <input className={styles.data_content_pass} type="text" name='website' placeholder="Bio Link" value={formik.values.website} onChange={formik.handleChange}/>
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