import "../styles/normalize.css";
import "../styles/globals.css";
import Preloader from "@/components/Preloader/Preloader";

// Redux.
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import ProtectedRoute from "@/components/ProtectedRoutes/ProtectedRoute";
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en.json';
import ru from 'javascript-time-ago/locale/ru.json';

TimeAgo.addDefaultLocale(en)
TimeAgo.addLocale(ru)

export default function App({ Component, pageProps }) {
  return (
    <>
      <Preloader />
      <Provider store={store}>
        <ProtectedRoute>
          <Component {...pageProps} />
        </ProtectedRoute>
      </Provider>
    </>
  );
}
