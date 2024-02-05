import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getData } from "../helpers/getData";
import Loading from "./Loading";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import StringArea from "./StringArea";
import millify from "millify";
import moment from "moment";
import Comments from "./Comments";

const VideoInfo = () => {
  const [detail, setDetail] = useState(null);
  const [channel, setChannel] = useState(null);
  const { id } = useParams();

  const getInfos = async () => {
    const detailRes = await getData(`/video/info?id=${id}`);
    const channelRes = await getData(
      `/channel/about?id=${detailRes.data.channelId}`
    );
    setDetail(detailRes.data);
    setChannel(channelRes.data);
  };

  useEffect(() => {
    getInfos();
  }, []);

  if (!detail || !channel) {
    return <Loading type={"detail"}></Loading>;
  }

  return (
    <>
      <h1 className="mt-3 text-xl font-bold">{detail.title}</h1>
      <div className="flex justify-between mt-3 gap-4">
        <div className="flex item-center">
          <img
            className="rounded-full w-12 h-12"
            src={channel.avatar[0]?.url}
            alt=""
          />
          <div className="ml-3">
            <h4 className="font-bold">{channel.title}</h4>
            <p className="text-gray-400">{channel.subscriberCountText} abone</p>
          </div>
          <button className="bg-white rounded-full text-black px-3 h-9 transition hover:bg-gray-400">
            Abone Ol
          </button>
        </div>

        <div className="flex items-center rounded-full text-black  bg-gray-600 transition">
          <div className="py-2 px-4 border-r flex item-center gap-3">
            <AiFillLike className="mt-1"></AiFillLike>
            <span>{Math.round(Math.random() * 100)}B</span>
          </div>
          <div className="py-2 px-4">
            <AiFillDislike></AiFillDislike>
          </div>
        </div>
      </div>
      <div className="bg-gray-600 rounded p-2 mt-4 cursor-pointer hover:bg-gray-700">
        <div className="flex gap-3">
          <p>{millify(detail.viewCount)}izlenme</p>
          <p>{moment(detail.publishDate).fromNow()}</p>
        </div>
        <StringArea text={detail.description} max={300}></StringArea>
      </div>
      <Comments></Comments>
    </>
  );
};

export default VideoInfo;
