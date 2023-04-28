import { AuthNav } from "../../components";
import "./AuthLayout.module.css";

const AuthLayout = ({ children }) => {
  return (
    <>
      <AuthNav />
      {children}
    </>
  );
};

export default AuthLayout;
