
import {
    ContextMenu,
    ContextMenuCheckboxItem,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuLabel,
    ContextMenuRadioGroup,
    ContextMenuRadioItem,
    ContextMenuSeparator,
    ContextMenuShortcut,
    ContextMenuSub,
    ContextMenuSubContent,
    ContextMenuSubTrigger,
    ContextMenuTrigger,
} from "@/components/ui/context-menu"
import { Label } from '@/components/ui/label'
import Image from 'next/image'

export const AppInHomePage = ({ icon, label, onClick }: {
    icon: React.ReactNode;
    label: React.ReactNode;
    onClick: () => void;

}) => (
    <ContextMenu>
        <ContextMenuTrigger className=''>
            <button id='MW' onDoubleClick={onClick} className='flex flex-col items-center gap-1 justify-center aspect-square w-[70px] cursor-pointer  ' >
                {icon}
                {label}
            </button>
        </ContextMenuTrigger>
        <ContextMenuContent className="w-52">
            <ContextMenuItem onClick={onClick} inset className='font-bold'>Open</ContextMenuItem>
            <ContextMenuItem inset>Explore</ContextMenuItem>
            <ContextMenuItem inset>Search...</ContextMenuItem>
            <ContextMenuItem inset>Manage</ContextMenuItem>

            <ContextMenuSeparator />

            <ContextMenuItem inset>Map Network Drive</ContextMenuItem>
            <ContextMenuItem inset>Disconnect Network Drive</ContextMenuItem>

            <ContextMenuSeparator />

            <ContextMenuItem inset>Create Shortcut</ContextMenuItem>
            <ContextMenuItem inset>Delete</ContextMenuItem>
            <ContextMenuItem inset>Rename</ContextMenuItem>

            <ContextMenuSeparator />

            <ContextMenuItem inset>Properties</ContextMenuItem>

        </ContextMenuContent>
    </ContextMenu>
);