"use client"

import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"

// cn
import { cn } from "@merohms/lib"

// Radix Tooltip
const Tooltip = TooltipPrimitive.Root
const TooltipTrigger = TooltipPrimitive.Trigger
const TooltipProvider = TooltipPrimitive.Provider

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      "px-4 py-2 z-50 overflow-hidden rounded-lg bg-black text-xs text-white",
      className
    )}
    {...props}
  />
))
TooltipContent.displayName = TooltipPrimitive.Content.displayName

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
