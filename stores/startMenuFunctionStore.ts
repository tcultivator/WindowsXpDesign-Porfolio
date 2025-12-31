import { create } from 'zustand'

type startMenuFunctionType = {
    turnOffModal: boolean,
    setTurnOffModal: (value: boolean) => void,
    logOffModal: boolean,
    setLogOffModal: (value: boolean) => void,
    reloadToken: boolean,
    setReloadToken: () => void,

}
export const useStartMenufunctionStore = create<startMenuFunctionType>((set) => ({
    turnOffModal: false,
    setTurnOffModal: (value: boolean) => {
        set({
            turnOffModal: value
        })
    },
    reloadToken: false,
    setReloadToken: () => {
        set((state) => ({
            reloadToken: !state.reloadToken
        }))
    },
    logOffModal: false,
    setLogOffModal: (value: boolean) => {
        set({
            logOffModal: value
        })
    },
}))