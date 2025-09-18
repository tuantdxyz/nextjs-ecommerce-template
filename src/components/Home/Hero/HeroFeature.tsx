import React from "react";
import Image from "next/image";

const featureData = [
  {
    img: "/images/icons/icon-01.svg",
    title: "Miễn phí giao hàng",
    description: "Áp dụng cho đơn hàng từ 200$ trở lên",
  },
  {
    img: "/images/icons/icon-02.svg",
    title: "Đổi trả dễ dàng",
    description: "Hủy đơn trong vòng 1 ngày",
  },
  {
    img: "/images/icons/icon-03.svg",
    title: "Thanh toán an toàn",
    description: "Cam kết bảo mật tuyệt đối",
  },
  {
    img: "/images/icons/icon-04.svg",
    title: "Hỗ trợ 24/7",
    description: "Mọi lúc, mọi nơi",
  },
];

const HeroFeature = () => {
  return (
    <div className="max-w-[1060px] w-full mx-auto px-4 sm:px-8 xl:px-0">
      <div className="flex flex-wrap items-center gap-7.5 xl:gap-12.5 mt-10">
        {featureData.map((item, key) => (
          <div className="flex items-center gap-4" key={key}>
            <Image src={item.img} alt="icons" width={40} height={41} />

            <div>
              <h3 className="font-medium text-lg text-dark">{item.title}</h3>
              <p className="text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroFeature;
