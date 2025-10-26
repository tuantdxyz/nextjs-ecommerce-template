import Home from "@/components/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Natural scented candle | Relaxing Candles",
  description: "This is Home for Candles Template",
  // other metadata
};

export default function HomePage() {
  return (
    <>
      <Home />
    </>
  );
}
