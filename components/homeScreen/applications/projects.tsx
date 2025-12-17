import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { Label } from '@/components/ui/label'
import { FaGithub } from 'react-icons/fa'
import { IoMenu } from 'react-icons/io5'
import { GoHomeFill } from 'react-icons/go'
import { MdOutlineStar } from 'react-icons/md'
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


    return (
        <div
            className="
        @container flex flex-col
        w-full h-full min-h-0
        bg-black text-black
        
        relative
      "
        >
            {/* IE / XP HEADER */}
            <IEBar
                title="/MyWorks"
                icon={
                    <Image
                        src="/internetIcon.ico"
                        alt=""
                        width={20}
                        height={20}
                        className="w-[15px] select-none "
                        draggable={false}
                    />
                }
            />
            {addressBarCurrent.label.includes('/MyWorks') ?
                <div className="@container flex-1 min-h-0 relative overflow-hidden bg-black ">
                    {/* SLIDE MENU OVERLAY */}
                    {openMenu && (
                        <div className="absolute inset-0 z-50 bg-black/20">
                            <div
                                className="bg-black h-full w-[200px] transition-transform duration-300"
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
                                            className="text-white text-[20px] cursor-pointer"
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
                                            className="flex items-center font-anton text-[17px] text-white cursor-pointer"
                                        >
                                            <span className="mr-[-6px]">My</span>
                                            <span className="bg-red-600 rounded-[10px] p-1">
                                                Works
                                            </span>
                                        </Label>
                                    </div>

                                    <div className="flex flex-col gap-3 text-white">
                                        <div className="flex items-center gap-1 cursor-pointer">
                                            <GoHomeFill />
                                            <Label>Home</Label>
                                        </div>

                                        <div className="flex items-center gap-1 cursor-pointer">
                                            <MdOutlineStar />
                                            <Label>Featured Projects</Label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* SCROLLABLE CONTENT ONLY */}
                    <div ref={scrollRef} className="flex flex-col h-full overflow-auto">
                        {/* STICKY TOP BAR */}
                        <div className="sticky top-0 z-40 flex items-center justify-between p-3 bg-black/20 backdrop-blur-md border-b border-white/20">
                            <div className="flex items-center gap-5">
                                <IoMenu
                                    onClick={() => setOpenMenu(true)}
                                    className="text-white text-[20px] cursor-pointer block @2xl:hidden"
                                />

                                <Label
                                    onClick={() => {
                                        setAddressbarHistory(addressBarCurrent)
                                        setAddressBarCurrent({
                                            index: null,
                                            label: '/MyWorks',
                                        })
                                    }}
                                    className="flex items-center font-anton text-[17px] @2xl:px-5 text-white cursor-pointer"
                                >
                                    <span className="mr-[-6px]">My</span>
                                    <span className="bg-red-600 rounded-[10px] p-1">
                                        Works
                                    </span>
                                </Label>
                            </div>

                            <FaGithub className="text-white text-[20px]" />
                        </div>

                        {/* MAIN BODY */}
                        <div className="flex">
                            {/* DESKTOP SIDEBAR */}
                            <div className="hidden @2xl:flex flex-col gap-3 w-[200px] p-5 text-white">
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
                                    <GoHomeFill />
                                    <Label>Home</Label>
                                </div>

                                <div className="flex items-center gap-1">
                                    <MdOutlineStar />
                                    <Label>Featured Projects</Label>
                                </div>
                            </div>

                            {/* PROJECT CONTENT */}
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
                    {/* popup that say that some feature is locked due to security reason, please check the full demo */}
                    {/* <div className='bg-red-400 p-5 absolute top-1/2 right-1/2'>

                    </div> */}
                </div>

            }
            {/* CONTENT VIEWPORT (IMPORTANT) */}


            {/* STATUS BAR */}
            <div className="p-[2px] bg-[#edebd8] border-t border-white/30">
                <Label className="text-[10px] text-black/80 px-2">
                    Select project for more details
                </Label>
            </div>
        </div>
    )
}

export default Projects
