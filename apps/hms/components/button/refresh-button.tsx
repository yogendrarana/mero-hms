"use client"

import React from 'react'
import { Button } from '@merohms/ui';
import { RotateCcw } from 'lucide-react'

const RefreshButton = () => {
    return (
        <Button
            size="icon"
            variant="outline"
            onClick={() => window.location.reload()}
            className="size-[var(--size-button)] flex items-center justify-center border rounded-md cursor-pointer bg-white hover:bg-gray-100"
        >
            <RotateCcw size={16} />
        </Button>
    )   
}

export default RefreshButton;