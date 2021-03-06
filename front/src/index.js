import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import axios from "axios";
import { Provider } from "react-redux";
import store from "./redux/store";

axios.defaults.baseURL = "http://localhost:3300";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

if (module.hot) {
  // hot:true로 설정후 이걸하면 8번째 줄처럼 뭔가 추가해도, 기존것은 바뀌지 않는다.
  module.hot.accept();
}
