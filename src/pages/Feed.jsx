import React, { useContext } from "react";
import SideBar from "../components/SideBar";
import { YoutubeContext } from "../context/youtubeContext";
import Loading from "../components/Loading";
import VideoCard from "../components/VideoCard";

const Feed = () => {
  const { videos } = useContext(YoutubeContext);

  return (
    <div className="flex gap-4">
      <SideBar></SideBar>

      <div className="videos">
        {!videos ? (
          <Loading type={"video"}></Loading>
        ) : (
          videos.map((item) => {
            return (
              item.type === "video" && (
                <VideoCard video={item} key={item.videoId}></VideoCard>
              )
            );
          })
        )}
      </div>
    </div>
  );
};

export default Feed;
