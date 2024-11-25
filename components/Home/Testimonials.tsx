import React from "react";
import TrustBy from "../../layouts/TrustBy";
import Image from "next/image";

const Testimonials = () => {
  const categories = [
    "HR",
    "Office Ops",
    "Event Managers",
    "Marketers",
    "Sales",
    "Client Relations",
  ];
  const images = [
    "/portfolio/1.jpg",
    "/portfolio/2.jpg",
    "/portfolio/3.jpg",
    "/portfolio/4.jpg",
    "/portfolio/5.jpg",
    "/portfolio/6.jpg",
  ];

  const avis = [
    {
      content:
        "I recently worked with Monday Merch for custom swag for a company event of ~50 ppl. Their service was impeccable, offering attentive customer care and delivering high-quality products on time (+ offering different options of products and design!). I highly recommend them for their professionalism and top-notch merchandise!",
      name: "/portfolio/avatar/logo-uber.svg",
      client: {
        name: "Gisella Perlingieri",
        jobtitle: "Global Strategy & Operations",
        avatar: "/portfolio/avatar/1.jpeg",
      },
    },
    {
      content:
        "I recently worked with Monday Merch for custom swag for a company event of ~50 ppl. Their service was impeccable, offering attentive customer care and delivering high-quality products on time (+ offering different options of products and design!). I highly recommend them for their professionalism and top-notch merchandise!",
      name: "/portfolio/avatar/meta.svg",
      client: {
        name: "Gisella Perlingieri",
        jobtitle: "Global Strategy & Operations",
        avatar: "/portfolio/avatar/1.jpeg",
      },
    },
  ];
  return (
    <div className="container mx-auto my-24 px-12 grid grid-cols-8">
      <div className="flex flex-col gap-10 col-span-6 pr-12">
        <TrustBy />
        <h2 className="font-bold text-5xl">Globally trusted by</h2>
        <ul className="flex gap-5">
          {categories.map((category) => (
            <li
              key={category}
              className="border-2 border-black px-3 rounded-xl"
            >
              {category}
            </li>
          ))}
        </ul>
        <div className="grid grid-cols-2 gap-5">
          {avis.map((item) => (
            <div
              className="flex flex-col gap-12 border-2 border-black rounded-2xl p-5"
              key={item.name}
            >
              <Image src={item.name} alt={"AVIS"} width={125} height={75} />
              <p>{item.content}</p>

              <div className="flex gap-2 items-center">
                <Image
                  src={item.client.avatar}
                  alt={item.client.name}
                  width={40}
                  height={40}
                  className="rounded-full w-[40px] h-[40px]"
                />
                <div className="flex flex-col gap-0.5">
                  <span>{item.client.name}</span>
                  <span>{item.client.jobtitle}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5 col-span-2">
        {images.map((projet) => (
          <div
            key={projet}
            className="w-48 h-48 bg-cover px-5 rounded-lg"
            style={{ backgroundImage: `url("${projet}")` }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
