"use client"
import InputWithLabel from "@/components/Home/InputWithLabel";
import { Button } from "@/components/ui/button";
import { Mail, Phone, ShoppingBag } from "lucide-react";
import Image from "next/image";
import React from "react";

const page = () => {

  return (
    <>
      <div className="container mx-auto my-24">
        <div className="grid lg:grid-cols-2 gap-4">
          <div className="flex justify-center">
            <Image
              src={"/products/2.jpg"}
              alt=""
              width={450}
              height={450}
              className="rounded-xl"
            />
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="text-5xl font-semibold">
              Ultra Heavyweight Hoodie Basics
            </h2>
            <span className="text-main-color font-bold">
              Customize your t-shirt
            </span>
            <p>
              Talking about the basic of the basics: a good T-shirt. Especially
              with a cool design and nice fit in your corporate branding this
              will become the favorite item at your company. Rolled sleeves,
              cropped fit, pantone dyed, labels, … Make it your own!
            </p>
            <span className="text-main-color font-bold">Premium quality</span>
            <p>
              Quality is key! Our production and manufacturing processes are
              structured in such a way that we offer fully custom products
              starting from the raw rolls of fabric & guarantee high quality
              products as premium fashion retailers.
            </p>
            <span className="text-main-color font-bold">Sustainability</span>
            <p>
              We are a sustainable partner for our customers and therefore make
              conscious choices regarding the materials we use and have strict
              agreements with the partners we cooperate with.
            </p>
            <Button className="bg-main-color text-white py-5 flex gap-5 items-center border border-main-color hover:text-main-color hover:bg-white">
              <ShoppingBag />
              Request quote
            </Button>
          </div>
        </div>

        <div className="py-24 flex justify-center">
          <Image
            src={"/timeline.svg"}
            alt="timeline"
            width={1280}
            height={350}
          />
        </div>
      </div>
      <div className="bg-main-color text-white py-24 px-5">
        <div className="container mx-auto grid lg:grid-cols-2">
          <div>
            <h2 className="text-4xl font-semibold">Get your quote today</h2>
            <ul className="mt-12 flex flex-col gap-3">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5" /> <span>+32 51 20 11 98</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5" /> <span>info@teamsunday.com</span>
              </li>
              <li className="mt-5">1 - Fill out the form on the right.</li>
              <li>
                2 - One of our experts will get in touch with you within 24 hours.
              </li>
              <li>
                3 - We make a competitive quotation based on your custom needs.
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-5"> 
            <InputWithLabel label="First Name" name="fullName" onChange={(e) => console.log(e)} />
            <InputWithLabel label="Email" name="fullName" onChange={(e) => console.log(e)} />
            <InputWithLabel label="Company name" name="fullName" onChange={(e) => console.log(e)} />
            <Button className=" w-full">
              Send
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
