import Link from "next/link";
import React from "react";

const WhatCanWeDoForYou = ({ title }: { title: string }) => {
  const buttonObject = [
    { label: "Merch Packs", href: "/merch-packs" },
    { label: "Christmas", href: "/christmas" },
    { label: "Events", href: "/events" },
    { label: "Sustainability", href: "/sustainability" },
    { label: "Warehousing", href: "/warehousing" },
    { label: "Shipping", href: "/shipping" },
    { label: "Merch Platform", href: "/merch-platform" },
    { label: "Merch Stores", href: "/merch-stores" },
  ];

  return (
    <div className="container mx-auto py-24 flex flex-col gap-10">
      <h2 className="text-5xl font-bold">{title}</h2>
      <div className="flex gap-5">
        {buttonObject.map((item) => (
          <Link
            href={item.href}
            key={item.href}
            className="border-2 border-main-color text-main-color font-semibold px-5 py-2 rounded-md hover:bg-main-color hover:text-white duration-500 transition-all ease-in-out"
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* <div className="flex gap-5 justify-end">
        <div className="bg-[#F4F4F4] flex flex-col justify-between  text-main-color">
          <div className="pt-5 px-5">
            <p className="font-semibold">MERCH Packs</p>
            <span className="font-bold text-xl">Create merch packs for <br /> team members or new hires.</span>
          </div>
          <Image
            src={"/WhatCanWeDoForYou/1.jpg"}
            alt="WhatCanWeDoForYou 1 "
            width={350}
            height={1080}
          />
        </div>
        <div className="bg-[#F4F4F4] flex flex-col justify-between  text-main-color">
          <div className="pt-5 px-5">
            <p className="font-semibold">MERCH Packs</p>
            <span className="font-bold text-xl">Create merch packs for <br /> team members or new hires.</span>
          </div>
          <Image
            src={"/WhatCanWeDoForYou/1.jpg"}
            alt="WhatCanWeDoForYou 1 "
            width={350}
            height={1080}
          />
        </div>
        <div className="bg-[#F4F4F4]  flex flex-col justify-between text-main-color">
          <div className="pt-5 px-5">
            <p className="font-semibold">MERCH Packs</p>
            <span className="font-bold text-xl">Create merch packs for <br /> team members or new hires.</span>
          </div>
          <Image
            src={"/WhatCanWeDoForYou/1.jpg"}
            alt="WhatCanWeDoForYou 1 "
            width={350}
            height={1080}
          />
        </div>
        <div className="bg-[#F4F4F4] flex flex-col justify-between  text-main-color">
          <div className="pt-5 px-5">
            <p className="font-semibold">MERCH Packs</p>
            <span className="font-bold text-xl">Create merch packs for <br /> team members or new hires.</span>
          </div>
          <Image
            src={"/WhatCanWeDoForYou/1.jpg"}
            alt="WhatCanWeDoForYou 1 "
            width={350}
            height={1080}
          />
        </div>

      </div> */}
    </div>
  );
};

export default WhatCanWeDoForYou;
