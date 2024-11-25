import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionaries";
import Image from "next/image";
import React from "react";

interface PageProps {
  params: {
    lang: Locale;  // Locale could be "fr" | "en" or other types if extended
  };
}

const Page = async ({ params: { lang } }: PageProps) => {
  
  const { aboutUs } = await getDictionary(lang);
  return (
    <div>
      <div
        className=" text-white py-32 bg-top bg-no-repeat bg-cover"
        style={{
          backgroundImage: "url('/bg-about-us.jpg')",
        }}
      >
        <div className="container mx-auto flex flex-col gap-5">
          <h2 className="text-5xl font-bold">{aboutUs.title} </h2>
          <p>{aboutUs.subTitle}</p>
        </div>
      </div>
      {/* History */}

      <div className="container mx-auto my-24">
        <div className=" grid lg:grid-cols-2 gap-10 my-12 items-center">
          <div className="flex flex-col gap-10">
            <h2 className="text-5xl font-semibold">{aboutUs.labelhistory}</h2>
            <h2
              className="text-2xl capitalize font-bold text-main-color -center"
              dangerouslySetInnerHTML={{ __html: aboutUs.titlehistory }}
            ></h2>
            <p>{aboutUs.descriptionhistory}</p>
          </div>
          <div className="flex justify-center">
            <Image
              src={"/about-history.jpg"}
              className="rounded-2xl"
              alt={aboutUs.labelhistory}
              width={550}
              height={500}
            />
          </div>
        </div>

        <div className="flex flex-col gap-16 my-24">
          <div className=" text-center">
            <h2 className="text-3xl text-main-color uppercase font-bold">
              {aboutUs.nosServices.title}
            </h2>
            <p className="text-gray-700">{aboutUs.nosServices.description}</p>
          </div>
          {aboutUs.nosServices.items.map((item , index) => (
            <div
              key={item.title}
              className="grid grid-cols-2 gap-20 items-center" 
            >
              <div className="flex flex-col gap-10 order-2">
                <h2 className="text-2xl font-semibold">{item.title}</h2>
                <p>{item.description}</p>
              </div>
              <div className={`${index %2 === 0 ? "order-1" : "order-2"}`}>
                <Image src={item.image} alt={item.title} width={650} height={250} />
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Page;
