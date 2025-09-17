import { Product } from "@/types/product";

const shopData: Product[] = [
  {
    id: 1,
    title: "Candles Itaewon 55",
    slug: "candles-itaewon-55",
    reviews: 15,
    price: 59.0,
    discountedPrice: 29.0,
    description: "Nến thơm hương hoa nhẹ nhàng, thích hợp cho phòng ngủ.",
    sale: "SALE 20% OFF",
    rating: 4.7,
    status: "available",
    imgs: {
      thumbnails: [
        "/images/products/candles-bg-09.png",
        "/images/products/candles-bg-10.png",
      ],
      previews: [
        "/images/products/candles-bg-09.png",
        "/images/products/candles-bg-10.png",
      ],
    },
  },
  {
    id: 2,
    title: "Candles Itaewon 56",
    slug: "candles-itaewon-56",
    reviews: 5,
    price: 899.0,
    discountedPrice: 99.0,
    description: "Nến thơm cao cấp, thời gian cháy lâu, an toàn cho sức khỏe.",
    sale: "SALE 10% OFF",
    rating: 4.2,
    status: "available",
    imgs: {
      thumbnails: [
        "/images/products/candles-bg-03.png",
        "/images/products/candles-bg-04.png",
      ],
      previews: [
        "/images/products/candles-bg-03.png",
        "/images/products/candles-bg-04.png",
      ],
    },
  },
  {
    id: 3,
    title: "Candles Itaewon 57",
    slug: "candles-itaewon-57",
    reviews: 8,
    price: 59.0,
    discountedPrice: 29.0,
    description: "Nến thơm hương gỗ, tạo cảm giác thư giãn.",
    sale: "SALE 15% OFF",
    rating: 4.5,
    status: "available",
    imgs: {
      thumbnails: [
        "/images/products/candles-bg-13.png",
        "/images/products/candles-bg-13.png",
      ],
      previews: [
        "/images/products/candles-bg-13.png",
        "/images/products/candles-bg-13.png",
      ],
    },
  },
  {
    id: 4,
    title: "Candles Itaewon 58",
    slug: "candles-itaewon-58",
    reviews: 6,
    price: 59.0,
    discountedPrice: 29.0,
    description: "Nến thơm thiên nhiên, thích hợp làm quà tặng.",
    sale: "SALE 5% OFF",
    rating: 4.0,
    status: "out of stock",
    imgs: {
      thumbnails: [
        "/images/products/candles-bg-14.png",
        "/images/products/candles-bg-14.png",
      ],
      previews: [
        "/images/products/candles-bg-14.png",
        "/images/products/candles-bg-14.png",
      ],
    },
  },
];

export default shopData;
