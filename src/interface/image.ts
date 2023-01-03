import { User } from "./user";

export type ImageData = {
  URL: string;
  data_created: string;
  description: string;
  image_id: number;
  image_name: string;
  user_id: number;
};
export type ImageDataById = ImageData & User;
export type ImgDetail = {
  image_id: number;
  image_name: string;
  URL: string;
  description: string;
  data_created: string;
  user_id: number;
  user: {
    user_id: number;
    email: string;
    full_name: string;
    age: number;
    avatar: null | string;
  };
};
export type ImgDeleteData = {
  user_id: number;
  image_id: number;
};
