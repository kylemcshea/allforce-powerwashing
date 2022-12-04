import { CarouselImage } from "../components/Gallery";
import roofingWashBefore from "../assets/roofing-wash-before.jpg";
import roofingWashAfter from "../assets/roofing-wash-after.jpg";
import beforeDeck from "../assets/before_after/before_deck.jpg";
import afterDeck from "../assets/before_after/after_deck.jpg";
import beforeHouse from "../assets/before_after/before_house_side.jpg";
import afterHouse from "../assets/before_after/after_house_side.jpg";

export const galleryData = (): CarouselImage[] => {
  return [
    {
      srcBefore: roofingWashBefore,
      srcAfter: roofingWashAfter,
    },
    {
      srcBefore: beforeDeck,
      srcAfter: afterDeck,
    },
    {
      srcBefore: beforeHouse,
      srcAfter: afterHouse,
    },
  ];
};
