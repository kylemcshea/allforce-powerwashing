import React, { useState } from "react";
import Offerings from "./Offerings";
import Marketing from "./Marketing";
import TimeLapse from "./TimeLapse";
import Contact from "./Contact";
import BookingModal from "./BookingModal";

const Main: React.FC = () => {
  const [booking, setBooking] = useState<string>("");
  return (
    <div className="mx-6 py-3">
      <div className="slide-left">
        <Offerings setBooking={setBooking} />
      </div>
      <TimeLapse />
      <div className="mt-3 slide-right">
        <Marketing />
      </div>
      <BookingModal booking={booking} onClose={() => setBooking("")} />
      <Contact />
    </div>
  );
};

export default Main;
