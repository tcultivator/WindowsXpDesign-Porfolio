import React from 'react'
import Image from 'next/image'
import { projectsSelection } from './home'
import { useAddressbarStore } from '@/stores/addressBarStore';
import { Label } from '@/components/ui/label';
import { FaGithub } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { openInternetExplorer } from '@/utils/OpenApplication';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
const ProjectOverview = () => {
    const addressBarCurrent = useAddressbarStore((state) => state.addressBarCurrent)
    const setAddressbarHistory = useAddressbarStore((state) => state.setAddressbarHistory)
    const setAddressBarCurrent = useAddressbarStore((state) => state.setAddressBarCurrent)
    return (
        <div className="@container w-full h-full box-border text-black p-2">
            <div className="flex flex-col @2xl:flex-row gap-6 justify-start h-full">

               
                <div className="flex-1 flex flex-col gap-4">

                    {/* video */}
                    <div className="relative w-full aspect-video border border-black/10 rounded-xl overflow-hidden shadow-2xl shadow-white/10">
                        <Image
                            src={projectsSelection[Number(addressBarCurrent.index)].image}
                            alt=""
                            fill
                            className="object-cover"
                        />

                        {/* play button */}
                        <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                            <div className="w-16 h-16 rounded-full bg-black/60 flex items-center justify-center cursor-pointer">
                                <FaPlay className='text-[20px] text-white/80 ml-1' />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-1 '>
                        
                        <Label className="text-lg font-normal font-orbitron leading-tight">
                            {projectsSelection[Number(addressBarCurrent.index)].label}
                        </Label>
                        <div className='flex items-center gap-1 @2xl:gap-4'>
                            <div className='flex items-center gap-1'>
                                <FaGithub className='tet-black text-[25px] @2xl:text-[35px] ' />
                                <Label className="text-[11px] @2xl:text-[13px] text-black/60 font-normal">
                                    tcultivator
                                </Label>
                            </div>
                            {/* links and navigation */}
                            <div className='flex items-center gap-1 @2xl:gap-2'>
                                <Link className='bg-black active:bg-black/80 hover:bg-black/80 rounded-[24px] text-white flex items-center justify-center  p-2 w-[70px] @2xl:w-[100px] ' href={'https://github.com/tcultivator'} target='_blank'>
                                    <Label className='text-[12px] mt-[-2px] cursor-pointer font-semibold'>Follow</Label>
                                </Link>
                                <Link className='bg-black/10  active:bg-black/15   hover:bg-black/15 rounded-[24px] text-black flex items-center justify-center  p-2 w-[80px] @2xl:w-[100px] ' href={projectsSelection[Number(addressBarCurrent.index)].link} target='_blank'>
                                    <Label className='text-[12px] mt-[-2px] cursor-pointer font-semibold'>Full Demo</Label>
                                </Link>
                                <button onClick={() => {
                                    setAddressbarHistory(addressBarCurrent)
                                    setAddressBarCurrent({ index: null, label: projectsSelection[Number(addressBarCurrent.index)].link })
                                }} className='bg-black/10 active:bg-black/15   hover:bg-black/15 rounded-[24px] text-black flex items-center justify-center  p-2 w-[80px] @2xl:w-[100px] '>
                                    <Label className='text-[12px] mt-[-2px] cursor-pointer font-semibold'>Mini Demo</Label>
                                </button>
                            </div>


                        </div>



                    </div>

                    {/* Description */}
                    <div className="text-[12px] text-black/80 bg-black/5 rounded-md p-4 ">
                        <ReactMarkdown>
                            {projectsSelection[Number(addressBarCurrent.index)].description}
                        </ReactMarkdown>

                    </div>
                </div>

                {/* RIGHT: Related */}
                <div className='w-full @2xl:w-[30%]'>
                    <div className="w-full grid grid-cols-1 @xl:grid-cols-2  @2xl:grid-cols-1  @2xl:pr-1">
                        {projectsSelection.map((data, index) => (
                            <div onClick={() => {
                                setAddressbarHistory(addressBarCurrent)
                                setAddressBarCurrent({ index: index, label: `/MyWorks/${data.label}` })
                            }}
                                key={index}
                                className="group flex flex-col gap-1 @2xl:flex-row @2xl:gap-3 cursor-pointer active:bg-black/5 hover:bg-black/5 p-2 rounded-[10px]"
                            >
                                <div className="relative w-full @2xl:w-[60%] aspect-video border border-black/10 rounded overflow-hidden">
                                    <Image
                                        src={data.image}
                                        alt={data.label}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>

                                <div className="flex flex-col gap-1 w-full @2xl:w-[40%]">
                                    <Label className="text-[10px] font-normal line-clamp-2 font-orbitron">
                                        {data.label}
                                    </Label>

                                    <div className='flex items-center gap-1'>
                                        <FaGithub className='tet-white text-[20px]' />
                                        <Label className="text-[10px] text-black/60 font-normal">
                                            tcultivator
                                        </Label>
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
