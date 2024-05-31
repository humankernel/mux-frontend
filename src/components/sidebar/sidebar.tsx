import { useStore } from "@/store/store";
import { Link, useLocation } from "@tanstack/react-router";

import { cn } from "@/lib/utils";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Button, ButtonProps } from "@/components/ui/button";
import {
    ArrowUpDownIcon,
    GaugeIcon,
    LogIn,
    PanelLeftCloseIcon,
    PanelLeftOpenIcon,
    SettingsIcon,
    UserIcon
} from "lucide-react";
import { SearchBar } from "@/components/searchbar";
import { LINKS, LinkType } from "@/constants";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function SideBar({ children }: { children: React.ReactNode }) {
    const isCollapsed = useStore(s => s.isSidebarCollapsed)

    return <aside
        className={cn(`h-screen -translate-x-full items-center justify-between
            p-4 pr-2 sm:translate-x-0`,
            isCollapsed ? "hidden" : "w-[250px]",
        )}
    // style={{ transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s" }}
    >
        <div className="flex flex-col w-full gap-2 mb-10">
            <div className="flex gap-2 items-center w-full">
                <CollapseSideBarBtn />
                <Link to="/dashboard" className="flex w-full mr-5">
                    <Button size="sm" variant="ghost">
                        <GaugeIcon className="w-4 h-4" />
                    </Button>
                </Link>
            </div>
            <UserDropdown />
            <SearchBar />
        </div>
        {children}
    </aside>
}

function UserDropdown() {
    const username = "strange"

    return <DropdownMenu>
        <DropdownMenuTrigger>
            <Button size="sm" variant="outline" className="w-full flex justify-between p-2">
                <span className="flex">
                    <div className="mr-2 border rounded-sm h-5 bg-zinc-800 aspect-square" />
                    {username}
                </span>
                <ArrowUpDownIcon className="w-4 h-4" />
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuItem>
                <Link to="/profile" className="flex w-full">
                    <UserIcon className="mr-2 w-4 h-4" />
                    Profile
                </Link>
                <DropdownMenuShortcut>p</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
                <Link to="/settings" className="flex w-full">
                    <SettingsIcon className="mr-2 w-4 h-4" />
                    Settings
                </Link>
                <DropdownMenuShortcut>s</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
                <Link to="/auth/login" className="flex w-full">
                    <LogIn className="mr-2 h-4 w-4" />
                    <span>Log in</span>
                </Link>
                <DropdownMenuShortcut>q</DropdownMenuShortcut>
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>

}

export function HomeSideBar() {
    return <SideBar>
        <Folders links={LINKS} variant="link" name="Content" />
    </SideBar>
}


export function Folders({ name, links, variant }: { name: string, links: LinkType[], variant: ButtonProps['variant'] }) {
    const pathname = useLocation({ select: (location) => location.pathname })

    return (
        <nav className="flex flex-col w-full">
            <p className="font-semibold text-sm opacity-35 mb-2">{name}</p>
            {links.map((link, idx) => (
                <Link key={idx} to={link.url}>
                    <Button
                        variant={variant}
                        size="sm"
                        className={cn("flex items-center justify-start gap-4 text-sm w-full",
                            { "underline": pathname === link.url }
                        )}
                    >
                        <link.icon size={15} />
                        {link.name}
                    </Button>
                </Link>
            ))}
        </nav>
    );
}


export function CollapseSideBarBtn() {
    const isCollapsed = useStore(s => s.isSidebarCollapsed)
    const toggle = useStore(s => s.toggleSidebar)

    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <Button variant="ghost" size="sm" onClick={toggle} >
                    {isCollapsed
                        ? <PanelLeftOpenIcon className="w-4 h-4" />
                        : <PanelLeftCloseIcon className="w-4 h-4" />}
                </Button>
            </TooltipTrigger>
            <TooltipContent>Toggle Sidebar</TooltipContent>
        </Tooltip>
    );
}
