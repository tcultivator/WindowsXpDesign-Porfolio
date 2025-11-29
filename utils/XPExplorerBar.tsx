
import Image from 'next/image'

// shadcn components
import { Label } from '@/components/ui/label'

// icons
import { FaRegWindowMaximize } from "react-icons/fa";
import { FaWindowMinimize } from "react-icons/fa";
import { useApplicationStore } from '@/stores/application'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { LiaTimesSolid } from "react-icons/lia";
import { RiArrowDownSLine } from "react-icons/ri";
// images
import Logo from '@/public/loadingscreenxplogo.png';
import folderwithicon from '@/public/folderwithicon.ico'
import searchIcon from '@/public/searchIcon.ico'
import folderIcon from '@/public/folderIcon.ico'
import folderLayoutIcon from '@/public/folderLayoutIcon.ico'

type props = {
    title: string;
    icon: React.ReactNode;
}
const topMenuItems = ["File", "Edit", "View", "Favourites", "Tools", "Help"];
const XPExplorerBar = ({ icon, title }: props) => {
    return (
        <>
            <div className='bg-[#edebd8] border-b border-black/30 flex items-center justify-between'>
                <div className='flex items-center text-black p-[2px]'>
                    {
                        topMenuItems.map((data, index) => (
                            <Label key={index} className='text-[12px] font-normal  px-2 hover:bg-[#235ddb] hover:text-white'>{data}</Label>
                        ))
                    }

                </div>
                <div className='px-2 border-l border-black/30'>
                    <Image src={Logo} alt='' width={50} height={50} className='w-[20px]' />
                </div>
            </div>
            <div className='bg-[#edebd8] p-1 flex items-center'>
                <div className='flex items-center w-max border-r border-black/20 px-1'>
                    <button className='text-black flex items-center gap-1  p-1'>
                        <FaArrowLeft className=' bg-[#b0b0b0] shadow-[inset_0_2px_5px_rgba(255,255,255,0.5),inset_0_-2px_6px_rgba(0,0,0,0.3),0_2px_4px_rgba(0,0,0,0.5)] text-white p-[3px] text-[22px] rounded-[50%]' />
                        <Label className='font-light text-black/60 text-[12px]'>Back</Label>
                        <IoMdArrowDropdown className='text-[12px] mt-[2px]' />
                    </button>
                    <button className='text-black flex items-center gap-1  p-1'>
                        <FaArrowRight className=' bg-[#b0b0b0] shadow-[inset_0_2px_5px_rgba(255,255,255,0.5),inset_0_-2px_6px_rgba(0,0,0,0.3),0_2px_4px_rgba(0,0,0,0.5)] text-white p-[3px] text-[22px] rounded-[50%]' />
                        <IoMdArrowDropdown className='text-[12px] mt-[2px]' />
                    </button>
                    <button className='relative h-full  py-1 rounded px-[2px] border hover:border-black/30'>
                        <Image src={folderwithicon} alt='folder icon' width={20} height={20} className='w-[22px]' />
                    </button>
                </div>
                <div className='flex items-center w-max border-r border-black/20 px-1'>
                    <button className=' h-full  py-1 rounded px-[2px] pr-1 border hover:border-black/30 flex items-center gap-1'>
                        <Image src={searchIcon} alt='folder icon' width={20} height={20} className='w-[22px]' />
                        <Label className='text-black font-light text-[12px]'>Search</Label>
                    </button>
                    <button className=' h-full  py-1 rounded px-[2px] pr-1 border hover:border-black/30 flex items-center gap-1'>
                        <Image src={folderIcon} alt='folder icon' width={20} height={20} className='w-[22px]' />
                        <Label className='text-black font-light text-[12px]'>Folders</Label>
                    </button>
                </div>
                <div className='flex items-center w-max px-1'>
                    <button className=' h-full  py-1 rounded px-[2px] pr-1 border hover:border-black/30 flex items-center gap-1 text-black'>
                        <Image src={folderLayoutIcon} alt='folder icon' width={20} height={20} className='w-[22px]' />
                        <IoMdArrowDropdown className='text-[12px] mt-[2px]' />
                    </button>

                </div>

            </div>
            <div className='bg-[#edebd8]  flex items-center gap-1'>
                <Label className='font-thin text-black/50 text-[11px] p-[2px] px-2'>Address</Label>
                <div className='bg-white w-full h-full  border border-black/20 flex justify-between items-center pl-1'>
                    <div className='flex items-center'>
                        <Label className='w-[15px]'>{icon}</Label>
                        <Label className='font-thin text-black/60 text-[11px] p-[2px] px-2'>{title}</Label>
                    </div>
                    <RiArrowDownSLine className='text-black bg-[#acc8fc] h-full px-1 text-[22px] aspect-square border border-black/10' />
                </div>
                <div className='flex items-center gap-1 p-[2px] pr-2'>
                    <FaArrowRight className=' bg-[#2eb32e] shadow-[inset_0_2px_5px_rgba(255,255,255,0.5),inset_0_-2px_6px_rgba(0,0,0,0.3),0_2px_4px_rgba(0,0,0,0.5)] text-white p-[2px] text-[18px] rounded-[2px]' />
                    <Label className='font-thin text-black text-[11px]'>Go</Label>
                </div>
            </div>
        </>
    )
}

export default XPExplorerBar
