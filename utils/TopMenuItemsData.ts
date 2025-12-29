import { useApplicationStore } from "@/stores/application";

export const topMenuItems = [{
    title: 'File',
    items: [{
        label: 'New Window',
        group: 1,
        disabled: true,
        function: () => {

        },
        
    },
    {
        label: 'Save as',
        group: 1,
        disabled: true,
        function: () => {

        }
    },
    {
        label: 'Page Setup',
        group: 2,
        disabled: true,
        function: () => {

        }
    },
    {
        label: 'Print',
        group: 2,
        disabled: true,
        function: () => {

        }
    },
    {
        label: 'Exit',
        group: 3,
        disabled: false,
        function: (id: string) => {
            const { closeWindowItem } = useApplicationStore.getState();
            closeWindowItem(id);
        }
    }
    ],
    disabled: false
},
{
    title: 'Edit',
    items: [
    ],
    disabled: true
},

{
    title: 'View',
    items: [
        {
            label: 'Maximize',
            group: 1,
            disabled: false,
            function: (id: string) => {
                const { maximizeWindow } = useApplicationStore.getState();
                maximizeWindow(id);
            }
        },
        {
            label: 'Minimize',
            group: 1,
            disabled: false,
            function: (id: string) => {
                const { minimizeWindow } = useApplicationStore.getState();
                minimizeWindow(id);
            }
        }
    ],
    disabled: false
},
{
    title: 'Favourites',
    items: [
    ],
    disabled: true
},
{
    title: 'Tools',
    items: [
    ],
    disabled: true
},

{
    title: 'Help',
    items: [
    ],
    disabled: true
},




];