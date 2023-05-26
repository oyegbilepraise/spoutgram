import { useRouter } from "next/router";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import {
  changePasswordAction,
  registerUserAction,
} from "@/redux/slices/authSlice/authSlice"; //this registerUserAction should be replaced with the appropriate redux user action
import { useSelector } from "react-redux";
import { AuthLayout } from "@/layout";
import { useEffect, useState } from "react";
import {
  HideSvg,
  ShowSvg,
  ErrorSvg,
  BtnloadSvg,
  CautionSvg,
} from "../../components";
import * as Yup from "yup";
import Link from "next/link";
import styles from "@/layout/AuthLayout/AuthLayout.module.css";
import Routes from "@/utils/routes";

const changeValidationSchema = Yup.object().shape({
  password: Yup.string()
    .required("Password is required")
    .matches(/^.{8,}$/, "Password should be at least 8 characters"),
  confirmPassword: Yup.string()
    .required("Confirm Password is required")
    .oneOf([Yup.ref("password")], "Password does not match"),
});

const ChangePasswordScreen = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const storeData = useSelector((store) => store?.auth?.changePassword);
  const { token } = router.query;
  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values) => {
      const data = { token: token, password: values.password };
      dispatch(changePasswordAction(data));
    },
    validationSchema: changeValidationSchema,
  });
  useEffect(() => {
    if (storeData?.message?.success) {
      router.push(Routes.LOGIN);
    }
  }, [router, storeData?.message?.success]);

  const [password, setPassword] = useState("");

  const [visible, setVisible] = useState(false);
  const [visibleOne, setVisibleOne] = useState(false);

  const [showPasswordError, setShowPasswordError] = useState(false);
  const [showCPasswordError, setShowCPasswordError] = useState(false);

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
              <span className={styles.vdf_data}>Reset Password</span>

              {/* //this is the one with that issue... */}
              {storeData?.message?.message && (
                <div className={styles.byyy__err}>
                  <span className={styles.error__msg__xyx}>
                    <span className={styles.error__txt__xyx}>
                      {storeData?.message?.message}
                    </span>
                  </span>
                </div>
              )}

              {storeData?.apiError && (
                <div className={styles.byyy__err}>
                  <span className={styles.error__msg__xyx}>
                    <CautionSvg />
                    <span className={styles.error__txt__xyx}>
                      {storeData?.apiError}
                    </span>
                  </span>
                </div>
              )}

              <span className={styles._000xsry}>
                Enter password, and confirm it.
              </span>

              <div className={styles.xpnd_inpts} style={{ paddingTop: "0px" }}>
                <div style={{ position: "relative" }}>
                  <input
                    type={visible ? "text" : "password"}
                    value={formik.values.password}
                    onChange={formik.handleChange("password")}
                    // onBlur={formik.handleBlur}
                    onFocus={handlePasswordFocus}
                    onBlur={handlePasswordBlur}
                    name="password"
                    placeholder="Password"
                    spellcheck="false"
                    autoComplete="new-password"
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
                  <input
                    type={visibleOne ? "text" : "password"}
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange("confirmPassword")}
                    // onBlur={formik.handleBlur}
                    onFocus={handleCPasswordFocus}
                    onBlur={handleCPasswordBlur}
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    spellcheck="false"
                    autoComplete="new-password"
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
                    {/* error svg  */}
                  </span>
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
                    Reset
                  </button>
                ) : (
                  <button
                    className={`${styles.pass_data_bd} ${styles.new__change__btn}`}
                    type="submit" disabled={!formik.isValid || !formik.dirty}
                  >
                    Reset
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

export default ChangePasswordScreen;
