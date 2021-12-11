import type { NextPage } from "next";
import "swiper/css";

import { Mousewheel } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const Home: NextPage = () => {
  return (
    <div
      style={{
        backgroundColor: "violet",
        maxHeight: "100vh",
        minHeight: "100vh",
        maxWidth: "100vw",
        minWidth: "100vw",
        position: "absolute",
        zIndex: 10000000,
        top: 0,
        left: 0,
      }}
    >
      <Swiper
        style={{
          height: "100vh",
        }}
        modules={[Mousewheel]}
        direction="vertical"
        mousewheel={true}
        slidesPerView={1}
      >
        <SwiperSlide>
          <div
            style={{
              backgroundColor: "green",
              maxWidth: "100vw",
              minWidth: "100vw",
              maxHeight: "100vh",
              minHeight: "100vh",
            }}
          >
            Slide 1
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundColor: "blue",
              maxWidth: "100vw",
              minWidth: "100vw",
              maxHeight: "100vh",
              minHeight: "100vh",
            }}
          >
            <Swiper
              style={{
                height: "100vh",
              }}
              modules={[Mousewheel]}
              direction="horizontal"
              mousewheel={false}
              slidesPerView={1}
            >
              <SwiperSlide>
                <div
                  style={{
                    backgroundColor: "gray",
                    maxWidth: "100vw",
                    minWidth: "100vw",
                    maxHeight: "100vh",
                    minHeight: "100vh",
                  }}
                >
                  Slide 2.1
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  style={{
                    backgroundColor: "gray",
                    maxWidth: "100vw",
                    minWidth: "100vw",
                    maxHeight: "100vh",
                    minHeight: "100vh",
                  }}
                >
                  Slide 2.2
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundColor: "gray",
              maxWidth: "100vw",
              minWidth: "100vw",
              maxHeight: "100vh",
              minHeight: "100vh",
            }}
          >
            Slide 3
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundColor: "yellowgreen",
              maxWidth: "100vw",
              minWidth: "100vw",
              maxHeight: "100vh",
              minHeight: "100vh",
            }}
          >
            Slide 4
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Home;
