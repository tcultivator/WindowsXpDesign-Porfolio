
import React from 'react'
import Image from 'next/image'
import { useAddressbarStore } from '@/stores/addressBarStore';
import { FaGithub } from "react-icons/fa";
export const projectsSelection = [
    {

        image: '/myWorks/overclockedx-client.png',
        label: 'OverClockedX-Client',
        link: 'https://overclockedx-client.vercel.app/',
        description: 'OverclockedX is an e-commerce website where you can purchase computers, laptops, computer parts, peripherals, and much more. It features an AI assistant that helps you check compatibility and provides relevan information to ensure you make informed decisions. With its responsive design and clean, user-friendly interface, OverClockedX offers an easy and seamless browseing experience across all device'

    },
    {

        image: '/myWorks/overclockedx-admin.png',
        label: 'OverClockedX-Admin',
        link: 'https://overclockedx-admin.vercel.app/',
        description: 'OverClockedX Admin is the official administrative dashboard for the OverClockedX e-commerce platform. It allows administrators to efficiently manage the client-facing store by handling inventory, orders, promotions, analytics, and more through a modern, responsive interface.'
    },
    {

        image: '/myWorks/instagram-clone.webp',
        label: 'InstaGang',
        link: 'https://tcultivator.github.io/instagramClone-DevelopmentPhaseV2/',
        description: `
InstaGang is a social media web application inspired by Instagram, designed to allow users to share photos, videos, and connect with others through a clean and intuitive interface. It features a responsive design, enabling seamless browsing across desktop and mobile devices. Users can create accounts, post content, like and comment on posts, follow other users, and explore trending media.
The platform also supports real-time updates, notifications, and a personalized feed to enhance user engagement. With a focus on simplicity and user experience, InstaClone provides a modern, interactive, and social way to share moments online.`
    },
    {

        image: '/myWorks/portfolio-v1.webp',
        label: 'Portfolio v1',
        link: 'https://tcultivator.github.io/myPortfolio/',
        description: `Custom Design Portfolio
This portfolio showcases a fully custom design created from scratch to highlight your projects, skills, and personal brand. It features a modern, clean, and responsive layout that emphasizes usability and aesthetics. Every section is tailored to your style, providing an engaging experience for visitors while effectively presenting your work and achievements.`
    },
    {

        image: '/myWorks/portfolio-v1.webp',
        label: 'Portfolio Inspired WindowsXp',
        link: 'https://tcultivator.github.io/myPortfolio/',
        description: `Windows XP-Inspired Portfolio
This portfolio is a creative homage to the classic Windows XP interface, blending nostalgia with modern web functionality. It features interactive elements, retro-inspired visuals, and a playful interface while maintaining responsiveness and usability. The design uniquely showcases your projects and skills, offering visitors a fun and memorable browsing experience.
`
    }]
const home = () => {
    const setAddressbarHistory = useAddressbarStore((state) => state.setAddressbarHistory)
    const setAddressBarCurrent = useAddressbarStore((state) => state.setAddressBarCurrent)
    const addressBarCurrent = useAddressbarStore((state) => state.addressBarCurrent)
    return (
        <div className=" w-full box-border h-full text-white p-5">
            <div className="grid gap-4 grid-cols-1 @2xl:grid-cols-2 @4xl:grid-cols-3 ">
                {projectsSelection.map((data, index) => (
                    <div onClick={() => {
                        setAddressbarHistory(addressBarCurrent)
                        setAddressBarCurrent({ index: index, label: `/MyWorks/${data.label}` })
                    }} key={index} className="group cursor-pointer flex flex-col gap-2 py-5">

                        <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-neutral-800">
                            <Image
                                src={data.image}
                                alt=""
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>


                        <div className="flex items-start gap-1">
                            <FaGithub className='text-white text-[30px]' />
                            <div>
                                <p className="text-sm font-medium line-clamp-2">
                                    {data.label}
                                </p>
                                <p className="text-xs text-white/60">
                                    {"tcultivator"} • {"2025"}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>


        </div>
    )
}

export default home
