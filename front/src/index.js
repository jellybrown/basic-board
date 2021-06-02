import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import axios from "axios";
import GlobalStyles from "./styles/globalStyles";

axios.defaults.baseURL = "http://localhost:3300";

ReactDOM.render(<App />, document.getElementById("root"));

if (module.hot) {
  // hot:true로 설정후 이걸하면 8번째 줄처럼 뭔가 추가해도, 기존것은 바뀌지 않는다.
  module.hot.accept();
}
