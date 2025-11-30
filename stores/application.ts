import { create } from 'zustand'
import { QuickStartGuideData } from '@/utils/defaultAppData'

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
                    fullScreen: false,
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
    }

}))
