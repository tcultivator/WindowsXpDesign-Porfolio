
import Image from 'next/image'
import { Label } from '@/components/ui/label';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { RiArrowDownSLine } from "react-icons/ri";
import Logo from '@/public/loadingscreenxplogo.png';
import searchIcon from '@/public/searchIcon.ico'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { useEffect, useState } from 'react';
import { useAddressbarStore } from '@/stores/addressBarStore';
type props = {
    title: string;
    icon: React.ReactNode;
}
const topMenuItems = ["File", "Edit", "View", "Favourites", "Tools", "Help"];
const IEBar = ({ icon, title }: props) => {
    const addressBarLoading = useAddressbarStore((state) => state.addressBarLoading)
    const setAddressBarLoading = useAddressbarStore((state) => state.setAddressBarLoading)
    const addressBarCurrent = useAddressbarStore((state) => state.addressBarCurrent)
    const addressBarHistory = useAddressbarStore((state) => state.addressBarHistory)
    const prevHistory = useAddressbarStore((state) => state.prevHistory)

    useEffect(() => {
       
        let progress = 0
        const interval = setInterval(() => {
            progress += 5
            setAddressBarLoading(progress)

            if (progress >= 100) {
                clearInterval(interval)
                setTimeout(() => {
                    setAddressBarLoading(0)
                }, 200);
            }
        }, 15) // speed (lower = faster)

        return () => clearInterval(interval)
    }, [addressBarCurrent])
    return (
        <div className='flex flex-col gap-[.5px] bg-[#ffffff]  border-t border-t-[#023bb5]'>
            <div className='bg-[#edebd8]   flex items-center justify-between border-b-[.5px] border-b-black/15'>
                <div className='flex items-center text-black p-[2px]'>
                    {
                        topMenuItems.map((data, index) => (
                            <Label key={index} className='text-[10px] font-normal  px-2 hover:bg-[#235ddb] hover:text-white'>{data}</Label>
                        ))
                    }

                </div>
                <div className='px-2 border-l border-black/30 bg-white'>
                    <Image src={Logo} alt='' width={50} height={50} className='w-[15px] select-none drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black]' draggable={false} />
                </div>
            </div>
            <div className='bg-[#edebd8] p-1 flex items-center border-b-[.5px] border-b-black/15'>
                <div className='flex items-center w-max border-r border-black/20 px-1'>
                    <button disabled={addressBarHistory.length <= 0} onClick={() => {
                        console.log('click prev')
                        prevHistory()
                    }} className='text-black flex items-center gap-1  p-1 cursor-pointer'>
                        <FaArrowLeft className={`${addressBarHistory.length <= 0 ? 'bg-[#b0b0b0]' : 'bg-[#3CC711] border-[#2BB800]'} border  shadow-[inset_0_2px_5px_rgba(255,255,255,0.5),inset_0_-2px_6px_rgba(0,0,0,0.3),0_2px_4px_rgba(0,0,0,0.5)]  text-white p-[3px] text-[21px] rounded-[50%]`} />
                        <Label className='font-light text-black/60 text-[11px]'>Back</Label>
                        <IoMdArrowDropdown className='text-[11px] mt-[2px]' />
                    </button>
                    <button className='text-black flex items-center gap-1  p-1'>
                        <FaArrowRight className=' border bg-[#b0b0b0] shadow-[inset_0_2px_5px_rgba(255,255,255,0.5),inset_0_-2px_6px_rgba(0,0,0,0.3),0_2px_4px_rgba(0,0,0,0.5)] text-white p-[3px] text-[20px] rounded-[50%]' />
                        <IoMdArrowDropdown className='text-[11px] mt-[2px]' />
                    </button>
                    <button className='relative h-full  py-1 rounded px-[1px] border hover:border-black/30 '>
                        <Image src="/internetExplorerHeaderTab/IE Stop.png" alt='folder icon' width={100} height={100} className='w-[20px] select-none drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black]' draggable={false} />
                    </button>
                    <button className='relative h-full  py-1 rounded px-[2px] border hover:border-black/30'>
                        <Image src="/internetExplorerHeaderTab/IE Refresh.png" alt='folder icon' width={100} height={100} className='w-[20px] select-none drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black]' draggable={false} />
                    </button>
                    <button className='relative h-full  py-1 rounded px-[2px] border hover:border-black/30'>
                        <Image src="/internetExplorerHeaderTab/IE Home.png" alt='folder icon' width={100} height={100} className='w-[20px] select-none drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black]' draggable={false} />
                    </button>
                </div>
                <div className='flex items-center w-max border-r border-black/20 px-1'>
                    <button className=' h-full  py-1 rounded px-[2px] pr-1 border hover:border-black/30 flex items-center gap-1'>
                        <Image src={searchIcon} alt='folder icon' width={20} height={20} className='w-[18px] select-none drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black]' draggable={false} />
                        <Label className='text-black font-normal text-[11px]'>Search</Label>
                    </button>
                    <button className=' h-full  py-1 rounded px-[2px] pr-1 border hover:border-black/30 flex items-center gap-1'>
                        <Image src="/internetExplorerHeaderTab/favouriteIcon.ico" alt='fovourite icon' width={20} height={20} className='w-[18px] select-none drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black]' draggable={false} />
                        <Label className='text-black font-normal text-[11px]'>Favourites</Label>
                    </button>
                    <button className=' h-full  py-1 rounded px-[0px] pr-1 border hover:border-black/30 flex items-center gap-1'>
                        <Image src="/internetExplorerHeaderTab/IE History.png" alt='History Icon' width={20} height={20} className='w-[22px] select-none drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black]' draggable={false} />

                    </button>
                </div>
                <div className='flex items-center w-max px-1'>
                    <button className=' h-full  py-1 rounded px-[1px] pr-1 border hover:border-black/30 flex items-center text-black'>
                        <Image src="/internetExplorerHeaderTab/Email.png" alt='Email Icon' width={20} height={20} className='w-[20px] select-none drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black]' draggable={false} />
                        <IoMdArrowDropdown className='text-[11px] mt-[2px]' />
                    </button>
                    <button className=' h-full  py-1 rounded px-[1px] pr-1 border hover:border-black/30 flex items-center gap-1 text-black'>
                        <Image src="/internetExplorerHeaderTab/print.ico" alt='print Icon' width={20} height={20} className='w-[20px] select-none drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black]' draggable={false} />
                    </button>
                    <button className=' h-full  py-1 rounded px-[1px] pr-1 border hover:border-black/30 flex items-center gap-1 text-black'>
                        <Image src="/internetExplorerHeaderTab/IE Edit.png" alt='edit Icon' width={20} height={20} className='w-[20px] select-none drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black]' draggable={false} />
                    </button>
                    <button className=' h-full  py-1 rounded px-[1px] pr-1 border hover:border-black/30 flex items-center gap-1 text-black'>
                        <Image src="/internetExplorerHeaderTab/Windows Messenger.png" alt='wm Icon' width={20} height={20} className='w-[20px] select-none drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black]' draggable={false} />
                    </button>

                </div>

            </div>
            <div className='bg-[#edebd8]  flex items-center gap-1 border-b-[.5px] border-b-black/15'>
                <Label className='font-light text-black/50 text-[10px] p-[2px] px-2'>Address</Label>
                <div className='bg-white border-t border-[#edebd8] w-full h-full  flex justify-between items-center '>
                    <div className='flex items-center relative  pl-1 w-full'>
                        <Label className='w-[13px]'>{icon}</Label>
                        <Label className='font-light text-black/60 text-[10px] p-[2px] px-2'>{addressBarCurrent.label}</Label>
                        <div
                            className={`absolute left-0 top-0 h-full ${addressBarLoading == 0 ? 'bg-blue-400/0' : 'bg-blue-400/30'} transition-[width] duration-75`}
                            style={{ width: `${addressBarLoading}%` }}
                        />
                    </div>
                    <RiArrowDownSLine className='text-black bg-[#acc8fc] h-full px-1 text-[18px] aspect-square border border-black/10' />
                </div>
                <div className='flex items-center gap-1 p-[2px] pr-2'>
                    <FaArrowRight className=' bg-[#2eb32e] shadow-[inset_0_2px_5px_rgba(255,255,255,0.5),inset_0_-2px_6px_rgba(0,0,0,0.3),0_2px_4px_rgba(0,0,0,0.5)] text-white p-[2px] text-[16px] rounded-[2px]' />
                    <Label className='font-thin text-black text-[10px]'>Go</Label>
                </div>
                <div className='flex items-center gap-1 p-[2px] pr-2'>
                    <Label className='font-thin text-black/50 text-[10px]'>Links</Label>
                    <MdKeyboardDoubleArrowRight className='text-black/50 text-[12px] h-full' />
                </div>
            </div>
        </div>
    )
}

export default IEBar
