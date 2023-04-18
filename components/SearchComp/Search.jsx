import styles from "@/layout/HomeLayout/HomeLayout.module.css";

const Search = ({ handleSearch }) => {
  return (
    <div className={styles.search__modal_container}>
      <div className={styles.search__modal}>
        <div>
          <input
            type="search"
            placeholder="Search Spoutgram"
            className={styles.main__search__input}
          />
        </div>
        <div className={styles.search__recommendation_div}>
          <div className={styles.recommendation}>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={styles.search__icon}
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
            <div>
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cG9ydHJhaXR8ZW58MHx8MHx8&w=1000&q=80"
                alt="profile-image"
                className={styles.profile__s_img}
              />
            </div>
            <div>
              <h6 className={styles.search__text}>Penuel John</h6>
              <h6 className={styles.search__text_uname}>@penueljohn</h6>
            </div>
          </div>
          <div className={styles.recommendation}>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={styles.search__icon}
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
            <div>
              <h6 className={`${styles.search__text} ${styles.st_two}`}>
                Search recommendation
              </h6>
            </div>
          </div>
          <div className={styles.recommendation}>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={styles.search__icon}
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
            <div>
              <h6 className={`${styles.search__text} ${styles.st_two}`}>
                United States
              </h6>
            </div>
          </div>
          <div className={styles.recommendation}>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={styles.search__icon}
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
            <div>
              <h6 className={`${styles.search__text} ${styles.st_two}`}>
                What is in the spotlight?
              </h6>
            </div>
          </div>
          <div className={styles.recommendation}>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={styles.search__icon}
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
            <div>
              <h6 className={`${styles.search__text} ${styles.st_two}`}>
                Function recall
              </h6>
            </div>
          </div>
          <div className={styles.recommendation}>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={styles.search__icon}
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
            <div>
              <h6 className={`${styles.search__text} ${styles.st_two}`}>
                Spoutgram
              </h6>
            </div>
          </div>
        </div>
        <div className={styles.flex__sm} onClick={() => handleSearch()}>
          <div>
            <span className={`${styles.close__search__h6} ${styles.sm__close}`}>
              CLOSE
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
