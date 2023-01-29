import React from "react";

const Messages = ({text}) => {
  return (
    <div>
        {text && <div className="cont bg-sky-500 rounded-tr-2xl rounded-b-2xl w-fit max-w-[250px] text-white p-2">
        <p>
          {text}
        </p>
      </div>}
      
    </div>
  );
};

export default Messages;
