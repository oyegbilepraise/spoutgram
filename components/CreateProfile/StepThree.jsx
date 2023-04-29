import styles from "@/layout/AuthLayout/AuthLayout.module.css";
import img from "../../images/default-photo.svg";
import { default as NextImage } from "next/image";
import { useDispatch, useSelector } from "react-redux";
import {
  addDetailsToUserProfile,
  createProfileAction,
  nextComponent,
} from "@/redux/slices/userDetailSlice";
import { useEffect, useState } from "react";
import Avatar from "react-avatar-edit";

const StepThree = () => {
  const [src, setSrc] = useState(null);
  const [preview, setPreview] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [error, setError] = useState(null);

  // redux
  const dispatch = useDispatch();

  // function for the imported dependency
  const onClose = () => {
    setPreview(null);
    setError(null);
  };

  const onCrop = (view) => {
    setPreview(view);
  };

  // checking for errors
  const onBeforeFileLoad = (e) => {
    const getFileType = e.target.files[0].type.split("/")[0];
    const getFileSize = e.target.files[0].size;

    if (getFileType !== "image") {
      setError("Image format is not supported");
      e.target.value = "";
    }
    // if file image size is greater than 4mb show error NOTE: this can be change
    if (getFileSize > 4000000) {
      setError("File to large");
      e.target.value = "";
    }
  };

  // close modal
  const closeModal = () => {
    setShowPopup(false);
    setError(null);
  };

  // NOTE:
  // the avater-edit dependency will convert the image to base64 and it will be saved in that format in the database.
  // the uploadImage get the base64 value from preview and convert it back to an image to display it to the user.
  const uploadImage = () => {
    if (preview) {
      const img = new Image();
      img.src = preview;
      img.onload = () => {
        setImageUrl(img.src);
      };
    }
    setPreview(null);
    setShowPopup(false);
    setError(null);
  };

  // storing the data to redux
  useEffect(() => {
    if (imageUrl) {
      dispatch(addDetailsToUserProfile({ image: imageUrl }));
    }
  }, [imageUrl]);

  // get the image from redux and use in the frontend
  const imageStored = useSelector(
    (state) => state.userDetails.userProfile.image
  );
  useEffect(() => {
    setImageUrl(imageStored);
  }, []);

  const createUserProfile = useSelector(
    (state) => state.userDetails.userProfile
  );

  const handleSubmit = () => {
    // console.log("working");
    dispatch(createProfileAction(createUserProfile));
  };

  return (
    <>
      <div
        id="react_wrapper_three"
        className={styles.react__wrapper__component_pp}
      >
        {/* pop up to add a profile picture and please modify the class for better UI  */}
        {showPopup && (
          <div className={styles.popup__upldmodal}>
            <div className={styles.popup__upldmodal__child}>
              <div className={styles.tytyty}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={19}
                  height={19}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#d0d0d0"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={styles.closepicupld}
                  onClick={closeModal}
                >
                  <line x1={18} y1={6} x2={6} y2={18} />
                  <line x1={6} y1={6} x2={18} y2={18} />
                </svg>
                <span className={styles.title_mdlupld}>Profile Photo</span>
              </div>

              <div className={styles.xyyxyy}>
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={65}
                  height={65}
                  className={styles.photobaby}
                >
                  <path
                    d="M21 15V18H24V20H21V23H19V20H16V18H19V15H21ZM21.0082 3C21.556 3 22 3.44495 22 3.9934L22.0007 13.3417C21.3749 13.1204 20.7015 13 20 13V5H4L4.001 19L13.2929 9.70715C13.6528 9.34604 14.22 9.31823 14.6123 9.62322L14.7065 9.70772L18.2521 13.2586C15.791 14.0069 14 16.2943 14 19C14 19.7015 14.1204 20.3749 14.3417 21.0007L2.9918 21C2.44405 21 2 20.5551 2 20.0066V3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082ZM8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7Z"
                    fill="rgb(200, 200, 200)"
                  />
                </svg> */}

                <svg
                  className={styles.photobaby}
                  style={{ fill: "rgb(200, 200, 200)" }}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M11.2703 12.2162L15 6L23 21H2L9 8L11.2703 12.2162ZM12.3897 14.2378L14.9873 19H19.6667L14.8976 10.058L12.3897 14.2378ZM5.34843 19H12.6516L9 12.2185L5.34843 19ZM5.5 8C4.11929 8 3 6.88071 3 5.5C3 4.11929 4.11929 3 5.5 3C6.88071 3 8 4.11929 8 5.5C8 6.88071 6.88071 8 5.5 8Z"></path>
                </svg>
              </div>

              <Avatar
                width={190}
                height={300}
                onCrop={onCrop}
                onClose={onClose}
                onBeforeFileLoad={onBeforeFileLoad}
                src={src}
                id="pic-avatar"
                borderStyle={{
                  border: "1px solid transparent",
                  borderRadius: "20px",
                  margin: "auto",
                  textAlign: "center",
                }}
                label="Browse Photos"
                labelStyle={{
                  fontSize: "15px",
                  fontFamily: "Roboto-Regular",
                  background: "#01A8EA",
                  color: "white",
                  paddingTop: "8px",
                  paddingBottom: "8px",
                  paddingLeft: "30px",
                  paddingRight: "30px",
                  borderRadius: "1000px",
                  cursor: "pointer",
                }}
                // imageWidth={200}
                // imageBorder={50}
              />
              {/* upload image  */}
              {preview && (
                <div
                  style={{
                    background: "#01A8EA",
                    color: "white",
                    cursor: "pointer",
                    padding: "7px",
                    margin: "auto",
                    marginTop: "10px",
                    width: "max-content",
                    borderRadius: "1000px",
                    paddingLeft: "15px",
                    paddingRight: "15px",
                    fontFamily: "var(--global-bold)",
                    fontSize: "14px",
                    cursor: "pointer",
                  }}
                  onClick={uploadImage}
                >
                  Upload Image
                </div>
              )}

              {/* error goes here  */}
              {error && (
                <p style={{ color: "red", marginTop: "10px" }}>{error}</p>
              )}
            </div>
          </div>
        )}

        <div className={styles.top__wrapper}>
          <div>
            {imageUrl ? (
              <div className={styles.image__wrapper__}>
                <NextImage
                  src={imageUrl}
                  alt="default_avatar"
                  className={styles.x_xjhhl_img}
                  width={1000}
                  height={1000}
                  priority
                />
              </div>
            ) : (
              // <NextImage
              //   src={img}
              //   alt="default_avatar"
              //   className={styles.x_xjhhl_img}
              //   priority
              // />
              <div className={styles.image__wrapper__xx}>
                <div
                  style={{
                    textAlign: "center",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "100%",
                  }}
                >
                  <svg
                    className={styles.xyxy__svgg__upld}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z"></path>
                  </svg>
                  <span
                    onClick={() => setShowPopup(true)}
                    className={styles.yxyx__spn__upld}
                  >
                    Tap to Upload
                  </span>
                </div>
              </div>
            )}
          </div>
          {/* svg camera to tap to upload picture */}
          <div onClick={() => setShowPopup(true)}>
            <svg
              style={{ display: "none" }}
              className={styles.camera}
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
              <g transform="translate(2 3)">
                <path d="M20 16a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3l2-3h6l2 3h3a2 2 0 0 1 2 2v11z" />
                <circle cx={10} cy={10} r={4} />
              </g>
            </svg>
          </div>
          {/* svg */}
        </div>
        {/* <span className={styles._00sxtry}>
          You can skip this step, and Create Profile.
        </span> */}
        {imageUrl ? (
          <span
            style={{ marginTop: "15px", cursor: "default" }}
            className={styles._00sxtry}
          >
            Profile Picture Uploaded!
            <div
              style={{
                width: "max-content",
                position: "absolute",
                top: "15px",
                right: "15px",
              }}
            >
              <button
                onClick={() => setShowPopup(true)}
                style={{
                  width: "40px",
                  cursor: "pointer",
                  height: "40px",
                  border: "2px solid var(--brand-color)",
                  background: "var(--brand-color)",
                  borderRadius: "50%",
                  padding: "10px",
                  position: "relative",
                }}
              >
                <svg
                  style={{
                    width: "19px",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    height: "19px",
                    fill: "white",
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 3C20.5523 3 21 3.44772 21 4V5.757L19 7.757V5H5V13.1L9 9.1005L13.328 13.429L12.0012 14.7562L11.995 18.995L16.2414 19.0012L17.571 17.671L18.8995 19H19V16.242L21 14.242V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20ZM21.7782 7.80761L23.1924 9.22183L15.4142 17L13.9979 16.9979L14 15.5858L21.7782 7.80761ZM15.5 7C16.3284 7 17 7.67157 17 8.5C17 9.32843 16.3284 10 15.5 10C14.6716 10 14 9.32843 14 8.5C14 7.67157 14.6716 7 15.5 7Z"></path>
                </svg>
              </button>
            </div>
          </span>
        ) : (
          <span style={{ marginTop: "15px" }} className={styles._00sxtry}>
            You can skip this step.
          </span>
        )}
      </div>

      <div className={styles.xxdffghy__09l}>
        <div onClick={() => dispatch(nextComponent(2))}>
          <button
            style={{
              width: "100%",
              position: "relative",
              border: "2px solid var(--brand-color)",
              background: "white",
              color: "var(--brand-color)",
            }}
            className={styles.pass_data_bd}
          >
            <svg
              className={styles.xyxy__svg__subck}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path>
            </svg>
            Back
          </button>
        </div>
        <div>
          <button
            style={{ width: "100%" }}
            className={styles.pass_data_bd}
            type="submit"
          >
            Create
          </button>
        </div>
      </div>
    </>
  );
};

export default StepThree;
