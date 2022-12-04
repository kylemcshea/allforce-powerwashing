import React from "react";
import MATTHEW_HEADSHOT from "../assets/MATTHEW_HEADSHOT.jpg";
import KYLE_HEADSHOT from "../assets/headshot_capco.jpg";
import { SiMinutemailer } from "react-icons/si";

const Contact: React.FC = () => {
  return (
    <div className="mt-3">
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div className="flex flex-col items-center py-5">
          <img
            className="w-24 h-24 mb-3 rounded-full shadow-lg"
            src={MATTHEW_HEADSHOT}
            alt="Matthew McShea"
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            Matthew McShea
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            CEO & Founder
          </span>
          <div className="flex mt-4 space-x-3 md:mt-6">
            <a
              href="mailto:mattmcshea19@gmail.com?subject=All Force Services"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-green-600 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Email Me <SiMinutemailer className="ml-2" />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-2 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div className="flex flex-col items-center py-5">
          <img
            className="w-24 h-24 mb-3 rounded-full shadow-lg"
            src={KYLE_HEADSHOT}
            alt="Kyle McShea"
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            Kyle McShea
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">CMO</span>
          <div className="flex mt-4 space-x-3 md:mt-6">
            <a
              href="mailto:hi@kylemcshea.com?subject=All Force Services"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-green-600 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Email Me <SiMinutemailer className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
