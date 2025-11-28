"use client"
import React from 'react'
import Image from 'next/image'
// start menu components
import StartMenu from '@/components/homeScreen/startMenu/startMenu'

// react library
import { Rnd } from 'react-rnd'
// shadcn components
import { Label } from '@/components/ui/label'

// icons
import { FaFolderOpen } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { FaRegWindowMaximize } from "react-icons/fa";
import { FaWindowMinimize } from "react-icons/fa";
import { useApplicationStore } from '@/stores/application'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { LiaTimesSolid } from "react-icons/lia";




// images
import Logo from '@/public/loadingscreenxplogo.png';
import folderwithicon from '@/public/folderwithicon.ico'
import searchIcon from '@/public/searchIcon.ico'
import folderIcon from '@/public/folderIcon.ico'
import folderLayoutIcon from '@/public/folderLayoutIcon.ico'


const topMenuItems = ["File", "Edit", "View", "Favourites", "Tools", "Help"];


const HomeScreen = () => {

    const windowItem = useApplicationStore((state) => state.windowItem)
    const activeId = useApplicationStore((state) => state.activeId)
    const setActiveId = useApplicationStore((state) => state.setActiveId)
    const closeWindowItem = useApplicationStore((state) => state.closeWindowItem)
    return (
        <div className="flex flex-col items-center w-screen h-screen text-white relative bg-cover bg-center overflow-hidden"
            style={{ backgroundImage: "url('/xpbg.jpg')" }}>
            {windowItem.map((data) => (
                <Rnd

                    onMouseDown={() => setActiveId(data.id)}
                    className={activeId === data.id ? "z-50" : "z-10"}
                    key={data.id}
                    bounds="parent"
                    minWidth={800}
                    minHeight={500}
                    dragHandleClassName="drag-handle"
                    enableResizing={{
                        top: true,
                        right: true,
                        bottom: true,
                        left: true,
                        topRight: true,
                        bottomRight: true,
                        bottomLeft: true,
                        topLeft: true,
                    }}
                    default={{
                        x: window.innerWidth / 2 - 320,
                        y: window.innerHeight / 2 - 320,
                        width: 320,
                        height: 120,
                    }}
                >
                    <div className={`w-full h-full ${activeId === data.id ? 'bg-[#235ddb]' : 'bg-[#3d82f2]'} rounded-t-[10px] p-1 flex flex-col shadow-[inset_0_2px_5px_rgba(103,169,246,0.95),inset_0_-2px_6px_rgba(0,0,0,0.3),0_2px_4px_rgba(0,0,0,0.5)]`}>
                        {/* Drag handle */}
                        <div className="drag-handle w-full h-6 cursor-move rounded-t-[5px] pb-1 px-1 flex justify-between items-center">
                            <div className='flex items-center gap-1'>
                                {/* <FaFolderOpen className='text-[#f5d78c] text-[15px]' /> */}
                                {data.icon}
                                <Label>{data.title}</Label>
                            </div>
                            <div className='flex items-center gap-1'>
                                <button className='bg-[#235ddb] p-[2px] rounded border border-white shadow-[inset_0_1px_2px_rgba(255,255,255,0.8),inset_0_-2px_3px_rgba(0,0,0,0.3),0_2px_4px_rgba(0,0,0,0.5)] hover:brightness-110 cursor-pointer'>
                                    <FaWindowMinimize className='p-[2px] text-[17px]' />
                                </button>

                                <button className='bg-[#235ddb] p-[2px] rounded border border-white shadow-[inset_0_1px_2px_rgba(255,255,255,0.8),inset_0_-2px_3px_rgba(0,0,0,0.3),0_2px_4px_rgba(0,0,0,0.5)] hover:brightness-110 cursor-pointer'>
                                    <FaRegWindowMaximize className='p-[2px] text-[17px]' />
                                </button>

                                <button onClick={() => closeWindowItem(data.id)} className='bg-red-400 p-[2px] rounded border border-white shadow-[inset_0_1px_2px_rgba(255,255,255,0.8),inset_0_-2px_3px_rgba(0,0,0,0.3),0_2px_4px_rgba(0,0,0,0.5)] hover:brightness-110 cursor-pointer'>
                                    <LiaTimesSolid className='text-[17px]' />
                                </button>

                            </div>

                        </div>
                        <div className='bg-[#edebd8] border-b border-black/30 flex items-center justify-between'>
                            <div className='flex items-center text-black p-[2px]'>
                                {
                                    topMenuItems.map((data, index) => (
                                        <Label key={index} className='text-[12px] font-normal  px-2 hover:bg-[#235ddb] hover:text-white'>{data}</Label>
                                    ))
                                }

                            </div>
                            <div className='px-2 border-l border-black/30'>
                                <Image src={Logo} alt='' width={50} height={50} className='w-[20px]' />
                            </div>
                        </div>
                        <div className='bg-[#edebd8] p-1 flex items-center'>
                            <div className='flex items-center w-max border-r border-black/20 px-1'>
                                <button className='text-black flex items-center gap-1  p-1'>
                                    <FaArrowLeft className=' bg-[#b0b0b0] shadow-[inset_0_2px_5px_rgba(255,255,255,0.5),inset_0_-2px_6px_rgba(0,0,0,0.3),0_2px_4px_rgba(0,0,0,0.5)] text-white p-[3px] text-[22px] rounded-[50%]' />
                                    <Label className='font-light text-black/60 text-[12px]'>Back</Label>
                                    <IoMdArrowDropdown className='text-[12px] mt-[2px]' />
                                </button>
                                <button className='text-black flex items-center gap-1  p-1'>
                                    <FaArrowRight className=' bg-[#b0b0b0] shadow-[inset_0_2px_5px_rgba(255,255,255,0.5),inset_0_-2px_6px_rgba(0,0,0,0.3),0_2px_4px_rgba(0,0,0,0.5)] text-white p-[3px] text-[22px] rounded-[50%]' />
                                    <IoMdArrowDropdown className='text-[12px] mt-[2px]' />
                                </button>
                                <button className='relative h-full  py-1 rounded px-[2px] border hover:border-black/30'>
                                    <Image src={folderwithicon} alt='folder icon' width={20} height={20} className='w-[22px]' />
                                </button>
                            </div>
                            <div className='flex items-center w-max border-r border-black/20 px-1'>
                                <button className=' h-full  py-1 rounded px-[2px] pr-1 border hover:border-black/30 flex items-center gap-1'>
                                    <Image src={searchIcon} alt='folder icon' width={20} height={20} className='w-[22px]' />
                                    <Label className='text-black font-light text-[12px]'>Search</Label>
                                </button>
                                <button className=' h-full  py-1 rounded px-[2px] pr-1 border hover:border-black/30 flex items-center gap-1'>
                                    <Image src={folderIcon} alt='folder icon' width={20} height={20} className='w-[22px]' />
                                    <Label className='text-black font-light text-[12px]'>Folders</Label>
                                </button>
                            </div>
                            <div className='flex items-center w-max px-1'>
                                <button className=' h-full  py-1 rounded px-[2px] pr-1 border hover:border-black/30 flex items-center gap-1 text-black'>
                                    <Image src={folderLayoutIcon} alt='folder icon' width={20} height={20} className='w-[22px]' />
                                    <IoMdArrowDropdown className='text-[12px] mt-[2px]' />
                                </button>

                            </div>

                        </div>

                        {/* Content */}
                        <div className="bg-white h-full ">

                        </div>
                    </div>
                </Rnd>
            ))}

            <div className='bg-[#235ddb] w-full max-h-8 absolute bottom-0 gap-1 flex items-center shadow-[inset_0_2px_5px_rgba(103,169,246,0.95),inset_0_-2px_6px_rgba(0,0,0,0.3),0_2px_4px_rgba(0,0,0,0.5)]'>
                <StartMenu />
                <div className='flex items-center'>
                    {
                        windowItem.map((data) => (
                            <div onClick={() => setActiveId(data.id)} key={data.id} className='max-h-8 h-8 w-[150px] py-[3px]'>
                                <div className={`px-3 flex gap-1 items-center ${activeId === data.id ? 'bg-[#235ddb]' : 'bg-[#3d82f2]'}  rounded-[3px] w-full h-full border border-black/20  hover:brightness-110 cursor-pointer`}>
                                    <Label className='text-[12px]'>{data.icon}</Label>
                                    <Label className='font-thin text-[12px]'>{data.title}</Label>
                                </div>
                            </div>
                        ))
                    }
                </div>


            </div>
        </div >
    )
}

export default HomeScreen
