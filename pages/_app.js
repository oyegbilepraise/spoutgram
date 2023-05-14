import "../styles/normalize.css";
import "../styles/globals.css";
import Preloader from "@/components/Preloader/Preloader";
import { SessionProvider } from "next-auth/react"
import io from 'socket.io-client'

// Redux.
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import ProtectedRoute from "@/components/ProtectedRoutes/ProtectedRoute";
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en.json';
import ru from 'javascript-time-ago/locale/ru.json';
import { useEffect } from "react";

TimeAgo.addDefaultLocale(en)
TimeAgo.addLocale(ru)
const socket = io.connect("localhost:5050")

export default function App({ Component, pageProps }) {

   useEffect(()=>{
    socket.emit("connection")
   },[])
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