import React from "react";

const Upvote = ({ selected, toggleState }) => {
  return (
    <div
      onClick={toggleState}
      style={{
        backgroundColor: selected ? "#E5E8FD" : "#F4F6F8",
        cursor: "pointer",
        padding: "15px 15px 5px 15px",
        borderRadius: "10%",
        display: "inline-block",
        margin:"10px",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        fill={selected ? "#253CF2" : "#343A40"}
        viewBox="0 0 24 24"
      >
        <path d="M12 2l8 8h-5v7h-6v-7h-5z" />
      </svg>
    </div>
  );
};

export default Upvote;
