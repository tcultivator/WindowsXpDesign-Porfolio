import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
// shadcn components
import { Label } from '@/components/ui/label'
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"

// icons 
import { RiArrowUpDoubleFill } from "react-icons/ri";
import { FaSquareJs } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";

//zustand store
import { useApplicationStore } from '@/stores/application';

// applications components
import InternetExplorer from '../applications/InternetExplorer';

const Projects = () => {
    const addWindowItem = useApplicationStore((state) => state.addWindowItem)
    return (
        <div className='flex gap-4 text-black bg-white w-full '>
            <div className='max-w-[180px] min-w-[180px] bg-gradient-to-t from-[#6374d6] to-[#79a3e8] flex flex-col gap-2 p-2'>
                <div className='bg-white/50 rounded-t'>
                    <div className='flex items-center justify-between p-1 pl-2 rounded-t bg-gradient-to-r from-white to-[#79a3e8]'>
                        <Label className='text-[12px] text-[#235ddb] font-bold'>Featured Projects</Label>
                        <RiArrowUpDoubleFill className='bg-white rounded-[50%]  shadow-sm shadow-black/50 border border-black/30' />
                    </div>
                    <div className='flex flex-col gap-1 p-1 px-3'>
                        <div className='flex items-center gap-1'>
                            <RiNextjsFill className='text-black text-[16px]' />
                            <Link className='text-[10px] text-[#235ddb] hover:underline' href={'https://overclockedx-client.vercel.app'} target='_blank'>OverClockedX-Client</Link>
                        </div>
                        <div className='flex items-center gap-1'>
                            <RiNextjsFill className='text-black text-[16px]' />
                            <Link className='text-[10px] text-[#235ddb] hover:underline' href={'https://overclockedx-admin.vercel.app'} target='_blank'>OverClockedX-Admin</Link>
                        </div>
                        <div className='flex items-center gap-1'>
                            <FaSquareJs className='text-[#f0d71d] text-[15px]' />
                            <Link className='text-[10px] text-[#235ddb] hover:underline' href={'https://tcultivator.github.io/instagramClone-DevelopmentPhaseV2'} target='_blank'>Instagram Clone</Link>
                        </div>
                    </div>
                </div>

                <div className='bg-white/50 rounded-t'>
                    <div className='flex items-center justify-between p-1 pl-2 rounded-t bg-gradient-to-r from-white to-[#79a3e8]'>
                        <Label className='text-[12px] text-[#235ddb] font-bold'>Portfolio links</Label>
                        <RiArrowUpDoubleFill className='bg-white rounded-[50%]  shadow-sm shadow-black/50 border border-black/30' />
                    </div>
                    <div className='flex flex-col gap-1 p-1 px-3'>
                        <div className='flex items-center gap-1'>
                            <FaSquareJs className='text-[#f0d71d] text-[15px]' />
                            <Link className='text-[10px] text-[#235ddb] hover:underline' href={'https://tcultivator.github.io/myPortfolio/'} target='_blank'>Portfolio v1</Link>
                        </div>
                        <div className='flex items-center gap-1'>
                            <RiNextjsFill className='text-black text-[16px]' />
                            <Link className='text-[10px] text-[#235ddb] hover:underline' href={'https://tcultivator.github.io/myPortfolio/'} target='_blank'>Portfolio v2 Windows Xp</Link>
                        </div>
                    </div>
                </div>


                <div>

                </div>
                <div>

                </div>
            </div>
            <div className="w-full p-2 grid grid-cols-3 gap-2 auto-rows-fr">
                <div onClick={
                    () =>
                        addWindowItem('Internet',
                            <Image src="/internetIcon.ico" alt='' width={20} height={20} className='w-[15px]' />,
                            <InternetExplorer url={'https://overclockedx-client.vercel.app'} />, 1200, 700)}
                    className="flex w-full h-max p-1 justify-start">
                    <div className="flex flex-col gap-1 items-center justify-start">
                        <div className="aspect-video flex items-center justify-center">
                            <Image
                                src="/myWorks/overclockedx-client.webp"
                                alt="OverClockedX-Client-Image"
                                width={150}
                                height={150}
                                className="border border-black/50"
                            />
                        </div>
                        <Label className="font-light text-[13px]">OverClockedX-Client</Label>
                    </div>
                </div>
                <div className='flex  w-full h-max p-1 justify-start'>
                    <div className='flex flex-col gap-1 items-center justify-start'>
                        <div className='aspect-video flex items-center justify-center'>
                            <Image src="/myWorks/overclockedx-admin.webp" alt='OverClockedX-Admin-Image' width={150} height={150} className='border border-black/50' />
                        </div>
                        <Label className='font-light text-[13px]'>OverClockedX-Admin</Label>
                    </div>
                </div>
                <div className='flex  w-full h-max p-1'>
                    <div className='flex flex-col gap-1 items-center'>
                        <div className='aspect-video flex items-center justify-center'>
                            <Image src="/myWorks/instagram-clone.webp" alt='Instagram-clone-Image' width={150} height={150} className='border border-black/50' />
                        </div>
                        <Label className='font-light text-[13px]'>Instagram Clone</Label>
                    </div>
                </div>
                <div className='flex  w-full h-max p-1'>
                    <div className='flex flex-col gap-1 items-center'>
                        <div className='aspect-video flex items-center justify-center'>
                            <Image src="/myWorks/portfolio-v1.webp" alt='Portfolio-V2-Image' width={150} height={150} className='border border-black/50' />
                        </div>
                        <Label className='font-light text-[13px]'>Portfolio V2</Label>
                    </div>
                </div>

                {/* Repeat other items in the same structure */}
            </div>

        </div>
    )
}

export default Projects
