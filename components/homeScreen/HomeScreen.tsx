"use client"

import Image from 'next/image'
import React, { useState, useEffect } from 'react'
// start menu components
import StartMenu from '@/components/homeScreen/startMenu/startMenu'
import Logo from '@/public/loadingscreenxplogo.png';
// react library
import { Rnd } from 'react-rnd'
// shadcn components
import { Label } from '@/components/ui/label'
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuSeparator, ContextMenuTrigger } from "@/components/ui/context-menu"

// icons
import { useApplicationStore } from '@/stores/application'


import { motion, AnimatePresence } from "framer-motion";

//resuable components
import XPExplorerBar from '@/utils/XPExplorerBar';
import { openInternetExplorer, openQuickStart, openMyWorks, openEmail, openResume, openAboutMe, openWindowsMediaPlayer } from '@/utils/OpenApplication'
import { AppInHomePage } from '@/utils/AppInHomePage'


import SystemTray from '@/components/homeScreen/SystemTray/SystemTray'

import { useSelectionContainer, boxesIntersect } from '@air/react-drag-to-select'


import AccessDenied from '@/components/homeScreen/accessDenied/AccessDenied'
import IEBar from '@/utils/IEBar'
import EmailTopBar from '@/utils/EmailTopBar'
import WindowsMediaPlayerTopBar from '@/utils/WindowsMediaPlayerTopBar'


// zustand store

