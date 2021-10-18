import React, { useEffect, useState } from "react";
import { getallurldata } from "../helper/apicaller";
import Base from "./base";
import VideoPlayer from "./player";

const Home = () => {
  const [video, setVideo] = useState([]);

  const loadvideodata = () => {
    getallurldata()
      .then((data) => {
        setVideo(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //loaded the main  state on reload
  useEffect(() => {
    loadvideodata();
  }, []);
  return (
    <div>
      <Base />
      <VideoPlayer video={video} />
    </div>
  );
};

export default Home;
