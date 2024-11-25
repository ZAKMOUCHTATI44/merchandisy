"use client"
import { Slider } from '@/components/ui/slider'
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useCallback, useState } from 'react'
const Price = () => {

    const router=useRouter();
    const pathname = usePathname()
    const searchParams = useSearchParams();

    const [minPrice, maxPrice] = (searchParams.get("prices")?.split("-") ?? ['0', '1000']).map(String);
    
    const [range, setRange] = useState<number[]>([+minPrice, +maxPrice]);

    const createQueryString = useCallback(
        (name:string, value:string) => {
            const params = new URLSearchParams(searchParams)
            if(value){
                params.set(name, value)
            }else{
                params.delete(name)
            }
            
            return params.toString()
        },
        [searchParams]
    )


    const handleRangeChange = (value:number[]) => {
      setRange(value);
    };

    const handlePrice=()=>{
        router.replace(`${pathname}?${createQueryString("prices",range.join("-"))}`,{scroll:false})
    }
  return (
    <div className='mt-2 pr-3 border-b border-black py-5'>
        <h5 className='text-primary font-bold'>
            Prix
        </h5>
        <p className='my-3 font-semibold'>
            Choissiez votre fourchette
        </p>
        <Slider
            minStepsBetweenThumbs={10}
            max={1000}
            min={0}
            step={1}
            value={range}
            onValueChange={handleRangeChange}
        />
        <p className='mt-5'>
            {range[0]} MAD - {range[1]} MAD
        </p>
        <button onClick={handlePrice} className='bg-main-color py-1 px-5 text-white mt-3 w-full'>
            Filter
        </button>

    </div>
  )
}

export default Price