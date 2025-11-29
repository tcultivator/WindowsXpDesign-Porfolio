"use client"

// start menu components
import StartMenu from '@/components/homeScreen/startMenu/startMenu'

// react library
import { Rnd } from 'react-rnd'
// shadcn components
import { Label } from '@/components/ui/label'

// icons
import { FaRegWindowMaximize } from "react-icons/fa";
import { FaWindowMinimize } from "react-icons/fa";
import { useApplicationStore } from '@/stores/application'
import { LiaTimesSolid } from "react-icons/lia";


//resuable components
import XPExplorerBar from '@/utils/XPExplorerBar';


const HomeScreen = () => {

    const windowItem = useApplicationStore((state) => state.windowItem)
    const activeId = useApplicationStore((state) => state.activeId)
    const setActiveId = useApplicationStore((state) => state.setActiveId)
    const closeWindowItem = useApplicationStore((state) => state.closeWindowItem)


    return (
        <div className="flex flex-col items-center w-screen h-screen text-white relative bg-cover bg-center overflow-hidden"
            style={{ backgroundImage: "url('/xpbg.jpg')" }}>
            {windowItem.map((data) => (
                <Rnd

                    onMouseDown={() => setActiveId(data.id)}
                    className={activeId === data.id ? "z-40" : "z-10"}
                    key={data.id}
                    bounds="parent"
                    minWidth={data.defaultWidth}
                    minHeight={data.defaultHeight}
                    dragHandleClassName="drag-handle"
                    enableResizing={{
                        top: true,
                        right: true,
                        bottom: true,
                        left: true,
                        topRight: true,
                        bottomRight: true,
                        bottomLeft: true,
                        topLeft: true,
                    }}
                    default={{
                        x: data.startX,
                        y: data.startY,
                        width: 800,
                        height: 500,
                    }}
                >
                    <div className={`w-full h-full ${activeId === data.id ? 'bg-[#235ddb]' : 'bg-[#3d82f2]'} rounded-t-[10px] p-1 flex flex-col shadow-[inset_0_2px_5px_rgba(103,169,246,0.95),inset_0_-2px_6px_rgba(0,0,0,0.3),0_2px_4px_rgba(0,0,0,0.5)]`}>
                        {/* Drag handle */}
                        <div className="drag-handle w-full h-6 cursor-move rounded-t-[5px] pb-1 px-1 flex justify-between items-center">
                            <div className='flex items-center gap-1'>
                                {/* <FaFolderOpen className='text-[#f5d78c] text-[15px]' /> */}
                                {data.icon}
                                <Label>{data.title}</Label>
                            </div>
                            <div className={`${activeId === data.id ? 'opacity-100' : 'opacity-70'} flex items-center gap-1`}>
                                <button className='bg-[#235ddb] p-[2px] rounded border border-white shadow-[inset_0_1px_2px_rgba(255,255,255,0.8),inset_0_-2px_3px_rgba(0,0,0,0.3),0_2px_4px_rgba(0,0,0,0.5)] hover:brightness-110 cursor-pointer'>
                                    <FaWindowMinimize className='p-[2px] text-[17px]' />
                                </button>

                                <button className='bg-[#235ddb] p-[2px] rounded border border-white shadow-[inset_0_1px_2px_rgba(255,255,255,0.8),inset_0_-2px_3px_rgba(0,0,0,0.3),0_2px_4px_rgba(0,0,0,0.5)] hover:brightness-110 cursor-pointer'>
                                    <FaRegWindowMaximize className='p-[2px] text-[17px]' />
                                </button>

                                <button onClick={() => closeWindowItem(data.id)} className='bg-red-400 p-[2px] rounded border border-white shadow-[inset_0_1px_2px_rgba(255,255,255,0.8),inset_0_-2px_3px_rgba(0,0,0,0.3),0_2px_4px_rgba(0,0,0,0.5)] hover:brightness-110 cursor-pointer'>
                                    <LiaTimesSolid className='text-[17px]' />
                                </button>

                            </div>

                        </div>


                        {data.title != 'Internet' && <XPExplorerBar
                            title={data.title}
                            icon={data.icon}
                        />}
                        {/* Content */}
                        <div className="h-full flex   ">
                            {data.content}
                        </div>
                    </div>
                </Rnd>
            ))}

            <div className='bg-[#235ddb] z-50 w-full max-h-8 absolute bottom-0 gap-1 flex items-center shadow-[inset_0_2px_5px_rgba(103,169,246,0.95),inset_0_-2px_6px_rgba(0,0,0,0.3),0_2px_4px_rgba(0,0,0,0.5)]'>
                <StartMenu />
                <div className='flex items-center'>
                    {
                        windowItem.map((data) => (
                            <div onClick={() => setActiveId(data.id)} key={data.id} className='max-h-8 h-8 w-[150px] py-[3px]'>
                                <div className={`px-3 flex gap-1 items-center ${activeId === data.id ? 'bg-[#235ddb]' : 'bg-[#3d82f2]'}  rounded-[3px] w-full h-full border border-black/20  hover:brightness-110 cursor-pointer`}>
                                    <Label className='text-[12px]'>{data.icon}</Label>
                                    <Label className='font-thin text-[12px]'>{data.title}</Label>
                                </div>
                            </div>
                        ))
                    }
                </div>


            </div>
        </div >
    )
}

export default HomeScreen
