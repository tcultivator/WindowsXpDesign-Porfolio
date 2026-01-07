import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { Label } from '@/components/ui/label'
import { FaGithub } from 'react-icons/fa'
import { IoMenu } from 'react-icons/io5'
import { GoHome } from "react-icons/go";

import { IoIosStarOutline } from "react-icons/io";

import IEBar from '@/utils/IEBar'
import Home from './projectsComponents/home'
import ProjectOverview from './projectsComponents/projectOverview'
import { useAddressbarStore } from '@/stores/addressBarStore'

const Projects = () => {
    const setAddressbarHistory = useAddressbarStore(
        (state) => state.setAddressbarHistory
    )
    const setAddressBarCurrent = useAddressbarStore(
        (state) => state.setAddressBarCurrent
    )
    const addressBarCurrent = useAddressbarStore(
        (state) => state.addressBarCurrent
    )

    const [openMenu, setOpenMenu] = useState(false)
    const scrollRef = useRef<HTMLDivElement>(null)

    const ProjectContents = () => {
        if (addressBarCurrent?.label === '/MyWorks') return <Home />
        return <ProjectOverview />
    }

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTo({
                top: 0,
                behavior: 'auto',
            })
        }
    }, [addressBarCurrent])

    const featuredProjectsOn = useAddressbarStore((state) => state.featuredProjectsOn)
    const setFeaturedProjectsOn = useAddressbarStore((state) => state.setFeaturedProjectsOn)


    return (
        <div
            className="
        @container flex flex-col
        w-full h-full min-h-0
        bg-[#FFFFFF] text-black
        
        relative
      "
        >


            {addressBarCurrent.label.includes('/MyWorks') ?
                <div className="@container flex-1 min-h-0 relative overflow-hidden  ">

                    {openMenu && (
                        <div className="absolute inset-0 z-50 bg-black/20">
                            <div
                                className="bg-white h-full w-[200px] transition-transform duration-300"
                                style={{
                                    transform: openMenu
                                        ? 'translateX(0)'
                                        : 'translateX(-100%)',
                                }}
                            >
                                <div className="h-full flex flex-col gap-5 p-3">
                                    <div className="flex items-center gap-5">
                                        <IoMenu
                                            onClick={() => setOpenMenu(false)}
                                            className="text-black text-[20px] cursor-pointer"
                                        />

                                        <Label
                                            onClick={() => {
                                                setAddressbarHistory(addressBarCurrent)
                                                setAddressBarCurrent({
                                                    index: null,
                                                    label: '/MyWorks',
                                                })
                                                setOpenMenu(false)
                                            }}
                                            className="flex items-center font-anton text-[17px] text-black cursor-pointer "
                                        >
                                            <span className="mr-[-6px]">My</span>
                                            <span className="bg-red-600 rounded-[10px] p-1 [text-shadow:1px_1px_1px_black] text-white [-webkit-text-stroke:0.1px_black]">
                                                Works
                                            </span>
                                        </Label>
                                    </div>

                                    <div className="flex flex-col gap-3 text-black">
                                        <div onClick={() => {
                                            setAddressbarHistory(addressBarCurrent)
                                            setAddressBarCurrent({
                                                index: null,
                                                label: '/MyWorks',
                                            })
                                        }} className="flex items-center gap-1 cursor-pointer">
                                            <GoHome className='text-[20px] cursor-pointer' />
                                            <Label className='font-normal text-[14px] cursor-pointer'>Home</Label>
                                        </div>

                                        <div onClick={setFeaturedProjectsOn} className="flex items-center gap-1 cursor-pointer">
                                            <IoIosStarOutline className={`${featuredProjectsOn ? 'text-yellow-400' : 'text-black'} text-[20px] cursor-pointer`} />
                                            <Label className={`${featuredProjectsOn ? 'font-bold' : 'font-normal'} text-[14px] cursor-pointer`}>Featured Projects</Label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}


                    <div ref={scrollRef} className="flex flex-col h-full overflow-auto">

                        <div className="sticky top-0 z-40 flex items-center justify-between p-3 bg-white/20 backdrop-blur-md border-b border-black/20">
                            <div className="flex items-center gap-5">
                                <IoMenu
                                    onClick={() => setOpenMenu(true)}
                                    className="text-black text-[20px] cursor-pointer block @2xl:hidden"
                                />

                                <Label
                                    onClick={() => {
                                        setAddressbarHistory(addressBarCurrent)
                                        setAddressBarCurrent({
                                            index: null,
                                            label: '/MyWorks',
                                        })
                                    }}
                                    className="flex items-center font-anton text-[17px] @2xl:px-5  cursor-pointer"
                                >
                                    <span className="mr-[-6px] text-black">My</span>
                                    <span className="bg-red-600 rounded-[10px] text-white p-1 [text-shadow:1px_1px_1px_black] [-webkit-text-stroke:0.1px_black]">
                                        Works
                                    </span>
                                </Label>
                            </div>

                            <FaGithub className="text-black text-[20px]" />
                        </div>


                        <div className="flex">

                            <div className="hidden @2xl:flex flex-col gap-3 w-[200px] p-5 text-black">
                                <div
                                    onClick={() => {
                                        setAddressbarHistory(addressBarCurrent)
                                        setAddressBarCurrent({
                                            index: null,
                                            label: '/MyWorks',
                                        })
                                    }}
                                    className="flex items-center gap-1 cursor-pointer"
                                >
                                    <GoHome className='text-[20px] cursor-pointer' />
                                    <Label className='font-normal text-[14px] cursor-pointer'>Home</Label>
                                </div>

                                <div onClick={setFeaturedProjectsOn} className="flex items-center gap-1">
                                    <IoIosStarOutline className={`${featuredProjectsOn ? 'text-yellow-400' : 'text-black'} text-[20px] cursor-pointer`} />
                                    <Label className={`${featuredProjectsOn ? 'font-bold' : 'font-normal'} text-[14px] cursor-pointer`}>Featured Projects</Label>
                                </div>
                            </div>


                            <div
                                key={addressBarCurrent?.label}
                                className="flex-1 animate-fade"
                            >
                                <ProjectContents />
                            </div>
                        </div>
                    </div>
                </div> :
                <div className='w-full h-full relative'>
                    <iframe
                        src={addressBarCurrent.label}
                        title="Google Replica"
                        style={{ width: '100%', height: '100%' }}
                        sandbox="allow-scripts allow-same-origin"
                        className=''
                    />

                </div>

            }



            <div className="p-[2px] bg-[#edebd8] border-t border-black/30">
                <Label className="text-[10px] text-black/80 px-2">
                    {addressBarCurrent?.label === '/MyWorks' ? 'Select a project to view details.' : 'Select a demo type, or click Play to watch a preview video.'}
                </Label>
            </div>
        </div>
    )
}

export default Projects
