import React, { useEffect, useState } from "react";
import BeforeWash from "../assets/roofing-wash-before.jpg";
import AfterWash from "../assets/roofing-wash-after.jpg";

const Showcase: React.FC = () => {
  // const [hoverState, setHoverState] = useState<string>("visible");

  return (
    <>
      <div className="text-2xl nunito mt-4 ml-3 underline slide-left">
        CLIENT WORK 🔨
      </div>
      {/* Initial Component that shows and then slides to right */}
      <div
        className={`mx-auto mt-5 max-w-sm rounded overflow-hidden border-solid border-2 border-slate-400`} //${
        //   hoverState === "exit" && ` slide-exit-right`
        // } ${hoverState === "hide" && ` hidden`}`}
        onMouseEnter={() => console.log("hovered")} //handleHover()}
      >
        <img className="w-full" src={BeforeWash} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Before 👉</div>
        </div>
      </div>
      {/* Component that slides in from the left slide  */}
      <div
        className={`mx-auto mt-5 max-w-sm rounded overflow-hidden border-solid border-2 border-slate-400`} //${
        //   hoverState === "exit" && ` slide-right`
        // } ${hoverState === `hide` || hoverState === `exit` ? `` : `hidden`}`}
      >
        <img className="w-full" src={AfterWash} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">After 👉</div>
        </div>
      </div>
      <div className="w-25">
        <div className="mt-2"></div>
      </div>
    </>
  );
};

export default Showcase;
