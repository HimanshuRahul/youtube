import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="p-2 m-2 w-72 min-h-full max-h-fit rounded-lg shadow-lg">
      <img className="rounded-lg" alt="thumbnail" src={thumbnails.medium.url} />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export const AdVideoCard = ({ info }) => {
  return (
    <div className="border border-b-slate-500 bg-slate-50 h-full rounded-lg shadow-lg">
      <VideoCard className="font-medium" info={info} />
      <h1 className="font-normal px-4 my-2">This is sponsored content!</h1>
    </div>
  );
};

export default VideoCard;
