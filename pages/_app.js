import "../styles/normalize.css";
import "../styles/globals.css";

// Redux.
import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
import { store } from "@/redux/store";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
