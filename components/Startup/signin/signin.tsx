"use client"
import React, { useEffect } from 'react'
import { Label } from '@/components/ui/label';
import Image from "next/image";
import Logo from '@/public/loadingscreenxplogo.png';
import profile from '@/public/profile.jpg'
import { FaPowerOff } from "react-icons/fa6";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
const Signin = () => {
    const router = useRouter()
    const [starting, setStarting] = useState(false)
    const navigateToHomeScreen = () => {
        setStarting(true)
        setTimeout(() => {
            router.push('/homescreen')
        }, 2000);
    }
    return (
        <div className="flex flex-col items-center w-screen h-screen text-white relative">
            <div className='bg-[#0036B3] p-1 w-full h-[12%] border-b-[3px] border-white'>

            </div>
            <div className='p-1 w-full h-full flex items-center bg-[linear-gradient(to_bottom_right,#8aa8ff,#587FDB)]'>
                <div className=' p-1 h-full w-[60%] border-r border-white flex justify-end items-center ' style={{
                    borderRightWidth: "1px",
                    borderStyle: "solid",
                    borderImage: "linear-gradient(to bottom, #587FDB 0%, #b6b6b6ff 40%, #587FDB 100%) 1",
                }}>
                    {!starting ?
                        <div className='flex flex-col gap-7 justify-end items-end px-5'>
                            <div className="w-max">
                                <div className=" px-1 flex justify-start ">
                                    <div className="flex items-end gap-5 leading-none ">
                                        <Label className="leading-none text-[15px] font-geist-sans">Luigie Panahon</Label>
                                        <div className="relative">
                                            <Image src={Logo} alt="" height={100} width={100} className="w-20" />
                                            <Label className="font-thin text-[8px] absolute bottom-1 right-0 leading-none">TM</Label>
                                        </div>
                                    </div>
                                </div>
                                <div className=" flex justify-start flex-col">
                                    <Label className="text-[50px] font-semibold leading-none flex gap-[-8px]">Portfolio <sup className="text-[#D96C29] text-[30px]">xp</sup></Label>
                                    <Label className="text-[20px] font-geist-sans  leading-none px-3">Web Developer</Label>
                                </div>
                            </div>
                            <Label className='text-end text-[17px] flex justify-end items-end'>To begin, click the username</Label>
                        </div> :
                        <div className='flex flex-col gap-7 justify-end items-end px-5'>
                            <div className="w-max">
                                <Label className='text-[50px] font-semibold leading-none italic'>welcome</Label>
                            </div>

                        </div>

                    }


                </div>
                <div className=' p-1 h-full w-[40%] flex justify-start items-center'>
                    <div className='px-5'>
                        <div onClick={navigateToHomeScreen} className={`${!starting ? 'bg-gradient-to-l from-[#587FDB] to-[#0036B3]' : 'bg-transparent'} flex gap-1 items-center p-2 w-[400px] rounded-[10px]  cursor-pointer`}>
                            <div className='p-[4px] w-max rounded-[7px] bg-[#587FDB] inset-shadow-sm inset-shadow-white'>
                                <Image src={profile} alt='' width={50} height={50} className='rounded' />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <Label className='cursor-pointer'>Luigie Panahon</Label>
                                {starting && <Label className='text-[#0036B3]'>Loading user data...</Label>}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#0036B3] p-3 px-10 w-full h-[15%] border-t-[3px] border-white'>
                {!starting && <button className='flex gap-1 items-center cursor-pointer bg-transparent'><FaPowerOff className='bg-[#e8602a]   text-[25px] p-1 rounded inset-shadow-sm inset-shadow-red-500' /><Label className='font-thin'>Turn Off Computer</Label></button>}
            </div>

        </div>
    )
}

export default Signin
