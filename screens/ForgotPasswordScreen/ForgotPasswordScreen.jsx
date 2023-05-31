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
import { CautionSvg, ErrorSvg, BtnloadSvg } from "../../components";
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
  const email = Cookies.get("email"); 
  const formik = useFormik({
    initialValues: {
      email: "", // I removed the " email || " here because it was making the formik disabled malfunction.
    },
    onSubmit: (values) => {
      dispatch(forgotPasswordAction(values));
      Cookies.set("email", values.email);
    },
    validationSchema: forgotValidationSchema,
  });

  useEffect(() => {
    if (storeData?.message?.success) {
      router.push(Routes.CONFIRM_CHANGE_PASSWORD);
      return;
    }
  }, [router, storeData?.message?.success]);


  const [showEmailError, setShowEmailError] = useState(false);
  
  function handleEmailFocus() {
    setShowEmailError(true);
  }
  function handleEmailBlur() {
    setShowEmailError(false);
  }

  const [showError, setShowError] = useState(false);
  const [showMsg, setShowMsg] = useState(false);

  useEffect(() => {
    let timer;
    if (storeData.apiError) {
      setShowError(true);
      timer = setTimeout(() => {
        setShowError(false);
      }, 2500); // Display error message for 5 seconds
    }
    return () => {
      clearTimeout(timer);
    };
  }, [storeData.apiError]);

  useEffect(() => {
    let timer;
    if (storeData?.message?.message) {
      setShowMsg(true);
      timer = setTimeout(() => {
        setShowMsg(false);
      }, 2500); // Display error message for 5 seconds
    }
    return () => {
      clearTimeout(timer);
    };
  }, [storeData?.message?.message]);

  return (
    <AuthLayout>
      <main className={styles.__main} role="main">
        <form onSubmit={formik.handleSubmit}>
          <div className={styles._xparnts}>
            <div className={styles._xparnts_cvr}>
              <span className={styles.vdf_data}>Forgot Password?</span>

              {showError && (
                <div className={styles.byyy__err}>
                <div style={{ paddingTop: "0px" }}>
                  <span className={styles.error__msg__xyx}>
                    <span className={styles.error__txt__xyx}>
                      {storeData.apiError}
                    </span>
                  </span>
                </div>
                </div>
              )}

              {showMsg && (
                <div className={styles.byyy__err}>
                <div style={{ paddingTop: "0px" }}>
                  <span className={styles.error__msg__xyx}>
                    <span className={styles.error__txt__xyx}>
                      {storeData?.message?.message}
                    </span>
                  </span>
                </div>
                </div>
              )}

              <span className={styles._000xsry}>
                Enter the email connected to your account. We will send an email
                with a link to reset your password.
              </span>

              <div className={styles.xpnd_inpts} style={{ paddingTop: "0px" }}>
                <div style={{ position: "relative" }}>
                  <input
                    type="text"
                    value={formik.values.email}
                    onChange={formik.handleChange("email")}
                    onFocus={handleEmailFocus}
                    onBlur={handleEmailBlur}
                    name="email"
                    spellCheck="false"
                    autoComplete="off"
                    placeholder="Email"
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

                  {/* {formik.touched.email && formik.errors.email} */}
                  {/* error svg  */}
                </div>
              </div>
              <div>
                {storeData?.loading ? (
                  <button
                    className={`${styles.pass_data_bd} ${styles.new__change__btn}`}
                    type="submit"
                    style={{ position: "relative", color: "transparent", transition: "0.1s all" }}
                    disabled
                  >
                    <>
                      <BtnloadSvg />
                    </>
                    Continue
                  </button>
                ) : (
                  <button className={`${styles.pass_data_bd} ${styles.new__change__btn}`} type="submit" disabled={!formik.isValid || !formik.dirty}>
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
