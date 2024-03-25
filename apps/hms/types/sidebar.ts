export interface NavItem {
    title: string,
    href: string,
    external?: boolean,
    disabled?: boolean,
    label?: string,
}

export interface NavItemWithChildren extends NavItem {
    items?: NavItemWithChildren[]
}

export interface SidebarNavItem extends NavItemWithChildren {}