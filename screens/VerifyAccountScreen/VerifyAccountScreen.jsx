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
  CautionSvg,
} from "../../components";
import Link from "next/link";
import * as Yup from "yup";
import { useState } from "react";
import styles from "@/layout/AuthLayout/AuthLayout.module.css";

const verifyEmailSchema = Yup.object().shape({
  code: Yup.string()
    .required("Code is required")
    .matches(/^\d{6}$/, "Invalid code format"),
});

const VerifyAccountScreen = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  // get data from redux about verify email and verifyCode
  const { verifyUserEmail, verifyCode } = useSelector((state) => state?.auth);

  const formik = useFormik({
    initialValues: {
      code: "",
    },
    onSubmit: (values) => {
      const { code } = values;
      dispatch(verifyEmailAction(code));
    },
    validationSchema: verifyEmailSchema,
  });

  if (verifyUserEmail?.verified) {
    router.push("/create-profile");
  }

  const handleResendCode = () => {
    dispatch(generateEmailVerificationAction());
  };

  const [showCodeError, setShowCodeError] = useState(false);

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
              <span className={styles.data_pwd_lock}>
                <EnvelopeSvg />
              </span>
              <span className={styles.vdf_data}>Verify your account</span>

              <span className={styles._000xsry}>
                Enter the code sent to your email. If you can't find the email,
                check your spam.
              </span>

              {/* show this notify if the code was resent  */}
              {verifyUserEmail.codeSent && (
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
                      Verification email resent!
                    </span>
                  </span>
                </div>
              )}

              {/* show this error if the code is invalid  */}
              {verifyCode.appError && (
                <div style={{ paddingTop: "5px" }}>
                  <span className={styles.error__msg__xyx}>
                    <CautionSvg />
                    <span className={styles.error__txt__xyx}>
                      Invalid code!
                    </span>
                  </span>
                </div>
              )}

              <div className={styles.xpnd_inpts} style={{ paddingTop: "14px" }}>
                <div style={{ position: "relative" }}>
                  <input
                    type="text"
                    alue={formik.values.code}
                    onChange={formik.handleChange("code")}
                    // onBlur={formik.handleBlur}
                    onFocus={handleCodeFocus} onBlur={handleCodeBlur}
                    name="code"
                    autoComplete="off"
                    placeholder="Code"
                    className={styles.data_content_pass}
                  />

                  {/* error svg */}
                  {formik.touched.code && formik.errors.code ? (
                    <span className={styles.__spanerror}>
                      <div style={{position: "relative"}}>
                        {/* this is the email error msg */}
                        {showCodeError && formik.touched.code && formik.errors.code
                            ?
                            (
                            <span className={styles.span__inperr}>
                              <span>{formik.errors.code}</span>
                            </span>
                            )
                        : null}
                        <ErrorSvg />
                      </div>
                    </span>
                  ) : null}
                  {/* error svg  */}
                </div>
              </div>

              <div>
                <button
                  className={`${styles.pass_data_bd} ${styles.new__change__btn}`}
                  type="submit"
                >
                  Verify
                </button>
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

                {verifyUserEmail?.codeSent && (
                  <span className={styles._00rsnd}>
                    Code sent
                    <svg
                      className={styles.yxxz}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#01A8EA"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                )}
              </div>
              <span className={`${styles.ouplskk} ${styles.topme__}`}>
                <Link href="/signup">Back to Sign up</Link>
              </span>
            </div>
          </div>
        </form>
      </main>
    </AuthLayout>
  );
};

export default VerifyAccountScreen;
