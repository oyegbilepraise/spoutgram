import { useRouter } from "next/router";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  verifyEmailAction,
  generateEmailVerificationAction,
} from "@/redux/slices/authSlice/authSlice";
import { AuthLayout } from "@/layout";
import {
  EnvelopeSvg,
  ErrorSvg,
  ResendLdSvg,
  CautionSvg, BtnloadSvg, PageSpinner,
} from "../../components";
import Link from "next/link";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import styles from "@/layout/AuthLayout/AuthLayout.module.css";
import Routes from "@/utils/routes";

const verifyEmailSchema = Yup.object().shape({
  code: Yup.string()
    .required("Code is required")
    .matches(/^\d{6}$/, "Invalid code format"),
});

const VerifyAccountScreen = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  // get data from redux about verify email and verifyCode
  const { loading, verifyUserEmail, verifyCode } = useSelector((state) => state?.auth);

  const formik = useFormik({
    initialValues: {
      code: "",
    },
    onSubmit: (values) => {
      dispatch(verifyEmailAction(values));
    },
    validationSchema: verifyEmailSchema,
  });
  useEffect(() => {
    if (verifyCode?.user?.success) {
      console.log({ verifyCode });
      router.push(Routes.CREATE_PROFILE);
    } else {
      setShowCodeError(true)
    }
  }, [router, verifyCode?.user]);
  // resend verification code function
  const handleResendCode = () => {
    dispatch(generateEmailVerificationAction());
  };
  // useEffect(() => {
  //   dispatch(generateEmailVerificationAction());
  // }, [dispatch]);

  const [showCodeError, setShowCodeError] = useState(true);

  function handleCodeFocus() {
    setShowCodeError(true);
  }
  function handleCodeBlur() {
    setShowCodeError(false);
  }


  const [showError, setShowError] = useState(false);

  const [showMsg, setShowMsg] = useState(false);

  const [showSucess, setShowSuccess] = useState(false);

  useEffect(() => {
    let timer;
    if (verifyCode.appError) {
      setShowError(true);
      timer = setTimeout(() => {
        setShowError(false);
      }, 2500); // Display error message for 5 seconds
    }
    return () => {
      clearTimeout(timer);
    };
  }, [verifyCode.appError]);

  useEffect(() => {
    let timer;
    if (verifyUserEmail.codeSent) {
      setShowMsg(true);
      timer = setTimeout(() => {
        setShowMsg(false);
      }, 2500); // Display error message for 5 seconds
    }
    return () => {
      clearTimeout(timer);
    };
  }, [verifyUserEmail.codeSent]);


  useEffect(() => {
    let timer;
    if (verifyCode?.user?.success) {
      setShowSuccess(true);
      timer = setTimeout(() => {
        setShowSuccess(false);
      }, 2500); // Display error message for 5 seconds
    }
    return () => {
      clearTimeout(timer);
    };
  }, [verifyCode?.user?.success]);

  return (
    <AuthLayout>
      <main className={styles.__main} role="main">
        <form onSubmit={formik.handleSubmit}>
          <div className={styles._xparnts}>
            <div className={styles._xparnts_cvr}>
              <span className={styles.vdf_data}>Verify your account</span>

              {/* show this notify if the code was resent  */}
              {showMsg && (
                <div className={styles.byyy__err}>
                  <span className={styles.error__msg__xyx}>
                    <span className={styles.error__txt__xyx}>
                      {verifyUserEmail?.codeSent?.message}
                    </span>
                  </span>
                </div>
              )}

              {/* show this error if the code is invalid  */}
              {showError && (
                <div className={styles.byyy__err}>
                  <span className={styles.error__msg__xyx}>
                    <span className={styles.error__txt__xyx}>
                      {verifyCode.appError}
                    </span>
                  </span>
                </div>
              )}

              {/* show this error if the code is verified successful  */}
              {showSucess && (
                <div className={styles.byyy__err}>
                  <span className={styles.error__msg__xyx}>
                    <span className={styles.error__txt__xyx}>
                      Verification Successful!
                    </span>
                  </span>
                </div>
              )}


              <span className={styles._000xsry}>
                Enter the code sent to your email. If you can't find the email,
                check your spam.
              </span>

              <div className={styles.xpnd_inpts} style={{ paddingTop: "0px" }}>
                <div style={{ position: "relative" }}>
                  <input
                    type="text"
                    value={formik.values.code}
                    onChange={formik.handleChange("code")}
                    // onBlur={formik.handleBlur}
                    onFocus={handleCodeFocus}
                    onBlur={handleCodeBlur}
                    name="code"
                    maxlength="6"
                    autoComplete="off"
                    placeholder="Code" 
                    pattern="[0-9]{1,6}"
                    className={`${styles.data_content_pass} ${styles.data_content_inpcode}`}
                  />

                  {verifyUserEmail?.loading && (
                    <div style={{width: "max-content", position: "absolute", right: "4px", top: "-0.5px"}}>
                      <PageSpinner />
                    </div>
                  )}

                  {/* error svg */}
                  {formik.touched.code && formik.errors.code ? (
                    <span className={styles.__spanerror}>
                      <div style={{ position: "relative" }}>
                        {/* this is the email error msg */}
                        {showCodeError &&
                          formik.touched.code &&
                          formik.errors.code ? (
                          <span className={styles.span__inperr}>
                            <span>{formik.errors.code}</span>
                          </span>
                        ) : null}
                        <ErrorSvg />
                      </div>
                    </span>
                  ) : null}
                  {/* error svg  */}
                </div>
              </div>

              <div>

              {loading ? (
                //loading btn
                  <button
                  className={`${styles.pass_data_bd} ${styles.new__change__btn}`}
                    type="submit"
                    style={{ position: "relative", color: "transparent", transition: "0.1s all" }} 
                    disabled
                  >
                    <>
                      <BtnloadSvg />
                    </>
                    Verify
                  </button>
                ) : (
                  //main button
                  <button className={`${styles.pass_data_bd} ${styles.new__change__btn}`} type="submit"  disabled={!formik.isValid || !formik.dirty}>
                    Verify
                  </button>
                )}
              </div>
              <div>
                <span class={styles.sracde}>
                  Didn't recieve any code?{" "}
                  <span
                    className={styles.sapn__rsbd}
                    onClick={handleResendCode}
                  >
                    Resend code.
                  </span>
                </span>
              </div>
            </div>
          </div>
        </form>
      </main>
    </AuthLayout>
  );
};

export default VerifyAccountScreen;
