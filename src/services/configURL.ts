import axios, { AxiosError } from "axios";
// import { localServ } from "./localService";
// axios.defaults.baseURL = "http://localhost:8080";
export const BASE_URL = "http://178.128.222.31:3500";
// export const TOKEN =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBTw6FuZyAwNCIsIkhldEhhblN0cmluZyI6IjIwLzAyLzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY3Njg1MTIwMDAwMCIsIm5iZiI6MTY1NDEwMjgwMCwiZXhwIjoxNjc2OTk4ODAwfQ.QYLXMgjth5hQh9opZbNS7JEDPZGWA3o_95kR_VyLix8";
export let https = axios.create({
  baseURL: BASE_URL,

  //   headers: {
  //     TokenCybersoft: TOKEN,
  //     Authorization: "bearer " + localServ.user.get()?.accessToken,
  //   },
});

//request
// https.interceptors.request.use((config) => {
//   if (config.headers) {
//     const accessToken = localStorage.getItem("token");
//     if (accessToken) {
//       config.headers.token = `${accessToken}`;
//     }
//   }
//   return config;
// });

//response
// https.interceptors.response.use(
//   (response: any) => {
//     return response;
//   },
//   (error: AxiosError<{ content: string }>) => {
//     return error.response?.data;
//   }
// );
