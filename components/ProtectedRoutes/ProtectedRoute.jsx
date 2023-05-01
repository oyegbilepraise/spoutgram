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
    //only make the call when there is a token and when dispatch is mounted
    if (isAuthenticated) {
      if (dispatch && dispatch !== null && dispatch !== undefined) {
        dispatch(getUserAction(isAuthenticated));
        console.log("dispatched get User Action");
      }
    }
  }, [dispatch, isAuthenticated]);

  const handleAuthentication = () => {
    switch (true) {
      //if there is no token go to token
      case !isAuthenticated:
        //if route is either login or signup dont do anything
        if (
          router.pathname.includes(Routes.LOGIN) ||
          router.pathname.includes(Routes.SIGNUP)
        ) {
          return;
        }
        // make forgot password and confirm change password unaccessible if user is logged in(redirect to home)
        else if (router.pathname.includes(Routes.PASSWORD)) {
          return;
          // push to login
        } else router.push(Routes.LOGIN);
        console.log("push to login from protected route not token");
        return;

      // Handle api error
      case apiError:
        setError("Oops! Something went wrong. Please try again later.");
        return;

      // if the api call is successful and user details are gotten
      case user?.success:
        //if the account is not verified go to verified
        if (
          !user?.data?.isAccountVerified &&
          router.pathname !== Routes.VERIFY
        ) {
          console.log("push to verify from protected route");
          router.push(Routes.VERIFY);
          return;
          //if the user is not verified and the route is verify, remain on verify page
        } else if (
          !user?.data?.isAccountVerified &&
          router.pathname === Routes.VERIFY
        ) {
          console.log("remain on verify page from protected route");
          return;
        }
        //if the user doesnt have a profile go to create profile
        else if (
          !user?.data?.profile &&
          router.pathname !== Routes.CREATE_PROFILE
        ) {
          console.log("push to create profile from protected route");
          router.push(Routes.CREATE_PROFILE);
          return;
        }
        //if the user is verified, does not have a profile and is on create profile page, remain on the profile page
        else if (
          !user?.data?.isAccountVerified &&
          !user?.data?.profile &&
          router.pathname === Routes.CREATE_PROFILE
        ) {
          console.log("remain on create profile from protected route");
          return;
          //if the link is change password link dont do anything
        } else if (router.pathname.includes(Routes.CHANGE_PASSWORD)) {
          return;
        }
        //if the route is either login or signup go to home
        else {
          router.push(Routes.HOME);
          console.log("push to home from protected route");
          return;
        }
        break;
      default:
        break;
    }
  };
  useEffect(() => {
    handleAuthentication();
    console.log("authentication is called");
  }, [isAuthenticated, apiError, user, router.pathname]);

  return children;
};

export default ProtectedRoute;
