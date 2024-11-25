"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import {
  Package, // Icon for Merch Packs
  Box, // Icon for Custom Products
  Home, // Icon for Warehousing
  Globe, // Icon for Shipping
  DollarSign, // Icon for Pricing
  Users, // Icon for Onboarding Packs
  Gift, // Icon for Christmas Packs
  Calendar, // Icon for Event Merch
  Briefcase, // Icon for Corporate Gifts
  BarChart2,
  Headphones,
  CircleHelp,
  NotepadTextDashed,
  CloudCog,
  Recycle,
  UserPlus,
  Phone,
  Handshake,
  FileText,
  MessageSquare, // Icon for Sales & Marketing
} from "lucide-react";

const data = [
  "Packaging",
  "Apparel",
  "Office",
  "Drinkware",
  "Bags",
  "Tech",
  "Event",
  "Basic",
  "Home",
  "Wellness",
];

const contactInfo = [
  {
    title: "For New Customers",
    description: "Discover how we can help you.",
    icon: <UserPlus />
  },
  {
    title: "For Existing Customers",
    description: "Reach out to the support team.",
    icon: <Phone />
  },
  {
    title: "For Partnerships",
    description: "Explore our partnership program.",
    icon: <Handshake />
  },
  {
    title: "For Enterprise | Tenders",
    description: "Let us know about your project.",
    icon: <FileText />
  },
  {
    title: "For Vendors, Media and Jobs",
    description: "Let us know your requests.",
    icon: <MessageSquare />
  }
];

const services = [
  {
    title: "Merch Packs",
    description: "Tailored packs for every occasion.",
    icon: <Package className="text-main-color" />,
  },
  {
    title: "Custom Products",
    description: "Customised products, amplified branding.",
    icon: <Box className="text-main-color" />,
  },
  {
    title: "Warehousing",
    description: "Storage and fulfilment.",
    icon: <Home className="text-main-color" />,
  },
  {
    title: "Shipping",
    description: "Worldwide delivery solutions.",
    icon: <Globe className="text-main-color" />,
  },
  {
    title: "Pricing",
    description: "Transparent costs, value-driven options.",
    icon: <DollarSign className="text-main-color" />,
  },
];

const useCases = [
  {
    title: "Onboarding Packs",
    description: "Welcome packs for new team members.",
    icon: <Users className="text-main-color" />,
  },
  {
    title: "Christmas Packs",
    description: "Get an early start!",
    icon: <Gift className="text-main-color" />,
  },
  {
    title: "Event Merch",
    description: "Memorable merch for events and exhibitions.",
    icon: <Calendar className="text-main-color" />,
  },
  {
    title: "Corporate Gifts",
    description: "For employees, customers and relations.",
    icon: <Briefcase className="text-main-color" />,
  },
  {
    title: "Team & Office",
    description: "Branded products for the team.",
    icon: <Users className="text-main-color" />,
  },
];

const items = [
  {
    name: "Customer Stories",
    icon: <Headphones className="text-main-color" />,
    description: "Customer success videos.",
  },
  {
    name: "Reviews",
    icon: <NotepadTextDashed className="text-main-color" />,
    description: "Feedback from customers.",
  },
  {
    name: "FAQ",
    icon: <CircleHelp className="text-main-color" />,
    description: "Answers to your merch queries.",
  },
];

const aboutItems = [
  {
    name: "About Us",
    description: "Why Monday Merch?",
    icon: <Users className="text-main-color" />,
  },
  {
    name: "Jobs",
    icon: <CloudCog className="text-main-color" />,
    description: "Join our team",
  },
  {
    name: "Sustainability",
    icon: <Recycle className="text-main-color" />,
    description: "Eco-friendly practices, mindful products.",
  },
];

