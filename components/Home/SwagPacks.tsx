import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SwagPacks = () => {
  return (
    <div className="bg-[#d3d7d7] container mx-auto py-24 my-24 rounded-2xl px-12 grid lg:grid-cols-2 items-center gap-5">
      <div className="">
        <Image
          src={"/swag-packs.jpg"}
          alt="SwagPacks"
          className="rounded-2xl "
          width={1080}
          height={450}
        />
      </div>
      <div>
        <h2 className="text-5xl font-bold">Swag Packs</h2>
        <hr className="bg-black py-0.5 my-3" />
        <p>
          Your brand, our packs – the perfect match! Make your selection from
          our presets.
        </p>
        <div className="flex">
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

export default SwagPacks;
