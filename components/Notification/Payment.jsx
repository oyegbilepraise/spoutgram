import styles from "@/layout/HomeLayout/HomeLayout.module.css";

const Payment = () => {
  return (
    <div
      id="columnTwo"
      data-tag="payment-notification"
      className={styles.npd_body_content}
    >
      {/* no payment notifications */}
      <div className={styles.nbyd}>
        <div>
          <div>
            <svg
              className={styles.nbyd__svg}
              width={16}
              height={18}
              viewBox="0 0 16 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke="rgb(200, 200, 200)"
                d="M14.7332 7.14598L15.1512 14.2H0.848811L1.26683 7.14599C1.47802 3.58206 4.42982 0.8 8 0.8C11.5702 0.8 14.522 3.58205 14.7332 7.14598Z"
                strokeWidth="1.6"
              />
              <path
                stroke="rgb(200, 200, 200)"
                d="M7.99989 17.35C6.46431 17.35 5.20695 16.1588 5.10149 14.65H10.8983C10.7928 16.1588 9.53548 17.35 7.99989 17.35Z"
                strokeWidth="1.3"
              />
            </svg>
          </div>
          <div>
            <span className={styles.nby_txt}>
              No payment notifications yet.
            </span>
          </div>
        </div>
      </div>
      {/* no payment notifications */}
    </div>
  );
};

export default Payment;
