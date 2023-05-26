import './RightSidebar.module.css'
import React, { useEffect, useState } from "react";
import img from "../../images/default-photo.svg";
import Image from "next/image";
import styles from "@/layout/HomeLayout/HomeLayout.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Search from "../SearchComp/Search";
import Cookies from "js-cookie";
import { getSuggestedUsers } from '@/redux/slices/messageSlice/messageSlice';
import { useDispatch, useSelector } from 'react-redux';
import Link from "next/link";

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
        // className={currentSlide === 0 ? "disable" : ""}
        className={styles.buttons__prv__slide}
        onClick={() => previous()}
        style={{ cursor: "pointer" }}
      // {currentSlide === 0 ? "disable" : ""}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={19}
          height={19}
          viewBox="0 0 24 24"
          fill="none"
          stroke="#8e8e8e"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            position: "absolute",
            top: "50%", left: "50%", transform: "translate(-50%, -50%)"
          }}
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <button
        className={styles.buttons__prv__slide}
        onClick={() => next()}
        style={{ marginLeft: "11px", cursor: "pointer" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={19}
          height={19}
          viewBox="0 0 24 24"
          fill="none"
          stroke="#8e8e8e"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            position: "absolute",
            top: "50%", left: "50%", transform: "translate(-50%, -50%)"
          }}
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

// use next image component 
const images = carouselItems.map(({ id }) => {
  return (
    <div key={id}>
      <figure className="h-auto w-auto">
        <Image
          src={`data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' className='s_0xschsvg' width='4' height='4' viewBox='0 0 4 4' fill='none' stroke='red' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><circle cx='11' cy='11' r='8' /><line x1='21' y1='21' x2='16.65' y2='16.65' /></svg>`}
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
    <div className={styles.btn__holder__carsl}>
      <button
        className={`${active ? styles.active : styles.inactive} ${styles.carouselbtn}`}
        onClick={() => onClick()}
      >
        {React.Children.toArray(images)[index]}
      </button>
    </div>
  );
};

const RightSidebar = () => {
  const dispatch = useDispatch()
  const token = Cookies.get("token");
  const { loading, apiError, suggested } = useSelector(
    (state) => state?.message?.suggestedUsers
  );
  useEffect(() => {
    dispatch(getSuggestedUsers(token));
  }, []);
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
  let info = suggested.data
  let data = []
  const itemsPerPage = 6;

  if (info) {

    let total = Math.round(info.length / 6)
    for (let index = 1; index <= total; index++) {
      let format = displayPage(index);
      data.push({ id: index, items: format })
    }

  }

  function displayPage(page) {
    let startIndex = (page - 1) * itemsPerPage;
    let endIndex = startIndex + itemsPerPage;
    let pageItems = info.slice(startIndex, endIndex);
    return pageItems
  }

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
          <span>Follow Suggestions</span>
          {data ?
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
                      {items.map(({ name, id, username }) => {
                        return (
                          <div key={id} className={styles.sgstn_tst}>
                            <div>
                              <Link href={`/${username}`}>
                              {/* replace with the appropriate username variable */}
                                <Image
                                  src={img}
                                  alt="img"
                                  className={styles.xqsstn_bn}
                                />
                              </Link>
                            </div>
                            <div>
                              {/* replace with the appropriate username variable */}
                              <Link href={`/${username}`}>
                                <span className={styles.yynmsq}>{name}</span>
                              </Link>
                              <span className={styles.yyusbsq}>@{username}</span>
                            </div>
                            <div>
                              <button className={styles.flwx_xyq_fllw}>
                                follow
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

            : "No user"}

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
