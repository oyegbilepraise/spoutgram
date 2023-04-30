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
    .matches(
      /^.{8,}$/,
      "Password should be at least 8 characters"
    ),
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
    if (storeData.message.success) {
      router.push(Routes.LOGIN);
    }
  }, [storeData.message.success]);

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
              <span className={styles.data_pwd_lock}>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.504 10.508V7.882c0-1.512.317-2.392 1.023-3.098.706-.707 1.586-1.024 3.097-1.024h.76c1.51 0 2.39.317 3.097 1.024.705.706 1.023 1.586 1.023 3.098v2.626h.374a1.566 1.566 0 0 1 1.5 1.625v6.5a1.566 1.566 0 0 1-1.5 1.625h-9.75a1.566 1.566 0 0 1-1.5-1.625v-6.5a1.566 1.566 0 0 1 1.5-1.625h.376zm1.5 0h6V7.882c0-.961-.202-1.522-.651-1.971-.45-.45-1.01-.652-1.971-.652h-.756c-.961 0-1.521.202-1.97.652-.45.45-.652 1.01-.652 1.971v2.626zm7.875 8.182a.066.066 0 0 1-.053.068H7.18a.066.066 0 0 1-.053-.068l.001-.028v-6.558l-.001-.029a.066.066 0 0 1 .053-.067h9.646a.066.066 0 0 1 .053.067v6.615z"
                  ></path>
                </svg>
              </span>
              <span className={styles.vdf_data}>Reset Password</span>

              <span className={styles._000xsry}>
                Enter password, and confirm it.
              </span>

              {storeData?.message && (
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
                      {storeData?.message.message}
                    </span>
                  </span>
                </div>
              )}
              {storeData?.apiError && (
                <div style={{ paddingTop: "5px" }}>
                  <span className={styles.error__msg__xyx}>
                    <CautionSvg/>
                    <span className={styles.error__txt__xyx}>
                      {storeData?.apiError}
                    </span>
                  </span>
                </div>
              )}
              <div className={styles.xpnd_inpts} style={{ paddingTop: "14px" }}>
                <div style={{ position: "relative" }}>
                  <input
                    type={visible ? "text" : "password"}
                    value={formik.values.password}
                    onChange={formik.handleChange("password")}
                    // onBlur={formik.handleBlur}
                    onFocus={handlePasswordFocus} onBlur={handlePasswordBlur}
                    name="password"
                    placeholder="Password"
                    spellcheck="false"
                    className={`${styles.data_content_pass} ${styles._00x00_pwd}`}
                  />
                  <span className={styles.absolute__span}>
                    <span onClick={() => setVisible(!visible)}>
                      {visible ? <HideSvg /> : <ShowSvg />}
                    </span>

                    {/* error svg  */}
                    {formik.touched.password && formik.errors.password ? (
                      <span className={`${styles.__spanerror} ${styles.passwrd__error}`} style={{position: "relative"}}>
                        {/* this is the password error msg */}
                        {showPasswordError && formik.touched.password && formik.errors.password
                            ? (<span className={styles.span__inperr}>
                              <span>{formik.errors.password}</span>
                            </span>)
                        : null}
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
                    onFocus={handleCPasswordFocus} onBlur={handleCPasswordBlur}
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    spellcheck="false"
                    className={`${styles.data_content_pass} ${styles._00x00_pwd}`}
                  />

                  <span className={styles.absolute__span}>
                    <span onClick={() => setVisibleOne(!visibleOne)}>
                      {visibleOne ? <HideSvg /> : <ShowSvg />}
                    </span>

                    {/* error svg  */}
                    {formik.touched.confirmPassword &&
                    formik.errors.confirmPassword ? (
                      <span className={`${styles.__spanerror} ${styles.passwrd__error}`} style={{position: "relative"}}>
                        {/* this is the confirm password  error msg */}
                        {showCPasswordError && formik.touched.confirmPassword && formik.errors.confirmPassword
                            ? (<span className={styles.span__inperr}>
                              <span>{formik.errors.confirmPassword}</span>
                            </span>)
                        : null}
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
                    style={{ position: "relative" }}
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
                    type="submit"
                  >
                    Reset
                  </button>
                )}

                {/* <button className={styles.pass_data_bd}>Reset Password</button> */}
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
