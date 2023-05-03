import "./createProfile.module.css";
import Image from "next/image";

// Formik
import { useFormik } from "formik";
import * as Yup from "yup";

// Redux.
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import Select from "react-select";

// styles
import styles from "@/layout/AuthLayout/AuthLayout.module.css";

// Components
// import { BasicProfileInfo, MoreProfileInfo, ProfileInfo } from "@/components";
import {
  HideSvg,
  ShowSvg,
  GoogleSvg,
  TwitterSvg,
  AppleSvg,
  CautionSvg,
  ErrorSvg,
  BtnloadSvg,
} from "../../components";
import { AuthLayout } from "@/layout";
import StepOne from "@/components/CreateProfile/StepOne";
import { useEffect } from "react";
import StepTwo from "@/components/CreateProfile/StepTwo";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useState } from "react";
import { createProfileAction } from "@/redux/slices/userDetailSlice";
import Routes from "@/utils/routes";

// Yup ValidationSchema.
// const createProfileValidationSchema = Yup.object().shape({
//   status: Yup.object().required("Select a profile status"),
// });

// code to fix self error for server side rendring
const StepThree = dynamic(
  () => import("@/components/CreateProfile/StepThree"),
  {
    ssr: false,
  }
);

const CreateProfileScreen = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  //get profile creation details from store
  const { loading, appError, profile } = useSelector(
    (state) => state?.userDetails?.profileCreation
  );

  const formik = useFormik({
    initialValues: {
      name: "",
      username: "",
      dateOfBirth: "",
      location: "",
      bio: "",
      website: "",
      profilePhoto: "",
    },
    onSubmit: (values) => {
      values && dispatch(createProfileAction(values));
    },
    // validationSchema: createProfileValidationSchema,
  });

  // prompting user they are about to reload or leave the page
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = "";
      return "Are you sure you want to refresh the page? All form input will be lost.";
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  // current component
  const current = useSelector((state) => state.userDetails.currentComponent);

  // sending the data to redux
  // get the data from redux and show to the user
  // storing the current data into state before sending to create profile

  const userDetails = useSelector((state) => state.userDetails.userProfile);
  const handleNext = () => {
    dispatch(nextComponent(3));
  };

  const [file, setFile] = useState();

  function getFile(event) {
    setFile(URL.createObjectURL(event.target.files[0]));
  }

  useEffect(() => {
    if (profile.updatedUser) {
      if (!profile?.updatedUser?.isAccountVerified) {
        router.push(Routes.VERIFY);
        return;
      } else {
        router.push(Routes.HOME);
        return;
      }
    }
  }, [profile.updatedUser, router]);
  return (
    <AuthLayout>
      <main className={styles.__main} role="main">
        <div className={styles._xparnts_y}>
          <div className={styles._xparnts_cvr}>
            {/* api messages  */}
            {loading && <p>Creating profile ...</p>}
            {appError && <p>{appError}</p>}
            {profile?.message && <p>{profile?.message}</p>}
            {profile.updatedUser && <p>profile created successfully</p>}
            {/* api messages  */}

            {current === 1 && (
              <>
                <span className={styles.data_pwd_lock}>
                  <svg
                    fill="none"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g
                      stroke="#292d32"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    >
                      <path d="m12.1601 10.87c-.1-.01-.22-.01-.33 0-2.38004-.08-4.27004-2.03-4.27004-4.43 0-2.45 1.98-4.44 4.44004-4.44 2.45 0 4.44 1.99 4.44 4.44-.01 2.4-1.9 4.35-4.28 4.43z" />
                      <path d="m7.15997 14.56c-2.42 1.62-2.42 4.26 0 5.87 2.75 1.84 7.26003 1.84 10.01003 0 2.42-1.62 2.42-4.26 0-5.87-2.74-1.83-7.25003-1.83-10.01003 0z" />
                    </g>
                  </svg>
                </span>
                <span className={styles.vdf_data}>
                  Lets create your profile
                </span>

                <span className={styles._000xsry}>
                  Create your profile in just three steps!
                </span>
              </>
            )}
            {current === 2 && (
              <>
                <span className={styles.data_pwd_lock}>
                  <svg
                    fill="none"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g
                      stroke="#292d32"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    >
                      <path d="m12.1601 10.87c-.1-.01-.22-.01-.33 0-2.38004-.08-4.27004-2.03-4.27004-4.43 0-2.45 1.98-4.44 4.44004-4.44 2.45 0 4.44 1.99 4.44 4.44-.01 2.4-1.9 4.35-4.28 4.43z" />
                      <path d="m7.15997 14.56c-2.42 1.62-2.42 4.26 0 5.87 2.75 1.84 7.26003 1.84 10.01003 0 2.42-1.62 2.42-4.26 0-5.87-2.74-1.83-7.25003-1.83-10.01003 0z" />
                    </g>
                  </svg>
                </span>
                <span className={styles.vdf_data}>
                  Lets create your profile
                </span>

                <span className={styles._000xsry}>Only bio is required.</span>
              </>
            )}
            {current === 3 && (
              <>
                <span className={styles.vdf_data}>
                  Add your profile picture
                </span>

                <span className={styles._000xsry}>
                  Choose your profile photo.
                </span>
              </>
            )}
            <span className={styles.xsteps_count}>
              {current} of <span className={styles.xs_cnt}>3</span>
            </span>
            <div
              className={styles.xpnd_inpts_new}
              style={{ paddingTop: "14px", display: "none" }}
            >
              {/* Start Profile Component */}
              {/* <form> */}
              {/* first component */}
              {current === 1 && <StepOne />}

              {/* second component */}
              {current === 2 && <StepTwo />}

              {/* second component */}
              {current === 2 && (
                <StepTwo
                  values={values}
                  handleDetailsInput={handleDetailsInput}
                />
              )}

              {/* third component */}
              {current === 3 && (
                <StepThree
                  values={values}
                  handleDetailsInput={handleDetailsInput}
                />
              )}
              {/* </form> */}

              {/* End User Profile Component */}
            </div>

            {/* this is the form that would proccess all the users data for create-profile */}
            <form onSubmit={formik.handleSubmit}>
              {/* upload profile pic */}
              <input type="file" name="" onChange={getFile} accept="img" />
              <img
                src={file}
                style={{
                  border: "1px solid black",
                  borderRadius: "8px",
                  width: "100px",
                  height: "100px",
                }}
              />

              {/* this is the name */}
              <div className={styles.ibistro__xyz__one}>
                <div style={{ position: "relative" }}>
                  <input
                    type="text"
                    placeholder="Name"
                    className={styles.data_content_pass}
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange("name")}
                  />
                  <span className={styles.absolute__span}>
                    <span>
                      <svg
                        className={styles.error______svg}
                        style={{ fill: "var(--brand-color)" }}
                        width={17}
                        height={17}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z"></path>
                      </svg>
                    </span>

                    <span
                      className={`${styles.__spanerror} ${styles.passwrd__error}`}
                    >
                      <ErrorSvg />
                    </span>
                  </span>
                </div>
              </div>
              {/* this is the name */}

              {/* this is the username */}
              <div className={styles.ibistro__xyz__one}>
                <div style={{ position: "relative" }}>
                  <input
                    type="text"
                    placeholder="Username"
                    className={styles.data_content_pass}
                    name="username"
                    value={formik.values.username}
                    onChange={formik.handleChange("username")}
                  />
                  <span className={styles.absolute__span}>
                    <span>
                      <svg
                        className={styles.error______svg}
                        style={{ fill: "var(--brand-color)" }}
                        width={17}
                        height={17}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z"></path>
                      </svg>
                    </span>

                    <span
                      className={`${styles.__spanerror} ${styles.passwrd__error}`}
                    >
                      <ErrorSvg />
                    </span>
                  </span>
                </div>
              </div>
              {/* this is the username */}

              {/* this is the date of birth */}
              <div className={styles.ibistro__xyz__one}>
                <div style={{ position: "relative" }}>
                  <input
                    id="dob-input"
                    type="date"
                    name="dateOfBirth"
                    placeholder="Date of Birth"
                    className={styles.data_content_pass}
                    value={formik.values.dateOfBirth}
                    onChange={formik.handleChange("dateOfBirth")}
                    // onFocus={handleInputFocus}
                    // onBlur={handleInputBlur}
                  />
                  <span className={styles.absolute__span}>
                    <span>
                      <svg
                        className={styles.error______svg}
                        style={{ fill: "var(--brand-color)" }}
                        width={17}
                        height={17}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z"></path>
                      </svg>
                    </span>

                    <span
                      className={`${styles.__spanerror} ${styles.passwrd__error}`}
                    >
                      <ErrorSvg />
                    </span>
                  </span>
                </div>
              </div>
              {/* this is the date of birth */}

              <div className={styles.ibistro__xyz__one}>
                {/* Location  */}
                <div style={{ position: "relative" }}>
                  <input
                    type="text"
                    placeholder="Location"
                    name="location"
                    className={styles.data_content_pass}
                    value={formik.values.location}
                    onChange={formik.handleChange("location")}
                  />
                  <span
                    style={{ marginTop: "2px" }}
                    className={styles.absolute__span}
                  >
                    <span>
                      <svg
                        className={styles.svg__signup__ll}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 20.8995L16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995ZM12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 15C9.79086 15 8 13.2091 8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15Z" />
                      </svg>
                    </span>

                    <span>
                      <svg
                        className={styles.error______svg}
                        style={{
                          marginLeft: "10px",
                          fill: "var(--brand-color)",
                        }}
                        width={17}
                        height={17}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z"></path>
                      </svg>
                    </span>

                    <span
                      className={`${styles.__spanerror} ${styles.passwrd__error}`}
                    >
                      <ErrorSvg />
                    </span>
                  </span>
                </div>

                {/* Website or link  */}
                <div style={{ position: "relative" }}>
                  <input
                    type="text"
                    name="website"
                    placeholder="Website"
                    className={styles.data_content_pass}
                    value={formik.values.website}
                    onChange={formik.handleChange("website")}
                  />
                  <span
                    style={{ marginTop: "2px" }}
                    className={styles.absolute__span}
                  >
                    <span>
                      <svg
                        className={styles.svg__signup__ll}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18.3643 15.5353L16.95 14.1211L18.3643 12.7069C20.3169 10.7543 20.3169 7.58847 18.3643 5.63585C16.4116 3.68323 13.2458 3.68323 11.2932 5.63585L9.87898 7.05007L8.46477 5.63585L9.87898 4.22164C12.6127 1.48797 17.0448 1.48797 19.7785 4.22164C22.5121 6.95531 22.5121 11.3875 19.7785 14.1211L18.3643 15.5353ZM15.5358 18.3638L14.1216 19.778C11.388 22.5117 6.9558 22.5117 4.22213 19.778C1.48846 17.0443 1.48846 12.6122 4.22213 9.87849L5.63634 8.46428L7.05055 9.87849L5.63634 11.2927C3.68372 13.2453 3.68372 16.4112 5.63634 18.3638C7.58896 20.3164 10.7548 20.3164 12.7074 18.3638L14.1216 16.9496L15.5358 18.3638ZM14.8287 7.75717L16.2429 9.17139L9.17187 16.2425L7.75766 14.8282L14.8287 7.75717Z" />
                      </svg>
                    </span>

                    <span>
                      <svg
                        className={styles.error______svg}
                        style={{
                          marginLeft: "10px",
                          fill: "var(--brand-color)",
                        }}
                        width={17}
                        height={17}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z"></path>
                      </svg>
                    </span>

                    <span
                      className={`${styles.__spanerror} ${styles.passwrd__error}`}
                    >
                      <ErrorSvg />
                    </span>
                  </span>
                </div>

                {/* Bio  */}
                <div
                  style={{ marginBottom: 0, height: 100, position: "relative" }}
                >
                  <textarea
                    className={styles.user_bio_data}
                    placeholder="Bio"
                    name="bio"
                    value={formik.values.bio}
                    onChange={formik.handleChange("bio")}
                    // onPaste={handlePaste}
                  />
                  <span className={styles.count_bio_words}>
                    {/* <span className={styles.cbw_num}>{txtLeft}</span> */}
                  </span>
                </div>
              </div>

              <div>
                <button className={styles.pass_data_bd} type="submit">
                  Create Profile
                </button>
                {loading && <p>creating profile ...</p>}
              </div>
            </form>
            {/* this is the form that would proccess all the users data for create-profile */}
          </div>
        </div>
      </main>
    </AuthLayout>
  );
};

export default CreateProfileScreen;
