//zustand store
import { useApplicationStore } from '@/stores/application';


import Image from 'next/image';


// applications components
import Projects from '@/components/homeScreen/applications/projects';
import QuickStartGuide from '@/components/homeScreen/applications/QuickStartGuide'
import InternetExplorer from '@/components/homeScreen/applications/InternetExplorer';
import Resume from '@/components/homeScreen/applications/Resume';
import SendEmail from '@/components/homeScreen/applications/SendEmail';

export function openInternetExplorer(url: string) {
    useApplicationStore.getState().addWindowItem('Internet', <Image src="/internetIcon.ico" alt='' width={20} height={20} className='w-full aspect-square select-none' draggable={false} />, <InternetExplorer url={url} />, 1300, 800)

}

export function openQuickStart() {
    useApplicationStore.getState().addWindowItem('Quick Start Guide', <Image src="/QuickStartGuideIcon.ico" alt='' width={20} height={20} className='w-full aspect-square select-none' draggable={false} />, <QuickStartGuide />, 700, 400)
}

export function openMyWorks() {
    useApplicationStore.getState().addWindowItem('My Works', <Image src="/cmdIcon.png" alt='' width={20} height={20} className='w-full aspect-square select-none' draggable={false} />, <Projects />, 700, 400)
}

export function openEmail() {
    useApplicationStore.getState().addWindowItem('E-Mail', <Image src="/email.webp" alt='' width={20} height={20} className='w-full aspect-square select-none' draggable={false} />, <SendEmail />, 500, 500)
}

export function openResume() {
    useApplicationStore.getState().addWindowItem('Resume', <Image src="/1336.ico" alt='' width={20} height={20} className='w-full aspect-square select-none' draggable={false} />, <Resume />, 800, 800)
}