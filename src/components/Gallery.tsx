import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export type CarouselImage = {
  srcBefore: string;
  srcAfter: string;
};

interface IGallery {
  carouselImages: CarouselImage[];
}

const Gallery: React.FC<IGallery> = ({ carouselImages }) => {
  return (
    <div>
      {carouselImages.map((c) => (
        <Carousel
          showIndicators={false}
          showThumbs={false}
          showStatus={false}
          showArrows={false}
          autoFocus={true}
          className="my-4"
        >
          <div>
            <img src={c.srcBefore} />
            <p className="legend" style={{ opacity: 1 }}>
              Before (swipe me 👉)
            </p>
          </div>
          <div>
            <img src={c.srcAfter} />
            <p className="legend" style={{ opacity: 1 }}>
              👈 After
            </p>
          </div>
        </Carousel>
      ))}
    </div>
  );
};

export default Gallery;
