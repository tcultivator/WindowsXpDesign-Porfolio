
import React from 'react'
import { useEffect, useState } from 'react'
import { Label } from '@/components/ui/label';
import Image from 'next/image';
function getFormattedTime() {
    const now = new Date();
    // ensure 12-hour format with AM/PM and no seconds
    return now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
}

const SystemTray = () => {
    const [time, setTime] = useState(getFormattedTime())
    useEffect(() => {
        const id = setInterval(() => setTime(getFormattedTime()), 1000);
        return () => clearInterval(id);
    }, []);

    return (
        <div className='w-full h-full flex gap-2 items-center justify-end pr-2 '>
            
            <div className='flex items-center gap-1.5'>
                <Image id='MWImage' src="/systemTrayIcons/Task Manager.png" alt='' width={20} height={20} className='w-[15px]  select-none  mt-[2px]' draggable={false} />
                <Image id='MWImage' src="/systemTrayIcons/Volume.png" alt='' width={20} height={20} className='w-[15px]  select-none  mt-[2px]' draggable={false} />
                <Image id='MWImage' src="/systemTrayIcons/Security - Ok.png" alt='' width={20} height={20} className='w-[15px] select-none ' draggable={false} />
                <Image id='MWImage' src="/systemTrayIcons/Firewall.png" alt='' width={20} height={20} className='w-[15px]  select-none ' draggable={false} />
            </div>

            <Label className='text-[12px]'>{time}</Label>
        </div>
    )
}

export default SystemTray
