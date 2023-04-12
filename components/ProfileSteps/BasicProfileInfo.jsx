
const BasicProfileInfo = () => {

  return (
    <div className="_xparnts_cvr">

              <div className="xpnd_inpts_new" style={{ paddingTop: "14px" }}>

                <div id="react_wrapper_two" className="react__wrapper__component">
                  <div className="ibistro__xyz__one">
                    <div style={{ position: "relative" }}>
                      <input type="text" placeholder="Date of Birth" className="data-content-pass" />

                      {/* show if user is 15 yrs or older. note: date formats MM/DD/YYYY */}
                      <span>
                        <svg className="available" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                          fill="none" stroke="#01A8EA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                      </span>
                      <span className="_0013_span">

                        {/* error message */}
                        <svg className="invalid_svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                          viewBox="0 0 24 24" fill="none" stroke="#01A8EA" strokeWidth="2" strokeLinecap="round"
                          strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10"></circle>
                          <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>
                        </svg>
                        You must be 15 years or older!
                        {/* error message */}

                      </span>
                    </div>
                    <div style={{ position: "relative" }}>
                      <input type="text" placeholder="Location" className="data-content-pass" />
                      <span>
                        <svg className="available" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                          fill="none" stroke="#808080" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                      </span>
                    </div>
                    <div style={{ position: "relative" }}>
                      <input type="text" placeholder="Website or Bio link" className="data-content-pass" />
                      <span>
                        <svg className="available" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                          fill="none" stroke="#808080" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                        </svg>
                      </span>

                      <span className="_0013_span">

                        {/* error message */}
                        <svg className="invalid_svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                          viewBox="0 0 24 24" fill="none" stroke="#01A8EA" strokeWidth="2" strokeLinecap="round"
                          strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10"></circle>
                          <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>
                        </svg>
                        Invalid url!
                        {/* error message */}

                      </span>
                    </div>
                    <div style={{ marginBottom: '30px', height: '100px', position: 'relative' }}>
                      <textarea className="user-bio-data" placeholder="Bio"></textarea>
                      <span className="count_bio_words">
                        <span className="cbw_num">150</span>
                      </span>
                    </div>
                  </div>
                </div>


              </div>

        

            </div>
  )
}

export default BasicProfileInfo;



