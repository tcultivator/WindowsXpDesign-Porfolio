
import Image from 'next/image'
import { useApplicationStore } from '@/stores/application'
// images
import Logo from '@/public/loadingscreenxplogo.png';
import { Label } from '@/components/ui/label';
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
} from "@/components/ui/menubar"

type props = {
    title: string;
    icon: React.ReactNode;
    id: string;
}


const topMenuItems = [{
    title: 'File',
    items: [{
        label: 'Save',
        group: 1,
        disabled: false,
        function: () => {

        },

    },
    {
        label: 'Print',
        group: 1,
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



const ResumeTopMenuBar = ({ icon, title, id }: props) => {
    return (
        <div className='flex flex-col gap-[.5px] bg-white  border-t border-t-[#023bb5]'>
            <div className='bg-[#edebd8]   flex items-center justify-between border-b-[.5px] border-b-black/15'>
                <div className='flex items-center text-black'>
                    <Menubar>
                        {
                            topMenuItems.map((data, index) => (
                                <MenubarMenu key={index}>
                                    <MenubarTrigger disabled={data.disabled}>{data.title}</MenubarTrigger>
                                    <MenubarContent>
                                        {
                                            data.items.filter(item => item.group == 1).map((data, index) => (
                                                <MenubarItem key={index} disabled={data.disabled} onClick={() => data.function(id)}>{data.label}</MenubarItem>
                                            ))
                                        }
                                        {data.items.filter(item => item.group == 2).length > 0 && < MenubarSeparator />}
                                        {
                                            data.items.filter(item => item.group == 2).map((data, index) => (
                                                <MenubarItem key={index} disabled={data.disabled} onClick={() => data.function(id)}>{data.label}</MenubarItem>
                                            ))
                                        }
                                        {data.items.filter(item => item.group == 3).length > 0 && < MenubarSeparator />}
                                        {
                                            data.items.filter(item => item.group == 3).map((data, index) => (
                                                <MenubarItem key={index} disabled={data.disabled} onClick={() => data.function(id)}>{data.label}</MenubarItem>
                                            ))
                                        }

                                    </MenubarContent>
                                </MenubarMenu>
                            ))
                        }

                    </Menubar>
                    {/* {
                        topMenuItems.map((data, index) => (
                            <Label key={index} className='text-[10px] font-normal  px-2 hover:bg-[#235ddb] hover:text-white'>{data}</Label>
                        ))
                    } */}

                </div>
                <div className='px-2 border-l border-black/30 bg-white h-full flex justify-center items-center'>
                    <Image src={Logo} alt='' width={50} height={50} className='w-[15px] select-none drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black]' draggable={false} />
                </div>
            </div>

            


        </div>
    )
}

export default ResumeTopMenuBar
