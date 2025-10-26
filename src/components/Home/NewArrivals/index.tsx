import React from "react";
import Image from "next/image";
import Link from "next/link";
import ProductItem from "@/components/Common/ProductItem";
import shopData from "@/components/Shop/shopData";

const NewArrival = () => {
  return (
    <section className="overflow-hidden pt-15">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        {/* <!-- section title --> */}
        <div className="mb-7 flex items-center justify-between">
          <div>
            <span className="flex items-center gap-2.5 font-medium text-dark mb-1.5">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Ngọn lửa */}
                <path
                  d="M12 2C12 2 13.5 4.5 13.5 6C13.5 7.10457 12.6046 8 11.5 8C10.3954 8 9.5 7.10457 9.5 6C9.5 4.5 12 2 12 2Z"
                  fill="#FFD700"
                  stroke="#FFA500"
                  strokeWidth="1"
                />
                {/* Thân nến */}
                <rect
                  x="10"
                  y="8"
                  width="4"
                  height="10"
                  rx="2"
                  fill="#FFF"
                  stroke="#3C50E0"
                  strokeWidth="1.5"
                />
                {/* Đế nến */}
                <rect
                  x="8"
                  y="18"
                  width="8"
                  height="2"
                  rx="1"
                  fill="#E0E7FF"
                  stroke="#3C50E0"
                  strokeWidth="1"
                />
              </svg>
              This Week’s - New Arrivals
            </span>
            {/* <h2 className="font-semibold text-xl xl:text-heading-5 text-dark">
              New Arrivals
            </h2> */}
          </div>

          {/* <Link
            href="/shop-with-sidebar"
            className="inline-flex font-medium text-custom-sm py-2.5 px-7 rounded-md border-gray-3 border bg-gray-1 text-dark ease-out duration-200 hover:bg-dark hover:text-white hover:border-transparent"
          >
            View All
          </Link> */}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-7.5 gap-y-9">
          {/* <!-- New Arrivals item --> */}
          {shopData.map((item, key) => (
            <ProductItem item={item} key={key} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrival;
