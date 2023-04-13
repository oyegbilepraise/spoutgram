import { MessagesLayout } from '@/layout'
import { MessagesLeft, MessagesRight } from '@/components'
import Image from 'next/image'
import img from '../../images/default-photo.svg'
import banner from '../../images/banner.jpg'

import styles from '@/layout/HomeLayout/HomeLayout.module.css'

const MessagesScreen = () => {
    return (
        <MessagesLayout>
            <MessagesRight/>
            <MessagesLeft/>
        </MessagesLayout>
    )
}

export default MessagesScreen