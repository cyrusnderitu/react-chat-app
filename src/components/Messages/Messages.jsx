import React from "react";

const Messages = ({ text, time }) => {
  return (
    <div>
      {text ? (
        <div className="cont bg-sky-500 rounded-tr-2xl rounded-b-2xl max-w-[450px] text-white p-2 relative">
          <p>{text}</p>
          <span className="absolute text-black -bottom-7 w-[200px] text-sm">{`${time.toDate().toLocaleDateString()}, ${time.toDate().toLocaleTimeString()}`}</span>
        </div>
      ): "No text to display"}
    </div>
  );
};

export default Messages;
