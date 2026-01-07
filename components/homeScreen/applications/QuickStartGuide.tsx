import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
// icons
import { RiArrowUpDoubleFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
//shadcn components
import { Label } from '@/components/ui/label';
//zustand store
import { useApplicationStore } from '@/stores/application';
//resuable components
import { openInternetExplorer, openQuickStart, openMyWorks, openEmail, openResume, openAboutMe, openWindowsMediaPlayer } from '@/utils/OpenApplication'

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
    const isMobileDevice = useApplicationStore((state) => state.isMobileDevice)
    return (
        <div className="@container flex h-full text-black bg-[#6374d6] w-full ">

            <div className={` ${isMobileDevice ? 'max-w-[100px] min-w-[100px]' : 'max-w-[180px] min-w-[180px]'}   bg-gradient-to-t from-[#6374d6] to-[#79a3e8] gap-1 p-1 flex-1 overflow-y-auto no-scrollbar`}>
                <div className='bg-white/50 rounded-t '>
                    <div className='flex items-center justify-between p-1 pl-2 rounded-t bg-gradient-to-r from-white to-[#79a3e8]'>
                        <Label className='text-[11px] text-[#0f4fd6] font-bold'>See Also</Label>
                        <RiArrowUpDoubleFill className='bg-white rounded-[50%]  shadow-sm shadow-black/50 border border-black/30' />
                    </div>
                    <div className='flex flex-col gap-1 p-1 px-3'>
                        <div className='flex items-center gap-1'>
                            <Image src="/internetIcon.ico" alt='' width={500} height={500} className='w-[16px] select-none ' draggable={false} />
                            <Label onClick={() => openInternetExplorer('https://www.google.com/')} className='text-[10px] font-medium text-[#0f4fd6] hover:underline select-none cursor-pointer overflow-ellipsis min-w-0 inline-block overflow-hidden whitespace-nowrap' draggable={false}>Internet Explorer</Label>
                        </div>
                        <Link href={"https://github.com/tcultivator"} target='_blank' className='flex items-center gap-1'>
                            <FaGithub className='text-black text-[16px]' />
                            <Label className='text-[10px] font-medium text-[#0f4fd6] hover:underline select-none cursor-pointer overflow-ellipsis min-w-0 inline-block overflow-hidden whitespace-nowrap' draggable={false} >Github</Label>
                        </Link>
                        <Link href={"https://www.linkedin.com/in/luigie-panahon-541733367/"} target='_blank' className='flex items-center gap-1'>
                            <GrLinkedin className='text-[#3397e8] text-[16px]' />
                            <Label className='text-[10px] font-medium text-[#0f4fd6] hover:underline select-none cursor-pointer overflow-ellipsis min-w-0 inline-block overflow-hidden whitespace-nowrap' draggable={false} >Linkedin</Label>
                        </Link>
                        <div className='flex items-center gap-1'>
                            <Image src="/windowsMediaPlayer/Windows Media Player 9.png" alt='' width={500} height={500} className='w-[16px] select-none ' draggable={false} />
                            <Label onClick={() => openWindowsMediaPlayer()} className='text-[10px] font-medium text-[#0f4fd6] hover:underline select-none cursor-pointer overflow-ellipsis min-w-0 inline-block overflow-hidden whitespace-nowrap' draggable={false}>Windows media playerr</Label>
                        </div>
                    </div>
                </div>



            </div>
            <div className='@container w-full flex flex-col gap-1'>
                <div className='p-3'>
                    <Label className={` ${isMobileDevice ? 'text-[15px]' : 'text-[20px]'}  @2xl:text-[25px]  font-bold text-white/80 leading-tight`}> Welcome to My Personal Portfolio</Label>
                    <Label className='text-white font-normal text-[11px] @2xl:text-[12px] leading-none'>Inspired by (Windows XP Edition)</Label>
                </div>
                {/* Icons Grid */}
                <div className="grid grid-cols-2 @lg:grid-cols-3 @xl:grid-cols-4  w-full px-4">

                    {/* Projects */}
                    <QuickStartItem
                        label="My Works"
                        icon={<Image src="/internetIcon.ico" alt='' width={500} height={500} className={`${isMobileDevice ? 'w-[30px]' : 'w-[40px]'}  select-none drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black]`} draggable={false} />}
                        onClick={openMyWorks}
                    />


                    {/* About Me */}
                    <QuickStartItem
                        label="About Me"
                        icon={<Image src="/aboutmeIcon.ico" alt='' width={500} height={500} className={`${isMobileDevice ? 'w-[30px]' : 'w-[40px]'}  select-none drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black]`} draggable={false} />}
                        onClick={openAboutMe}
                    />

                    {/* Contact */}
                    <QuickStartItem
                        label="Send E-mail"
                        icon={<Image src="/Outlook Express.png" alt='' width={500} height={500} className={`${isMobileDevice ? 'w-[30px]' : 'w-[40px]'}  select-none drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black]`} draggable={false} />}
                        onClick={openEmail}
                    />

                    {/* Resume */}
                    <QuickStartItem
                        label="Resume"
                        icon={<Image src="/pdfIcon.webp" alt='' width={500} height={500} className={`${isMobileDevice ? 'w-[30px]' : 'w-[40px]'}  select-none drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black]`} draggable={false} />}
                        onClick={openResume}
                    />
                </div>
            </div>


        </div>


    )
}

export default QuickStartGuide
