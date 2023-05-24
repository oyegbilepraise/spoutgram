
import styles from '@/layout/HomeLayout/HomeLayout.module.css'
import { TypeLoader } from "../../components";
import { useState, useRef, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendMessage } from "@/redux/slices/messageSlice/messageSlice";
import { useFormik } from "formik";
import { SocketContext } from "../../redux/context/socket.js"
import EachMessage from "./EachMessage";

const MessagesLeft = ({ eachMessage }) => {
  const socket = useContext(SocketContext);
  const [message, setMessage] = useState([...eachMessage.messages].reverse());
  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
    setMessage([...eachMessage.messages].reverse())
  }, [eachMessage])
  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, []);

  const formik = useFormik({
    initialValues: { text: "", image: null },
    onSubmit: (values) => {
      handleSendMessage(values)
    },
  });
  //emoji show and hide handler
  const [isEmojiOpen, setIsEmojiOpen] = useState(false);
  const emojiRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (emojiRef.current && !emojiRef.current.contains(event.target)) {
        setIsEmojiOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  function toggleEmoji() {
    setIsEmojiOpen(prevState => !prevState);
  }
  function handleButtonClickk(event) {
    event.stopPropagation();
    toggleEmoji();
  }
  //img upld
  const [image, setImage] = useState(null);
  // Function to handle image upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      setImage(e.target.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };
  // Function to handle image removal
  const handleImageRemove = () => {
    setImage(null);
  };
  const handleSendMessage = async (values) => {
    try {
      const formData = new FormData();
      formData.append("message", values.text);
      formData.append("status", false);
      formData.append("to", '645e311fba7dc336192a6577');
      const res = await dispatch(sendMessage(formData));
      if (res.payload) {
        console.log(res.payload);
        setMessage(prevData => [...prevData, res.payload.data]);
        // let newMessage = [ ...message, ...res.payload.data ]
        // setMessage(newMessage)
        // console.log(newMessage);
      }
      // values.text = "";
      // values.image = "";
      // setImage(null);
      // router.push(Routes.HOME);
    } catch (error) {
      console.log({ error });
    }
  }
  return (
    <>
      <div className={styles.left__mssg__div}>
        {/* if no messages */}
        {/* <div className="nbyd meesg_byd" style={{ display: "none" }}>
                    <div>
                        <svg
                            className={styles.nbyd__svg}
                            width={18}
                            height={18}
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                stroke="rgb(200, 200, 200)"
                                d="M5 0.8H13C15.3196 0.8 17.2 2.6804 17.2 5V11.2C17.2 13.5196 15.3196 15.4 13 15.4H5.85C4.09054 15.4 2.36054 15.8169 0.8 16.6111V5C0.8 2.6804 2.6804 0.8 5 0.8Z"
                                strokeWidth="1.6"
                            />
                            <rect
                                x="5.375"
                                y="6.375"
                                width="7.25"
                                height="0.75"
                                rx="0.375"
                                stroke="rgb(200, 200, 200)"
                                strokeWidth="0.75"
                            />
                            <rect
                                x="5.375"
                                y="9.375"
                                width="5.25"
                                height="0.75"
                                rx="0.375"
                                stroke="rgb(200, 200, 200)"
                                strokeWidth="0.75"
                            />
                        </svg>
                        <div>
                            <span className={styles.nby_txt}>No messages yet.</span>
                        </div>
                    </div>
                </div> */}
        <div>
          <EachMessage eachMessage={eachMessage} message={message} />
        </div>
      </div>
    </>
  )
}

export default MessagesLeft