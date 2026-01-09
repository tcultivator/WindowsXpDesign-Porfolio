"use client"
import React from 'react'
import Image from 'next/image'
import { useAddressbarStore } from '@/stores/addressBarStore';
import { FaGithub } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";


import { useState } from 'react';


// videos
import mp3PlayerV1Preview from '@/videos/mp3PlayerV1Preview.mp4';
import overclockedXClientPreview from '@/videos/OverClockedX-Client-Final.mp4';
import overclockedXAdminPreview from '@/videos/overclockedx-admin.mp4';
import mp3PlayerV2Preview from '@/videos/mp3PlayerPreview.mp4';
import calculatorPreview from '@/videos/calculatorPreview.mp4';
import jobApplicationManagerPreview from '@/videos/JobApplicationPreview.mp4';
import portfolioV1Preview from '@/videos/portfolioV1Preview.mp4';
import instagangPreview from '@/videos/instagangPreview.mp4';
import bankAppPreview from '@/videos/bankAppPreview.mp4';
import windowsXpPortfolioPreview from '@/videos/windowsXp-portfolio.mp4';
export const projectsSelection = [
    {
        image: '/myWorks/overclockedx-client.png',
        video: overclockedXClientPreview,
        label: 'OverClockedX-Client',
        link: 'https://overclockedx-client.vercel.app/',
        description: 'OverclockedX is an e-commerce website where you can purchase computers, laptops, computer parts, peripherals, and much more. It features an AI assistant that helps you check compatibility and provides relevan information to ensure you make informed decisions. With its responsive design and clean, user-friendly interface, OverClockedX offers an easy and seamless browseing experience across all device',
        views: '12K',
        time: '2 days ago',
        duration: '02:24',
        filterData: ['All', 'React', 'Next.js', 'TypeScript', 'Tailwind', 'Node.js', 'CSS', 'Html', 'MySQL'],
        featuredProjects: true
    },
    {
        image: '/myWorks/overclockedx-admin.png',
        video: overclockedXAdminPreview,
        label: 'OverClockedX-Admin',
        link: 'https://overclockedx-admin.vercel.app/',
        description: 'OverClockedX Admin is the official administrative dashboard for the OverClockedX e-commerce platform. It allows administrators to efficiently manage the client-facing store by handling inventory, orders, promotions, analytics, and more through a modern, responsive interface.',
        views: '8.5K',
        time: '1 week ago',
        duration: '02:51',
        filterData: ['All', 'React', 'Next.js', 'TypeScript', 'Tailwind', 'Node.js', 'CSS', 'Html', 'MySQL'],
        featuredProjects: true
    },
    {
        image: '/myWorks/instagramImage.png',
        video: instagangPreview,
        label: 'InstaGang',
        link: 'https://tcultivator.github.io/instagang/',
        description: `
InstaGang is a social media web application inspired by Instagram, designed to allow users to share photos, videos, and connect with others through a clean and intuitive interface. It features a responsive design, enabling seamless browsing across desktop and mobile devices. Users can create accounts, post content, like and comment on posts, follow other users, and explore trending media.
The platform also supports real-time updates, notifications, and a personalized feed to enhance user engagement. With a focus on simplicity and user experience, InstaClone provides a modern, interactive, and social way to share moments online.`,
        views: '102K',
        time: '3 weeks ago',
        duration: '02:42',
        filterData: ['All', 'JavaScript', 'Node.js', 'CSS', 'Html', 'MySQL'],
        featuredProjects: true
    },
    {
        image: '/myWorks/portfoliov1.png',
        video: portfolioV1Preview,
        label: 'Portfolio v1',
        link: 'https://tcultivator.github.io/myPortfolio/',
        description: `Custom Design Portfolio
This portfolio showcases a fully custom design created from scratch to highlight my projects, skills, and personal brand. It features a modern, clean, and responsive layout that emphasizes usability and aesthetics. The design incorporates unique visual elements, smooth animations, and interactive features to engage visitors and provide an immersive browsing experience. Each section is thoughtfully crafted to effectively communicate my expertise and creativity as a developer.`,
        views: '2K',
        time: '1 month ago',
        duration: '00:55',
        filterData: ['All', 'JavaScript', 'CSS', 'Html'],
        featuredProjects: true
    },
    {
        image: '/myWorks/windowsxp.png',
        video: windowsXpPortfolioPreview,
        label: 'Portfolio Inspired WindowsXp',
        link: 'https://lpxp.vercel.app/',
        description: `Windows XP-Inspired Portfolio
This portfolio is a creative homage to the classic Windows XP interface, blending nostalgia with modern web functionality. It features interactive elements, retro-inspired visuals, and a playful interface while maintaining responsiveness and usability. The design uniquely showcases my projects and skills, offering visitors a fun and memorable browsing experience.
`,
        views: '1.5M',
        time: '2 months ago',
        duration: '04:07',
        filterData: ['All', 'React', 'Next.js', 'TypeScript', 'Tailwind', 'Node.js', 'CSS', 'Html'],
        featuredProjects: true
    },
    {
        image: '/myWorks/jobmanager.png',
        video: jobApplicationManagerPreview,
        label: 'Job Manager',
        link: 'https://tcultivator.github.io/Job-Applying-Manager/',
        description: `A simple tool that helps you organize and track your job applications. Easily monitor the companies you've applied to, update the status of each application, and stay on top of your job hunt.
`,
        views: '500',
        time: '3 months ago',
        duration: '01:05',
        filterData: ['All', 'JavaScript', 'Node.js', 'CSS', 'Html', 'MySQL'],
        featuredProjects: false
    },
    {
        image: '/myWorks/bankApp.png',
        video: bankAppPreview,
        label: 'Bank App',
        link: 'https://tcultivator.github.io/LoginSystem-with-httpOnly-Cookie-and-JWT/index.html',
        description: `A web-based banking app that lets users create accounts, manage balances, demo transaction history, and perform basic banking operations
`,
        views: '4.2K',
        time: '4 months ago',
        duration: '01:25',
        filterData: ['All', 'JavaScript', 'Node.js', 'CSS', 'Html', 'MySQL'],
        featuredProjects: false
    },
    {
        image: '/myWorks/mp3Player.png',
        video: mp3PlayerV2Preview,
        label: 'Mp3 Player v.2',
        link: 'https://tcultivator.github.io/Improve-Mp3Player/',
        description: `A sleek and responsive music player that lets users play, pause, skip tracks, and manage playlists. Built for smooth audio playback and a clean user interface.
`,
        views: '1K',
        time: '5 months ago',
        duration: '01:00',
        filterData: ['All', 'JavaScript', 'Node.js', 'CSS', 'Html', 'MySQL'],
        featuredProjects: false
    },
    {
        image: '/myWorks/mp3Playerv1.png',
        video: mp3PlayerV1Preview,
        label: 'Mp3 Player v.1',
        link: 'https://tcultivator.github.io/MP3PLAYER/',
        description: `A basic MP3 player that allows users to play, pause, and skip audio tracks. Built with a focus on simplicity and smooth playback.
`,
        views: '300',
        time: '6 months ago',
        duration: '00:34',
        filterData: ['All', 'JavaScript', 'CSS', 'Html'],
        featuredProjects: false
    },
    {
        image: '/myWorks/calculator.png',
        video: calculatorPreview,
        label: 'Calculator',
        link: 'https://tcultivator.github.io/Calculator/',
        description: `A simple and user-friendly calculator app that handles basic arithmetic operations like addition, subtraction, multiplication, and division. Designed for quick calculations with a clean interface and responsive design.
`,
        views: '8K',
        time: '1 year ago',
        duration: '00:31',
        filterData: ['All', 'JavaScript', 'CSS', 'Html'],
        featuredProjects: false
    }
]
const home = () => {
    const setAddressbarHistory = useAddressbarStore((state) => state.setAddressbarHistory)
    const setAddressBarCurrent = useAddressbarStore((state) => state.setAddressBarCurrent)
    const addressBarCurrent = useAddressbarStore((state) => state.addressBarCurrent)

    const [selectedCategory, setSelectedCategory] = useState('All');

    const filteredProjects = projectsSelection.filter((project) =>
        project.filterData.includes(selectedCategory) || selectedCategory === 'All'
    );
    const featuredProjectsOn = useAddressbarStore((state) => state.featuredProjectsOn)


    return (
        <div className=" w-full box-border h-full text-black p-1">
            <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-sm border-b border-gray-100">
                <div className="flex-1 gap-3 overflow-x-auto px-4 py-2 no-scrollbar w-full">
                    {['All', 'React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind', 'Node.js', 'CSS', 'Html', 'MySQL'].map((pill, i) => (
                        <button
                            key={i}
                            onClick={() => setSelectedCategory(pill)}
                            className={`cursor-pointer flex-shrink-0 px-3 py-1.5 mr-2 mt-1 rounded-lg text-sm font-medium transition-colors ${pill === selectedCategory ? 'bg-black text-white' : 'bg-gray-100 text-black hover:bg-gray-200'}`}
                        >
                            {pill}
                        </button>
                    ))}
                </div>
            </div>
            <div className="grid gap-2 grid-cols-1 @xl:grid-cols-2 @2xl:grid-cols-2 @4xl:grid-cols-4 ">
                {filteredProjects.map((data, index) => (
                    <div onClick={() => {
                        if (featuredProjectsOn) {
                            if (data.featuredProjects) {
                                setAddressbarHistory(addressBarCurrent)
                                setAddressBarCurrent({ index: index, label: `/MyWorks/${data.label}` })
                            }

                        } else {
                            setAddressbarHistory(addressBarCurrent)
                            setAddressBarCurrent({ index: index, label: `/MyWorks/${data.label}` })
                        }

                    }} key={index} className={`group cursor-pointer flex hover:bg-black/10 flex-col gap-2 p-1 rounded-[16px] ${featuredProjectsOn && `${data.featuredProjects ? 'opacity-100' : 'opacity-40'}`}`}>

                        <div className={`relative w-full aspect-video rounded-[10px] overflow-hidden border border-black/10  `}>
                            <Image
                                src={data.image}
                                alt={data.label}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out"
                            />
                            {/* Duration Badge */}
                            <div className="absolute bottom-1.5 right-1.5 bg-black/80 text-white text-xs font-medium px-1.5 py-0.5 rounded-[4px]">
                                {data.duration}
                            </div>
                        </div>


                        <div className="flex items-start gap-1">
                            <div className="flex-shrink-0 mt-0.5">
                                <div className="w-9 h-9 rounded-full bg-black/5 flex items-center justify-center overflow-hidden border border-black/5">
                                    <FaGithub className='text-black text-[20px]' />
                                </div>
                            </div>

                            {/* Text Content */}
                            <div className="flex flex-col flex-grow min-w-0">
                                {/* Title */}
                                <h3 className="text-[#0f0f0f] text-base font-medium font-sans line-clamp-2 leading-tight mb-1 group-hover:text-black">
                                    {data.label}
                                </h3>

                                {/* Channel Name & Metadata */}
                                <div className="text-[#606060] text-sm flex flex-col">
                                    <div className="flex items-center hover:text-[#0f0f0f] transition-colors">
                                        <span className="truncate">tcultivator</span>
                                        {/* Verified Check */}
                                        <svg className="w-3 h-3 ml-1 fill-current opacity-60 flex-shrink-0" viewBox="0 0 24 24"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zM9.8 17.3l-4.2-4.1L7 11.8l2.8 2.7L17 7.4l1.4 1.4-8.6 8.5z" /></svg>
                                    </div>
                                    <div className="flex items-center flex-wrap">
                                        <span>{data.views} views</span>
                                        <span className="mx-1">•</span>
                                        <span>{data.time}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Options Menu Icon */}
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 pt-1">
                                <BsThreeDotsVertical className="text-[#0f0f0f] text-lg" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>


        </div>
    )
}

export default home
