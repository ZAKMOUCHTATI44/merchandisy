"use client";
import { PriceTotal, Product } from "@/types";
import React from "react";
import { Button } from "@/components/ui/button";
import CodePromo from "./CodePromo";
import ProductCheckout from "@/components/products/ProductCheckout";

const OrderInfo = ({
  priceTotal,
  products,
}: {
  priceTotal: PriceTotal;
  products: Product[];

}) => {


  return (
    <div className="bg-white p-5 rounded-md">
      <h2 className="text-2xl font-bold">Résumé de votre commande</h2>
      <div className="my-6">
        {products.map((product) => (
          <ProductCheckout key={product.id} product={product} />
        ))}
      </div>
      <CodePromo  />
      <div className="mt-12">
        <PriceInfo title="Produits" value={priceTotal.totalPriceProducts} />
        <PriceInfo title="Livraison" value={priceTotal.shipping} />
        <PriceInfo title="Total" value={priceTotal.totalPrice} />
      </div>
      <Button
        type="submit"
        className="w-full capitalize bg-main-color text-white hover:bg-main-color hover:opacity-75 transition-all ease-in-out duration-200"
      >
        Valider ma commande
      </Button>
    </div>
  );
};

const PriceInfo = ({ title, value }: { title: string; value: number }) => {
  return (
    <div className="px-3 flex justify-between my-6 border-b border-second-color pb-3">
      <h5 className="text-base font-medium leading-none">{title}</h5>
      <p>{value} MAD</p>
    </div>
  );
};

export default OrderInfo;
