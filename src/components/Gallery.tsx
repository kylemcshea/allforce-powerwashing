import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Size, useWindowSize } from "../hooks/useWindowSize";

export type CarouselImage = {
  srcBefore: string;
  srcAfter: string;
};

interface IGallery {
  carouselImages: CarouselImage[];
}

const Gallery: React.FC<IGallery> = ({ carouselImages }) => {
  const size: Size = useWindowSize();
  return (
    <div>
      {size.width && size.width > 1024 ? (
        <>
          <div className="ml-16 text-3xl font-bold mt-3">
            📸 <span className="underline">Before & After</span>
          </div>
          <div className="grid grid-cols-2">
            {carouselImages.map((c) => (
              <>
                <div className="col">
                  <Carousel showThumbs={false} className="m-16">
                    <div>
                      <img src={c.srcBefore} />
                      <p className="legend" style={{ opacity: 1 }}>
                        Before (click arrow right{" "}
                        <span className="wave-emoji">👉</span>)
                      </p>
                    </div>
                    <div>
                      <img src={c.srcAfter} />
                      <p className="legend" style={{ opacity: 1 }}>
                        👈 After
                      </p>
                    </div>
                  </Carousel>
                </div>
              </>
            ))}
          </div>
        </>
      ) : (
        carouselImages.map((c) => (
          <Carousel
            showIndicators={false}
            showThumbs={false}
            showStatus={false}
            showArrows={false}
            autoFocus={true}
            preventMovementUntilSwipeScrollTolerance={true}
            swipeScrollTolerance={50}
            className="my-4"
          >
            <div>
              <img src={c.srcBefore} />
              <p className="legend" style={{ opacity: 1 }}>
                Before (swipe me <span className="wave-emoji">👉</span>)
              </p>
            </div>
            <div>
              <img src={c.srcAfter} />
              <p className="legend" style={{ opacity: 1 }}>
                👈 After
              </p>
            </div>
          </Carousel>
        ))
      )}
    </div>
  );
};

export default Gallery;
