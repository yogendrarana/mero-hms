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
            <div className='h-full overflow-hidden border-r'>
                {
                    appLinks.dashboardLinks.map((menu, i) => (
                        <div
                            key={i}
                            onClick={() => router.push(menu.href)}
                            className='h-[75px] w-[75px] grid place-items-center cursor-pointer'
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

            <div className='w-[250px] border-r'>
                {
                    activeMenu && activeMenu.items && activeMenu.items.map((subMenu, i) => (
                        <div key={i}>{subMenu.title}</div>
                    ))
                }
            </div>
        </div>
    )
}

export default SidebarNav;