import Link from "next/link";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import {useState, useEffect} from 'react'

import {
  forgotPasswordAction,
  registerUserAction,
} from "@/redux/slices/authSlice/authSlice"; //this registerUserAction should be replaced with the appropriate redux user action
import { useSelector } from "react-redux";
import {
  CautionSvg,
  ErrorSvg,
  BtnloadSvg,
} from "../../components";
import { AuthLayout } from "@/layout";
import styles from "@/layout/AuthLayout/AuthLayout.module.css";
import Cookies from "js-cookie";
import Routes from "@/utils/routes";

const forgotValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
});

const ForgotPasswordScreen = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const storeData = useSelector((store) => store?.auth?.forgotPassword);
  const [response, setResponse] = useState("");
  const email = Cookies.get("email");
  const formik = useFormik({
    initialValues: {
      email: email || "",
    },
    onSubmit: (values) => {
      setResponse("");
      dispatch(forgotPasswordAction(values));
      Cookies.set("email", values.email);
    },
    // validationSchema: forgotValidationSchema,
  });

  useEffect(() => {
    if (storeData.isEmailAvailable) {
      router.push(Routes.CONFIRM_CHANGE_PASSWORD);
      return;
    }
  }, [storeData.isEmailAvailable]);


  const [showEmailError, setShowEmailError] = useState(false);
  
  function handleEmailFocus() {
    setShowEmailError(true);
  }
  function handleEmailBlur() {
    setShowEmailError(false);
  }

  return (
    <AuthLayout>
      <main className={styles.__main} role="main">
        <form onSubmit={formik.handleSubmit}>
          <div className={styles._xparnts}>
            <div className={styles._xparnts_cvr}>
              <span className={styles.data_pwd_lock}>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.504 10.508V7.882c0-1.512.317-2.392 1.023-3.098.706-.707 1.586-1.024 3.097-1.024h.76c1.51 0 2.39.317 3.097 1.024.705.706 1.023 1.586 1.023 3.098v2.626h.374a1.566 1.566 0 0 1 1.5 1.625v6.5a1.566 1.566 0 0 1-1.5 1.625h-9.75a1.566 1.566 0 0 1-1.5-1.625v-6.5a1.566 1.566 0 0 1 1.5-1.625h.376zm1.5 0h6V7.882c0-.961-.202-1.522-.651-1.971-.45-.45-1.01-.652-1.971-.652h-.756c-.961 0-1.521.202-1.97.652-.45.45-.652 1.01-.652 1.971v2.626zm7.875 8.182a.066.066 0 0 1-.053.068H7.18a.066.066 0 0 1-.053-.068l.001-.028v-6.558l-.001-.029a.066.066 0 0 1 .053-.067h9.646a.066.066 0 0 1 .053.067v6.615z"
                  ></path>
                </svg>
              </span>
              <span className={styles.vdf_data}>Forgot Password?</span>

              <span className={styles._000xsry}>
                Enter the email connected to your account. We will send an email
                with a link to reset your password.
              </span>

              {storeData.apiError && (
                <div style={{ paddingTop: "5px" }}>
                  <span className={styles.error__msg__xyx}>
                    <CautionSvg />
                    <span className={styles.error__txt__xyx}>
                      {storeData.apiError}
                    </span>
                  </span>
                </div>
              )}
              {storeData.message.message && (
                <div style={{ paddingTop: "5px" }}>
                  <span className={styles.error__msg__xyx}>
                    <CautionSvg />
                    <span className={styles.error__txt__xyx}>
                      {storeData.message.message}
                    </span>
                  </span>
                </div>
              )}
              <div className={styles.xpnd_inpts} style={{ paddingTop: "14px" }}>
                <div style={{ position: "relative" }}>
                  <input
                    type="text"
                    value={formik.values.email}
                    onChange={formik.handleChange("email")}
                    onFocus={handleEmailFocus} 
                    onBlur={handleEmailBlur}
                    name="email"
                    placeholder="Email"
                    className={styles.data_content_pass}
                  />

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

                  {/* {formik.touched.email && formik.errors.email} */}
                  {/* error svg  */}
                </div>
              </div>
              <div>
                {storeData?.loading ? (
                  <button
                    className={`${styles.pass_data_bd} ${styles.new__change__btn}`}
                    type="submit"
                    style={{ position: "relative" }}
                    disabled
                  >
                    <>
                      <BtnloadSvg />
                    </>
                    Continue
                  </button>
                ) : (
                  <button
                    className={`${styles.pass_data_bd} ${styles.new__change__btn}`}
                    type="submit"
                  >
                    Continue
                  </button>
                )}
              </div>

              <span className={styles.ouplskk}>
                <Link href="/login">Back to Sign in</Link>
              </span>
            </div>
          </div>
        </form>
      </main>
    </AuthLayout>
  );
};

export default ForgotPasswordScreen;