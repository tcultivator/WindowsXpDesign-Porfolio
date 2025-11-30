import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
//zustand store
import { useApplicationStore } from '@/stores/application';

// icons
import { FaFolderOpen } from "react-icons/fa6";
import { RiArrowUpDoubleFill } from "react-icons/ri";
import { FaSquareJs } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
//shadcn components
import { Label } from '@/components/ui/label';

// applications components
import Projects from '../applications/projects';

//resuable components
import { openInternetExplorer, openQuickStart, openMyWorks, openEmail } from '@/utils/OpenApplication'

const QuickStartItem = ({ icon, label, onClick }: {
    icon: React.ReactNode;
    label: string;
    onClick: () => void;
}) => (
    <div
        onClick={onClick}
        className="flex items-center gap-1 p-2 cursor-pointer hover:underline text-white transition-all"
    >
        {icon}
        <Label className="text-[12px] cursor-pointer">{label}</Label>
    </div>
);


const QuickStartGuide = () => {
    const addWindowItem = useApplicationStore((state) => state.addWindowItem)
    return (
        <div className="@container flex text-black bg-[#6374d6] w-full ">

            <div className='max-w-[180px] min-w-[180px] bg-gradient-to-t from-[#6374d6] to-[#79a3e8] flex flex-col gap-2 p-2 border-x border-l-[#023bb5] border-r-white/20'>
                <div className='bg-white/50 rounded-t '>
                    <div className='flex items-center justify-between p-1 pl-2 rounded-t bg-gradient-to-r from-white to-[#79a3e8]'>
                        <Label className='text-[11px] text-[#0f4fd6] font-bold'>See Also</Label>
                        <RiArrowUpDoubleFill className='bg-white rounded-[50%]  shadow-sm shadow-black/50 border border-black/30' />
                    </div>
                    <div className='flex flex-col gap-1 p-1 px-3'>
                        <div className='flex items-center gap-1'>
                            <Image src="/internetIcon.ico" alt='' width={20} height={20} className='w-[16px] select-none ' draggable={false} />
                            <Label onClick={() => openInternetExplorer('https://www.google.com/')} className='text-[10px] font-medium text-[#0f4fd6] hover:underline select-none cursor-pointer' draggable={false}>Internet Explorer</Label>
                        </div>
                        <div className='flex items-center gap-1'>
                            <FaGithub className='text-black text-[16px]' />
                            <Label className='text-[10px] font-medium text-[#0f4fd6] hover:underline select-none cursor-pointer' draggable={false} >Github</Label>
                        </div>
                        <div className='flex items-center gap-1'>
                            <GrLinkedin className='text-[#3397e8] text-[16px]' />
                            <Label className='text-[10px] font-medium text-[#0f4fd6] hover:underline select-none cursor-pointer' draggable={false} >Linkedin</Label>
                        </div>
                    </div>
                </div>



            </div>
            <div className='@container w-full flex flex-col gap-1'>
                <div className='p-3'>
                    <Label className='text-[20px] @lg:text-[25px]  font-bold text-white/80 leading-tight'> Welcome to My Personal Portfolio</Label>
                    <Label className='text-white font-normal text-[12px] leading-none'>Inspired by (Windows XP Edition)</Label>
                </div>
                {/* Icons Grid */}
                <div className="grid grid-cols-2 @lg:grid-cols-3 @xl:grid-cols-4  w-full px-4">

                    {/* Projects */}
                    <QuickStartItem
                        label="My Works"
                        icon={<Image src="/cmdIcon.png" alt='' width={20} height={20} className='w-[40px] select-none' draggable={false} />}
                        onClick={() => addWindowItem(
                            "My Works",
                            <Image src="/cmdIcon.png" alt='' width={20} height={20} className='w-full select-none' draggable={false} />,
                            <Projects />, 800, 500
                        )}
                    />

                    {/* Skills/TechStack */}
                    <QuickStartItem
                        label="Tech Stacks"
                        icon={<Image src="/techstackIcon.ico" alt='' width={20} height={20} className='w-[40px] select-none' draggable={false} />}
                        onClick={() => addWindowItem(
                            "Tech Stacks",
                            <Image src="/techstackIcon.ico" alt='' width={20} height={20} className='w-full select-none' draggable={false} />,
                            <Projects />, 800, 500
                        )}
                    />

                    {/* About Me */}
                    <QuickStartItem
                        label="About Me"
                        icon={<Image src="/aboutmeIcon.ico" alt='' width={20} height={20} className='w-[40px] select-none' draggable={false} />}
                        onClick={() => addWindowItem(
                            "About Me",
                            <Image src="/aboutmeIcon.ico" alt='' width={20} height={20} className='w-full select-none' draggable={false} />,
                            <Projects />, 800, 500
                        )}
                    />

                    {/* Contact */}
                    <QuickStartItem
                        label="Send E-mail"
                        icon={<Image src="/email.webp" alt='' width={20} height={20} className='w-[40px] select-none' draggable={false} />}
                        onClick={() => addWindowItem(
                            "E-mail",
                            <Image src="/email.webp" alt='' width={20} height={20} className='w-full select-none' draggable={false} />,
                            <Projects />, 800, 500
                        )}
                    />

                    {/* Resume */}
                    <QuickStartItem
                        label="Resume"
                        icon={<Image src="/1336.ico" alt='' width={20} height={20} className='w-[40px] select-none' draggable={false} />}
                        onClick={() => addWindowItem(
                            "Resume",
                            <FaFolderOpen className="text-[#f5d78c] text-[15px]" />,
                            <Projects />, 800, 500
                        )}
                    />
                </div>
            </div>


        </div>


    )
}

export default QuickStartGuide
