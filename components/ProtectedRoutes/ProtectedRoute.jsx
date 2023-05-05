import { getUserAction } from "@/redux/slices/authSlice/authSlice";
import Routes from "@/utils/routes";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
  const [error, setError] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();
  const { user, apiError } = useSelector((state) => state?.auth?.getUser);
  const isAuthenticated = Cookies.get("token");

  useEffect(() => {
    if (dispatch && dispatch !== null && dispatch !== undefined) {
      dispatch(getUserAction(isAuthenticated));
    }
  }, [dispatch, isAuthenticated]);

  const handleAuthentication = () => {
    //if there is no token go to login
    if (!isAuthenticated) {
      router.push(Routes.LOGIN);
      console.log("push to login from protected route not token");
      return;
    }

    // Handle api error
    if (apiError) {
      setError("Oops! Something went wrong. Please try again later.");
      return;
    }
    // if the api call is successful and user details are gotten
    if (user?.success) {
      //if the account is not verified go to verified
      if (!user?.data?.isAccountVerified && router.pathname !== Routes.VERIFY) {
        console.log("push to verify from protected route");
        router.push(Routes.VERIFY);
        return;
      } else if (
        //if the user doesnt have a profile go to create profile
        !user?.data?.profile &&
        router.pathname !== Routes.CREATE_PROFILE
      ) {
        console.log("push to create profile from protected route");
        router.push(Routes.CREATE_PROFILE);
        return;
      } else if (
        //if the route is either login or signup go to home
        router.pathname.includes(Routes.LOGIN || Routes.SIGNUP)
      ) {
        router.push(Routes.HOME);
        console.log("push to home from protected route");
        return;
      } else if (
        router.pathname.includes(
          Routes.FORGOT_PASSWORD || Routes.CONFIRM_CHANGE_PASSWORD
        )
      ) {
        router.push(Routes.HOME);
        console.log("push to home from protected route");
        return;
      }
    }
  };
  useEffect(() => {
    handleAuthentication();
  }, [isAuthenticated, apiError, user]);

  return children;
};

export default ProtectedRoute;
