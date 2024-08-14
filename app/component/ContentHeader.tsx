"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const ContentHeader = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <div
      className="mt-10 justify-center items-center w-full box-border mb-14 "
      data-aos="fade-down"
    >
      <p className="text-center text-3xl font-semibold mb-4">
        Phòng & Hạng Phòng
      </p>
      <p className="text-center max-w-2xl mx-auto">
        Chúng tôi có 100 phòng với nhiều loại phòng khác nhau, từ phòng SVIP
        vỉew thành phố cho đến phòng Deluxe Family. Mỗi phòng đều được trang bị
        đầy đủ tiện nghi và có ban công riêng. Khách sạn còn có nhà hàng, bar,
        hồ bơi, spa, gym và karaoke để phục vụ nhu cầu giải trí của du khách
        <a href="" className="text-blue-500 underline">
          {" "}
          Xem toàn bộ phòng
        </a>
      </p>
    </div>
  );
};

export default ContentHeader;
