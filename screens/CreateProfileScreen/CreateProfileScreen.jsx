import "./createProfile.module.css";

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
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useState } from "react";
import { createProfileAction } from "@/redux/slices/userDetailSlice";

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
  const [values, setValues] = useState({
    name: "",
    username: "",
    dateOfBirth: "",
    location: "",
    bio: "",
    website: "",
    profilePhoto: "",
  });
  // const storeData = useSelector((store) => store?.auth);
  const { loading, appError, profile } = useSelector(
    (state) => state?.userDetails?.profileCreation
  );

  // // prompting user they are about to reload or leave the page
  // useEffect(() => {
  //   const handleBeforeUnload = (event) => {
  //     event.preventDefault();
  //     event.returnValue = "";
  //     return "Are you sure you want to refresh the page? All form input will be lost.";
  //   };
  //   window.addEventListener("beforeunload", handleBeforeUnload);
  //   return () => {
  //     window.removeEventListener("beforeunload", handleBeforeUnload);
  //   };
  // }, []);
  useEffect(() => {
    const savedData = Cookies.get("user-details");
    if (savedData) {
      setValues(JSON.parse(savedData));
    }
  }, []);
  // current component
  const current = useSelector((state) => state.userDetails.currentComponent);
  const handleSubmit = (e) => {
    e.preventDefault();
    values && dispatch(createProfileAction(values));
    console.log(values);
  };
  const handleDetailsInput = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    Cookies.set("user-details", JSON.stringify(values));
  };

  if (profile.updatedUser) {
    router.push("/");
  }
  if (appError) {
    console.log(appError);
  }
  return (
    <AuthLayout>
      <main className={styles.__main} role="main">
        <div className={styles._xparnts_y}>
          <div className={styles._xparnts_cvr}>
            {/* api messages  */}
            {loading && <p>Creating profile ...</p>}
            {appError && <p>{appError}</p>}
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
              style={{ paddingTop: "14px" }}
            >
              {/* Start Profile Component */}
              <form onSubmit={handleSubmit}>
                {/* first component */}

                {current === 1 && (
                  <StepOne
                    values={values}
                    setValues={setValues}
                    handleDetailsInput={handleDetailsInput}
                  />
                )}

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
              </form>
              {/* End User Profile Component */}
            </div>
          </div>
        </div>
      </main>
    </AuthLayout>
  );
};

export default CreateProfileScreen;
