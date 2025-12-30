"use client"
import React from 'react'
import { useEffect, useState } from "react";
import { Label } from '@/components/ui/label';
import Image from "next/image";
import Logo from '@/public/loadingscreenxplogo.png';
import { AnimatePresence, motion } from "framer-motion";
import Signin from '../signin/signin';
const Loading_screen = () => {
    const [loadingScreen, setLoadingScreen] = useState(true)
    const [sessionLoading, setSessionLoading] = useState<string | null>(null);
    useEffect(() => {
        const storedSession = sessionStorage.getItem("sessionLoading");

        if (storedSession === null) {
            sessionStorage.setItem("sessionLoading", "true");
            setTimeout(() => {
                setSessionLoading(sessionStorage.getItem("sessionLoading"));
                setLoadingScreen(false);
            }, 3000);
        } else {
            setSessionLoading(storedSession);
            setLoadingScreen(false);
        }
    }, [])
    return (
        <AnimatePresence mode="wait">
            {sessionLoading ? (
                <motion.div
                    key="signin"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 0.9 } }}
                >
                    <Signin />
                </motion.div>
            ) : loadingScreen ? (
                <motion.div
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 1 } }}
                    exit={{ opacity: 0, transition: { duration: 0.3 } }}
                >
                    <div className="flex flex-col h-[100dvh] md:h-screen items-center gap-2 bg-black text-white relative">
                        <div className="w-max flex flex-col gap-10 md:gap-20 justify-center h-[100vh] items-center">
                            <div className="pl-10">
                                <div className=" px-1 flex justify-start ">
                                    <div className="flex items-end gap-5 leading-none ">
                                        <Label className="leading-none text-[14px] md:text-[20px] font-geist-sans">Luigie Panahon</Label>
                                        <div className="relative mb-[-5px]">
                                            <Image src={Logo} alt="" height={100} width={100} className="w-25 md:w-50" />
                                            <Label className="font-thin text-[8px] md:text-[10px] absolute bottom-3 right-1 md:right-6 leading-none">TM</Label>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-[-5px] md:mt-[-10px] flex justify-start flex-col">
                                    <Label className="text-[50px] md:text-[80px] font-semibold leading-none">Portfolio <sup className="text-[#D96C29] text-[35px] md:text-[50px]">xp</sup></Label>
                                    <Label className="text-[20px] md:text-[30px] font-geist-sans  leading-none px-3">Web Developer</Label>
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
                        <div className="w-screen h-10 absolute bottom-0 md:p-1 md:px-5 flex flex-col md:flex-row items-center justify-between">
                            <Label className="text-[12px] md:text-[17px] font-thin">&copy; 2025 Luigie Panahon. Inspired by Windows XP</Label>
                            <Label className="text-[12px] md:text-[17px] font-thin">Not affiliated with Microsoft.</Label>
                        </div>

                    </div>
                </motion.div>
            ) : (
                <motion.div
                    key="signin"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 0.9 } }}
                >
                    <Signin />
                </motion.div>
            )}
        </AnimatePresence>

    )
}

export default Loading_screen
