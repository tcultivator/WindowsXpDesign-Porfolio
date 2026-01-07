import { create } from 'zustand'
type addressBarHistory = {
    index: number | null;
    label: string;
}
type addressBarCurrent = {
    index: number | null;
    label: string;
}
type addressBar = {
    addressBarLoading: number | null,
    setAddressBarLoading: (value: number) => void,
    addressBarHistory: addressBarHistory[],
    addressBarCurrent: addressBarCurrent,
    setAddressbarHistory: ({ label, index }: { label: string, index: number | null }) => void,
    setAddressBarCurrent: ({ label, index }: { label: string, index: number | null }) => void,
    prevHistory: () => void,
    indexOfprojectsSelection: number | null,
    featuredProjectsOn: boolean,
    setFeaturedProjectsOn: () => void,
}
export const useAddressbarStore = create<addressBar>((set) => ({
    addressBarLoading: null,
    setAddressBarLoading: (value: number) => {
        set({
            addressBarLoading: value
        })
    },
    addressBarHistory: [],
    addressBarCurrent: { index: null, label: '/MyWorks' },
    setAddressbarHistory: ({ label, index }: { label: string, index: number | null }) => {
        const historyData = useAddressbarStore.getState().addressBarHistory
        historyData.push({ index, label })
        set({
            addressBarHistory: historyData
        })
    },
    setAddressBarCurrent: ({ label, index }: { label: string, index: number | null }) => {
        set({
            addressBarCurrent: { label: label, index: index }
        })

    },
    prevHistory: () => {

        const historyData = useAddressbarStore.getState().addressBarHistory

        set({
            addressBarCurrent: historyData[historyData.length - 1]
        })
        if (historyData.length > 1) {
            historyData.pop()
            set({
                addressBarHistory: historyData
            })
        } else {
            set({
                addressBarHistory: []
            })
        }


    },
    indexOfprojectsSelection: null,
    featuredProjectsOn: false,
    setFeaturedProjectsOn: () => {
        set((state) => ({
            featuredProjectsOn: !state.featuredProjectsOn
        }))
    }



}))