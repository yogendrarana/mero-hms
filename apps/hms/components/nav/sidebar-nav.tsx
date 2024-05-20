"use client"

import Link from 'next/link';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

// icons
import { BedDouble, Settings, User } from 'lucide-react';

// links
import { appLinks } from '../../config/app-links';

// componets
import { SidebarNavItem } from '../../types/sidebar';
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from '@merohms/ui';

const SidebarNav = () => {
    const router = useRouter();
    const pathname = usePathname();
    const [activeMenu, setActiveMenu] = useState<SidebarNavItem | null>(null);

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
            <div className='h-full w-[var(--w-main-menu)] overflow-hidden rounded-lg flex flex-col items-center gap-2'>
                <div className='h-[var(--height-topbar)] flex items-center'>
                    <div className='size-[50px] text-center border bg-black text-white text-sm rounded-lg grid place-items-center'>
                        <BedDouble className='h-5 w-5' />
                    </div>
                </div>

                <div className='flex flex-col gap-4'>
                    {
                        appLinks.dashboardLinks.map((menu, i) => (
                            <div
                                key={i}
                                onClick={() => router.push(menu.href)}
                                className={`
                                    size-[50px] grid place-items-center cursor-pointer rounded-lg
                                    hover:border transition duration-300
                                    ${pathname.split("/")[1] === menu.root_href ? "border" : ""}
                                `}
                            >
                                <TooltipProvider delayDuration={100}>
                                    <Tooltip>
                                        <TooltipTrigger className='h-full w-full grid place-items-center'>
                                            <Image src={menu.icon} alt={menu.title} width={20} height={20} />
                                        </TooltipTrigger>
                                        <TooltipContent side='right' className='bg-white text-black border shadow-sm'>
                                            <p className='text-sm'>{menu.title}</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </div>
                        ))
                    }
                </div>

                <div className='mt-auto py-4 flex flex-col gap-4'>
                    <TooltipProvider delayDuration={100}>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    href="#"
                                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                                >
                                    <User className="h-5 w-5" />
                                    <span className="sr-only">Account</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent className='text-sm bg-white text-black border' side="right">Account</TooltipContent>
                        </Tooltip>
                    </TooltipProvider>

                    <TooltipProvider delayDuration={100}>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <p className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8">
                                    <Settings className="h-5 w-5" />
                                    <span className="sr-only">Settings</span>
                                </p>
                            </TooltipTrigger>
                            <TooltipContent className='text-sm bg-white text-black border' side="right">Settings</TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
            </div>

            {/* sub menu */}
            <div className='w-[var(--w-sub-menu)] flex flex-col gap-4 overflow-y-auto bg-white border-x'>
                <div className='h-[var(--height-topbar)] px-5 border-b flex items-center'>
                    <p className='text-lg font-semibold'> {activeMenu?.title} </p>
                </div>
                {
                    activeMenu && activeMenu.items && activeMenu.items.map((subMenu, i) => (
                        <div
                            key={i}
                            onClick={() => router.push(subMenu.href)}
                            className='px-5 flex justify-between items-center hover:underline cursor-pointer duration-300'
                        >
                            <p className={`${pathname === subMenu.href ? "text-black" : "text-gray-400"}`}> {subMenu.title} </p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default SidebarNav;