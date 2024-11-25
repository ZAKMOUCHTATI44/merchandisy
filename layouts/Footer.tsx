import { ChevronRight, Facebook, Instagram, Linkedin, X } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionaries";

const Footer = async ({ lang }: { lang: Locale }) => {
  const { footer } = await getDictionary(lang);
  const links = [
    {
      href: "facebook.com",
      icon: <Facebook className="w-6 h-6" />,
    },
    {
      href: "Instagram.com",
      icon: <Instagram className="w-6 h-6" />,
    },
    {
      href: "twitter.com",
      icon: <X className="w-6 h-6" />,
    },
    {
      href: "Linkedin.com",
      icon: <Linkedin className="w-6 h-6" />,
    },
  ];
  return (
    <div className="bg-black py-24 px-5">
      <div className="container mx-auto grid lg:grid-cols-3 items-center gap-5 uppercase">
        <div>
          <Image src={"/logo-white.png"} alt="LOGO" width={150} height={75} />
          <ul className="flex gap-3 my-6">
            {links.map((link) => (
              <li
                key={link.href}
                className="bg-white text-black p-2 rounded-full"
              >
                {link.icon}
              </li>
            ))}
          </ul>
          <ul className="text-white text-xl flex flex-col gap-5">
            <li>Roches-Noires, Casablanca-Settaw</li>
            <li>+48 662 428 687</li>
            <li>sales@merchandisy.com</li>
          </ul>
        </div>
        <div className="grid lg:grid-cols-3 gap-5">
          <div>
            <h2 className="text-gray-200">Products</h2>
            <ul className="text-white text-xl flex flex-col gap-5 mt-5">
              <li>Catalog</li>
              <li>Platform</li>
            </ul>
          </div>
          <div>
            <h2 className="text-gray-200">Inspiration</h2>
            <ul className="text-white text-xl flex flex-col gap-5 mt-5">
              <li>Content Hub</li>
            </ul>
          </div>
        </div>
        <div className="mt-5 text-dark-color rounded-lg shadow-md px-5 py-12 items-center ">
          <div className="col-span-3">
            <h2 className="font-semibold text-lg text-white">
              {footer.newsLetter.title}
            </h2>
          </div>
          <div className="flex mt-5">
            <Input
              placeholder={footer.newsLetter.inputPlaceHolder}
              className="focus-visible:ring-0"
            />
            <Button className="bg-main-color">
              <ChevronRight />
            </Button>
          </div>
          <p className="text-gray-300 text-sm mt-5">{footer.newsLetter.terms}</p>
        </div>
      </div>
      <div className="container mx-auto text-white">
        <hr className="bg-gray-300 py-[0.3px] my-3" />
        <div className=" lg:flex justify-between">
          <p>{footer.copyright}</p>
          <ul className="lg:flex gap-3">
            {footer.links.map((link) => (
              <li key={link}>{link}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
