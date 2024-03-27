import { create } from 'zustand';
import { SidebarNavItem } from '../types/sidebar';

// state type
type MenuState = {
    activeMenu: SidebarNavItem | null
}

// action type
type MenuActions = {
    changeActiveMenu: (menu: SidebarNavItem) => void
}

const initialState = {
    activeMenu: null
}

const useMenuStore = create<MenuState & MenuActions>((set) => ({
    ...initialState,

    changeActiveMenu: (menu) => set({ activeMenu: menu }) 
}))