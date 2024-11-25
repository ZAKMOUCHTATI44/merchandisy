import Image from "next/image";
import React from "react";
import {  MoveRight } from "lucide-react";
import Link from "next/link";

const ExpressShop = () => {
  return (
    <div className="bg-black text-white container mx-auto py-24 my-24 rounded-2xl px-12  items-center gap-5">
      <div className="lg:flex justify-between items-start">
        <Image
          src={"/express-shop.svg"}
          alt="Express shop"
          width={250}
          height={150}
        />
        <Image src={"/express-shop.png"} width={1080} height={150} className="mx-auto" alt="Express shop" />
      </div>
      <div>
        <h2 className="text-5xl font-bold">Swag Packs</h2>
        <hr className="bg-black py-0.5 my-3" />
        <p>
          Your brand, our packs – the perfect match! Make your selection from
          our presets.
        </p>
        <div className="flex mt-5">
          <Link
            href={"/offres"}
            className="flex items-center hover:gap-5 transition-all ease-in-out duration-300 gap-3 py-3 rounded-lg text-black font-semibold px-12 bg-[#deff00]"
          >
            Browse now
            <MoveRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExpressShop;
