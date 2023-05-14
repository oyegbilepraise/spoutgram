import styles from "@/layout/HomeLayout/HomeLayout.module.css";


const Post = ({post}) => {
  console.log({post});
  return (
    <div id="columnOne">
      {/* no post yet div */}
      <div style={{ height: 200, position: "relative"}}>
        <h6 className={styles.npy__xyz}>No post yet.</h6>
      </div>
      {/* no post yet div */}

    </div>
  );
};

export default Post;