import { Label } from '@/components/ui/label'
import React from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const PhoneNumber = ({value,onChange}:{value?:string,onChange:(e:string)=>string}) => {
  return (
    <div className='flex flex-col gap-2'>
        <Label htmlFor='phone'>Numéro de téléphone</Label>
        <PhoneInput
            country={'ma'}
            onChange={(e)=>onChange(e)}
            value={value}
            inputProps={{
                name: 'phone',
                id: "phone"
            }}
            inputClass='!w-full flex h-9 w-full rounded-md !border !border-input bg-transparent px-3 !py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50'
        />
    </div>
  )
}

export default PhoneNumber