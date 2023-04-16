import { TosLayout } from '@/layout'
import Link from 'next/link'

import styles from '@/layout/AuthLayout/AuthLayout.module.css'



const PrivacypScreen = () => {
    return (
        <TosLayout>
            <>
              <Link href="/lol">
                <span className={styles.spanner}>This page works</span>
              </Link>
            </>
        </TosLayout>
    )
}

export default PrivacypScreen