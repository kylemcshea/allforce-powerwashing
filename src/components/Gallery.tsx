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
          interval={5000}
          autoPlay={true}
          infiniteLoop={true}
          autoFocus={true}
          className="my-4"
        >
          <div>
            <img src={c.srcBefore} />
            <p className="legend">Before (swipe me 👉)</p>
          </div>
          <div>
            <img src={c.srcAfter} />
            <p className="legend">After</p>
          </div>
        </Carousel>
      ))}
    </div>
  );
};

export default Gallery;
