import Link from "next/link"
import { useRouter } from "next/router"

import { useFormik } from 'formik'
import * as Yup from 'yup'

import { useDispatch } from 'react-redux'
import { registerUserAction } from '@/redux/slices/authSlice/authSlice'  //this registerUserAction should be replaced with the appropriate redux user action
import { useSelector } from 'react-redux'

import { AuthLayout } from '@/layout'

import styles from '@/layout/AuthLayout/AuthLayout.module.css'

const forgotValidationSchema = Yup.object().shape({ 
  email: Yup.string()
    .email('Enter a valid email')
    .required('Please enter your email address')
})

const ForgotPasswordScreen = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const storeData = useSelector(store => store?.auth)

  const formik = useFormik({
    initialValues: {
      email: ''
    },
    onSubmit: (values) => {
      dispatch(registerUserAction(values))  //this registerUserAction should be replaced with the appropriate redux user action
    },
    validationSchema: forgotValidationSchema
  })

  if (storeData.isLoggedIn) { //this should be changed to the appropiate function i.e if{storeData.isEmailavailable}
    router.push('/confirm-change-password')
  }

  return (
    <AuthLayout>
     
     <main className={styles.__main} role="main">
        <form onSubmit={formik.handleSubmit}>
          <div className={styles._xparnts}>
            <div className={styles._xparnts_cvr}>
              <span className={styles.data_pwd_lock}>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd"
                    d="M7.504 10.508V7.882c0-1.512.317-2.392 1.023-3.098.706-.707 1.586-1.024 3.097-1.024h.76c1.51 0 2.39.317 3.097 1.024.705.706 1.023 1.586 1.023 3.098v2.626h.374a1.566 1.566 0 0 1 1.5 1.625v6.5a1.566 1.566 0 0 1-1.5 1.625h-9.75a1.566 1.566 0 0 1-1.5-1.625v-6.5a1.566 1.566 0 0 1 1.5-1.625h.376zm1.5 0h6V7.882c0-.961-.202-1.522-.651-1.971-.45-.45-1.01-.652-1.971-.652h-.756c-.961 0-1.521.202-1.97.652-.45.45-.652 1.01-.652 1.971v2.626zm7.875 8.182a.066.066 0 0 1-.053.068H7.18a.066.066 0 0 1-.053-.068l.001-.028v-6.558l-.001-.029a.066.066 0 0 1 .053-.067h9.646a.066.066 0 0 1 .053.067v6.615z">
                  </path>
                </svg>
              </span>
              <span className={styles.vdf_data}>Forgot Password?</span> 

              <span className={styles._000xsry}>
                Enter the email address you signed up with. We will send you an email with a confirmation code.
              </span>
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
              </div>
              <div>

              {storeData?.loading ? (
                  <button 
                  className={styles.pass_data_bd} 
                  type='submit' style={{ position: "relative" }} disabled>
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{margin: "auto", background: "rgba(255, 255, 255, 0)", display: "block", shapeRendering: "auto", position: "absolute", right: "14px", top: "11px"}}width="34px" height="34px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" > <g transform="rotate(0 50 50)"> <rect x={47}y="21.5" rx={3}ry="3.9" width={6}height={13}fill="#ececec" > <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.9166666666666666s" repeatCount="indefinite"/> </rect> </g> <g transform="rotate(30 50 50)"> <rect x={47}y="21.5" rx={3}ry="3.9" width={6}height={13}fill="#ececec" > <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.8333333333333334s" repeatCount="indefinite"/> </rect> </g> <g transform="rotate(60 50 50)"> <rect x={47}y="21.5" rx={3}ry="3.9" width={6}height={13}fill="#ececec" > <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.75s" repeatCount="indefinite"/> </rect> </g> <g transform="rotate(90 50 50)"> <rect x={47}y="21.5" rx={3}ry="3.9" width={6}height={13}fill="#ececec" > <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.6666666666666666s" repeatCount="indefinite"/> </rect> </g> <g transform="rotate(120 50 50)"> <rect x={47}y="21.5" rx={3}ry="3.9" width={6}height={13}fill="#ececec" > <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5833333333333334s" repeatCount="indefinite"/> </rect> </g> <g transform="rotate(150 50 50)"> <rect x={47}y="21.5" rx={3}ry="3.9" width={6}height={13}fill="#ececec" > <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5s" repeatCount="indefinite"/> </rect> </g> <g transform="rotate(180 50 50)"> <rect x={47}y="21.5" rx={3}ry="3.9" width={6}height={13}fill="#ececec" > <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.4166666666666667s" repeatCount="indefinite"/> </rect> </g> <g transform="rotate(210 50 50)"> <rect x={47}y="21.5" rx={3}ry="3.9" width={6}height={13}fill="#ececec" > <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.3333333333333333s" repeatCount="indefinite"/> </rect> </g> <g transform="rotate(240 50 50)"> <rect x={47}y="21.5" rx={3}ry="3.9" width={6}height={13}fill="#ececec" > <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.25s" repeatCount="indefinite"/> </rect> </g> <g transform="rotate(270 50 50)"> <rect x={47}y="21.5" rx={3}ry="3.9" width={6}height={13}fill="#ececec" > <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.16666666666666666s" repeatCount="indefinite"/> </rect> </g> <g transform="rotate(300 50 50)"> <rect x={47}y="21.5" rx={3}ry="3.9" width={6}height={13}fill="#ececec" > <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.08333333333333333s" repeatCount="indefinite"/> </rect> </g> <g transform="rotate(330 50 50)"> <rect x={47}y="21.5" rx={3}ry="3.9" width={6}height={13}fill="#ececec" > <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"/> </rect> </g></svg>
                    </>
                    Continue
                  </button>

                ) : (
                  <button 
                  className={styles.pass_data_bd} 
                  type='submit'>Continue</button>
                )}

                {/* <button className={styles.pass_data_bd}>Continue</button> */}
              </div>
              <span className={styles.ouplskk}><Link href="/login">Back to Sign in</Link></span>
            </div>
          </div>
        </form>
      </main>
   
    </AuthLayout>
  )
}

export default ForgotPasswordScreen