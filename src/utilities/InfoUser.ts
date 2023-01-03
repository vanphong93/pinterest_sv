import { InfoUser } from "../interface/user";
import { localServ } from "../services/localService";

export const dataUser: InfoUser|null = localServ.user.get();
