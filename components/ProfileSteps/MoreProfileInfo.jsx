import Image from 'next/image';
import defaultAvatar from '../../images/default-photo.svg'

const MoreProfileInfo = () => {

  return (
    <div className="_xparnts_cvr">

    <div className="xpnd_inpts_new" style={{ paddingTop: "14px" }}>

      <div id="react_wrapper_three" className="react__wrapper__component">
        <div className="top__wrapper">
          <div className="image__wrapper__">
            <Image alt='default avatar' src={defaultAvatar} className="x_xjhhl_img" width="22" height="22" />
          </div>
          {/* svg camera to tap to upload picture */}
          <svg className="camera" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
            fill="none" stroke="#808080" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <g transform="translate(2 3)">
              <path d="M20 16a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3l2-3h6l2 3h3a2 2 0 0 1 2 2v11z" />
              <circle cx="10" cy="10" r="4" />
            </g>
          </svg>
          {/* svg  */}
        </div>

        <span className="span-dta-vn">Add your profile picture</span>

        <div>
          <span className="_00sxtry">You can skip this step, and Create Profile.</span>
        </div>
      </div>


    </div>

  </div>
  )
}

export default MoreProfileInfo;





