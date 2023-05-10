import { ProfileLayout } from "@/layout";
import banner from "../../images/banner.jpg";
import styles from "@/layout/HomeLayout/HomeLayout.module.css";
import Gallery from "@/components/ViewProfile/Gallery";
import Post from "@/components/ViewProfile/Post";
import PodCast from "@/components/ViewProfile/PodCast";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";
import ProfileOverview from "@/components/ViewProfile/ProfileOverview";

const ProfileScreen = () => {

  // const router = useRouter(); 
  // const [currentTab, setCurrentTab] = useState("/");
  // const { userId } = router.query;

  //   get the current tab
  // useEffect(() => {
  //   const { tab } = router.query; 
  //   if (tab) {
  //     setCurrentTab(tab);
  //   } else {
  //     setCurrentTab("/");
  //   }
  // }, [router.query.tab]);

  return (
    <ProfileLayout>
      <>Hi</>
    </ProfileLayout>
  );
};

export default ProfileScreen;
