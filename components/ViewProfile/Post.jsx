import styles from "@/layout/HomeLayout/HomeLayout.module.css";


const Post = () => {
  return (
    <div id="columnOne">

      {/* post grid */}
      <div className={styles.yourpost__grid__parent}>

        {/* main grid */}
        <div className={styles.yourpost__grid__main}>


          {/* content */}

          <div className={styles.display__yourpost}>

            {/* post content would be here */}
          </div>
          <div className={styles.display__yourpost}>

            {/* post content would be here */}
          </div>
          <div className={styles.display__yourpost}>

            {/* post content would be here */}
          </div>


        </div>





        {/* main grid */}
        <div className={styles.yourpost__grid__main}>


          {/* content */}

          <div className={styles.display__yourpost}>

            {/* post content would be here */}
          </div>
          <div className={styles.display__yourpost}>

            {/* post content would be here */}
          </div>
          <div className={styles.display__yourpost}>

            {/* post content would be here */}
          </div>


        </div>


        {/* main grid */}
        <div className={styles.yourpost__grid__main}>


          {/* content */}

          <div className={styles.display__yourpost}>

            {/* post content would be here */}
          </div>
          <div className={styles.display__yourpost}>

            {/* post content would be here */}
          </div>
          <div className={styles.display__yourpost}>

            {/* post content would be here */}
          </div>


        </div>

        
      </div>
      {/* post grid */}

      {/* no post yet div */}
      <div style={{ height: 400, position: "relative", display: "none" }}>
        <h6 className={styles.npy__xyz}>No post yet.</h6>
      </div>
    </div>
  );
};

export default Post;
