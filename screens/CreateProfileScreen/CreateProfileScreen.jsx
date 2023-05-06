import "./createProfile.module.css";
import Image from "next/image";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Select from "react-select";
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
import { useEffect } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useState } from "react";
import { createProfileAction } from "@/redux/slices/userDetailSlice";
import Routes from "@/utils/routes";
// import Avatar from "react-avatar-edit";

// createProfileValidationSchema
const createProfileValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required"),
    // .matches(/^\d{6}$/, "Invalid code format"),
  username: Yup.string()
    .required("Username is required"),
    // .matches(/^\d{6}$/, "Invalid code format"),  
  dateOfBirth: Yup.string()
    .required("Date of Birth is required") 
    // .matches(/^\d{6}$/, "Invalid code format"),  
});


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
      profilePhoto: "",
    },
    onSubmit: (values) => {
      values && dispatch(createProfileAction(values));
    },
    validationSchema: createProfileValidationSchema,
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

  // defining values
  const [names, setNames] = useState({
    name: "",
    username: "",
  });
  // sending the data to redux
  // get the data from redux and show to the user
  // storing the current data into state before sending to create profile

  // const userDetails = useSelector((state) => state.userDetails.userProfile);
  // const handleNext = () => {
  //   dispatch(nextComponent(3));
  // };

  
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


  const [showNameError, setShowNameError] = useState(false);
  const [showUnameError, setShowUnameError] = useState(false);
  const [showDobError, setShowDobError] = useState(false);

  function handleNameFocus() {
    setShowNameError(true);
  }
  function handleNameBlur() {
    setShowNameError(false);
  }

  function handleUnameFocus() {
    setShowUnameError(true);
  }
  function handleUnameBlur() {
    setShowUnameError(false);
  }

  function handleDobFocus() {
    setShowDobError(true);
  }
  function handleDobBlur() {
    setShowDobError(false);
  }
  

  return (
    <AuthLayout>
      <main className={styles.__main} role="main">
        <div className={styles._xparnts}>
          <div className={styles._xparnts_cvr}>
            {/* api messages  */}
            {/* {loading && <p>Creating profile ...</p>} */}
            {/* {appError && <p>{appError}</p>} */}
            {profile?.message && <p>{profile?.message}</p>}
            {/* {profile.updatedUser && <p>profile created successfully</p>} */}
            {/* api messages  */}

            <span className={styles.vdf_data}>
              Create your profile
            </span>


            {/* this is the form that would proccess all the users data for create-profile */}
            <form onSubmit={formik.handleSubmit}>
              {/* upload profile pic */}
              {/* <input type="file" name="" onChange={getFile} accept="img" />
              <img src={file} style={{border: "1px solid black", borderRadius: "8px", width: "100px", height:"100px"}}/> */}


              <div className={styles.image__wrapper__xx}>

                <div
                    style={{
                      textAlign: "center", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "100%",
                    }}
                  >
                  <svg className={styles.xyxy__svgg__upld} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" >
                    <path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z"></path>
                  </svg>
                  <span style={{ marginTop: "0px" }} className={styles._00sxtry}>
                    Profile Picture
                  </span>
                  {/* Upload Picture */}
                </div>
                <span style={{position: "absolute", right: "0px", bottom: "3px"}} >
                  <button type="button"
                    style={{width: "43px", cursor: "pointer", height: "43px",borderRadius: "50%", boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;", background: "white", position: "relative"}}>
                    <svg style={{width: "19px", height: "19px", fill: "rgb(150, 150, 150)",  boxSizing: "content-box", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21 15V18H24V20H21V23H19V20H16V18H19V15H21ZM21.0082 3C21.556 3 22 3.44495 22 3.9934V13H20V5H4V18.999L14 9L17 12V14.829L14 11.8284L6.827 19H14V21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082ZM8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7Z"></path></svg>
                  </button>
                </span>
              </div>


              {/*  */}
              {appError && (
                <div style={{ paddingTop: "5px", paddingBottom: "14px" }}>
                  <span className={styles.error__msg__xyx}>
                    <CautionSvg />
                    <span className={styles.error__txt__xyx}>
                      {appError}
                    </span>
                  </span>
                </div>
              )}
              {/*  */}

              {/*  */}
              {profile.updatedUser && (
                <div style={{ paddingTop: "5px", paddingBottom: "14px" }}>
                  <span className={styles.error__msg__xyx}>
                    <svg className={styles.error__inval} width={17} height={17} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" >
                      <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z"></path>
                    </svg>
                    <span className={styles.error__txt__xyx}>
                      Profile Created!
                    </span>
                  </span>
                </div>
              )}
              {/*  */}

              {/* this is the name */}
              <div className={styles.ibistro__xyz__one}>
                <div style={{ position: "relative" }}>
                  <input type="text" placeholder="Name" maxlength="40" className={styles.data_content_pass} autoComplete="off"
                  name="name" value={formik.values.name} onChange={formik.handleChange("name")} onFocus={handleNameFocus}
                  onBlur={handleNameBlur}/>
                  <span className={styles.absolute__span}>




                  {formik.touched.name && formik.errors.name ? (
                      <span
                        className={`${styles.__spanerror} ${styles.passwrd__error}`}
                        style={{ position: "relative" }}
                      >
                        {/* this is the password error msg */}
                        {showNameError && formik.touched.name &&
                        formik.errors.name ? (
                          <span className={styles.span__inperr}>
                            <span>{formik.errors.name}</span>
                          </span>
                        ) : null}
                        <ErrorSvg />
                      </span>
                    ) : null }
                    {/*  */}

                    {/* <span>
                      <svg className={styles.error______svg} style={{ fill: "var(--brand-color)" }} width={17} height={17} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" >
                        <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z"></path>
                      </svg>
                    </span>
                    <span className={`${styles.__spanerror} ${styles.passwrd__error}`} >
                      <ErrorSvg />
                    </span> */}
                  </span>
                </div>
              </div>
              {/* this is the name */}

              {/* this is the username */}
              <div className={styles.ibistro__xyz__one}>
                <div style={{ position: "relative" }}>
                  <input type="text" maxlength="15" placeholder="Username" className={styles.data_content_pass} name="username" autoComplete="off"
                  spellCheck="false" value={formik.values.username} onChange={formik.handleChange("username")} onFocus={handleUnameFocus}
                  onBlur={handleUnameBlur} />
                  <span className={styles.absolute__span}>



                    {formik.touched.username && formik.errors.username ? (
                      <span
                        className={`${styles.__spanerror} ${styles.passwrd__error}`}
                        style={{ position: "relative" }}
                      >
                        {/* this is the password error msg */}
                        {showUnameError && formik.touched.username &&
                        formik.errors.username ? (
                          <span className={styles.span__inperr}>
                            <span>{formik.errors.username}</span>
                          </span>
                        ) : null}
                        <ErrorSvg />
                      </span>
                    ) : null }
                    {/*  */}

                    {/* <span>
                      <svg className={styles.error______svg} style={{ fill: "var(--brand-color)" }} width={17} height={17} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" >
                        <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z"></path>
                      </svg>
                    </span>
                    <span className={`${styles.__spanerror} ${styles.passwrd__error}`} >
                      <ErrorSvg />
                    </span> */} 
                  </span>
                </div>
              </div>
              {/* this is the username */}

              {/* this is the date of birth */}
              <div className={styles.ibistro__xyz__one}>
                <div style={{ position: "relative" }}>
                  <input id="dob-input" type="date" autoComplete="off" name="dateOfBirth" placeholder="Date of Birth" className={styles.data_content_pass} value={formik.values.dateOfBirth} onChange={formik.handleChange("dateOfBirth")} onFocus={handleDobFocus}
                  onBlur={handleDobBlur}/>
                  <span className={styles.absolute__span}>

                    {formik.touched.dateOfBirth && formik.errors.dateOfBirth ? (
                      <span
                        className={`${styles.__spanerror} ${styles.passwrd__error}`}
                        style={{ position: "relative" }}
                      >
                        {/* this is the password error msg */}
                        {showDobError && formik.touched.dateOfBirth &&
                        formik.errors.dateOfBirth ? (
                          <span className={styles.span__inperr}>
                            <span>{formik.errors.dateOfBirth}</span>
                          </span>
                        ) : null}
                        <ErrorSvg />
                      </span>
                    ) : null }
                    {/*  */}

                    {/* <span>
                      <svg className={styles.error______svg} style={{ fill: "var(--brand-color)" }} width={17} height={17} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" >
                        <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z"></path>
                      </svg>
                    </span>
                    <span className={`${styles.__spanerror} ${styles.passwrd__error}`} >
                      <ErrorSvg />
                    </span> */}
                  </span>
                </div>
              </div>
              {/* this is the date of birth */}

              <div>
               <button  className={styles.pass_data_bd} type="submit">Create Profile</button>
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