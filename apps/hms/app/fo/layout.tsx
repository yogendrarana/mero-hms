import { ReactNode } from "react";
import SidebarNav from "../../components/nav/sidebar-nav";

type PropType = {
    children: ReactNode;
}

const DashboardLayout = ({ children }: PropType) => {
    return (
        <div className="h-full flex">
            <SidebarNav />
            <div>
                {children}
            </div>
        </div>
    )
}

export default DashboardLayout;