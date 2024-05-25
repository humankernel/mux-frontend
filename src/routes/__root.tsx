import { DashboardSideBar } from '@/components/sidebar/dashboard-sidebar'
import { CollapseSidebar, SideBar } from '@/components/sidebar/main-sidebar'
import { useStore } from '@/store/store'
import { createRootRoute, Outlet, useLocation } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
    component: RootLayout
})

function RootLayout() {
    const pathname = useLocation({ select: (location) => location.pathname })
    const isSidebarCollapsed = useStore(s => s.isSidebarCollapsed)

    return <div className='flex dark'>
        {
            pathname === "/dashboard"
                ? <DashboardSideBar />
                : <SideBar />
        }
        <main className='h-[calc(100vh-20px)] border rounded-xl m-2 overflow-y-hidden w-full p-2'>
            <div className='h-10'>
                {isSidebarCollapsed && <CollapseSidebar />}
            </div>
            <Outlet />
        </main>
        <TanStackRouterDevtools />
    </div>
}
