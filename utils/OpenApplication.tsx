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
    const width = window.innerWidth * 0.8;
    const height = window.innerHeight * 0.9;
    useApplicationStore.getState().addWindowItem('Internet', <Image src="/internetIcon.ico" alt='' width={500} height={500} className='w-full aspect-square select-none drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black]' draggable={false} />, <InternetExplorer url={url} />, width, height, 'This is an Internet Explorer template. The main function is unavailable.')

}

export function openQuickStart() {
    const width = window.innerWidth * 0.6;
    const height = window.innerHeight * 0.8;
    useApplicationStore.getState().addWindowItem('Quick Start Guide', <Image src="/QuickStartGuideIcon.ico" alt='' width={500} height={500} className='w-full aspect-square select-none drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black]' draggable={false} />, <QuickStartGuide />, width, height, 'Welcome to my portfolio! Select an application to get started.')
}

export function openMyWorks() {
    const width = window.innerWidth * 0.7;
    const height = window.innerHeight * 0.8;
    useApplicationStore.getState().addWindowItem('My Works', <Image src="/internetIcon.ico" alt='' width={500} height={500} className='w-full aspect-square select-none drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black]' draggable={false} />, <Projects />, width, height, 'Select a project to view details.')
}

export function openEmail() {
    const width = window.innerWidth * 0.3;
    const height = window.innerHeight * 0.6;
    useApplicationStore.getState().addWindowItem('E-Mail', <Image src="/Outlook Express.png" alt='' width={500} height={500} className='w-full aspect-square select-none drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black]' draggable={false} />, <SendEmail />, width, height, `Compose a message for Luigie Panahon.`)
}

export function openResume() {
    const width = window.innerWidth * 0.8;
    const height = window.innerHeight * 0.8;
    useApplicationStore.getState().addWindowItem('Resume', <Image src="/pdfIcon.webp" alt='' width={500} height={500} className='w-full aspect-square select-none drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black]' draggable={false} />, <Resume />, width, height, 'Click to zoom, then drag to view other areas.')
}
export function openAboutMe() {
    const width = window.innerWidth * 0.6;
    const height = window.innerHeight * 0.8;
    useApplicationStore.getState().addWindowItem('About Me', <Image src="/aboutmeIcon.ico" alt='' width={500} height={500} className='w-full aspect-square select-none drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black]' draggable={false} />, <AboutMe />, width, height, 'Learn more about Me.')
}

export function openWindowsMediaPlayer() {
    useApplicationStore.getState().addWindowItem('windows media player', <Image src="/windowsMediaPlayer/Windows Media Player 9.png" alt='' width={500} height={500} className='w-full aspect-square select-none drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black]' draggable={false} />, <WindowsMediaPlayer />, 350, 350, 'Open the menu and choose a sample song to play.')
}


