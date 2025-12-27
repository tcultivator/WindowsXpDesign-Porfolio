"use client"

import Image from 'next/image'
import React, { useState, useEffect } from 'react'
// start menu components
import StartMenu from '@/components/homeScreen/startMenu/startMenu'

// react library
import { Rnd } from 'react-rnd'
// shadcn components
import { Label } from '@/components/ui/label'
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuSeparator, ContextMenuTrigger } from "@/components/ui/context-menu"

// icons
import { useApplicationStore } from '@/stores/application'



//resuable components
import XPExplorerBar from '@/utils/XPExplorerBar';
import { openInternetExplorer, openQuickStart, openMyWorks, openEmail, openResume, openAboutMe, openWindowsMediaPlayer } from '@/utils/OpenApplication'
import { AppInHomePage } from '@/utils/AppInHomePage'


import SystemTray from '@/components/homeScreen/SystemTray/SystemTray'

import { useSelectionContainer, boxesIntersect } from '@air/react-drag-to-select'


import AccessDenied from '@/components/homeScreen/accessDenied/AccessDenied'


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

    const isMobileDevice = useApplicationStore((state) => state.isMobileDevice)
    const setIsMobileDevice = useApplicationStore((state) => state.setIsMobileDevice)
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
        'about-me',
        'windows-media-player'
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




    const [windowWidth, setWindowWidth] = useState(0);
    const [windowHeight, setWindowHeight] = useState(0);

    useEffect(() => {


        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            setWindowHeight(window.innerHeight);

        };

        setWindowWidth(window.innerWidth);
        setWindowHeight(window.innerHeight);
       

        window.addEventListener('resize', handleResize);


        return () => {
            window.removeEventListener('resize', handleResize);
        };

    }, []);


    useEffect(() => {
        if (windowWidth < 400) {
            
            setIsMobileDevice(true)
        } else {
            
            setIsMobileDevice(false)
        }
    }, [windowWidth]);


    return (
        <div className='h-[100dvh] overflow-hidden'>

            <ContextMenu>
                <ContextMenuTrigger>
                    <div
                        className="flex flex-col h-[100dvh] relative  bg-cover bg-center overflow-hidden"
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

                            <div className='p-1 h-[80dvh] md:h-[90dvh]  w-max grid grid-cols-2 grid-rows-5 md:grid-rows-7 grid-flow-col gap-5 items-center justify-start md:px-3 md:py-10 py-5'>

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
                                {/* ABOUT ME */}
                                <div
                                    id="item-about-me"
                                    className={`group rounded desktop-item`}
                                >
                                    <AppInHomePage
                                        icon={
                                            <Image
                                                src="/aboutmeIcon.ico"
                                                alt=""
                                                width={500}
                                                height={500}
                                                className={`w-[40px] select-none drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black]`}
                                                draggable={false}
                                            />
                                        }
                                        label={
                                            <Label className={`${selected.includes('about-me') ? 'bg-[#0028F0]' : ''} group-focus:bg-[#0028F0] font-semibold break-words text-[13px] leading-tight text-center p-1 cursor-pointer [text-shadow:1px_1px_1px_black] [-webkit-text-stroke:0.2px_black]`}>
                                                About Me
                                            </Label>
                                        }
                                        onClick={openAboutMe}
                                    />
                                </div>


                                {/* WINDOWS MEDIA PLAYER */}
                                <div
                                    id="item-windows-media-player"
                                    className={`group rounded desktop-item`}
                                >
                                    <AppInHomePage
                                        icon={
                                            <Image
                                                src="/windowsMediaPlayer/Windows Media Player 9.png"
                                                alt=""
                                                width={500}
                                                height={500}
                                                className={`w-[40px] select-none drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black]`}
                                                draggable={false}
                                            />
                                        }
                                        label={
                                            <Label className={`${selected.includes('windows-media-player') ? 'bg-[#0028F0]' : ''} group-focus:bg-[#0028F0] font-semibold break-words text-[13px] leading-tight text-center p-1 cursor-pointer [text-shadow:1px_1px_1px_black] [-webkit-text-stroke:0.2px_black]`}>
                                                Windows Media Player
                                            </Label>
                                        }
                                        onClick={openWindowsMediaPlayer}
                                    />
                                </div>





                            </div>
                        }




                        {
                            windowItem.map((data) => (
                                <Rnd
                                    data-disableselect="true"
                                    onMouseDown={() => setActiveId(data.id)}
                                    className={activeId === data.id ? `z-40 ${data.display ? 'scale-100' : 'scale-0'}` : `z-10 ${data.display ? 'scale-100' : 'scale-0'} h-full `}
                                    key={data.id}
                                    bounds="parent"
                                    minWidth={!isMobileDevice ? (data.title == 'windows media player' ? 350 : 450) : 0}
                                    minHeight={!isMobileDevice ? (data.title == 'windows media player' ? 350 : 500) : 0}
                                    position={{ x: data.fullScreen ? 0 : data.startX, y: data.fullScreen ? 0 : data.startY }}
                                    size={{ height: data.fullScreen ? windowHeight - 28 : data.defaultHeight, width: data.fullScreen ? windowWidth : data.defaultWidth }}
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


                                    <div className={`w-full h-full ${activeId === data.id ? 'bg-[#0066FF]' : 'bg-[#3d82f2]'} ${data.fullScreen ? '' : 'rounded-t-[7px]'} p-[2px] flex flex-col window-app-bar border border-[#023bb5] `}>
                                        {/* Drag handle */}
                                        <div className=" w-full  cursor-move rounded-t-[5px] pb-1 px-1 flex justify-between items-center pt-1">
                                            <div onDoubleClick={() => {
                                                if (!isMobileDevice) maximizeWindow(data.id)

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
                                                    onClick={() => {
                                                        if (!isMobileDevice) maximizeWindow(data.id)
                                                    }}
                                                    src={data.fullScreen ? '/applicationController/Restore.png' : '/applicationController/Maximize.png'}
                                                    alt=''
                                                    width={100}
                                                    height={100}
                                                    className={`${isMobileDevice ? 'brightness-75' : 'hover:brightness-125'} w-[20px] cursor-pointer `}

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


                                        {data.title != 'Internet' && data.title != 'Resume' && data.title != 'E-Mail' && data.title != 'My Works' && data.title != 'windows media player' && <XPExplorerBar
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
                                    <AccessDenied id={data.id} />
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
            <div data-disableselect="true" className='task-bar bg-[#2755EA] z-50 w-full h-7 max-h-7 fixed   bottom-0 gap-1 flex items-center '>
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

                <div className='sys-tray bg-[#1393e8] w-[135px] min-w-[135px] h-full border-l border-black/50 '>
                    <SystemTray />
                </div>
            </div>
        </div>


    )
}

export default HomeScreen
