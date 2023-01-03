import { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ImageDataById, ImgDeleteData, ImgDetail } from "../interface/image";
import { imgSer } from "../services/imageService";
import { dataUser } from "../utilities/InfoUser";
export default function DetailPage() {
  const { id } = useParams<string>();
  let user_id = dataUser?.user_id;
  const [detailImg, setDetailImg] = useState<ImgDetail>();
  const [isLike, setIsLike] = useState(false);
  const [dataComment, setDataComment] = useState([]);
  const [dataSend, setDataSend] = useState("");
  const [isFetch, setIsFetch] = useState(false);
  useEffect(() => {
    imgSer
      .getDataById(id)
      .then((res: AxiosResponse) => {
        setDetailImg(res.data.content);
      })
      .catch((err: Error) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    user_id &&
      imgSer
        .getImgLike(user_id)
        .then((res) => {
          const data = res.data.content;
          const index = data.findIndex((item: { image_id: string }) => {
            return item.image_id == id;
          });
          if (index > -1) {
            setIsLike(true);
          }
        })
        .catch((err: Error) => {
          console.log(err);
        });
  }, []);
  useEffect(() => {
    imgSer
      .getCommentById(id)
      .then((res) => {
        console.log("res: ", res);
        setDataComment(res.data.content);
        setIsFetch(false);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, [isFetch]);

  const handleLike = () => {
    if (!user_id) {
      alert("Please login");
      return;
    }
    let data = { user_id: 3, image_id: id, save_date: new Date().toDateString };
    imgSer.createLike(data).then((res) => {
      alert(res.data.message);
      setIsLike(!isLike);
    });
  };
  const handleUnlike = () => {
    imgSer
      .deleteLike(user_id, id)
      .then((res) => {
        alert(res.data.message);
        setIsLike(!isLike);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  const handleSend = () => {
    if (!user_id) {
      alert("Please login");
      return;
    }
    let data = { content: dataSend, user_id, image_id: id };
    imgSer
      .createComment(data)
      .then((res) => {
        setIsFetch(true);
      })
      .catch((err: Error) => {
        console.log(err);
      });
  };
  const renderContent = (data: ImgDetail) => {
    if (data) {
      let {
        image_name,
        URL,
        description,
        data_created,
        user: { full_name, avatar },
      } = data;
      return (
        <>
          {" "}
          <div className="d-flex flex-row">
            <section className="position-relative">
              {isLike ? (
                <button
                  onClick={() => {
                    handleUnlike();
                  }}
                  className="btn btn-success position-absolute bottom-0 end-0 "
                >
                  Unlike
                </button>
              ) : (
                <button
                  onClick={() => {
                    handleLike();
                  }}
                  className="btn btn-danger position-absolute bottom-0 end-0 "
                >
                  Like
                </button>
              )}
              <img style={{ width: "50vw" }} src={URL} alt="" />
            </section>
            <section>
              <h2>Tên ảnh: {image_name}</h2>
              <h3>Mô tả: {description}</h3>
              <h4>Ngày tạo {data_created}</h4>
              <h5>Tác giả {full_name}</h5>
              {avatar && <img src={avatar} alt="" />}
            </section>
          </div>
          <section className="my-3">
            {dataComment.map(
              (
                item: {
                  user: { full_name: string };
                  content: string;
                },
                i
              ) => {
                return (
                  <h5 key={i}>
                    {item.user.full_name}:{item.content}
                  </h5>
                );
              }
            )}
            <div className="d-flex">
              {" "}
              <textarea
                onChange={(e) => setDataSend(e.target.value)}
                className="w-50"
              />
              <button
                onClick={() => {
                  handleSend();
                }}
                className="btn btn-info mx-2"
              >
                Send
              </button>
            </div>
          </section>
        </>
      );
    }
  };
  return (
    <div className="container">{detailImg && renderContent(detailImg)} </div>
  );
}
