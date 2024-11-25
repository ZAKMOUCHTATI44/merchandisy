import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const FeaturedProducts = ({
  content,
}: {
  content: {
    title: string;
    cta: string;
    items: {
        title: string;
        image:string
      }[];
  };
}) => {
  return (
    <div className="my-24">
      <h2 className="text-5xl font-bold uppercase text-main-color text-center my-12">
        {content.title}
      </h2>
      <div className="grid grid-cols-4 gap-15">
        {content.items.map(product => (
           <div
           key={content.title}
           className={` h-[650px] text-white p-5 flex flex-col justify-end hover:grayscale duration-700 ease-in-out transition-all bg-cover gap-5 `}
           style={{
             backgroundImage: `url(${product.image})`,
           }}
         >
                <h2 className="text-2xl font-bold">
                    {product.title}
                </h2>
                <Button asChild className="bg-main-color border border-main-color text-white hover:bg-transparent hover:text-main-color px-24 flex gap-5 items-center">
                    <Link href={"/catalog"}>
                        {content.cta}
                        <ArrowRight />
                    </Link>

                </Button>
            </div>
        ))}

      </div>
    </div>
  );
};

export default FeaturedProducts;
