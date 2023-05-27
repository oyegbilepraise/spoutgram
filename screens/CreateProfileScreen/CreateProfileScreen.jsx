import "./createProfile.module.css";
import { useSelector } from "react-redux";
import styles from "@/layout/AuthLayout/AuthLayout.module.css";

// Components
import { AuthLayout } from "@/layout";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import Routes from "@/utils/routes";
import { baseUrl } from "@/redux/baseUrl";
import Cookies from "js-cookie";
import axios from "axios";
import FormComp from "@/components/CreateProfile/FormComp";

const CreateProfileScreen = () => {
  const router = useRouter();
  //get profile creation details from store
  const { loading, appError, profile } = useSelector(
    (state) => state?.userDetails?.profileCreation
  );

  // prompting user they are about to reload or leave the page
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = "";
      return "Are you sure you want to refresh the page? All form input will be lost.";
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  // after creating profile check if user is verified if true send user to homepage else verify page
  useEffect(() => {
    if (profile.updatedUser) {
      if (!profile?.updatedUser?.isAccountVerified) {
        router.push(Routes.VERIFY);
        return;
      } else {
        router.push(Routes.HOME);
        return;
      }
    }
  }, [profile.updatedUser, router]);

  const [showNameError, setShowNameError] = useState(false);
  const [suggestedUName, setSuggestedUName] = useState("");

  function handleNameBlur() {
    setShowNameError(false);
  }

  // const handleUnameBlur = async () => {
  //   const token = Cookies.get("token");
  //   const res = await axios.post(
  //     baseUrl + "/users/verify-username",
  //     {
  //       username: formik.values.username,
  //     },
  //     { headers: { Authorization: "Bearer " + token } }
  //   );

  //   if (res.data.status) {
  //     setSuggestedUName("");
  //   } else {
  //     if (res?.data?.suggested) {
  //       let a = res?.data?.suggested;
  //       let b = [];
  //       a.forEach((item, i) => {
  //         b.push({ value: 1, label: item });
  //       });
  //       setSuggestedUName(b);
  //     } else {
  //       setSuggestedUName("");
  //     }
  //   }

  //   //   console.log({ re: res.data });
  //   // setShowUnameError(false);
  // };

  // date code
  const [months] = useState([
    { id: 1, label: "Jan", value: 1 },
    { id: 2, label: "Feb", value: 2 },
    { id: 3, label: "Mar", value: 3 },
    { id: 4, label: "Apr", value: 4 },
    { id: 5, label: "May", value: 5 },
    { id: 6, label: "Jun", value: 6 },
    { id: 7, label: "Jul", value: 7 },
    { id: 8, label: "Aug", value: 8 },
    { id: 9, label: "Sep", value: 9 },
    { id: 10, label: "Oct", value: 10 },
    { id: 11, label: "Nov", value: 11 },
    { id: 12, label: "Dec", value: 12 },
  ]);
  const [days, setDays] = useState([]);
  const [years, setYears] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  // Function to generate days based on selected month and year
  const generateDays = (month, year) => {
    const monthsWith31Days = [1, 3, 5, 7, 8, 10, 12];
    const monthsWith30Days = [4, 6, 9, 11];
    let maxDays = 31;

    if (monthsWith30Days.includes(month)) {
      maxDays = 30;
    } else if (month === 2) {
      if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
        maxDays = 29; // Leap year
      } else {
        maxDays = 28; // Non-leap year
      }
    }

    const daysArray = Array.from({ length: maxDays }, (_, index) => index + 1);
    setDays(daysArray);
  };

  // Fill the years select options dynamically
  const fillYears = () => {
    const currentYear = new Date().getFullYear();
    const yearsArray = Array.from(
      { length: 100 },
      (_, index) => currentYear - index
    );
    setYears(yearsArray);
  };

  // Event handler for month selection
  const handleMonthChange = (event) => {
    const month = parseInt(event.target.value, 10);
    setSelectedMonth(month);
    generateDays(month, selectedYear);
  };

  // Event handler for day selection
  const handleDayChange = (event) => {
    const day = parseInt(event.target.value, 10);
    setSelectedDay(day);
  };

  // Event handler for year selection
  const handleYearChange = (event) => {
    const year = parseInt(event.target.value, 10);
    setSelectedYear(year);
    generateDays(selectedMonth, year);
  };

  // Fill the years select options when the component mounts
  useEffect(() => {
    fillYears();
  }, []);

  // date code

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

  const formProps = {
    image,
    handleImageUpload,
    appError,
    profile,
    handleNameBlur,
    suggestedUName,
    selectedMonth,
    selectedDay,
    selectedYear,
    days,
    months,
    years,
    loading,
    handleMonthChange,
    handleDayChange,
    handleYearChange,
    handleImageRemove,
  };

  //this is the api code to get the user's location...
  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await axios.get(
          "https://api.ipstack.com/check?access_key=[I_will_add_my_api_keys_here_praise_thanks]"
        );
        //this is free, but I want to go for the paid plan so I will update it here.
        const { country_name, city, latitude, longitude } = response.data;
        const locationData = {
          country: country_name,
          city,
          latitude,
          longitude,
        };
        Cookies.set("userLocation", JSON.stringify(locationData));
        console.log("Location data stored:", locationData);
      } catch (error) {
        console.error("Failed to fetch location:", error);
      }
    };
    fetchLocation();
  }, []);

  return (
    <AuthLayout>
      <main className={styles.__main} role="main">
        <div className={styles._xparnts}>
          <div className={styles._xparnts_cvr}>
            {/* api messages  */}
            {/* {loading && <p>Creating profile ...</p>} */}
            {/* {appError && <p>{appError}</p>} */}
            {profile?.message && <p>{profile?.message}</p>}
            {/* {profile.updatedUser && <p>profile created successfully</p>} */}
            {/* api messages  */}

            <span className={styles.vdf_data}>Add your info.</span>

            {/* this is the form that would proccess all the users data for create-profile */}
            <FormComp formProps={formProps} />
            {/* this is the form that would proccess all the users data for create-profile */}
          </div>
        </div>
      </main>
    </AuthLayout>
  );
};

export default CreateProfileScreen;
