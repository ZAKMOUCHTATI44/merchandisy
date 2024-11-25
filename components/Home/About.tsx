import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const About = ({
  content,
}: {
  content: {
    title: string;
    cta: string;
    subtitle: {
      title: string;
      description: string;
    }[];
  };
}) => {
  return (
    <div className="bg-[#702dbd] text-white py-24">
      <div className="container mx-auto grid lg:grid-cols-2 gap-5 items-center">
        <div>
          <Image
            src={"/img-home-Catalog-05.png"}
            alt="HOME CATALOG"
            width={450}
            height={350}
          />
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="text-3xl font-bold">{content.title}</h2>
          <hr className="bg-white py-[0.3px] my-3" />
          <Accordion
            type="single"
            collapsible
            defaultValue="Design unique"
          >
            {content.subtitle.map((item, index) => (
              <AccordionItem value={item.title} key={index}>
                <AccordionTrigger className="hover:no-underline text-start text-lg font-semibold svg-white">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent className="text-lg">{item.description}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="flex mt-5">
            <Link
              href={"/offres"}
              className="flex items-center hover:gap-5 transition-all ease-in-out duration-300 gap-3 py-3 rounded-lg text-black font-semibold px-12 bg-[#bdbd2d]"
            >
              {content.cta}
              <MoveRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
