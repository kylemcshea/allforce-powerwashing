import React, { useEffect, useState } from "react";
import Offerings from "./Offerings";
import Marketing from "./Marketing";
import TimeLapse from "./TimeLapse";
import Contact from "./Contact";
import BookingModal from "./BookingModal";
import Gallery from "./Gallery";
import { galleryData } from "../data/galleryData";

const Main: React.FC = () => {
  const [booking, setBooking] = useState<string>("");

  return (
    <div className="mx-6 py-3">
      <div className="slide-left">
        <Offerings setBooking={setBooking} />
      </div>
      <TimeLapse />
      <div className="mt-3">
        <Marketing />
      </div>
      {/* TODO: Get the images to actually show up. For some reason they are showing up blank. */}
      <Gallery carouselImages={galleryData()} />
      <BookingModal booking={booking} onClose={() => setBooking("")} />
      <Contact />
    </div>
  );
};

export default Main;
