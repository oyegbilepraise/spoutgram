import { MessagesLayout } from '@/layout'
import { MessagesLeft, MessagesRight } from '@/components'
import { useSelector } from 'react-redux';

const MessagesScreen = () => {
    const { user, apiError } = useSelector((state) => state?.auth?.getUser);

    console.log({ user });
    return (
        <MessagesLayout>
            <MessagesRight />
            <MessagesLeft />
        </MessagesLayout>
    )
}

export default MessagesScreen