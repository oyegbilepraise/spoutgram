import './confirmPasswordChangeScreen.module.css'

// styles
import styles from '@/layout/AuthLayout/AuthLayout.module.css'

// Components.
import { AuthLayout } from '@/layout'

const ConfirmPasswordChangeScreen = () => {

  return (
    <AuthLayout>
       <main className={styles.__main} role="main">
        <form action="">
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
                <div>
                  <input type="text" placeholder="Code" className={styles.data_content_pass} />

                  <span className={styles._0013_span}>

                    {/* error message */}
                    <svg className={styles.invalid_svg} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                      fill="none" stroke="#01A8EA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>
                    </svg>
                    Invalid code!
                    {/* error message */}
                  </span>

                </div>
              </div>

              <div>
                <button className={styles.pass_data_bd}>Confirm</button>
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
              <span className={styles.ouplskk}><a href="www.google.com">Back to Sign up</a></span>
            </div>
          </div>
        </form>
      </main>
     
    </AuthLayout>
  )
}

export default ConfirmPasswordChangeScreen