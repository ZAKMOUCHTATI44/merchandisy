import { Product } from '@/types'
import { calculatePrice } from '@/lib/hooks/products'
import Image from 'next/image'
import React from 'react'

const ProductCheckout = ({product}:{product:Product}) => {
  return (
    <div className='pr-5 py-2 flex gap-2 items-center'>
        <div className="relative bg-gray-200 rounded-xl">
            <Image src={`${product.picture}`} height={55} width={55} alt={product.name} />
            <span className='absolute top-3 right-0 bg-main-color text-white p-1 h-6 w-6 flex justify-center items-center text-xs rounded-full'>
               {product.quantityCart ?? 1}
            </span>
        </div>
        <div className='width-fill'>
            <p className="text-base">
                {product.title}
            </p>
            <p className='text-end text-base text-gray-500'> {calculatePrice(product,product.quantityCart)}</p>
        </div>
    </div>
  )
}

export default ProductCheckout