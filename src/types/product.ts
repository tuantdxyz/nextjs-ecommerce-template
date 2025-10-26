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
  brand: string;
  model: string;
  size: string;
  type: string;
  specifications: string;
  care: string;
  imgs?: {
    thumbnails: string[];
    previews: string[];
  };
};
