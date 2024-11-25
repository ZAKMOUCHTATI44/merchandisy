import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const page = ({ params }: { params: { categoryName: string } }) => {
  const products = [
    {
      title:"Hoodie Basic",
      price:"€48.39-€54.99 netto",
      image:"/products/1.jpg"
    },
    {
      title:"Ultra Heavyweight Hoodie Basics",
      price:"€48.39-€54.99 netto",
      image:"/products/2.jpg"
    },
    {
      title:"Hoodie MustHave",
      price:"€48.39-€54.99 netto",
      image:"/products/3.jpg"
    },
    {
      title:"Organic cotton brushed Hoodie with Carbon Finish",
      price:"€48.39-€54.99 netto",
      image:"/products/4.jpg"
    },
    {
      title:"Hoodie Oversize",
      price:"€48.39-€54.99 netto",
      image:"/products/5.jpg"
    },
    {
      title:"Hoodie Premium",
      price:"€48.39-€54.99 netto",
      image:"/products/6.jpg"
    },
    {
      title:"Hoodie with Interchangable Patches",
      price:"€48.39-€54.99 netto",
      image:"/products/7.jpg"
    },
    {
      title:"Hoodie Medium",
      price:"€48.39-€54.99 netto",
      image:"/products/8.jpg"
    },
  ]
  return (
    <div>
      <div className="py-32 bg-main-color text-white">
        <h2 className="text-5xl font-bold text-center uppercase">
          {params.categoryName}
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 py-24 gap-5 container mx-auto">
        {products.map((item) => (
          <div
            key={item.title}
            className="h-[650px] w-full bg-cover bg-center relative hover:grayscale duration-300 ease-in-out transition-all"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="bg-black text-white p-5 absolute bottom-0 w-full">
                <Link href={`/products/details`}>
                    <h2 className="flex items-center justify-between capitalize">
                        {item.title}
                        <ArrowRight />
                    </h2>
                </Link>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default page;
