"use client";

import {
    Settings,
    User,
    X,
    LogOut
} from "lucide-react"
import { Button } from "@merohms/ui"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@merohms/ui"
import { useState } from "react";

const ProfileDropdown = () => {
    const [open, setOpen] = useState(false);
    return (
        <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger asChild>
                <div className="px-3 py-2 flex gap-2 items-center border rounded-md cursor-pointer">
                    <User size={16} />
                    <Button variant="ghost" className="p-0">Yogendra</Button>
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[300px] bg-white">
                <div>
                    <div className="p-3 flex justify-between items-center">
                        <h1>Profile</h1>

                        <div className="ml-auto flex gap-1 items-center">
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

                    <div className="p-3 space-y-3 border-t">
                        <div className="flex gap-3 items-center">
                            <User size={16} />
                            <Button variant="ghost" className="p-0">Profile</Button>
                        </div>

                        <div className="flex gap-3 items-center">
                            <Settings size={16} />
                            <Button variant="ghost" className="p-0">Setting</Button>
                        </div>
                    </div>

                    <div className="p-3 space-y-3 border-t">
                        <div className="flex gap-3 items-center cursor-pointer">
                            <LogOut size={16} />
                            <Button variant="ghost" className="p-0">Logout</Button>
                        </div>
                    </div>
                </div>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}


export default ProfileDropdown;