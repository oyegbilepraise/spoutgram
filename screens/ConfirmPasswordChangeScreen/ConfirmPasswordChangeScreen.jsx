import Link from "next/link"
import { useRouter } from "next/router"

import { useFormik } from 'formik'
import * as Yup from 'yup'

import { useDispatch } from 'react-redux'
import { registerUserAction } from '@/redux/slices/authSlice/authSlice' //this registerUserAction should be replaced with the appropriate redux user action
import { useSelector } from 'react-redux'

import styles from '@/layout/AuthLayout/AuthLayout.module.css'

import { AuthLayout } from '@/layout'

const confirmValidationSchema = Yup.object().shape({ 
  code: Yup.string()
  .required('Code is required')
  .matches(
    /^\d{6}$/,
    "Invalid code format"
  )
})

const ConfirmPasswordChangeScreen = () => {

  const router = useRouter()
  const dispatch = useDispatch()
  const storeData = useSelector(store => store?.auth)

  const formik = useFormik({
    initialValues: {
      code: ''
    },
    onSubmit: (values) => {
      dispatch(registerUserAction(values))  //this registerUserAction should be replaced with the appropriate redux user action
    },
    validationSchema: confirmValidationSchema
  })

  if (storeData.isLoggedIn) { //this should be changed to the appropiate function i.e if{storeData.isConfirmed}
    router.push('/change-password')
  }

  return (
    <AuthLayout>
       <main className={styles.__main} role="main">
        <form onSubmit={formik.handleSubmit}>
          <div className={styles._xparnts}>
            <div className={styles._xparnts_cvr}>
              <span className={styles.data_pwd_lock}>
                <svg className={styles.email_svg} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd"
                    d="M6 4.5h12A2.5 2.5 0 0 1 20.5 7v.92l-7.919 4.4a1.25 1.25 0 0 1-1.189.013L3.5 8.179V7A2.5 2.5 0 0 1 6 4.5zM3.5 9.874V17A2.5 2.5 0 0 0 6 19.5h12a2.5 2.5 0 0 0 2.5-2.5V9.636l-7.19 3.994a2.75 2.75 0 0 1-2.617.03L3.5 9.874zM2 7a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V7z">
                  </path>
                </svg>
              </span>
              <span className={styles.vdf_data}>Confirm its you</span>

              <span className={styles._000xsry}>
                To confirm you are the one requesting a password reset, enter the confirmation code sent to your email.
              </span>

              <div className={styles.xpnd_inpts} style={{ paddingTop: "14px" }}>
                <div style={{ position: "relative" }}>
                  <input type="text" value={formik.values.code} onChange={formik.handleChange('code')} onBlur={formik.handleBlur} name='code' placeholder="Code" className={styles.data_content_pass} />

                  {/* error svg */}
                  {formik.touched.code && formik.errors.code ? (
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
                    Confirm
                  </button>

                ) : (
                  <button 
                  className={styles.pass_data_bd} 
                  type='submit'>Confirm</button>
                )}

                {/* <button className={styles.pass_data_bd}>Confirm</button> */}
              </div>
              <div>
                <span class={styles.sracde}>Didn't recieve any code? <span className={styles.sapn__rsbd}>Resend code.</span></span>
              </div>
              <div>

                {/* verification code resent */}
                <span className={styles._00rsnd}>
                  Code resent
                  <svg className={styles.yxxz} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                    fill="none" stroke="#01A8EA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>

                {/* verification code resent */}

              </div>
              <span className={styles.ouplskk}><Link href="/signup">Back to Sign up</Link></span>
            </div>
          </div>
        </form>
      </main>
     
    </AuthLayout>
  )
}

export default ConfirmPasswordChangeScreen