import { getUserAction } from "@/redux/slices/authSlice/authSlice";
import Routes from "@/utils/routes";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ProtectedRoute = (WrappedComponent) => {
  const Wrapper = (props) => {
    const [error, setError] = useState("");
    const router = useRouter();
    const dispatch = useDispatch();
    const { user, apiError } = useSelector((state) => state?.auth?.getUser);
    const isAuthenticated = !!Cookies.get("token");

    useEffect(() => {
      // If user is not authenticated, redirect to login page
      if (!isAuthenticated) {
        router.push(Routes.LOGIN);
        return;
      }

      // Get user details
      dispatch(getUserAction(isAuthenticated));

      // Handle api error
      if (apiError) {
        setError("Oops! Something went wrong. Please try again later.");
        return;
      }

      // If user is not verified, redirect to verify page
      if (user && !user.isVerified && router.pathname !== Routes.VERIFY) {
        router.push(Routes.VERIFY);
        return;
      }

      // If user is verified and has no profile, go to create profile page
      if (user && !user.profile) {
        router.push(Routes.CREATE_PROFILE);
        return;
      }
    }, []);

    // Render error message or wrapped component
    return error ? <p>{error}</p> : <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default ProtectedRoute;
