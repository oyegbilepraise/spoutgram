import React from "react";
import styles from "@/layout/HomeLayout/HomeLayout.module.css";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import people2 from "../../images/people-2.jpeg";

function ImageCarousels({ postImage }) {
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
    <>
      <div className={`grid ${postImage.length > 4 ? 'four-columns' : 'two-columns'}`}>
        {postImage.map((pic, id) => (
          <div className="grid-item">
            <Image
              src={pic !== null && pic}
              alt="picgrid"
              className={''}
              width={200}
              height={200}
              priority
              key={id}
            />
          </div>
        ))}
      </div>
    </>
    // <div className={`${styles.data_content_img} ${styles.grid_101}`}>
    //   {postImage.length === 1 ? (
    //     <Image
    //       src={postImage[0]}
    //       alt="picgrid"
    //       className={styles._00img_data}
    //       width={1000}
    //       height={1000}
    //       priority
    //     />
    //   ) : (
    //     <Carousel
    //       swipeable={true}
    //       draggable={true}
    //       arrows={true}
    //       showDots={true}
    //       className=""
    //       responsive={responsive}
    //       ssr={true}
    //       keyBoardControl={true}
    //       customTransition="all .5"
    //       transitionDuration={500}
    //       dotListClass="custom-dot-list-style"
    //     >
    //       {postImage.map((pic,id) => (
    //         <Image
    //           src={pic!==null&&pic}
    //           alt="picgrid"
    //           className={styles._00img_data}
    //           width={1000}
    //           height={1000}
    //           priority
    //           key={id}
    //         />
    //       ))}
    //     </Carousel>
    //   )}
    // </div>
  );
}

export default ImageCarousels;
