import { ReactNode } from "react";

// components
import SidebarNav from "../../components/nav/sidebar-nav";
import DashboardLayout from "../../components/layout/dashboard-layout";

type PropType = {
    children: ReactNode;
}

const PosLayout = ({ children }: PropType) => {
    return <DashboardLayout>{children}</DashboardLayout>
}

export default PosLayout;