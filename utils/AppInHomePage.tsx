
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
            <button id='MW' onDoubleClick={onClick} className='group flex flex-col items-center gap-1 justify-start aspect-square py-2 focus:bg-white/30  border-[1px] focus:border-white/60 border-white/0 rounded  w-[87px] cursor-pointer  ' >
                {icon}
                {label}
            </button>
        </ContextMenuTrigger>
        <ContextMenuContent className="w-52">
            <ContextMenuItem onClick={onClick} inset className='font-bold'>Open</ContextMenuItem>
            <ContextMenuItem disabled inset>Explore</ContextMenuItem>
            <ContextMenuItem disabled inset>Search...</ContextMenuItem>
            <ContextMenuItem disabled inset>Manage</ContextMenuItem>

            <ContextMenuSeparator />

            <ContextMenuItem disabled inset>Map Network Drive</ContextMenuItem>
            <ContextMenuItem disabled inset>Disconnect Network Drive</ContextMenuItem>

            <ContextMenuSeparator />

            <ContextMenuItem disabled inset>Create Shortcut</ContextMenuItem>
            <ContextMenuItem disabled inset>Delete</ContextMenuItem>
            <ContextMenuItem disabled inset>Rename</ContextMenuItem>

            <ContextMenuSeparator />

            <ContextMenuItem disabled inset>Properties</ContextMenuItem>

        </ContextMenuContent>
    </ContextMenu>
);