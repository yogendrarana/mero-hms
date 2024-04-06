import { ReactNode } from "react";

// components
import DashboardLayout from "../../components/layout/dashboard-layout";

type PropType = {
    children: ReactNode;
}

const FoLayout = ({ children }: PropType) => {
    return <DashboardLayout>{children}</DashboardLayout>
}

export default FoLayout;