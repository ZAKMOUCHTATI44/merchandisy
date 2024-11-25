"use client"
import React, { useEffect, useMemo } from 'react'
import CheckoutForm from './CheckoutForm'
import OrderInfo from './OrderInfo'
import { useAppSelector } from '../../../redux/hooks';
import { PriceTotal, Product, RootState } from '@/types';
import { totalPriceProducts } from '../../../lib/hooks/products';

const Page = () => {

    const state = useAppSelector((state : RootState) => state.cartItems);
    const [products, setProducts] = React.useState<Product[]>([]);

    const priceTotal: PriceTotal = useMemo(() => {
        const totalProducts = totalPriceProducts(products);
        const shipping = 15;
        const totalPrice = shipping + totalProducts;
    
        return {
          totalPriceProducts: totalProducts,
          shipping,
          totalPrice,
        };
      }, [products]);


      useEffect(() => {
        setProducts(state.products);
      }, [state]);

  return (
    <div className="min-h-screen py-12 bg-[#f2f2f2]">
        <div className="container mx-auto grid grid-cols-5 relative">
            <div className="col-span-3 p-5">
                <CheckoutForm />
            </div>
            <div className="col-span-2 p-5 sticky top-0 h-fit">
                <OrderInfo
                  priceTotal={priceTotal}
                  products={products}
                />
              </div>
        </div>
    </div>
  )
}

export default Page