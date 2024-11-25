"use client"
import { Filter, RotateCcw } from 'lucide-react'
import React from 'react'
// import Price from './Price'
// import CategoriesFilter from './CategoriesFilter'
import { useRouter } from 'next/navigation'
import Price from './Price'
import CategoriesFilter from './CategoriesFilter'

const FilterProducts = () => {
  let router=useRouter()
  return (
    <aside className='pt-12 mt-12 lg:pr-5 '>
      <button onClick={()=>router.push("/shop")} className="flex items-center border-b border-black pb-2 w-full">
          <RotateCcw />
          <span className='ml-2'>
              Effacer tout
          </span>
      </button>
      <h2 className="flex items-center mt-5">
          <Filter />
          <span className='ml-2'>
              Filter par
          </span>
      </h2>
      <Price />
      <CategoriesFilter /> 
     
       
    </aside>
  )
}

export default FilterProducts