import "../styles/normalize.css";
import "../styles/globals.css";
import Preloader from "@/components/Preloader/Preloader";
import { SessionProvider } from "next-auth/react"

// Redux.
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import ProtectedRoute from "@/components/ProtectedRoutes/ProtectedRoute";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Preloader />
      <SessionProvider session={pageProps.session}>
        <Provider store={store}>
          <ProtectedRoute>
            <Component {...pageProps} />
          </ProtectedRoute>
        </Provider>
      </SessionProvider>
    </>
  );
}
