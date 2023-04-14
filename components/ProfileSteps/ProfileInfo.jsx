import Select from 'react-select'

const ProfileInfo = (props) => {
 const userStatus = [
    {
      id: 'creator',
      label: 'Creator',
     } ,
   {
    id: 'organization',
    label: 'Organization',
   },
   {
    id: 'none',
    label: 'None',
   }  
  ]
  const status = userStatus.map(s => {
    return {
      label: s.label,
      value: s.id,
    }
  })
  return (
    <div className="_xparnts_cvr">

    <div className="xpnd_inpts_new" style={{ paddingTop: "14px" }}>

      <div id="react_wrapper_one" className="react__wrapper__component">
        <div className="ibistro__xyz">
          <div>
            {/* name  */}
            <input type="text" placeholder="Name" className="data-content-pass" />
            <span className="_0013_span">

              {/* error message */}
              <svg className="invalid_svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                viewBox="0 0 24 24" fill="none" stroke="#01A8EA" strokeWidth="2" strokeLinecap="round"
                strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>
              </svg>
              Name is too short!
              {/* error message  */}

            </span>
          </div>
          <div style={{ position: "relative" }}>
            {/* username */}
            <input type="text" placeholder="Username" className="data-content-pass" />

            {/* show is username is available */}
            <span>
              <svg className="available" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                fill="none" stroke="#01A8EA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </span>
            {/* show is username is available */}

            <span className="_0013_span">

              {/* error message */}
              <svg className="invalid_svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                viewBox="0 0 24 24" fill="none" stroke="#01A8EA" strokeWidth="2" strokeLinecap="round"
                strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>
              </svg>
              Username is taken!
              {/* error message */}

            </span>
          </div>
        </div>
        <div>

          <div>
            <span className="stats__ttl">Status</span>
            <Select options={status}/>
          </div>

          {/* if user picks Creator as an option, show this */}
          <div>
            <span className="span-checkb-data">
              <input type="checkbox" name="" id="" />
              <span className="span_x_xsd">Are your contents suitable for audience 18 and above?</span>
            </span>

            {/* if you ticks the checkbox, show this */}
            <span className="alert-user-choice">
              <svg className="invalid_svg_2" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                viewBox="0 0 24 24" fill="none" stroke="#01A8EA" strokeWidth="2" strokeLinecap="round"
                strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>
              </svg>
              Audience below 18 would not be allowed to see, or subscribe to your contents.
            </span>
          </div>


          {/* if user picks Organization, show this  */}
          {/* custom select  */}
          <div className="select__all__component" style={{ marginTop: "10px" }}>
            <div className="dropdown-option">

              {/* selected status */}
              <span>Organization category</span>

              {/* error message */}
              <span>
                <svg className="no-options-alert" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                  viewBox="0 0 24 24" fill="none" stroke="#fe191d" strokeWidth="2" strokeLinecap="round"
                  strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="16" x2="12" y2="12"></line>
                  <line x1="12" y1="8" x2="12.01" y2="8"></line>
                </svg>
              </span>
              {/* error message */}

            </div>

            {/* dropdown */}
            <div className="dropdown">

              {/* options */}
              <div>
                <span className="select__data">Non-Profit</span>
              </div>
              <div>
                <span className="select__data">Technology</span>
              </div>
              <div>
                <span className="select__data">Pharmaceuticals</span>
              </div>
              <div>
                <span className="select__data">Religious</span>
              </div>
              <div>
                <span className="select__data">Other</span>
              </div>
              {/* options */}

            </div>
          </div>
          {/* custom select */}

          {/* if user enters other ---- show this */}
          <div style={{ paddingTop: "7px" }}>
            <input type="text" placeholder="Other" className="data-content-pass" />

            <span className="_0013_span">

              {/* error message */}
              <svg className="invalid_svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                viewBox="0 0 24 24" fill="none" stroke="#01A8EA" strokeWidth="2" strokeLinecap="round"
                strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>
              </svg>
              This field is required!
              {/* error message */}

            </span>
          </div>

        </div>
      </div>


    </div>

   

  </div>
  )
}

export default ProfileInfo;