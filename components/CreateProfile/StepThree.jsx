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
          <div
            style={{
              position: "absolute",
              width: "500px",
              borderRadius: "12px",
              background: "#fff",
              boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
              zIndex: 20,
              top: "50%",
              transform: "translateY(-50%)",
              padding: "10px",
            }}
          >
            <div
              style={{
                marginBottom: "10px",
                cursor: "pointer",
              }}
              onClick={closeModal}
            >
              Close Icon
            </div>
            <Avatar
              width={400}
              height={300}
              onCrop={onCrop}
              onClose={onClose}
              onBeforeFileLoad={onBeforeFileLoad}
              src={src}
            />
            {/* upload image  */}
            <div
              style={{
                background: "#01a8eaa3",
                color: "#01A8EA",
                cursor: "pointer",
                padding: "10px",
                marginTop: "10px",
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
