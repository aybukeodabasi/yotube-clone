import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getData } from "../helpers/getData";
import { SlLike } from "react-icons/sl";

const Comments = () => {
  const [comments, setComments] = useState();
  const params = useParams();
  const id = params.id;
  useEffect(() => {
    getData(`/comments?id=${id}`).then((res) => setComments(res.data.data));
  }, [id]);

  console.log(comments);

  return (
    <div>
      {comments?.map((comment) => (
        <div className="flex flex-col rounded gap-5 mt-5 p-3 bg-gray-500">
          <div className="flex gap-2">
            <img
              className="rounded-full"
              src={comment.authorThumbnail[0]?.url}
              alt=""
            />
            <span>{comment.authorText}</span>
            <span>{comment.publishedTimeText}</span>
          </div>
          <p>{comment.textDisplay}</p>
          <div className="flex gap-2 align-items-center">
            <span className="mt-1">
              <SlLike />
            </span>
            <span>{comment.likesCount}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comments;
