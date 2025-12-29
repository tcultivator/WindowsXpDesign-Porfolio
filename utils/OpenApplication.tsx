//zustand store
import { useApplicationStore } from '@/stores/application';

import Image from 'next/image';


// applications components
import Projects from '@/components/homeScreen/applications/projects';
import QuickStartGuide from '@/components/homeScreen/applications/QuickStartGuide'
import InternetExplorer from '@/components/homeScreen/applications/InternetExplorer';
import Resume from '@/components/homeScreen/applications/Resume';
import SendEmail from '@/components/homeScreen/applications/SendEmail';
import AboutMe from '@/components/homeScreen/applications/aboutMe/AboutMe';
import WindowsMediaPlayer from '@/components/homeScreen/applications/windowsMediaPlayer/WindowsMediaPlayer';

export function openInternetExplorer(url: string) {
    useApplicationStore.getState().addWindowItem('Internet', <Image src="/internetIcon.ico" alt='' width={500} height={500} className='w-full aspect-square select-none drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black]' draggable={false} />, <InternetExplorer url={url} />, 1300, 800, 'This is an Internet Explorer template. The main function is unavailable.')

}

export function openQuickStart() {
    useApplicationStore.getState().addWindowItem('Quick Start Guide', <Image src="/QuickStartGuideIcon.ico" alt='' width={500} height={500} className='w-full aspect-square select-none drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black]' draggable={false} />, <QuickStartGuide />, 700, 400, 'Welcome to my portfolio! Select an application to get started.')
}

export function openMyWorks() {
    useApplicationStore.getState().addWindowItem('My Works', <Image src="/internetIcon.ico" alt='' width={500} height={500} className='w-full aspect-square select-none drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black]' draggable={false} />, <Projects />, 1300, 800, 'Select a project to view details.')
}

export function openEmail() {
    useApplicationStore.getState().addWindowItem('E-Mail', <Image src="/email.webp" alt='' width={500} height={500} className='w-full aspect-square select-none drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black]' draggable={false} />, <SendEmail />, 500, 500, `Compose a message for Luigie Panahon.`)
}

export function openResume() {
    useApplicationStore.getState().addWindowItem('Resume', <Image src="/pdfIcon.webp" alt='' width={500} height={500} className='w-full aspect-square select-none drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black]' draggable={false} />, <Resume />, 800, 800, 'Click to zoom, then drag to view other areas.')
}
export function openAboutMe() {
    useApplicationStore.getState().addWindowItem('About Me', <Image src="/aboutmeIcon.ico" alt='' width={500} height={500} className='w-full aspect-square select-none drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black]' draggable={false} />, <AboutMe />, 800, 600, 'Learn more about Me.')
}

export function openWindowsMediaPlayer() {
    useApplicationStore.getState().addWindowItem('windows media player', <Image src="/windowsMediaPlayer/Windows Media Player 9.png" alt='' width={500} height={500} className='w-full aspect-square select-none drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black]' draggable={false} />, <WindowsMediaPlayer />, 350, 350, 'Open the menu and choose a sample song to play.')
}


