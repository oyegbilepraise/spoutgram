import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const ProtectedRoute = (WrappedComponent) => {
  const Wrapper = (props) => {
    const router = useRouter();
    const { user } = useSelector((state) => state?.auth?.loginUser);

    // check for authentication status on mount
    useEffect(() => {
      // check if user is authenticated
      const isAuthenticated = Cookies.get("token");

      // if user is not authenticated, redirect to login page
      if (!isAuthenticated && !user.hasProfile) {
        router.push("/login");
      }
      if (isAuthenticated && user.hasProfile) {
        router.push("/");
      }
      if (isAuthenticated && !user.hasProfile) {
        router.push("/create-profile");
      }
    }, []);

    // if user is authenticated, render the target page
    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default ProtectedRoute;
