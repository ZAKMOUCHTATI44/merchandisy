import React from "react";

const Portfolio = ({
  content,
}: {
  content: {
    title: string;
    items: {
      title: string;
      image:string;
      description: string;
      className: string;
    }[];
  };
}) => {
  return (
    <div className="container mx-auto my-24">
      <h2 className="text-5xl font-bold uppercase text-main-color text-center my-12">
        {content.title}
      </h2>
      <div className="grid lg:grid-cols-3 gap-5">
        {content.items.map((content) => (
          <div
            key={content.title}
            className={`${content.className}  h-[500px] text-white p-5 flex flex-col justify-end hover:grayscale duration-700 ease-in-out transition-all bg-cover bg-center`}
            style={{
              backgroundImage: `url(${content.image})`,
            }}
          >
            <h5 className="text-5xl font-semibold">{content.title}</h5>
            <p>{content.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
