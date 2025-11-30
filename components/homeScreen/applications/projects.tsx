import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
// shadcn components
import { Label } from '@/components/ui/label'

// icons 
import { RiArrowUpDoubleFill } from "react-icons/ri";
import { FaSquareJs } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";


//reusable components that open application
import { openInternetExplorer, openQuickStart, openMyWorks, openEmail } from '@/utils/OpenApplication'

const Projects = () => {
    return (
        <div className='@container flex gap-4 text-black bg-[#ffffff] w-full border-b border-b-[#023bb5] border-r border-r-[#023bb5] ' draggable={false}>
            <div className='max-w-[180px] min-w-[180px] bg-gradient-to-t from-[#6374d6] to-[#79a3e8] flex flex-col gap-2 p-2 border-x border-l-[#023bb5] border-r-black/20'>
                <div className='bg-white/50 rounded-t '>
                    <div className='flex items-center justify-between p-1 pl-2 rounded-t bg-gradient-to-r from-white to-[#79a3e8]'>
                        <Label className='text-[11px] text-[#0f4fd6] font-bold'>Featured Projects</Label>
                        <RiArrowUpDoubleFill className='bg-white rounded-[50%]  shadow-sm shadow-black/50 border border-black/30' />
                    </div>
                    <div className='flex flex-col gap-1 p-1 px-3'>
                        <div className='flex items-center gap-1'>
                            <RiNextjsFill className='text-black text-[16px]' />
                            <Link className='text-[10px] font-medium text-[#0f4fd6] hover:underline select-none' draggable={false} href={'https://overclockedx-client.vercel.app'} target='_blank'>OverClockedX-Client</Link>
                        </div>
                        <div className='flex items-center gap-1'>
                            <RiNextjsFill className='text-black text-[16px]' />
                            <Link className='text-[10px] font-medium text-[#0f4fd6] hover:underline select-none' draggable={false} href={'https://overclockedx-admin.vercel.app'} target='_blank'>OverClockedX-Admin</Link>
                        </div>
                        <div className='flex items-center gap-1'>
                            <FaSquareJs className='text-[#f0d71d] text-[15px]' />
                            <Link className='text-[10px] font-medium text-[#0f4fd6] hover:underline select-none' draggable={false} href={'https://tcultivator.github.io/instagramClone-DevelopmentPhaseV2'} target='_blank'>Instagram Clone</Link>
                        </div>
                    </div>
                </div>

                <div className='bg-white/50 rounded-t'>
                    <div className='flex items-center justify-between p-1 pl-2 rounded-t bg-gradient-to-r from-white to-[#79a3e8]'>
                        <Label className='text-[11px] text-[#0f4fd6] font-bold'>Portfolio links</Label>
                        <RiArrowUpDoubleFill className='bg-white rounded-[50%]  shadow-sm shadow-black/50 border border-black/30' />
                    </div>
                    <div className='flex flex-col gap-1 p-1 px-3'>
                        <div className='flex items-center gap-1'>
                            <FaSquareJs className='text-[#f0d71d] text-[15px]' />
                            <Link className='text-[10px] font-medium text-[#0f4fd6] hover:underline select-none' draggable={false} href={'https://tcultivator.github.io/myPortfolio/'} target='_blank'>Portfolio v1</Link>
                        </div>
                        <div className='flex items-center gap-1'>
                            <RiNextjsFill className='text-black text-[16px]' />
                            <Link className='text-[10px] font-medium text-[#0f4fd6] hover:underline select-none ' draggable={false} href={'https://tcultivator.github.io/myPortfolio/'} target='_blank'>Portfolio v2 Windows Xp</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full p-2 grid grid-cols-2 gap-2 @2xl:grid-cols-3 @4xl:grid-cols-4">
                <button onDoubleClick={() => openInternetExplorer('https://overclockedx-client.vercel.app')}
                    className="flex w-max h-max p-1 justify-start cursor-pointer border rounded border-black/20 focus:bg-[#0a60ff]" id='p1'>
                    <div className="flex flex-col gap-1 items-center justify-start">
                        <div className="aspect-video flex items-center justify-center">
                            <Image
                                src="/myWorks/overclockedx-client.webp"
                                alt="OverClockedX-Client-Image"
                                width={130}
                                height={130}
                                className="border border-black/50 select-none @7xl:w-full"
                                id='p1image'
                                draggable={false}
                            />
                        </div>
                        <Label id='p1label' className="font-normal text-black text-[11px]">OverClockedX-Client</Label>
                    </div>
                </button>
                <button id='p2' onDoubleClick={() => openInternetExplorer('https://overclockedx-admin.vercel.app')} className='flex  w-max h-max p-1 justify-start cursor-pointer border rounded border-black/20 focus:bg-[#0a60ff]'>
                    <div className='flex flex-col gap-1 items-center justify-start'>
                        <div className='aspect-video flex items-center justify-center'>
                            <Image id='p2image' src="/myWorks/overclockedx-admin.webp" alt='OverClockedX-Admin-Image' width={130} height={130} className='border border-black/50 select-none @7xl:w-full' draggable={false} />
                        </div>
                        <Label id='p2label' className='font-normal text-black text-[11px]'>OverClockedX-Admin</Label>
                    </div>
                </button>
                <button id='p3' onDoubleClick={() => openInternetExplorer('https://tcultivator.github.io/instagramClone-DevelopmentPhaseV2')} className='flex  w-max h-max p-1 cursor-pointer border rounded border-black/20 focus:bg-[#0a60ff]'>
                    <div className='flex flex-col gap-1 items-center'>
                        <div className='aspect-video flex items-center justify-center'>
                            <Image id='p3image' src="/myWorks/instagram-clone.webp" alt='Instagram-clone-Image' width={130} height={130} className='border border-black/50 select-none @7xl:w-full' draggable={false} />
                        </div>
                        <Label id='p3label' className='font-normal text-black text-[11px]'>Instagram Clone</Label>
                    </div>
                </button>
                <button id='p4' onDoubleClick={() => openInternetExplorer('https://tcultivator.github.io/myPortfolio/')} className='flex  w-max h-max p-1 cursor-pointer border rounded border-black/20 focus:bg-[#0a60ff]'>
                    <div className='flex flex-col gap-1 items-center'>
                        <div className='aspect-video flex items-center justify-center'>
                            <Image id='p4image' src="/myWorks/portfolio-v1.webp" alt='Portfolio-V1-Image' width={130} height={130} className='border border-black/50 select-none @7xl:w-full' draggable={false} />
                        </div>
                        <Label id='p4label' className='font-normal text-black text-[11px]'>Portfolio V1</Label>
                    </div>
                </button>

                {/* Repeat other items in the same structure */}
            </div>

        </div>
    )
}

export default Projects
