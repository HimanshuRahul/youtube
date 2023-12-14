import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-sm p-2 ">
      <img
        className="w-6 h-6"
        alt="user"
        src="https://cdn-icons-png.flaticon.com/128/3033/3033143.png"
      />
      <span className="font-bold px-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
