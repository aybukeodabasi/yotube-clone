import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import VideoInfo from "../components/VideoInfo";
import { getData } from "../helpers/getData";

const VideoDetail = () => {
  const { id } = useParams();

  useEffect(() => {
    getData(`/related?id=${id}`).then((res) => console.log(res.data));
  }, []);

  return (
    <div className=" p-6 md:p-6 min-h-screen flex max-lg:flex-col">
      <div className="flex-1">
        <ReactPlayer
          className={"rounded"}
          width={"100%"}
          controls={true}
          url={`https://www.youtube.com/watch?v=${id}`}
        ></ReactPlayer>
        <VideoInfo></VideoInfo>
      </div>
      {/* <div>alakalı</div> */}
    </div>
  );
};

export default VideoDetail;
