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
  // const storeData = useSelector((store) => store?.auth);

  const formik = useFormik({
    onSubmit: (values) => {
      console.log(values);
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

  return (
    <AuthLayout>
      <main className={styles.__main} role="main">
        <div className={styles._xparnts_y}>
          <div className={styles._xparnts_cvr}>
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
              {/* <form> */}
                {/* first component */}
                {current === 1 && <StepOne />}

                {/* second component */}
                {current === 2 && <StepTwo />}

                {/* third component */}
                {current === 3 && <StepThree />}
              {/* </form> */}
              {/* End User Profile Component */}
            </div>
          </div>
        </div>
      </main>
    </AuthLayout>
  );
};

export default CreateProfileScreen;
