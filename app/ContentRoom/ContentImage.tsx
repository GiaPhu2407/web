"use client";
import { useState } from "react";
import Image from "next/image";

const ContentImage = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section className="bg-white py-20 dark:bg-dark">
      <div className="container">
        <div className="mb-6">
          <div className="overflow-hidden rounded-xl">
            {activeIndex === 1 && (
              <img
                src="https://travelmart.vn/uploads/2017/08/23/20_i599db08c3efe5.jpg"
                alt="gallery image"
                layout="responsive"
                width={1200}
                height={800}
                className="w-full object-cover object-center"
              />
            )}
            {activeIndex === 2 && (
              <Image
                src="/images/galleries/gallery-05/image-2.jpg"
                alt="gallery image"
                layout="responsive"
                width={1200}
                height={800}
                className="w-full object-cover object-center"
              />
            )}
            {activeIndex === 3 && (
              <Image
                src="/images/galleries/gallery-05/image-3.jpg"
                alt="gallery image"
                layout="responsive"
                width={1200}
                height={800}
                className="w-full object-cover object-center"
              />
            )}
            {activeIndex === 4 && (
              <Image
                src="/images/galleries/gallery-05/image-4.jpg"
                alt="gallery image"
                layout="responsive"
                width={1200}
                height={800}
                className="w-full object-cover object-center"
              />
            )}
          </div>
        </div>
        <div className="flex items-center gap-2 sm:gap-4 md:gap-6">
          <button
            onClick={() => setActiveIndex(1)}
            className={`overflow-hidden rounded-lg border lg:rounded-xl ${
              activeIndex === 1 ? "border-primary" : "border-transparent"
            }`}
          >
            <Image
              src="/images/galleries/gallery-05/thumbnail-1.jpg"
              alt="thumbnail-1"
              layout="responsive"
              width={150}
              height={100}
              className="w-full object-cover object-center"
            />
          </button>
          <button
            onClick={() => setActiveIndex(2)}
            className={`overflow-hidden rounded-lg border lg:rounded-xl ${
              activeIndex === 2 ? "border-primary" : "border-transparent"
            }`}
          >
            <Image
              src="/images/galleries/gallery-05/thumbnail-2.jpg"
              alt="thumbnail-2"
              layout="responsive"
              width={150}
              height={100}
              className="w-full object-cover object-center"
            />
          </button>
          <button
            onClick={() => setActiveIndex(3)}
            className={`overflow-hidden rounded-lg border lg:rounded-xl ${
              activeIndex === 3 ? "border-primary" : "border-transparent"
            }`}
          >
            <Image
              src="/images/galleries/gallery-05/thumbnail-3.jpg"
              alt="thumbnail-3"
              layout="responsive"
              width={150}
              height={100}
              className="w-full object-cover object-center"
            />
          </button>
          <button
            onClick={() => setActiveIndex(4)}
            className={`overflow-hidden rounded-lg border lg:rounded-xl ${
              activeIndex === 4 ? "border-primary" : "border-transparent"
            }`}
          >
            <Image
              src="/images/galleries/gallery-05/thumbnail-4.jpg"
              alt="thumbnail-4"
              layout="responsive"
              width={150}
              height={100}
              className="w-full object-cover object-center"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContentImage;
