import { SidebarNavItem } from "../types/sidebar";

interface IAppLinks {
    dashboardLinks: SidebarNavItem[]
}

export const appLinks: IAppLinks = {
    dashboardLinks: [
        {
            title: "Dashboard",
            href: "/dashboard",
        },
        {
            title: "Point of Sale",
            href: "/pos",
            items: [
                {title: "Order", href: "/pos/order"},
                {title: "Table", href: "/pos/table"},
                {title: "Menu", href: "/pos/menu"},
                {title: "Inventory", href: "/pos/inventory"},
            ]
        },
        {
            title: "Front Desk",
            href: "/fo",
            items: [
                {title: "Reservation", href: "/fo/reservation"},
                {title: "Check In", href: "/fo/check-in"},
                {title: "Check Out", href: "/fo/check-out"},
                {title: "Receipt", href: "/fo/receipt"},
            ]
        },
        {
            title: "House Keeping",
            href: "/hk",
            items: [
                {title: "Room Status", href: "/hk/room-status"},
                {title: "Room Assignment", href: "/hk/room-assignment"},
                {title: "Room Cleaning", href: "/hk/room-cleaning"},
                {title: "Room Maintenance", href: "/hk/room-maintenance"},
            ]
        },
        {
            title: "Inventory",
            href: "/inventory",
            items: [
                {title: "Stock", href: "/inventory/stock"},
                {title: "Purchase", href: "/inventory/purchase"},
                {title: "Supplier", href: "/inventory/supplier"},
                {title: "Category", href: "/inventory/category"},
            ]
        },
    ]
};