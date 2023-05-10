import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Routes from "@/utils/routes";

const UnauthenticatedRoute = (WrappedComponent) => {
  const Wrapper = (props) => {
    const router = useRouter();
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    // Redirect to home if the user is already authenticated
    useEffect(() => {
      if (isAuthenticated) {
        router.push(Routes.HOME);
      }
    }, [isAuthenticated, router]);

    // Render the target page if the user is not authenticated
    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default UnauthenticatedRoute;
