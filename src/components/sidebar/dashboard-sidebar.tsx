import { DASHBOARD_MANAGE_LINKS, DASHBOARD_SETTINGS_LINKS } from "@/constants";
import { SideBar, Folders } from "./sidebar";

export function DashboardSideBar() {
    return <SideBar>
        <div className="mb-4">
            <p className="font-semibold text-sm opacity-35">Settings</p>
            <Folders links={DASHBOARD_SETTINGS_LINKS} variant="ghost" />
        </div>
        <div>
            <p className="font-semibold text-sm opacity-35">Manage</p>
            <Folders links={DASHBOARD_MANAGE_LINKS} variant="ghost" />
        </div>
    </SideBar>
}
