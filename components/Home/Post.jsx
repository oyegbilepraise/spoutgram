import EachPost from "./EachPost";

const Post = ({ posts, loading }) => {

  return (
    <div>
      {loading ? <div style={{ height: "78vh" }} className="d-flex justify-content-center align-items-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div> :
        <div> {posts.map((post, id) => <EachPost post={post} key={id} />)}
        </div>
      }
    </div>
  );
};

export default Post;
