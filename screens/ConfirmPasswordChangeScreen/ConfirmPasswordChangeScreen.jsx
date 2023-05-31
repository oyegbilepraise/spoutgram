import { useRouter } from "next/router";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import {useState} from 'react'
import {
  forgotPasswordAction,
  registerUserAction,
} from "@/redux/slices/authSlice/authSlice";
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
      dispatch(registerUserAction(values));
    },
    validationSchema: confirmValidationSchema,
  });

  const resendEmail = () => {
    dispatch(forgotPasswordAction({ email }));
  };


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
    if (storeData.message.message) {
      setShowMsg(true);
      timer = setTimeout(() => {
        setShowMsg(false);
      }, 2500); // Display error message for 5 seconds
    }
    return () => {
      clearTimeout(timer);
    };
  }, [storeData.message.message]);



  return (
    <AuthLayout>
      <main className={styles.__main} role="main">
        <form onSubmit={formik.handleSubmit}>
          <div className={styles._xparnts}>
            <div className={styles._xparnts_cvr}>

              <span className={styles.vdf_data}>Confirm it's you</span>

              {showError && (
                <div  className={styles.byyy__err}>
                  <span className={styles.error__msg__xyx}>
                    <span className={styles.error__txt__xyx}>
                      {storeData.apiError}
                    </span>
                  </span>
                </div>
              )}

              {showMsg && (
                <div className={styles.byyy__err}>
                  <span className={styles.error__msg__xyx}>
                    <span className={styles.error__txt__xyx}>
                      {storeData.message.message}
                    </span>
                  </span>
                </div>
              )}

              <span className={styles._000xsry}>
                Check your email for a confirmation link to reset your password.
                If you can't find the email, check your spam.
              </span>
              <div style={{ marginTop: "-5px" }}>
                <span class={styles.sracde}>
                  Didn't recieve any email?{" "}
                  <span onClick={resendEmail} className={styles.sapn__rsbd}>
                    Resend email.
                  </span>
                </span>
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
