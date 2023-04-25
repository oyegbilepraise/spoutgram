import styles from "@/layout/AuthLayout/AuthLayout.module.css";
import {
  addDetailsToUserProfile,
  nextComponent,
} from "@/redux/slices/userDetailSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"; 
import { HideSvg, ShowSvg, GoogleSvg, TwitterSvg, AppleSvg, CautionSvg, ErrorSvg, BtnloadSvg } from '../../components';

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

          {/* Location  */}
          <div style={{ position: "relative" }}>
            <input
              type="text"
              placeholder="Location"
              className={styles.data_content_pass}
              value={userLocation}
              onChange={(e) => setUserLocation(e.target.value)}
            />
            <span style={{marginTop: "2px"}} className={styles.absolute__span}>
              <span>
                  <svg className={styles.svg__signup__ll} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M12 20.8995L16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995ZM12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 15C9.79086 15 8 13.2091 8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15Z" />
                </svg>
              </span>

              <span>
                <svg className={styles.error______svg} style={{ marginLeft: "10px", fill: "var(--brand-color)"}} width={17} height={17} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z"></path></svg>
              </span>
              
              <span className={`${styles.__spanerror} ${styles.passwrd__error}`}>
                <ErrorSvg />
              </span>
            </span>
            {/* <span>
              <svg style={{fill: "gray", width: "16px", height: "16px", position: "absolute", right: "15px", top: "20px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 20.8995L16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995ZM12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 15C9.79086 15 8 13.2091 8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15Z" />
              </svg>
            </span> */}
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
            <span style={{marginTop: "2px"}} className={styles.absolute__span}>
              <span>
                <svg className={styles.svg__signup__ll} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M18.3643 15.5353L16.95 14.1211L18.3643 12.7069C20.3169 10.7543 20.3169 7.58847 18.3643 5.63585C16.4116 3.68323 13.2458 3.68323 11.2932 5.63585L9.87898 7.05007L8.46477 5.63585L9.87898 4.22164C12.6127 1.48797 17.0448 1.48797 19.7785 4.22164C22.5121 6.95531 22.5121 11.3875 19.7785 14.1211L18.3643 15.5353ZM15.5358 18.3638L14.1216 19.778C11.388 22.5117 6.9558 22.5117 4.22213 19.778C1.48846 17.0443 1.48846 12.6122 4.22213 9.87849L5.63634 8.46428L7.05055 9.87849L5.63634 11.2927C3.68372 13.2453 3.68372 16.4112 5.63634 18.3638C7.58896 20.3164 10.7548 20.3164 12.7074 18.3638L14.1216 16.9496L15.5358 18.3638ZM14.8287 7.75717L16.2429 9.17139L9.17187 16.2425L7.75766 14.8282L14.8287 7.75717Z" />
                </svg>
              </span>

              <span>
                <svg className={styles.error______svg} style={{ marginLeft: "10px", fill: "var(--brand-color)"}} width={17} height={17} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z"></path></svg>
              </span>
              
              <span className={`${styles.__spanerror} ${styles.passwrd__error}`}>
                <ErrorSvg />
              </span>
            </span>
            {/* <span>
              <svg style={{fill: "gray", width: "16px", height: "16px", position: "absolute", right: "15px", top: "20px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M18.3643 15.5353L16.95 14.1211L18.3643 12.7069C20.3169 10.7543 20.3169 7.58847 18.3643 5.63585C16.4116 3.68323 13.2458 3.68323 11.2932 5.63585L9.87898 7.05007L8.46477 5.63585L9.87898 4.22164C12.6127 1.48797 17.0448 1.48797 19.7785 4.22164C22.5121 6.95531 22.5121 11.3875 19.7785 14.1211L18.3643 15.5353ZM15.5358 18.3638L14.1216 19.778C11.388 22.5117 6.9558 22.5117 4.22213 19.778C1.48846 17.0443 1.48846 12.6122 4.22213 9.87849L5.63634 8.46428L7.05055 9.87849L5.63634 11.2927C3.68372 13.2453 3.68372 16.4112 5.63634 18.3638C7.58896 20.3164 10.7548 20.3164 12.7074 18.3638L14.1216 16.9496L15.5358 18.3638ZM14.8287 7.75717L16.2429 9.17139L9.17187 16.2425L7.75766 14.8282L14.8287 7.75717Z" />
              </svg>
            </span> */}
            <span className={styles._0013_span}>
              {/* error message */}
              {/* <svg
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
              Invalid url! */}
              {/* error message */}
            </span>
          </div>

          {/* Bio  */}
          <div style={{ marginBottom: 0, height: 100, position: "relative" }}>
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

      <div className={styles.xxdffghy__09l}>
        <div onClick={() => dispatch(nextComponent(1))}>
          <button style={{width: "100%", position: "relative", border: "2px solid var(--brand-color)", background: "white", color: "var(--brand-color)"}}  className={styles.pass_data_bd} onClick={handleNext}>
          <svg className={styles.xyxy__svg__subck} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path></svg>
            Back
          </button>
        </div>
        <div>
          <button style={{width: "100%"}}  className={styles.pass_data_bd} onClick={handleNext}>Next</button>
        </div>
      </div>

      {/* previous button  */}
      {/* <div className={styles.btn_data_container}>
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
      </div> */}

      {/* next button  */}
      {bioTxtValue !== "" &&
        dob !== "" &&
        userLocation !== "" &&
        linkText !== "" && (

          <button  className={styles.pass_data_bd} onClick={handleNext}>Next</button>

          // <div className={styles.btn_data_container}>
          //   <span className={styles.xspanfloat}>
          //     <div
          //       className={`${styles.submit_user_data} ${styles.upload_all_dt}`}
          //       onClick={handleNext}
          //     >
          //       Next
          //       <svg
          //         className={styles.arrow_next}
          //         xmlns="http://www.w3.org/2000/svg"
          //         width="24"
          //         height="24"
          //         viewBox="0 0 24 24"
          //         fill="none"
          //         stroke="#01A8EA"
          //         strokeWidth="2"
          //         strokeLinecap="round"
          //         strokeLinejoin="round"
          //       >
          //         <path d="M5 12h13M12 5l7 7-7 7" />
          //       </svg>
          //     </div>
          //   </span>
          // </div>
        )}
    </>
  );
};

export default StepTwo;
