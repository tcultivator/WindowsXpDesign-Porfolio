import { create } from 'zustand'
import { QuickStartGuideData } from '@/utils/defaultAppData'
import { openInternetExplorer, openQuickStart, openMyWorks, openEmail, openResume } from '@/utils/OpenApplication'
type WindowItemType = {
    id: string;
    title: string;
    icon: React.ReactNode;
    content: React.ReactNode;
    startX: number;
    startY: number;
    defaultWidth: number;
    defaultHeight: number;
    fullScreen: boolean;
    display: boolean;
}
type applicationDataType = {
    applicationIcon: string;
    applicationName: string;
    applicationSubName: string;
    applicationOpenFunction: () => void;
}

type sysAppData = {
    sysAppIcon: string;
    sysAppName: string;

}

type errorWindowItemType = {
    id: string;
}
type Applications = {
    windowItem: WindowItemType[],
    addWindowItem: (title: string, icon: React.ReactNode, content: React.ReactNode, defaultWidth: number, defaultHeight: number) => void,
    activeId: string | null,
    setActiveId: (id: string) => void,
    closeWindowItem: (id: string) => void,
    maximizeWindow: (id: string) => void,
    updateWindow: (id: string, data: Partial<WindowItemType>) => void;
    minimizeWindow: (id: string) => void,
    cancelMinimize: (id: string) => void,
    errorWindowItem: errorWindowItemType[],
    setErrorWindowItem: () => void,
    closeErrorWindowItem: (id: string) => void,
    applicationsData: applicationDataType[],
    sysAppData: sysAppData[]
}

