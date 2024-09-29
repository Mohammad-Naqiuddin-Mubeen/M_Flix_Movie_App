import { createRoot } from "react-dom/client";
import "./index.css";
import { Master } from "./components/Master.jsx";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Provider } from "react-redux";
import store from "./store/store.js";

createRoot(document.getElementById("root")).render(
  <>
    <Provider store={store}>
      <Master></Master>
    </Provider>
  </>
);
