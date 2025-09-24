import { v4 as uid } from "uuid";
import air from "@/assets/iair.webp";
import air1 from "@/assets/air1.webp";
import air2 from "@/assets/air2.webp";
import air3 from "@/assets/air3.webp";
import fold from "@/assets/pfold.png";
import fold1 from "@/assets/fold1.png";
import fold2 from "@/assets/fold2.png";
import fold3 from "@/assets/fold3.png";
import surface from "@/assets/msurface.png";
import surface1 from "@/assets/surface1.png";
import surface2 from "@/assets/surface2.png";
import surface3 from "@/assets/surface3.png";
import buds from "@/assets/sbuds.webp";
import buds1 from "@/assets/buds1.avif";
import buds2 from "@/assets/buds2.avif";
import buds3 from "@/assets/buds3.avif";
import ps5 from "@/assets/sps5.webp";
import ps51 from "@/assets/ps51.webp";
import ps52 from "@/assets/ps52.webp";
import ps53 from "@/assets/ps53.webp";

let mockData = [
  {
    id: "9f71929f-bf92-475b-acc4-6f63768fe7ee",
    brand: "iPhone",
    model: "Air",
    price: 999,
    image: air,
    description:
      "iPhone Air is the thinnest iPhone ever, powered by the A19 Pro chip. It’s more durable than any previous iPhone, with a polished titanium frame, a 3x better scratch-resistant Ceramic Shield 2 front, and a 4x more crack-resistant Ceramic Shield back. Smarter group selfies and Dual Capture video with the new Center Stage front camera. The 48MP Fusion Main camera with 2x Telephoto supports the latest advanced features like next‑generation portraits and more. Immersive 6.5‑inch Super Retina XDR display with ProMotion up to 120Hz. All‑day battery life. Helpful Apple Intelligence tools like Clean Up and more.",
    images: [air1, air2, air3],
  },

  {
    id: "79385e64-6533-40a0-b2b6-4dbc35180292",
    brand: "Pixel",
    model: "10 Pro Fold",
    price: 1799,
    image: fold,
    description:
      "Pixel 10 Pro Fold is Google’s most advanced foldable yet, powered by the new Tensor G5 chip. Built with a polished aluminum frame and protected by Gorilla Glass Victus 2, it’s tougher than ever. The 8-inch Super Actua Flex display unfolds into an expansive canvas with LTPO smoothness up to 120Hz, while the 6.4-inch Actua cover screen makes one-hand use effortless.",
    images: [fold1, fold2, fold3],
  },
  {
    id: "b92415dc-593b-4000-9034-b2ea96eaaa83",
    brand: "Microsoft",
    model: "Surface Laptop 6",
    price: 1099,
    image: surface,
    description:
      "Surface Laptop 6 is the thinnest, most powerful Surface Laptop yet, built to balance elegance and performance. Powered by the latest Intel Core Ultra processors with AI acceleration, it delivers lightning-fast multitasking and smarter on-device intelligence. The precision-milled aluminum body is more durable than ever, with vibrant color options to match your style.",
    images: [surface1, surface2, surface3],
  },
  {
    id: "2d445cf9-3a91-4cd3-9b42-79920d8fa343",
    brand: "Samsung",
    model: "Buds 3 Pro",
    price: 249,
    image: buds,
    description:
      "Galaxy Buds3 Pro take your audio experience to a whole new level. Thanks to a 24-bit codec, you'll hear every detail with incredible clarity. And our new dual-channel amplifier minimizes distortion. What's more, the improved 2-way speaker system with a planar tweeter will immerse you in rich, detailed sound. Galaxy Buds3 Pro feature advanced noise cancellation, enhanced by Galaxy AI technologies. Now you can completely immerse yourself in your music, blocking out the outside world. And the real-time translation feature makes listening to foreign content as comfortable as possible. Discover new facets of your Buds!",
    images: [buds1, buds2, buds3],
  },
  {
    id: "c3bc6fdb-f9e7-4c73-b925-5350b3c187c5",
    brand: "Sony",
    model: "PS5 Pro",
    price: 899,
    image: ps5,
    description:
      "Galaxy Buds3 Pro take your audio experience to a whole new level. Thanks to a 24-bit codec, you'll hear every detail with incredible clarity. And our new dual-channel amplifier minimizes distortion. What's more, the improved 2-way speaker system with a planar tweeter will immerse you in rich, detailed sound. Galaxy Buds3 Pro feature advanced noise cancellation, enhanced by Galaxy AI technologies. Now you can completely immerse yourself in your music, blocking out the outside world. And the real-time translation feature makes listening to foreign content as comfortable as possible. Discover new facets of your Buds!",
    images: [ps51, ps52, ps53],
  },
];

export default mockData;
