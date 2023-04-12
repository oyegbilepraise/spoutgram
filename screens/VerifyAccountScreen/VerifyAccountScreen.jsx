import './verifyAccount.module.css'

// Next
import { useRouter } from 'next/router'
// Formik
import * as Yup from 'yup'
import { useFormik } from 'formik'

// styles
import styles from '@/layout/AuthLayout/AuthLayout.module.css'

// Redux
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { verifyEmailAction, generateEmailVerificationAction } from '@/redux/slices/authSlice/authSlice'
import { AuthLayout } from '@/layout' 
import Link from 'next/link'

const verifyEmailSchema = Yup.object().shape({
  token: Yup.string()
    .required('Please enter the valid token sent to your mail.')
    .matches(
      /^\d{6}$/,
      "Invalid code format"
    )
})

const VerifyAccountScreen = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const storeData = useSelector(store => store?.auth)

  const formik = useFormik({
    initialValues: {
      token: ''
    },
    onSubmit: (values) => {
      dispatch(verifyEmailAction(values))
    },
    validationSchema: verifyEmailSchema
  })

  if (storeData?.verified) {
    router.push('/create-profile')
  }

  const handleResendCode = () => {
    dispatch(generateEmailVerificationAction())
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
              <span className={styles.vdf_data}>Verify your account</span>

              <span className={styles._000xsry}>
                Check your email, a verification code was sent.
              </span>

              <div className={styles.xpnd_inpts} style={{ paddingTop: "14px" }}>
                <div style={{ position: "relative" }}>
                  <input
                    type="text"
                    value={formik.values.token}
                    onChange={formik.handleChange('token')}
                    onBlur={formik.handleBlur}
                    placeholder="Code"
                    className={styles.data_content_pass} />

                    {/* this is where I stopd */}

                    {/* error message */}
                    {formik.touched.token && formik.errors.token ? (
                      <span className={styles.__spanerror}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#d90000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
                    </span>
                    ) : null}
                    {formik.touched.token && formik.errors.token}
                    {/* error message */}
                    {/* error message */}

                </div>
              </div>

              <div>
                <button className={styles.pass_data_bd}  type='submit'>Verify</button>
              </div>
              <div>
                <span class={styles.sracde}>Didn't recieve any code? <span className={styles.sapn__rsbd} onClick={handleResendCode}>Resend code.</span></span>
              </div>
              <div>
                {/* <button className="pass-data-bd overrd-pass-dbd" onClick={handleResendCode}>Resend code</button> */}
              </div>
              <div>

                {/* verification code resent */}
                {storeData?.loading && (<span className={`${styles.sending_code} ${styles._00rsnd}`}>
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      style={{
                        margin: "auto",
                        background: "rgba(255, 255, 255, 0)",
                        display: "block",
                        shapeRendering: "auto"
                      }}
                      width="36px"
                      height="36px"
                      viewBox="0 0 90 90"
                      preserveAspectRatio="xMidYMid"
                      >
                      <g transform="rotate(0 50 50)">
                        <rect
                          x={47}
                          y={24}
                          rx="2.52"
                          ry="2.52"
                          width={6}
                          height={12}
                          fill="rgba(1, 168, 234, 0.7579032258064516)"
                        >
                          <animate
                            attributeName="opacity"
                            values="1;0"
                            keyTimes="0;1"
                            dur="1s"
                            begin="-0.9166666666666666s"
                            repeatCount="indefinite"
                          />
                        </rect>
                      </g>
                      <g transform="rotate(30 50 50)">
                        <rect
                          x={47}
                          y={24}
                          rx="2.52"
                          ry="2.52"
                          width={6}
                          height={12}
                          fill="rgba(1, 168, 234, 0.7579032258064516)"
                        >
                          <animate
                            attributeName="opacity"
                            values="1;0"
                            keyTimes="0;1"
                            dur="1s"
                            begin="-0.8333333333333334s"
                            repeatCount="indefinite"
                          />
                        </rect>
                      </g>
                      <g transform="rotate(60 50 50)">
                        <rect
                          x={47}
                          y={24}
                          rx="2.52"
                          ry="2.52"
                          width={6}
                          height={12}
                          fill="rgba(1, 168, 234, 0.7579032258064516)"
                        >
                          <animate
                            attributeName="opacity"
                            values="1;0"
                            keyTimes="0;1"
                            dur="1s"
                            begin="-0.75s"
                            repeatCount="indefinite"
                          />
                        </rect>
                      </g>
                      <g transform="rotate(90 50 50)">
                        <rect
                          x={47}
                          y={24}
                          rx="2.52"
                          ry="2.52"
                          width={6}
                          height={12}
                          fill="rgba(1, 168, 234, 0.7579032258064516)"
                        >
                          <animate
                            attributeName="opacity"
                            values="1;0"
                            keyTimes="0;1"
                            dur="1s"
                            begin="-0.6666666666666666s"
                            repeatCount="indefinite"
                          />
                        </rect>
                      </g>
                      <g transform="rotate(120 50 50)">
                        <rect
                          x={47}
                          y={24}
                          rx="2.52"
                          ry="2.52"
                          width={6}
                          height={12}
                          fill="rgba(1, 168, 234, 0.7579032258064516)"
                        >
                          <animate
                            attributeName="opacity"
                            values="1;0"
                            keyTimes="0;1"
                            dur="1s"
                            begin="-0.5833333333333334s"
                            repeatCount="indefinite"
                          />
                        </rect>
                      </g>
                      <g transform="rotate(150 50 50)">
                        <rect
                          x={47}
                          y={24}
                          rx="2.52"
                          ry="2.52"
                          width={6}
                          height={12}
                          fill="rgba(1, 168, 234, 0.7579032258064516)"
                        >
                          <animate
                            attributeName="opacity"
                            values="1;0"
                            keyTimes="0;1"
                            dur="1s"
                            begin="-0.5s"
                            repeatCount="indefinite"
                          />
                        </rect>
                      </g>
                      <g transform="rotate(180 50 50)">
                        <rect
                          x={47}
                          y={24}
                          rx="2.52"
                          ry="2.52"
                          width={6}
                          height={12}
                          fill="rgba(1, 168, 234, 0.7579032258064516)"
                        >
                          <animate
                            attributeName="opacity"
                            values="1;0"
                            keyTimes="0;1"
                            dur="1s"
                            begin="-0.4166666666666667s"
                            repeatCount="indefinite"
                          />
                        </rect>
                      </g>
                      <g transform="rotate(210 50 50)">
                        <rect
                          x={47}
                          y={24}
                          rx="2.52"
                          ry="2.52"
                          width={6}
                          height={12}
                          fill="rgba(1, 168, 234, 0.7579032258064516)"
                        >
                          <animate
                            attributeName="opacity"
                            values="1;0"
                            keyTimes="0;1"
                            dur="1s"
                            begin="-0.3333333333333333s"
                            repeatCount="indefinite"
                          />
                        </rect>
                      </g>
                      <g transform="rotate(240 50 50)">
                        <rect
                          x={47}
                          y={24}
                          rx="2.52"
                          ry="2.52"
                          width={6}
                          height={12}
                          fill="rgba(1, 168, 234, 0.7579032258064516)"
                        >
                          <animate
                            attributeName="opacity"
                            values="1;0"
                            keyTimes="0;1"
                            dur="1s"
                            begin="-0.25s"
                            repeatCount="indefinite"
                          />
                        </rect>
                      </g>
                      <g transform="rotate(270 50 50)">
                        <rect
                          x={47}
                          y={24}
                          rx="2.52"
                          ry="2.52"
                          width={6}
                          height={12}
                          fill="rgba(1, 168, 234, 0.7579032258064516)"
                        >
                          <animate
                            attributeName="opacity"
                            values="1;0"
                            keyTimes="0;1"
                            dur="1s"
                            begin="-0.16666666666666666s"
                            repeatCount="indefinite"
                          />
                        </rect>
                      </g>
                      <g transform="rotate(300 50 50)">
                        <rect
                          x={47}
                          y={24}
                          rx="2.52"
                          ry="2.52"
                          width={6}
                          height={12}
                          fill="rgba(1, 168, 234, 0.7579032258064516)"
                        >
                          <animate
                            attributeName="opacity"
                            values="1;0"
                            keyTimes="0;1"
                            dur="1s"
                            begin="-0.08333333333333333s"
                            repeatCount="indefinite"
                          />
                        </rect>
                      </g>
                      <g transform="rotate(330 50 50)">
                        <rect
                          x={47}
                          y={24}
                          rx="2.52"
                          ry="2.52"
                          width={6}
                          height={12}
                          fill="rgba(1, 168, 234, 0.7579032258064516)"
                        >
                          <animate
                            attributeName="opacity"
                            values="1;0"
                            keyTimes="0;1"
                            dur="1s"
                            begin="0s"
                            repeatCount="indefinite"
                          />
                        </rect>
                      </g>
                    </svg>
                  </>
                </span>)}
                {storeData?.codeSent && (
                  <span className={styles._00rsnd}>
                    Code resent
                    <svg className={styles.yxxz} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                      fill="none" stroke="#01A8EA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                )}

                {storeData?.appError && (
                  <span className={styles._00rsnd}>
                    Code resent
                    <svg className={styles.yxxz} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                      fill="none" stroke="#01A8EA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                )}

                {/* verification code resent */}

              </div>
              <span className={`${styles.ouplskk} ${styles.topme__}`}><Link href="/signup">Back to Sign up</Link></span>
            </div>
          </div>
        </form>
      </main>
    </AuthLayout>
  )
}

export default VerifyAccountScreen