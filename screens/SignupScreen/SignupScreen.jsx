import { useRouter } from "next/router"
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import {
  generateEmailVerificationAction,
  registerUserAction,
} from "@/redux/slices/authSlice/authSlice";
import { AuthLayout } from "@/layout";
import { useEffect, useState } from "react";
import {
  HideSvg,
  ShowSvg,
  GoogleSvg,
  TwitterSvg,
  CautionSvg,
  ErrorSvg,
  BtnloadSvg,
} from "../../components";
import * as Yup from "yup";
import Link from "next/link";
import styles from "@/layout/AuthLayout/AuthLayout.module.css";
import Routes from "@/utils/routes";
import axios from "axios"
import { from } from "form-data"
import {baseUrl} from "../../redux/baseUrl"



const signupValidationSchema = Yup.object().shape({ 
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .matches(
      /^.{8,}$/,
      "Password should be at least 8 characters"
    ),
  confirmPassword: Yup.string()
    .required("Confirm Password is required")
    .oneOf([Yup.ref("password")], "Password does not match"),
});

const SignUpScreen = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const storedData = useSelector((state) => state?.auth?.registerUser);
  const codeSent = useSelector((state) => state?.auth?.verifyUserEmail);


  const handleGoogleLogin = async ()=>{
  try {
    if (typeof window !== 'undefined') {
      window.open(
        `${baseUrl}/auth/google/callback`,
        "_self"
      );
    }
  } catch (error) {
    console.log(error);
  }
}

const handleTwitterLogin =async ()=>{
  try {
    window.open(
      `${baseUrl}/auth/twitter/callback`,
      "_self"
    )
  } catch (error) {
    console.log(err);
  }
}
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values) => {
      const { email, password } = values;
      dispatch(registerUserAction({ email, password }));
    },
    validationSchema: signupValidationSchema,
  });
  useEffect(() => {
    if (codeSent.sucess) {
      router.push(Routes.VERIFY);
    }
  }, [codeSent.sucess]);
  useEffect(() => {
    if (
      storedData?.registered.success &&
      !storedData?.registered.isAccountVerified
    ) {
      dispatch(generateEmailVerificationAction());
    }
  }, [
    dispatch,
    storedData?.registered.isAccountVerified,
    storedData?.registered.success,
  ]);
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [visibleOne, setVisibleOne] = useState(false);
  const [showEmailError, setShowEmailError] = useState(false);
  const [showPasswordError, setShowPasswordError] = useState(false);
  const [showCPasswordError, setShowCPasswordError] = useState(false);

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

  function handleCPasswordFocus() {
    setShowCPasswordError(true);
  }
  function handleCPasswordBlur() {
    setShowCPasswordError(false);
  }

  return (
    <AuthLayout>
      <main className={styles.__main} role="main">
        <form onSubmit={formik.handleSubmit}>
          <div className={styles._xparnts}>
            <div className={styles._xparnts_cvr}>
              <span className={styles.vdf_data}>Sign up for Spoutgram</span>

              <div className={styles._xpnds_oauths_div}>
                <div>
                  {/* continue with google */}
                  <button className={`${styles.oauths_} ${styles.ggl_oauth}`} onClick={handleGoogleLogin}>
                    <GoogleSvg />
                    Continue With Google
                  </button>
                </div>

                <div>
                  {/* continue with twitter */}
                  <button className={`${styles.oauths_} ${styles.twtr_oauth}`} onClick={handleTwitterLogin}>
                    <TwitterSvg />
                    Continue With Twitter
                  </button>
                </div>
              </div>

              <div className={styles._oxr}>
                <div></div>
                <span className={styles.or}>OR</span>
              </div>

              {/* this is the error msg from the API : User already registered. Please login. */}
              {storedData?.appError && storedData?.appError && (
                <span className={styles.error__msg__xyx}>
                  <CautionSvg />
                  <span className={styles.error__txt__xyx}>
                    {storedData?.appError && storedData?.appError}
                  </span>
                </span>
              )}

              <div className={styles.xpnd_inpts} style={{ paddingTop: "14px" }}>

                <div style={{ position: "relative" }}>
                  {/* email input */}
                  <input type="text" spellcheck="false"  value={formik.values.email} onChange={formik.handleChange("email")} onFocus={handleEmailFocus} onBlur={handleEmailBlur} name="email" placeholder="Email" className={styles.data_content_pass} />
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
                </div>

                <div style={{ position: "relative" }}>
                  {/* password input */}
                  <input type={visible ? "text" : "password"} value={formik.values.password} onChange={formik.handleChange("password")} onFocus={handlePasswordFocus} onBlur={handlePasswordBlur} name="password" placeholder="Password" className={`${styles.data_content_pass} ${styles._00x00_pwd}`} />
                  {/* show and hide password svg */}
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
                </div>
                

                <div style={{ position: "relative" }}>
                  {/* confirm password input */}
                  <input type={visibleOne ? "text" : "password"} value={formik.values.confirmPassword} onChange={formik.handleChange("confirmPassword")} onFocus={handleCPasswordFocus} onBlur={handleCPasswordBlur} name="confirmPassword" placeholder="Confirm Password" className={`${styles.data_content_pass} ${styles._00x00_pwd}`} />
                  {/* show and hide password svg */}
                  <span className={styles.absolute__span}>
                    <span onClick={() => setVisibleOne(!visibleOne)}>
                      {visibleOne ? <HideSvg /> : <ShowSvg />}
                    </span>
                    {/* error svg  */}
                    {formik.touched.confirmPassword &&
                    formik.errors.confirmPassword ? (
                      <span className={`${styles.__spanerror} ${styles.passwrd__error}`} style={{position: "relative"}}>
                        {/* this is the confirm password  error msg */}
                        {showCPasswordError && formik.touched.confirmPassword && formik.errors.confirmPassword
                            ? (<span className={styles.span__inperr}>
                              <span>{formik.errors.confirmPassword}</span>
                            </span>)
                        : null}
                        <ErrorSvg />
                      </span>
                    ) : null}
                  </span>
                </div>

              </div>

              <div>
                {storedData?.loading ? (
                  <button className={styles.pass_data_bd} type="submit" style={{ position: "relative" }} disabled >
                    <>
                      <BtnloadSvg />
                    </>
                    Sign up
                  </button>
                  ) : (
                  <button className={styles.pass_data_bd} type="submit">
                    Sign up
                  </button>
                )}
              </div>

              <span className={styles.xkktndckl}>
                By signing up you agree to our{" "}
                <a href="/terms-of-service" target="_blank" style={{ color: "#54cfff" }} >
                  Terms of Use
                </a>{" "}
                &{" "}
                <Link href="/cookie-policy" style={{ color: "#54cfff" }}>
                  Cookie Policy
                </Link>
                .
              </span>
              <span className={styles.ouplskk}>
                <Link href="/login">Sign in to Spoutgram</Link>
              </span>
            </div>
          </div>
        </form>
      </main>
    </AuthLayout>
  );
};

export default SignUpScreen;