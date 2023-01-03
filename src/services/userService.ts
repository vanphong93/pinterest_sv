import { Login, User } from "../interface/user";
import { https } from "./configURL";

export const userSer = {
  signIn: (data: User) => {
    return https.post("/api/user-management/sing-up", data);
  },
  logIn: (data: Login) => {
    return https.post("api/user-management/login", data);
  },
  getDataById: (id: number) => {
    return https.get(`/api/user-management/users/${id}`);
  },
};
