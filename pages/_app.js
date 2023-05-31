import "../styles/normalize.css";
import "../styles/globals.css";
import Preloader from "@/components/Preloader/Preloader";
import TopLoader from "@/components/TopLoader/TopLoader";
import { SessionProvider } from "next-auth/react";

// Redux.
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import ProtectedRoute from "@/components/ProtectedRoutes/ProtectedRoute";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import ru from "javascript-time-ago/locale/ru.json";
import React, { useEffect } from "react";
import { SocketContext, socket } from "../redux/context/socket.js";

TimeAgo.addDefaultLocale(en);
TimeAgo.addLocale(ru);

export default function App({ Component, pageProps }) {
  useEffect(() => {
    socket.emit("connection");
  }, []);

  return (
    <>
      <Preloader />
      <TopLoader />
      <SessionProvider session={pageProps.session}>
        <Provider store={store}>
          <SocketContext.Provider value={socket}>
            <ProtectedRoute>
              <Component {...pageProps} />
            </ProtectedRoute>
          </SocketContext.Provider>
        </Provider>
      </SessionProvider>
    </>
  );
}
