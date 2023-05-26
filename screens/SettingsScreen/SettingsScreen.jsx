import { SettingsLayout } from '@/layout'
import { SettingsLeft, SettingsRight } from '@/components'
import Image from 'next/image'
import img from '../../images/default-photo.svg'
// import banner from '../../images/banner.jpg'

import styles from '@/layout/HomeLayout/HomeLayout.module.css'

const SettingsScreen = () => {
    return (
        <SettingsLayout>
          <SettingsLeft />
          <SettingsRight />
        </SettingsLayout>
    )
}

export default SettingsScreen