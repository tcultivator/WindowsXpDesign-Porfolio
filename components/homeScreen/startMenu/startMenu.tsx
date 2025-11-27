import React from 'react'
import Logo from '@/public/loadingscreenxplogo.png';
import Image from 'next/image';
import { Label } from '@/components/ui/label';
import profile from '@/public/profile.jpg'
import { FaInternetExplorer } from "react-icons/fa";
import { FaPowerOff } from "react-icons/fa6";
import { LuKeyRound } from "react-icons/lu";
import { FaPlay } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import { FaGithub } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
const startMenu = () => {
    return (
        <>
            <Popover>
                <PopoverTrigger asChild>
                    <button className='flex items-center bg-gradient-to-b from-[#5be15b] to-[#049b00] max-h-10 px-5 py-2 gap-2 rounded-r-xl cursor-pointer shadow-[inset_0_1px_2px_rgba(255,255,255,0.8),inset_0_-2px_3px_rgba(0,0,0,0.3),0_2px_4px_rgba(0,0,0,0.5)] hover:brightness-110'>
                        <Image src={Logo} alt='' width={50} height={50} className='w-[25px]' />
                        <Label className='text-[18px] italic cursor-pointer'>start</Label>
                    </button>
                </PopoverTrigger>
                <PopoverContent className="w-110">
                    <div className="grid gap-0 p-1">
                        <div className='flex items-center gap-1 p-1'>
                            <div className='p-[3px] w-max rounded-[7px] bg-[#587FDB] inset-shadow-sm inset-shadow-white'>
                                <Image src={profile} alt='' width={50} height={50} className='rounded' />
                            </div>
                            <Label className='text-[17px]'>Luigie Panahon</Label>
                        </div>
                        <div className='flex '>
                            <div className='p-1 py-3 bg-white flex flex-col gap-7 border-r border-[#aacaf2] w-full'>
                                <div className='flex flex-col gap-3 h-[350px]'>
                                    {/* add function that open the browser using iframe */}
                                    <div className='flex flex-col gap-3 pb-4 border-b border-black/10'>
                                        <div className='flex items-center gap-1 p-1 rounded hover:bg-[#afd3f0] cursor-pointer'>
                                            <FaInternetExplorer className='text-[#3397e8] text-[30px]' />
                                            <div>
                                                <Label className='text-black'>Internet</Label>
                                                <Label className='text-black/50 font-thin'>Internet Explorer</Label>
                                            </div>
                                        </div>
                                        {/* add function that open projects folder using iframe */}
                                        <div className='flex items-center gap-1 p-1 rounded hover:bg-[#afd3f0] cursor-pointer'>
                                            <TfiEmail className='text-[#d2e5fa] text-[30px]' />
                                            <div>
                                                <Label className='text-black'>E-Mail</Label>
                                                <Label className='text-black/50 font-thin'>google mail</Label>
                                            </div>
                                        </div>
                                    </div>


                                    <div className='flex items-center gap-1 p-1 rounded hover:bg-[#afd3f0] cursor-pointer'>
                                        <FaFolderOpen className='text-[#f5d78c] text-[30px]' />
                                        <div>
                                            <Label className='text-black'>Projects</Label>

                                        </div>
                                    </div>
                                    <div className='flex items-center gap-1 p-1 rounded hover:bg-[#afd3f0] cursor-pointer'>
                                        <FaGithub className='text-black text-[30px]' />
                                        <div>
                                            <Label className='text-black'>Github</Label>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-1 p-1 rounded hover:bg-[#afd3f0] cursor-pointer'>
                                        <GrLinkedin className='text-[#3397e8] text-[30px]' />
                                        <div>
                                            <Label className='text-black'>Linkedin</Label>
                                        </div>
                                    </div>

                                </div>

                                <div className='flex items-center border-t border-black/20 gap-1 p-2 justify-center rounded hover:bg-[#afd3f0] cursor-pointer'>
                                    <NavigationMenu>
                                        <NavigationMenuList>
                                            <NavigationMenuItem>
                                                <NavigationMenuTrigger>
                                                    <div className='flex items-center'>
                                                        <div>
                                                            <Label className='text-black'>All Programs</Label>
                                                        </div>
                                                        <FaPlay className='text-[#04b504] text-[20px]' />
                                                    </div>
                                                </NavigationMenuTrigger>
                                                <NavigationMenuContent>
                                                    <div className='bg-white w-[200px] border border-black/10 text-black p-2 flex flex-col gap-2'>
                                                        <div className='flex items-center gap-1 p-1 rounded hover:bg-[#afd3f0] cursor-pointer'>
                                                            <FaInternetExplorer className='text-[#3397e8] text-[20px]' />
                                                            <div>
                                                                <Label className='text-black/80 font-thin'>Internet Explorer</Label>
                                                            </div>
                                                        </div>
                                                        <div className='flex items-center gap-1 p-1 rounded hover:bg-[#afd3f0] cursor-pointer'>
                                                            <FaInternetExplorer className='text-[#3397e8] text-[20px]' />
                                                            <div>
                                                                <Label className='text-black/80 font-thin'>Internet Explorer</Label>
                                                            </div>
                                                        </div>
                                                        <div className='flex items-center gap-1 p-1 rounded hover:bg-[#afd3f0] cursor-pointer'>
                                                            <FaInternetExplorer className='text-[#3397e8] text-[20px]' />
                                                            <div>
                                                                <Label className='text-black/80 font-thin'>Internet Explorer</Label>
                                                            </div>
                                                        </div>
                                                        <div className='flex items-center gap-1 p-1 rounded hover:bg-[#afd3f0] cursor-pointer'>
                                                            <FaInternetExplorer className='text-[#3397e8] text-[20px]' />
                                                            <div>
                                                                <Label className='text-black/80 font-thin'>Internet Explorer</Label>
                                                            </div>
                                                        </div>
                                                        <div className='flex items-center gap-1 p-1 rounded hover:bg-[#afd3f0] cursor-pointer'>
                                                            <FaInternetExplorer className='text-[#3397e8] text-[20px]' />
                                                            <div>
                                                                <Label className='text-black/80 font-thin'>Internet Explorer</Label>
                                                            </div>
                                                        </div>
                                                        <div className='flex items-center gap-1 p-1 rounded hover:bg-[#afd3f0] cursor-pointer'>
                                                            <FaInternetExplorer className='text-[#3397e8] text-[20px]' />
                                                            <div>
                                                                <Label className='text-black/80 font-thin'>Internet Explorer</Label>
                                                            </div>
                                                        </div>
                                                        <div className='flex items-center gap-1 p-1 rounded hover:bg-[#afd3f0] cursor-pointer'>
                                                            <FaInternetExplorer className='text-[#3397e8] text-[20px]' />
                                                            <div>
                                                                <Label className='text-black/80 font-thin'>Internet Explorer</Label>
                                                            </div>
                                                        </div>
                                                        <div className='flex items-center gap-1 p-1 rounded hover:bg-[#afd3f0] cursor-pointer'>
                                                            <FaInternetExplorer className='text-[#3397e8] text-[20px]' />
                                                            <div>
                                                                <Label className='text-black/80 font-thin'>Internet Explorer</Label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </NavigationMenuContent>
                                            </NavigationMenuItem>
                                        </NavigationMenuList>
                                    </NavigationMenu>


                                </div>
                            </div>
                            <div className='p-1 bg-[#d2e5fa] border-r border-[#235ddb] w-full'>

                            </div>
                        </div>
                        <div className='p-3 flex items-center gap-4 justify-end'>
                            <button className='flex gap-1 items-center cursor-pointer bg-transparent'><LuKeyRound className='bg-[#db9b3b]   text-[30px] p-[4px] rounded inset-shadow-sm inset-shadow-[#bd7e20]' /><Label className='font-thin'>Log Off</Label></button>
                            <button className='flex gap-1 items-center cursor-pointer bg-transparent'><FaPowerOff className='bg-[#e8602a]   text-[30px] p-[7px] rounded inset-shadow-sm inset-shadow-red-500' /><Label className='font-thin'>Turn Off Computer</Label></button>
                        </div>
                    </div>
                </PopoverContent>
            </Popover>
        </>
    )
}

export default startMenu
