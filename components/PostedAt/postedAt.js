import { useEffect, useState } from 'react';
import ReactTimeAgo from 'react-time-ago'
import moment from 'moment';


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

  let timeAge = moment.utc(time).local().startOf('seconds').fromNow() =="a few seconds ago" ?"now" :moment.utc(time).local().startOf('seconds').fromNow()

  // let timeAgeee = moment(time, 'dd MMM DD HH:mm:ss ZZ YYYY', 'en');

  // console.log("timeAgeee: ", timeAgeee);
  return (
    <div>
   <ReactTimeAgo timeStyle='twitter' date={time} locale="en-US" />
   {/* {timeAge} */}
    </div>
  )
}

export default PostedAt