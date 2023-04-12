// import './RightSidebar.module.css'
import img from "../../images/default-photo.svg";
import Image from "next/image";
import styles from "@/layout/HomeLayout/HomeLayout.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
      ],
    },
  ];
  return (
    <div className={`${styles.rightbar} ${styles._000rightbar}`}>
      <div className={styles.__parent_00_q}>
        <div className={styles.nonlist}>
          <div style={{ position: "relative" }}>
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
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
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
