import { useRouter } from 'next/router'

import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { loginUserAction } from '@/redux/slices/authSlice/authSlice'

import { useFormik } from 'formik'
import * as Yup from 'yup'

import { AuthLayout } from '@/layout'
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
                  <svg className={styles._0016_auth_svg}xmlns="http://www.w3.org/2000/svg" xmlnsXlink='http://www.w3.org/1999/xlink' viewBox="0 0 48 48"> <defs> <path id="a" d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"/> </defs> <clipPath id="b"> <use overflow='visible' xlinkHref='#a'></use> </clipPath> <path clipPath="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z"/> <path clipPath="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z"/> <path clipPath="url(#b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z"/> <path clipPath="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z"/> </svg>
                    Continue with Google
                  </button>
                </div>

                <div>
                  {/* continue with twitter */}
                  <button className={`${styles.oauths_} ${styles.twtr_oauth}`}>
                  <svg className={styles._0016_auth_svg}xmlns="http://www.w3.org/2000/svg" xmlnsXlink='http://www.w3.org/1999/xlink' x="0px" y="0px" viewBox="0 0 512 512" fill='#00acee' xmlSpace="preserve"> <g> <path d="M32,48.8c64,64,128,128,208,112c-9.7-52.1,24.6-102.3,76.7-112c11.7-2.2,23.6-2.2,35.3,0c24.7,2,47.6,13.5,64,32 c29.6-1.1,57.8-12.4,80-32c-8.8,25.9-25.6,48.3-48,64c22.4,0.4,44.4-5.2,64-16c-12.8,28.4-35.6,51.2-64,64 c8.8,158.8-112.7,294.7-271.6,303.6c-5.5,0.3-11,0.5-16.4,0.4c-56.9,0.2-112.6-16.5-160-48c47.1,0.3,92.7-16.8,128-48 c-34.4-9.3-63.4-32.5-80-64c16.4,0.4,32.7-2.3,48-8c-55.1-14.2-94.2-63.1-96-120c14.8,8.5,31.1,13.9,48,16 C13.4,152.7,7,95.5,32,48.8"/> </g> </svg>
                    Continue with Twitter
                  </button>
                </div>

                <div>
                  {/* continue with apple */}
                  <button className={`${styles.oauths_} ${styles.appl_oauth}`}>
                  <svg className={styles._0016_auth_svg}xmlns="http://www.w3.org/2000/svg" width="2038" height="2500" viewBox="0 0 496.255 608.728"> <path d="M273.81 52.973C313.806.257 369.41 0 369.41 0s8.271 49.562-31.463 97.306c-42.426 50.98-90.649 42.638-90.649 42.638s-9.055-40.094 26.512-86.971zM252.385 174.662c20.576 0 58.764-28.284 108.471-28.284 85.562 0 119.222 60.883 119.222 60.883s-65.833 33.659-65.833 115.331c0 92.133 82.01 123.885 82.01 123.885s-57.328 161.357-134.762 161.357c-35.565 0-63.215-23.967-100.688-23.967-38.188 0-76.084 24.861-100.766 24.861C89.33 608.73 0 455.666 0 332.628c0-121.052 75.612-184.554 146.533-184.554 46.105 0 81.883 26.588 105.852 26.588z" fill="#000"/> </svg>
                    Continue with Apple
                  </button>
                </div>

              </div>

              <div className={styles._oxr}>
                <div></div>
                <span className={styles.or}>OR</span>
              </div>

              <div className={styles.xpnd_inpts} style={{ paddingTop: "14px" }}>
                <div style={{ position: "relative" }}>
                  <input type="text" value={formik.values.email} onChange={formik.handleChange('email')} onBlur={formik.handleBlur} name='email' placeholder="Email" className={styles.data_content_pass} />
                  {/* error svg */}
                  {formik.touched.email && formik.errors.email ? (
                    <span className={styles.__spanerror}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#d90000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
                  </span> ) : null}

                  {/* {formik.touched.email && formik.errors.email} */}
                  {/* error svg  */}

                </div>

                <div style={{ position: "relative" }}>
                  <input type="password" value={formik.values.password} onChange={formik.handleChange('password')} onBlur={formik.handleBlur} placeholder="Password" name='password' className={`${styles.data_content_pass} ${styles._00x00_pwd}`} />
                  
                  <span className={styles.absolute__span}>
                    <>
                    <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" className={styles.svg__showpaswd}xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" > <g stroke="none" strokeWidth={2}fill="gray" fillRule="evenodd"> <g fill="gray" fillRule="nonzero"> <path d="M12,9.0046246 C14.209139,9.0046246 16,10.7954856 16,13.0046246 C16,15.2137636 14.209139,17.0046246 12,17.0046246 C9.790861,17.0046246 8,15.2137636 8,13.0046246 C8,10.7954856 9.790861,9.0046246 12,9.0046246 Z M12,10.5046246 C10.6192881,10.5046246 9.5,11.6239127 9.5,13.0046246 C9.5,14.3853365 10.6192881,15.5046246 12,15.5046246 C13.3807119,15.5046246 14.5,14.3853365 14.5,13.0046246 C14.5,11.6239127 13.3807119,10.5046246 12,10.5046246 Z M12,5.5 C16.613512,5.5 20.5960869,8.65000641 21.7011157,13.0643865 C21.8017,13.4662019 21.557504,13.8734775 21.1556885,13.9740618 C20.7538731,14.0746462 20.3465976,13.8304502 20.2460132,13.4286347 C19.3071259,9.67795854 15.9213644,7 12,7 C8.07693257,7 4.69009765,9.68026417 3.75285786,13.4331499 C3.65249525,13.8350208 3.24535455,14.0794416 2.84348365,13.979079 C2.44161275,13.8787164 2.19719198,13.4715757 2.29755459,13.0697048 C3.4006459,8.65271806 7.38448293,5.5 12,5.5 Z"/> </g> </g> </svg>
                    </>
                    
                    {/* error svg  */}
                    {formik.touched.password && formik.errors.password ? (
                    <span className={`${styles.__spanerror} ${styles.passwrd__error}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#d90000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
                    </span> ) : null}
                    {/* error svg  */}

                    {/* {formik.touched.password && formik.errors.password} */}
                  </span>

                  <span className={styles._0013_span}>
                    <span style={{ float: "right" }}><a href="/forgot-password">Forgot Password?</a></span>
                  </span>
                  
                </div>

              </div>

              <span className={styles.ouplskk}>
                {storeData?.appError && storeData?.appError}
              </span>

              <div>

                {storeData?.loading ? (
                  <button 
                  className={styles.pass_data_bd} 
                  type='submit' style={{ position: "relative" }} disabled>
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{margin: "auto", background: "rgba(255, 255, 255, 0)", display: "block", shapeRendering: "auto", position: "absolute", right: "14px", top: "11px"}}width="34px" height="34px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" > <g transform="rotate(0 50 50)"> <rect x={47}y="21.5" rx={3}ry="3.9" width={6}height={13}fill="#ececec" > <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.9166666666666666s" repeatCount="indefinite"/> </rect> </g> <g transform="rotate(30 50 50)"> <rect x={47}y="21.5" rx={3}ry="3.9" width={6}height={13}fill="#ececec" > <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.8333333333333334s" repeatCount="indefinite"/> </rect> </g> <g transform="rotate(60 50 50)"> <rect x={47}y="21.5" rx={3}ry="3.9" width={6}height={13}fill="#ececec" > <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.75s" repeatCount="indefinite"/> </rect> </g> <g transform="rotate(90 50 50)"> <rect x={47}y="21.5" rx={3}ry="3.9" width={6}height={13}fill="#ececec" > <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.6666666666666666s" repeatCount="indefinite"/> </rect> </g> <g transform="rotate(120 50 50)"> <rect x={47}y="21.5" rx={3}ry="3.9" width={6}height={13}fill="#ececec" > <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5833333333333334s" repeatCount="indefinite"/> </rect> </g> <g transform="rotate(150 50 50)"> <rect x={47}y="21.5" rx={3}ry="3.9" width={6}height={13}fill="#ececec" > <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5s" repeatCount="indefinite"/> </rect> </g> <g transform="rotate(180 50 50)"> <rect x={47}y="21.5" rx={3}ry="3.9" width={6}height={13}fill="#ececec" > <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.4166666666666667s" repeatCount="indefinite"/> </rect> </g> <g transform="rotate(210 50 50)"> <rect x={47}y="21.5" rx={3}ry="3.9" width={6}height={13}fill="#ececec" > <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.3333333333333333s" repeatCount="indefinite"/> </rect> </g> <g transform="rotate(240 50 50)"> <rect x={47}y="21.5" rx={3}ry="3.9" width={6}height={13}fill="#ececec" > <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.25s" repeatCount="indefinite"/> </rect> </g> <g transform="rotate(270 50 50)"> <rect x={47}y="21.5" rx={3}ry="3.9" width={6}height={13}fill="#ececec" > <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.16666666666666666s" repeatCount="indefinite"/> </rect> </g> <g transform="rotate(300 50 50)"> <rect x={47}y="21.5" rx={3}ry="3.9" width={6}height={13}fill="#ececec" > <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.08333333333333333s" repeatCount="indefinite"/> </rect> </g> <g transform="rotate(330 50 50)"> <rect x={47}y="21.5" rx={3}ry="3.9" width={6}height={13}fill="#ececec" > <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"/> </rect> </g></svg>
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