"use client";

import {
    Bell,
    Ellipsis,
    Info,
    Wallet,
    X,
} from "lucide-react"
import { Button } from "@merohms/ui"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@merohms/ui"
import { useState } from "react";

const NotificationDropdown = () => {
    const [open, setOpen] = useState(false);

    return (
        <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger asChild>
                <div className="size-[var(--size-button)] hover:bg-gray-100 flex items-center justify-center border rounded-md cursor-pointer">
                    <Bell size={16} />
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[400px] bg-white">
                <div>
                    <div className="p-3 flex justify-between items-center">
                        <h1>Notifications</h1>

                        <div className="ml-auto flex gap-1 items-center">
                            <Button variant="ghost" size="icon" className="p-2 hover:bg-gray-100">
                                <Ellipsis size={16} />
                            </Button>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="p-2 hover:bg-gray-100"
                                onClick={() => setOpen(false)}
                            >
                                <X size={16} />
                            </Button>
                        </div>
                    </div>

                    {/* notification list */}
                    <div className="border-t">
                        <div className="p-3 space-y-3">
                            <div className="flex gap-3 items-center cursor-pointer">
                                <div className="size-10 bg-gray-100 rounded-full grid place-items-center">
                                    <Wallet size={16} className="text-gray-500" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                                    <p className="text-xs text-gray-400">2m</p>
                                </div>
                            </div>
                            <div className="flex gap-3 items-center cursor-pointer">
                                <div className="size-10 bg-gray-100 rounded-full grid place-items-center">
                                    <Info size={16} className="text-gray-500" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    <p className="text-xs text-gray-400">5d</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}


export default NotificationDropdown;