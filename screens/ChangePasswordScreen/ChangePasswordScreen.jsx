import './changePasswordScreen.module.css'


// Components.
import { AuthLayout } from '@/layout'

// styles
import styles from '@/layout/AuthLayout/AuthLayout.module.css'


const ChangePasswordScreen = () => {
  return (
   <AuthLayout>
    <main className={styles.__main} role="main"> 
        <form action="">
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
                  <input type="password" placeholder="Password" className={`${styles.data_content_pass} ${styles._00x00_pwd}`} />
                  <div className={styles._0014_t0ggl}></div>
                  <span className={styles._0013_span}>

                    {/* error messages */}
                    <svg className={styles.invalid_svg} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#01A8EA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line></svg>
                    Password should be 8 characters or more!
                    {/* error messages */}

                  </span>
                </div>
                <div style={{ position: "relative" }}>
                  <input type="password" placeholder="Confirm Password" className={`${styles.data_content_pass} ${styles._00x00_pwd}`} />
                  <div className={styles._0014_t0ggl}></div>
                  <span className={styles._0013_span}>

                    {/* error messages */}
                    <svg className={styles.invalid_svg} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#01A8EA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line></svg>
                    Passwords dont match!
                    {/* error messages */}

                  </span>
                </div>

              </div>
              <div>
                <button className={styles.pass_data_bd}>Reset Password</button>
              </div>
              <span className={styles.ouplskk}><a href="/login">Back to Sign in</a></span>
            </div>
          </div>
        </form>
      </main>
   </AuthLayout>
  )
}

export default ChangePasswordScreen