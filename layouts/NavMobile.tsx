import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import logo from "/public/logo-white.png";
import Image from "next/image";
import Link from "next/link";

import { Menu, X } from "lucide-react";
const NavMobile = () => {

    const links = [
        {
            title: "Company",
            href :""
        },
        {
            title: "catalog",
            href :"/catalog"
        },
        {
            title: "Content HUB",
            href :"/content-hub"
        },
        {
            title: "Platform",
            href :"/platform"
        },

    ]
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger>
          <Menu className="text-black" />
        </SheetTrigger>
        <SheetContent className="bg-[#000022] border-[#000022] text-white">
          <SheetHeader>
            <SheetTitle className="flex justify-between items-center">
              <Link href={"/"}>
                <Image src={logo} alt="logo" width={150} height={80} />
              </Link>
              <SheetClose className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
                <X className="h-5 w-5 text-white" />
                <span className="sr-only">Close</span>
              </SheetClose>
            </SheetTitle>
            <SheetDescription>
              <ul className="flex flex-col text-start width-fill-available text-white gap-5 my-5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`border-transparent text-xl border-b `}
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
                <li className="my-5">
                  <Link
                    href={"/login"}
                    className="bg-main-color text-white font-bold px-5 rounded-lg py-2"
                  >
                    Contact us
                  </Link>
                </li>
              </ul>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default NavMobile;
