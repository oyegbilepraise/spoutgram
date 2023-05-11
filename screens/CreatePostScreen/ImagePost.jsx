import React from "react";
import styles from "@/layout/HomeLayout/HomeLayout.module.css";

function ImagePost({media}) {
  return (
    <div style={{ display: "flex" }}>
             
              {media.map((outcome, index) => (
                <div key={index}>
                {outcome.type.includes("image/")? <div className={styles.img___hol}>
                  {/* To use the outcome component, add width and height to the outcome. use css */}
                  <img
                    src={URL.createObjectURL(outcome)}
                    alt="girl"
                    className={styles.img__media__preview}
                  />
                </div>: <div className={styles.img___hol}>
                <video src={URL.createObjectURL(outcome)} className={styles.img__media__preview} controls></video>
                </div> }
                </div>
              ))}
            </div>
  )
}

export default ImagePost;
