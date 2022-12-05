import React, { useState } from "react";
import Offerings from "./Offerings";
import Marketing from "./Marketing";
import TimeLapse from "./TimeLapse";
import Contact from "./Contact";
import BookingModal from "./BookingModal";
import Gallery from "./Gallery";
import { galleryData } from "../data/galleryData";
import allForceHeroImage from "../assets/all-force-hero.jpg";

const Main: React.FC = () => {
  const [booking, setBooking] = useState<string>("");

  return (
    <div className="mx-6 py-3">
      {/* Phone View. */}
      <div className="block lg:hidden md:hidden">
        <div className="slide-left">
          <Offerings setBooking={setBooking} />
        </div>
        <TimeLapse />
        <div className="mt-3">
          <Marketing />
        </div>
      </div>
      {/* Desktop View */}
      <div className="hidden lg:block md:block">
        {/* <img className="mx-auto" src={allForceHeroImage} /> */}
        <div className="flex flex-row justify-content-center mx-auto w-100">
          <Offerings setBooking={setBooking} />
        </div>
        {/* <div className="slide-left">
          <Offerings setBooking={setBooking} />
        </div>
        <div className="slide-right">
          <TimeLapse />
        </div> */}
      </div>
      <Gallery carouselImages={galleryData()} />
      <BookingModal booking={booking} onClose={() => setBooking("")} />
      <Contact />
    </div>
  );
};

export default Main;
