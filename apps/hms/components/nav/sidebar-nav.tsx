"use client"

import React, { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation';

// icons
import { User } from 'lucide-react';

// links
import { appLinks } from '../../config/app-links';

// componets
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from '@merohms/ui';
import { SidebarNavItem } from '../../types/sidebar';

const SidebarNav = () => {
    const router = useRouter();
    const pathname = usePathname();
    const [activeMenu, setActiveMenu] = useState(null as SidebarNavItem | null);

    useEffect(() => {
        const menu = appLinks.dashboardLinks.find(menu => menu.href === pathname);
        if (menu) {
            setActiveMenu(menu);
        }
    }, [pathname])

    return (
        <div className='h-full flex'>
            {/* main menu */}
            <div className='h-full w-[var(--w-main-menu)] py-4 overflow-hidden border-r flex flex-col items-center'>
                {
                    appLinks.dashboardLinks.map((menu, i) => (
                        <div
                            key={i}
                            onClick={() => router.push(menu.href)}
                            className={`
                                h-[50px] w-[50px] grid place-items-center cursor-pointer rounded-md
                                ${pathname.includes(menu.href) ? "bg-gray-200" : ""}
                            `}
                        >
                            <TooltipProvider delayDuration={100}>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <User size={18} />
                                    </TooltipTrigger>
                                    <TooltipContent side='right'>
                                        <p>{menu.title}</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>
                    ))
                }
            </div>

            {/* sub menu */}
            <div className='w-[var(--w-sub-menu)] p-4 border-r flex flex-col gap-4 overflow-y-auto'>
                {
                    activeMenu && activeMenu.items && activeMenu.items.map((subMenu, i) => (
                        <div
                            key={i}
                            onClick={() => router.push(subMenu.href)}
                            className='cursor-pointer'
                        >
                            {subMenu.title}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default SidebarNav;