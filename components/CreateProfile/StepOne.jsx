import styles from "@/layout/AuthLayout/AuthLayout.module.css";
import { addDetailsToUserProfile, nextComponent,} from "@/redux/slices/userDetailSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HideSvg, ShowSvg, GoogleSvg, TwitterSvg, AppleSvg, CautionSvg, ErrorSvg, BtnloadSvg } from '../../components';
const StepOne = () => {
  // toggles
  // const [status, setStatus] = useState(false);
  // const [organStatus, setOrganStatus] = useState(false);

  // defined dob, but I didn't add other things

  // this is the validation for Date of Birth
  const [dob, setDob] = useState('');

  
  const handleInputChange = (event) => {
    const inputVal = event.target.value;
    const regex = /^[0-9/]*$/;
    if (regex.test(inputVal)) {
      // Format the input value with slashes after MM and DD
      if (inputVal.length === 2 && dob.length === 1) {
        setDob(inputVal + '/');
      } else if (inputVal.length === 5 && dob.length === 4) {
        setDob(inputVal + '/');
      } else {
        setDob(inputVal);
      }
      // Restrict year input to four digits
      const parts = inputVal.split('/');
      if (parts.length === 3) {
        const month = parts[0];
        const day = parts[1];
        const year = parts[2];
        if (year && year.length > 4) {
          setDob(`${month}/${day}/${year.slice(0, 4)}`);
        }
        // Restrict month input to two digits (01-12)
        if (month && month.length > 2) {
          setDob(`${month.slice(0, 2)}/${day}/${year}`);
        } else if (month && month.length === 2) {
          const monthNum = parseInt(month, 10);
          if (monthNum > 12) {
            setDob(`01/${day}/${year}`);
          }
        }
        // Validate the day based on the selected month
        const maxDays = getMaxDays(month, year);
        if (day && day.length > 2) {
          setDob(`${month}/${day.slice(0, 2)}/${year}`);
        } else if (day && day.length === 2) {
          const dayNum = parseInt(day, 10);
          if (dayNum > maxDays) {
            setDob(`${month}/${maxDays}/${year}`);
          }
        }
        // Calculate the age based on the selected date of birth
        if (year && year.length === 4) {
          const currentDate = new Date();
          const currentYear = currentDate.getFullYear();
          const age = currentYear - parseInt(year, 10);
          setAge(age);
        }
      }
    }
  };
  const handleInputFocus = () => {
    document.getElementById('dob-input').placeholder = 'MM/DD/YYYY';
  };
  const handleInputBlur = () => {
    document.getElementById('dob-input').placeholder = 'Date of Birth';
  };
  

  //   values
  // const [statusValue, setStatusValue] = useState("");
  // const [adult, setAdult] = useState(false);
  // const [organizationValue, setOrganizationValue] = useState("");
  // const [names, setNames] = useState({
  //   name: "",
  //   username: "",
  // });

  // sending and getting value from/to redux
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.userDetails.userProfile);

  // get the data from redux and show to the user

  // useEffect(() => {
  //   setStatusValue(userDetails.status);
  //   setAdult(userDetails.adult);
  //   setOrganizationValue(userDetails.organization);
  //   setNames({ name: userDetails.name, username: userDetails.username });

  //   userDetails.status !== "" && setStatus(true);
  // }, []);

  // NOTE:
  // in this functions below you can test for error in the username and name input before user click next

  //   updating the state as user input values for both name and username

  // const handleNamesInput = (e) => {
  //   setNames((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  // };

  //   updating status value

  // const handleStatus = (statusValue) => {
  //   setStatusValue(statusValue);
  //   setStatus((prev) => !prev);
  //   setOrganStatus(true);
  //   if (statusValue !== "creator") {
  //     setAdult(false);
  //   }
  // };

  //   updating organization value
  // const handleOrganization = (organValue) => {
  //   setOrganizationValue(organValue);
  //   setOrganStatus(false);
  // };

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

        {/* this is the name */}
        <div className={styles.ibistro__xyz__one}>
          <div style={{ position: "relative" }}>
          <input type="text" placeholder="Name" className={styles.data_content_pass} name="name"
          //  value={names.name} 
          //  onChange={handleNamesInput}  
           />
            <span className={styles.absolute__span}>
              <span>
                <svg className={styles.error______svg} style={{fill: "var(--brand-color)"}} width={17} height={17} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z"></path></svg>
              </span>
              
              <span className={`${styles.__spanerror} ${styles.passwrd__error}`}>
                <ErrorSvg />
              </span>
            </span>
          </div>
        </div>
        {/* this is the name */}


        {/* this is the username */}
        <div className={styles.ibistro__xyz__one}>
          <div style={{ position: "relative" }}>
          <input type="text" placeholder="Username" className={styles.data_content_pass} name="username" 
          // value={names.username} 
          // onChange={handleNamesInput}  
          />
            <span className={styles.absolute__span}>
              <span>
                <svg className={styles.error______svg} style={{fill: "var(--brand-color)"}} width={17} height={17} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z"></path></svg>
              </span>
              
              <span className={`${styles.__spanerror} ${styles.passwrd__error}`}>
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
              id="dob-input"
              type="text"
              placeholder="Date of Birth"
              className={styles.data_content_pass}
              value={dob}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            />
            <span className={styles.absolute__span}>
              <span>
                <svg className={styles.error______svg} style={{fill: "var(--brand-color)"}} width={17} height={17} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z"></path></svg>
              </span>
              
              <span className={`${styles.__spanerror} ${styles.passwrd__error}`}>
                <ErrorSvg />
              </span>
            </span>
          </div>
        </div>
        {/* this is the date of birth */}
      </div>

      <div>
        <button  className={styles.pass_data_bd} onClick={handleNext}>Next</button>
      </div>

      {/* {statusValue !== "" && names.username !== "" && names.name !== "" && ( */}

        {/* <button  className={styles.pass_data_bd} onClick={handleNext}>Next</button>
        // <div className={styles.btn_data_container}>
        //   <span className={styles.xspanfloat}>
        //     <div */}
        {/* //       className={`${styles.submit_user_data} ${styles.upload_all_dt}`}
        //       onClick={handleNext}
        //     > */}
        {/* //       Next */}
        {/* //       <svg */}
        {/* //         className={styles.arrow_next}
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
        //       </svg> */}
        {/* //     </div> */}
        {/* //   </span> */}
        {/* // </div> */}
      {/* // )} */}
    </>
  );
};

export default StepOne;
