import { useRouter } from "next/router";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import {
  forgotPasswordAction,
  registerUserAction,
} from "@/redux/slices/authSlice/authSlice"; //this registerUserAction should be replaced with the appropriate redux user action
import { useSelector } from "react-redux";
import { AuthLayout } from "@/layout";
import {
  EnvelopeSvg,
  ErrorSvg,
  ResendLdSvg, 
  BtnloadSvg,
  CautionSvg,
} from "../../components";
import Link from "next/link";
import styles from "@/layout/AuthLayout/AuthLayout.module.css";
import * as Yup from "yup";
import Cookies from "js-cookie";
import { useEffect } from "react";

const confirmValidationSchema = Yup.object().shape({
  code: Yup.string()
    .required("Code is required")
    .matches(/^\d{6}$/, "Invalid code format"),
});

const ConfirmPasswordChangeScreen = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const storeData = useSelector((store) => store?.auth?.forgotPassword);
  const email = Cookies.get("email");
  const formik = useFormik({
    initialValues: {
      code: "",
    },
    onSubmit: (values) => {
      dispatch(registerUserAction(values)); //this registerUserAction should be replaced with the appropriate redux user action
    },
    validationSchema: confirmValidationSchema,
  });

  const resendEmail = () => {
    dispatch(forgotPasswordAction({ email }));
  };

  return (
    <AuthLayout>
      <main className={styles.__main} role="main">
        <form onSubmit={formik.handleSubmit}>
          <div className={styles._xparnts}>
            <div className={styles._xparnts_cvr}>
              <span className={styles.data_pwd_lock}>
                <svg
                  className={styles.email_svg}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6 4.5h12A2.5 2.5 0 0 1 20.5 7v.92l-7.919 4.4a1.25 1.25 0 0 1-1.189.013L3.5 8.179V7A2.5 2.5 0 0 1 6 4.5zM3.5 9.874V17A2.5 2.5 0 0 0 6 19.5h12a2.5 2.5 0 0 0 2.5-2.5V9.636l-7.19 3.994a2.75 2.75 0 0 1-2.617.03L3.5 9.874zM2 7a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V7z"
                  ></path>
                </svg>
              </span>
              <span className={styles.vdf_data}>Confirm it's you</span>

              <span className={styles._000xsry}>
                Check your email for a confirmation link to reset your password.
                If you can't find the email, check your spam.
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
                <div style={{ position: "relative", display: "none" }}>
                  <input
                    type="text"
                    value={formik.values.code}
                    onChange={formik.handleChange("code")}
                    onBlur={formik.handleBlur}
                    name="code"
                    autoComplete="off"
                    placeholder="Code"
                    className={styles.data_content_pass}
                  />

                  {/* error svg */}
                  {formik.touched.code && formik.errors.code ? (
                    <span className={styles.__spanerror}>
                      <ErrorSvg />
                    </span>
                  ) : null}
                  {/* error svg  */}
                </div>
              </div>

              <div>
                {storeData?.loading ? (
                  <button
                    className={`${styles.pass_data_bd} ${styles.new__change__btn}`}
                    type="submit"
                    style={{ position: "relative", display: "none" }}
                    disabled
                  >
                    <>
                      <BtnloadSvg />
                    </>
                    Confirm
                  </button>
                ) : (
                  <button
                    style={{ position: "relative", display: "none" }}
                    className={`${styles.pass_data_bd} ${styles.new__change__btn}`}
                    type="submit"
                  >
                    Confirm
                  </button>
                )}
              </div>
              <div style={{ marginTop: "-15px" }}>
                <span class={styles.sracde}>
                  Didn't recieve any email?{" "}
                  <span onClick={resendEmail} className={styles.sapn__rsbd}>
                    Resend email.
                  </span>
                </span>
              </div>
              <div>
                {/* verification code resent */}
                <span className={styles._00rsnd} style={{ display: "none" }}>
                  Code resent
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

                {/* verification code resent */}
              </div>
              <span className={styles.ouplskk}>
                <Link href="/signup">Back to Sign up</Link>
              </span>
            </div>
          </div>
        </form>
      </main>
    </AuthLayout>
  );
};

export default ConfirmPasswordChangeScreen;
