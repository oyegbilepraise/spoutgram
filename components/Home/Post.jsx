import { InView } from 'react-intersection-observer';
import EachPost from "./EachPost";
import { ResendLdSvg } from "../../components";

const Post = ({ posts, loading }) => {

  return (
    <div>
      {loading ? <div style={{ height: "78vh" }} className="d-flex justify-content-center align-items-center">
        <div style={{ paddingTop: "30px" }} role="status">
          <ResendLdSvg />
        </div>
      </div> :
        <div>
          {posts.map((post, id) => {
            return (<InView as="div" triggerOnce="true" threshold='0.5' onChange={(inView, entry) => console.log({ inView, id })}>
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