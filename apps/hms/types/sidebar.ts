export interface NavItem {
    title: string,
    root_href?: string,
    href: string,
    icon?: any,
    external?: boolean,
    disabled?: boolean,
    label?: string,
}

export interface NavItemWithChildren extends NavItem {
    items?: NavItemWithChildren[]
}

// sidebar nav item type
export interface SidebarNavItem extends NavItemWithChildren {}