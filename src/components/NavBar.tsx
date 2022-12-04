import React from "react";
import logo from "../assets/logo.png";

const NavBar: React.FC = () => {
  return (
    <nav className="fade-in">
      <div className="max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-12 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 bg-gray-600 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => console.log("clicked")} //setShowOptions(true)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="mt-20 pt-2 mb-5 flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <img
              className="block h-32 w-auto lg:hidden"
              src={logo}
              alt="Your Company"
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
    </nav>
  );
};

export default NavBar;
