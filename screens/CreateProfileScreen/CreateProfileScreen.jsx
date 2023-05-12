import "./createProfile.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import styles from "@/layout/AuthLayout/AuthLayout.module.css";

// Components
import { CautionSvg, ErrorSvg } from "../../components";
import { AuthLayout } from "@/layout";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import Routes from "@/utils/routes";
import { baseUrl } from "@/redux/baseUrl";
import Cookies from "js-cookie";
import axios from "axios";
import Select from "react-dropdown-select";
import { createProfileAction } from "@/redux/slices/userDetailSlice";


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
      console.log({ values });
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
  }, [formik]);

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
  const [suggestedUName, setSuggestedUName] = useState('');

  function handleNameFocus() {
    setShowNameError(true);
  }
  function handleNameBlur() {
    setShowNameError(false);
  }

  function handleUnameFocus() {
    setShowUnameError(true);
  }
  const handleUnameBlur = async () => {
    const token = Cookies.get('token')
    const res = await axios.post(baseUrl + '/users/verify-username', {
      username: formik.values.username
    }, { headers: { Authorization: 'Bearer ' + token } });

    if (res.data.status) {
      setSuggestedUName('')
    } else {
      if (res?.data?.suggested) {
        let a = res?.data?.suggested
        let b = []
        a.forEach((item, i) => {
          b.push({ value: 1, label: item })
        })
        setSuggestedUName(b);
      } else {
        setSuggestedUName('')
      }
    }

    //   console.log({ re: res.data });
    // setShowUnameError(false);
  }

  function handleDobFocus() {
    setShowDobError(true);
  }
  function handleDobBlur() {
    setShowDobError(false);
  }

  function setValues(values) {
    // formik.values.username = values[0].label
    formik.setValues({ username: values[0].label })
  }




  // date code
  const [months] = useState([
    { id: 1, label: 'Jan', value: 1 },
    { id: 2, label: 'Feb', value: 2 },
    { id: 3, label: 'Mar', value: 3 },
    { id: 4, label: 'Apr', value: 4 },
    { id: 5, label: 'May', value: 5 },
    { id: 6, label: 'Jun', value: 6 },
    { id: 7, label: 'Jul', value: 7 },
    { id: 8, label: 'Aug', value: 8 },
    { id: 9, label: 'Sep', value: 9 },
    { id: 10, label: 'Oct', value: 10 },
    { id: 11, label: 'Nov', value: 11 },
    { id: 12, label: 'Dec', value: 12 },
  ]);
  const [days, setDays] = useState([]);
  const [years, setYears] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

  // Function to generate days based on selected month and year
  const generateDays = (month, year) => {
    const monthsWith31Days = [1, 3, 5, 7, 8, 10, 12];
    const monthsWith30Days = [4, 6, 9, 11];
    let maxDays = 31;

    if (monthsWith30Days.includes(month)) {
      maxDays = 30;
    } else if (month === 2) {
      if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
        maxDays = 29; // Leap year
      } else {
        maxDays = 28; // Non-leap year
      }
    }

    const daysArray = Array.from({ length: maxDays }, (_, index) => index + 1);
    setDays(daysArray);
  };

  // Fill the years select options dynamically
  const fillYears = () => {
    const currentYear = new Date().getFullYear();
    const yearsArray = Array.from({ length: 100 }, (_, index) => currentYear - index);
    setYears(yearsArray);
  };

  // Event handler for month selection
  const handleMonthChange = (event) => {
    const month = parseInt(event.target.value, 10);
    setSelectedMonth(month);
    generateDays(month, selectedYear);
  };

  // Event handler for day selection
  const handleDayChange = (event) => {
    const day = parseInt(event.target.value, 10);
    setSelectedDay(day);
  };

  // Event handler for year selection
  const handleYearChange = (event) => {
    const year = parseInt(event.target.value, 10);
    setSelectedYear(year);
    generateDays(selectedMonth, year);
  };

  // Fill the years select options when the component mounts
  useEffect(() => {
    fillYears();
  }, []);

  // date code

  const [image, setImage] = useState(null);

  // Function to handle image upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      setImage(e.target.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  // Function to handle image removal
  const handleImageRemove = () => {
    setImage(null);
  };



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
              {/* <div className={styles.image__wrapper__xx}>
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
                  Upload Picture
                </div>
                <span style={{ position: "absolute", right: "0px", bottom: "3px" }} >
                  <button type="button"
                    style={{ width: "43px", cursor: "pointer", height: "43px", borderRadius: "50%", boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;", background: "white", position: "relative" }}>
                    <svg style={{ width: "19px", height: "19px", fill: "rgb(150, 150, 150)", boxSizing: "content-box", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
                      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21 15V18H24V20H21V23H19V20H16V18H19V15H21ZM21.0082 3C21.556 3 22 3.44495 22 3.9934V13H20V5H4V18.999L14 9L17 12V14.829L14 11.8284L6.827 19H14V21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082ZM8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7Z"></path></svg>
                  </button>
                </span>
              </div> */}

              {!image && (
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
                  <span style={{ position: "absolute", right: "0px", bottom: "3px" }} >
                    <button type="button" onClick={() => document.getElementById('fileInput').click()}
                      style={{ width: "43px", cursor: "pointer", height: "43px", borderRadius: "50%", background: "rgb(248, 248, 248)", position: "relative" }}>
                      <svg style={{ width: "19px", height: "19px", fill: "rgb(150, 150, 150)", boxSizing: "content-box", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21 15V18H24V20H21V23H19V20H16V18H19V15H21ZM21.0082 3C21.556 3 22 3.44495 22 3.9934V13H20V5H4V18.999L14 9L17 12V14.829L14 11.8284L6.827 19H14V21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082ZM8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7Z"></path></svg>
                    </button>
                    <input
                      type="file"
                      id="fileInput"
                      accept="image/jpg, image/jpeg, image/png"
                      onChange={handleImageUpload}
                      style={{ display: 'none' }}
                    />
                  </span>
                </div>
              )}

              {image && (
                // <div>
                //   <img src={image} alt="profile_image" />
                //   <button onClick={handleImageRemove}>Remove image</button>
                // </div>
                <>
                  <div style={{ position: "relative" }} className={styles.image__wrapper__}>
                    <img
                      src={image}
                      alt="profile_avatar"
                      className={styles.x_xjhhl_img}
                      priority
                    />
                    <span style={{ position: "absolute", right: "0px", bottom: "3px" }} >
                      <button type="button" onClick={() => document.getElementById('fileInput').click()}
                        style={{ width: "43px", cursor: "pointer", height: "43px", borderRadius: "50%", background: "rgb(248, 248, 248)", position: "relative" }}>
                        <svg style={{ width: "19px", height: "19px", fill: "rgb(150, 150, 150)", boxSizing: "content-box", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
                          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21 15V18H24V20H21V23H19V20H16V18H19V15H21ZM21.0082 3C21.556 3 22 3.44495 22 3.9934V13H20V5H4V18.999L14 9L17 12V14.829L14 11.8284L6.827 19H14V21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082ZM8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7Z"></path></svg>
                      </button>
                      <input
                        type="file"
                        id="fileInput"
                        accept="image/jpg, image/jpeg, image/png"
                        onChange={handleImageUpload}
                        style={{ display: 'none' }}
                      />
                    </span>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <button
                      style={{ cursor: "pointer", marginBottom: "10px", padding: "10px", borderRadius: "8px", color: "white", background: "var(--brand-color)" }}
                      onClick={handleImageRemove}>Remove image</button>
                  </div>
                </>
              )}


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
                    name="name" value={formik.values.name} onChange={formik.handleChange("name")} onBlur={handleNameBlur} />
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
                    ) : null}
                  </span>
                </div>
              </div>
              {/* this is the name */}

              {/* this is the username */}
              <div className={styles.ibistro__xyz__one}>
                <div style={{ position: "relative" }}>
                  <input type="text" maxlength="15" placeholder="Username" className={styles.data_content_pass} name="username" autoComplete="off"
                    spellCheck="false" value={formik.values.username} onChange={formik.handleChange("username")} onBlur={handleUnameBlur} />

                  {
                    suggestedUName ? (
                      <Select options={suggestedUName} onChange={(values) => setValues(values)} />
                    ) : ''
                  }

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
                    ) : null}
                  </span>
                </div>
              </div>
              {/* this is the username */}

              {/* this is the date of birth */}
              <div className={styles.ibistro__xyz__one}>
                <div style={{ position: "relative" }}>
                  <input id="dob-input" type="date" autoComplete="off" name="dateOfBirth" placeholderText="Date of Birth" className={styles.data_content_pass} value={formik.values.dateOfBirth} onChange={formik.handleChange("dateOfBirth")} onFocus={handleDobFocus}
                    onBlur={handleDobBlur} />
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
                    ) : null}
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


              {/* this is the test */}
              <div style={{ justifyContent: "space-between", display: "flex" }}>
                <span>
                  <select className={styles.select__cpf} style={{ width: "100px", textAlign: "center" }} name="month" id="month" value={selectedMonth}
                    onChange={handleMonthChange}>
                    <option value="">MM</option>
                    {months.map((month) => (
                      <option key={month.id} value={month.value}>
                        {month.label}
                      </option>
                    ))}
                  </select>
                </span>

                <span>
                  <select className={styles.select__cpf} style={{ width: "100px", textAlign: "center" }} name="day" id="day" value={selectedDay}
                    onChange={handleDayChange}>
                    <option value="">DD</option>
                    {days.map((day) => (
                      <option key={day} value={day}>
                        {day}
                      </option>
                    ))}
                  </select>
                </span>

                <span>
                  <select className={styles.select__cpf} style={{ width: "100px", textAlign: "center" }} name="year" id="year" value={selectedYear}
                    onChange={handleYearChange}>
                    <option value="">YYYY</option>
                    {years.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </span>
              </div>
              {/* this is the test */}

              <div>
                <button className={styles.pass_data_bd} type="submit">Create Profile</button>
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