import { DashboardSideBar } from '@/components/sidebar/dashboard-sidebar'
import { CollapseSideBarBtn, HomeSideBar } from '@/components/sidebar/sidebar'
import { useStore } from '@/store/store'
import { createRootRoute, Outlet, useLocation } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({ component: RootLayout })

function RootLayout() {
    const pathname = useLocation({ select: (location) => location.pathname })
    const isSidebarCollapsed = useStore(s => s.isSidebarCollapsed)

    return <div className='flex '>
        {
            pathname.includes("/dashboard")
                ? <DashboardSideBar />
                : <HomeSideBar />
        }
        <main className='relative h-[calc(100vh-20px)] border rounded-xl m-2 overflow-y-hidden w-full p-4'>
            {isSidebarCollapsed && <span className='h-10 absolute'>
                <CollapseSideBarBtn />
            </span>}
            <Outlet />
        </main>
        <TanStackRouterDevtools />
    </div>
}
