import { ReactNode } from 'react'

// components
import SidebarNav from '../nav/sidebar-nav'
import Topbar from '../../app/_components/topbar';

// props type
type PropType = {
    children: ReactNode;
}

const DashboardLayout = ({ children }: PropType) => {
    return (
        <div className="h-full flex">
            <SidebarNav />
            <div className="h-full w-full bg-white shadow-sm rounded-r-[10px] flex flex-col">
                <div className='h-[var(--height-topbar)] px-4 border-b'>
                    <Topbar />
                </div>
                <div className='p-4'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout;