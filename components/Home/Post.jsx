import { useDispatch, useSelector } from "react-redux";
import { dislikePostAction, getAllPostsAction, likePostAction } from "@/redux/slices/postSlice/postSlice";
import Cookies from "js-cookie";
import EachPost from "./EachPost";
import {
  EnvelopeSvg,
  ErrorSvg,
  ResendLdSvg,
  CautionSvg, BtnloadSvg,
} from "../../components";

const Post = ({ posts, loading }) => {
  const dispatch = useDispatch()

  const handleLike = async (id) => {
    try {
      const res = await dispatch(likePostAction({ postId: id }))
      console.log(res);
    } catch (error) {
      console.log({ error });
    }
  }

  return (
    <div>
      {loading ? <div style={{ height: "78vh" }} className="d-flex justify-content-center align-items-center">
        <div style={{paddingTop: "30px"}} role="status">
          <ResendLdSvg />
        </div>
      </div> :
        <div> {posts.map((post, id) => <EachPost post={post} key={id} />)}
        </div>
      }
    </div>
  );
};

export default Post;
