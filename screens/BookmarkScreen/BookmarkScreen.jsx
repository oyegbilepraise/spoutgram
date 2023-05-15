import { HomeLayout } from '@/layout'
import Image from 'next/image'
import img from '../../images/default-photo.svg'
import styles from '@/layout/HomeLayout/HomeLayout.module.css'
import { useDispatch } from 'react-redux'
import { getAllBoomarks } from '@/redux/slices/postSlice/postSlice'
import { useEffect, useState } from 'react'
import Post from '@/components/Home/Post'

const BookmarkScreen = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true)
    const [bookmarks, setBookmarks] = useState()

    useEffect(() => {
        getBoomarks()
    }, [])

    const getBoomarks = async () => {
        try {
            const res = await dispatch(getAllBoomarks())
            console.log(res);
            setBookmarks(res.payload.data)
            setLoading(false);
        } catch (error) {
            console.log(error);
            console.log('error');
        }
    }

    return (
        <HomeLayout>
            <div>
                <nav className={styles.___main_nav}>
                    <div>
                        <span class={styles.icon_back}>
                            <svg class={styles._00_history__back} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(90, 90, 90)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H6M12 5l-7 7 7 7" /></svg>
                        </span>
                        <span class={styles.not_home_nav_text}>Bookmarks</span>
                        <span class={styles.data_count_bookm}>
                            0 post
                        </span>
                    </div>
                </nav>
                {/* div.timeline -> middle */}
                <div class={`${styles.timeline} ${styles._000middlebar}`}>
                    {loading ? (
                        <div>
                            loading...
                            {/* <Loader /> */}
                        </div>

                    ) : (
                        <div>
                            <Post posts={bookmarks} loading={loading} />
                        </div>
                    )}
                    {/* <!-- no bookmarks yet div --> */}
                    {bookmarks && bookmarks.length > 0 && (
                        <div class={styles.nbyd}>
                            <div>
                                <svg class={styles.nbyd__svg} width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke="rgb(200, 200, 200)" d="M6.57426 12.9227L0.8 16.5522V4C0.8 2.23269 2.23269 0.8 4 0.8H10C11.7673 0.8 13.2 2.23269 13.2 4V16.5522L7.42574 12.9227L7 12.6551L6.57426 12.9227Z" stroke-width="1.6" />
                                </svg>
                                <div>
                                    <span class={styles.nby_txt}>No bookmarks yet.</span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            {/* div.timeline -> middle */}
        </HomeLayout>
    )
}

export default BookmarkScreen