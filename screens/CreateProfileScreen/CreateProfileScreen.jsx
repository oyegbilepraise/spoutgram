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
import { AuthLayout } from "@/layout";
import StepOne from "@/components/CreateProfile/StepOne";
import { useState } from "react";
import StepTwo from "@/components/CreateProfile/StepTwo";
import dynamic from "next/dynamic";

// Yup ValidationSchema.
const createProfileValidationSchema = Yup.object().shape({
  status: Yup.object().required("Select a profile status"),
});

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
    initialValues: {
      status: "",
    },
    onSubmit: (values) => {
      console.log("hi");
      console.log(values);
    },
    validationSchema: createProfileValidationSchema,
  });

  const userStatus = [
    {
      id: "creator",
      label: "Creator",
    },
    {
      id: "organization",
      label: "Organization",
    },
    {
      id: "none",
      label: "None",
    },
  ];

  const status = userStatus.map((s) => {
    return {
      label: s.label,
      value: s.id,
    };
  });

  const organizationCategory = [
    {
      id: "non-profit",
      label: "Nonprofit",
    },
    {
      id: "technology",
      label: "Technology",
    },
    {
      id: "pharmaceuticals",
      label: "Pharmaceuticals",
    },
    {
      id: "religious",
      label: "Religious",
    },
    {
      id: "other",
      label: "Other",
    },
  ];

  const organization = organizationCategory.map((org) => {
    return {
      value: org.id,
      label: org.label,
    };
  });

  // current component
  const current = useSelector((state) => state.userDetails.currentComponent);

  return (
    <AuthLayout>
      <main className={styles.__main} role="main">
        <div className={styles._xparnts_y}>
          <div className={styles._xparnts_cvr}>
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
            <span className={styles.vdf_data}>Lets create your profile</span>

            <span className={styles._000xsry}>
              Enter your Profile details. You can always change your profile
              information through settings, once your account is created.
            </span>

            {/* <!-- steps counter (1 of 3, 2 of 3 ...) --> */}
            <span className={styles.xsteps_count}>
              {current} of <span className={styles.xs_cnt}>3</span>Steps
            </span>

            <div
              className={styles.xpnd_inpts_new}
              style={{ paddingTop: "14px" }}
            >
              {/* Start Profile Component */}
              <form onSubmit={formik.handleSubmit}>
                {/* first component */}
                {current === 1 && <StepOne />}

                {/* second component */}
                {current === 2 && <StepTwo />}

                {/* third component */}
                {current === 3 && <StepThree />}

                {/* show this only when the user is in the third component  */}
                {current === 3 && (
                  <div className={styles.btn_data_container}>
                    <span className={styles.xspanfloat}>
                      <button
                        type="submit"
                        className={`${styles.submit_user_data} ${styles.upload_all_dt}`}
                      >
                        Create Profile
                        <svg
                          className={styles.arrow_next}
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#01A8EA"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h13M12 5l7 7-7 7" />
                        </svg>
                      </button>
                    </span>
                  </div>
                )}
              </form>

              {/* End User Profile Component */}

              {/* <BasicProfileInfo />
                <MoreProfileInfo /> */}
            </div>
          </div>
        </div>
      </main>
    </AuthLayout>
  );
};

export default CreateProfileScreen;
