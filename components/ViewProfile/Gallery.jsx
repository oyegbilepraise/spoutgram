import styles from "@/layout/HomeLayout/HomeLayout.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ImageCarousels from "../Home/ImageCarousels";

const Gallery = ({ posts, loading }) => {
  const router = useRouter();
  const { userId } = router.query;
  const [activeGallery, setActiveGallery] = useState("all");

  const mergedImagesArray = posts?.map(obj => obj.postImage)
    .reduce((mergedArray, imagesArray) => mergedArray.concat(imagesArray), []);

  useEffect(() => {
    const { tab, gallery_type } = router.query;
    if (tab === "gallery" && gallery_type) {
      setActiveGallery(gallery_type);
    }
  }, [router.query.gallery_type]);

  return (
    <div id="columnTwo">
      {/* components */}
      <div className={styles.components_selection} style={{ paddingTop: 18 }}>
        <div
          className={styles.components_selection_header}
          style={{ paddingTop: 10 }}
        >
          <div>
            <h6
              className={`${styles.all__tab} ${styles.csh_h6} ${activeGallery === "all" && styles.active_csh
                }`}
            >
              <Link href={`/${userId}?tab=gallery&&gallery_type=all`}>All</Link>
            </h6>
          </div>
          <div>
            <h6
              className={`${styles.all__tab} ${styles.csh_h6} ${activeGallery === "photo" && styles.active_csh
                }`}
            >
              <Link href={`/${userId}?tab=gallery&&gallery_type=photo`}>
                Photo
              </Link>
            </h6>
          </div>
          <div>
            <h6
              className={`${styles.all__tab} ${styles.csh_h6} ${activeGallery === "video" && styles.active_csh
                }`}
            >
              <Link href={`/${userId}?tab=gallery&&gallery_type=video`}>
                Video
              </Link>
            </h6>
          </div>
        </div>

        <div>
          {activeGallery === "all" && (
            <div className={`${styles.all__grid__js} ${styles.all_grid}`}>
              {/* all-grid */}
              <div style={{ height: 200, position: "relative" }}>
              {
                  mergedImagesArray ? (
                    <ImageCarousels postImage={mergedImagesArray} />
                  ) : <h6 className={styles.npy__xyz}>No photos yet.</h6>

                }              </div>
            </div>
          )}

          {activeGallery === "photo" && (
            <div className={`${styles.photo__grid__js} ${styles.photos_grid}`}>
              {/* photos-grid */}
              <div style={{ height: 200, position: "relative" }}>
                {
                  mergedImagesArray ? (
                    <ImageCarousels postImage={mergedImagesArray} />
                  ) : <h6 className={styles.npy__xyz}>No photos yet.</h6>

                }
              </div>
            </div>
          )}

          {activeGallery === "video" && (
            <div className={`${styles.vid__grid__js} ${styles.videos_grid}`}>
              {/* videos-grid */}
              <div style={{ height: 200, position: "relative" }}>
                <h6 className={styles.npy__xyz}>No videos yet.</h6>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* components */}
    </div>
  );
};

export default Gallery;
