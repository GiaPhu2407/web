"use client";
import React, { useEffect } from "react";
// import { FaCompass } from "react-icons/fa";
// import { IoBedOutline } from "react-icons/io5";
// import { GiBathtub } from "react-icons/gi";
import AOS from "aos";
import "aos/dist/aos.css";
const ContentRoom = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <div>
      <div
        className="flex justify-center gap-10 mt-2 mb-5 "
        data-aos="fade-left"
      >
        <div className="carousel w-[500px] h-[300px]">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src="https://amazinghotel.com.vn/wp-content/uploads/2021/06/z4285810650920_2c47d0c9e65e8bbb1b23f7f8aea00d9a-510x360.jpg"
              className="w-full"
              alt=""
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide6" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src="https://amazinghotel.com.vn/wp-content/uploads/2021/06/z4285810696769_564a7fec7bd12ad33518c13eb621431c-510x360.jpg"
              className="w-full"
              alt=""
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src="https://amazinghotel.com.vn/wp-content/uploads/2021/06/z4285810674619_5e060452b26f7d90cc8f67cccdc6b014-510x360.jpg"
              className="w-full"
              alt=""
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img
              src="https://amazinghotel.com.vn/wp-content/uploads/2021/06/z4285810650920_2c47d0c9e65e8bbb1b23f7f8aea00d9a-510x360.jpg"
              className="w-full"
              alt=""
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide5" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide5" className="carousel-item relative w-full">
            <img
              src="https://amazinghotel.com.vn/wp-content/uploads/2021/06/z4285810648780_4fd7c64cccbc8e2c096445c023faf13f-510x360.jpg"
              className="w-full"
              alt=""
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide6" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide6" className="carousel-item relative w-full">
            <img
              src="https://ezcloud.vn/wp-content/uploads/2019/07/4649_abc-1.jpg.webp"
              className="w-full"
              alt=""
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide5" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
        {/* Carousel 2 */}
        <div className="carousel w-[500px] h-[300px]">
          <div id="slide1_1" className="carousel-item relative w-full">
            <img
              src="https://amazinghotel.com.vn/wp-content/uploads/2021/06/z4285810650920_2c47d0c9e65e8bbb1b23f7f8aea00d9a-510x360.jpg"
              className="w-full"
              alt=""
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide6_6" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2_2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2_2" className="carousel-item relative w-full">
            <img
              src="https://amazinghotel.com.vn/wp-content/uploads/2021/06/z4285810696769_564a7fec7bd12ad33518c13eb621431c-510x360.jpg"
              className="w-full"
              alt=""
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide1_1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3_3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3_3" className="carousel-item relative w-full">
            <img
              src="https://amazinghotel.com.vn/wp-content/uploads/2021/06/z4285810674619_5e060452b26f7d90cc8f67cccdc6b014-510x360.jpg"
              className="w-full"
              alt=""
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide2_2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4_4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4_4" className="carousel-item relative w-full">
            <img
              src="https://amazinghotel.com.vn/wp-content/uploads/2021/06/z4285810650920_2c47d0c9e65e8bbb1b23f7f8aea00d9a-510x360.jpg"
              className="w-full"
              alt=""
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide3_3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide5_5" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide5_5" className="carousel-item relative w-full">
            <img
              src="https://amazinghotel.com.vn/wp-content/uploads/2021/06/z4285810648780_4fd7c64cccbc8e2c096445c023faf13f-510x360.jpg"
              className="w-full"
              alt=""
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide4_4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide6_6" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide6_6" className="carousel-item relative w-full">
            <img
              src="https://ezcloud.vn/wp-content/uploads/2019/07/4649_abc-1.jpg.webp"
              className="w-full"
              alt=""
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide5_5" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1_1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex justify-center items-center mt-4"
        data-aos="fade-right"
      >
        <div className="pl-[156px]">
          <a href="" className="text-black hover:text-amber-800 text-[35px]">
            Superior Room
          </a>
          <div className="flex mt-4 gap-7">
            <div className="flex">
              <div className="text-xl">
                <FaCompass />
              </div>
              <p className="pl-2 text-base">23m2</p>
            </div>
            <div className="flex">
              <div className="text-2xl">
                <IoBedOutline />
              </div>
              <p className="pl-2 text-base">2 beds</p>
            </div>
            <div className="flex">
              <div className="text-xl">
                <GiBathtub />
              </div>

              <p className="pl-2 text-base">1 bathroom</p>
            </div>
          </div>
          <p className="text-base break-words w-[88%] mt-4 opacity-70">
            Nếu bạn có một phòng ngủ ấm cúng, tiện nghi và hợp túi tiền,phòng
            Superior Room là sự....
          </p>
        </div>

        <div className="pr-6">
          <a href="" className="text-black hover:text-amber-800 text-[35px]">
            Connecting Room
          </a>
          <div className="flex mt-4 gap-7">
            <div className="flex">
              <div className="text-xl">
                <FaCompass />
              </div>
              <p className="pl-2 text-base">53m2</p>
            </div>
            <div className="flex">
              <div className="text-2xl">
                <IoBedOutline />
              </div>
              <p className="pl-2 text-base">3 beds</p>
            </div>
            <div className="flex">
              <div className="text-xl">
                <GiBathtub />
              </div>

              <p className="pl-2 text-base">2 bathroom</p>
            </div>
          </div>
          <p className="text-base break-words w-[88%] mt-4 opacity-70">
            Phòng Connecting Room là lựa chọn lý tưởng cho gia đình hoặc nhóm
            bạn khi đến với Amazing Hotel Sapa...
          </p>
        </div>
      </div>

      {/* Nội dung 2 */}

      <div
        className="flex justify-center gap-10 mt-16 mb-5  "
        data-aos="fade-right"
      >
        <div className="carousel w-[500px] h-[300px]">
          <div id="slide1/1" className="carousel-item relative w-full">
            <img
              src="https://amazinghotel.com.vn/wp-content/uploads/2021/06/Rooms_28-scaled-510x360.jpg"
              className="w-full"
              alt=""
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide6/6" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2/2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2/2" className="carousel-item relative w-full">
            <img
              src="https://amazinghotel.com.vn/wp-content/uploads/2021/06/Rooms_29-scaled-510x360.jpg"
              className="w-full"
              alt=""
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide1/1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3/3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3/3" className="carousel-item relative w-full">
            <img
              src="https://amazinghotel.com.vn/wp-content/uploads/2021/06/Rooms_28-scaled-510x360.jpg"
              className="w-full"
              alt=""
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide2/2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4/4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4/4" className="carousel-item relative w-full">
            <img
              src="https://lh6.googleusercontent.com/proxy/FSWxdIA1fMvNawKzkdhOW0tDPKJyi8EiuKwvbz9sjavIyGGEhFURBw_9ZyDT2U0pS6KMorJgBFczNqORcM1WfQgkfNG3dEKKjz5FeT2KaU-vw8RsP0To_5Z-4dCPqLU3_A"
              className="w-full"
              alt=""
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide3/3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide5/5" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide5/5" className="carousel-item relative w-full">
            <img
              src="https://travelmart.vn/uploads/2018/05/10/20_i5af3c5b8479ac.jpg"
              className="w-full"
              alt=""
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide4/4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide6/6" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide6/6" className="carousel-item relative w-full">
            <img
              src="https://d3tosvr3yotk6r.cloudfront.net/Content/UserUploads/Images/Hotels/5/1801/Rooms/medium_Picture9.jpg"
              className="w-full"
              alt=""
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide5/5" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1/1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
        {/* Carousel 2 */}
        <div className="carousel w-[500px] h-[300px]">
          <div id="slide1.1" className="carousel-item relative w-full">
            <img
              src="https://amazinghotel.com.vn/wp-content/uploads/2021/06/Room_38-scaled-510x360.jpg"
              className="w-full"
              alt=""
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide6.6" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2.2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2.2" className="carousel-item relative w-full">
            <img
              src="https://amazinghotel.com.vn/wp-content/uploads/2021/06/Room_37-scaled-510x360.jpg"
              className="w-full"
              alt=""
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide1.1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3.3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3.3" className="carousel-item relative w-full">
            <img
              src="https://amazinghotel.com.vn/wp-content/uploads/2021/06/Room_35-scaled-510x360.jpg"
              className="w-full"
              alt=""
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide2.2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4.4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4.4" className="carousel-item relative w-full">
            <img
              src="https://amazinghotel.com.vn/wp-content/uploads/2021/06/Room_34-scaled-510x360.jpg"
              className="w-full"
              alt=""
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide3.3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide5.5" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide5.5" className="carousel-item relative w-full">
            <img
              src="https://booking.muongthanh.com/upload_images/images/2022/05/mtg-20sgo-201-20-20rs.jpg"
              className="w-full"
              alt=""
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide4.4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide6.6" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide6.6" className="carousel-item relative w-full">
            <img
              src="https://travelmart.vn/uploads/2017/08/23/20_i599db08c3efe5.jpg"
              className="w-full"
              alt=""
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide5.5" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1.1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex justify-center items-center mt-4 "
        data-aos="fade-left">
        <div className="pl-[156px]">
          <a href="" className="text-black hover:text-amber-800 text-[35px]">
            Deluxy Family
          </a>
          <div className="flex mt-4 gap-7">
            <div className="flex">
              <div className="text-xl">
                <FaCompass />
              </div>
              <p className="pl-2 text-base">32m2</p>
            </div>
            <div className="flex">
              <div className="text-2xl">
                <IoBedOutline />
              </div>
              <p className="pl-2 text-base">2 beds</p>
            </div>
            <div className="flex">
              <div className="text-xl">
                <GiBathtub />
              </div>

              <p className="pl-2 text-base">1 bathroom</p>
            </div>
          </div>
          <p className="text-base break-words w-[88%] mt-4 opacity-70">
            Nếu bạn có một phòng ngủ ấm cúng, tiện nghi và hợp túi tiền,phòng
            Superior Room là sự....
          </p>
        </div>

        <div className="pr-6">
          <a href="" className="text-black hover:text-amber-800 text-[35px]">
            Deluxe Room
          </a>
          <div className="flex mt-4 gap-7">
            <div className="flex">
              <div className="text-xl">
                <FaCompass />
              </div>
              <p className="pl-2 text-base">25m2</p>
            </div>
            <div className="flex">
              <div className="text-2xl">
                <IoBedOutline />
              </div>
              <p className="pl-2 text-base">2 beds</p>
            </div>
            <div className="flex">
              <div className="text-xl">
                <GiBathtub />
              </div>

              <p className="pl-2 text-base">1 bathroom</p>
            </div>
          </div>
          <p className="text-base break-words w-[88%] mt-4 opacity-70">
            Phòng Connecting Room là lựa chọn lý tưởng cho gia đình hoặc nhóm
            bạn khi đến với Amazing Hotel Sapa...
          </p>
        </div>
      </div>
      <div
        className="flex justify-center items-center mt-10 "
        data-aos="fade-up"
      >
        <button className="bg-amber-800 px-4 py-2 text-white rounded-xl">
          XEM TOÀN BỘ PHÒNG {"->"}
        </button>
      </div>
    </div>
  );
};

export default ContentRoom;
