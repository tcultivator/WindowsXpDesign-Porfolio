"use client"

import Image from 'next/image'
import React, { useState } from 'react'
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

import { useSelectionContainer, boxesIntersect } from '@air/react-drag-to-select'






const HomeScreen = () => {

    const windowItem = useApplicationStore((state) => state.windowItem)
    const activeId = useApplicationStore((state) => state.activeId)
    const setActiveId = useApplicationStore((state) => state.setActiveId)
    const closeWindowItem = useApplicationStore((state) => state.closeWindowItem)
    const maximizeWindow = useApplicationStore((state) => state.maximizeWindow)
    const updateWindow = useApplicationStore((state) => state.updateWindow)
    const minimizeWindow = useApplicationStore((state) => state.minimizeWindow)
    const cancelMinimize = useApplicationStore((state) => state.cancelMinimize)

    const errorWindowItem = useApplicationStore((state) => state.errorWindowItem)
    const closeErrorWindowItem = useApplicationStore((state) => state.closeErrorWindowItem)

    const [refresh, setRefresh] = useState(true)

    const refreshTheScreen = () => {
        setRefresh(false)
        setTimeout(() => {
            setRefresh(true)
        }, 50);
    }



    const items = [
        'quick-start',
        'my-works',
        'email',
        'resume',
    ]


    const [selected, setSelected] = useState<string[]>([])

    const { DragSelection } = useSelectionContainer({
        onSelectionChange: (box) => {
            const newSelected = items.filter((item) => {
                const el = document.getElementById(`item-${item}`);
                if (!el) return false;

                return boxesIntersect(box, el.getBoundingClientRect());
            });

            setSelected(newSelected);
        },
        selectionProps: {
            style: {
                border: '0.3px dashed #ffffffa4',
                borderRadius: 2,
                backgroundColor: '#003cff23',
                opacity: 0.5,
            },
        },
        shouldStartSelecting: (target) => {
            // Prevent selection on elements that shouldn't be selectable
            if (!(target instanceof HTMLElement)) return false;

            let el: HTMLElement | null = target;
            while (el) {
                if (el.dataset.disableselect === "true") return false; // ignore this element and its children
                el = el.parentElement;
            }

            return true; // allow selection otherwise
        },
    });



    return (
        <div className='h-screen'>

            {/* <audio src="/sounds/windows-xp-startup.mp3" className='hidden' autoPlay /> */}
            <ContextMenu>
                <ContextMenuTrigger>
                    <div
                        className="flex flex-col w-screen h-full relative bg-cover bg-center overflow-hidden"
                        style={{ backgroundImage: "url('/bg2.webp')" }}
                        onMouseDown={(e) => {
                            const target = e.target as HTMLElement

                            // Clicked on empty desktop space
                            if (!target.closest('[data-desktop-item]')) {
                                setSelected([])
                            }
                        }}
                    >

                        <DragSelection />


                        {
                            refresh &&

                            <div className='p-1  h-full w-max flex flex-col gap-5 items-center justify-start px-3 py-10'>

                                {/* QUICK START GUIDE APP */}
                                <div
                                    id="item-quick-start"
                                    // make div focusable
                                    className={`group rounded desktop-item`}
                                >
                                    <AppInHomePage
                                        icon={
                                            <Image
                                                src="/QuickStartGuideIcon.ico"
                                                alt=""
                                                width={500}
                                                height={500}
                                                className={`w-[40px] select-none`}
                                                draggable={false}
                                            />
                                        }
                                        label={
                                            <Label className={`${selected.includes('quick-start') ? 'bg-[#0028F0]' : ''} group-focus:bg-[#0028F0] font-semibold break-words text-[13px] leading-tight text-center p-1 cursor-pointer [text-shadow:1px_1px_1px_black] [-webkit-text-stroke:0.2px_black]`}>
                                                Quick Start
                                            </Label>
                                        }
                                        onClick={openQuickStart}
                                    />
                                </div>
                          


                                {/* MY WORKS APP */}
                                <div
                                    id="item-my-works"
                                    className={`group rounded desktop-item`}
                                >
                                    <AppInHomePage
                                        icon={
                                            <Image
                                                src="/internetIcon.ico"
                                                alt=""
                                                width={500}
                                                height={500}
                                                className={`w-[40px] select-none filter drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black] `}
                                                draggable={false}
                                            />
                                        }
                                        label={
                                            <Label className={`${selected.includes('my-works') ? 'bg-[#0028F0]' : ''} group-focus:bg-[#0028F0] font-semibold break-words text-[13px] leading-tight text-center p-1 cursor-pointer [text-shadow:1px_1px_1px_black] [-webkit-text-stroke:0.2px_black]`}>
                                                My Works
                                            </Label>
                                        }
                                        onClick={openMyWorks}
                                    />
                                </div>

                                {/* EMAIL APP */}
                                <div
                                    id="item-email"
                                    className={`group rounded desktop-item`}
                                >
                                    <AppInHomePage
                                        icon={
                                            <Image
                                                src="/email.webp"
                                                alt=""
                                                width={500}
                                                height={500}
                                                className={`w-[40px] select-none drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black] `}
                                                draggable={false}
                                            />
                                        }
                                        label={
                                            <Label className={`${selected.includes('email') ? 'bg-[#0028F0]' : ''} group-focus:bg-[#0028F0] font-semibold break-words text-[13px] leading-tight text-center p-1 cursor-pointer [text-shadow:1px_1px_1px_black] [-webkit-text-stroke:0.2px_black]`}>
                                                E-mail
                                            </Label>
                                        }
                                        onClick={openEmail}
                                    />
                                </div>

                                {/* RESUME APP */}
                                <div
                                    id="item-resume"
                                    className={`group rounded desktop-item`}
                                >
                                    <AppInHomePage
                                        icon={
                                            <Image
                                                src="/pdfIcon.webp"
                                                alt=""
                                                width={500}
                                                height={500}
                                                className={`w-[40px] select-none drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black]`}
                                                draggable={false}
                                            />
                                        }
                                        label={
                                            <Label className={`${selected.includes('resume') ? 'bg-[#0028F0]' : ''} group-focus:bg-[#0028F0] font-semibold break-words text-[13px] leading-tight text-center p-1 cursor-pointer [text-shadow:1px_1px_1px_black] [-webkit-text-stroke:0.2px_black]`}>
                                                Resume
                                            </Label>
                                        }
                                        onClick={openResume}
                                    />
                                </div>





                            </div>
                        }




                        {
                            windowItem.map((data) => (
                                <Rnd
                                    data-disableselect="true"
                                    onMouseDown={() => setActiveId(data.id)}
                                    className={activeId === data.id ? `z-40 ${data.display ? 'opacity-100' : 'opacity-0'}` : `z-10 ${data.display ? 'opacity-100' : 'opacity-0'} h-full `}
                                    key={data.id}
                                    bounds="parent"
                                    minWidth={450}
                                    minHeight={500}
                                    position={{ x: data.fullScreen ? 0 : data.startX, y: data.fullScreen ? 0 : data.startY }}
                                    size={{ height: data.fullScreen ? window.innerHeight : data.defaultHeight, width: data.fullScreen ? window.innerWidth : data.defaultWidth }}
                                    dragHandleClassName="drag-handle"
                                    enableResizing={{
                                        top: data.fullScreen ? false : true,
                                        right: data.fullScreen ? false : true,
                                        bottom: data.fullScreen ? false : true,
                                        left: data.fullScreen ? false : true,
                                        topRight: data.fullScreen ? false : true,
                                        bottomRight: data.fullScreen ? false : true,
                                        bottomLeft: data.fullScreen ? false : true,
                                        topLeft: data.fullScreen ? false : true,
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


                                    <div className={`w-full h-full ${activeId === data.id ? 'bg-[#0f4fd6]' : 'bg-[#3d82f2]'} ${data.fullScreen ? '' : 'rounded-t-[7px]'} p-[2px] flex flex-col shadow-[inset_0_2px_5px_rgba(103,169,246,0.95),inset_0_-2px_6px_rgba(0,0,0,0.3),0_2px_4px_rgba(0,0,0,0.5)] border border-[#023bb5] `}>
                                        {/* Drag handle */}
                                        <div className=" w-full  cursor-move rounded-t-[5px] pb-1 px-1 flex justify-between items-center pt-1">
                                            <div onDoubleClick={() => {
                                                maximizeWindow(data.id)
                                            }} className='flex items-center gap-1 w-full drag-handle'>
                                                {/* <FaFolderOpen className='text-[#f5d78c] text-[15px]' /> */}
                                                <div className='w-[20px] aspect-square'>
                                                    {data.icon}
                                                </div>
                                                <Label className='text-[12px]'>{data.title}</Label>
                                            </div>
                                            <div className={`${activeId === data.id ? 'opacity-100' : 'opacity-70'}  flex justify-end min-w-[80px] max-w-[80px] items-center gap-1 cursor-default pl-1`}>
                                                <Image
                                                    onClick={() => minimizeWindow(data.id)}
                                                    src={'/applicationController/Minimize.png'}
                                                    alt=''
                                                    width={100}
                                                    height={100}
                                                    className='w-[20px]  cursor-pointer hover:brightness-125'
                                                />
                                                <Image
                                                    onClick={() => maximizeWindow(data.id)}
                                                    src={data.fullScreen ? '/applicationController/Restore.png' : '/applicationController/Maximize.png'}
                                                    alt=''
                                                    width={100}
                                                    height={100}
                                                    className='w-[20px] cursor-pointer hover:brightness-125'
                                                />
                                                <Image
                                                    onClick={() => closeWindowItem(data.id)}
                                                    src={'/applicationController/Exit.png'}
                                                    alt=''
                                                    width={100}
                                                    height={100}
                                                    className='w-[20px] cursor-pointer hover:brightness-125'
                                                />


                                            </div>

                                        </div>


                                        {data.title != 'Internet' && data.title != 'Resume' && data.title != 'E-Mail' && data.title != 'My Works' && <XPExplorerBar
                                            title={data.title}
                                            icon={data.icon}
                                        />}
                                        {/* Content */}
                                        <div className="flex-1 min-h-0    ">
                                            {data.content}
                                        </div>
                                    </div>
                                </Rnd>
                            ))
                        }
                        {
                            errorWindowItem.map((data) => (
                                <Rnd
                                    data-disableselect="true"
                                    enableResizing={false}
                                    onMouseDown={() => setActiveId(data.id)}
                                    key={data.id}
                                    className={activeId === data.id ? `z-40` : `z-10`}
                                    default={{
                                        x: window.innerWidth / 2 - 320 / 2,
                                        y: window.innerHeight / 2 - 150 / 2,
                                        width: 320,
                                        height: 150,
                                    }}
                                >
                                    <div className={`w-full h-full ${activeId === data.id ? 'bg-[#0f4fd6]' : 'bg-[#3d82f2]'} rounded-t-[10px] p-[3px] flex flex-col shadow-[inset_0_2px_5px_rgba(103,169,246,0.95),inset_0_-2px_6px_rgba(0,0,0,0.3),0_2px_4px_rgba(0,0,0,0.5)] border border-[#023bb5]`}>
                                        {/* Drag handle */}
                                        <div className=" w-full h-6 cursor-move rounded-t-[5px] pb-1 px-1 flex justify-between items-center pt-1">
                                            <div className='flex items-center gap-1 w-full drag-handle'>
                                                {/* <FaFolderOpen className='text-[#f5d78c] text-[15px]' /> */}
                                                <div className='w-[20px] aspect-square'>
                                                    <Image src="/Critical.png" alt='' width={20} height={20} className='w-full aspect-square select-none' />
                                                </div>
                                                <Label className='text-[12px]'>{'Local Disk (C:)'}</Label>
                                            </div>
                                            <div className={`${activeId === data.id ? 'opacity-100' : 'opacity-70'}  flex justify-end min-w-[80px] max-w-[80px] items-center gap-1 cursor-default pl-1`}>

                                                <Image
                                                    onClick={() => closeErrorWindowItem(data.id)}
                                                    src={'/applicationController/Exit.png'}
                                                    alt=''
                                                    width={100}
                                                    height={100}
                                                    className='w-[20px] cursor-pointer hover:brightness-125'
                                                />


                                            </div>
                                            {/* <div className={`${activeId === data.id ? 'opacity-100' : 'opacity-70'} flex items-center gap-1`}>
                                                <button onClick={() => closeErrorWindowItem(data.id)} className='bg-red-400 p-[2px] rounded border border-white shadow-[inset_0_1px_2px_rgba(255,255,255,0.8),inset_0_-2px_3px_rgba(0,0,0,0.3),0_2px_4px_rgba(0,0,0,0.5)] hover:brightness-110 cursor-pointer'>
                                                    <LiaTimesSolid className='text-[15px]' />
                                                </button>
                                            </div> */}

                                        </div>

                                        {/* Content */}
                                        <div className="h-full flex flex-col bg-white text-black  ">
                                            <audio src="/sounds/erro.mp3" className='hidden' autoPlay />
                                            <div className='flex gap-3 text-black p-4'>
                                                <div className='w-[30px] aspect-square'>
                                                    <Image src="/Critical.png" alt='' width={20} height={20} className='w-full aspect-square select-none' />
                                                </div>
                                                <div>
                                                    <Label className='text-[14px] font-normal'>{'C:/ Not accessible.'}</Label>
                                                    <Label className='text-[14px] font-normal'>{'Access Denied'}</Label>
                                                </div>
                                            </div>
                                            <button onClick={() => closeErrorWindowItem(data.id)} className="group relative text-[14px] inline-flex w-[100px] m-auto  items-center justify-center overflow-hidden  border border-black/60 bg-transparent  font-normal  transition-all duration-100 [box-shadow:2px_2px_rgb(82_82_82)] active:translate-x-[1px] active:translate-y-[1px] active:[box-shadow:0px_0px_rgb(82_82_82)]">Ok</button>
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
            <div data-disableselect="true" className='task-bar bg-[#2755EA] z-50 w-full h-87 max-h-7 fixed   bottom-0 gap-1 flex items-center '>
                <StartMenu />

                <div className=' flex items-center h-full w-full py-[2px] overflow-hidden whitespace-nowrap box-border'>
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

                <div className='sys-tray bg-[#1393e8] w-[130px] min-w-[130px] h-full border-l border-black/50 '>
                    <SystemTray />
                </div>
            </div>
        </div>


    )
}

export default HomeScreen
