import "./createProfile.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import styles from "@/layout/AuthLayout/AuthLayout.module.css";
import Image from "next/image";
import img from '../../images/default.jpeg'

// Components
import { CautionSvg, ErrorSvg, PageSpinner } from "../../components";
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
  const [isLoading, setLoading] = useState(false);

  // Function to handle image upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadstart = () => {
      setLoading(true);
    };
  
    reader.onload = (e) => {
      setTimeout(() => {
        setLoading(false);
        setImage(e.target.result);
      }, 2500); // Delay of 2 seconds (2000 milliseconds)
    };  

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  // Function to handle image removal
  const handleImageRemove = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setImage(null);
    }, 2500); // Delay of 2 seconds (2000 milliseconds)
  };




  //this is the api code to get the user's location...
  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await axios.get('https://api.ipstack.com/check?access_key=[I_will_add_my_api_keys_here_praise_thanks]');
        //this is free, but I want to go for the paid plan so I will update it here.
        const { country_name, city, latitude, longitude } = response.data;
        const locationData = { country: country_name, city, latitude, longitude };
        Cookies.set('userLocation', JSON.stringify(locationData));
        console.log('Location data stored:', locationData);
      } catch (error) {
        console.error('Failed to fetch location:', error);
      }
    };
    fetchLocation();
  }, []);



  return (
    <AuthLayout>
      <main className={styles.__main} role="main">
        <div className={styles._xparnts_y}>
          <div className={styles._xparnts_cvr}>
            {profile?.message && <p>{profile?.message}</p>}

            <span className={styles.vdf_data}>
              Add your info.
            </span>


            {/* this is the form that would proccess all the users data for create-profile */}
            <form onSubmit={formik.handleSubmit}>
              {!image && (
                <div className={styles.image__wrapper__xx} onClick={() => document.getElementById('fileInput').click()}>
                  <Image
                    src={img}
                    alt="profile_avatar"
                    className={styles.x_xjhhl_img}
                  /> 
                  {isLoading ? (
                  <div style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>
                    < PageSpinner />
                  </div>
                ) : ( <svg fill="rgb(235, 235, 235)" className={styles.svg__edit__upld__yyy} style={{width: "21px", height: "21px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9.82843 5L7.82843 7H4V19H20V7H16.1716L14.1716 5H9.82843ZM9 3H15L17 5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V6C2 5.44772 2.44772 5 3 5H7L9 3ZM12 18C8.96243 18 6.5 15.5376 6.5 12.5C6.5 9.46243 8.96243 7 12 7C15.0376 7 17.5 9.46243 17.5 12.5C17.5 15.5376 15.0376 18 12 18ZM12 16C13.933 16 15.5 14.433 15.5 12.5C15.5 10.567 13.933 9 12 9C10.067 9 8.5 10.567 8.5 12.5C8.5 14.433 10.067 16 12 16Z"></path></svg> )}
                <input
                    type="file"
                    id="fileInput"
                    accept="image/jpg, image/jpeg, image/png"
                    onChange={handleImageUpload}
                    style={{ display: 'none' }}
                    hidden
                  />
                </div>
              )}

              {image && (
                <div style={{position: "relative"}}>
                  <div style={{ position: "relative" }} className={styles.image__wrapper__} onClick={() => document.getElementById('fileInput').click()}>
                    <img
                      src={image}
                      alt="profile_avatar"
                      className={styles.x_xjhhl_img}
                      priority
                    />
                    {isLoading ? (
                      <div style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>
                        < PageSpinner />
                      </div>
                    ) : ( <svg fill="rgb(235, 235, 235)" className={styles.svg__edit__upld__yyy} style={{width: "21px", height: "21px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9.82843 5L7.82843 7H4V19H20V7H16.1716L14.1716 5H9.82843ZM9 3H15L17 5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V6C2 5.44772 2.44772 5 3 5H7L9 3ZM12 18C8.96243 18 6.5 15.5376 6.5 12.5C6.5 9.46243 8.96243 7 12 7C15.0376 7 17.5 9.46243 17.5 12.5C17.5 15.5376 15.0376 18 12 18ZM12 16C13.933 16 15.5 14.433 15.5 12.5C15.5 10.567 13.933 9 12 9C10.067 9 8.5 10.567 8.5 12.5C8.5 14.433 10.067 16 12 16Z"></path></svg> )}
                    <input
                      type="file"
                      id="fileInput"
                      accept="image/jpg, image/jpeg, image/png"
                      onChange={handleImageUpload}
                      style={{ display: 'none' }}
                      hidden
                    />
                  </div>
                  <span className={styles.span___rmv__edt__pp} onClick={handleImageRemove}>Remove Photo</span>
                </div>
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
              <div className={styles.ibistro__xyz__one} style={{display: "none"}}>
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