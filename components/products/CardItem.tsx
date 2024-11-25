import { Product } from "@/types";
import { calculatePrice } from "@/lib/hooks/products";
import { decQte, incQte, removeProduct } from "../../redux/features/shop-cart";
import { useAppDispatch } from "@/redux/store";
import { Minus, Plus, Trash } from "lucide-react";
import Image from "next/image";
import React from "react";

const CardItem = ({ product }: { product: Product }) => {
  const dispatch = useAppDispatch();

  return (
    <div className="flex items-center justify-between my-5">
      <Image
        src={`${product.picture}`}
        width="80"
        height="80"
        alt={product.name}
      />
      <div className="desc ml-2" style={{ width: "-webkit-fill-available" }}>
        <h6 className="text-sm font-medium">{product.name}</h6>
        <div className="flex items-center">
          <p className="text-gray-500">
            {calculatePrice(
              product,
              product.quantityCart,
            )}
          </p>
          <div>
            <div className="flex items-center ml-5">
              <button
                onClick={() => dispatch(decQte(product))}
                className="flex items-center rounded-md justify-center bg-main-color"
              >
                <Minus className="text-white px-1" />
              </button>
              <span className="mx-3">{product.quantityCart}</span>
              <button
                onClick={() => dispatch(incQte(product))}
                className="flex items-center rounded-md justify-center bg-main-color"
              >
                <Plus className="text-white p-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Trash className="h-5" onClick={() => dispatch(removeProduct(product))} />
    </div>
  );
};

export default CardItem;
