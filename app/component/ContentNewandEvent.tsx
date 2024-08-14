"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const ContentNewandEvent = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <div
      className="mt-10 justify-center items-center w-full box-border "
      data-aos="fade-up"
      data-aos-delay="200"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="false"
    >
      <div className="flex justify-center items-center gap-5">
        <div
          className="border-2 border-t-2 bg-black w-10 text-center"
          data-aos="fade-right"
        ></div>
        <p className="font-semibold" data-aos="fade-left">
          POST
        </p>
      </div>
      <p
        className="text-center text-3xl font-semibold mb-4"
        data-aos="fade-down"
      >
        Tin tức & Sự kiện
      </p>
    </div>
  );
};

export default ContentNewandEvent;