function NavLinks() {
  return (
    <NavigationMenu className="font-bold hidden lg:flex ">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="uppercase">
            Services
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[750px] lg:w-[950px] lg:grid-cols-3" style={{ width :'950px'}}>
              <li className="">
                <NavigationMenuLink asChild>
                  <Link
                    className="bg-white py-5 flex flex-col gap-5 h-full w-full select-none justify-end rounded-md no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <h2 className="text-main-color font-bold">
                      DIGITAL SOLUTIONS
                    </h2>
                    <div className="bg-[#F1F1F1] px-5">
                      <div className="mb-2 mt-4 font-medium flex justify-between items-start text-[12px]">
                        <p>
                          Merch Platform
                          <span className="block text-[10px]">
                            Streamline merch management.
                          </span>
                        </p>
                        <button className="border-main-color border text-main-color p-1 ">
                          Platfrom
                        </button>
                      </div>
                      <Image
                        src={"/header/1.jpg"}
                        alt="Header 1"
                        width={300}
                        height={75}
                      />
                    </div>
                    <div className="bg-[#F1F1F1] px-5">
                      <div className="mb-2 mt-4 font-medium flex justify-between items-start text-[12px]">
                        <p>
                          Merch Platform
                          <span className="block text-[10px]">
                            Streamline merch management.
                          </span>
                        </p>
                        <button className="border-main-color border text-main-color p-1 ">
                          Platfrom
                        </button>
                      </div>
                      <Image
                        src={"/header/1.jpg"}
                        alt="Header 1"
                        width={300}
                        height={75}
                      />
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
              <div className="py-5 flex flex-col gap-5">
                <h2 className="text-main-color font-bold">Services</h2>
                {services.map((item) => (
                  <div key={item.title} className="flex  gap-2 items-center">
                    {item.icon}
                    <div className=" text-[12px]">
                      <p className="">{item.title}</p>
                      <span className="text-gray-600">{item.description}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="py-5 flex flex-col gap-5">
                <h2 className="text-main-color font-bold">USE CASES</h2>
                {useCases.map((item) => (
                  <div key={item.title} className="flex  gap-2 items-center">
                    {item.icon}
                    <div className=" text-[12px]">
                      <p className="">{item.title}</p>
                      <span className="text-gray-600">{item.description}</span>
                    </div>
                  </div>
                ))}
              </div>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="uppercase">
            Products
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[750px] lg:w-[950px] lg:grid-cols-4"  style={{ width :'950px'}}>
              <li className="">
                <NavigationMenuLink asChild>
                  <Link
                    className="bg-white py-5 flex flex-col gap-5 h-full w-full select-none justify-start rounded-md no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <h2 className="text-main-color font-bold">Categories</h2>
                    <ul className="flex flex-col gap-3">
                      {data.map((item) => (
                        <li key={item} className="text-main-color font-medium">
                          <Link href={"/shop"}>
                          {item}  
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </Link>
                </NavigationMenuLink>
              </li>
              <div className="bg-[#F4F4F4] flex flex-col justify-between  text-main-color">
                <div className="pt-5 px-5">
                  <p className="font-semibold">MERCH Packs</p>
                  <span className="font-bold text-sm">
                    Create merch packs for <br /> team members or new hires.
                  </span>
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
                  <span className="font-bold text-sm">
                    Create merch packs for <br /> team members or new hires.
                  </span>
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
                  <span className="font-bold text-sm">
                    Create merch packs for <br /> team members or new hires.
                  </span>
                </div>
                <Image
                  src={"/WhatCanWeDoForYou/1.jpg"}
                  alt="WhatCanWeDoForYou 1 "
                  width={350}
                  height={1080}
                />
              </div>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="uppercase">
            Resources
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[750px] lg:w-[1250px] lg:grid-cols-4"  style={{ width :'950px'}}>
              <div className="py-5 flex flex-col gap-5">
                <h2 className="text-main-color font-bold">TOOLS & RESOURCES</h2>
                <div className="bg-[#F1F1F1] px-5 py-3 rounded-lg flex gap-3">
                  <Image
                    src={"/header/navbar/1.png"}
                    alt="Header 1"
                    width={75}
                    height={75}
                  />
                  <div className="mb-2 mt-4 font-medium flex items-center text-[12px]">
                    <p>
                      Employee Gift Ideas
                      <span className="block text-[10px]">
                        The Ultimate Guide
                      </span>
                    </p>
                  </div>
                </div>
                <div className="bg-[#F1F1F1] px-5 py-3 rounded-lg flex gap-3">
                  <Image
                    src={"/header/navbar/2.jpg"}
                    alt="Header 2"
                    width={75}
                    height={75}
                  />
                  <div className="mb-2 mt-4 font-medium flex items-center text-[12px]">
                    <p>
                      Employee Gift Ideas
                      <span className="block text-[10px]">
                        The Ultimate Guide
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="py-5 flex flex-col gap-5">
                <h2 className="text-main-color font-bold">CUSTOMERS</h2>
                {items.map((item) => (
                  <div key={item.name} className="flex  gap-2 items-center">
                    {item.icon}
                    <div className=" text-[12px]">
                      <p className="">{item.name}</p>
                      <span className="text-gray-600">{item.description}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="py-5 flex flex-col gap-5">
                <h2 className="text-main-color font-bold">MERCH ACADEMY</h2>
                <div className="grid grid-cols-2 gap-5">
                  <Image
                    className="bg-[#F1F1F1] "
                    src={"/header/navbar/book-1.jpg"}
                    alt="BOOK 1"
                    width={100}
                    height={100}
                  />
                  <Image
                    className="bg-[#F1F1F1] "
                    src={"/header/navbar/book-2.jpg"}
                    alt="BOOK 1"
                    width={100}
                    height={100}
                  />
                  <Image
                    className="bg-[#F1F1F1] "
                    src={"/header/navbar/book-3.jpg"}
                    alt="BOOK 1"
                    width={100}
                    height={100}
                  />
                  <Image
                    className="bg-[#F1F1F1] "
                    src={"/header/navbar/book-4.jpg"}
                    alt="BOOK 1"
                    width={100}
                    height={100}
                  />
                </div>
              </div>
              <div className="py-5 flex flex-col gap-5">
                <h2 className="text-main-color font-bold">About</h2>
                {aboutItems.map((item) => (
                  <div key={item.name} className="flex  gap-2 items-center">
                    {item.icon}
                    <div className=" text-[12px]">
                      <p className="">{item.name}</p>
                      <span className="text-gray-600">{item.description}</span>
                    </div>
                  </div>
                ))}
              </div>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="uppercase">
            Contact
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 p-4 md:w-[500px] lg:w-[750px] lg:grid-cols-2"  style={{ width :'750px'}}>
              <div className="py-5 flex flex-col gap-5">
                <h2 className="text-main-color font-bold">CUSTOMERS</h2>
                {contactInfo.map((item) => (
                  <div key={item.title} className="flex  gap-2 items-center">
                    {item.icon}
                    <div className=" text-[12px]">
                      <p className="">{item.title}</p>
                      <span className="text-gray-600">{item.description}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="py-5 flex flex-col gap-5">
                <h2 className="text-main-color font-bold">CONTACT SALES</h2>
                <div className="flex flex-col gap-5">
                  <Image
                    className="bg-[#F1F1F1] "
                    src={"/header/navbar/book-1.jpg"}
                    alt="BOOK 1"
                    width={100}
                    height={100}
                  />
                  <Image
                    className="bg-[#F1F1F1] "
                    src={"/header/navbar/book-2.jpg"}
                    alt="BOOK 1"
                    width={100}
                    height={100}
                  />
                </div>
              </div>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default NavLinks;
