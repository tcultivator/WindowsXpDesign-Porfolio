"use client"
import React from 'react'
import { Label } from '@/components/ui/label'
import Image from 'next/image'
import Link from 'next/link'
// icons
import { RiArrowUpDoubleFill } from "react-icons/ri";
import { RiArrowDownDoubleFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";

import { RiNextjsFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { BiLogoJavascript } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { TbBrandMysql } from "react-icons/tb";
import { SiJest } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { PiFigmaLogo } from "react-icons/pi";
import { SiPostman } from "react-icons/si";

import { useApplicationStore } from '@/stores/application';


import { useState } from 'react';
type ToggleSections = {
    skills: boolean;
    frontend: boolean;
    stateManagement: boolean;
    backend: boolean;
    testing: boolean;
    toolsAndWorkflows: boolean;
    social: boolean;
}

const AboutMe = () => {

    const [toggles, setToggles] = useState<ToggleSections>({
        skills: true,
        frontend: true,
        stateManagement: true,
        backend: true,
        testing: true,
        toolsAndWorkflows: true,
        social: true,
    })


    const toggleSection = (key: keyof ToggleSections) => {
        setToggles((prev) => ({
            ...prev,
            [key]: !prev[key],
        }))
    }


    const skills = [
        { name: 'Web Development', icon: '/aboutmeIcons/webdev.ico' },
        { name: 'Problem Solving', icon: '/aboutmeIcons/problemSolving.ico' },
        { name: 'Attention to Detail', icon: '/aboutmeIcons/attentiontodetail.ico' },
        { name: 'UI/UX Design', icon: '/aboutmeIcons/uiux.ico' },
        { name: 'Creative Thinking', icon: '/aboutmeIcons/creative.ico' },
        { name: 'Active listener', icon: '/aboutmeIcons/activelistener.ico' }
    ]

    const Frontend = [
        { name: 'Next.js', icon: <RiNextjsFill /> },
        { name: 'React', icon: <FaReact /> },
        { name: 'TypeScript', icon: <BiLogoTypescript className='text-blue-500' /> },
        { name: 'JavaScript', icon: <BiLogoJavascript className='text-yellow-400' /> },
        { name: 'Tailwind', icon: <RiTailwindCssFill className='text-blue-400' /> },
        { name: 'HTML', icon: <FaHtml5 className='text-orange-500' /> },
        { name: 'CSS', icon: <IoLogoCss3 className='text-blue-700' /> },
    ]

    const StateManagement = [
        { name: 'Zustand', icon: <RiNextjsFill /> },
    ]

    const Backend = [
        { name: 'Node.js', icon: <FaNodeJs className='text-green-500' /> },
        { name: 'Express.js', icon: <SiExpress /> },
        { name: 'MySQL', icon: <TbBrandMysql className='text-blue-500' /> },
    ]

    const Testing = [
        { name: 'Jest', icon: <SiJest className='text-orange-600' /> },
    ]

    const ToolsAndWorkflows = [
        { name: 'Git', icon: <FaGitAlt className='text-orange-500' /> },
        { name: 'GitHub', icon: <FaGithub /> },
        { name: 'Figma', icon: <PiFigmaLogo /> },
        { name: 'Postman', icon: <SiPostman className='text-orange-500' /> },

    ]

    const isMobileDevice = useApplicationStore((state) => state.isMobileDevice)

    return (
        <div className="@container flex h-full text-black bg-gradient-to-t from-[#6374d6] to-[#0B51E8] w-full relative ">

            <div className={` ${isMobileDevice ? 'max-w-[100px] min-w-[100px]' : 'max-w-[180px] min-w-[180px]'}   bg-gradient-to-t from-[#6374d6] to-[#79a3e8] gap-1 p-1 flex-1 overflow-y-auto no-scrollbar`}>
                <div className='flex flex-col gap-1'>
                    <div className='bg-white/50 rounded-t  '>
                        <div className='flex items-center justify-between p-1 pl-2 rounded-t bg-gradient-to-r from-white to-[#79a3e8]'>
                            <Label className='text-[11px] text-[#0f4fd6] font-bold overflow-ellipsis min-w-0 inline-block overflow-hidden whitespace-nowrap'>Skills</Label>
                            <button onClick={() => toggleSection('skills')}>
                                {toggles.skills ? <RiArrowUpDoubleFill className='active:bg-white/80 hover:bg-white/80 bg-white rounded-[50%] cursor-pointer hover:brightness-110  shadow-sm shadow-black/50 border border-black/30' /> :
                                    <RiArrowDownDoubleFill className='active:bg-white/80 hover:bg-white/80 bg-white rounded-[50%] cursor-pointer hover:brightness-110  shadow-sm shadow-black/50 border border-black/30' />
                                }
                            </button>

                        </div>
                        <div className={`${toggles.skills ? 'h-[130px] p-1' : 'h-[0px]'} min-h-0 flex flex-col  gap-1  px-3 overflow-hidden transition-all transition-duration-300`}>
                            {
                                skills.map((data, i) => (
                                    <div key={i} className='flex items-center gap-1'>
                                        <Image src={data.icon} alt='' width={500} height={500} className='w-[16px] select-none ' draggable={false} />
                                        <Label className='text-[10px] font-medium text-[#0f4fd6] hover:underline select-none cursor-pointer overflow-ellipsis
                            min-w-0 inline-block overflow-hidden whitespace-nowrap' draggable={false} >{data.name}</Label>
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                    <div className='bg-white/50 rounded-t '>
                        <div className='flex items-center justify-between p-1 pl-2 rounded-t bg-gradient-to-r from-white to-[#79a3e8]'>
                            <Label className='text-[11px] text-[#0f4fd6] font-bold overflow-ellipsis min-w-0 inline-block overflow-hidden whitespace-nowrap'>FrontEnd</Label>
                            <button onClick={() => toggleSection('frontend')}>
                                {toggles.frontend ? <RiArrowUpDoubleFill className='active:bg-white/80 hover:bg-white/80 bg-white rounded-[50%] cursor-pointer hover:brightness-110  shadow-sm shadow-black/50 border border-black/30' /> :
                                    <RiArrowDownDoubleFill className='active:bg-white/80 hover:bg-white/80 bg-white rounded-[50%] cursor-pointer hover:brightness-110  shadow-sm shadow-black/50 border border-black/30' />
                                }
                            </button>
                        </div>
                        <div className={`${toggles.frontend ? 'h-[150px] p-1' : 'h-[0px]'} min-h-0 flex flex-col  gap-1  px-3 overflow-hidden transition-all transition-duration-300`}>
                            {
                                Frontend.map((data, i) => (
                                    <div key={i} className="flex items-center gap-1">
                                        {data.icon}
                                        <Label className="text-[10px] font-medium text-[#0f4fd6] hover:underline select-none cursor-pointer overflow-ellipsis
                            min-w-0 inline-block overflow-hidden whitespace-nowrap" draggable={false}>
                                            {data.name}
                                        </Label>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className='bg-white/50 rounded-t '>
                        <div className='flex items-center justify-between p-1 pl-2 rounded-t bg-gradient-to-r from-white to-[#79a3e8]'>
                            <Label className='text-[11px] text-[#0f4fd6] font-bold overflow-ellipsis min-w-0 inline-block overflow-hidden whitespace-nowrap'>State Management</Label>
                            <button onClick={() => toggleSection('stateManagement')}>
                                {toggles.stateManagement ? <RiArrowUpDoubleFill className='active:bg-white/80 hover:bg-white/80 bg-white rounded-[50%] cursor-pointer hover:brightness-110  shadow-sm shadow-black/50 border border-black/30' /> :
                                    <RiArrowDownDoubleFill className='active:bg-white/80 hover:bg-white/80 bg-white rounded-[50%] cursor-pointer hover:brightness-110  shadow-sm shadow-black/50 border border-black/30' />
                                }
                            </button>
                        </div>
                        <div className={`${toggles.stateManagement ? 'h-[30px] p-1' : 'h-[0px]'} min-h-0 flex flex-col  gap-1  px-3 overflow-hidden transition-all transition-duration-300`}>
                            {
                                StateManagement.map((data, i) => (
                                    <div key={i} className="flex items-center gap-1">
                                        {data.icon}
                                        <Label className="text-[10px] font-medium text-[#0f4fd6] hover:underline select-none cursor-pointer overflow-ellipsis min-w-0 inline-block overflow-hidden whitespace-nowrap" draggable={false}>
                                            {data.name}
                                        </Label>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className='bg-white/50 rounded-t '>
                        <div className='flex items-center justify-between p-1 pl-2 rounded-t bg-gradient-to-r from-white to-[#79a3e8]'>
                            <Label className='text-[11px] text-[#0f4fd6] font-bold overflow-ellipsis min-w-0 inline-block overflow-hidden whitespace-nowrap'>BackEnd</Label>
                            <button onClick={() => toggleSection('backend')}>
                                {toggles.backend ? <RiArrowUpDoubleFill className='active:bg-white/80 hover:bg-white/80 bg-white rounded-[50%] cursor-pointer hover:brightness-110  shadow-sm shadow-black/50 border border-black/30' /> :
                                    <RiArrowDownDoubleFill className='active:bg-white/80 hover:bg-white/80 bg-white rounded-[50%] cursor-pointer hover:brightness-110  shadow-sm shadow-black/50 border border-black/30' />
                                }
                            </button>
                        </div>
                        <div className={`${toggles.backend ? 'h-[70px] p-1' : 'h-[0px]'} min-h-0 flex flex-col  gap-1  px-3 overflow-hidden transition-all transition-duration-300`}>
                            {
                                Backend.map((data, i) => (
                                    <div key={i} className="flex items-center gap-1">
                                        {data.icon}
                                        <Label className="text-[10px] font-medium text-[#0f4fd6] hover:underline select-none cursor-pointer overflow-ellipsis min-w-0 inline-block overflow-hidden whitespace-nowrap" draggable={false}>
                                            {data.name}
                                        </Label>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className='bg-white/50 rounded-t '>
                        <div className='flex items-center justify-between p-1 pl-2 rounded-t bg-gradient-to-r from-white to-[#79a3e8]'>
                            <Label className='text-[11px] text-[#0f4fd6] font-bold overflow-ellipsis min-w-0 inline-block overflow-hidden whitespace-nowrap'>Testing</Label>
                            <button onClick={() => toggleSection('testing')}>
                                {toggles.testing ? <RiArrowUpDoubleFill className='active:bg-white/80 hover:bg-white/80 bg-white rounded-[50%] cursor-pointer hover:brightness-110  shadow-sm shadow-black/50 border border-black/30' /> :
                                    <RiArrowDownDoubleFill className='active:bg-white/80 hover:bg-white/80 bg-white rounded-[50%] cursor-pointer hover:brightness-110  shadow-sm shadow-black/50 border border-black/30' />
                                }
                            </button>
                        </div>
                        <div className={`${toggles.testing ? 'h-[30px] p-1' : 'h-[0px]'} min-h-0 flex flex-col  gap-1  px-3 overflow-hidden transition-all transition-duration-300`}>
                            {
                                Testing.map((data, i) => (
                                    <div key={i} className="flex items-center gap-1">
                                        {data.icon}
                                        <Label className="text-[10px] font-medium text-[#0f4fd6] hover:underline select-none cursor-pointer overflow-ellipsis min-w-0 inline-block overflow-hidden whitespace-nowrap" draggable={false}>
                                            {data.name}
                                        </Label>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className='bg-white/50 rounded-t '>
                        <div className='flex items-center justify-between p-1 pl-2 rounded-t bg-gradient-to-r from-white to-[#79a3e8]'>
                            <Label className='text-[11px] text-[#0f4fd6] font-bold overflow-ellipsis min-w-0 inline-block overflow-hidden whitespace-nowrap'>Tools & Workflows</Label>
                            <button onClick={() => toggleSection('toolsAndWorkflows')}>
                                {toggles.toolsAndWorkflows ? <RiArrowUpDoubleFill className='active:bg-white/80 hover:bg-white/80 bg-white rounded-[50%] cursor-pointer hover:brightness-110  shadow-sm shadow-black/50 border border-black/30' /> :
                                    <RiArrowDownDoubleFill className='active:bg-white/80 hover:bg-white/80 bg-white rounded-[50%] cursor-pointer hover:brightness-110  shadow-sm shadow-black/50 border border-black/30' />
                                }
                            </button>
                        </div>
                        <div className={`${toggles.toolsAndWorkflows ? 'h-[90px] p-1' : 'h-[0px]'} min-h-0 flex flex-col  gap-1  px-3 overflow-hidden transition-all transition-duration-300`}>
                            {
                                ToolsAndWorkflows.map((data, i) => (
                                    <div key={i} className="flex items-center gap-1">
                                        {data.icon}
                                        <Label className="text-[10px] font-medium text-[#0f4fd6] hover:underline select-none cursor-pointer overflow-ellipsis min-w-0 inline-block overflow-hidden whitespace-nowrap" draggable={false}>
                                            {data.name}
                                        </Label>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className='bg-white/50 rounded-t '>
                        <div className='flex items-center justify-between p-1 pl-2 rounded-t bg-gradient-to-r from-white to-[#79a3e8]'>
                            <Label className='text-[11px] text-[#0f4fd6] font-bold overflow-ellipsis min-w-0 inline-block overflow-hidden whitespace-nowrap'>Social Links</Label>
                            <button onClick={() => toggleSection('social')}>
                                {toggles.social ? <RiArrowUpDoubleFill className='active:bg-white/80 hover:bg-white/80 bg-white rounded-[50%] cursor-pointer hover:brightness-110  shadow-sm shadow-black/50 border border-black/30' /> :
                                    <RiArrowDownDoubleFill className='active:bg-white/80 hover:bg-white/80 bg-white rounded-[50%] cursor-pointer hover:brightness-110  shadow-sm shadow-black/50 border border-black/30' />
                                }
                            </button>
                        </div>
                        <div className={`${toggles.social ? 'h-[85px] p-1' : 'h-[0px]'} min-h-0 flex flex-col  gap-1  px-3 overflow-hidden transition-all transition-duration-300`}>
                            <div className='flex items-center gap-1'>
                                <FaGithub className='text-black text-[16px]' />
                                <Link href={"https://github.com/tcultivator"} target='_blank' className='text-[10px] font-medium text-[#0f4fd6] hover:underline select-none cursor-pointer' draggable={false} >Github</Link>
                            </div>
                            <div className='flex items-center gap-1'>
                                <GrLinkedin className='text-[#3397e8] text-[16px]' />
                                <Link href={"https://www.linkedin.com/in/luigie-panahon-541733367/"} target='_blank' className='text-[10px] font-medium text-[#0f4fd6] hover:underline select-none cursor-pointer' draggable={false} >Linkedin</Link>
                            </div>
                            <div className='flex items-center gap-1'>
                                <Image src="/Instagram_icon.png" alt='' width={500} height={500} className='w-[16px] select-none ' draggable={false} />
                                <Link href={"https://www.instagram.com/panahonluigie/"} target='_blank' className='text-[10px] font-medium text-[#0f4fd6] hover:underline select-none cursor-pointer' draggable={false}>Instagram</Link>
                            </div>
                        </div>
                    </div>
                </div>






            </div>
            <div className={`@container w-full flex-1 min-h-0 overflow-auto gap-1  ${isMobileDevice ? 'p-1' : 'p-5'}`}>
                <div className='p-5  w-full h-full max-w-[600px] text-white flex flex-col gap-10'>
                    <div className='w-full flex items-start gap-2'>
                        <Label className='text-[15px] font-mono font-normal [text-shadow:1px_1px_1px_black] [-webkit-text-stroke:0.1px_black]'>Hi! I&apos;m Luigie Panahon, a Frontend Web Developer who is passionate, dedicated, and always eager to learn.
                            I believe actions speak louder than words, and I will prove it through my work.
                        </Label>
                    </div>

                    <div className='w-full flex items-start gap-2'>

                        <Label className='text-[15px] font-mono font-normal [text-shadow:1px_1px_1px_black] [-webkit-text-stroke:0.1px_black]'>I didn&apos;t plan to become a developer at first and struggled with self-doubt.
                            Everything changed during my final year in college when I stepped up as a team leader and programmer.
                        </Label>
                    </div>

                    <div className='w-full flex items-start gap-2'>
                        <Label className='text-[15px] font-mono font-normal [text-shadow:1px_1px_1px_black] [-webkit-text-stroke:0.1px_black]'>What drives me as a developer is the process of building and coding. Through each problem I solve, I realize there&apos;s always more to learn, and that challenge is what keeps me passionate about programming.
                        </Label>
                    </div>

                </div>


            </div>


        </div>
    )
}

export default AboutMe
