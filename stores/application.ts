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
}
type Applications = {
    windowItem: WindowItemType[],
    addWindowItem: (title: string, icon: React.ReactNode, content: React.ReactNode, defaultWidth: number, defaultHeight: number) => void,
    activeId: string | null,
    setActiveId: (id: string) => void,
    closeWindowItem: (id: string) => void
}
export const useApplicationStore = create<Applications>((set) => ({
    windowItem: [{
        id: QuickStartGuideData.id,
        title: QuickStartGuideData.title,
        content: QuickStartGuideData.content,
        icon: QuickStartGuideData.icon,
        startX: 620,
        startY: 220,
        defaultWidth: 800,
        defaultHeight: 500

    }],
    addWindowItem: (title, icon, content, defaultWidth, defaultHeight) => {
        const centerX = window.innerWidth / 2 - 320;
        const centerY = window.innerHeight / 2 - 320;

        // Random offset range
        const offsetRange = 10; // how far it can move from the center

        const randomOffsetX = Math.floor(Math.random() * offsetRange * 2) - offsetRange;
        const randomOffsetY = Math.floor(Math.random() * offsetRange * 2) - offsetRange;

        let startX = centerX + randomOffsetX;
        let startY = centerY + randomOffsetY;

        // keep window inside screen bounds
        startX = Math.max(0, Math.min(startX, window.innerWidth - defaultWidth));
        startY = Math.max(0, Math.min(startY, window.innerHeight - defaultHeight));

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
    }

}))