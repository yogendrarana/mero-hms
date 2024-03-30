"use client"

import React, { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation';

// icons
import { ChevronRight, User } from 'lucide-react';

// links
import { appLinks } from '../../config/app-links';

// componets
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from '@merohms/ui';
import { SidebarNavItem } from '../../types/sidebar';

const SidebarNav = () => {
    const router = useRouter();
    const pathname = usePathname();
    const [activeMenu, setActiveMenu] = useState<SidebarNavItem | null>(null);

    // const root href

    useEffect(() => {
        const root_href = pathname.split("/")[1] as string;
        const menu = appLinks.dashboardLinks.find(menu => menu.href.includes(root_href));
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
                                h-[50px] w-[50px] mb-2 grid place-items-center cursor-pointer rounded-md
                                hover:bg-gray-100 transition duration-300
                                ${pathname.split("/")[1] === menu.root_href ? "bg-gray-200" : ""}
                            `}
                        >
                            <TooltipProvider delayDuration={100}>
                                <Tooltip>
                                    <TooltipTrigger className='h-full w-full grid place-items-center'>
                                        <User size={18} />
                                    </TooltipTrigger>
                                    <TooltipContent side='right' className='group-hover:ml-4 bg-white text-black border shadow-sm'>
                                        <p className='text-sm'>{menu.title}</p>
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
                            className='flex justify-between items-center hover:underline cursor-pointer duration-300'
                        >
                            <p className={`${pathname === subMenu.href ? "font-bold" : ""}`}> {subMenu.title} </p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default SidebarNav;