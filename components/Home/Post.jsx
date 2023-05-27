import EachPost from "./EachPost";
import { PageSpinner } from "../../components";

const Post = ({ posts, loading }) => {
const route={one:"postComments/",two:"comment/"}
console.log(posts);
  return (
    <div>
      {loading ? <div style={{ height: "78vh" }} className="d-flex justify-content-center align-items-center">
        <div style={{ paddingTop: "30px" }} role="status">
          <PageSpinner />
        </div>
      </div> :
        <div>
          {posts?.map((post, id) => {
            return (
              <EachPost post={post} key={id} route={route}/>
            )
          }
          )}
        </div>
      }
    </div>
  );
};

export default Post;

