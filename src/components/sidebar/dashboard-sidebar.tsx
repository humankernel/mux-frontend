import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";
import { WrenchIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useStore } from "@/store/store";
import { SearchBar } from "@/components/searchbar";
import { CollapseSidebar, Folders } from "./main-sidebar";
import { DASHBOARD_MANAGE_LINKS, DASHBOARD_SETTINGS_LINKS } from "@/constants";

export function DashboardSideBar() {
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


            <div>
                <p className="font-semibold text-sm opacity-35 mb-2">Settings</p>
                <Folders links={DASHBOARD_SETTINGS_LINKS} variant="ghost" />
            </div>
            <div>
                <p className="font-semibold text-sm opacity-35 mb-2">Manage</p>
                <Folders links={DASHBOARD_MANAGE_LINKS} variant="ghost" />
            </div>
        </div>
    </aside>
}
