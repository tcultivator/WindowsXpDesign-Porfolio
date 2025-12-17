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
        <div className="@container w-full h-full box-border text-white p-5">
            <div className="flex flex-col @2xl:flex-row gap-6 justify-start h-full">

                {/* LEFT: Video + Info */}
                <div className="flex-1 flex flex-col gap-4">

                    {/* Video Player */}
                    <div className="relative w-full aspect-video bg-black rounded-xl overflow-hidden shadow-2xl shadow-white/10">
                        <Image
                            src={projectsSelection[Number(addressBarCurrent.index)].image}
                            alt=""
                            fill
                            className="object-cover"
                        />

                        {/* Fake Play Button (optional) */}
                        <div className="absolute inset-0 flex items-center justify-center bg-black/0">
                            <div className="w-16 h-16 rounded-full bg-black/60 flex items-center justify-center">
                                <FaPlay className='text-[20px] text-white/80 ml-1' />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-1'>
                        {/* Title */}
                        <Label className="text-lg font-semibold font-orbitron leading-tight">
                            {projectsSelection[Number(addressBarCurrent.index)].label}
                        </Label>
                        <div className='flex items-center gap-4'>
                            <div className='flex items-center gap-1'>
                                <FaGithub className='tet-white text-[35px]' />
                                <Label className="text-sm text-white/60 font-normal">
                                    tcultivator
                                </Label>
                            </div>
                            <div className='flex items-center gap-2'>
                                <Link className='bg-white hover:bg-white/80 rounded-[24px] text-black flex items-center justify-center  p-2 w-[70px] @2xl:w-[100px] ' href={'https://github.com/tcultivator'} target='_blank'>
                                    <Label className='text-[12px] mt-[-2px] cursor-pointer font-semibold'>Follow</Label>
                                </Link>
                                <Link className='bg-black border border-white/15 shadow-sm shadow-white/20 hover:bg-white/10 rounded-[24px] text-white flex items-center justify-center  p-2 w-[80px] @2xl:w-[100px] ' href={projectsSelection[Number(addressBarCurrent.index)].link} target='_blank'>
                                    <Label className='text-[12px] mt-[-2px] cursor-pointer font-semibold'>Full Demo</Label>
                                </Link>
                                <button onClick={() => {
                                    setAddressbarHistory(addressBarCurrent)
                                    setAddressBarCurrent({ index: null, label: projectsSelection[Number(addressBarCurrent.index)].link })
                                }} className='bg-black border border-white/15 shadow-sm shadow-white/20 hover:bg-white/10 rounded-[24px] text-white flex items-center justify-center  p-2 w-[80px] @2xl:w-[100px] '>
                                    <Label className='text-[12px] mt-[-2px] cursor-pointer font-semibold'>Mini Demo</Label>
                                </button>
                            </div>


                        </div>



                    </div>

                    {/* Description */}
                    <div className="text-[12px] text-white/80 bg-white/20 rounded-md p-4 ">
                        <ReactMarkdown>
                            {projectsSelection[Number(addressBarCurrent.index)].description}
                        </ReactMarkdown>

                    </div>
                </div>

                {/* RIGHT: Related */}
                <div className="w-full @2xl:w-[30%] grid grid-cols-1 @xl:grid-cols-2  @2xl:grid-cols-1  @2xl:pr-1">
                    {projectsSelection.map((data, index) => (
                        <div onClick={() => {
                            setAddressbarHistory(addressBarCurrent)
                            setAddressBarCurrent({ index: index, label: `/MyWorks/${data.label}` })
                        }}
                            key={index}
                            className="group flex flex-col gap-1 @2xl:flex-row @2xl:gap-3 cursor-pointer hover:bg-white/5 p-2 rounded"
                        >
                            <div className="relative w-full @2xl:w-[60%] aspect-video bg-black rounded overflow-hidden">
                                <Image
                                    src={data.image}
                                    alt={data.label}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>

                            <div className="flex flex-col gap-1 w-full @2xl:w-[40%]">
                                <Label className="text-[12px] font-medium line-clamp-2 font-orbitron">
                                    {data.label}
                                </Label>

                                <div className='flex items-center gap-1'>
                                    <FaGithub className='tet-white text-[20px]' />
                                    <Label className="text-[12px] text-white/60 font-normal">
                                        tcultivator
                                    </Label>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>

    )
}

export default ProjectOverview
