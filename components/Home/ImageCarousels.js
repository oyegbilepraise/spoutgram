import React from "react";
import styles from "@/layout/HomeLayout/HomeLayout.module.css";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import people2 from "../../images/people-2.jpeg";

function ImageCarousels({ count }) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div className={`${styles.data_content_img} ${styles.grid_101}`}>
      {count === 1 ? (
        <Image
          src={people2}
          alt="picgrid"
          className={styles._00img_data}
          width={1000}
          height={1000}
          priority
        />
      ) : (
        <Carousel
          swipeable={true}
          draggable={true}
          arrows={true}
          showDots={true}
          className=""
          responsive={responsive}
          ssr={true}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          dotListClass="custom-dot-list-style"
        >
          {[0, 1, 2].map((item) => (
            <Image
              src={people2}
              alt="picgrid"
              className={styles._00img_data}
              width={1000}
              height={1000}
              priority
              key={item}
            />
          ))}
        </Carousel>
      )}
    </div>
  );
}

export default ImageCarousels;
