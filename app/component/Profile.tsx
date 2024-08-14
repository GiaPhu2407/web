"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Profile = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <div className="bg-zinc-200 w-full h-auto box-border relative mt-10">
      {/* Profile1 */}
      <div className="flex pt-10 pl-[170px] justify-center items-center">
        <div className="mr-10" data-aos="fade-right">
          <p className="text-3xl font-semibold pb-5">Vị trí thuận lợi</p>
          <p>
            Khách sạn nằm ngay trung tâm thị trấn Sapa, chỉ cách Nhà thờ Đá và
            Quảng trường Sapa 200 mét, cách Hồ Sapa 500 mét. Khách sạn có tầm
            nhìn hướng ra thung lũng Mường Hoa và dãy Hoàng Liên Sơn, cho bạn
            cảm giác gần gũi với thiên nhiên
          </p>
        </div>
        <div className="rounded-lg overflow-hidden" data-aos="fade-left">
          <img
            src="https://amazinghotel.com.vn/wp-content/uploads/2023/07/Building_01-1.jpg"
            alt=""
            className="rounded-3xl mr-[400px] pr-[100px] overflow-hidden w-full"
          />
        </div>
      </div>
      {/* Profile2 */}
      <div className="flex pt-10 pl-[170px] justify-center items-center">
        <div className="rounded-lg overflow-hidden" data-aos="fade-right">
          <img
            src="https://wedo.com.vn/wp-content/uploads/2022/06/phong-ngu-dep-cho-nam-1-1.jpg"
            alt=""
            className="rounded-3xl mr-[400px] pr-[100px] overflow-hidden w-full"
          />
        </div>
        <div className="mr-10" data-aos="fade-left">
          <p className="text-3xl font-semibold pb-5">
            Phòng nghỉ sang trọng và tiện nghi
          </p>
          <p>
            Khách sạn có 82 phòng nghỉ với nhiều loại phòng khác nhau, từ phòng
            Superior view thành phố cho đến phòng Pen house. Mỗi phòng đều được
            trang bị đầy đủ tiện nghi như điều hòa, máy sưởi, minibar, tivi LCD,
            bàn làm việc, két sắt và phòng tắm riêng. Mỗi phòng đều có ban công
            riêng, cho bạn ngắm nhìn khung cảnh tuyệt đẹp của Sapa
          </p>
        </div>
      </div>
      {/* Proflie3 */}
      <div className="flex pt-10 pl-[170px] justify-center items-center">
        <div className="mr-10" data-aos="fade-right">
          <p className="text-3xl font-semibold pb-5">
            Dịch vụ đa dạng và chất lượng
          </p>
          <p>
            Khách sạn có nhà hàng, bar, hồ bơi trong nhà, spa, gym và karaoke để
            phục vụ nhu cầu giải trí của du khách. Khách sạn còn có dịch vụ
            massage thư giãn, giặt là và đặt tour du lịch. Nhân viên khách sạn
            thân thiện, nhiệt tình và chuyên nghiệp, luôn sẵn sàng phục vụ mọi
            yêu cầu của khách hàng
          </p>
        </div>
        <div className="rounded-lg overflow-hidden" data-aos="fade-left">
          <img
            src="https://moitruongdulich.vn/mypicture/images/hoi-an-luna-villa-homestay.jpg"
            alt=""
            className="rounded-3xl mr-[400px] pr-[100px] overflow-hidden w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
