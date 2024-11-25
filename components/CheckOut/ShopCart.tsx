"use client";
import { ShoppingBag, X } from "lucide-react";
import React, { useEffect, useMemo, useState } from "react";
import { Button } from "../ui/button";
import { Product, RootState } from "@/types";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import CardItem from "@/components/products/CardItem";
import { setOpenCart } from "../../redux/features/shop-cart";
import { useRouter } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { totalPriceProducts } from "@/lib/hooks/products";

const ShopCart = () => {
  const products: Product[] = useAppSelector(
    (state) => state.cartItems.products
  );
  const open: boolean = useAppSelector((state : RootState) => state.cartItems.openCart);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const totalItemsFunction = useMemo(
    () => products.reduce((total, item) => total + (item.quantityCart ?? 0), 0),
    [products]
  );
  const totalPrices = useMemo(() => totalPriceProducts(products), [products]);
  const [totalItems, setTotalItems] = useState<number>(0);

  useEffect(() => {
    setTotalItems(totalItemsFunction);
  }, [totalItemsFunction]);

  const handleClick = () => {
    if (products.length > 0) {
      router.push("/checkout");
      dispatch(setOpenCart(false));
    }
  };

  return (
    <Sheet open={open}>
      <button
        className="relative bg-transparent flex"
        onClick={() => dispatch(setOpenCart(true))}
      >
        <span className="absolute bg-main-color text-white text-center -top-3 -right-3 rounded-full w-6 h-6">
          {totalItems}
        </span>
        <ShoppingBag className="h-5" />
      </button>
      <SheetContent className="h-screen flex flex-col justify-between !p-0">
        <SheetHeader className="px-3 pt-5">
          <SheetTitle className="flex justify-between">
            Mon panier
            <X onClick={() => dispatch(setOpenCart(false))} />
          </SheetTitle>
        </SheetHeader>
        <div
          className={`${
            products.length > 0 ? "flex-1" : "flex justify-center"
          } "pb-5 px-2 overflow-x-auto" `}
        >
          {products.length > 0 ? (
            products.map((product) => (
              <CardItem key={product.id} product={product} />
            ))
          ) : (
            <h6 className="text-center">Votre panier est vide !</h6>
          )}
        </div>
        <div className="bg-gray-100 py-5 px-3 font-semibold flex flex-col gap-2">
          <div className="flex justify-between">
            <p>Sous-total du panier :</p>
            <span>{totalPrices} MAD</span>
          </div>
          <Button
            onClick={handleClick}
            className="py-5 bg-main-color hover:bg-main-color hover:opacity-80 duration-800 ease-in-out transition-all"
          >
            Commander
          </Button>
          <Button
            onClick={() => dispatch(setOpenCart(false))}
            className="py-5 bg-transparent border border-main-color text-main-color hover:bg-transparent hover:opacity-80 duration-300 ease-in-out transition-all"
          >
            Poursuivre vos achats
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ShopCart;
