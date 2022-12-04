import React, { useState } from "react";
import dino_a from "../assets/dinosaur_a.png";
import dino_g from "../assets/dino_g.png";
import { BsSuitHeartFill } from "react-icons/bs";

const Footer: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  return (
    <footer className="w-screen p-2 bg-black opacity-80 rounded-sm shadow sm:flex sm:items-center sm:justify-between sm:p-3 dark:bg-gray-800">
      <div className="w-full md:w-3/4 lg:w-3/4 grid grid-flow-col flex justify-between">
        <div>
          <img
            src={dino_g}
            height={50}
            width={50}
            className={`${imageLoaded ? "image-visible" : "image-hidden"}`}
            onLoad={() => setImageLoaded(true)}
          />
        </div>

        <div>
          <img
            src={dino_a}
            height={30}
            width={30}
            className={`${imageLoaded ? "image-visible" : "image-hidden"}`}
            onLoad={() => setImageLoaded(true)}
          />
        </div>

        <div>
          <img
            src={dino_g}
            height={50}
            width={50}
            className={`${imageLoaded ? "image-visible" : "image-hidden"}`}
            onLoad={() => setImageLoaded(true)}
          />
        </div>

        <div>
          <img
            src={dino_a}
            height={30}
            width={30}
            className={`${imageLoaded ? "image-visible" : "image-hidden"}`}
            onLoad={() => setImageLoaded(true)}
          />
        </div>

        <div>
          <img
            src={dino_g}
            height={50}
            width={50}
            className={`${imageLoaded ? "image-visible" : "image-hidden"}`}
            onLoad={() => setImageLoaded(true)}
          />
        </div>
      </div>
      <div className="flex justify-center"></div>
      <ul className="w-100 text-center">
        <li className="font-bold text-white">All Force Services.</li>
      </ul>
    </footer>
  );
};
export default Footer;
