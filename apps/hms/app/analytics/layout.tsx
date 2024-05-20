import { ReactNode } from "react";

// components
import Topbar from "../_components/topbar";
import DashboardLayout from "../../components/layout/dashboard-layout";

type PropType = {
    children: ReactNode;
}

const AnalyticsLayout = ({ children }: PropType) => {
    return (
        <DashboardLayout>{children}</DashboardLayout>
    )
}

export default AnalyticsLayout;