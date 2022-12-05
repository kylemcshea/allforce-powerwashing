import React from "react";
import logo from "../assets/logo.png";
import AllForceDino from "../assets/icons/allforce_dino.png";

const NavBar: React.FC = () => {
  return (
    <nav className="fade-in">
      <div className="block lg:hidden md:hidden">
        <div className="max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-12 items-center justify-between">
            {/* TODO: Implement mini nav linker */}
            <div className="mt-20 pt-2 mb-5 flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <img
                className="block h-32 w-auto lg:hidden"
                src={logo}
                alt="All Force Services Logo"
              />
            </div>
          </div>
          <div className="slide-left">
            <div className="mt-10 pt-5 text-center nunito font-semibold text-xl">
              🤝 Get the job done right.
            </div>
            <div className="text-center nunito font-semibold text-xl">
              📍 Hackettstown, NJ
            </div>
            <div className="text-center mb-3 nunito font-semibold text-xl">
              📍 Pittsburgh, PA
            </div>
          </div>
        </div>

        <div className="w-screen text-center text-white nunito font-semibold text-xl">
          <a href="tel:201-841-1306">
            <button
              type="button"
              className="slide-right py-1 border-b-4 border-black w-screen text-white focus:outline-none bg-green-600 hover:bg-forest focus:ring-4 focus:ring-green-300 text-2xl dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              <span className="wave-emoji">📞</span> (201) 841-1306
            </button>
          </a>
        </div>
      </div>
      {/* Navigation bar for desktop view tailwind css */}

      <div className="hidden lg:block md:block bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <a
            href="https://www.facebook.com/Allforceservices"
            className="flex items-center"
          >
            {/* <img
              src={AllForceDino}
              className="h-6 mr-3 sm:h-9"
              alt="All Force Services Logo"
            /> */}
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              🔨 All Force Services LLC.
            </span>
          </a>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                  aria-current="page"
                >
                  👪 FaceBook
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  📧 Email us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  📸 Gallery
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  👋 About us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
