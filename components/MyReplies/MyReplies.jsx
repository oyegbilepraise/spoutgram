import { getUserCommentsAction } from '@/redux/slices/commentSlice/commentSlice'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import EachPost from '../Home/EachPost'
import EachComment from '../Home/EachComment'
// import '../MyReplies/MyReplies.css'
// import 'MyReplies.css'
import EachReply from '../Home/EachReply'

const MyReplies = ({id}) => {
const dispatch=useDispatch()
const {user_comments}=useSelector(state=>state?.comment?.userComments)

useEffect(() => {
dispatch(getUserCommentsAction({user_id:id}))
}, [id])

console.log(user_comments);

  return (
    <div>

  {/* Post and its comments */}
    {user_comments.success && user_comments?.data?.comments?.map((comment,id) => {
    return(
    <div key={id} style={{marginBottom:'10px'}}>
    <EachPost post={comment} />
     <div className='comments' style={{width:'80%'}}>
   {comment?.comments.map((commenti,Id)=>(
    <div key={Id}>
    <EachComment comment={commenti} individualPost={comment}/>
    </div>
    ))}
    </div>
    </div>
    )
    })}

  {/* Comment and its replies */}
  <h3>Replies</h3>
    {user_comments.success && user_comments?.data?.reply?.map((each,id) => (
    <div key={id}>
    <EachComment comment={each?.comment[0]} individualPost={each} />
    <div className='replies' style={{width:'80%'}}>
   {each?.replies.map((reply,Id)=>(
    <div key={Id}>
    <EachReply reply={reply} individualComment={each}/>
    </div>
    ))}
    </div>
    </div>
    )
  )}
    </div>
  )
}

export default MyReplies