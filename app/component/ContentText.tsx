"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const ContentText = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <div className="mt-4 text-center " data-aos="fade-up">
      <p className="text-4xl font-semibold mt-10 mb-5">
        Lý do để bạn chọn chúng tôi
      </p>
      <p className=" opacity-55 text-center max-w-4xl mx-auto">
        Bạn muốn nghỉ dưỡng tại một nơi thoải mái, yên tĩnh và gần gũi với thiên
        nhiên? Bạn muốn được phục vụ bởi một đội ngũ nhân viên nhiệt tình, chu
        đáo và chuyên nghiệp? Bạn muốn có nhiều lựa chọn về dịch vụ giải trí,
        thư giãn và chăm sóc sức khỏe? Nếu bạn đồng ý với những điều trên, thì
        Amazing Hotel Sapa là lựa chọn hoàn hảo cho bạn
      </p>
    </div>
  );
};

export default ContentText;
