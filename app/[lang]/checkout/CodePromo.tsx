"use client"
import React, { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { Input } from '@/components/ui/input'


const CodePromo = () => {

  const [code,setCode]=useState<string>("")
  const [isLoading]=useState<boolean>(false)


  return (
    <>
      <div className='relative flex flex-col gap-2'>
        <Input value={code} name='code' onChange={(e)=>setCode(e.target.value)} placeholder='J’ai un code promotionnel' />
        <button type='button'>
          {isLoading ? <p> Loading .. </p>  : <ArrowRight className='h-5 w-5 absolute top-2.5 right-2.5 transition' />}
        </button>
      </div>
    </>
   
  )
}

export default CodePromo