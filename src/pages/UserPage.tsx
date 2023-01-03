import React, { useEffect, useState } from "react";
import { imgSer } from "../services/imageService";
import { userSer } from "../services/userService";
import { dataUser } from "../utilities/InfoUser";

export default function UserPage() {
const id = dataUser?.user_id;
  const [infoUser, setInfoUser] = useState();
  const [imgLike, setImgLike] = useState();
  useEffect(() => {
    id &&
      userSer
        .getDataById(id)
        .then((res) => {
          setInfoUser(res.data.content);
        })

        .catch((err: Error) => {
          console.log(err);
        });
  }, []);
  useEffect(() => {
    id &&
      imgSer
        .getImgLike(id)
        .then((res) => {
          setImgLike(res.data.content);
        })
        .catch((err: Error) => {
          console.log(err);
        });
  }, []);

  return <div>UserPage</div>;
}
