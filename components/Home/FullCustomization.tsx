import { MoveRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const FullCustomization = () => {
  return (
    <div className="bg-[#d3d7d6] container mx-auto py-24 lg:my-24 rounded-2xl px-5 lg:px-12 grid lg:grid-cols-4 items-center gap-5">
      <div>
        <h2 className="text-2xl font-bold">Full Customization</h2>
        <hr className="bg-black py-[0.3px] my-3" />
        <p>
          Every piece is produced for you from scratch. Thanks to this, we can
          customize any detail: make a branded linen or match a thread color
          with your corporate one.
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
      <div className="col-span-3">
        <video className="w-full" autoPlay muted loop controls={false} >
          <source src="/video-full-customization.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default FullCustomization;
