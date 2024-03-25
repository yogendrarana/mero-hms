import React from 'react'
import { app_links } from '../../../config/app-links';
import { Airplay } from 'lucide-react';
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from '@merohms/ui';

const SidebarNav = () => {
    return (
        <div className='h-full flex'>
            <div className='h-full overflow-hidden border-r'>
                {
                    app_links.dashboardLinks.map((link, i) => (
                        <div key={i} className='h-[75px] w-[75px] grid place-items-center cursor-pointer'>
                            <TooltipProvider delayDuration={100}>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Airplay size={24} />
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

            <div>
                {/* This is where the children will be rendered */}
            </div>
        </div>
    )
}

export default SidebarNav;