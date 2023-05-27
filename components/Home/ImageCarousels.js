import React from "react";
import styles from "@/layout/HomeLayout/HomeLayout.module.css";
import Image from "next/image";

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
        <div key={id}>
          <video
            controls
            width={200}
            height={200}
            className={getItemClassName(itemCount)}
          >
            <source src={pic !== null && pic} type="video/mp4" />
          </video>
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
      className={`imageContainer ${
        postImage.length === 3 ? "thirdImageContainer" : getItemClassName(postImage.length)
      }`}
    >
      {postImage.map((pic, id) => (
        <div key={id}>{handleImageVideodisplay(pic, id)}</div>
      ))}
    </div>
  );
}

export default ImageCarousels;
