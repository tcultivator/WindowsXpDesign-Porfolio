"use client"

import Image from 'next/image'
import { useState } from 'react'
// start menu components
import StartMenu from '@/components/homeScreen/startMenu/startMenu'

// react library
import { Rnd } from 'react-rnd'
// shadcn components
import { Label } from '@/components/ui/label'
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuSeparator, ContextMenuTrigger } from "@/components/ui/context-menu"

// icons
import { FaRegWindowMaximize } from "react-icons/fa";
import { FaWindowMinimize } from "react-icons/fa";
import { useApplicationStore } from '@/stores/application'
import { LiaTimesSolid } from "react-icons/lia";


//resuable components
import XPExplorerBar from '@/utils/XPExplorerBar';
import { openInternetExplorer, openQuickStart, openMyWorks, openEmail, openResume } from '@/utils/OpenApplication'
import { AppInHomePage } from '@/utils/AppInHomePage'


import SystemTray from '@/components/homeScreen/SystemTray/SystemTray'

const HomeScreen = () => {

    const windowItem = useApplicationStore((state) => state.windowItem)
    const activeId = useApplicationStore((state) => state.activeId)
    const setActiveId = useApplicationStore((state) => state.setActiveId)
    const closeWindowItem = useApplicationStore((state) => state.closeWindowItem)
    const maximizeWindow = useApplicationStore((state) => state.maximizeWindow)
    const updateWindow = useApplicationStore((state) => state.updateWindow)
    const minimizeWindow = useApplicationStore((state) => state.minimizeWindow)
    const cancelMinimize = useApplicationStore((state) => state.cancelMinimize)

    const [refresh, setRefresh] = useState(true)

    const refreshTheScreen = () => {
        setRefresh(false)
        setTimeout(() => {
            setRefresh(true)
        }, 50);
    }






    return (
        <div className='h-screen'>
            <ContextMenu>
                <ContextMenuTrigger>
                    <div className="flex flex-col  w-screen h-full text-white relative bg-cover bg-center overflow-hidden select-none "
                        style={{ backgroundImage: "url('/bg2.webp')" }}

                    >


                        {
                            refresh &&

                            <div className='p-1  h-full w-max flex flex-col gap-10 items-center justify-start px-3 py-10'>

                                {/* QUICK START GUIDE APP */}
                                <AppInHomePage
                                    icon={<Image id='MWImage' src="/QuickStartGuideIcon.ico" alt='' width={20} height={20} className='w-[30px] bg-clip-text select-none' draggable={false} />}
                                    label={<Label id='MWLabel' className='font-semibold break-words text-[10px] leading-tight text-center  p-1 cursor-pointer [text-shadow:1px_1px_1px_black] [-webkit-text-stroke:0.1px_black]'>Quick Start</Label>}
                                    onClick={openQuickStart}
                                />

                                {/* INTERNET EXPLORER APP */}
                                <AppInHomePage
                                    icon={<Image id='MWImage' src="/internetIcon.ico" alt='' width={20} height={20} className='w-[30px] bg-clip-text select-none' draggable={false} />}
                                    label={<Label id='MWLabel' className='font-semibold break-words text-[10px] leading-tight  text-center  p-1 cursor-pointer [text-shadow:1px_1px_1px_black] [-webkit-text-stroke:0.1px_black]'>Internet Explorer</Label>}
                                    onClick={() => openInternetExplorer('https://www.google.com/')}
                                />

                                {/* EMAIL APP */}
                                <AppInHomePage
                                    icon={<Image id='MWImage' src="/email.webp" alt='' width={20} height={20} className='w-[30px] bg-clip-text select-none' draggable={false} />}
                                    label={<Label id='MWLabel' className='font-semibold break-words text-[10px] leading-tight  text-center  p-1 cursor-pointer [text-shadow:1px_1px_1px_black] [-webkit-text-stroke:0.1px_black]'>E-mail</Label>}
                                    onClick={openEmail}
                                />

                                {/* MY WORKS APP */}
                                <AppInHomePage
                                    icon={<Image id='MWImage' src="/cmdIcon.png" alt='' width={20} height={20} className='w-[30px] bg-clip-text select-none' draggable={false} />}
                                    label={<Label id='MWLabel' className='font-semibold break-words text-[10px] leading-tight  text-center  p-1 cursor-pointer [text-shadow:1px_1px_1px_black] [-webkit-text-stroke:0.1px_black]'>My Works</Label>}
                                    onClick={openMyWorks}
                                />

                                {/* RESUME APP */}
                                <AppInHomePage
                                    icon={<Image id='MWImage' src="/1336.ico" alt='' width={20} height={20} className='w-[30px] bg-clip-text select-none' draggable={false} />}
                                    label={<Label id='MWLabel' className='font-semibold break-words text-[10px] leading-tight  text-center  p-1 cursor-pointer [text-shadow:1px_1px_1px_black] [-webkit-text-stroke:0.1px_black]'>Resume</Label>}
                                    onClick={openResume}
                                />




                            </div>
                        }




                        {
                            windowItem.map((data) => (
                                <Rnd

                                    onMouseDown={() => setActiveId(data.id)}
                                    className={activeId === data.id ? `z-40 ${data.display ? 'opacity-100' : 'opacity-0'}` : `z-10 ${data.display ? 'opacity-100' : 'opacity-0'}`}
                                    key={data.id}
                                    bounds="parent"
                                    minWidth={600}
                                    minHeight={400}
                                    position={{ x: data.fullScreen ? 0 : data.startX, y: data.fullScreen ? 0 : data.startY }}
                                    size={{ height: data.fullScreen ? window.innerHeight : data.defaultHeight, width: data.fullScreen ? window.innerWidth : data.defaultWidth }}
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
                                    onDragStop={(e, d) => {
                                        updateWindow(data.id, {
                                            startX: d.x,
                                            startY: d.y
                                        });
                                    }}

                                    onResizeStop={(e, dir, ref, delta, pos) => {
                                        updateWindow(data.id, {
                                            defaultWidth: parseFloat(ref.style.width),
                                            defaultHeight: parseFloat(ref.style.height),
                                        });
                                    }}

                                >

                                    <div className={`w-full h-full ${activeId === data.id ? 'bg-[#0f4fd6]' : 'bg-[#3d82f2]'} rounded-t-[10px] p-[3px] flex flex-col shadow-[inset_0_2px_5px_rgba(103,169,246,0.95),inset_0_-2px_6px_rgba(0,0,0,0.3),0_2px_4px_rgba(0,0,0,0.5)] border border-[#023bb5]`}>
                                        {/* Drag handle */}
                                        <div className=" w-full h-6 cursor-move rounded-t-[5px] pb-1 px-1 flex justify-between items-center">
                                            <div className='flex items-center gap-1 w-full drag-handle'>
                                                {/* <FaFolderOpen className='text-[#f5d78c] text-[15px]' /> */}
                                                <div className='w-[20px] aspect-square'>
                                                    {data.icon}
                                                </div>
                                                <Label className='text-[12px]'>{data.title}</Label>
                                            </div>
                                            <div className={`${activeId === data.id ? 'opacity-100' : 'opacity-70'} flex items-center gap-1`}>
                                                <button onClick={() => minimizeWindow(data.id)} className='bg-[#0f4fd6] p-[2px] rounded border border-white shadow-[inset_0_1px_2px_rgba(255,255,255,0.8),inset_0_-2px_3px_rgba(0,0,0,0.3),0_2px_4px_rgba(0,0,0,0.5)] hover:brightness-110 cursor-pointer'>
                                                    <FaWindowMinimize className='p-[2px] text-[15px]' />
                                                </button>

                                                <button onClick={() => maximizeWindow(data.id)} className='bg-[#0f4fd6] p-[2px] rounded border border-white shadow-[inset_0_1px_2px_rgba(255,255,255,0.8),inset_0_-2px_3px_rgba(0,0,0,0.3),0_2px_4px_rgba(0,0,0,0.5)] hover:brightness-110 cursor-pointer'>
                                                    <FaRegWindowMaximize className='p-[2px] text-[15px]' />
                                                </button>

                                                <button onClick={() => closeWindowItem(data.id)} className='bg-red-400 p-[2px] rounded border border-white shadow-[inset_0_1px_2px_rgba(255,255,255,0.8),inset_0_-2px_3px_rgba(0,0,0,0.3),0_2px_4px_rgba(0,0,0,0.5)] hover:brightness-110 cursor-pointer'>
                                                    <LiaTimesSolid className='text-[15px]' />
                                                </button>

                                            </div>

                                        </div>


                                        {data.title != 'Internet' && data.title != 'Resume' && data.title != 'E-Mail' && <XPExplorerBar
                                            title={data.title}
                                            icon={data.icon}
                                        />}
                                        {/* Content */}
                                        <div className="h-full flex   ">
                                            {data.content}
                                        </div>
                                    </div>
                                </Rnd>
                            ))
                        }

                    </div >
                </ContextMenuTrigger>
                <ContextMenuContent className="w-45">
                    <ContextMenuItem inset >View</ContextMenuItem>
                    <ContextMenuItem inset>Sort by</ContextMenuItem>
                    <ContextMenuItem inset onClick={refreshTheScreen}>Refresh</ContextMenuItem>

                    <ContextMenuSeparator />

                    <ContextMenuItem inset disabled>Paste</ContextMenuItem>
                    <ContextMenuItem inset disabled>Paste Shortcut</ContextMenuItem>

                    <ContextMenuSeparator />

                    <ContextMenuItem inset>New</ContextMenuItem>

                    <ContextMenuSeparator />

                    <ContextMenuItem inset>Display</ContextMenuItem>
                    <ContextMenuItem inset>Personalized</ContextMenuItem>

                </ContextMenuContent>
            </ContextMenu>
            <div className='bg-[#235ddb] z-50 w-full h-8 max-h-8 fixed   bottom-0 gap-2 flex items-center shadow-[inset_0_2px_5px_rgba(103,169,246,0.95),inset_0_-2px_6px_rgba(0,0,0,0.3),0_2px_4px_rgba(0,0,0,0.5)]'>
                <StartMenu />

                <div className='flex items-center h-full w-full py-[2px] overflow-hidden whitespace-nowrap box-border'>
                    {windowItem.map((data) => (
                        <div
                            key={data.id}
                            onClick={() => cancelMinimize(data.id)}
                            className="h-full flex-1 min-w-0 max-w-[150px]"
                        >
                            <div
                                className={`
                        px-1 flex items-center gap-1
                        ${activeId === data.id ? 'bg-[#235ddb]' : 'bg-[#3d82f2]'}
                        rounded-[3px] w-full h-full border border-black/20
                        hover:brightness-110 cursor-pointer
                        min-w-0 pr-[10%]
                    `}
                            >
                                <div className="min-w-[20px] max-w-[20px] aspect-square">
                                    {data.icon}
                                </div>


                                <Label
                                    className="
                            font-thin text-[11px]
                            overflow-ellipsis
                            min-w-0 inline-block overflow-hidden whitespace-nowrap
                        "
                                >
                                    {data.title}
                                </Label>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='bg-[#1393e8] w-[150px] min-w-[150px] h-full border-l border-black/50 shadow-[inset_0_2px_5px_rgba(103,169,246,0.95),inset_0_-2px_6px_rgba(0,0,0,0.3),0_2px_4px_rgba(0,0,0,0.5)]'>
                    <SystemTray />
                </div>
            </div>
        </div>


    )
}

export default HomeScreen
