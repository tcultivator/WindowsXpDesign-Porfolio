import React from 'react'
import Image from 'next/image'
import { Label } from '@/components/ui/label'
import { useApplicationStore } from '@/stores/application'
import { useSystemTrayStore } from '@/stores/systemTrayStore'
const AccessDenied = ({ id }: { id: string }) => {
  
  const activeId = useApplicationStore((state) => state.activeId)
  const closeErrorWindowItem = useApplicationStore((state) => state.closeErrorWindowItem)
  const volumeStatus = useSystemTrayStore((state) => state.volumeStatus)
  return (
    <div className={`w-full h-full ${activeId === id ? 'bg-[#0f4fd6]' : 'bg-[#3d82f2]'} rounded-t-[10px] p-[3px] flex flex-col shadow-[inset_0_2px_5px_rgba(103,169,246,0.95),inset_0_-2px_6px_rgba(0,0,0,0.3),0_2px_4px_rgba(0,0,0,0.5)] border border-[#023bb5]`}>
      {/* Drag handle */}
      <div className=" w-full h-6 cursor-move rounded-t-[5px] pb-1 px-1 flex justify-between items-center pt-1">
        <div className='flex items-center gap-1 w-full drag-handle'>
          {/* <FaFolderOpen className='text-[#f5d78c] text-[15px]' /> */}
          <div className='w-[20px] aspect-square'>
            <Image src="/Critical.png" alt='' width={20} height={20} priority className='w-full aspect-square select-none' />
          </div>
          <Label className='text-[12px]'>{'Local Disk (C:)'}</Label>
        </div>
        <div className={`${activeId === id ? 'opacity-100' : 'opacity-70'}  flex justify-end min-w-[80px] max-w-[80px] items-center gap-1 cursor-default pl-1`}>

          <Image
            onClick={() => closeErrorWindowItem(id)}
            src={'/applicationController/Exit.png'}
            alt=''
            width={100}
            height={100}
            className='w-[20px] cursor-pointer hover:brightness-125'
            priority
          />


        </div>


      </div>

      {/* Content */}
      <div className="h-full flex flex-col bg-white text-black  ">
        {volumeStatus && <audio src="/sounds/erro.mp3" className='hidden' autoPlay />}
        <div className='flex gap-3 text-black p-4'>
          <div className='w-[30px] aspect-square'>
            <Image src="/Critical.png" alt='' width={20} height={20} className='w-full aspect-square select-none' />
          </div>
          <div>
            <Label className='text-[14px] font-normal'>{'C:/ Not accessible.'}</Label>
            <Label className='text-[14px] font-normal'>{'Access Denied'}</Label>
          </div>
        </div>
        <button onClick={() => closeErrorWindowItem(id)} className="group relative text-[14px] inline-flex w-[100px] m-auto  items-center justify-center overflow-hidden  border border-black/60 bg-transparent  font-normal  transition-all duration-100 [box-shadow:2px_2px_rgb(82_82_82)] active:translate-x-[1px] active:translate-y-[1px] active:[box-shadow:0px_0px_rgb(82_82_82)]">Ok</button>
      </div>
    </div>
  )
}

export default AccessDenied
