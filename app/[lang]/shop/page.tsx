import CategroriesList from "@/components/shop/CategroriesList";
import React from "react";
import content from "@/content/data.json"
import ProductCard from "@/components/shop/ProductCard";
import FilterProducts from "./FilterProducts";
import ListProducts from "./ListProducts";
const page = () => {
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

  const products = content

  return (
    // <div className="bg-white">
    //   <div className="container mx-auto  py-24 px-5 grid grid-cols-8 gap-5">
    //     <div className="col-span-1 sticky top-20 h-screen">
    //       <CategroriesList data={data} />
    //     </div>
    //     <div className="col-span-7 flex flex-col gap-12">
    //       {products.map((item) => (
    //         <div key={item.category}>
    //           <h2 className="font-semibold text-xl">
    //               {item.category}
    //           </h2>
    //           <div className="grid grid-cols-5 mt-5 gap-5">
    //             {item.products.map((product) => (
    //               <ProductCard key={product.name} product={product} />
    //             ))}
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>

    <div className="container mx-auto mb-24">
    <div className="grid grid-cols-1 lg:grid-cols-4">
      <div className="col-span-1 px-6 h-[900px] sticky top-0">
        <FilterProducts />
      </div>
      <div className="col-span-3">
        <ListProducts />
      </div>
    </div>
  </div>
  );
};

export default page;
