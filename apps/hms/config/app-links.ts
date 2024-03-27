import { SidebarNavItem } from "../types/sidebar";

interface IAppLinks {
    dashboardLinks: SidebarNavItem[]
}

export const appLinks: IAppLinks = {
    dashboardLinks: [
        {
            title: "Analytics",
            href: "/analytics/revenue",
            items: [
                { title: "Revenue Analysis", href: "/analytics/revenue" },
                { title: "Occupancy Rate", href: "/analytics/occupancy" },
                { title: "Sales Performance", href: "/analytics/sales" },
                { title: "Rate Management", href: "/analytics/rate" },
                { title: "Room Utilization", href: "/analytics/room" },
            ]
        },
        {
            title: "Front Office",
            href: "/fo",
            items: [
                { title: "Reservation", href: "/fo/reservation" },
                { title: "Check In", href: "/fo/check-in" },
                { title: "Check Out", href: "/fo/check-out" },
                { title: "Receipt", href: "/fo/receipt" },
            ]
        },
        {
            title: "Point of Sale",
            href: "/pos",
            items: [
                { title: "Restaurant Orders", href: "/pos/order" },
                { title: "Table Management", href: "/pos/table" },
                { title: "Menu Management", href: "/pos/menu" },
            ]
        },
        {
            title: "House Keeping",
            href: "/hk",
            items: [
                { title: "Room Status", href: "/hk/room-status" },
                { title: "Room Assignment", href: "/hk/room-assignment" },
                { title: "Room Cleaning", href: "/hk/room-cleaning" },
                { title: "Room Maintenance", href: "/hk/room-maintenance" },
            ]
        },
        {
            title: "Inventory",
            href: "/inventory",
            items: [
                { title: "Stock", href: "/inventory/stock" },
                { title: "Purchase", href: "/inventory/purchase" },
                { title: "Supplier", href: "/inventory/supplier" },
                { title: "Category", href: "/inventory/category" },
            ]
        },
    ]
};