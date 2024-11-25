import React from "react";
import Link from "next/link";
import { BadgeCheck, MoveRight } from "lucide-react";
import Image from "next/image";

const Hero = ({
  content,
}: {
  content: {
    title: string;
    subTitle: string;
    cta: {
      label: string;
      href: string;
    }[];
    items: string[];
  };
}) => {
  return (
    <div className="bg text-black ">
      <div className="container mx-auto  grid lg:grid-cols-2 items-center px-5 py-12">
        <div className="flex flex-col gap-5">
          <h2 className="text-5xl lg:text-7xl font-bold">
            {content.title}
          </h2>
          <p className="t text-lg text-gray-700">{content.subTitle}</p>
          <div className="grid grid-cols-2 gap-5">
            <Link
              href={'shop'}
              className="flex items-center justify-center hover:gap-5 transition-all ease-in-out duration-300 gap-3 py-3 rounded-lg font-semibold px-12 bg-main-color capitalize text-white"
            >
              {content.cta[0].label}
              <MoveRight
                className="h-7 w-7 p-[5px] rounded-full"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                }}
              />
            </Link>
            <Link
              href={'contact-us'}
              className="flex items-center justify-center hover:gap-5 transition-all ease-in-out duration-300 gap-3 py-3 rounded-lg font-semibold px-12 bg-white capitalize text-main-color border border-main-color"
            >
              {content.cta[1].label}
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-1">
            {content.items.map((item) => (
              <p key={item} className="flex gap-3 items-center text-gray-500">
                <BadgeCheck
                  className="h-5 w-5"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                  }}
                />
                {item}
              </p>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5 px-12">
          <div className="flex flex-col gap-5">
            <Image
              src={"/hero/1.jpg"}
              className=" bg-[#f1f1f1] rounded-lg"
              alt="HERO"
              width={800}
              height={350}
            />
             <Image
              src={"/hero/3.jpeg"}
              className=" bg-[#f1f1f1] rounded-lg"
              alt="HERO"
              width={800}
              height={350}
            />
          </div>
          <div className="flex flex-col gap-5">
           
            <Image
              src={"/hero/2.jpg"}
              className=" bg-[#f1f1f1] rounded-lg"
              alt="HERO"
              width={800}
              height={480}
            />
            <Image
              src={"/hero/4.jpeg"}
              className=" bg-[#f1f1f1] rounded-lg"
              alt="HERO"
              width={800}
              height={350}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
