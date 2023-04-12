// import './RightSidebar.module.css'
import img from "../../images/default-photo.svg";
import Image from "next/image";
import styles from "@/layout/HomeLayout/HomeLayout.module.css";

const RightSidebar = () => {
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
          {/* toast */}
          {[0, 1, 2, 4, 5].map((items) => (
            <div className={styles.sgstn_tst} key={items}>
              <div>
                <Image src={img} alt="img" className={styles.xqsstn_bn} />
              </div>
              <div>
                <span className={styles.yynmsq}>Penuel John</span>
                <span className={styles.yyusbsq}>@penueljohn</span>
              </div>
              <div>
                <button className={styles.flwx_xyq_fllw}>Follow</button>
              </div>
            </div>
          ))}
          <div className={styles.sgstn_tst}>
            <div>
              <Image src={img} alt="img" className={styles.xqsstn_bn} />
            </div>
            <div>
              <span className={styles.yynmsq}>Penuel John</span>
              <span className={styles.yyusbsq}>@penueljohn</span>
            </div>
            <div>
              <button className={styles.flwx_xyq_fllw}>Following</button>
            </div>
          </div>
          ;
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
