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
    useApplicationStore.getState().addWindowItem('Internet', <Image src="/internetIcon.ico" alt='' width={500} height={500} className='w-full aspect-square select-none drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black]' draggable={false} />, <InternetExplorer url={url} />, 1300, 800)

}

export function openQuickStart() {
    useApplicationStore.getState().addWindowItem('Quick Start Guide', <Image src="/QuickStartGuideIcon.ico" alt='' width={500} height={500} className='w-full aspect-square select-none drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black]' draggable={false} />, <QuickStartGuide />, 700, 400)
}

export function openMyWorks() {
    useApplicationStore.getState().addWindowItem('My Works', <Image src="/internetIcon.ico" alt='' width={500} height={500} className='w-full aspect-square select-none drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black]' draggable={false} />, <Projects />, 1300, 800)
}

export function openEmail() {
    useApplicationStore.getState().addWindowItem('E-Mail', <Image src="/email.webp" alt='' width={500} height={500} className='w-full aspect-square select-none drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black]' draggable={false} />, <SendEmail />, 500, 500)
}

export function openResume() {
    useApplicationStore.getState().addWindowItem('Resume', <Image src="/pdfIcon.webp" alt='' width={500} height={500} className='w-full aspect-square select-none drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black]' draggable={false} />, <Resume />, 800, 800)
}