export const useApplicationStore = create<Applications>((set) => ({
    windowItem: [{
        id: QuickStartGuideData.id,
        title: QuickStartGuideData.title,
        content: QuickStartGuideData.content,
        icon: QuickStartGuideData.icon,
        startX: 620,
        startY: 220,
        defaultWidth: 700,
        defaultHeight: 400,
        fullScreen: false,
        display: true,

    }],
    addWindowItem: (title, icon, content, defaultWidth, defaultHeight) => {
        // Calculate perfect center
        let startX = window.innerWidth / 2 - defaultWidth / 2;
        let startY = window.innerHeight / 2 - defaultHeight / 2;

        // Keep window inside screen bounds
        startX = Math.max(0, Math.min(startX, window.innerWidth - defaultWidth));
        startY = Math.max(0, Math.min(startY, window.innerHeight - defaultHeight));

        const offset = 20;
        startX += Math.floor(Math.random() * offset);
        startY += Math.floor(Math.random() * offset);

        const id = crypto.randomUUID();

        set((state) => ({
            windowItem: [
                ...state.windowItem,
                {
                    id,
                    title,
                    icon,
                    content,
                    startX,
                    startY,
                    defaultWidth,
                    defaultHeight,
                    fullScreen: title == 'Resume' ? true : false,
                    display: true,
                },
            ],
            activeId: id
        }));
    },


    activeId: 'quickstart',
    setActiveId: (id) => {
        set({
            activeId: id
        })
    },
    closeWindowItem: (id) => {
        set((state) => ({
            windowItem: state.windowItem.filter(item => item.id != id)
        }))
        if (useApplicationStore.getState().windowItem.length >= 1) {
            useApplicationStore.getState().setActiveId(useApplicationStore.getState().windowItem[useApplicationStore.getState().windowItem.length - 1].id)
        }


    },
    maximizeWindow: (id) => {
        const selectedWindow = useApplicationStore.getState().windowItem.filter(item => item.id == id)
        const prevStartX = selectedWindow[0].startX
        const prevStartY = selectedWindow[0].startY

        console.log(prevStartX)
        console.log(prevStartY)

        const currentWindowItems = useApplicationStore.getState().windowItem
        const MaximizeSelectedWindow = currentWindowItems.map(item => {
            if (item.id == id) {
                return { ...item, fullScreen: !item.fullScreen }
            }
            return item
        })


        set({
            windowItem: MaximizeSelectedWindow
        })
    },









    updateWindow: (id, data) => {
        console.log('gumana ung update Window')
        console.log(data)
        set((state) => ({
            windowItem: state.windowItem.map((item) =>
                item.id === id ? { ...item, ...data } : item
            ),
        }))
    },





    minimizeWindow: (id) => {
        set((state) => ({
            windowItem: state.windowItem.map((item) =>
                item.id === id ? { ...item, display: false } : item
            ),
            activeId: useApplicationStore.getState().windowItem.length == 1 ? null : useApplicationStore.getState().windowItem[useApplicationStore.getState().windowItem.length - 1].id
        }))
        console.log(useApplicationStore.getState().windowItem)
    },
    cancelMinimize: (id) => {
        set((state) => ({
            windowItem: state.windowItem.map((item) =>
                item.id === id ? { ...item, display: true } : item
            ),
            activeId: id
        }))
        console.log(useApplicationStore.getState().windowItem)
    },

    errorWindowItem: [],
    setErrorWindowItem: () => {
        const id = crypto.randomUUID();
        set((state) => ({
            errorWindowItem: [
                ...state.errorWindowItem,
                {
                    id
                },
            ],
            activeId: id
        }));
    },
    closeErrorWindowItem: (id) => {
        set((state) => ({
            errorWindowItem: state.errorWindowItem.filter(item => item.id != id)
        }))

    },




    applicationsData: [{
        applicationIcon: '/internetIcon.ico',
        applicationName: 'Internet',
        applicationSubName: 'Internet Explorer',
        applicationOpenFunction: () => openInternetExplorer('https://www.google.com/')
    },
    {
        applicationIcon: '/email.webp',
        applicationName: 'E-mail',
        applicationSubName: 'Outlook Express',
        applicationOpenFunction: openEmail
    },
    {
        applicationIcon: '/QuickStartGuideIcon.ico',
        applicationName: 'Quick Start Guide',
        applicationSubName: '',
        applicationOpenFunction: openQuickStart
    },
    {
        applicationIcon: '/cmdIcon.png',
        applicationName: 'My Works',
        applicationSubName: '',
        applicationOpenFunction: openMyWorks
    },

    {
        applicationIcon: '/gihubIcon.png',
        applicationName: 'Github',
        applicationSubName: '',
        applicationOpenFunction: openMyWorks
    },

    {
        applicationIcon: '/linkedinIcon.png',
        applicationName: 'Linkedin',
        applicationSubName: '',
        applicationOpenFunction: openMyWorks
    },

    {
        applicationIcon: '/1336.ico',
        applicationName: 'Resume',
        applicationSubName: '',
        applicationOpenFunction: openResume
    },

    ],


    sysAppData: [{
        sysAppIcon: '/RightSideOfStartMenuIcons/myDocumentsIcon.ico',
        sysAppName: 'My Documents'
    },
    {
        sysAppIcon: '/RightSideOfStartMenuIcons/Recent Documents.png',
        sysAppName: 'My Recent Documents'
    },
    {
        sysAppIcon: '/RightSideOfStartMenuIcons/myPictureIcon.ico',
        sysAppName: 'My Pictures'
    },
    {
        sysAppIcon: '/RightSideOfStartMenuIcons/myMusicIcon.ico',
        sysAppName: 'My Music'
    },
    {
        sysAppIcon: '/RightSideOfStartMenuIcons/myComputerIcon.ico',
        sysAppName: 'My Computer'
    },

    {
        sysAppIcon: '/RightSideOfStartMenuIcons/controlPanelIcon.ico',
        sysAppName: 'Control Panel'
    },

    {
        sysAppIcon: '/RightSideOfStartMenuIcons/Default Programs.png',
        sysAppName: 'Default Programs'
    },

    {
        sysAppIcon: '/RightSideOfStartMenuIcons/printerIcon.ico',
        sysAppName: 'Printers'
    },

    {
        sysAppIcon: '/RightSideOfStartMenuIcons/helpandsupportIcon.ico',
        sysAppName: 'Help and Support'
    },

    {
        sysAppIcon: '/RightSideOfStartMenuIcons/searchIcon.ico',
        sysAppName: 'Search'
    },
    {
        sysAppIcon: '/RightSideOfStartMenuIcons/runIcon.ico',
        sysAppName: 'Run'
    },


    ]

}))
