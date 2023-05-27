import { useFormik } from "formik";
import styles from "@/layout/AuthLayout/AuthLayout.module.css";
import * as Yup from "yup";
import { useState } from "react";
import { BtnloadSvg, CautionSvg, ErrorSvg, PageSpinner } from "../../components";
import img from '../../images/default.jpeg'
import { createProfileAction } from "@/redux/slices/userDetailSlice";
import { useDispatch } from "react-redux";
import Image from "next/image";

const FormComp = ({ formProps }) => {
  const {
    image,
    isLoading,
    handleImageUpload,
    appError,
    profile,
    handleNameBlur,
    suggestedUName,
    selectedMonth,
    selectedDay,
    selectedYear,
    days,
    months,
    years,
    loading,
    handleMonthChange,
    handleDayChange,
    handleYearChange,
    handleImageRemove,
  } = formProps;

  // dispatch
  const dispatch = useDispatch();

  const createProfileValidationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    // .matches(/^\d{6}$/, "Invalid code format"),
    username: Yup.string().required("Username is required"),
    // .matches(/^\d{6}$/, "Invalid code format"),
  });

  const [showNameError, setShowNameError] = useState(false);
  const [showUnameError, setShowUnameError] = useState(false);
  // handle DOB error state
  const [dobError, setDobError] = useState(null);

  const formik = useFormik({
    initialValues: {
      name: "",
      username: "",
    },
    onSubmit: (values) => {
      if (selectedMonth !== "" && selectedYear !== "" && selectedDay !== "") {
        const profilePhoto = image ? image : "";
        const { name, username } = values;
        const d_o_b = `${selectedDay}/${selectedMonth}/${selectedYear}`;
        dispatch(createProfileAction({ profilePhoto, name, username, d_o_b }));
        setDobError("");
      } else {
        setDobError("Please select the appropriate value for DOB");
      }
    },
    validationSchema: createProfileValidationSchema,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      {!image && (
        <div className={styles.image__wrapper__xx}>
          <Image
            src={img}
            alt="profile_avatar"
            className={styles.x_xjhhl_img}
            priority
          />
          {isLoading ? (
                  <div style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>
                    < PageSpinner />
                  </div>
                ) : ( 
          <span
            style={{
              position: "absolute",
              top: "70%",
              left: "50%",
              transform: "translate(-50%, -50%)", 
              pointerEvents: "fill"
            }}
          >
            <button
              type="button"
              onClick={() => document.getElementById("fileInput").click()}
              style={{
                width: "35px",
                cursor: "pointer",
                height: "35px",
                borderRadius: "50%",
                background: "rgb(245, 245, 245)",
                position: "relative",
                boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;",
              }}
            >
              <svg 
                style={{
                  width: "18px",
                  height: "18px",
                  fill: "rgb(180, 180, 180)",
                  boxSizing: "content-box",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21 15V18H24V20H21V23H19V20H16V18H19V15H21ZM21.0082 3C21.556 3 22 3.44495 22 3.9934V13H20V5H4V18.999L14 9L17 12V14.829L14 11.8284L6.827 19H14V21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082ZM8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7Z"></path>
              </svg>
            </button>
            <input
              type="file"
              id="fileInput"
              accept="image/jpg, image/jpeg, image/png"
              onChange={handleImageUpload}
              style={{ display: "none" }}
            />
          </span> 
          )}
        </div>
      )}

      {image && (
        <>
          <div
            style={{ position: "relative" }}
            className={styles.image__wrapper__}
          >
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
                ) : ( 
            <span
              style={{
                position: "absolute",
              top: "70%",
              left: "50%",
              transform: "translate(-50%, -50%)", 
              pointerEvents: "fill"
              }}
            >
              <button
                type="button"
                onClick={() => document.getElementById("fileInput").click()}
                style={{
                  width: "35px",
                  cursor: "pointer",
                  height: "35px",
                  borderRadius: "50%",
                  background: "rgb(245, 245, 245)",
                  position: "relative",
                  boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;",
                }}
              >
                <svg
                  style={{
                    width: "18px",
                    height: "18px",
                    fill: "rgb(180, 180, 180)",
                    boxSizing: "content-box",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 15V18H24V20H21V23H19V20H16V18H19V15H21ZM21.0082 3C21.556 3 22 3.44495 22 3.9934V13H20V5H4V18.999L14 9L17 12V14.829L14 11.8284L6.827 19H14V21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082ZM8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7Z"></path>
                </svg>
              </button>
              <input
                type="file"
                id="fileInput"
                accept="image/jpg, image/jpeg, image/png"
                onChange={handleImageUpload}
                style={{ display: "none" }}
              />
            </span> )}
          </div>
          <div style={{ textAlign: "center" }}>
            <button type="button"
              style={{
                cursor: "pointer",
                marginBottom: "10px",
                padding: "10px",
                borderRadius: "8px",
                color: "white",
                background: "var(--brand-color)",
              }}
              onClick={handleImageRemove}
            >
              Remove image
            </button>
          </div>
        </>
      )}

      {/*  */}
      {appError && (
        <div style={{ paddingTop: "5px", paddingBottom: "14px" }}>
          <span className={styles.error__msg__xyx}>
            <CautionSvg />
            <span className={styles.error__txt__xyx}>{appError}</span>
          </span>
        </div>
      )}
      {/*  */}

      {/*  */}
      {profile.updatedUser && (
        <div style={{ paddingTop: "5px", paddingBottom: "14px" }}>
          <span className={styles.error__msg__xyx}>
            <svg
              className={styles.error__inval}
              width={17}
              height={17}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z"></path>
            </svg>
            <span className={styles.error__txt__xyx}>Profile Created!</span>
          </span>
        </div>
      )}
      {/*  */}

      {/* this is the name */}
      <div className={styles.ibistro__xyz__one}>
        <div style={{ position: "relative" }}>
          <input
            type="text"
            placeholder="Name"
            maxLength="40"
            className={styles.data_content_pass}
            autoComplete="off"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange("name")}
            onBlur={handleNameBlur}
          />
          <span className={styles.absolute__span}>
            {formik.touched.name && formik.errors.name ? (
              <span
                className={`${styles.__spanerror} ${styles.passwrd__error}`}
                style={{ position: "relative" }}
              >
                {/* this is the password error msg */}
                {showNameError && formik.touched.name && formik.errors.name ? (
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
          <input
            type="text"
            maxLength="15"
            placeholder="Username"
            className={styles.data_content_pass}
            name="username"
            autoComplete="off"
            spellCheck="false"
            value={formik.values.username}
            onChange={formik.handleChange("username")}
          />

          {suggestedUName ? (
            <Select
              options={suggestedUName}
              onChange={(values) => setValues(values)}
            />
          ) : (
            ""
          )}

          <span className={styles.absolute__span}>
            {formik.touched.username && formik.errors.username ? (
              <span
                className={`${styles.__spanerror} ${styles.passwrd__error}`}
                style={{ position: "relative" }}
              >
                {/* this is the password error msg */}
                {showUnameError &&
                formik.touched.username &&
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

      <div>
        <div style={{ justifyContent: "space-between", display: "none" }}>
          
          {/* this is the month dropdown */}
          <div className={styles.month__dropdwn}>
            <span className={styles.months}>Month</span>
              <span className={styles.dropdown__list}>
                {months.map((month) => (
                  // <option key={month.id} value={month.value}>
                  //   {month.label}
                  // </option>
                  <span key={month.id} value={month.value} className={styles.option__list}>{month.label}</span>
                ))}
              </span>
          </div>

          {/* this is the day dropdown */}
          <div className={styles.day__dropdwn}>
            <span className={styles.days}>Day</span>
              <span className={styles.dropdown__list}>
                <span className={styles.option__list}>10</span>
              </span>
          </div>

          {/* this is the year dropdown */}
          <div className={styles.year__dropdwn}>
            <span className={styles.years}>Year</span>
              <span className={styles.dropdown__list}>
                <span className={styles.option__list}>2023</span>
              </span>
          </div>

        </div>
      </div>

      {/* this is the test */}
      <div style={{ justifyContent: "space-between", display: "flex" }}>
        <span>
          <select
            className={styles.select__cpf}
            style={{ width: "100px", textAlign: "center" }}
            name="month"
            id="month"
            value={selectedMonth}
            onChange={handleMonthChange}
          >
            <option value="">MM</option>
            {months.map((month) => (
              <option key={month.id} value={month.value}>
                {month.label}
              </option>
            ))}
          </select>
        </span>

        <span>
          <select
            className={styles.select__cpf}
            style={{ width: "100px", textAlign: "center" }}
            name="day"
            id="day"
            value={selectedDay}
            onChange={handleDayChange}
          >
            <option value="">DD</option>
            {days.map((day) => (
              <option key={day} value={day}>
                {day}
              </option>
            ))}
          </select>
        </span>

        <span>
          <select
            className={styles.select__cpf}
            style={{ width: "100px", textAlign: "center" }}
            name="year"
            id="year"
            value={selectedYear}
            onChange={handleYearChange}
          >
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
        {loading ? (
          <button
            className={`${styles.pass_data_bd} ${styles.new__change__btn}`}
            type="submit"
            style={{
              position: "relative",
              color: "transparent",
              transition: "0.1s all",
            }}
            disabled
          >
            <>
              <BtnloadSvg />
            </>
            Create Profile
          </button>
        ) : (
          <button className={styles.pass_data_bd} type="submit">
            Create Profile
          </button>
        )}
      </div>
    </form>
  );
};

export default FormComp;
