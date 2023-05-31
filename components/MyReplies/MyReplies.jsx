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
    {/* {user_comments.success && user_comments?.data?.comments?.map(comment => {
    return(
    <EachPost post={comment} />
    )
    })} */}
    {user_comments.success && user_comments?.data?.reply?.map((each,id) => (
    <div key={id}>
    <EachComment comment={each?.comment[0]} />
    {/* <div className='replies' style={{width:'60%'}}>
   {each?.replies.map((reply,Id)=>(
    <div key={Id}>
    <EachReply reply={reply}/>
    </div>
    ))}
    </div> */}
    </div>

    )
  )}
    </div>
  )
}

export default MyReplies