"use client"

import React, { useEffect, useState } from 'react'

// icons
import { User } from 'lucide-react';

// links
import { appLinks } from '../../../config/app-links';

// componets
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from '@merohms/ui';

const SidebarNav = () => {
    const [activeMenu, setActiveMenu] = useState<String>('Dashboard');
    const [activeSubMenu, setActiveSubMenu] = useState([]);

    useEffect(() => {
        
    }, [activeMenu]); 

    return (
        <div className='h-full flex'>
            <div className='h-full overflow-hidden border-r'>
                {
                    appLinks.dashboardLinks.map((link, i) => (
                        <div 
                            key={i} 
                            onClick={() => setActiveMenu(link.title)}
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
                sadf
            </div>
        </div>
    )
}

export default SidebarNav;