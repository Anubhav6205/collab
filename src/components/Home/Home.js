import React, { useState } from "react";
import HomeRender from "./HomeRender";

export default function Home() {
  const [data, setData] = useState([
    {
      photo: "./music.jpg",
      title: "Zeena",
      key: "Zeena1",
    },
    {
      photo: "./music.jpg",
      title: "Marna",
      key: "Zeena2",
    },
    {
      photo: "./music.jpg",
      title: "Wow",
      key: "Zeena3",
    },
    {
      photo: "./music.jpg",
      title: "How",
      key: "Zeena4",
    },
    {
      photo: "./music.jpg",
      title: "Yes",
      key: "Zeena5",
    },
  ]);
  const music = (index, item) => {
    return <HomeRender key={item.key} item={item} />;
  };
  return (
    <div className="container mt-4">
      <div className="row row-cols-1 row-cols-md-2 g-4">{data.map(music)}</div>
    </div>
  );
}
