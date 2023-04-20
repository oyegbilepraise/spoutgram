import { useRouter } from 'next/router'
import { HideSvg, ShowSvg, GoogleSvg, TwitterSvg, AppleSvg, CautionSvg, ErrorSvg, BtnloadSvg } from '../../components';
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { loginUserAction } from '@/redux/slices/authSlice/authSlice'
import { useFormik } from 'formik'
import { AuthLayout } from '@/layout'
import {useState} from 'react'
import * as Yup from 'yup'
import Link from 'next/link'
import styles from '@/layout/AuthLayout/AuthLayout.module.css'

const loginFormSchema = Yup.object().shape({
  email: Yup.string()
    .email('Enter a valid email')
    .required('Please enter your email address'),
  password: Yup.string()
    .required('Please enter your password')
})

const LoginScreen = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const storeData = useSelector(store => store?.auth)

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '', 
    },
    onSubmit: (values) => {
      dispatch(loginUserAction(values))
    },
    validationSchema: loginFormSchema
  })

  if (storeData.isLoggedIn) {
    router.push('/')
  }

  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);


  return (
    <AuthLayout>
    
      <main className={styles.__main} role="main">
        <form onSubmit={formik.handleSubmit}>
          <div className={styles._xparnts}>
            <div className={styles._xparnts_cvr}>
              <span className={styles.vdf_data}>
                Sign in to Spoutgram
              </span>
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


              {/* this is the error msg from the API : Invalid credentials, try again. */}
              {storeData?.appError && storeData?.appError ? (
              <span className={styles.error__msg__xyx}>
                <CautionSvg />
                <span className={styles.error__txt__xyx}>
                {storeData?.appError && storeData?.appError}
                </span>
              </span> ) : null}

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
                  <input type={visible ? "text" : "password"} value={formik.values.password} onChange={formik.handleChange('password')} onBlur={formik.handleBlur} placeholder="Password" name='password' className={`${styles.data_content_pass} ${styles._00x00_pwd}`} />
                  
                  <span className={styles.absolute__span}>
                    < span onClick={ () => setVisible(!visible)}>
                      {visible ? <HideSvg /> : <ShowSvg />}
                    </ span>
                    
                    {/* error svg  */}
                    {formik.touched.password && formik.errors.password ? (
                    <span className={`${styles.__spanerror} ${styles.passwrd__error}`}>
                      <ErrorSvg />
                    </span> ) : null}
                    {/* error svg  */}

                  </span>

                  <span className={styles._0013_span}>
                    <span style={{ float: "right" }}><a href="/forgot-password">Forgot Password?</a></span>
                  </span>
                  
                </div>
              </div>

              <div>
                {storeData?.loading ? (
                  <button 
                  className={styles.pass_data_bd} 
                  type='submit' style={{ position: "relative" }} disabled>
                    <>
                      <BtnloadSvg />
                    </>
                    Sign in
                  </button>
                ) : (
                  <button 
                  className={styles.pass_data_bd} 
                  type='submit'>Sign in</button>
                )}
              </div>

              <span className={styles.ouplskk}><Link href="/signup">Sign up for Spoutgram</Link></span>
            </div>
          </div>
        </form>
      </main>
    </AuthLayout>

  )
}

export default LoginScreen