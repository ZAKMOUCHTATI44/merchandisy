import { ArrowRight, MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const GetStartedNow = () => {
  const data = [
    {
      title: "Schedule a call",
      description: "Let's call to see how we can help.",
      image : "/portfolio/avatar/TuNv2lg2Iu4tBj7i1GY0mKuHLk.jpg"
    },
    {
      title: "Contact Form",
      description: "Tell us about your project.",
      image : "/portfolio/avatar/o7Dyo4ApYXKWzLNbG8DrCgfcQfk.jpg"
    },
    {
      title: "Create an account",
      description: "Look around in our free to use Merch Platform.",
      image : "/portfolio/avatar/aYzCKlbBnoe71GV4ZXh6xsvB44.jpg"
    },
  ];
  return (
    <div className="container mx-auto my-24 px-12">
      <h2 className="font-bold text-5xl">Let’s Get Started !</h2>
      <span className="text-gray-500">
      Browse our catalogue and get your quote now
      </span>
      <div className="grid grid-cols-3 gap-12">
        <div className="col-span-2 relative bg-[#f4fbf8] borde border-[#222222] shadow-md p-5 py-16 flex flex-col gap-5">
          <div className="text-[12px]">
            <div className="flex gap-2">
              <button className="border-main-color border text-main-color p-1 ">
                Platfrom
              </button>
              <button className="border-main-color border text-main-color p-1 ">
                Platfrom
              </button>
            </div>
            <h2 className="text-3xl font-bold">Browse our Catalogue</h2>
          </div>
          <div className="flex items-center justify-between">
            <Link
              href={"/shop"}
              className="flex items-center justify-center hover:gap-5 transition-all ease-in-out duration-300 gap-3 py-3 rounded-lg font-semibold px-12 bg-main-color capitalize text-white"
            >
              To Catalogue
              <MoveRight
                className="h-7 w-7 p-[5px] rounded-full"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                }}
              />
            </Link>
            <Image
              src={"/portfolio/avatar/uyEAB20yWcCf6MLAmoPD6KUbDc.png"}
              alt="GET STARTED ?"
              className="absolute right-0"
              width={200}
              height={200}
            />
          </div>
        </div>
        <div className="flex flex-col gap-5">
            {data.map(item => (
                <div key={item.title} className="flex gap-5 justify-between hover:bg-main-color hover:text-white transition-all ease-in-out duration-500 rounded-lg items-center border border-main-color p-5">
                    <div>
                        <h2>
                        {item.title}
                        </h2>
                        <p>
                            {item.description}
                        </p>
                    </div>
                    <ArrowRight />

                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default GetStartedNow;
