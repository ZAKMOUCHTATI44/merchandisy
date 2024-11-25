"use client";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";

import fr from "@/public/flags/fr.svg";
import en from "@/public/flags/en.svg";
import Image from "next/image";
import {  useParams, usePathname, useRouter } from "next/navigation";

import { Locale } from "@/i18n.config";
const langs = [
  {
    title: "Français",
    icon: fr,
    key: "fr",
  },
  {
    title: "English",
    icon: en,
    key: "en",
  },
];

const ChosseLang = () => {
  const { lang } : { lang : Locale } = useParams();
  const [langCurrent, setLangCurrent] = useState<Locale>(lang);
  const pathName = usePathname();
  const router = useRouter();

  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  const handleChange = (e: Locale) => {
    if (e) {
      setLangCurrent(e);
      router.replace(redirectedPathName(e));
    } else {
      console.log("null");
    }
  };

  return (
    <Select defaultValue="fr" value={lang} onValueChange={handleChange}>
      <SelectTrigger className="w-[80px] !outline-none bg-transparent border-transparent">
       <GetSelectedValue lang={langCurrent} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {langs.map((item) => (
            <SelectItem key={item.title} value={item.key}>
              <div className="flex gap-2">
                <Image src={item.icon} alt={item.title} className="w-6 h-6" />
                {item.title}
              </div>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};


const GetSelectedValue = ({lang} : {lang : string }) => {

  const minature = langs.filter(item => item.key === lang)[0]

  if(minature) {
    return (
      <Image src={minature.icon} alt={minature.title} className="w-6 h-6" />
    )

  }
}

export default ChosseLang;
