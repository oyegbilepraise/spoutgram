import { MessagesLayout } from '@/layout'
import { MessagesLeft, MessagesRight } from '@/components'
import { useDispatch, useSelector } from 'react-redux';
import { getMessagedFriends } from '@/redux/slices/messageSlice/messageSlice';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

const MessagesScreen = () => {
    const { user, apiError } = useSelector((state) => state?.auth?.getUser);
    const [messages, setMessages] = useState('')
    const [loading, setLoading] = useState(true)
    const [openMessage, setOpenMessage] = useState(false)
    const [eachMessage, setEachMessage] = useState('')
    const dispatch = useDispatch();
    const token = Cookies.get("token");

    useEffect(() => {
        getFreinds()
    }, [])

    const handleMessage = async (m) => {
        setOpenMessage(false)
        console.log({m});
        setEachMessage('')
        setEachMessage(m)
        setOpenMessage(true)
    }

    const getFreinds = async () => {
        try {
            const res = await dispatch(getMessagedFriends(token))
            setMessages(res.payload.data)
            setLoading(false)
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <MessagesLayout>
            <MessagesRight messages={messages} loading={loading} handleMessage={handleMessage} />
            {openMessage && <MessagesLeft eachMessage={eachMessage} />}
        </MessagesLayout>
    )
}

export default MessagesScreen;