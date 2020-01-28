import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import axios from "axios";

//add global interceptors
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

//eject interceptors
axios.interceptors.request.eject(requestInterceptor);
axios.interceptors.response.eject(responseInterceptor);

//axios defaults
axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
axios.defaults.headers.common["Authorization"] = "TOKEN";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
