import React from "react";
// import { FaCompass } from "react-icons/fa";
// import { IoBedOutline } from "react-icons/io5";
// import { GiBathtub } from "react-icons/gi";
const ContentProfileRoom = () => {
  return (
    <div className="text-center">
      <div className="ml-10">
        <a href="" className="text-black hover:text-amber-800 text-[35px]">
          Superior Room
        </a>
        <div className="flex justify-center items-center mt-4 gap-7">
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
        <p className="text-base break-words  mt-4 opacity-70 text-center">
          Nếu bạn muốn có một phòng ngủ ấm cúng, tiện nghi và hợp túi tiền,
          phòng Superior Room là sự lựa chọn dành cho bạn. Phòng có không gian
          rộng rãi 23 m², có giường đôi hoặc hai giường đơn tùy theo nhu cầu của
          bạn. Phòng còn có tivi LCD, minibar, bàn làm việc, két sắt và phòng
          tắm riêng với đầy đủ tiện nghi. Từ ban công nhỏ của phòng, bạn có thể
          ngắm nhìn khung cảnh thành phố Sapa nhộn nhịp và đầy sắc màu
        </p>
      </div>
    </div>
  );
};

export default ContentProfileRoom;
