import Image from "next/image";
import React from "react";
import Link from "next/link";
import NavLinks from "./NavLinks";
import NavMobile from "./NavMobile";
import ChosseLang from "./ChosseLang";
import ShopCart from "../components/CheckOut/ShopCart";

const NavBar = () => {
  return (
    <div className="shadow-md py-3 sticky top-0 z-40 bg-white uppercase">
      <div className="container mx-auto px-5 lg:px-24 flex justify-between items-center">
        <Link href={"/"}>
          <Image
            src={"/logo.png"}
            alt="Merchandisy LOGO"
            width={150}
            height={50}
          />
        </Link>

        <NavLinks />
        <NavMobile />

        <div className="items-center gap-5 hidden lg:flex ">
          <ChosseLang />
          <ShopCart />
          <Link
            href={"/shop"}
            className="bg-main-color text-white font-bold px-5 rounded-lg py-2 capitalize"
          >
            To Catalogue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
