"use client"
import React, { useEffect } from 'react'
import { Label } from '@/components/ui/label';

import { useRouter } from 'next/navigation';
const Signin = () => {
    const router = useRouter()
    useEffect(() => {
        setTimeout(() => {
            router.push('/homescreen')
        }, 1000);
    }, [])

    return (
        <div className="flex flex-col items-center h-[100dvh] md:h-screen w-screen text-white relative">
            <div className='bg-[#0036B3] p-1 w-full h-[23%] md:h-[12%] border-b-[3px] border-white' />


            <div className='p-1 w-full h-full flex items-center bg-[linear-gradient(to_bottom_right,#8aa8ff,#587FDB)]'>
                <div className=' p-1 h-full w-[90%] md:w-[70%]  flex justify-end items-center'>
                    <div className='flex flex-col gap-7 justify-end items-end px-5'>
                        <div className="w-max">
                            <Label className='text-[25px] md:text-[50px] font-semibold leading-none italic'>welcome</Label>
                        </div>

                    </div>
                </div>
                <div className=' p-1 h-full w-[20%] flex justify-start items-center'>

                </div>
            </div>
            <div className='bg-[#0036B3] p-3 px-10 w-full h-[26%] md:h-[15%] border-t-[3px] border-white' />



        </div>
    )
}

export default Signin
