"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { useAppDispatch } from "@/redux/hooks";
import { addToCart, setOpenCart } from "../../redux/features/shop-cart";
import { Product } from "@/types";



const ProductCard = ({ product }: { product: Product }) => {
  const dispatch = useAppDispatch();


  const handleAddToCart = (product : Product) => {
      dispatch(
        addToCart({ ...product, quantityCart: 1 })
      );
   
      setTimeout(() => {
        dispatch(setOpenCart(true));
      }, 300);
  }
  return (
      <div className="bg-[#f9f9f9] py-5 shadow-md border-2 rounded-md border-transparent hover:border-main-color">
        <Image
          src={product.picture}
          alt={product.name}
          className="hover:grayscale"
          width={350}
          height={350}
        />
        <div className="flex flex-col gap-3 items-center">
          <Link href={`products/details?id=${product.id}`} className="font-semibold">{product.title}</Link>
          <p>{product.price} MAD</p>
          <Button onClick={() => handleAddToCart(product)} className="bg-main-color border border-main-color text-white hover:bg-transparent hover:text-main-color">
            Ajouter au panier
          </Button>
        </div>
      </div>
  );
};

export default ProductCard;
