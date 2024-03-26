"use client"

import React, { useState } from 'react'
import { useRouter } from 'next/navigation';

// icons
import { User } from 'lucide-react';

// links
import { appLinks } from '../../config/app-links';

// componets
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from '@merohms/ui';
import { SidebarNavItem } from '../../types/sidebar';

const SidebarNav = () => {
    const router = useRouter()
    const [activeSubMenu, setActiveSubMenu] = useState(appLinks.dashboardLinks[0]?.items);


    // handleMenuClick
    function handleMenuClick(menu: SidebarNavItem) {
        router.push(menu.href)
        setActiveSubMenu(menu.items)
    }

    return (
        <div className='h-full flex'>
            <div className='h-full overflow-hidden border-r'>
                {
                    appLinks.dashboardLinks.map((link, i) => (
                        <div
                            key={i}
                            onClick={() => handleMenuClick(link)}
                            className='h-[75px] w-[75px] grid place-items-center cursor-pointer'
                        >
                            <TooltipProvider delayDuration={100}>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <User size={18} />
                                    </TooltipTrigger>
                                    <TooltipContent side='right'>
                                        <p>{link.title}</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>
                    ))
                }
            </div>

            <div className='w-[250px] border-r'>
                {
                    activeSubMenu && activeSubMenu.map((subMnu, i) => (
                        <div key={i}>{subMnu.title}</div>
                    ))
                }
            </div>
        </div>
    )
}

export default SidebarNav;