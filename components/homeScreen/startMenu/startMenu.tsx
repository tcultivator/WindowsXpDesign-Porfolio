import React from 'react'
import Image from 'next/image';
import Link from 'next/link';


//shadcn components
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle, } from "@/components/ui/navigation-menu"
import { Label } from '@/components/ui/label';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"



//zustand store data
import { useApplicationStore } from '@/stores/application';
import { useStartMenufunctionStore } from '@/stores/startMenuFunctionStore';

const startMenu = () => {
    const applicationData = useApplicationStore((state) => state.applicationsData)
    const setErrorWindowItem = useApplicationStore((state) => state.setErrorWindowItem)
    const sysAppData = useApplicationStore((state) => state.sysAppData)

    const setTurnOffModal = useStartMenufunctionStore((state) => state.setTurnOffModal)
    const setLogOffModal = useStartMenufunctionStore((state) => state.setLogOffModal)
    return (

        <DropdownMenu>
            <DropdownMenuTrigger asChild className='outline-none'>
                <button className='start-menu-button flex items-center min-w-[90px] bg-[#3DAA38] min-h-[29px] max-h-[29px] px-2 py-2 pr-5 gap-1 rounded-tr-[6px] rounded-br-[10px] cursor-pointer active:brightness-110  hover:brightness-110'>
                    <Image src="/loadingscreenxplogo.png" alt='' width={1} height={1} className=' w-[20px]  mt-[3px] select-none drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black]' draggable={false} />
                    <Label className='text-[18px] font-bold [text-shadow:.5px_.5px_.5px_black] [-webkit-text-stroke:0.1px_black] text-white/85 italic cursor-pointer'>start</Label>
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-85 md:w-95" align="start">
                <div className="grid gap-0 p-1">
                    <div className='flex items-center gap-1 p-1'>
                        <div className='p-[3px] w-max rounded-[7px] bg-[#587FDB] inset-shadow-sm inset-shadow-white '>
                            <Image src="/profile.gif" alt='' width={50} height={50} className='w-[40px] md:w-[50px] rounded select-none drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black]' draggable={false} />
                        </div>

                    </div>
                    <div className='flex '>

                        {/* left side of start menu */}
                        <div className='p-1  bg-white flex flex-col  border-r border-[#aacaf2] w-[50%]'>

                            <div className='flex flex-col gap-1 h-[315px]'>
                                <div className='flex flex-col gap-1 pb-2 border-b border-black/10'>
                                    {
                                        applicationData.slice(0, 2).map((data, index) => (
                                            <div key={index}>
                                                <DropdownMenuItem>
                                                    <div onClick={data.applicationOpenFunction} className='flex items-center gap-1 p-1 text-black  hover:bg-[#346eed] hover:text-white active:bg-[#346eed] active:text-white cursor-pointer'>
                                                        <Image src={data.applicationIcon} priority alt='' width={100} height={100} className='w-[30px] select-none drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black]' draggable={false} />
                                                        <div>
                                                            <Label className='text-[12px] leading-none '>{data.applicationName}</Label>
                                                            <Label className=' font-thin opacity-50 text-[12px] leading-none '>{data.applicationSubName}</Label>
                                                        </div>
                                                    </div>
                                                </DropdownMenuItem>
                                            </div>
                                        ))
                                    }

                                </div>
                                {
                                    applicationData.slice(2, 7).map((data, index) => (
                                        <div key={index}>
                                            <DropdownMenuItem>
                                                <div onClick={data.applicationOpenFunction} className='flex items-center gap-1 p-1 text-black  hover:bg-[#346eed] hover:text-white active:bg-[#346eed] active:text-white cursor-pointer'>
                                                    <Image src={data.applicationIcon} priority alt='' width={100} height={100} className='w-[30px] select-none drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black]' draggable={false} />
                                                    <div>
                                                        <Label className='text-[12px] leading-none font-normal'>{data.applicationName}</Label>
                                                    </div>
                                                </div>
                                            </DropdownMenuItem>
                                        </div>
                                    ))
                                }


                            </div>

                            <div className='flex items-center border-t border-black/20 gap-1 justify-center  hover:bg-[#346eed] hover:text-white active:bg-[#346eed] active:text-white text-black cursor-pointer'>
                                <NavigationMenu>
                                    <NavigationMenuList>
                                        <NavigationMenuItem>
                                            <NavigationMenuTrigger>
                                                <div className='flex items-center gap-2'>
                                                    <div>
                                                        <Label className='text-[12px] font-bold'>All Programs</Label>
                                                    </div>
                                                    <Image src="/876.ico" alt='' width={20} height={20} className='w-[17px] select-none drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black]' draggable={false} />
                                                </div>
                                            </NavigationMenuTrigger>
                                            <NavigationMenuContent>
                                                <div className='bg-white w-[150px] border border-black/10 text-black  flex flex-col gap-2'>
                                                    {
                                                        applicationData.map((data, index) => (

                                                            <div key={index} onClick={data.applicationOpenFunction} className='flex items-center gap-1 p-1  hover:bg-[#346eed] hover:text-white active:bg-[#346eed] active:text-white cursor-pointer'>
                                                                <Image src={data.applicationIcon} priority alt='' width={20} height={20} className='w-[18px] select-none drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black]' draggable={false} />
                                                                <div>
                                                                    <Label className='text-[12px] leading-none font-normal'>{data.applicationName}</Label>
                                                                </div>
                                                            </div>
                                                        ))
                                                    }
                                                    <Link href={"https://github.com/tcultivator"} target='_blank' className='flex items-center gap-1 p-1  hover:bg-[#346eed] hover:text-white active:bg-[#346eed] active:text-white cursor-pointer'>
                                                        <Image src="/gihubIcon.png" alt='' width={20} height={20} className='w-[18px] select-none drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black]' draggable={false} />
                                                        <div>
                                                            <Label className='text-[12px] leading-none font-normal'>Github</Label>
                                                        </div>
                                                    </Link>

                                                    <Link href={"https://www.linkedin.com/in/luigie-panahon-541733367/"} target='_blank' className='flex items-center gap-1 p-1  hover:bg-[#346eed] hover:text-white active:bg-[#346eed] active:text-white cursor-pointer'>
                                                        <Image src="/linkedinIcon.png" alt='' width={20} height={20} className='w-[18px] select-none drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black]' draggable={false} />
                                                        <div>
                                                            <Label className='text-[12px] leading-none font-normal'>Linkedin</Label>
                                                        </div>
                                                    </Link>


                                                </div>
                                            </NavigationMenuContent>
                                        </NavigationMenuItem>
                                    </NavigationMenuList>
                                </NavigationMenu>


                            </div>
                        </div>

                        {/* right side of start menu */}
                        <div className='p-1 flex flex-col gap-1 bg-[#d2e5fa]  w-[50%]'>
                            <div className='flex flex-col gap-1 py-1 border-b-[1px] border-transparent [border-image:linear-gradient(90deg,#d2e5fa,#80a1e8,#d2e5fa)_1]'>
                                {
                                    sysAppData.slice(0, 5).map((data, index) => (
                                        <DropdownMenuItem key={index}>
                                            <div onClick={setErrorWindowItem} className='flex items-center gap-1  text-[#073bab]  hover:bg-[#346eed] hover:text-white active:bg-[#346eed] active:text-white cursor-pointer'>
                                                <Image src={data.sysAppIcon} priority alt='' width={100} height={100} className='w-[25px] select-none drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black]' draggable={false} />
                                                <div>
                                                    <Label className='text-[12px] leading-none  font-bold '>{data.sysAppName}</Label>

                                                </div>
                                            </div>
                                        </DropdownMenuItem>
                                    ))
                                }

                            </div>


                            <div className='flex flex-col gap-1 py-1 border-b-[1px] border-transparent [border-image:linear-gradient(90deg,#d2e5fa,#80a1e8,#d2e5fa)_1]'>
                                {sysAppData.slice(5, 8).map((data, index) => (
                                    <DropdownMenuItem key={index}>
                                        <div onClick={setErrorWindowItem} className='flex items-center gap-1  text-[#073bab]  hover:bg-[#346eed] hover:text-white active:bg-[#346eed] active:text-white cursor-pointer'>
                                            <Image src={data.sysAppIcon} priority alt='' width={100} height={100} className='w-[25px] select-none drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black]' draggable={false} />
                                            <div>
                                                <Label className='text-[12px] leading-none  font-bold '>{data.sysAppName}</Label>

                                            </div>
                                        </div>
                                    </DropdownMenuItem>
                                ))}
                            </div>
                            {
                                sysAppData.slice(8).map((data, index) => (
                                    <DropdownMenuItem key={index}>
                                        <div onClick={setErrorWindowItem} className='flex items-center gap-1    hover:bg-[#346eed] hover:text-white active:bg-[#346eed] active:text-white text-[#073bab] cursor-pointer'>
                                            <Image src={data.sysAppIcon} priority alt='' width={100} height={100} className='w-[25px] select-none drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black]' draggable={false} />
                                            <div>
                                                <Label className='text-[12px] leading-none  font-bold '>{data.sysAppName}</Label>

                                            </div>
                                        </div>
                                    </DropdownMenuItem>
                                ))
                            }

                        </div>
                    </div>
                    <div className='p-3 flex items-center gap-4 justify-end'>

                        <DropdownMenuItem>
                            <button onClick={() => setLogOffModal(true)} className='flex gap-1 items-center cursor-pointer bg-transparent hover:bg-black/10'><Image src="/logoffbtn.ico" alt='folder icon' width={20} height={20} className='w-[22px] select-none ' draggable={false} /><Label className='font-thin text-[13px] cursor-pointer'>Log Off</Label></button>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <button onClick={() => setTurnOffModal(true)} className='flex gap-1 items-center cursor-pointer bg-transparent hover:bg-black/10'><Image src="/poweroffbtn.ico" alt='folder icon' width={20} height={20} className='w-[22px] select-none ' draggable={false} /><Label className='font-thin text-[13px] cursor-pointer'>Turn Off Computer</Label></button>
                        </DropdownMenuItem>

                    </div>
                </div>
            </DropdownMenuContent>
        </DropdownMenu>


    )
}

export default startMenu
