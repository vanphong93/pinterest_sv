import { AxiosRequestConfig, AxiosResponse } from "axios";
import { ImageData, ImageDataById, ImgDeleteData } from "../interface/image";
import { https } from "./configURL";
export const imgSer = {
  getData: () => {
    return https.get<ImageData[]>("/api/image-management/images");
  },
  getDataById: (id?: string) => {
    return https.get<ImageDataById>(`/api/image-management/images/${id}`);
  },
  getImgLike: (id: number) => {
    return https.get(`/api//save-management/save/${id}`);
  },
  createLike: (data: any) => {
    return https.post("/api/save-management/save", data);
  },
  deleteLike: (user_id?: number, image_id?: string) => {
    return https.delete(`/api/save-management/save/${user_id}/${image_id}`);
  },
  getCommentById: (id?: string) => {
    return https.get(`/api/comment-management/comments/${id}`);
  },
  createComment: (data: any) => {
    return https.post("/api/comment-management/comments", data);
  },
};
