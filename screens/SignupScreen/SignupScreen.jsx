import { useRouter } from "next/router";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
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
import Cookies from "js-cookie";
import { baseUrl } from "../../redux/baseUrl";
import { useSession, signIn, signOut } from "next-auth/react"

const signupValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .matches(/^.{8,}$/, "Password should be at least 8 characters"),
  confirmPassword: Yup.string()
    .required("Confirm Password is required")
    .oneOf([Yup.ref("password")], "Password does not match"),
});

const SignUpScreen = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const storedData = useSelector((state) => state?.auth?.registerUser);
  const codeSent = useSelector((state) => state?.auth?.verifyUserEmail);
  const { data, status } = useSession()

  // console.log({ data, status });


  const handleGoogleLogin = async () => {
    try {
      if (typeof window !== "undefined") {
        window.open(`${baseUrl}/auth/google/callback`, "_self");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleTwitterLogin = async () => {
    try {
      window.open(`${baseUrl}/auth/twitter/callback`, "_self");
    } catch (error) {
      console.log(err);
    }
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values) => {
      Cookies.set("email", values.email);
      const { email, password } = values;
      dispatch(registerUserAction({ email, password }));
    },
    validationSchema: signupValidationSchema,
  });
  useEffect(() => {
    if (codeSent.sucess) {
      router.push(Routes.VERIFY);
    }
  }, [codeSent.sucess, router]);
  useEffect(() => {
    if (storedData?.registered?.success) {
      dispatch(generateEmailVerificationAction());
      router.push(Routes.VERIFY);
    }
  }, [dispatch, storedData?.registered?.success]);
  // const [password, setPassword] = useState("");
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

              {/* this is the error msg from the API : User already registered. Please login. */}
              {storedData?.appError && (
                <div className={styles.byyy__err}>
                <span className={styles.error__msg__xyx}>
                  <CautionSvg />
                  <span className={styles.error__txt__xyx}>
                    {storedData?.appError}
                  </span>
                </span>
                </div>
              )}
              {storedData?.register?.message && (
                <div className={styles.byyy__err}>
                <span className={styles.error__msg__xyx}>
                  <CautionSvg />
                  <span className={styles.error__txt__xyx}>
                    {storedData?.register?.message}
                  </span>
                </span>
                </div>
              )}

              <div className={styles.xpnd_inpts} style={{ paddingTop: "0px" }}>
                <div style={{ position: "relative" }}>
                  {/* email input */}
                  <input
                    type="text"
                    spellCheck="false"
                    value={formik.values.email}
                    onChange={formik.handleChange("email")}
                    onFocus={handleEmailFocus}
                    onBlur={handleEmailBlur}
                    name="email"
                    placeholder="Email"
                    autoComplete="off"
                    className={styles.data_content_pass}
                  />
                  {/* error svg */}
                  {formik.touched.email && formik.errors.email ? (
                    <span className={styles.__spanerror}>
                      <div style={{ position: "relative" }}>
                        {/* this is the email error msg */}
                        {showEmailError &&
                          formik.touched.email &&
                          formik.errors.email ? (
                          <span className={styles.span__inperr}>
                            <span>{formik.errors.email}</span>
                          </span>
                        ) : null}
                        <ErrorSvg />
                      </div>
                    </span>
                  ) : null}
                </div>

                <div style={{ position: "relative" }}>
                  {/* password input */}
                  <input
                    type={visible ? "text" : "password"}
                    value={formik.values.password}
                    onChange={formik.handleChange("password")}
                    onFocus={handlePasswordFocus}
                    onBlur={handlePasswordBlur}
                    name="password"
                    spellCheck="false"
                    placeholder="Password"
                    className={`${styles.data_content_pass} ${styles._00x00_pwd}`}
                  />
                  {/* show and hide password svg */}
                  <span className={styles.absolute__span}>
                    <span onClick={() => setVisible(!visible)}>
                      {visible ? <HideSvg /> : <ShowSvg />}
                    </span>
                    {/* error svg  */}
                    {formik.touched.password && formik.errors.password ? (
                      <span
                        className={`${styles.__spanerror} ${styles.passwrd__error}`}
                        style={{ position: "relative" }}
                      >
                        {/* this is the password error msg */}
                        {showPasswordError &&
                          formik.touched.password &&
                          formik.errors.password ? (
                          <span className={styles.span__inperr}>
                            <span>{formik.errors.password}</span>
                          </span>
                        ) : null}
                        <ErrorSvg />
                      </span>
                    ) : null}
                    {/* error svg  */}
                  </span>
                </div>

                <div style={{ position: "relative" }}>
                  {/* confirm password input */}
                  <input
                    type={visibleOne ? "text" : "password"}
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange("confirmPassword")}
                    onFocus={handleCPasswordFocus}
                    onBlur={handleCPasswordBlur}
                    name="confirmPassword"
                    spellCheck="false"
                    placeholder="Confirm Password"
                    className={`${styles.data_content_pass} ${styles._00x00_pwd}`}
                  />
                  {/* show and hide password svg */}
                  <span className={styles.absolute__span}>
                    <span onClick={() => setVisibleOne(!visibleOne)}>
                      {visibleOne ? <HideSvg /> : <ShowSvg />}
                    </span>
                    {/* error svg  */}
                    {formik.touched.confirmPassword &&
                      formik.errors.confirmPassword ? (
                      <span
                        className={`${styles.__spanerror} ${styles.passwrd__error}`}
                        style={{ position: "relative" }}
                      >
                        {/* this is the confirm password  error msg */}
                        {showCPasswordError &&
                          formik.touched.confirmPassword &&
                          formik.errors.confirmPassword ? (
                          <span className={styles.span__inperr}>
                            <span>{formik.errors.confirmPassword}</span>
                          </span>
                        ) : null}
                        <ErrorSvg />
                      </span>
                    ) : null}
                  </span>
                </div>
              </div>

              <div>
                {storedData?.loading ? (
                  <button
                    className={styles.pass_data_bd}
                    type="submit"
                    style={{ position: "relative", color: "transparent", transition: "0.1s all" }} 
                    disabled
                  >
                    <>
                      <BtnloadSvg />
                    </>
                    Sign up
                  </button>
                ) : (
                  <button className={styles.pass_data_bd} type="submit" disabled={!formik.isValid || !formik.dirty}>
                    Sign up
                  </button>
                )}
              </div>

              <span className={styles.xkktndckl}>
                By signing up you agree to our{" "}
                <a
                  href="/terms-of-service"
                  target="_blank"
                  style={{ color: "#4d87de" }}
                >
                  Terms of Use
                </a>{" "}
                &{" "}
                <Link href="/cookie-policy" style={{ color: "#4d87de" }}>
                  Cookie Policy
                </Link>
                .
              </span>

              <div className={styles._oxr}>
                <div></div>
                <span className={styles.or}>OR</span>
              </div>

              <div className={styles._xpnds_oauths_div}>
                <div>
                  {/* continue with google */}
                  <button type="button"
                    className={`${styles.oauths_} ${styles.ggl_oauth}`}
                    onClick={() => signIn()}
                  >
                    <GoogleSvg />
                    Continue with Google
                  </button>
                </div>

                <div style={{display: "none"}}>
                  {/* continue with twitter */}
                  <button type="button"
                    className={`${styles.oauths_} ${styles.twtr_oauth}`}
                    onClick={() => signOut()}
                  >
                    <TwitterSvg />
                    Continue with Twitter
                  </button>
                </div>
              </div>

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
