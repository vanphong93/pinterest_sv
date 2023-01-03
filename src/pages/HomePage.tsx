import axios, { AxiosResponse } from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { ImageData } from "../interface/image";
import { imgSer } from "../services/imageService";

export default function HomePage() {
  const navigate = useNavigate();
  const [data, setData] = useState<ImageData[]>([]);
  useEffect(() => {
    imgSer
      .getData()
      .then((res: AxiosResponse) => {
        setData(res.data.content);
      })
      .catch((err: Error) => {
        console.log(err);
      });
  }, []);
  const handleImage = (id: number) => {
    navigate(`detail/${id}`);
  };
  const renderContent = (data: ImageData[]) => {
    return data.map((item) => {
      let { image_id, URL } = item;
      return (
        <img
          onClick={() => {
            handleImage(image_id);
          }}
          className="g-3"
          style={{ maxHeight: 300, cursor: "pointer" }}
          key={image_id}
          src={URL}
          alt=""
        />
      );
    });
  };
  return (
    <div className="">
      <Header />
      <div className="container mx-auto row row-cols-3">
        {renderContent(data)}
      </div>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste repellat
        ullam ipsa molestiae. Voluptate odio veniam cum animi, consequatur
        delectus.
      </h1>
    </div>
  );
}
