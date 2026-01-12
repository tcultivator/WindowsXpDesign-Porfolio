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


// projects Descriptions
import { OverClockedXClientDescription } from '@/utils/projectsDescriptions/OverClockedX-Client-Description';
import { OverClockedXAdminDescription } from '@/utils/projectsDescriptions/OverClockedX-Admin-Description';
import { InstagangDescription } from '@/utils/projectsDescriptions/Instagang-Description';
import { PersonalPortfolioDescription } from '@/utils/projectsDescriptions/PersonalPortfolio-Description';
import { WindowsXpDesignDescription } from '@/utils/projectsDescriptions/WindowsXpDesign-Portfolio-Description';
import { JobApplicationManagerDescription } from '@/utils/projectsDescriptions/Job-Application-Manager-Description';
import { BankAppDescription } from '@/utils/projectsDescriptions/BankApp-Description';
import { Mp3PlayerV2Description } from '@/utils/projectsDescriptions/Mp3PlayerV2-Description';
import { Mp3PlayerV1Description } from '@/utils/projectsDescriptions/Mp3PlayerV1-Description';
import { CalculatorDescription } from '@/utils/projectsDescriptions/Calculator-Description';

export const projectsSelection = [
    {
        image: '/myWorks/overclockedx-client.png',
        video: overclockedXClientPreview,
        label: 'OverClockedX-Client',
        link: 'https://overclockedx-client.vercel.app/',
        description: OverClockedXClientDescription,
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
        description: OverClockedXAdminDescription,
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
        description: InstagangDescription,
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
        description: PersonalPortfolioDescription,
        views: '2K',
        time: '1 month ago',
        duration: '00:55',
        filterData: ['All', 'JavaScript', 'CSS', 'Html'],
        featuredProjects: true
    },
    {
        image: '/myWorks/windowsxp/windowsxp.png',
        video: windowsXpPortfolioPreview,
        label: 'Portfolio Inspired WindowsXp',
        link: 'https://lpxp.vercel.app/',
        description: WindowsXpDesignDescription,
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
        description: JobApplicationManagerDescription,
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
        description: BankAppDescription,
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
        description: Mp3PlayerV2Description,
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
        description: Mp3PlayerV1Description,
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
        description: CalculatorDescription,
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
        <div className=" w-full box-border h-full text-white p-1">
            <div className="sticky top-0 z-30 w-full  mb-4">
                <div className="flex w-full overflow-x-auto gap-1 @xl:gap-3 @xl:px-2 py-2 whitespace-nowrap no-scrollbar">
                    {['All', 'React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind', 'Node.js', 'CSS', 'Html', 'MySQL'].map((pill, i) => (
                        <button
                            key={i}
                            onClick={() => setSelectedCategory(pill)}
                            className={`cursor-pointer flex-shrink-0 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${pill === selectedCategory
                                ? 'bg-gray-100 text-black'
                                : 'bg-[#262626] text-white hover:bg-[#333333] '
                                }`}
                        >
                            {pill}
                        </button>
                    ))}
                </div>
            </div>
            <div className="grid gap-4 @xl:gap-0  grid-cols-1 @xl:grid-cols-2 @2xl:grid-cols-2 @4xl:grid-cols-4 ">
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

                    }} key={index} className={`group cursor-pointer flex active:bg-[#262626] hover:bg-[#262626] flex-col gap-2 @xl:p-2 rounded @xl:ounded-[16px] ${featuredProjectsOn && `${data.featuredProjects ? 'opacity-100' : 'opacity-40'}`}`}>

                        <div className={`relative w-full aspect-video rounded-[2px] @xl:rounded-[10px] overflow-hidden border border-black/10  `}>
                            <Image
                                src={data.image}
                                alt={data.label}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out"
                            />
                            {/* Duration Badge */}
                            <div className="absolute bottom-1.5 right-1.5 bg-black/80  text-white text-xs font-medium px-1.5 py-0.5 rounded-[4px]">
                                {data.duration}
                            </div>
                        </div>


                        <div className="flex items-start gap-1">
                            <div className="flex-shrink-0 mt-0.5">
                                <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center overflow-hidden border border-black/5">
                                    <FaGithub className='text-gray-100 text-[20px]' />
                                </div>
                            </div>

                            {/* Text Content */}
                            <div className="flex flex-col flex-grow min-w-0">
                                {/* Title */}
                                <h3 className="text-gray-100 text-base font-medium font-sans line-clamp-2 leading-tight ">
                                    {data.label}
                                </h3>

                                {/* Channel Name & Metadata */}
                                <div className="text-[#a1a1a1] text-xs flex flex-col">
                                    <div className="flex items-center transition-colors">
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
                            <div className="opacity-100 transition-opacity flex-shrink-0 pt-1">
                                <BsThreeDotsVertical className="text-gray-100 text-lg" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>


        </div>
    )
}

export default home
