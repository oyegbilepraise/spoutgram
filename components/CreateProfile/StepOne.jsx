import styles from "@/layout/AuthLayout/AuthLayout.module.css";
import {
  addDetailsToUserProfile,
  nextComponent,
} from "@/redux/slices/userDetailSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const StepOne = () => {
  // toggles
  const [status, setStatus] = useState(false);

  //   values
  const [statusValue, setStatusValue] = useState("");
  const [adult, setAdult] = useState(false);
  const [organizationValue, setOrganizationValue] = useState("");
  const [names, setNames] = useState({
    name: "",
    username: "",
  });

  // sending and getting value from/to redux
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.userDetails.userProfile);

  // get the data from redux and show to the user
  useEffect(() => {
    setStatusValue(userDetails.status);
    setAdult(userDetails.adult);
    setOrganizationValue(userDetails.organization);
    setNames({ name: userDetails.name, username: userDetails.username });

    userDetails.status !== "" && setStatus(true);
  }, []);

  // NOTE:
  // in this functions below you can test for error in the username and name input before user click next

  //   updating the state as user input values for both name and username
  const handleNamesInput = (e) => {
    setNames((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  //   updating status value
  const handleStatus = (statusValue) => {
    setStatusValue(statusValue);
  };

  //   updating organization value
  const handleOrganization = (organValue) => {
    setOrganizationValue(organValue);
  };

  // sending the data to redux
  const handleNext = () => {
    dispatch(nextComponent(2));
    dispatch(
      addDetailsToUserProfile({
        name: names.name,
        username: names.username,
        status: statusValue,
        organization: organizationValue === "" ? "none" : organizationValue,
        adult,
      })
    );
  };

  return (
    <>
      <div id="react_wrapper_one" className={styles.react__wrapper__component}>
        <div className={styles.ibistro__xyz}>
          <div>
            {/* name  */}
            <input
              type="text"
              placeholder="Name"
              className={styles.data_content_pass}
              name="name"
              value={names.name}
              onChange={handleNamesInput}
            />
            <span className={styles._0013_span}>
              {/* error message */}
              <svg
                className={styles.invalid_svg}
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
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>
              </svg>
              Name is too short!
              {/* error message  */}
            </span>
          </div>
          <div style={{ position: "relative" }}>
            {/* username */}
            <input
              type="text"
              placeholder="Username"
              className={styles.data_content_pass}
              name="username"
              value={names.username}
              onChange={handleNamesInput}
            />

            {/* show is username is available */}
            <span>
              <svg
                className={styles.available}
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
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </span>
            {/* show is username is available */}

            <span className={styles._0013_span}>
              {/* error message */}
              <svg
                className={styles.invalid_svg}
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
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>
              </svg>
              Username is taken!
              {/* error message */}
            </span>
          </div>
        </div>
        <div>
          <div className={styles.select__all__component}>
            <div className={styles.dropdown_option}>
              {/* selected status */}
              <span onClick={() => setStatus((prev) => !prev)}>
                Select status
              </span>
              {/* error message */}
              <span>
                <svg
                  className={styles.no_options_alert}
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fe191d"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx={12} cy={12} r={10} />
                  <line x1={12} y1={16} x2={12} y2={12} />
                  <line x1={12} y1={8} x2="12.01" y2={8} />
                </svg>
              </span>
              {/* error message */}
            </div>
            {/* dropdown */}
            {status && (
              <div className={styles.dropdown}>
                {/* options */}
                <div onClick={() => handleStatus("creator")}>
                  <span
                    className={styles.select__data}
                    style={{
                      color: statusValue === "creator" && "#01A8EA",
                      // you can change the color here or in css
                    }}
                  >
                    Creator
                  </span>
                </div>
                <div onClick={() => handleStatus("organization")}>
                  <span
                    className={styles.select__data}
                    style={{
                      color: statusValue === "organization" && "#01A8EA",
                      // you can change the color here or in css
                    }}
                  >
                    Organization
                  </span>
                </div>
                <div onClick={() => handleStatus("none")}>
                  <span
                    className={styles.select__data}
                    style={{
                      color: statusValue === "none" && "#01A8EA",
                      // you can change the color here or in css
                    }}
                  >
                    None
                  </span>
                </div>
                {/* options */}
              </div>
            )}
          </div>

          {/* if user picks Creator as an option, show this */}
          {statusValue === "creator" && (
            <div>
              <span className={styles.span_checkb_data}>
                <input
                  type="checkbox"
                  name=""
                  id=""
                  checked={adult}
                  onChange={(e) =>
                    e.target.checked ? setAdult(true) : setAdult(false)
                  }
                />
                <span className={styles.span_x_xsd}>
                  Are your contents suitable for audience 18 and above?
                </span>
              </span>

              {/* if you ticks the checkbox, show this */}
              <span className={styles.alert_user_choice}>
                <svg
                  className={styles.invalid_svg_2}
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
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>
                </svg>
                Audience below 18 would not be allowed to see, or subscribe to
                your contents.
              </span>
            </div>
          )}

          {/* if user picks Organization, show this */}
          {statusValue === "organization" && (
            <div
              className={styles.select__all__component}
              style={{ marginTop: 10 }}
            >
              <div className={styles.dropdown_option}>
                {/* selected status */}
                <span onClick={() => setOrganization((prev) => !prev)}>
                  Organization category
                </span>
                {/* error message */}
                <span>
                  <svg
                    className={styles.no_options_alert}
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fe191d"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx={12} cy={12} r={10} />
                    <line x1={12} y1={16} x2={12} y2={12} />
                    <line x1={12} y1={8} x2="12.01" y2={8} />
                  </svg>
                </span>
                {/* error message */}
              </div>
              <div className={styles.dropdown}>
                {/* options */}
                <div onClick={() => handleOrganization("non-profit")}>
                  <span
                    className={styles.select__data}
                    style={{
                      color: organizationValue === "non-profit" && "#01A8EA",
                      // you can change the color here or in css
                    }}
                  >
                    Non-Profit
                  </span>
                </div>
                <div onClick={() => handleOrganization("technology")}>
                  <span
                    className={styles.select__data}
                    style={{
                      color: organizationValue === "technology" && "#01A8EA",
                    }}
                  >
                    Technology
                  </span>
                </div>
                <div onClick={() => handleOrganization("pharmaceuticals")}>
                  <span
                    className={styles.select__data}
                    style={{
                      color:
                        organizationValue === "pharmaceuticals" && "#01A8EA",
                    }}
                  >
                    Pharmaceuticals
                  </span>
                </div>
                <div onClick={() => handleOrganization("religious")}>
                  <span
                    className={styles.select__data}
                    style={{
                      color: organizationValue === "religious" && "#01A8EA",
                    }}
                  >
                    Religious
                  </span>
                </div>
                <div onClick={() => handleOrganization("other")}>
                  <span
                    className={styles.select__data}
                    style={{
                      color: organizationValue === "other" && "#01A8EA",
                    }}
                  >
                    Other
                  </span>
                </div>
                {/* options */}
              </div>
              {/* dropdown */}
            </div>
          )}

          {/* if user enters other ---- show this */}
          {organizationValue === "other" && (
            <div style={{ paddingTop: "7px" }}>
              <input
                type="text"
                placeholder="Other"
                className={styles.data_content_pass}
              />

              <span className={styles._0013_span}>
                {/* error message */}
                <svg
                  className={styles.invalid_svg}
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
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>
                </svg>
                This field is required!
                {/* error message */}
              </span>
            </div>
          )}
        </div>
      </div>

      {statusValue !== "" && names.username !== "" && names.name !== "" && (
        <div className={styles.btn_data_container}>
          <span className={styles.xspanfloat}>
            <div
              className={`${styles.submit_user_data} ${styles.upload_all_dt}`}
              onClick={handleNext}
            >
              Next
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
            </div>
          </span>
        </div>
      )}
    </>
  );
};

export default StepOne;
