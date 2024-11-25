import Image from "next/image";
import React from "react";

const References = ({
  title,
  subtilte,
}: {
  title: string;
  subtilte: string;
}) => {
  const logos = [
    {
      name: "Celio",
      image: "/references/celio.svg",
    },
    {
      name: "Publicis",
      image: "/references/publicis.svg",
    },
    {
      name: "Prime",
      image: "/references/prime.svg",
    },
    {
      name: "deezer",
      image: "/references/deezer.svg",
    },
    {
      name: "asus",
      image: "/references/asus.svg",
    },
  ];
  return (
    <div className="grid grid-cols-8 container mx-auto py-32 gap-5">
      <div className="col-span-2">
        <p className="text-black font-semibold">{title}</p>
        <span className="text-gray-500">{subtilte}</span>
      </div>
      <div className="flex gap-5 col-span-6">
        {logos.map((item) => (
          <div key={item.name}>
            <Image
              key={item.name}
              src={item.image}
              alt={item.name}
              width={150}
              height={50}
            />
          </div>
        ))}
         {logos.map((item) => (
          <div key={item.name}>
            <Image
              key={item.name}
              src={item.image}
              alt={item.name}
              width={150}
              height={50}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default References;
