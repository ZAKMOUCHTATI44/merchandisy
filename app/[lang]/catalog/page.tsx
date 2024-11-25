import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const page = () => {
  const data = [
    {
      title: "jackets",
      image: "/catagories/jackets.png",
    },
    {
      title: "Sportswear",
      image: "/catagories/Sportswear.jpg",
    },
    {
      title: "sweatshirts",
      image: "/catagories/sweatshirts.png",
    },
    {
      title: "t-shirts",
      image: "/catagories/t-shirts.jpg",
    },
  ];

  return (
    <div>
      <div className="py-32 bg-main-color text-white">
        <h2 className="text-5xl font-bold text-center italic">
          Explore Your Style
        </h2>
      </div>
      <div className="grid lg:grid-cols-3 py-24 px-5 gap-5 container mx-auto">
        {data.map((item) => (
          <div
            key={item.title}
            className="h-[450px] w-full bg-cover bg-center relative hover:grayscale duration-300 ease-in-out transition-all"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="bg-black text-white p-5 absolute bottom-0 w-full">
                <Link href={`/products/${item.title}`}>
                    <h2 className="flex items-center justify-between capitalize">
                        {item.title}
                        <ArrowRight />
                    </h2>
                    <p>Perfect style for every day</p>
                </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
