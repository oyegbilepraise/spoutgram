import React, { useState } from "react";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import HomeVideo from "./HomeVideo";
import styles from "@/layout/HomeLayout/HomeLayout.module.css";

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

    const isSingleImage = postImage.length === 1;


  return (
    <>
      <div
        className={`grid ${
          postImage.length > 4 ? "four-columns" : "two-columns"
        }`}
      >
        {postImage.map((pic, id) =>
          pic.endsWith(".jpg") ? (
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
          ) : (
            <div key={id} onClick={() => openModal(pic)}>
              <HomeVideo videoUrl={pic} />
            </div>
          )
        )}
      </div>

      {modalOpen && (
        <div className={styles.post__post__img__carsl}>
          <div>
            <span onClick={closeModal}>
              &times;
            </span>
            {isSingleImage ? (
              <div className={styles.carouselItem_}>
                <Image
                  src={selectedImage}
                  alt="picgrid"
                  className={styles.carouselImage_}
                  width={500}
                  height={500}
                  priority
                />
              </div>
            ) : (
              <div>
                <Carousel
                  responsive={responsive}
                  arrows={true}
                  showDots={false}
                  keyBoardControl={true}
                  customTransition="transform 300ms ease-in-out"
                  transitionDuration={300}
                >
                  {imagesToShow.map((pic, id) => (
                    <div key={id} className={styles.carouselItem_}>
                      {pic.endsWith(".jpg") ? (
                        <Image
                          src={pic !== null && pic}
                          alt="picgrid"
                          className={styles.carouselImage_}
                          width={500}
                          height={500}
                          priority
                        />
                      ) : (
                        <HomeVideo videoUrl={pic} />
                      )}
                    </div>
                  ))}
                </Carousel>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default ImageCarousels;
