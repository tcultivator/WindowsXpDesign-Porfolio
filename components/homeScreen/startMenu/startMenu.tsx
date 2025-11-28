import React from 'react'
import Image from 'next/image';
// public images
import Logo from '@/public/loadingscreenxplogo.png';
import profile from '@/public/profile.jpg'


// icons
import { FaInternetExplorer } from "react-icons/fa";
import { FaPowerOff } from "react-icons/fa6";
import { LuKeyRound } from "react-icons/lu";
import { FaPlay } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import { FaGithub } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";

//shadcn components
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle, } from "@/components/ui/navigation-menu"
import { Popover, PopoverContent, PopoverTrigger, } from "@/components/ui/popover"
import { Label } from '@/components/ui/label';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

//zustand store
import { useApplicationStore } from '@/stores/application';

// applications components
import Projects from '../applications/projects';
const startMenu = () => {
    const addWindowItem = useApplicationStore((state) => state.addWindowItem)
    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <button className='flex items-center bg-gradient-to-b from-[#2eb32e] to-[#038200] max-h-8.5 px-2 py-2 pr-5 gap-1 rounded-tr-[6px] rounded-br-[10px] cursor-pointer inset-shadow-sm inset-shadow-black/50 shadow-[inset_0_10px_25px_rgba(1,107,1),inset_0_-2px_12px_rgba(1,107,1),0_2px_4px_rgba(1,107,1)] hover:brightness-110'>
                        <Image src={Logo} alt='' width={20} height={20} className='w-[20px] mt-[3px]' />
                        <Label className='text-[18px] font-bold text-white/85 italic cursor-pointer'>start</Label>
                    </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-95" align="start">
                    <div className="grid gap-0 p-1">
                        <div className='flex items-center gap-1 p-1'>
                            <div className='p-[3px] w-max rounded-[7px] bg-[#587FDB] inset-shadow-sm inset-shadow-white '>
                                <Image src={profile} alt='' width={50} height={50} className='rounded' />
                            </div>

                        </div>
                        <div className='flex '>
                            <div className='p-1  bg-white flex flex-col  border-r border-[#aacaf2] w-[50%]'>
                                <div className='flex flex-col gap-1 h-[300px]'>

                                    <div className='flex flex-col gap-1 pb-2 border-b border-black/10'>
                                        <DropdownMenuItem>
                                            <div onClick={() => addWindowItem('Internet', <FaInternetExplorer className='text-[#3397e8] text-[15px]' />, <Projects />)} className='flex items-center gap-1 p-1 text-black  hover:bg-[#346eed] hover:text-white cursor-pointer'>
                                                <FaInternetExplorer className='text-[#3397e8] text-[25px]' />
                                                <div>
                                                    <Label className='text-[13px] leading-none '>Internet</Label>
                                                    <Label className=' font-thin opacity-50 text-[13px] leading-none '>Internet Explorer</Label>
                                                </div>
                                            </div>
                                        </DropdownMenuItem>

                                        <DropdownMenuItem>
                                            <div onClick={() => addWindowItem('E-Mail', <TfiEmail className='text-[#d2e5fa] text-[15px]' />, <Projects />)} className='flex items-center gap-1 p-1 text-black  hover:bg-[#346eed] hover:text-white cursor-pointer'>
                                                <TfiEmail className='text-[#d2e5fa] text-[25px]' />
                                                <div>
                                                    <Label className='text-[13px] leading-none'>E-Mail</Label>
                                                    <Label className=' font-thin opacity-50 text-[13px] leading-none'>google mail</Label>
                                                </div>
                                            </div>
                                        </DropdownMenuItem>
                                    </div>

                                    <DropdownMenuItem>
                                        <div onClick={() => addWindowItem('Projects', <FaFolderOpen className='text-[#f5d78c] text-[15px]' />, <Projects />)} className='flex items-center gap-1 p-1 text-black  hover:bg-[#346eed] hover:text-white cursor-pointer'>
                                            <FaFolderOpen className='text-[#f5d78c] text-[25px]' />
                                            <div>
                                                <Label className='text-[13px] leading-none font-normal'>Projects</Label>
                                            </div>
                                        </div>
                                    </DropdownMenuItem>

                                    <DropdownMenuItem>
                                        <div className='flex items-center gap-1 p-1 text-black  hover:bg-[#346eed] hover:text-white cursor-pointer'>
                                            <FaGithub className='text-black text-[25px]' />
                                            <div>
                                                <Label className='text-[13px] leading-none font-normal'>Github</Label>
                                            </div>
                                        </div>
                                    </DropdownMenuItem>

                                    <DropdownMenuItem>
                                        <div className='flex items-center gap-1 p-1 text-black  hover:bg-[#346eed] hover:text-white cursor-pointer'>
                                            <GrLinkedin className='text-[#3397e8] text-[25px]' />
                                            <div>
                                                <Label className='text-[13px] leading-none font-normal'>Linkedin</Label>
                                            </div>
                                        </div>
                                    </DropdownMenuItem>

                                </div>

                                <div className='flex items-center border-t border-black/20 gap-1 justify-center  hover:bg-[#346eed] hover:text-white text-black cursor-pointer'>
                                    <NavigationMenu>
                                        <NavigationMenuList>
                                            <NavigationMenuItem>
                                                <NavigationMenuTrigger>
                                                    <div className='flex items-center gap-2'>
                                                        <div>
                                                            <Label className='text-[12px] font-bold'>All Programs</Label>
                                                        </div>
                                                        <FaPlay className='text-[#04b504] text-[15px]' />
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
                            <div className='p-1 bg-[#d2e5fa] border-r border-[#235ddb] w-[50%]'>

                            </div>
                        </div>
                        <div className='p-3 flex items-center gap-4 justify-end'>
                            <button className='flex gap-1 items-center cursor-pointer bg-transparent hover:bg-black/10'><Image src="/logoffbtn.ico" alt='folder icon' width={20} height={20} className='w-[22px]' /><Label className='font-thin text-[13px] cursor-pointer'>Log Off</Label></button>
                            <button className='flex gap-1 items-center cursor-pointer bg-transparent hover:bg-black/10'><Image src="/poweroffbtn.ico" alt='folder icon' width={20} height={20} className='w-[22px]' /><Label className='font-thin text-[13px] cursor-pointer'>Turn Off Computer</Label></button>
                        </div>
                    </div>
                </DropdownMenuContent>
            </DropdownMenu>

        </>
    )
}

export default startMenu
