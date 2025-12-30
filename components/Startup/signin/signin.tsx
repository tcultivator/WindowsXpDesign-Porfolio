"use client"
import React, { useEffect, useState, useRef } from 'react'
import { Label } from '@/components/ui/label';
import HomeScreen from '@/components/homeScreen/HomeScreen';
import Image from 'next/image';
import Logo from '@/public/loadingscreenxplogo.png';
import { AnimatePresence, motion } from "framer-motion";
const Signin = () => {
    const [loading, setLoading] = useState(true);
    const [session, setSession] = useState<string | null>(null);
    const [successSignin, setSuccessSignin] = useState(false)
    const audioRef = useRef<HTMLAudioElement | null>(null);
    useEffect(() => {

        setTimeout(() => {
            const storedSession = sessionStorage.getItem("session");
            if (storedSession) {
                setSession(storedSession);
            }
            setLoading(false);
        }, 500);
    }, []);

    const login = () => {
        sessionStorage.setItem('session', 'true');
        setSuccessSignin(true)
        setTimeout(() => {
            setSuccessSignin(false)
            setSession('true');
            if (audioRef.current) {
                audioRef.current.play();
            }
        }, 2000);

    };

    return (
        <AnimatePresence mode="wait">


            <div className='w-screen relative'>
                <audio ref={audioRef} src="/sounds/windows-xp-startup.mp3" className='hidden' />
                {loading ? (
                    <div className="flex justify-center items-center h-screen">

                    </div>
                ) : (
                    session ? (
                        <motion.div
                            key="home"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, transition: { duration: 0.9 } }}
                        >
                            <HomeScreen />
                        </motion.div>

                    ) : (
                        <motion.div
                            key="signin"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, transition: { duration: 0.9 } }}
                        >
                            <div className="flex flex-col items-center h-[100dvh] md:h-screen w-screen text-white relative">
                                <div className='bg-[#0036B3] p-1 w-full h-[23%] md:h-[12%] border-b-[3px] border-white' />
                                <div className='p-1 w-full h-full flex items-center bg-[linear-gradient(to_bottom_right,#8aa8ff,#587FDB)]'>
                                    <div className=' p-1 h-full w-[100%] md:w-[50%] flex justify-end items-center border-r-[1px] border-transparent [border-image:linear-gradient(180deg,#8aa8ff,#b2c3db,#8aa8ff)_1]'>
                                        <div className='flex flex-col gap-7 justify-end items-end px-5'>
                                            <div className="w-max flex flex-col gap-4 md:gap-5 justify-center items-center ">
                                                <div className="pl-10">
                                                    <div className=" px-1 flex justify-start ">
                                                        <div className="flex items-end gap-5 leading-none ">
                                                            <Label className="leading-none text-[13px] md:text-[16px] font-geist-sans font-semibold  [text-shadow:.5px_.5px_.5px_black] [-webkit-text-stroke:0.1px_black]">Luigie Panahon</Label>
                                                            <div className="relative mb-[-5px]">
                                                                <Image src={Logo} alt="" height={100} width={100} className="w-20 md:w-20 filter drop-shadow-[0_0_.5px_black]" />
                                                                <Label className=" text-[8px] md:text-[8px] absolute bottom-3 right-1 md:right-0 leading-none font-semibold  [text-shadow:.5px_.5px_.5px_black] [-webkit-text-stroke:0.1px_black]">TM</Label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="mt-[-5px] md:mt-[-5px] flex justify-start flex-col">
                                                        <Label className="text-[50px] md:text-[50px] font-semibold  [text-shadow:.5px_.5px_.5px_black] [-webkit-text-stroke:0.1px_black] leading-none">Portfolio <sup className="text-[#D96C29] text-[35px] md:text-[30px]">xp</sup></Label>
                                                        <Label className="text-[20px] md:text-[20px] font-semibold  [text-shadow:.5px_.5px_.5px_black] [-webkit-text-stroke:0.1px_black] font-geist-sans  leading-none px-3">Web Developer</Label>
                                                    </div>
                                                </div>
                                                <Label className='text-[16px] font-mono font-semibold  [text-shadow:.5px_.5px_.5px_black] [-webkit-text-stroke:0.1px_black]'>To begin, click profile to login</Label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=' p-1 h-full w-[50%] flex justify-start items-center p-5'>
                                        <button onClick={login} className='rounded flex justify-start items-center p-3 h-max gap-2 cursor-pointer hover:bg-gradient-to-r from-[#0036B3] via-[#0036B3]/40 to-[#8aa8ff]/5 w-full max-w-[400px]'>
                                            <Image src={"/profile.gif"} alt="" height={100} width={100} className="w-17 md:w-17 border-[3px] rounded border-white filter drop-shadow-[0_0_.5px_black]" />
                                            <div>
                                                <Label className='text-[20px] font-semibold cursor-pointer [text-shadow:.5px_.5px_.5px_black] [-webkit-text-stroke:0.1px_black]'>Luigie Panahon</Label>
                                                <Label className='text-[15px] font-mono font-semibold italic cursor-pointer [text-shadow:.5px_.5px_.5px_black] [-webkit-text-stroke:0.1px_black]'>Web Developer</Label>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                                <div className='bg-[#0036B3] p-3 px-10 w-full h-[26%] md:h-[15%] border-t-[3px] border-white' />
                            </div>
                        </motion.div>
                    )
                )}

                {successSignin &&
                    <motion.div
                        key="welcome"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 0.3 } }}
                    >
                        <div className="flex flex-col items-center h-[100dvh] md:h-screen w-screen text-white top-0 right-0 absolute">
                            <div className='bg-[#0036B3] p-1 w-full h-[23%] md:h-[12%] border-b-[3px] border-white' />
                            <div className='p-1 w-full h-full flex items-center bg-[linear-gradient(to_bottom_right,#8aa8ff,#587FDB)]'>
                                <div className=' p-1 h-full w-[90%] md:w-[70%] flex justify-end items-center'>
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
                    </motion.div>
                }
            </div>
        </AnimatePresence>
    );
};

export default Signin;
