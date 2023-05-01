import { useRouter } from "next/router";
import {
  HideSvg,
  ShowSvg,
  GoogleSvg,
  TwitterSvg,
  CautionSvg,
  ErrorSvg,
  BtnloadSvg,
} from "../../components";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { loginUserAction } from "@/redux/slices/authSlice/authSlice";
import { useFormik } from "formik";
import { AuthLayout } from "@/layout";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import Link from "next/link";
import styles from "@/layout/AuthLayout/AuthLayout.module.css";
import Routes from "@/utils/routes";
import { baseUrl, baseUrlTest } from "@/redux/baseUrl";

const loginFormSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});
const oauthEndpoint = "http://localhost:5050"
const LoginScreen = () => {
  // google login
  const handleGoogleLogin = async ()=>{
    try {
      if (typeof window !== 'undefined') {
        window.open(
          `${oauthEndpoint}/api/v1/auth/google/callback`,
          "_self"
        );
      }
    } catch (error) {
      console.log(error);
    }
  };
// twitter Login
  const handleTwitterLogin =async ()=>{
    try {
      window.open(
        `${baseUrlTest}/auth/twitter/callback`,
        "_self"
      )
    } catch (error) {
      console.log(error);
    }
  }
  
  const router = useRouter();
  const dispatch = useDispatch();
  const { loading, appError, user } = useSelector(
    (state) => state?.auth?.loginUser
  );

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      const { email, password } = values;
      dispatch(loginUserAction({ email, password }));
    },
    validationSchema: loginFormSchema,
  });
  useEffect(() => {
    if (user.token) {
      if (
        user.isAccountVerified === false &&
        router.pathname !== Routes.VERIFY
      ) {
        router.push(Routes.VERIFY);
        console.log("push to verify from login");
        return;
      } else if (
        user.profile === false &&
        router.pathname !== Routes.CREATE_PROFILE
      ) {
        console.log("push to profile from login");
        router.push(Routes.CREATE_PROFILE);
        return;
      } else {
        router.push(Routes.HOME);
        console.log("push to home from login");
        return;
      }
    }
  }, [user.isAccountVerified, user.profile, user.token]);

  const [visible, setVisible] = useState(false);

  const [showEmailError, setShowEmailError] = useState(false);
  const [showPasswordError, setShowPasswordError] = useState(false);

  function handleEmailFocus() {
    setShowEmailError(true);
  }
  function handleEmailBlur() {
    setShowEmailError(false);
  }

  function handlePasswordFocus() {
    setShowPasswordError(true);
  }
  function handlePasswordBlur() {
    setShowPasswordError(false);
  }

  return (
    <AuthLayout>
      <main className={styles.__main} role="main">
        <form onSubmit={formik.handleSubmit}>
          <div className={styles._xparnts}>
            <div className={styles._xparnts_cvr}>
              <span className={styles.vdf_data}>Sign in to Spoutgram</span>
              <div className={styles._xpnds_oauths_div}>
                <div>
                  {/* continue with google */}
                  <button className={`${styles.oauths_} ${styles.ggl_oauth}`} onClick={handleGoogleLogin}>
                    <GoogleSvg />
                    Continue with Google
                  </button>
                </div>

                <div>
                  {/* continue with twitter */}
                  <button className={`${styles.oauths_} ${styles.twtr_oauth}`} onClick={handleTwitterLogin}>
                    <TwitterSvg />
                    Continue with Twitter
                  </button>
                </div>
              </div>

              <div className={styles._oxr}>
                <div></div>
                <span className={styles.or}>OR</span>
              </div>

              {appError && (
                <span className={styles.error__msg__xyx}>
                  <CautionSvg />
                  <span className={styles.error__txt__xyx}>{appError}</span>
                </span>
              )}

              <div className={styles.xpnd_inpts} style={{ paddingTop: "14px" }}>
                <div style={{ position: "relative" }}>

                  <input type="text" value={formik.values.email} onChange={formik.handleChange("email")} onFocus={handleEmailFocus}  onBlur={handleEmailBlur} spellcheck="false" name="email" placeholder="Email" className={styles.data_content_pass} />
                  {/* error svg */}
                  {formik.touched.email && formik.errors.email ? (
                    <span className={styles.__spanerror}>
                      <div style={{position: "relative"}}>
                        {/* this is the email error msg */}
                        {showEmailError && formik.touched.email && formik.errors.email
                            ?
                            (
                            <span className={styles.span__inperr}>
                              <span>{formik.errors.email}</span>
                            </span>
                            )
                        : null}
                        <ErrorSvg />
                      </div>
                    </span>
                  ) : null}
                  {/* error svg  */}
                </div>

                <div style={{ position: "relative" }}>
                  <input type={visible ? "text" : "password"} value={formik.values.password} onChange={formik.handleChange("password")} onFocus={handlePasswordFocus} onBlur={handlePasswordBlur} autoCorrect="false" placeholder="Password" name="password" className={`${styles.data_content_pass} ${styles._00x00_pwd}`} />
                  <span className={styles.absolute__span}>
                    <span onClick={() => setVisible(!visible)}>
                      {visible ? <HideSvg /> : <ShowSvg />}
                    </span>
                    {/* error svg  */}
                    {formik.touched.password && formik.errors.password ? (
                      <span className={`${styles.__spanerror} ${styles.passwrd__error}`} style={{position: "relative"}}>
                        {/* this is the password error msg */}
                        {showPasswordError && formik.touched.password && formik.errors.password
                            ? (<span className={styles.span__inperr}>
                              <span>{formik.errors.password}</span>
                            </span>)
                        : null}
                        <ErrorSvg />
                      </span>
                    ) : null}
                    {/* error svg  */}
                  </span>

                  <span className={styles._0013_span}>
                    <span style={{ float: "right" }}>
                      <Link href="/forgot-password">Forgot Password?</Link>
                    </span>
                  </span>

                </div>
              </div>

              <div>
                {loading ? (
                  <button
                    className={styles.pass_data_bd}
                    type="submit"
                    style={{ position: "relative" }}
                    disabled
                  >
                    <>
                      <BtnloadSvg />
                    </>
                    Sign in
                  </button>
                ) : (
                  <button className={styles.pass_data_bd} type="submit">
                    Sign in
                  </button>
                )}
              </div>

              <span className={styles.ouplskk}>
                <Link href="/signup">Sign up for Spoutgram</Link>
              </span>
            </div>
          </div>
        </form>
      </main>
    </AuthLayout>
  );
};

export default LoginScreen;