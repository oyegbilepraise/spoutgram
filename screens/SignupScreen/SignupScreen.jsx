import { useRouter } from "next/router"
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import { registerUserAction } from '@/redux/slices/authSlice/authSlice'
import { useSelector } from 'react-redux'
import { AuthLayout } from '@/layout'
import {useState} from 'react'
import { HideSvg, ShowSvg, GoogleSvg, TwitterSvg, AppleSvg, CautionSvg, ErrorSvg, BtnloadSvg } from '../../components';
import * as Yup from 'yup'
import Link from "next/link"
import styles from '@/layout/AuthLayout/AuthLayout.module.css'

const signupValidationSchema = Yup.object().shape({ 
  email: Yup.string()
    .email('Please enter a valid email address')
    .required('Please enter your email address.'),
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

const SignUpScreen = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const storeData = useSelector(store => store?.auth)

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: ''
    },
    onSubmit: (values) => {
      dispatch(registerUserAction(values))
    },
    validationSchema: signupValidationSchema
  })

  if (storeData?.registered) {
    // dispatch(generateEmailVerificationAction())
    router.push('/verify')
  }

  const [password, setPassword] = useState("");

  const [visible, setVisible] = useState(false);
  const [visibleOne, setVisibleOne] = useState(false);

  return (
    <AuthLayout>

      {/* paage loader */}
      <div className={styles.loader__} style={{ display: "none" }}>
        <div>
          <svg className={`${styles._0004_logo_svg} ${styles._loader_img}`} width="282" height="49" viewBox="0 0 282 49" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.05 35.45C10.7833 35.45 8.75 35.05 6.95 34.25C5.15 33.4167 3.71667 32.3 2.65 30.9C1.61667 29.5 1.05 27.95 0.95 26.25H8C8.13333 27.3167 8.65 28.2 9.55 28.9C10.4833 29.6 11.6333 29.95 13 29.95C14.3333 29.95 15.3667 29.6833 16.1 29.15C16.8667 28.6167 17.25 27.9333 17.25 27.1C17.25 26.2 16.7833 25.5333 15.85 25.1C14.95 24.6333 13.5 24.1333 11.5 23.6C9.43333 23.1 7.73333 22.5833 6.4 22.05C5.1 21.5167 3.96667 20.7 3 19.6C2.06667 18.5 1.6 17.0167 1.6 15.15C1.6 13.6167 2.03333 12.2167 2.9 10.95C3.8 9.68333 5.06667 8.68333 6.7 7.95C8.36667 7.21667 10.3167 6.85 12.55 6.85C15.85 6.85 18.4833 7.68333 20.45 9.35C22.4167 10.9833 23.5 13.2 23.7 16H17C16.9 14.9 16.4333 14.0333 15.6 13.4C14.8 12.7333 13.7167 12.4 12.35 12.4C11.0833 12.4 10.1 12.6333 9.4 13.1C8.73333 13.5667 8.4 14.2167 8.4 15.05C8.4 15.9833 8.86667 16.7 9.8 17.2C10.7333 17.6667 12.1833 18.15 14.15 18.65C16.15 19.15 17.8 19.6667 19.1 20.2C20.4 20.7333 21.5167 21.5667 22.45 22.7C23.4167 23.8 23.9167 25.2667 23.95 27.1C23.95 28.7 23.5 30.1333 22.6 31.4C21.7333 32.6667 20.4667 33.6667 18.8 34.4C17.1667 35.1 15.25 35.45 13.05 35.45ZM36.6961 11.3C37.5961 10.0333 38.8294 8.98333 40.3961 8.15C41.9961 7.28333 43.8128 6.85 45.8461 6.85C48.2128 6.85 50.3461 7.43333 52.2461 8.6C54.1794 9.76667 55.6961 11.4333 56.7961 13.6C57.9294 15.7333 58.4961 18.2167 58.4961 21.05C58.4961 23.8833 57.9294 26.4 56.7961 28.6C55.6961 30.7667 54.1794 32.45 52.2461 33.65C50.3461 34.85 48.2128 35.45 45.8461 35.45C43.8128 35.45 42.0128 35.0333 40.4461 34.2C38.9128 33.3667 37.6628 32.3167 36.6961 31.05V48.2H29.6961V7.3H36.6961V11.3ZM51.3461 21.05C51.3461 19.3833 50.9961 17.95 50.2961 16.75C49.6294 15.5167 48.7294 14.5833 47.5961 13.95C46.4961 13.3167 45.2961 13 43.9961 13C42.7294 13 41.5294 13.3333 40.3961 14C39.2961 14.6333 38.3961 15.5667 37.6961 16.8C37.0294 18.0333 36.6961 19.4833 36.6961 21.15C36.6961 22.8167 37.0294 24.2667 37.6961 25.5C38.3961 26.7333 39.2961 27.6833 40.3961 28.35C41.5294 28.9833 42.7294 29.3 43.9961 29.3C45.2961 29.3 46.4961 28.9667 47.5961 28.3C48.7294 27.6333 49.6294 26.6833 50.2961 25.45C50.9961 24.2167 51.3461 22.75 51.3461 21.05ZM75.8828 35.45C73.2161 35.45 70.8161 34.8667 68.6828 33.7C66.5495 32.5 64.8661 30.8167 63.6328 28.65C62.4328 26.4833 61.8328 23.9833 61.8328 21.15C61.8328 18.3167 62.4495 15.8167 63.6828 13.65C64.9495 11.4833 66.6661 9.81667 68.8328 8.65C70.9995 7.45 73.4161 6.85 76.0828 6.85C78.7495 6.85 81.1661 7.45 83.3328 8.65C85.4995 9.81667 87.1995 11.4833 88.4328 13.65C89.6995 15.8167 90.3328 18.3167 90.3328 21.15C90.3328 23.9833 89.6828 26.4833 88.3828 28.65C87.1161 30.8167 85.3828 32.5 83.1828 33.7C81.0161 34.8667 78.5828 35.45 75.8828 35.45ZM75.8828 29.35C77.1495 29.35 78.3328 29.05 79.4328 28.45C80.5661 27.8167 81.4661 26.8833 82.1328 25.65C82.7995 24.4167 83.1328 22.9167 83.1328 21.15C83.1328 18.5167 82.4328 16.5 81.0328 15.1C79.6661 13.6667 77.9828 12.95 75.9828 12.95C73.9828 12.95 72.2995 13.6667 70.9328 15.1C69.5995 16.5 68.9328 18.5167 68.9328 21.15C68.9328 23.7833 69.5828 25.8167 70.8828 27.25C72.2161 28.65 73.8828 29.35 75.8828 29.35ZM121.618 7.3V35H114.568V31.5C113.668 32.7 112.484 33.65 111.018 34.35C109.584 35.0167 108.018 35.35 106.318 35.35C104.151 35.35 102.234 34.9 100.568 34C98.9009 33.0667 97.5842 31.7167 96.6176 29.95C95.6842 28.15 95.2176 26.0167 95.2176 23.55V7.3H102.218V22.55C102.218 24.75 102.768 26.45 103.868 27.65C104.968 28.8167 106.468 29.4 108.368 29.4C110.301 29.4 111.818 28.8167 112.918 27.65C114.018 26.45 114.568 24.75 114.568 22.55V7.3H121.618ZM136.674 13.05V26.45C136.674 27.3833 136.891 28.0667 137.324 28.5C137.791 28.9 138.558 29.1 139.624 29.1H142.874V35H138.474C132.574 35 129.624 32.1333 129.624 26.4V13.05H126.324V7.3H129.624V0.449998H136.674V7.3H142.874V13.05H136.674ZM158.759 6.85C160.826 6.85 162.642 7.26667 164.209 8.1C165.776 8.9 167.009 9.95 167.909 11.25V7.3H174.959V35.2C174.959 37.7667 174.442 40.05 173.409 42.05C172.376 44.0833 170.826 45.6833 168.759 46.85C166.692 48.05 164.192 48.65 161.259 48.65C157.326 48.65 154.092 47.7333 151.559 45.9C149.059 44.0667 147.642 41.5667 147.309 38.4H154.259C154.626 39.6667 155.409 40.6667 156.609 41.4C157.842 42.1667 159.326 42.55 161.059 42.55C163.092 42.55 164.742 41.9333 166.009 40.7C167.276 39.5 167.909 37.6667 167.909 35.2V30.9C167.009 32.2 165.759 33.2833 164.159 34.15C162.592 35.0167 160.792 35.45 158.759 35.45C156.426 35.45 154.292 34.85 152.359 33.65C150.426 32.45 148.892 30.7667 147.759 28.6C146.659 26.4 146.109 23.8833 146.109 21.05C146.109 18.25 146.659 15.7667 147.759 13.6C148.892 11.4333 150.409 9.76667 152.309 8.6C154.242 7.43333 156.392 6.85 158.759 6.85ZM167.909 21.15C167.909 19.45 167.576 18 166.909 16.8C166.242 15.5667 165.342 14.6333 164.209 14C163.076 13.3333 161.859 13 160.559 13C159.259 13 158.059 13.3167 156.959 13.95C155.859 14.5833 154.959 15.5167 154.259 16.75C153.592 17.95 153.259 19.3833 153.259 21.05C153.259 22.7167 153.592 24.1833 154.259 25.45C154.959 26.6833 155.859 27.6333 156.959 28.3C158.092 28.9667 159.292 29.3 160.559 29.3C161.859 29.3 163.076 28.9833 164.209 28.35C165.342 27.6833 166.242 26.75 166.909 25.55C167.576 24.3167 167.909 22.85 167.909 21.15ZM188.796 11.6C189.696 10.1333 190.862 8.98333 192.296 8.15C193.762 7.31667 195.429 6.9 197.296 6.9V14.25H195.446C193.246 14.25 191.579 14.7667 190.446 15.8C189.346 16.8333 188.796 18.6333 188.796 21.2V35H181.796V7.3H188.796V11.6ZM200.211 21.05C200.211 18.25 200.761 15.7667 201.861 13.6C202.994 11.4333 204.511 9.76667 206.411 8.6C208.344 7.43333 210.494 6.85 212.861 6.85C214.927 6.85 216.727 7.26667 218.261 8.1C219.827 8.93333 221.077 9.98333 222.011 11.25V7.3H229.061V35H222.011V30.95C221.111 32.25 219.861 33.3333 218.261 34.2C216.694 35.0333 214.877 35.45 212.811 35.45C210.477 35.45 208.344 34.85 206.411 33.65C204.511 32.45 202.994 30.7667 201.861 28.6C200.761 26.4 200.211 23.8833 200.211 21.05ZM222.011 21.15C222.011 19.45 221.677 18 221.011 16.8C220.344 15.5667 219.444 14.6333 218.311 14C217.177 13.3333 215.961 13 214.661 13C213.361 13 212.161 13.3167 211.061 13.95C209.961 14.5833 209.061 15.5167 208.361 16.75C207.694 17.95 207.361 19.3833 207.361 21.05C207.361 22.7167 207.694 24.1833 208.361 25.45C209.061 26.6833 209.961 27.6333 211.061 28.3C212.194 28.9667 213.394 29.3 214.661 29.3C215.961 29.3 217.177 28.9833 218.311 28.35C219.444 27.6833 220.344 26.75 221.011 25.55C221.677 24.3167 222.011 22.85 222.011 21.15ZM270.297 6.9C273.697 6.9 276.431 7.95 278.497 10.05C280.597 12.1167 281.647 15.0167 281.647 18.75V35H274.647V19.7C274.647 17.5333 274.097 15.8833 272.997 14.75C271.897 13.5833 270.397 13 268.497 13C266.597 13 265.081 13.5833 263.947 14.75C262.847 15.8833 262.297 17.5333 262.297 19.7V35H255.297V19.7C255.297 17.5333 254.747 15.8833 253.647 14.75C252.547 13.5833 251.047 13 249.147 13C247.214 13 245.681 13.5833 244.547 14.75C243.447 15.8833 242.897 17.5333 242.897 19.7V35H235.897V7.3H242.897V10.65C243.797 9.48333 244.947 8.56667 246.347 7.9C247.781 7.23333 249.347 6.9 251.047 6.9C253.214 6.9 255.147 7.36666 256.847 8.3C258.547 9.2 259.864 10.5 260.797 12.2C261.697 10.6 262.997 9.31667 264.697 8.35C266.431 7.38333 268.297 6.9 270.297 6.9Z" fill="url(#paint0_linear_160_4)" />
            <defs>
              <linearGradient id="paint0_linear_160_4" x1="276.937" y1="12.8137" x2="-1.27401" y2="30.5774" gradientUnits="userSpaceOnUse">
                <stop stopColor="#00FFF0" />
                <stop offset="1" stopColor="#0070D7" />
              </linearGradient>
            </defs>
          </svg>
        </div> 
      </div>
      {/* paage loader */}

      <main className={styles.__main} role="main">
        <form onSubmit={formik.handleSubmit}>
          <div className={styles._xparnts}>
            <div className={styles._xparnts_cvr}>
              <span className={styles.vdf_data}>Sign up for Spoutgram</span>

              <div className={styles._xpnds_oauths_div}>

                <div>
                  {/* continue with google */}
                  <button className={`${styles.oauths_} ${styles.ggl_oauth}`}>
                    <GoogleSvg />
                    Continue with Google
                  </button>
                </div>

                <div>
                  {/* continue with twitter */}
                  <button className={`${styles.oauths_} ${styles.twtr_oauth}`}>
                    <TwitterSvg />
                    Continue with Twitter
                  </button>
                </div>

                <div>
                  {/* continue with apple */}
                  <button className={`${styles.oauths_} ${styles.appl_oauth}`}>
                    <AppleSvg />
                    Continue with Apple
                  </button>
                </div>

              </div>

              <div className={styles._oxr}>
                <div></div>
                <span className={styles.or}>OR</span>
              </div>

              {/* this is the error msg from the API : User already registered. Please login. */}
              {storeData?.appError && storeData?.appError ? (
                <span className={styles.error__msg__xyx}>
                  <CautionSvg />
                  <span className={styles.error__txt__xyx}>
                  {storeData?.appError && storeData?.appError}
                  </span>
                </span>
              ) : null}

              <div className={styles.xpnd_inpts} style={{ paddingTop: "14px" }}>
                <div style={{ position: "relative" }}>
                  <input type="text" value={formik.values.email} onChange={formik.handleChange('email')} onBlur={formik.handleBlur} name='email' placeholder="Email" className={styles.data_content_pass} />
                  
                  {/* error svg */}
                  {formik.touched.email && formik.errors.email ? (
                    <span className={styles.__spanerror}>
                    <ErrorSvg />
                  </span> ) : null}
                  {/* error svg  */}

                </div>

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
                  <button className={styles.pass_data_bd} type='submit' style={{ position: "relative" }} disabled>
                    <>
                      <BtnloadSvg />
                    </>
                    Sign up
                  </button>

                ) : (
                  <button className={styles.pass_data_bd}  type='submit'>Sign up</button>
                )}
              </div>

              <span className={styles.xkktndckl}>
                By signing up you agree to our <a href="/terms-of-service" target="_blank" style={{ color: "#54cfff" }}>Terms of Use</a> & <a href="/cookie-policy" style={{ color: "#54cfff" }}>Cookie Policy</a>.
              </span>
              <span className={styles.ouplskk}><Link href="/login">Sign in to Spoutgram</Link></span>

            </div>
          </div>
        </form>
      </main>
    </AuthLayout>
  )
}

export default SignUpScreen