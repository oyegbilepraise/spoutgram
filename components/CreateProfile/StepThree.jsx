import styles from "@/layout/AuthLayout/AuthLayout.module.css";
import img from "../../images/default-photo.svg";
import { default as NextImage } from "next/image";
import { useDispatch, useSelector } from "react-redux";
import {
  addDetailsToUserProfile,
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

  return (
    <>
      <div
        id="react_wrapper_three"
        className={styles.react__wrapper__component}
      >
        {/* pop up to add a profile picture and please modify the class for better UI  */}
        {showPopup && (
          <div className={styles.popup__upldmodal}>
            <div
            style={{
              position: "absolute",
              width: "500px",
              height: "600px",
              borderRadius: "20px",
              background: "#fff",
              boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
              zIndex: 20,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              padding: "0px",
            }}
          >
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
              <span className={styles.title_mdlupld}>
                Profile Photo
              </span>
            </div>

            <div className={styles.xyyxyy}>
              <svg
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
              </svg>
            </div>

            <Avatar
              width={500}
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
                textAlign: "center"
              }}
              label="Choose a Photo"
              labelStyle={{
                fontSize: "15px",
                fontFamily: "Roboto-Regular",
                background: "#01A8EA",
                color: "white",
                paddingTop: "8px", paddingBottom: "8px",
                paddingLeft: "30px", paddingRight: "30px",
                borderRadius: "5px"
              }}
              imageWidth={200}
            />
            {/* upload image  */}
            <div
              style={{
                background: "#01a8eaa3",
                color: "#01A8EA",
                cursor: "pointer",
                padding: "10px",
                marginTop: "10px",
                display: "none"
              }}
              onClick={uploadImage}
            >
              Upload Image
            </div>
            {/* error goes here  */}
            {error && (
              <p style={{ color: "red", marginTop: "10px" }}>{error}</p>
            )}
            </div>
          </div>
        )}

        <div className={styles.top__wrapper}>
          <div className={styles.image__wrapper__}>
            {imageUrl ? (
              <NextImage
                src={imageUrl}
                alt="default_avatar"
                className={styles.x_xjhhl_img}
                width={1000}
                height={1000}
                priority
              />
            ) : (
              <NextImage
                src={img}
                alt="default_avatar"
                className={styles.x_xjhhl_img}
                priority
              />
            )}
          </div>
          {/* svg camera to tap to upload picture */}
          <div onClick={() => setShowPopup(true)}>
            <svg
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
        {imageUrl ? (
          <span className={styles.span_dta_vn}>success message goes here</span>
        ) : (
          <span className={styles.span_dta_vn}>Add your profile picture</span>
        )}
        {!imageUrl && (
          <div>
            <span className={styles._00sxtry}>
              You can skip this step, and Create Profile.
            </span>
          </div>
        )}
      </div>

      {/* previous button  */}
      <div className={styles.btn_data_container}>
        <span className={styles.xspanfloat}>
          <div
            className={`${styles.submit_user_data} ${styles.upload_all_dt}`}
            onClick={() => dispatch(nextComponent(2))}
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
    </>
  );
};

export default StepThree;
