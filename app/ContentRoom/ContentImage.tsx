"use client";
import { useState } from "react";
import Image from "next/image";

const ContentImage = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <div>
      <section className="bg-white py-20 dark:bg-dark text-center justify-center flex mt-10">
        <div className="container">
          <div className="mb-6">
            <div className="overflow-hidden rounded-xl">
              {activeIndex === 1 && (
                <img
                  src="https://amazinghotel.com.vn/wp-content/uploads/2021/06/Room_33-scaled-1920x650.jpg"
                  alt="gallery image"
                  layout="responsive"
                  width={500}
                  height={800}
                  className="w-full h-[500px] object-cover object-center overflow-hidden"
                />
              )}
              {activeIndex === 2 && (
                <img
                  src="https://amazinghotel.com.vn/wp-content/uploads/2021/06/Rooms_30-scaled-500x500.jpg"
                  alt="gallery image"
                  layout="responsive"
                  width={500}
                  height={800}
                  className="w-full h-[500px] object-cover object-center overflow-hidden"
                />
              )}
              {activeIndex === 3 && (
                <img
                  src="https://amazinghotel.com.vn/wp-content/uploads/2021/06/Room_32-scaled-500x500.jpg"
                  alt="gallery image"
                  layout="responsive"
                  width={500}
                  height={800}
                  className="w-full h-[500px] object-cover object-center overflow-hidden"
                />
              )}
              {activeIndex === 4 && (
                <img
                  src="https://amazinghotel.com.vn/wp-content/uploads/2021/06/Room_31-scaled-500x500.jpg"
                  alt="gallery image"
                  layout="responsive"
                  width={500}
                  height={800}
                  className="w-full h-[500px] object-cover object-center overflow-hidden"
                />
              )}
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-4 md:gap-6">
            <button
              onClick={() => setActiveIndex(1)}
              className={`overflow-hidden rounded-lg border lg:rounded-xl ml-4 ${
                activeIndex === 1 ? "border-primary" : "border-transparent"
              }`}
            >
              <img
                src="https://amazinghotel.com.vn/wp-content/uploads/2021/06/Room_33-scaled-1920x650.jpg"
                alt="thumbnail-1"
                layout="responsive"
                width={20}
                height={100}
                className="w-[400px] h-[200px] object-cover object-center"
              />
            </button>
            <button
              onClick={() => setActiveIndex(2)}
              className={`overflow-hidden rounded-lg border lg:rounded-xl ${
                activeIndex === 2 ? "border-primary" : "border-transparent"
              }`}
            >
              <img
                src="https://amazinghotel.com.vn/wp-content/uploads/2021/06/Rooms_30-scaled-500x500.jpg"
                alt="thumbnail-2"
                layout="responsive"
                width={150}
                height={100}
                className="w-[250px] h-[300px]object-cover object-center"
              />
            </button>
            <button
              onClick={() => setActiveIndex(3)}
              className={`overflow-hidden rounded-lg border lg:rounded-xl ${
                activeIndex === 3 ? "border-primary" : "border-transparent"
              }`}
            >
              <img
                src="https://amazinghotel.com.vn/wp-content/uploads/2021/06/Room_32-scaled-500x500.jpg"
                alt="thumbnail-3"
                layout="responsive"
                width={150}
                height={100}
                className="w-[400px] h-[200px] object-cover object-center"
              />
            </button>
            <button
              onClick={() => setActiveIndex(4)}
              className={`overflow-hidden rounded-lg border lg:rounded-xl ${
                activeIndex === 4 ? "border-primary" : "border-transparent"
              }`}
            >
              <img
                src="https://amazinghotel.com.vn/wp-content/uploads/2021/06/Room_31-scaled-500x500.jpg"
                alt="thumbnail-4"
                layout="responsive"
                width={150}
                height={100}
                className="w-[400px] h-[200px] object-cover object-center"
              />
            </button>
          </div>
        </div>
      </section>
      <div className="text-start ml-10 text-amber-700 font-medium">
        <p>0 PER NIGHT</p>
      </div>
    </div>
  );
};

export default ContentImage;
