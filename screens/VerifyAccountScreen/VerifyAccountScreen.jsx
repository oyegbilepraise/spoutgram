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
  CautionSvg, BtnloadSvg,
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

  return (
    <AuthLayout>
      <main className={styles.__main} role="main">
        <form onSubmit={formik.handleSubmit}>
          <div className={styles._xparnts}>
            <div className={styles._xparnts_cvr}>
              <span className={styles.vdf_data}>Verify your account</span>

              <span className={styles._000xsry}>
                Enter the code sent to your email. If you can't find the email,
                check your spam.
              </span>

              {/* show this notify if the code was resent  */}
              {verifyUserEmail.codeSent && (
                <div className={styles.byyy__err}>
                <div style={{ paddingTop: "0px" }}>
                  <span className={styles.error__msg__xyx}>
                    <svg
                      className={styles.error__inval}
                      width={17}
                      height={17}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z"></path>
                    </svg>
                    <span className={styles.error__txt__xyx}>
                      {verifyUserEmail?.codeSent?.message}
                    </span>
                  </span>
                </div>
                </div>
              )}

              {/* show this error if the code is invalid  */}
              {verifyCode.appError && (
                <div className={styles.byyy__err}>
                <div style={{ paddingTop: "5px" }}>
                  <span className={styles.error__msg__xyx}>
                    <CautionSvg />
                    <span className={styles.error__txt__xyx}>
                      {verifyCode.appError}
                    </span>
                  </span>
                </div>
                </div>
              )}

              {/* VERIFICATION CODE RESENT SUCCESSFUL  */}
              {/* {verifyCode.appError && ( */}
                {/* <div className={styles.byyy__err}>
                <div style={{ paddingTop: "5px" }}>
                  <span className={styles.error__msg__xyx}>
                    <svg
                      className={styles.error__inval}
                      width={17}
                      height={17}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      >
                      <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z"></path>
                    </svg>
                    <span className={styles.error__txt__xyx}>
                      Verification code resent!
                    </span>
                  </span>
                </div>
                </div> */}
              {/* )} */}

              <div className={styles.xpnd_inpts} style={{ paddingTop: "14px" }}>
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

{/* <BtnloadSvg /> */} <ResendLdSvg />

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
              <div>
                {/* <button className="pass-data-bd overrd-pass-dbd" onClick={handleResendCode}>Resend code</button> */}
              </div>
              <div>
                {/* verification code resent */}
                {verifyUserEmail?.loading && (
                  <span className={`${styles.sending_code} ${styles._00rsnd}`}>
                    <>
                      <ResendLdSvg />
                    </>
                  </span>
                )}

                {verifyCode?.user?.success && (
                  <div className={styles.byyy__err}>
                  <div style={{ paddingTop: "0px" }}>
                    <span className={styles.error__msg__xyx}>
                      <svg
                        className={styles.error__inval}
                        width={17}
                        height={17}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z"></path>
                      </svg>
                      <span className={styles.error__txt__xyx}>
                        Verification Successful!
                      </span>
                    </span>
                  </div>
                  </div>
                )}
              </div>
              <span className={styles.ouplskk}>
                {/* <Link href="/signup">Back to Sign up</Link> */}
              </span>
            </div>
          </div>
        </form>
      </main>
    </AuthLayout>
  );
};

export default VerifyAccountScreen;
