import { useRouter } from "next/router"
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import { registerUserAction } from '@/redux/slices/authSlice/authSlice' //this registerUserAction should be replaced with the appropriate redux user action
import { useSelector } from 'react-redux'
import { AuthLayout } from '@/layout'
import {useState} from 'react'
import { HideSvg, ShowSvg, GoogleSvg, TwitterSvg, AppleSvg, CautionSvg, ErrorSvg, BtnloadSvg } from '../../components';
import * as Yup from 'yup'
import Link from "next/link"
import styles from '@/layout/AuthLayout/AuthLayout.module.css'

const changeValidationSchema = Yup.object().shape({ 
  password: Yup.string()
    .required('Please enter your password')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
  confirmPassword: Yup.string()
    .required('Please confirm your password')
    .oneOf([Yup.ref('password')], 'Password does not match')
})


const ChangePasswordScreen = () => {

  const router = useRouter()
  const dispatch = useDispatch()
  const storeData = useSelector(store => store?.auth)

  const formik = useFormik({
    initialValues: {
      password: '',
      confirmPassword: ''
    },
    onSubmit: (values) => {
      dispatch(registerUserAction(values))  //this registerUserAction should be replaced with the appropriate redux user action
    },
    validationSchema: changeValidationSchema
  })

  if (storeData.isLoggedIn) { //this should be changed to the appropiate function i.e if{storeData.isConfirmed}
    router.push('/login')
  }

  const [password, setPassword] = useState("");

  const [visible, setVisible] = useState(false);
  const [visibleOne, setVisibleOne] = useState(false);

  return (
   <AuthLayout>
    <main className={styles.__main} role="main"> 
        <form onSubmit={formik.handleSubmit}>
          <div className={styles._xparnts}>
            <div className={styles._xparnts_cvr}>
              <span className={styles.data_pwd_lock}>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M7.504 10.508V7.882c0-1.512.317-2.392 1.023-3.098.706-.707 1.586-1.024 3.097-1.024h.76c1.51 0 2.39.317 3.097 1.024.705.706 1.023 1.586 1.023 3.098v2.626h.374a1.566 1.566 0 0 1 1.5 1.625v6.5a1.566 1.566 0 0 1-1.5 1.625h-9.75a1.566 1.566 0 0 1-1.5-1.625v-6.5a1.566 1.566 0 0 1 1.5-1.625h.376zm1.5 0h6V7.882c0-.961-.202-1.522-.651-1.971-.45-.45-1.01-.652-1.971-.652h-.756c-.961 0-1.521.202-1.97.652-.45.45-.652 1.01-.652 1.971v2.626zm7.875 8.182a.066.066 0 0 1-.053.068H7.18a.066.066 0 0 1-.053-.068l.001-.028v-6.558l-.001-.029a.066.066 0 0 1 .053-.067h9.646a.066.066 0 0 1 .053.067v6.615z"></path></svg>
              </span>
              <span className={styles.vdf_data}>Reset Password</span>

              <span className={styles._000xsry}>
                You will be redirected to sign in, after the reset is successful.
              </span>
              <div className={styles.xpnd_inpts} style={{ paddingTop: "14px" }}>
                <div style={{ position: "relative" }}>
                  <input type={visible ? "text" : "password"} value={formik.values.password} onChange={formik.handleChange('password')} onBlur={formik.handleBlur} name='password' placeholder="Password" className={`${styles.data_content_pass} ${styles._00x00_pwd}`} />
                  <span className={styles.absolute__span}>
                    <span onClick={ () => setVisible(!visible)}>
                      {visible ? <HideSvg /> : <ShowSvg />}
                    </ span>
                    
                    {/* error svg  */}
                    {formik.touched.password && formik.errors.password ? (
                    <span className={`${styles.__spanerror} ${styles.passwrd__error}`}>
                      <ErrorSvg />
                    </span> ) : null}
                    {/* error svg  */}

                  </span>
                </div>
                <div style={{ position: "relative" }}>
                  <input type={visibleOne ? "text" : "password"} value={formik.values.confirmPassword} onChange={formik.handleChange('confirmPassword')} onBlur={formik.handleBlur} name='confirmPassword' placeholder="Confirm Password" className={`${styles.data_content_pass} ${styles._00x00_pwd}`} />

                  <span className={styles.absolute__span}>
                    <span onClick={ () => setVisibleOne(!visibleOne)}>
                      {visibleOne ? <HideSvg /> : <ShowSvg />}
                    </ span>

                    {/* error svg  */}
                    {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                    <span className={`${styles.__spanerror} ${styles.passwrd__error}`}>
                      <ErrorSvg />
                    </span> ) : null}
                    {/* error svg  */}

                  </span>
                </div>

              </div>
              <div>

                {storeData?.loading ? (
                    <button 
                    className={`${styles.pass_data_bd} ${styles.new__change__btn}`} 
                    type='submit' style={{ position: "relative" }} disabled>
                      <>
                      <BtnloadSvg />
                      </>
                      Reset
                    </button>

                  ) : (
                    <button 
                    className={`${styles.pass_data_bd} ${styles.new__change__btn}`} 
                    type='submit'>Reset</button>
                )}


                {/* <button className={styles.pass_data_bd}>Reset Password</button> */}
              </div>
              <span className={styles.ouplskk}><Link href="/login">Back to Sign in</Link></span>
            </div>
          </div>
        </form>
      </main>
   </AuthLayout>
  )
}

export default ChangePasswordScreen