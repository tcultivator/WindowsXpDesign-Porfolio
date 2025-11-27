"use client"
import React from 'react'
import { useEffect, useState } from "react";
import { Label } from '@/components/ui/label';
import Image from "next/image";
import Logo from '@/public/loadingscreenxplogo.png';
const Loading_screen = () => {
    const [progress, setProgress] = useState(0);
    const [startupLoading, setStartupLoading] = useState(true)
    
    return (
        <div className="flex flex-col items-center gap-2 min-h-screen bg-black text-white relative">
            <div className="w-max flex flex-col gap-20 justify-center h-[90vh] items-center">
                <div className="pl-10">
                    <div className=" px-1 flex justify-start ">
                        <div className="flex items-end gap-5 leading-none ">
                            <Label className="leading-none text-[20px] font-geist-sans">Luigie Panahon</Label>
                            <div className="relative mb-[-5px]">
                                <Image src={Logo} alt="" height={100} width={100} className="w-50" />
                                <Label className="font-thin text-[10px] absolute bottom-3 right-6 leading-none">TM</Label>
                            </div>
                        </div>
                    </div>
                    <div className="mt-[-10px] flex justify-start flex-col">
                        <Label className="text-[80px] font-semibold leading-none">Portfolio <sup className="text-[#D96C29] text-[50px]">xp</sup></Label>
                        <Label className="text-[30px] font-geist-sans  leading-none px-3">Web Developer</Label>
                    </div>
                </div>
                <div className="w-[50%] h-6 border border-white rounded-[7px] relative overflow-hidden  flex items-center">
                    <div className="absolute w-full flex gap-[2px] h-full xp-animate p-[2px]">
                        <div className="w-3.5 h-full rounded-[1px] bg-gradient-to-b from-[#6B7DFF] to-[#27359A]"></div>
                        <div className="w-3.5 h-full rounded-[1px] bg-gradient-to-b from-[#6B7DFF] to-[#27359A]"></div>
                        <div className="w-3.5 h-full rounded-[1px] bg-gradient-to-b from-[#6B7DFF] to-[#27359A]"></div>
                    </div>
                </div>

            </div>
            <div className="w-screen h-10 absolute bottom-0 p-1 px-5 flex items-center justify-between">
                <Label className="text-[17px] font-thin">&copy; 2025 Luigie Panahon. Inspired by Windows XP</Label>
                <Label className="text-[17px] font-thin">Not affiliated with Microsoft.</Label>
            </div>

        </div>
    )
}

export default Loading_screen
