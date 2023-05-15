import img from '../../images/default-photo.svg'
import Image from 'next/image'
import styles from '@/layout/HomeLayout/HomeLayout.module.css'

const SettingsRight = () => {
    return  (
        <div className={styles.settings___right__hng}>
            {/* content */}
            <div className={styles.nbyd}>
                <div>
                <svg
                    className={styles.nbyd__svg}
                    width={18}
                    height={22}
                    viewBox="0 0 18 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {" "}
                    <rect
                    x="0.5"
                    y="18.5"
                    width={17}
                    height={1}
                    rx="0.5"
                    fill="rgb(200, 200, 200)"
                    stroke="rgb(200, 200, 200)"
                    />{" "}
                    <rect
                    x="0.5"
                    y="10.5"
                    width={17}
                    height={1}
                    rx="0.5"
                    fill="rgb(200, 200, 200)"
                    stroke="rgb(200, 200, 200)"
                    />{" "}
                    <rect
                    x="0.5"
                    y="2.5"
                    width={17}
                    height={1}
                    rx="0.5"
                    fill="rgb(200, 200, 200)"
                    stroke="rgb(200, 200, 200)"
                    />{" "}
                    <rect
                    x="13.5"
                    y="0.5"
                    width={1}
                    height={5}
                    rx="0.5"
                    fill="rgb(200, 200, 200)"
                    stroke="rgb(200, 200, 200)"
                    />{" "}
                    <rect
                    x="3.5"
                    y="8.5"
                    width={1}
                    height={5}
                    rx="0.5"
                    fill="rgb(200, 200, 200)"
                    stroke="rgb(200, 200, 200)"
                    />{" "}
                    <rect
                    x="13.5"
                    y="16.5"
                    width={1}
                    height={5}
                    rx="0.5"
                    fill="rgb(200, 200, 200)"
                    stroke="rgb(200, 200, 200)"
                    />{" "}
                </svg>
                <div>
                    <span className={styles.nby_txt}>Tap on any options to see details.</span>
                </div>
                </div>
            </div>
            {/* main-content */}
            <div className="class__ais___dv" style={{ display: "none" }}>
                {/* ais */}
                <div className="account__information__settings" style={{ display: "none" }}>
                {/* {{!-- {{>aiscontent}} --}} */}
                <nav>
                    <div>
                    <span className="not-home-nav-text settings_nav_text">
                        Account Information
                    </span>
                    </div>
                </nav>
                <div className="ais__container">
                    <div className="ais_f__div">
                    <h6>Your account information</h6>
                    </div>
                    <div className="ais__div">
                    <h5>Display Name</h5>
                    <h6>Penuel John</h6>
                    </div>
                    <div className="ais__div">
                    <h5>Username</h5>
                    <h6>@penueljohn</h6>
                    </div>
                    <div className="ais__div">
                    <h5>Email</h5>
                    <h6>myemail@gmail.com</h6>
                    </div>
                    <div className="ais__div">
                    <h5>Country</h5>
                    <h6>United State</h6>
                    </div>
                    <div className="ais__div">
                    <h5>Date of Birth</h5>
                    <h6>10/20/2022</h6>
                    </div>
                    <div className="ais__div">
                    <h5>Date Joined</h5>
                    <h6>January 2004</h6>
                    </div>
                </div>
                </div>
                {/* ais */}
                {/* cps */}
                <form action="">
                {/*  */}
                <div className="change__password__settings" style={{ display: "none" }}>
                    {/* {{!-- {{>cpscontent}} --}} */}
                    <nav>
                    <div>
                        <span className="not-home-nav-text settings_nav_text">
                        Change Your Password
                        </span>
                    </div>
                    </nav>
                    <div className="cps__container">
                    <div className="ais_f__div">
                        <h6>Change password to your profile any time.</h6>
                    </div>
                    <div className="x___y_z" style={{ position: "relative" }}>
                        {/* {{! password }} */}
                        <input
                        type="password"
                        name="current_password"
                        placeholder="a"
                        className="reset__pwd__settn"
                        spellCheck="false"
                        />
                        <label htmlFor="user" className="form-label label-text">
                        Current Password
                        </label>
                        <div className="toogle__passwd" />
                    </div>
                    <div>
                        <div style={{ position: "relative" }}>
                        {/* {{! password }} */}
                        <input
                            type="password"
                            placeholder="b"
                            className="reset__pwd__settn"
                            spellCheck="false"
                            name="password"
                        />
                        <label htmlFor="user" className="form-label label-text">
                            New Password
                        </label>
                        <div className="toogle__passwd" />
                        </div>
                        <div style={{ position: "relative" }}>
                        {/* {{! password }} */}
                        <input
                            type="password"
                            placeholder="c"
                            className="reset__pwd__settn"
                            spellCheck="false"
                            name="confirm_password"
                        />
                        <label htmlFor="user" className="form-label label-text">
                            Confirm Password
                        </label>
                        <div className="toogle__passwd" />
                        </div>
                    </div>
                    <div>
                        {/* {{! verify btn }} */}
                        <button type="submit" className="verify-card-btn">
                        SAVE CHANGES
                        </button>
                    </div>
                    </div>
                </div>
                {/*  */}
                </form>
                {/* cps */}
                {/* pis */}
                <div className="payment__information__settings" style={{ display: "none" }}>
                {/* {{!-- {{>piscontent}} --}} */}
                <nav>
                    <div>
                    <span className="not-home-nav-text settings_nav_text">
                        Manage Payment Information
                    </span>
                    </div>
                </nav>
                <div className="pis__container">
                    <div className="ais_f__div">
                    <h6>Manage your payment method and information</h6>
                    </div>
                    <div className="x___y_z">
                    <div>
                        {"{"}
                        {"{"}#if cards{"}"}
                        {"}"}
                        <h6 className="addcd">PAYMENT CARDS</h6>
                        {"{"}
                        {"{"}#each cards{"}"}
                        {"}"}
                        <div className="bank__cards">
                        <span className="card-card added__card">
                            {"{"}
                            {"{"} this.type {"}"}
                            {"}"}
                        </span>
                        <span className="card-span">
                            {"{"}
                            {"{"} this.date {"}"}
                            {"}"}
                        </span>
                        <span className="card-span">
                            <span className="hide__details">•••• •••• ••••</span>
                            {"{"}
                            {"{"} card.number {"}"}
                            {"}"}
                        </span>
                        <span className="sxvgd__Opkl">Card owner name</span>
                        </div>
                        {"{"}
                        {"{"}/each{"}"}
                        {"}"}
                        {"{"}
                        {"{"}else{"}"}
                        {"}"}
                        <div
                        style={{
                            textAlign: "center",
                            marginTop: 30,
                            paddingTop: 70,
                            paddingBottom: 70
                        }}
                        >
                        <svg
                            className="nby__svg"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#808080"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <rect x={2} y={4} width={20} height={16} rx={2} />
                            <path d="M7 15h0M2 9.5h20"></path>
                        </svg>
                        <h6 className="ydhacd">You haven't added any card yet.</h6>
                        </div>
                        {"{"}
                        {"{"}/if{"}"}
                        {"}"}
                    </div>
                    </div>
                    <div>
                    <a href="/setup/payments">
                        <button className="verify-card-btn">ADD CARD</button>
                    </a>
                    </div>
                </div>
                </div>
                {/* pis */}
                {/* wis */}
                <div
                className="withdrawal__information__settings"
                style={{ display: "noe" }}
                >
                {/* {{!-- {{>wiscontent}} --}} */}
                <nav>
                    <div>
                    <span className="not-home-nav-text settings_nav_text">
                        Withdrawal Information Settings
                    </span>
                    </div>
                </nav>
                <div className="wis__container">
                    <div className="ais_f__div">
                    <h6>Manage method to recieve payments</h6>
                    </div>
                    <div className="x___y_z">
                    <div>
                        <h6 className="ydhacd">No method to recieve payment</h6>
                    </div>
                    <div className="customc__div">
                        <div className="custom__class">
                        <h6>PayPal</h6>
                        <h6>Your Paypal email account:</h6>
                        <h6>
                            {"{"}
                            {"{"} user.paypal {"}"}
                            {"}"}
                            <span>EDIT</span>
                        </h6>
                        </div>
                    </div>
                    <div className="customc__div">
                        <div className="custom__class">
                        <h6>Bitcoin</h6>
                        <h6 style={{ display: "none" }} />
                        <h6>
                            {"{"}
                            {"{"} user.bitcoin {"}"}
                            {"}"}
                            <span>EDIT</span>
                        </h6>
                        </div>
                        <div className="custom__class">
                        <h6>Dogecoin</h6>
                        <h6 style={{ display: "none" }} />
                        <h6>
                            {"{"}
                            {"{"} user.dogecoin {"}"}
                            {"}"}
                            <span>EDIT</span>
                        </h6>
                        </div>
                        <div className="custom__class">
                        <h6>USDC</h6>
                        <h6 style={{ display: "none" }} />
                        <h6>
                            {"{"}
                            {"{"} user.usdc {"}"}
                            {"}"}
                            <span>EDIT</span>
                        </h6>
                        </div>
                    </div>
                    </div>
                    <div>
                    <a href="/setup/banking">
                        <button className="verify-card-btn addatrp_btn">
                        ADD ACCOUNT TO RECIEVE PAYMENT
                        </button>
                    </a>
                    </div>
                </div>
                </div>
                {/* wis */}
            </div>
        </div>
    )
}
    
export default SettingsRight