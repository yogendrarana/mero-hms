"use client";

import {
    Settings,
    Ellipsis,
    X,
    Info,
} from "lucide-react"
import { Button } from "@merohms/ui"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@merohms/ui"
import { useState } from "react";

const SettingDropdown = () => {
    const [open, setOpen] = useState(false);

    return (
        <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger asChild>
                <div className="px-3 py-2 flex gap-2 items-center border rounded-md cursor-pointer">
                    <Settings size={16} />
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[300px] bg-white">
                <div>
                    <div className="p-3 flex justify-between items-center">
                        <h1>Settings</h1>

                        <div className="ml-auto flex gap-1 items-center">
                            <Button variant="ghost" size="icon" className="p-2 hover:bg-gray-100">
                                <Ellipsis size={16} />
                            </Button>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="p-2 bg-gray-100"
                                onClick={() => setOpen(false)}
                            >
                                <X size={16} />
                            </Button>
                        </div>
                    </div>

                    {/* notification list */}
                    <div className="border-t">
                        <div className="p-3 space-y-3">
                            <div className="flex gap-2 items-center cursor-pointer">
                                <div className="size-8 rounded-full grid place-items-center">
                                    <Info size={16} />
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm ">Setting 1</p>
                                </div>
                            </div>
                            <div className="flex gap-2 items-center cursor-pointer">
                                <div className="size-8 rounded-full grid place-items-center">
                                    <Info size={16} />
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm ">Setting 2</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}


export default SettingDropdown;