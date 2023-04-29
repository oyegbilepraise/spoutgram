import React from "react";
import styles from "@/layout/HomeLayout/HomeLayout.module.css";

function ImagePost({images}) {
  return (
    <div style={{ display: "flex" }}>
              {images.map((image, index) => (
                <div key={index} className={styles.img___hol}>
                  {/* To use the image component, add width and height to the image. use css */}
                  <img
                    src={URL.createObjectURL(image)}
                    alt="girl"
                    className={styles.img__media__preview}
                  />
                </div>
              ))}
            </div>
  )
}

export default ImagePost;
