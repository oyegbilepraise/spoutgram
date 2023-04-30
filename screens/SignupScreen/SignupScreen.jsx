import { useRouter } from "next/router"
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import {
  generateEmailVerificationAction,
  registerUserAction
} from "@/redux/slices/authSlice/authSlice"
import { AuthLayout } from '@/layout'
import {useState} from 'react'
import { HideSvg, ShowSvg, GoogleSvg, TwitterSvg, AppleSvg, CautionSvg, ErrorSvg, BtnloadSvg } from '../../components';
import * as Yup from 'yup'
import Link from "next/link"
import styles from '@/layout/AuthLayout/AuthLayout.module.css'
import axios from "axios"
import { from } from "form-data"

const signupValidationSchema = Yup.object().shape({ 
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Please enter your email address."),
  password: Yup.string()
    .required("Please enter your password")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+={}[\]|\\:;"'<,>.?/])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
  confirmPassword: Yup.string()
    .required('Please confirm your password')
    .oneOf([Yup.ref('password')], 'Password does not match')
})

const oauthEndpoint = "http://localhost:5050"
const SignUpScreen = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const storedData = useSelector((state) => state?.auth?.registerUser);


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
}

const handleTwitterLogin =async ()=>{
  try {
    window.open(
      `${oauthEndpoint}/api/v1/auth/twitter/callback`,
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

  if (
    storedData?.registered.success &&
    !storedData?.registered.isAccountVerified
  ) {
    dispatch(generateEmailVerificationAction());
    router.push("/verify");
  }

  const [password, setPassword] = useState("");

  const [visible, setVisible] = useState(false);
  const [visibleOne, setVisibleOne] = useState(false);

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

                <div>
                  {/* continue with apple */}
                  <button className={`${styles.oauths_} ${styles.appl_oauth}`}>
                    <AppleSvg />
                    Continue with Apple
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
                  <input
                    type="text"
                    value={formik.values.email}
                    onChange={formik.handleChange("email")}
                    onBlur={formik.handleBlur}
                    name="email"
                    placeholder="Email"
                    className={styles.data_content_pass}
                  />

                  {/* error svg */}
                  {formik.touched.email && formik.errors.email ? (
                    <span className={styles.__spanerror}>
                      <ErrorSvg />
                    </span>
                  ) : null}
                  {/* we need to let the user know what's truly wrong I don't think the X is enough but you can remove this if you see it somehow  */}
                  {/* {formik.touched.email && formik.errors.email
                    ? formik.errors.email
                    : null} */}
                  {/* error svg  */}
                </div>

                <div style={{ position: "relative" }}>
                  <input
                    type={visible ? "text" : "password"}
                    value={formik.values.password}
                    onChange={formik.handleChange("password")}
                    onBlur={formik.handleBlur}
                    name="password"
                    placeholder="Password"
                    className={`${styles.data_content_pass} ${styles._00x00_pwd}`}
                  />

                  <span className={styles.absolute__span}>
                    <span onClick={() => setVisible(!visible)}>
                      {visible ? <HideSvg /> : <ShowSvg />}
                    </span>

                    {/* error svg  */}
                    {formik.touched.password && formik.errors.password ? (
                      <span
                        className={`${styles.__spanerror} ${styles.passwrd__error}`}
                      >
                        <ErrorSvg />
                      </span>
                    ) : null}
                    {/* error svg  */}
                  </span>
                  {/* we need to let the user know what's truly wrong I don't think the X is enough but you can remove this if you see it somehow  */}
                  {/* {formik.touched.password && formik.errors.password
                    ? formik.errors.password
                    : null} */}
                </div>
                <div style={{ position: "relative" }}>
                  <input
                    type={visibleOne ? "text" : "password"}
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange("confirmPassword")}
                    onBlur={formik.handleBlur}
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    className={`${styles.data_content_pass} ${styles._00x00_pwd}`}
                  />

                  <span className={styles.absolute__span}>
                    <span onClick={() => setVisibleOne(!visibleOne)}>
                      {visibleOne ? <HideSvg /> : <ShowSvg />}
                    </span>

                    {/* error svg  */}
                    {formik.touched.confirmPassword &&
                    formik.errors.confirmPassword ? (
                      <span
                        className={`${styles.__spanerror} ${styles.passwrd__error}`}
                      >
                        <ErrorSvg />
                      </span>
                    ) : null}
                    {/* we need to let the user know what's truly wrong I don't think the X is enough but you can remove this if you see it somehow  */}
                    {/* {formik.touched.confirmPassword &&
                    formik.errors.confirmPassword
                      ? formik.errors.confirmPassword
                      : null} */}
                    {/* error svg  */}
                  </span>
                </div>
              </div>

              <div>
                {storedData?.loading ? (
                  <button
                    className={styles.pass_data_bd}
                    type="submit"
                    style={{ position: "relative" }}
                    disabled
                  >
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
                <a
                  href="/terms-of-service"
                  target="_blank"
                  style={{ color: "#54cfff" }}
                >
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
