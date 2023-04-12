import { HomeLayout } from '@/layout'
import Image from 'next/image'
import img from '../../images/default-photo.svg'

const CreatePostScreen = () => {
  return (
    <HomeLayout>
      {/* div.timeline -> middle */}
      <div class="timeline _000middlebar">
            <nav>
                <div>
                    <span class="icon_back">
                        <svg class="_00_history__back" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(90, 90, 90)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H6M12 5l-7 7 7 7"/></svg>
                    </span>
                    <span class="not-home-nav-text">Create Post</span>
                </div>
            </nav>
       </div>
      {/* div.timeline -> middle */}
    </HomeLayout>
  )
}

export default CreatePostScreen