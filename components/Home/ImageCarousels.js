import React from "react";
import styles from "@/layout/HomeLayout/HomeLayout.module.css";
import Image from "next/image";
import CustomVideo from "../VideoUpload/CustomVideo";

function ImageCarousels({ postImage }) {
  const handleImageVideodisplay = (pic, id) => {
    const fileExtension = pic.split(".").pop().toLowerCase();
    const itemCount = postImage.length;

    if (["jpg", "jpeg", "png"].includes(fileExtension)) {
      return (
        <div key={id}>
          <Image
            src={pic !== null && pic}
            alt="picgrid"
            className={getItemClassName(itemCount)}
            width={200}
            height={200}
            priority
          />
        </div>
      );
    } else if (fileExtension === "mp4") {
      return (
        <div>
          <CustomVideo
            pic={pic}
            id={id}
            className={getItemClassName(itemCount)}
          />
        </div>
      );
    }
  };

  const getItemClassName = (itemCount) => {
    if (itemCount === 1) {
      return "singleItem";
    } else if (itemCount === 2) {
      return "secondStyle";
    } else if (itemCount === 3) {
      return "thirdStyle";
    } else if (itemCount === 4) {
      return "fourthStyle";
    }
    return "";
  };

  return (
    <div
      className={`${
        postImage.length === 1
          ? "oneItemContainer"
          : postImage.length === 2
          ? "twoItemContainer"
          : postImage.length === 3
          ? "thirdImageContainer"
          : ""
      } ${postImage.length === 4 ? "imageContainer" : ""}`}
    >
      {postImage.map((pic, id) => (
        <div
          key={id}
          className={`${
            id === 0 && postImage.length === 3 ? "firstImage" : ""
          } ${id === 1 && postImage.length === 3 ? "secondImage" : ""} ${
            id === 2 && postImage.length === 3 ? "thirdImage" : ""
          }`}
        >
          {handleImageVideodisplay(pic, id)}
        </div>
      ))}
    </div>
  );
}

export default ImageCarousels;
