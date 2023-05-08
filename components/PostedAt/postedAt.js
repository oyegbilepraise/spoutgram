import { useEffect, useState } from 'react';
import ReactTimeAgo from 'react-time-ago'

const PostedAt = ({time}) => {
  // const [isAMinute, setIsAMinute] = useState(false)
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setIsAMinute(() => {
  //       const currentTime = new Date();
  // const timeDiffMinutes = Math.floor((currentTime - time) / (1000 * 60));
  // console.log("seen");
  //       if (timeDiffMinutes == 1) {
  //         clearInterval(interval);
  //         console.log('stopped');
  //       return true;
  //       }
  //     });
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div>
    {/* {isAMinute?<ReactTimeAgo timeStyle='twitter' date={time} locale="en-US" />:'just now'} */}
   <ReactTimeAgo timeStyle='twitter' date={time} locale="en-US" />
    </div>
  )
}

export default PostedAt