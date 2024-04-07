import { ReactNode } from 'react'

// components
import SidebarNav from '../nav/sidebar-nav'

// props type
type PropType = {
    children: ReactNode;
}

const DashboardLayout = ({ children }: PropType) => {
    return (
        <div className="h-full flex p-3 bg-gray-100">
            <SidebarNav />
            <div className="h-full w-full p-4 bg-white shadow-sm rounded-r-[10px]">
                {children}
            </div>
        </div>
    )
}

export default DashboardLayout;