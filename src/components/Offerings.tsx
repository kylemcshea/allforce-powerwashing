import React from "react";
import snowflake from "../assets/icons/snow_management.png";
import pressure_washing from "../assets/icons/pressure_washing.png";
import deck_cleaning from "../assets/icons/deck_cleaning.png";
import painting_roller from "../assets/icons/painting_roller.png";
import carpet_removal from "../assets/icons/carpet_removal.png";
import driveway from "../assets/icons/driveway.png";
import tile from "../assets/icons/tile.png";

type Offering = {
  name: string;
  icon: string;
  popular: boolean;
};

const offeringData = (): Offering[] => {
  return [
    {
      name: "Snow Management",
      icon: snowflake,
      popular: true,
    },
    {
      name: "Pressure Washing",
      icon: pressure_washing,
      popular: false,
    },
    {
      name: "Carpentry",
      icon: deck_cleaning,
      popular: false,
    },
    {
      name: "Painting",
      icon: painting_roller,
      popular: false,
    },
    {
      name: "Carpet Installation/Removal",
      icon: carpet_removal,
      popular: false,
    },
    {
      name: "Debris Removal",
      icon: driveway,
      popular: false,
    },
    {
      name: "Flooring",
      icon: tile,
      popular: false,
    },
  ];
};

const Offerings = ({
  setBooking,
}: {
  setBooking: (booking: string) => void;
}) => {
  return (
    <div className="mb-4">
      <div className="w-full max-w-sm p-4 bg-white border rounded-lg shadow-lg sm:p-6 dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
          Check out our offerings 👇
        </h5>
        <ul className="my-4 space-y-3">
          {offeringData().map((offering) => (
            <li>
              <a
                onClick={() => setBooking(offering.name)}
                className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
              >
                <img className="h-6" src={offering.icon} />
                <span className="flex-1 ml-3 whitespace-nowrap">
                  {offering.name}
                </span>
                {offering.popular ? (
                  <span className="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400"></span>
                ) : null}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Offerings;
