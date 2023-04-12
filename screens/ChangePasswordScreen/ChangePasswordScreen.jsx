import Link from "next/link"
import { useRouter } from "next/router"

import { useFormik } from 'formik'
import * as Yup from 'yup'

import { useDispatch } from 'react-redux'
import { registerUserAction } from '@/redux/slices/authSlice/authSlice' //this registerUserAction should be replaced with the appropriate redux user action
import { useSelector } from 'react-redux'

import { AuthLayout } from '@/layout'

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
                Once reset is successful, you will be redirected to Sign in to your account.
              </span>
              <div className={styles.xpnd_inpts} style={{ paddingTop: "14px" }}>
                <div style={{ position: "relative" }}>
                  <input type="password" value={formik.values.password} onChange={formik.handleChange('password')} onBlur={formik.handleBlur} name='password' placeholder="Password" className={`${styles.data_content_pass} ${styles._00x00_pwd}`} />
                  <span className={styles.absolute__span}>
                    <>
                      <svg
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        version="1.1"
                        className={styles.svg__showpaswd}
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <g stroke="none" strokeWidth={2} fill="gray" fillRule="evenodd">
                          <g fill="gray" fillRule="nonzero">
                            <path
                              d="M12,9.0046246 C14.209139,9.0046246 16,10.7954856 16,13.0046246 C16,15.2137636 14.209139,17.0046246 12,17.0046246 C9.790861,17.0046246 8,15.2137636 8,13.0046246 C8,10.7954856 9.790861,9.0046246 12,9.0046246 Z M12,10.5046246 C10.6192881,10.5046246 9.5,11.6239127 9.5,13.0046246 C9.5,14.3853365 10.6192881,15.5046246 12,15.5046246 C13.3807119,15.5046246 14.5,14.3853365 14.5,13.0046246 C14.5,11.6239127 13.3807119,10.5046246 12,10.5046246 Z M12,5.5 C16.613512,5.5 20.5960869,8.65000641 21.7011157,13.0643865 C21.8017,13.4662019 21.557504,13.8734775 21.1556885,13.9740618 C20.7538731,14.0746462 20.3465976,13.8304502 20.2460132,13.4286347 C19.3071259,9.67795854 15.9213644,7 12,7 C8.07693257,7 4.69009765,9.68026417 3.75285786,13.4331499 C3.65249525,13.8350208 3.24535455,14.0794416 2.84348365,13.979079 C2.44161275,13.8787164 2.19719198,13.4715757 2.29755459,13.0697048 C3.4006459,8.65271806 7.38448293,5.5 12,5.5 Z"
                            />
                          </g>
                        </g>
                      </svg>
                    </>
                    
                    {/* error svg  */}
                    {formik.touched.password && formik.errors.password ? (
                    <span className={`${styles.__spanerror} ${styles.passwrd__error}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#d90000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
                    </span> ) : null}
                    {/* error svg  */}

                    {/* {formik.touched.password && formik.errors.password} */}
                  </span>
                </div>
                <div style={{ position: "relative" }}>
                  <input type="password" value={formik.values.confirmPassword} onChange={formik.handleChange('confirmPassword')} onBlur={formik.handleBlur} name='confirmPassword' placeholder="Confirm Password" className={`${styles.data_content_pass} ${styles._00x00_pwd}`} />

                  <span className={styles.absolute__span}>
                    <>
                      <svg
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        version="1.1"
                        className={styles.svg__showpaswd}
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <g stroke="none" strokeWidth={2} fill="gray" fillRule="evenodd">
                          <g fill="gray" fillRule="nonzero">
                            <path
                              d="M12,9.0046246 C14.209139,9.0046246 16,10.7954856 16,13.0046246 C16,15.2137636 14.209139,17.0046246 12,17.0046246 C9.790861,17.0046246 8,15.2137636 8,13.0046246 C8,10.7954856 9.790861,9.0046246 12,9.0046246 Z M12,10.5046246 C10.6192881,10.5046246 9.5,11.6239127 9.5,13.0046246 C9.5,14.3853365 10.6192881,15.5046246 12,15.5046246 C13.3807119,15.5046246 14.5,14.3853365 14.5,13.0046246 C14.5,11.6239127 13.3807119,10.5046246 12,10.5046246 Z M12,5.5 C16.613512,5.5 20.5960869,8.65000641 21.7011157,13.0643865 C21.8017,13.4662019 21.557504,13.8734775 21.1556885,13.9740618 C20.7538731,14.0746462 20.3465976,13.8304502 20.2460132,13.4286347 C19.3071259,9.67795854 15.9213644,7 12,7 C8.07693257,7 4.69009765,9.68026417 3.75285786,13.4331499 C3.65249525,13.8350208 3.24535455,14.0794416 2.84348365,13.979079 C2.44161275,13.8787164 2.19719198,13.4715757 2.29755459,13.0697048 C3.4006459,8.65271806 7.38448293,5.5 12,5.5 Z"
                            />
                          </g>
                        </g>
                      </svg>
                    </>

                    {/* error svg  */}
                    {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                    <span className={`${styles.__spanerror} ${styles.passwrd__error}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#d90000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
                    </span> ) : null}

                    {/* {formik.touched.confirmPassword && formik.errors.confirmPassword} */}
                    {/* error svg  */}
                  </span>
                </div>

              </div>
              <div>

                {storeData?.loading ? (
                    <button 
                    className={styles.pass_data_bd} 
                    type='submit' style={{ position: "relative" }} disabled>
                      <>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{margin: "auto", background: "rgba(255, 255, 255, 0)", display: "block", shapeRendering: "auto", position: "absolute", right: "14px", top: "11px"}}width="34px" height="34px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" > <g transform="rotate(0 50 50)"> <rect x={47}y="21.5" rx={3}ry="3.9" width={6}height={13}fill="#ececec" > <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.9166666666666666s" repeatCount="indefinite"/> </rect> </g> <g transform="rotate(30 50 50)"> <rect x={47}y="21.5" rx={3}ry="3.9" width={6}height={13}fill="#ececec" > <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.8333333333333334s" repeatCount="indefinite"/> </rect> </g> <g transform="rotate(60 50 50)"> <rect x={47}y="21.5" rx={3}ry="3.9" width={6}height={13}fill="#ececec" > <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.75s" repeatCount="indefinite"/> </rect> </g> <g transform="rotate(90 50 50)"> <rect x={47}y="21.5" rx={3}ry="3.9" width={6}height={13}fill="#ececec" > <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.6666666666666666s" repeatCount="indefinite"/> </rect> </g> <g transform="rotate(120 50 50)"> <rect x={47}y="21.5" rx={3}ry="3.9" width={6}height={13}fill="#ececec" > <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5833333333333334s" repeatCount="indefinite"/> </rect> </g> <g transform="rotate(150 50 50)"> <rect x={47}y="21.5" rx={3}ry="3.9" width={6}height={13}fill="#ececec" > <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5s" repeatCount="indefinite"/> </rect> </g> <g transform="rotate(180 50 50)"> <rect x={47}y="21.5" rx={3}ry="3.9" width={6}height={13}fill="#ececec" > <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.4166666666666667s" repeatCount="indefinite"/> </rect> </g> <g transform="rotate(210 50 50)"> <rect x={47}y="21.5" rx={3}ry="3.9" width={6}height={13}fill="#ececec" > <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.3333333333333333s" repeatCount="indefinite"/> </rect> </g> <g transform="rotate(240 50 50)"> <rect x={47}y="21.5" rx={3}ry="3.9" width={6}height={13}fill="#ececec" > <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.25s" repeatCount="indefinite"/> </rect> </g> <g transform="rotate(270 50 50)"> <rect x={47}y="21.5" rx={3}ry="3.9" width={6}height={13}fill="#ececec" > <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.16666666666666666s" repeatCount="indefinite"/> </rect> </g> <g transform="rotate(300 50 50)"> <rect x={47}y="21.5" rx={3}ry="3.9" width={6}height={13}fill="#ececec" > <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.08333333333333333s" repeatCount="indefinite"/> </rect> </g> <g transform="rotate(330 50 50)"> <rect x={47}y="21.5" rx={3}ry="3.9" width={6}height={13}fill="#ececec" > <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"/> </rect> </g></svg>
                      </>
                      Reset
                    </button>

                  ) : (
                    <button 
                    className={styles.pass_data_bd} 
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