import { useStartMenufunctionStore } from '@/stores/startMenuFunctionStore';

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



    // turn off modal


    const turnOffModal = useStartMenufunctionStore((state) => state.turnOffModal)
    const setTurnOffModal = useStartMenufunctionStore((state) => state.setTurnOffModal)
    const logOffModal = useStartMenufunctionStore((state) => state.logOffModal)
    const setLogOffModal = useStartMenufunctionStore((state) => state.setLogOffModal)
    const [isGrayscale, setIsGrayscale] = useState(false);
    useEffect(() => {
        if (turnOffModal == true || logOffModal == true) {

            setTimeout(() => {
                setIsGrayscale(true)
            }, 1000);

        } else {
            setIsGrayscale(false)
        }
    }, [turnOffModal, logOffModal])

    // restart button

    const restartBtn = () => {
        sessionStorage.removeItem("session")
        sessionStorage.removeItem("sessionLoading")
        setTurnOffModal(false)
        setShutdownLoadingScreen(true)
        setTimeout(() => {
            window.location.reload()
        }, 2000);


    }

    const logoffBtn = () => {
        sessionStorage.removeItem("session")
        setTurnOffModal(false)
        setLogOffModal(false)
        window.location.reload()

    }

    const [shutdownLoadingScreen, setShutdownLoadingScreen] = useState(false)

    return (
        <div className='relative'>


            <div className={`h-[100dvh] w-screen overflow-hidden  ${isGrayscale ? "transition-all duration-800 ease-in grayscale-100" : "grayscale-0"}`}>

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

                                <div className='p-1 h-[80dvh] md:h-[90dvh]  w-max grid grid-cols-2 grid-rows-5 md:grid-rows-7 grid-flow-col gap-5 items-start justify-start md:px-3 md:py-10 py-5'>

                                    {/* QUICK START GUIDE APP */}
                                    <div
                                        id="item-quick-start"
                                        // make div focusable
                                        className={`${selected.includes('quick-start') ? 'bg-white/30 border-[1px]  border-white/60' : 'border-white/0'} border group rounded desktop-item`}
                                    >
                                        <AppInHomePage
                                            icon={
                                                <Image
                                                    src="/QuickStartGuideIcon.ico"
                                                    alt=""
                                                    width={1000}
                                                    height={1000}
                                                    className={`w-[45px] select-none`}
                                                    draggable={false}
                                                />
                                            }
                                            label={
                                                <Label className={` font-semibold break-words text-[13px] leading-tight text-center p-1 cursor-pointer [text-shadow:1px_1px_1px_black] [-webkit-text-stroke:0.2px_black]`}>
                                                    Quick Start
                                                </Label>
                                            }
                                            onClick={openQuickStart}
                                        />
                                    </div>



                                    {/* MY WORKS APP */}
                                    <div
                                        id="item-my-works"
                                        className={`${selected.includes('my-works') ? 'bg-white/30 border-[1px]  border-white/60' : 'border-white/0'} border group rounded desktop-item`}
                                    >
                                        <AppInHomePage
                                            icon={
                                                <Image
                                                    src="/internetIcon.ico"
                                                    alt=""
                                                    width={1000}
                                                    height={1000}
                                                    className={`w-[45px] select-none filter drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black] `}
                                                    draggable={false}
                                                />
                                            }
                                            label={
                                                <Label className={` font-semibold break-words text-[13px] leading-tight text-center p-1 cursor-pointer [text-shadow:1px_1px_1px_black] [-webkit-text-stroke:0.2px_black]`}>
                                                    My Works
                                                </Label>
                                            }
                                            onClick={openMyWorks}
                                        />
                                    </div>

                                    {/* EMAIL APP */}
                                    <div
                                        id="item-email"
                                        className={`${selected.includes('email') ? 'bg-white/30 border-[1px]  border-white/60' : 'border-white/0'} border group rounded desktop-item`}
                                    >
                                        <AppInHomePage
                                            icon={
                                                <Image
                                                    src="/email.webp"
                                                    alt=""
                                                    width={1000}
                                                    height={1000}
                                                    className={`w-[45px] select-none drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black] `}
                                                    draggable={false}
                                                />
                                            }
                                            label={
                                                <Label className={`  font-semibold break-words text-[13px] leading-tight text-center p-1 cursor-pointer [text-shadow:1px_1px_1px_black] [-webkit-text-stroke:0.2px_black]`}>
                                                    E-mail
                                                </Label>
                                            }
                                            onClick={openEmail}
                                        />
                                    </div>

                                    {/* RESUME APP */}
                                    <div
                                        id="item-resume"
                                        className={`${selected.includes('resume') ? 'bg-white/30 border-[1px]  border-white/60' : 'border-white/0'} border group  desktop-item`}
                                    >
                                        <AppInHomePage
                                            icon={
                                                <Image
                                                    src="/pdfIcon.webp"
                                                    alt=""
                                                    width={1000}
                                                    height={1000}
                                                    className={`w-[45px] select-none drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black]`}
                                                    draggable={false}
                                                />
                                            }
                                            label={
                                                <Label className={`  font-semibold break-words text-[13px] leading-tight text-center p-1 cursor-pointer [text-shadow:1px_1px_1px_black] [-webkit-text-stroke:0.2px_black]`}>
                                                    Resume
                                                </Label>
                                            }
                                            onClick={openResume}
                                        />
                                    </div>
                                    {/* ABOUT ME */}
                                    <div
                                        id="item-about-me"
                                        className={`${selected.includes('about-me') ? 'bg-white/30 border-[1px]  border-white/60' : 'border-white/0'} border group rounded desktop-item`}
                                    >
                                        <AppInHomePage
                                            icon={
                                                <Image
                                                    src="/aboutmeIcon.ico"
                                                    alt=""
                                                    width={1000}
                                                    height={1000}
                                                    className={`w-[45px] select-none drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black]`}
                                                    draggable={false}
                                                />
                                            }
                                            label={
                                                <Label className={`  font-semibold break-words text-[13px] leading-tight text-center p-1 cursor-pointer [text-shadow:1px_1px_1px_black] [-webkit-text-stroke:0.2px_black]`}>
                                                    About Me
                                                </Label>
                                            }
                                            onClick={openAboutMe}
                                        />
                                    </div>


                                    {/* WINDOWS MEDIA PLAYER */}
                                    <div
                                        id="item-windows-media-player"
                                        className={`${selected.includes('windows-media-player') ? 'bg-white/30 border-[1px]  border-white/60' : 'border-white/0'} border  group rounded desktop-item`}
                                    >
                                        <AppInHomePage
                                            icon={
                                                <Image
                                                    src="/windowsMediaPlayer/Windows Media Player 9.png"
                                                    alt=""
                                                    width={1000}
                                                    height={1000}
                                                    className={`w-[45px] select-none drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black]`}
                                                    draggable={false}
                                                />
                                            }
                                            label={
                                                <Label className={` font-semibold break-words text-[13px] leading-tight text-center p-1 cursor-pointer [text-shadow:1px_1px_1px_black] [-webkit-text-stroke:0.2px_black]`}>
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
                                                id={data.id}
                                            />}

                                            {data.title == 'My Works' && <IEBar
                                                title={data.title}
                                                icon={data.icon}
                                                id={data.id}
                                            />}
                                            {data.title == 'Internet' && <IEBar
                                                title={data.title}
                                                icon={data.icon}
                                                id={data.id}
                                            />}
                                            {data.title == 'E-Mail' && <EmailTopBar
                                                title={data.title}
                                                icon={data.icon}
                                                id={data.id}
                                            />}
                                            {data.title == 'windows media player' && <WindowsMediaPlayerTopBar
                                                title={data.title}
                                                icon={data.icon}
                                                id={data.id}
                                            />}
                                            {/* Content */}
                                            <div className="flex-1 min-h-0    ">
                                                {data.content}
                                            </div>
                                            {/* Desscription bar */}
                                            {
                                                data.title != 'My Works' &&
                                                <div className="p-[2px] bg-[#edebd8] border-t border-black/30">
                                                    <Label className="text-[10px] text-black/80 px-2">
                                                        {data.description}
                                                    </Label>
                                                </div>
                                            }

                                        </div>
                                    </Rnd>
                                ))
                            }
                            {
                                errorWindowItem.map((data) => (
                                    <Rnd
                                        data-disableselect="true"
                                        dragHandleClassName="drag-handle"
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

                    <div className="flex items-center h-full w-full py-[2px] overflow-hidden">
                        <AnimatePresence initial={false}>
                            {(isMobileDevice ? windowItem.slice(0, 5) : windowItem).map((data) => (
                                <motion.div
                                    key={data.id}
                                    layout
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.15, ease: "easeOut" }}
                                    onClick={() => cancelMinimize(data.id)}
                                    className="h-full flex-1 min-w-0 max-w-[150px]"
                                >
                                    <div
                                        className={`
            px-1 flex items-center gap-1
            ${activeId === data.id ? 'bg-[#235ddb]' : 'bg-[#3d82f2]'}
            rounded-[3px] w-full h-full border border-black/20
            cursor-pointer min-w-0 pr-[10%]
          `}
                                    >
                                        <div className="min-w-[15px] max-w-[20px] aspect-square">
                                            {data.icon}
                                        </div>

                                        <span className="text-[11px] font-thin overflow-hidden whitespace-nowrap text-ellipsis">
                                            {data.title}
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>


                    <div className='sys-tray bg-[#1393e8] w-[135px] min-w-[135px] h-full border-l border-black/50 '>
                        <SystemTray />
                    </div>
                </div>


            </div >
            {/* turn off modal */}
            {
                turnOffModal && <div data-disableselect="true" className={`h-[100dvh] w-screen overflow-hidden absolute top-0 right-0 transition-all duration-1000 ease-in ${isGrayscale ? "bg-black/30" : "bg-black/0"}  flex justify-center items-center  z-50 `}>
                    <div className=' flex flex-col w-[350px] h-[250px] bg-[#dce5f2] mt-[-50px] ml-[-20px] '>
                        <div className='w-full px-3 h-[18%] bg-[#0036B3] border-b-[3px] border-transparent [border-image:linear-gradient(90deg,#8aa8ff,#dce5f2,#8aa8ff)_1] flex p-1 justify-between items-center' >
                            <Label className="text-[15px] md:text-[17px]   tracking-wide font-semibold leading-none select-none">Turn Off portfolio</Label>
                            <Image src={Logo} alt="" height={100} width={100} className="w-8 select-none filter drop-shadow-[0_0_.5px_black]" />
                        </div>
                        <div className=' bg-gradient-to-r from-[#587FDB] via-[#587FDB]/50 to-[#587FDB] w-full h-[64%] flex items-center justify-around px-5'>

                            <div className='flex flex-col justify-center items-center text-center gap-1'>
                                <Image onClick={logoffBtn} src={"/startMenu/Logout.png"} alt="" height={100} width={100} className="w-10 select-none filter drop-shadow-[0_0_.5px_black] cursor-pointer hover:brightness-110 active:brightness-110" />
                                <Label className="text-[13px] md:text-[14px]  font-mono leading-none select-none">Stand By</Label>
                            </div>
                            <div className='flex flex-col justify-center items-center text-center gap-1'>
                                <Image src={"/startMenu/Power.png"} alt="" height={100} width={100} className="w-10 select-none filter drop-shadow-[0_0_.5px_black] cursor-pointer grayscale-90" />
                                <Label className="text-[13px] md:text-[14px]  font-mono leading-none select-none">Turn Off</Label>
                            </div>
                            <div className='flex flex-col justify-center items-center text-center gap-1'>
                                <Image onClick={restartBtn} src={"/startMenu/Restart.png"} alt="" height={100} width={100} className="w-10 select-none filter drop-shadow-[0_0_.5px_black] cursor-pointer hover:brightness-110 active:brightness-110" />
                                <Label className="text-[13px] md:text-[14px]  font-mono leading-none select-none">Restart</Label>
                            </div>

                        </div>

                        <div className='w-full h-[18%] bg-[#0036B3] border-t-[3px] border-transparent [border-image:linear-gradient(90deg,#8aa8ff,#dce5f2,#8aa8ff)_1] flex justify-end items-center px-3 p-1'  >
                            <button onClick={() => setTurnOffModal(false)} className='bg-white select-none py-[1px] px-4 text-black font-light text-[12px] border  rounded-[2px] cursor-pointer hover:border-black active:border-black'>Cancel</button>
                        </div>

                    </div>
                </div>
            }



            {/* log off modal */}
            {
                logOffModal && <div data-disableselect="true" className={`h-[100dvh] w-screen overflow-hidden absolute top-0 right-0 transition-all duration-1000 ease-in ${isGrayscale ? "bg-black/30" : "bg-black/0"}  flex justify-center items-center  z-50 `}>
                    <div className=' flex flex-col w-[350px] h-[250px] bg-[#dce5f2] mt-[-50px] ml-[-20px] '>
                        <div className='w-full px-3 h-[18%] bg-[#0036B3] border-b-[3px] border-transparent [border-image:linear-gradient(90deg,#8aa8ff,#dce5f2,#8aa8ff)_1] flex p-1 justify-between items-center' >
                            <Label className="text-[15px] md:text-[17px]   tracking-wide font-semibold leading-none select-none">Log Off portfolio</Label>
                            <Image src={Logo} alt="" height={100} width={100} className="w-8 select-none filter drop-shadow-[0_0_.5px_black]" />
                        </div>
                        <div className=' bg-gradient-to-r from-[#587FDB] via-[#587FDB]/50 to-[#587FDB] w-full h-[64%] flex items-center justify-around px-5'>

                            <div className='flex flex-col justify-center items-center text-center gap-1'>
                                <Image src={"/startMenu/Switch User.png"} alt="" height={100} width={100} className="w-10 select-none filter drop-shadow-[0_0_.5px_black] cursor-pointer grayscale-90" />
                                <Label className="text-[13px] md:text-[14px]  font-mono leading-none select-none">Switch User</Label>
                            </div>

                            <div className='flex flex-col justify-center items-center text-center gap-1'>
                                <Image onClick={logoffBtn} src={"/startMenu/Logout.png"} alt="" height={100} width={100} className="w-10 select-none filter drop-shadow-[0_0_.5px_black] cursor-pointer hover:brightness-110 active:brightness-110" />
                                <Label className="text-[13px] md:text-[14px]  font-mono leading-none select-none">Log Off</Label>
                            </div>

                        </div>

                        <div className='w-full h-[18%] bg-[#0036B3] border-t-[3px] border-transparent [border-image:linear-gradient(90deg,#8aa8ff,#dce5f2,#8aa8ff)_1] flex justify-end items-center px-3 p-1'  >
                            <button onClick={() => setLogOffModal(false)} className='bg-white select-none py-[1px] px-4 text-black font-light text-[12px] border  rounded-[2px] cursor-pointer hover:border-black active:border-black'>Cancel</button>
                        </div>

                    </div>
                </div>
            }

            {/* shutdown loading screen */}

            {
                shutdownLoadingScreen &&
                <AnimatePresence>
                    <motion.div
                        key="shutdownloading"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 0.3 } }}
                    >


                        <div data-disableselect="true" className={` flex flex-col items-center transition-all duration-1000 ease-in-out h-[100dvh] md:h-screen w-screen text-white top-0 right-0 absolute`}>
                            <div className='bg-[#0036B3] p-1 w-full h-[23%] md:h-[12%] border-b-[3px] border-white' />
                            <div className='p-1 w-full h-full flex items-center bg-[linear-gradient(to_bottom_right,#8aa8ff,#587FDB)]'>
                                <div className=' p-1 h-full w-[90%] md:w-[70%] flex justify-end items-center'>
                                    <div className='flex flex-col gap-7 justify-end items-end px-5'>
                                        <div className="w-max">
                                            <div className='flex flex-col gap-7 justify-end items-end px-5'>
                                                <div className="w-max flex flex-col gap-4 md:gap-5 justify-center items-center ">
                                                    <div className="pl-8 md:pl-10">
                                                        <div className=" px-1 flex justify-start ">
                                                            <div className="flex items-end gap-1 md:gap-3 leading-none ">
                                                                <Label className="leading-none text-[11px] md:text-[16px] font-geist-sans font-semibold  [text-shadow:.5px_.5px_.5px_black] [-webkit-text-stroke:0.1px_black]">Luigie Panahon</Label>
                                                                <div className="relative mb-[-5px]">
                                                                    <Image src={Logo} alt="" height={100} width={100} className="w-17 md:w-25 filter drop-shadow-[0_0_.5px_black]" />
                                                                    <Label className=" text-[6px] md:text-[8px] absolute bottom-3 right-0 md:right-0 leading-none font-semibold  [text-shadow:.5px_.5px_.5px_black] [-webkit-text-stroke:0.1px_black]">TM</Label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="mt-[-5px] md:mt-[-5px] flex justify-start flex-col">
                                                            <Label className="text-[35px] md:text-[50px] font-semibold  [text-shadow:.5px_.5px_.5px_black] [-webkit-text-stroke:0.1px_black] leading-none">Portfolio <sup className="text-[#D96C29] ml-[-7px] md:ml-[0px] text-[26px] md:text-[30px]">xp</sup></Label>
                                                            <Label className="text-[15px] md:text-[20px] font-semibold  [text-shadow:.5px_.5px_.5px_black] [-webkit-text-stroke:0.1px_black] font-geist-sans  leading-none px-3">Web Developer</Label>
                                                        </div>
                                                    </div>
                                                    <Label className='text-[16px] hidden md:block font-mono font-semibold  [text-shadow:.5px_.5px_.5px_black] [-webkit-text-stroke:0.1px_black]'>Portfolio is shutting down... </Label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className=' p-1 h-full w-[20%] flex justify-start items-center'>
                                </div>
                            </div>
                            <div className='bg-[#0036B3] p-3 px-10 w-full h-[26%] md:h-[15%] border-t-[3px] border-white' />
                        </div>
                    </motion.div>
                </AnimatePresence>
            }

        </div >

    )
}

export default HomeScreen
