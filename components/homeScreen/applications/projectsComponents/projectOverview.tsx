import React from 'react'
import Image from 'next/image'
import { projectsSelection } from './home'
import { useAddressbarStore } from '@/stores/addressBarStore';
import { Label } from '@/components/ui/label';
import { FaGithub } from "react-icons/fa";

import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from "remark-gfm";
import "github-markdown-css/github-markdown-dark.css";
import Video from 'next-video'

import { useState } from 'react';

const ProjectOverview = () => {
    const addressBarCurrent = useAddressbarStore((state) => state.addressBarCurrent)
    const setAddressbarHistory = useAddressbarStore((state) => state.setAddressbarHistory)
    const setAddressBarCurrent = useAddressbarStore((state) => state.setAddressBarCurrent)


    const [descriptionButton, setDescriptionButton] = useState(false);

    return (
        <div className="@container w-full h-full box-border text-gray-100">
            <div className="flex flex-col @2xl:flex-row gap-2 justify-start h-full">


                <div className="flex-1 flex flex-col gap-2">

                    {/* video */}
                    <div className="relative w-full aspect-video rounded-[2px] overflow-hidden">
                        <Video src={projectsSelection[Number(addressBarCurrent.index)].video}></Video>
                    </div>
                    <div className='flex flex-col gap-1 px-2 '>

                        <Label className="text-lg font-normal font-orbitron leading-tight">
                            {projectsSelection[Number(addressBarCurrent.index)].label}
                        </Label>
                        <div className='flex flex-col @2xl:flex-row @2xl:justify-between items-start gap-1 @2xl:gap-4'>
                            <div className='flex flex-col gap-1'>
                                <div className='flex items-center gap-2'>
                                    <div className='flex items-center gap-1'>
                                        <FaGithub className='tet-[#a1a1a1] text-[25px] @2xl:text-[35px] ' />
                                        <Label className="flex items-center text-[11px] @2xl:text-[13px] font-normal">
                                            tcultivator
                                            <svg className="w-3 h-3 fill-current opacity-60 flex-shrink-0" viewBox="0 0 24 24"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zM9.8 17.3l-4.2-4.1L7 11.8l2.8 2.7L17 7.4l1.4 1.4-8.6 8.5z" /></svg>
                                        </Label>
                                    </div>
                                    <Link className='bg-gray-200 active:bg-[#a1a1a1] hover:[#a1a1a1] rounded-[24px] text-black flex items-center justify-center  p-2 w-[70px] @2xl:w-[100px] ' href={'https://github.com/tcultivator'} target='_blank'>
                                        <Label className='text-[12px]  cursor-pointer font-semibold'>Follow</Label>
                                    </Link>

                                </div>
                                <div className="text-[#a1a1a1] flex items-center text-xs flex-wrap">
                                    <span>{projectsSelection[Number(addressBarCurrent.index)].views} views</span>
                                    <span className="mx-1">•</span>
                                    <span>{projectsSelection[Number(addressBarCurrent.index)].time}</span>
                                </div>
                            </div>

                            {/* links and navigation */}
                            <div className='flex items-center gap-1 @2xl:gap-2'>

                                <Link className='bg-[#262626]  active:bg-[#323232]   hover:bg-[#323232] rounded-[24px] text-white flex items-center justify-center  p-2 w-[100px] ' href={projectsSelection[Number(addressBarCurrent.index)].link} target='_blank'>
                                    <Label className='text-[12px]  cursor-pointer font-semibold'>Full Demo</Label>
                                </Link>
                                <button onClick={() => {
                                    setAddressbarHistory(addressBarCurrent)
                                    setAddressBarCurrent({ index: null, label: projectsSelection[Number(addressBarCurrent.index)].link })
                                }} className='bg-[#262626]  active:bg-[#323232]   hover:bg-[#323232] rounded-[24px] text-white flex items-center justify-center  p-2 w-[100px] '>
                                    <Label className='text-[12px] cursor-pointer font-semibold'>Mini Demo</Label>
                                </button>
                            </div>


                        </div>



                    </div>

                    {/* Description */}
                    <div className={`markdown-body p-4 rounded-md overflow-hidden transition-all duration-200 ${descriptionButton ? 'h-full' : 'h-[220px]'}  relative`}>
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                            {projectsSelection[Number(addressBarCurrent.index)].description}
                        </ReactMarkdown>
                        <div className='absolute bottom-0 right-0 w-full flex items-center justify-center bg-black/20 backdrop-blur-md '>
                            <button onClick={() => setDescriptionButton(prev => !prev)} className=' active:bg-[#a1a1a1] hover:[#a1a1a1] rounded-[24px] text-white flex items-center justify-center  p-2 w-[100px] '>
                                <Label className='text-[12px] cursor-pointer font-semibold'>{descriptionButton ? 'Show less' : 'Show more'}</Label>
                            </button>
                        </div>

                    </div>

                </div>

                {/* RIGHT: Related */}
                <div className='w-full @2xl:w-[30%]'>
                    <div className="w-full grid gap-1 grid-cols-1 @xl:grid-cols-2  @2xl:grid-cols-1  @2xl:pr-1">
                        {projectsSelection.map((data, index) => (
                            <div onClick={() => {
                                setAddressbarHistory(addressBarCurrent)
                                setAddressBarCurrent({ index: index, label: `/MyWorks/${data.label}` })
                            }}
                                key={index}
                                className={`${addressBarCurrent.index == index ? 'hidden' : 'flex'} group bg-black/5 flex-col gap-1 @2xl:flex-row @2xl:gap-3 cursor-pointer active:bg-black/5 hover:bg-black/5 p-2 rounded-[10px]`}
                            >
                                <div className="relative w-full @2xl:w-[60%] aspect-video border border-black/10 rounded overflow-hidden">
                                    <Image
                                        src={data.image}
                                        alt={data.label}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute bottom-1.5 right-1.5 bg-black/80 text-white text-xs font-medium px-1.5 py-0.5 rounded-[4px]">
                                        {data.duration}
                                    </div>
                                </div>

                                <div className="flex flex-col gap-1 w-full @2xl:w-[40%]">
                                    <Label className="text-[10px] font-normal line-clamp-2 font-orbitron">
                                        {data.label}
                                    </Label>

                                    <div className='flex items-center gap-1'>
                                        <FaGithub className='tet-gray-100 text-[20px]' />
                                        <Label className="text-[10px] text-[#a1a1a1] font-normal">
                                            tcultivator
                                        </Label>
                                    </div>
                                    <div className="text-[#a1a1a1] flex items-center text-[10px] flex-wrap">
                                        <span>{projectsSelection[Number(addressBarCurrent.index)].views} views</span>
                                        <span className="mx-1">•</span>
                                        <span>{projectsSelection[Number(addressBarCurrent.index)].time}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


            </div>
        </div>

    )
}

export default ProjectOverview
