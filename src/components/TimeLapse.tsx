import React from "react";
import carpet_removal from "../assets/grind.gif";

const TimeLapse: React.FC = () => {
  return (
    <div className="mt-3">
      <img
        className="rounded-lg border-2 border border-black rounded-lg"
        src={carpet_removal}
      />
    </div>
  );
};

export default TimeLapse;
