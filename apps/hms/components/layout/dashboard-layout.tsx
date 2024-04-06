import { ReactNode } from 'react'

// components
import SidebarNav from '../nav/sidebar-nav'

// props type
type PropType = {
    children: ReactNode;
}

const DashboardLayout = ({ children }: PropType) => {
    return (
        <div className="h-full flex gap-2 p-2 bg-gray-100">
            <SidebarNav />
            <div className="h-full w-full p-2 bg-white shadow-sm rounded-lg ">
                {children}
            </div>
        </div>
    )
}

export default DashboardLayout;