import { useDispatch, useSelector } from "react-redux";
import { dislikePostAction, getAllPostsAction, likePostAction } from "@/redux/slices/postSlice/postSlice";
import { InView } from 'react-intersection-observer';
import EachPost from "./EachPost";

const Post = ({ posts, loading }) => {
  const dispatch = useDispatch()

  return (
    <div>
      {loading ? <div style={{ height: "78vh" }} className="d-flex justify-content-center align-items-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div> :
        <div>
          {posts.map((post, id) => {
            return (<InView as="div" threshold='0.5' onChange={(inView, entry) => console.log({inView, id})}>
              <EachPost post={post} key={id} />
            </InView>
            )
          }
          )}
        </div>
      }
    </div>
  );
};

export default Post;