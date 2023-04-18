import './RightSidebar.module.css'
import React, { useState } from "react";
import img from "../../images/default-photo.svg";
import Image from "next/image";
import styles from "@/layout/HomeLayout/HomeLayout.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Search from "../SearchComp/Search";

// read documentation to style and also inspect element. https://www.npmjs.com/package/react-multi-carousel

// custom arrows. add arrows in place of the buttons
const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  const {
    carouselState: { currentSlide },
  } = rest;
  return (
    <div
      className={`${styles.carousel_button_group} ${styles.carousel__btn__div}`}
    >
      {" "}
      <button
        className={currentSlide === 0 ? "disable" : ""}
        onClick={() => previous()}
        style={{ cursor: "pointer" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={21}
          height={21}
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--brand-color)"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <button
        onClick={() => next()}
        style={{ marginLeft: "5px", cursor: "pointer" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={21}
          height={21}
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--brand-color)"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
    </div>
  );
};

// custom dots

const carouselItems = [
  {
    id: 1,
  },
  {
    id: 2,  
  },
  {
    id: 3,  
  },
  {
    id: 4,  
  },
  {
    id: 5,  
  },
  {
    id: 6,  
  },

];

const images = carouselItems.map(({ id }) => {
  return (
    <div key={id}>
      <figure className="h-auto w-auto">
        <img
          src={`data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='styles._0xschsvg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(172, 172, 172)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><circle cx='11' cy='11' r='8' /><line x1='21' y1='21' x2='16.65' y2='16.65' /></svg>`}
          alt="dotss"
          width={30}
          height={30}
        />
      </figure>
    </div>
  );
});

const CustomDot = ({ onClick, ...rest }) => {
  const {
    onMove,
    index,
    active,
    carouselState: { currentSlide, deviceType },
  } = rest;
  // onMove means if dragging or swiping in progress.
  // active is provided by this lib for checking if the item is active or not.
  // style the active className for active state
  return (
    <button
      className={active ? "active" : "inactive"}
      onClick={() => onClick()}
    >
      {React.Children.toArray(images)[index]}
    </button>
  );
};

const RightSidebar = () => {
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

  const data = [
    {
      id: 1,
      items: [
        {
          id: 1,
          name: "Preshpie",
          username: "@pie",
          btn: "Follow",
        },
        {
          id: 2,
          name: "John",
          username: "@penuel",
          btn: "Follow",
        },
        {
          id: 3,
          name: "Tomiwa",
          username: "@tom",
          btn: "Follow",
        },
        {
          id: 4,
          name: "Dipo",
          username: "@dipox",
          btn: "Follow",
        },
        {
          id: 5,
          name: "Dipo",
          username: "@dipox",
          btn: "Follow",
        },
        {
          id: 6,
          name: "Dipo",
          username: "@dipox",
          btn: "Follow",
        },
      ],
    },
    {
      id: 2,
      items: [
        {
          id: 1,
          name: "Dada",
          username: "@pie",
          btn: "Follow",
        },
        {
          id: 2,
          name: "YORA",
          username: "@penuel",
          btn: "Follow",
        },
        {
          id: 3,
          name: "dami",
          username: "@tom",
          btn: "Follow",
        },
        {
          id: 4,
          name: "Yemi",
          username: "@dipox",
          btn: "Follow",
        },
        {
          id: 5,
          name: "Yemi",
          username: "@dipox",
          btn: "Follow",
        },
        {
          id: 6,
          name: "Yemi",
          username: "@dipox",
          btn: "Follow",
        },
      ],
    },
    {
      id: 3,
      items: [
        {
          id: 1,
          name: "Rema",
          username: "@badguy",
          btn: "Follow",
        },
        {
          id: 2,
          name: "Doja",
          username: "@cat",
          btn: "Follow",
        },
        {
          id: 3,
          name: "Drake",
          username: "@yourmama",
          btn: "Follow",
        },
        {
          id: 4,
          name: "James",
          username: "@brown",
          btn: "Follow",
        },
        {
          id: 5,
          name: "James",
          username: "@brown",
          btn: "Follow",
        },
        {
          id: 6,
          name: "James",
          username: "@brown",
          btn: "Follow",
        },
      ],
    },
    {
      id: 4,
      items: [
        {
          id: 1,
          name: "Ayra",
          username: "@star",
          btn: "Follow",
        },
        {
          id: 2,
          name: "Simi",
          username: "@adekunle",
          btn: "Follow",
        },
        {
          id: 3,
          name: "Vibe_killer",
          username: "@yawaHub",
          btn: "Follow",
        },
        {
          id: 4,
          name: "Killer",
          username: "@blessings",
          btn: "Follow",
        },
        {
          id: 5,
          name: "Killer",
          username: "@blessings",
          btn: "Follow",
        },
        {
          id: 6,
          name: "Killer",
          username: "@blessings",
          btn: "Follow",
        },
      ],
    },
    {
      id: 5,
      items: [
        {
          id: 1,
          name: "Ara",
          username: "@sar",
          btn: "Follow",
        },
        {
          id: 2,
          name: "Simsi",
          username: "@kunle",
          btn: "Follow",
        },
        {
          id: 3,
          name: "killer",
          username: "@yub",
          btn: "Follow",
        },
        {
          id: 4,
          name: "Dami",
          username: "@blesgs",
          btn: "Follow",
        },
        {
          id: 5,
          name: "Dami",
          username: "@blesgs",
          btn: "Follow",
        },
        {
          id: 6,
          name: "Dami",
          username: "@blesgs",
          btn: "Follow",
        },
      ],
    },
    {
      id: 6,
      items: [
        {
          id: 1,
          name: "Ada",
          username: "@gold",
          btn: "Follow",
        },
        {
          id: 2,
          name: "Sdimi",
          username: "@adedddkunle",
          btn: "Follow",
        },
        {
          id: 3,
          name: "Vibe_kildddler",
          username: "@yawaHub",
          btn: "Follow",
        },
        {
          id: 4,
          name: "Killer",
          username: "@blessddings",
          btn: "Follow",
        },
        {
          id: 5,
          name: "Killer",
          username: "@blessddings",
          btn: "Follow",
        },
        {
          id: 6,
          name: "Killer",
          username: "@blessddings",
          btn: "Follow",
        },
      ],
    },
  ];

  // show search modal toggle
  const [showSearch, setShowSearch] = useState(false);
  const handleSearch = () => {
    setShowSearch((prev) => !prev);
  };

  return (
    <div className={`${styles.rightbar} ${styles._000rightbar}`}>
      <div className={styles.__parent_00_q}>
        {/* Search input  */}
        <div className={styles.nonlist}>
          <div style={{ position: "relative" }} onClick={handleSearch}>
            <input
              type="search"
              placeholder="Search Spoutgram"
              className={`${styles._000sch_int} ${styles._js_show} ${styles.searchbar}`}
              disabled=""
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={styles._0xschsvg}
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="rgb(172, 172, 172)"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx={11} cy={11} r={8} />
              <line x1={21} y1={21} x2="16.65" y2="16.65" />
            </svg>
          </div>
        </div>
        {/* search modal */}
        {showSearch && <Search handleSearch={handleSearch} />}
        {/* search modal */}

        {/* suggestions */}
        <div className={styles.sgstn}>
          <span>Suggested Follows</span>
          <Carousel
            swipeable={true}
            draggable={true}
            arrows={false}
            showDots={true}
            responsive={responsive}
            ssr={true}
            infinite={true}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            customButtonGroup={<ButtonGroup />}
            customDot={<CustomDot />}
            containerClass="carousel-container"
            renderButtonGroupOutside={true}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {data.map(({ id, items }) => {
              return (
                <div key={id}>
                  <div>
                    {items.map(({ name, id, username, btn }) => {
                      return (
                        <div key={id} className={styles.sgstn_tst}>
                          <div>
                            <Image
                              src={img}
                              alt="img"
                              className={styles.xqsstn_bn}
                            />
                          </div>
                          <div>
                            <span className={styles.yynmsq}>{name}</span>
                            <span className={styles.yyusbsq}>{username}</span>
                          </div>
                          <div>
                            <button className={styles.flwx_xyq_fllw}>
                              {btn}
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
        {/* footer */}
        <div className={styles._00main_ftr}>
          <span>© 2023 Spoutgram, Inc</span> <span>Terms of Service</span>{" "}
          <span>Privacy Policy</span> <span>Cookie Policy</span>
          <span>Help</span> <span>Report Abuse</span> <span>Twitter</span>{" "}
          <span>Instagram</span>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
