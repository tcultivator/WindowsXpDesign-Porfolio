
import React from 'react'
import { useEffect, useState } from 'react'
import { Label } from '@/components/ui/label';
import Image from 'next/image';
import { LiaTimesSolid } from "react-icons/lia";
import { useSystemTrayStore } from '@/stores/systemTrayStore';

import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"



function getFormattedTime() {
    const now = new Date();
    // ensure 12-hour format with AM/PM and no seconds
    return now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
}

const SystemTray = () => {
    const [time, setTime] = useState(getFormattedTime())
    const [tooltip, setTooltip] = useState(false)

    const volumeStatus = useSystemTrayStore((state) => state.volumeStatus)
    const setVolumeStatus = useSystemTrayStore((state) => state.setVolumeStatus)


    useEffect(() => {
        const id = setInterval(() => setTime(getFormattedTime()), 1000);
        return () => clearInterval(id);
    }, []);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setTooltip(true)
        }, 3000);

        return () => clearTimeout(timeout)
    }, [])

    useEffect(() => {
        const timeout = setTimeout(() => {
            setTooltip(false)
        }, 10000);
        return () => clearTimeout(timeout)

    }, [tooltip])

    return (
        <div className='w-full h-full flex gap-2 items-center justify-end pr-2 '>

            <div className='flex items-center gap-2'>
                <div className='relative'>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Image onClick={() => setTooltip(true)} id='MWImage' src="/systemTrayIcons/popupHelp.ico" alt='' width={500} height={500} className='w-[15px] cursor-pointer active:brightness-125  select-none  mt-[2px] drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black]' draggable={false} />
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Portfolio Info</p>
                        </TooltipContent>
                    </Tooltip>

                    <div className='custom-tooltip w-[230px] h-[80px] ' data-open={tooltip}>
                        <div className='flex flex-col gap-[3px] py-[3px] px-[6px] rounded-[7px] bg-white w-full h-full'>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center gap-1 pl-1'>
                                    <Image id='MWImage' src="/systemTrayIcons/popupHelp.ico" alt='' width={500} height={500} className='w-[13px] cursor-pointer  select-none  mt-[2px] drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black]' draggable={false} />
                                    <Label className='text-[12.5px] font-semibold text-black [text-shadow:.3px_.3px_.3px_black/50] [-webkit-text-stroke:0.1px_black]'>Welcome to my portfolio</Label>
                                </div>
                                <LiaTimesSolid onClick={() => setTooltip(false)} className='text-black text-[13px] cursor-pointer active:bg-red-400 active:text-white hover:bg-red-400 hover:text-white rounded-[2px]' />
                            </div>
                            <div className='w-full h-full px-1'>
                                <Label className='text-[12px] leading-tight font-thin text-black [text-shadow:.3px_.3px_.3px_black/50] [-webkit-text-stroke:0.1px_black]'>A Windows XP inspired interface highlighting frontend skills and attention to detail.</Label>
                            </div>
                        </div>
                    </div>
                </div>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Image onClick={setVolumeStatus} id='MWImage' src={`${volumeStatus ? '/systemTrayIcons/Volume.png' : '/systemTrayIcons/Mute.png'}`} alt='' width={500} height={500} className='w-[15px]  select-none active:brightness-125  mt-[2px] drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black] cursor-pointer' draggable={false} />
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>{volumeStatus ? 'Volume On' : ' Volume Off'}</p>
                    </TooltipContent>
                </Tooltip>

                <Image id='MWImage' src="/systemTrayIcons/Security - Ok.png" alt='' width={500} height={500} className='w-[15px] select-none drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black]' draggable={false} />

            </div>

            <Label className='font-semibold break-words text-[10px] leading-tight  text-center  p-1 cursor-pointer [text-shadow:1px_1px_1px_black] [-webkit-text-stroke:0.1px_black]'>{time}</Label>
        </div>
    )
}

export default SystemTray
