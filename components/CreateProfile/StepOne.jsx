import styles from "@/layout/AuthLayout/AuthLayout.module.css";
import {
  addDetailsToUserProfile,
  nextComponent,
} from "@/redux/slices/userDetailSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
const StepOne = () => {
  // defined dob, but I didn't add other things
  const [dob, setDob] = useState("");

  //   values
  const [names, setNames] = useState({
    name: "",
    username: "",
  });

  // sending and getting value from/to redux
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.userDetails.userProfile);

  // get the data from redux and show to the user
  useEffect(() => {
    setNames({ name: userDetails.name, username: userDetails.username });
    setDob(userDetails.dob);
  }, []);

  // NOTE:
  // in this functions below you can test for error in the username and name input before user click next
  //   updating the state as user input values for both name and username
  const handleNamesInput = (e) => {
    setNames((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // sending the data to redux
  const handleNext = () => {
    dispatch(nextComponent(2));
    dispatch(
      addDetailsToUserProfile({
        name: names.name,
        username: names.username,
        dob,
      })
    );
  };

  return (
    <>
      <div id="react_wrapper_one" className={styles.react__wrapper__component}>
        {/* this is the name */}
        <div className={styles.ibistro__xyz__one}>
          <div style={{ position: "relative" }}>
            <input
              type="text"
              placeholder="Name"
              className={styles.data_content_pass}
              name="name"
              value={names.name}
              onChange={handleNamesInput}
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
              value={names.username}
              onChange={handleNamesInput}
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

        {/* this is the date of birth */}
        <div className={styles.ibistro__xyz__one}>
          <div style={{ position: "relative" }}>
            <input
              type="text"
              placeholder="Date of Birth"
              className={styles.data_content_pass}
              value={dob}
              onChange={(e) => setDob(e.target.value)}
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
      </div>

      <div>
        <button className={styles.pass_data_bd} onClick={handleNext}>
          Next
        </button>
      </div>
    </>
  );
};

export default StepOne;
