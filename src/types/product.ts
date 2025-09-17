export type Product = {
  title: string;
  slug: string;
  reviews: number;
  price: number;
  discountedPrice: number;
  id: number;
  description: string;
  sale: string;
  rating: number;
  status: "available" | "out of stock";
  imgs?: {
    thumbnails: string[];
    previews: string[];
  };
};
