import { cn } from "@/lib/utils";
import { Link, useLocation } from "@tanstack/react-router";
import { PanelLeftCloseIcon, PanelLeftOpenIcon, WrenchIcon } from "lucide-react";
import { Button, ButtonProps } from "@/components/ui/button";
import { useStore } from "@/store/store";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { LINKS, LinkType } from "@/constants";
import { SearchBar } from "@/components/searchbar";

export function SideBar() {
    const isCollapsed = useStore(s => s.isSidebarCollapsed)

    return <aside
        className={cn(
            `h-screen -translate-x-full items-center justify-between
                 p-4 pr-2 sm:translate-x-0`,
            isCollapsed ? "hidden" : "w-[200px]",
        )}
        style={{ transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s" }}
    >
        <div className="flex flex-col w-full gap-2 mb-10">
            <div className="flex gap-2 items-center w-full">
                <CollapseSidebar />
                <Link to="/dashboard">
                    <Button size="sm" variant="ghost">
                        <WrenchIcon className="w-4 h-4" />
                    </Button>
                </Link>
            </div>
            <SearchBar />
        </div>
        <div>
            <p className="font-semibold text-sm opacity-35 mb-2">Folders</p>
            <Folders links={LINKS} variant="link" />
        </div>
    </aside>
}


export function Folders({ links, variant }: { links: LinkType[], variant: ButtonProps['variant'] }) {
    const pathname = useLocation({ select: (location) => location.pathname })

    return (
        <nav className="flex flex-col w-full">
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

export function CollapseSidebar() {
    const isCollapsed = useStore(s => s.isSidebarCollapsed)
    const toggle = useStore(s => s.toggleSidebar)

    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <Button variant="ghost" size="sm" onClick={toggle} >
                    {
                        isCollapsed
                            ? <PanelLeftOpenIcon className="w-4 h-4" />
                            : <PanelLeftCloseIcon className="w-4 h-4" />
                    }
                </Button>
            </TooltipTrigger>
            <TooltipContent>Toggle Sidebar</TooltipContent>
        </Tooltip>
    );
}

