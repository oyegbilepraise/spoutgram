import { useRouter } from 'next/router'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { verifyEmailAction, generateEmailVerificationAction } from '@/redux/slices/authSlice/authSlice'
import { AuthLayout } from '@/layout' 
import { EnvelopeSvg, ErrorSvg, ResendLdSvg } from '../../components';
import Link from 'next/link'
import * as Yup from 'yup'
import styles from '@/layout/AuthLayout/AuthLayout.module.css'

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
                <EnvelopeSvg />
              </span>
              <span className={styles.vdf_data}>Verify your account</span>

              <span className={styles._000xsry}>
                Check your email, a verification code was sent.
              </span>

              <div className={styles.xpnd_inpts} style={{ paddingTop: "14px" }}>
                <div style={{ position: "relative" }}>
                  <input type="text" value={formik.values.token} onChange={formik.handleChange('token')} onBlur={formik.handleBlur} placeholder="Code" className={styles.data_content_pass} />

                    {/* this is where I stopd */}

                    {/* error message */}
                    {formik.touched.token && formik.errors.token ? (
                      <span className={styles.__spanerror}>
                      <ErrorSvg />
                    </span>
                    ) : null}
                    {formik.touched.token && formik.errors.token}
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
                    <ResendLdSvg />
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