import React, { useState } from "react";
import styles from "@/layout/HomeLayout/HomeLayout.module.css";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function ImageCarousels({ postImage }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalOpen(false);
  };

 const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const imagesToShow = selectedImage
    ? [selectedImage, ...postImage.filter((image) => image !== selectedImage)]
    : postImage;

  return (
    <>
      <div
        className={`grid ${
          postImage.length > 4 ? "four-columns" : "two-columns"
        }`}
      >
        {postImage.map((pic, id) => (
          <div className="grid-item" key={id} onClick={() => openModal(pic)}>
            <Image
              src={pic !== null && pic}
              alt="picgrid"
              className={""}
              width={200}
              height={200}
              priority
            />
          </div>
        ))}
      </div>

      {modalOpen && (
        <div>
          <div>
            <span onClick={closeModal}>
              &times;
            </span>
            <div>
              <Carousel
                responsive={responsive}
                arrows={true}
                infinite={true}
                showDots={false}
                keyBoardControl={true}
                customTransition="transform 300ms ease-in-out"
                transitionDuration={300}
              >
                {imagesToShow.map((pic, id) => (
                  <div key={id} className={styles.carouselItem}>
                    <Image
                      src={pic !== null && pic}
                      alt="picgrid"
                      className={styles.carouselImage}
                      width={500}
                      height={500}
                      priority
                    />
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      )}
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