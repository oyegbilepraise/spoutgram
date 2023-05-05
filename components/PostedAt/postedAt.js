import ReactTimeAgo from 'react-time-ago'

const PostedAt = ({time}) => {
  return (
    <div>
    <ReactTimeAgo timeStyle='twitter' date={time} locale="en-US" />
    </div>
  )
}

export default PostedAt