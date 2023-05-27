import EachPost from "./EachPost";
import { ResendLdSvg } from "../../components";



const Post = ({posts, loading}) => {
  return (
    <div>
      {loading ? <div style={{ height: "78vh" }} className="d-flex justify-content-center align-items-center">
        <div style={{ paddingTop: "30px" }} role="status">
          <ResendLdSvg />
        </div>
      </div> :
        <div>
          {posts?.map((post, id) => {
            return (
              <EachPost post={post} key={id} />
            ) 
          }
          )}
        </div>
      }
    </div>
  );
};

export default Post;

