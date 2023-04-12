import styles from "@/layout/AuthLayout/AuthLayout.module.css";
import {
  addDetailsToUserProfile,
  nextComponent,
} from "@/redux/slices/userDetailSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"; 

const StepTwo = () => {
  // storing the current data into state before sending to create profile
  const [bioTxtValue, setBioTxtValue] = useState("");
  const [userLocation, setUserLocation] = useState("");
  const [linkText, setLinkText] = useState("");
  const [dob, setDob] = useState("");

  //   Code to prevent user from typing at max text
  const [txtLeft, setTxtLeft] = useState(150);

  const handleBio = (e) => {
    if (e.target.value.length <= 150) {
      setBioTxtValue(e.target.value);
    }
  };

  //   function to handle user input when they copy a text and paste
  const handlePaste = (e) => {
    const pastedData = e.clipboardData.getData("text/plain");
    if (pastedData.length > 150) {
      e.preventDefault();
      const truncatedData = pastedData.substring(0, 150);
      const selectionStart = e.target.selectionStart;
      const selectionEnd = e.target.selectionEnd;
      const newValue =
        bioTxtValue.substring(0, selectionStart) +
        truncatedData +
        bioTxtValue.substring(selectionEnd);
      setBioTxtValue(newValue);
      e.target.setSelectionRange(
        selectionStart + truncatedData.length,
        selectionStart + truncatedData.length
      );
    }
  };

  //   count the input left
  useEffect(() => {
    setTxtLeft(150 - bioTxtValue.length);
  }, [bioTxtValue]);

  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.userDetails.userProfile);

  // get the data from redux and show to the user
  useEffect(() => {
    setDob(userDetails.dob);
    setUserLocation(userDetails.location);
    setLinkText(userDetails.link);
    setBioTxtValue(userDetails.bio);
  }, []);

  // sending the data to redux
  const handleNext = () => {
    dispatch(nextComponent(3));
    dispatch(
      addDetailsToUserProfile({
        dob,
        location: userLocation,
        link: linkText,
        bio: bioTxtValue,
      })
    );
  };

  return (
    <>
      <div id="react_wrapper_two" className={styles.react__wrapper__component}>
        <div className={styles.ibistro__xyz__one}>
          {/* Date of birth  */}
          <div style={{ position: "relative" }}>
            <input
              type="text"
              placeholder="Date of Birth"
              className={styles.data_content_pass}
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
            {/* show if user is 15 yrs or older. note: date formats MM/DD/YYYY */}
            <span>
              <svg
                className={styles.available}
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="#01A8EA"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </span>
            <span className={styles._0013_span}>
              {/* error message */}
              <svg
                className={styles.invalid_svg}
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="#01A8EA"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx={12} cy={12} r={10} />
                <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
              </svg>
              You must be 15 years or older!
              {/* error message */}
            </span>
          </div>

          {/* Location  */}
          <div style={{ position: "relative" }}>
            <input
              type="text"
              placeholder="Location"
              className={styles.data_content_pass}
              value={userLocation}
              onChange={(e) => setUserLocation(e.target.value)}
            />
            <span>
              <svg
                className={styles.available}
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="#808080"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
                <circle cx={12} cy={10} r={3} />
              </svg>
            </span>
          </div>

          {/* Website or link  */}
          <div style={{ position: "relative" }}>
            <input
              type="text"
              placeholder="Website or Bio link"
              className={styles.data_content_pass}
              value={linkText}
              onChange={(e) => setLinkText(e.target.value)}
            />
            <span>
              <svg
                className={styles.available}
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="#808080"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
              </svg>
            </span>
            <span className={styles._0013_span}>
              {/* error message */}
              <svg
                className={styles.invalid_svg}
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="#01A8EA"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx={12} cy={12} r={10} />
                <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
              </svg>
              Invalid url!
              {/* error message */}
            </span>
          </div>

          {/* Bio  */}
          <div style={{ marginBottom: 30, height: 100, position: "relative" }}>
            <textarea
              className={styles.user_bio_data}
              placeholder="Bio"
              value={bioTxtValue}
              onChange={handleBio}
              onPaste={handlePaste}
            />
            <span className={styles.count_bio_words}>
              <span className={styles.cbw_num}>{txtLeft}</span>
            </span>
          </div>
        </div>
      </div>

      {/* previous button  */}
      <div className={styles.btn_data_container}>
        <span className={styles.xspanfloat}>
          <div
            className={`${styles.submit_user_data} ${styles.upload_all_dt}`}
            onClick={() => dispatch(nextComponent(1))}
          >
            Prev
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

      {/* next button  */}
      {bioTxtValue !== "" &&
        dob !== "" &&
        userLocation !== "" &&
        linkText !== "" && (
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

export default StepTwo;
