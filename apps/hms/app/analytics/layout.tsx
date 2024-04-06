import { ReactNode } from "react";

// components
import DashboardLayout from "../../components/layout/dashboard-layout";

type PropType = {
    children: ReactNode;
}

const AnalyticsLayout = ({ children }: PropType) => {
    return <DashboardLayout>{children}</DashboardLayout>

}

export default AnalyticsLayout;