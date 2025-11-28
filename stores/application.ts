import { create } from 'zustand'
type WindowItemType = {
    id: string;
    title: string;
    icon: React.ReactNode;
    content: React.ReactNode;
}
type Applications = {
    windowItem: WindowItemType[],
    addWindowItem: (title: string, icon: React.ReactNode, content: React.ReactNode) => void,
    activeId: string | null,
    setActiveId: (id: string) => void,
    closeWindowItem: (id: string) => void
}
export const useApplicationStore = create<Applications>((set) => ({
    windowItem: [],
    addWindowItem: (title, icon, content) => {
        set((state) => ({
            windowItem: [
                ...state.windowItem,
                {
                    id: crypto.randomUUID(),
                    title,
                    icon,
                    content,
                },
            ],
        }))
    },
    activeId: null,
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