import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import axios from "axios";
const requestInterceptor = axios.interceptors.request.use(
  config => {
    console.log(config);
    //edit
    return config;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);
const responseInterceptor = axios.interceptors.response.use(
    config => {
      console.log(config);
      //edit
      return config;
    },
    error => {
      console.log(error);
      return Promise.reject(error);
    }
  );
  axios.interceptors.request.eject(requestInterceptor);
  axios.interceptors.response.eject(responseInterceptor);
ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
